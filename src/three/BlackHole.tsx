import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { PHASE, WORLD, ease, ramp } from "@/lib/journey";
import { journey } from "@/lib/journey-store";
import { NOISE } from "./glsl";
import { makeRandom } from "./random";

const HORIZON_RADIUS = 6;
const DISK_INNER = 6.7;
const DISK_OUTER = 34;

/** How present the black hole is, 0..1. */
function presence(progress: number) {
  const rise = ease(progress, PHASE.convergence.end - 0.06, PHASE.horizon.start + 0.1);
  const fall = ease(progress, PHASE.passage.start + 0.06, PHASE.passage.end);
  return rise * (1 - fall);
}

/* ---------------------------------------------------------------- horizon */

/** The event horizon: pure black, and the only thing that writes depth. */
function EventHorizon() {
  return (
    <mesh>
      <sphereGeometry args={[HORIZON_RADIUS, 48, 32]} />
      <meshBasicMaterial color="#000000" />
    </mesh>
  );
}

/* ------------------------------------------------------------------- disk */

const diskVertex = /* glsl */ `
  varying vec3 vLocal;
  void main() {
    vLocal = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const diskFragment = /* glsl */ `
  ${NOISE}
  uniform float uTime;
  uniform float uOpacity;
  uniform float uGain;
  uniform float uInner;
  uniform float uOuter;
  uniform float uSpin;
  uniform float uTint;
  varying vec3 vLocal;

  void main() {
    float radius = length(vLocal.xy);
    float t = clamp((radius - uInner) / (uOuter - uInner), 0.0, 1.0);
    float angle = atan(vLocal.y, vLocal.x);

    // Keplerian shear — the inner material orbits much faster than the rim.
    float shear = angle + uTime * uSpin * (0.9 / (0.22 + t * 1.7));

    float fine = fbm3(vec3(cos(shear) * 2.4, sin(shear) * 2.4, t * 4.2 + uTime * 0.04));
    float coarse = fbm3(vec3(cos(shear * 0.55) * 4.4, sin(shear * 0.55) * 4.4, t * 8.0));
    float filaments = 0.35 + fine * coarse * 3.4;

    float radial = smoothstep(0.0, 0.1, t) * (1.0 - smoothstep(0.42, 1.0, t));

    // Relativistic beaming: the approaching side of the disk is far brighter.
    float doppler = 0.42 + 0.58 * pow(0.5 + 0.5 * cos(angle - 2.4), 1.4);

    vec3 hot = vec3(1.0, 0.93, 0.8);
    vec3 amber = vec3(1.0, 0.58, 0.2);
    vec3 violet = vec3(0.52, 0.36, 1.0);
    vec3 blue = vec3(0.35, 0.62, 1.0);

    vec3 color = mix(violet, amber, 1.0 - smoothstep(0.05, 0.62, t));
    color = mix(color, blue, smoothstep(0.6, 1.0, t) * 0.7);
    color = mix(color, hot, 1.0 - smoothstep(0.0, 0.22, t));
    color += vec3(0.1, 0.22, 0.6) * (1.0 - t) * uTint;

    float alpha = radial * filaments * doppler * uOpacity * uGain;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;

function AccretionDisk() {
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uOpacity: { value: 0 },
      uGain: { value: 1 },
      uInner: { value: DISK_INNER },
      uOuter: { value: DISK_OUTER },
      uSpin: { value: 0.5 },
      uTint: { value: 1 },
    }),
    [],
  );

  const inner = useMemo(
    () => new THREE.RingGeometry(DISK_INNER, DISK_OUTER, 176, 4),
    [],
  );
  const upper = useMemo(
    () => new THREE.RingGeometry(DISK_INNER + 1, DISK_OUTER * 0.72, 128, 3),
    [],
  );
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms,
        vertexShader: diskVertex,
        fragmentShader: diskFragment,
        transparent: true,
        depthWrite: false,
        // The disk is deliberately not depth-tested: it must read as one
        // continuous ring, with the horizon's shadow punched through it by the
        // billboarded photon ring drawn on top.
        depthTest: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      }),
    [uniforms],
  );

  useFrame(() => {
    const progress = journey.progress;
    uniforms.uTime.value = journey.time;
    uniforms.uOpacity.value = presence(progress);
    uniforms.uGain.value =
      0.55 + ramp(progress, PHASE.horizon.start, PHASE.horizon.end) * 0.9;
  });

  return (
    <group>
      <mesh
        geometry={inner}
        material={material}
        rotation={[-Math.PI / 2 + 0.3, 0, 0.55]}
        scale={[1, 1, 0.94]}
        renderOrder={1}
      />
      <mesh
        geometry={upper}
        material={material}
        rotation={[-Math.PI / 2 + 0.62, 0, -0.4]}
        scale={[1, 1, 0.6]}
        renderOrder={1}
      />
    </group>
  );
}

/* ------------------------------------------------------------ photon ring */

const ringVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = position.xy * 2.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const ringFragment = /* glsl */ `
  uniform float uOpacity;
  uniform float uSize;
  varying vec2 vUv;

  void main() {
    float r = length(vUv);
    float band = smoothstep(0.055, 0.0, abs(r - 0.27));
    float bloom = exp(-pow(abs(r - 0.27) * 8.0, 2.0));

    // Light bent over the top and under the bottom of the shadow.
    float vertical = 0.42 + 0.58 * pow(clamp(abs(vUv.y) / max(r, 0.0001), 0.0, 1.0), 1.5);

    vec3 color = mix(vec3(1.0, 0.72, 0.34), vec3(1.0), band);
    color = mix(color, vec3(0.65, 0.78, 1.0), 1.0 - vertical);

    float alpha = (band * 1.15 + bloom * 0.55) * vertical * uOpacity;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;

function PhotonRing() {
  const mesh = useRef<THREE.Mesh>(null);
  const camera = useThree((state) => state.camera);
  const uniforms = useMemo(
    () => ({ uOpacity: { value: 0 }, uSize: { value: 64 } }),
    [],
  );

  useFrame(() => {
    uniforms.uOpacity.value = presence(journey.progress);
    mesh.current?.quaternion.copy(camera.quaternion);
  });

  return (
    <mesh ref={mesh} renderOrder={2}>
      <planeGeometry args={[64, 64]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={ringVertex}
        fragmentShader={ringFragment}
        transparent
        depthWrite={false}
        depthTest={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

/* -------------------------------------------------------------- asteroids */

function AsteroidBelt({ count }: { count: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const rocks = useMemo(() => {
    const rand = makeRandom(8123);
    return Array.from({ length: count }, () => ({
      radius: DISK_OUTER + 4 + rand() * 24,
      angle: rand() * Math.PI * 2,
      speed: 0.05 + rand() * 0.12,
      tilt: (rand() - 0.5) * 0.5,
      size: 0.35 + Math.pow(rand(), 2) * 1.5,
      spin: (rand() - 0.5) * 0.8,
      y: (rand() - 0.5) * 5,
    }));
  }, [count]);

  useFrame(() => {
    const instanced = mesh.current;
    if (!instanced) return;
    const opacity = presence(journey.progress);
    instanced.visible = opacity > 0.02;
    if (!instanced.visible) return;

    const time = journey.time;
    for (let i = 0; i < rocks.length; i++) {
      const rock = rocks[i];
      const angle = rock.angle + time * rock.speed;
      dummy.position.set(
        Math.cos(angle) * rock.radius,
        rock.y + Math.sin(angle * 1.7) * rock.tilt * 6,
        Math.sin(angle) * rock.radius,
      );
      dummy.rotation.set(time * rock.spin, angle * 2, angle * rock.spin);
      dummy.scale.setScalar(rock.size);
      dummy.updateMatrix();
      instanced.setMatrixAt(i, dummy.matrix);
    }
    instanced.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={mesh}
      args={[undefined, undefined, count]}
      frustumCulled={false}
    >
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#2a2a3c" />
    </instancedMesh>
  );
}

/* ------------------------------------------------------------------ group */

/**
 * The black hole.
 *
 * Everything that should only cost anything while it is on screen lives behind
 * one `visible` flag that the render loop toggles — no React re-render, no
 * geometry churn, no GPU work once the camera has fallen past it.
 */
export default function BlackHole({ quality }: { quality: number }) {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (group.current) group.current.visible = presence(journey.progress) > 0.01;
  });

  return (
    // Starts hidden so the singularity is never drawn before the render loop
    // has had a chance to place it.
    <group ref={group} position={WORLD.core} visible={false}>
      <EventHorizon />
      <AccretionDisk />
      <PhotonRing />
      <AsteroidBelt count={Math.max(28, Math.round(96 * quality))} />
    </group>
  );
}
