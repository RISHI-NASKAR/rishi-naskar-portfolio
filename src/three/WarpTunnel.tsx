import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { PHASE, WORLD, bell } from "@/lib/journey";
import { journey } from "@/lib/journey-store";
import { makeRandom } from "./random";

const STREAKS = 520;
const LENGTH = Math.abs(WORLD.tunnelEnd - WORLD.tunnelStart);

const streakVertex = /* glsl */ `
  uniform float uTime;
  uniform float uSpeed;
  uniform float uLength;
  uniform float uStart;
  uniform float uStretch;
  uniform float uExpand;
  uniform float uSwirl;

  attribute float aLen;
  attribute float aT;
  attribute float aSeed;

  varying float vAlpha;
  varying float vT;

  void main() {
    float speed = uSpeed * (0.45 + aSeed);
    float base = max(position.z - uStart, 0.0);
    float z = uStart - mod(base - uTime * speed, uLength);

    // The cylinder twists as the camera falls, dragging light with it.
    float angle =
      aSeed * 6.2831853 + z * 0.02 + uTime * uSwirl * (0.3 + aSeed * 0.7);
    float radius = length(position.xy) * uExpand;

    vec3 p = vec3(cos(angle) * radius, sin(angle) * radius, z);
    p.z -= aT * aLen * (1.0 + uStretch * 9.0);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    float dist = abs(mv.z);
    vAlpha =
      smoothstep(0.7, 5.0, dist) * (1.0 - smoothstep(uLength * 0.5, uLength, dist));
    vT = aT;
  }
`;

const streakFragment = /* glsl */ `
  uniform float uOpacity;
  uniform vec3 uColor;

  varying float vAlpha;
  varying float vT;

  void main() {
    float alpha = uOpacity * vAlpha * mix(0.95, 0.12, vT);
    if (alpha < 0.004) discard;
    vec3 color = mix(vec3(1.0), uColor, vT * 0.85);
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;

function buildStreaks(count: number) {
  const rand = makeRandom(3391);
  const position = new Float32Array(count * 2 * 3);
  const aLen = new Float32Array(count * 2);
  const aT = new Float32Array(count * 2);
  const aSeed = new Float32Array(count * 2);

  let vertex = 0;
  for (let i = 0; i < count; i++) {
    const radius = 2.4 + Math.pow(rand(), 1.6) * 13;
    const angle = rand() * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const z = WORLD.tunnelStart - Math.abs(rand() * LENGTH);
    const len = 2.5 + rand() * 13;
    const seed = rand();

    for (let k = 0; k < 2; k++) {
      const o = vertex * 3;
      position[o] = x;
      position[o + 1] = y;
      position[o + 2] = z;
      aLen[vertex] = len;
      aT[vertex] = k;
      aSeed[vertex] = seed;
      vertex++;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(position, 3));
  geometry.setAttribute("aLen", new THREE.BufferAttribute(aLen, 1));
  geometry.setAttribute("aT", new THREE.BufferAttribute(aT, 1));
  geometry.setAttribute("aSeed", new THREE.BufferAttribute(aSeed, 1));
  geometry.boundingSphere = new THREE.Sphere(
    new THREE.Vector3(0, 0, (WORLD.tunnelStart + WORLD.tunnelEnd) / 2),
    LENGTH,
  );
  return geometry;
}

/** The flash that swallows the frame at the moment of crossing. */
function PassageFlash() {
  const mesh = useRef<THREE.Mesh>(null);
  const camera = useThree((state) => state.camera);

  const uniforms = useMemo(
    () => ({
      uOpacity: { value: 0 },
      uColorA: { value: new THREE.Color("#ffffff") },
      uColorB: { value: new THREE.Color("#ffd9a0") },
    }),
    [],
  );

  useFrame(() => {
    const progress = journey.progress;
    uniforms.uOpacity.value = bell(
      progress,
      PHASE.passage.start - 0.04,
      PHASE.passage.start + 0.16,
      0.06,
      0.1,
    );
    const scale = 40 + uniforms.uOpacity.value * 420;
    if (mesh.current) {
      mesh.current.quaternion.copy(camera.quaternion);
      mesh.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -262]} renderOrder={3}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={/* glsl */ `
          varying vec2 vUv;
          void main() {
            vUv = position.xy * 2.0;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={/* glsl */ `
          uniform float uOpacity;
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          varying vec2 vUv;
          void main() {
            float r = length(vUv);
            float core = exp(-r * r * 4.5);
            float full = smoothstep(1.35, 0.35, r);
            vec3 color = mix(uColorB, uColorA, core);
            float alpha = (core * 0.9 + full * 0.85) * uOpacity;
            if (alpha < 0.004) discard;
            gl_FragColor = vec4(color * alpha, alpha);
          }
        `}
        transparent
        depthWrite={false}
        depthTest={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

/**
 * The passage: a tunnel of light the camera physically travels through.
 *
 * Streaks live in world space between the horizon and the far side, so the
 * transit is real geometry passing the camera rather than a screen effect.
 */
export default function WarpTunnel({ quality }: { quality: number }) {
  const count = Math.max(140, Math.round(STREAKS * quality));
  const geometry = useMemo(() => buildStreaks(count), [count]);
  const group = useRef<THREE.Group>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSpeed: { value: 34 },
      uLength: { value: LENGTH },
      uStart: { value: WORLD.tunnelStart },
      uStretch: { value: 0 },
      uExpand: { value: 1 },
      uSwirl: { value: 0.55 },
      uOpacity: { value: 0 },
      uColor: { value: new THREE.Color("#bcd8ff") },
    }),
    [],
  );

  useFrame(() => {
    const progress = journey.progress;
    uniforms.uTime.value = journey.time;

    const active = bell(
      progress,
      PHASE.passage.start - 0.02,
      PHASE.passage.end + 0.02,
      0.05,
      0.05,
    );
    uniforms.uOpacity.value = active;
    uniforms.uStretch.value = active;
    uniforms.uExpand.value = 1 + active * 0.45;
    if (group.current) group.current.visible = active > 0.01;
  });

  return (
    <group ref={group} visible={false}>
      <lineSegments geometry={geometry} frustumCulled={false}>
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={streakVertex}
          fragmentShader={streakFragment}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
      <PassageFlash />
    </group>
  );
}
