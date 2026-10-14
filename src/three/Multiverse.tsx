import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { PHASE, ease } from "@/lib/journey";
import { journey } from "@/lib/journey-store";
import { NOISE } from "./glsl";
import { makeRandom } from "./random";

/** Everything here only exists once the camera is through the black hole. */
function reveal(progress: number) {
  return ease(progress, PHASE.passage.end - 0.03, PHASE.multiverse.start + 0.12);
}

const GALAXY_CENTER: [number, number, number] = [4, -12, -1088];
const DEFAULT_LIGHT: [number, number, number] = [-0.55, 0.5, 0.66];

/* ----------------------------------------------------------------- planet */

const planetVertex = /* glsl */ `
  ${NOISE}
  uniform float uSeed;
  uniform float uRelief;
  varying vec3 vNormalW;
  varying vec3 vPosW;

  void main() {
    vec3 n = normalize(position);
    float relief = fbm3(n * 2.6 + uSeed);
    vec3 local = n * (1.0 + uRelief * (relief - 0.5))
      + n * uRelief * 0.45 * (fbm3(n * 6.0 + uSeed * 2.0) - 0.5);
    vec4 world = modelMatrix * vec4(local, 1.0);
    vNormalW = normalize(mat3(modelMatrix) * n);
    vPosW = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const planetFragment = /* glsl */ `
  ${NOISE}
  uniform float uSeed;
  uniform vec3 uOcean;
  uniform vec3 uLand;
  uniform vec3 uAtmo;
  uniform vec3 uLightDir;
  varying vec3 vNormalW;
  varying vec3 vPosW;

  void main() {
    vec3 n = normalize(vNormalW);
    float continents = fbm3(n * 2.3 + uSeed);
    float detail = fbm3(n * 6.5 + uSeed * 3.1);
    float land = smoothstep(0.49, 0.56, continents + detail * 0.1);

    vec3 albedo = mix(uOcean, uLand, land);
    albedo = mix(albedo, uLand * 1.35, smoothstep(0.6, 0.82, continents) * 0.7);

    float lambert = clamp(dot(n, normalize(uLightDir)), 0.0, 1.0);
    float lit = smoothstep(0.0, 0.38, lambert);
    vec3 color = albedo * (0.05 + 1.25 * lit);

    vec3 view = normalize(cameraPosition - vPosW);
    float rim = pow(1.0 - clamp(dot(n, view), 0.0, 1.0), 2.8);
    color += uAtmo * rim * (0.4 + lit * 0.9);

    gl_FragColor = vec4(color, 1.0);
  }
`;

const atmosphereVertex = /* glsl */ `
  varying vec3 vNormalW;
  varying vec3 vPosW;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vNormalW = normalize(mat3(modelMatrix) * normalize(position));
    vPosW = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const atmosphereFragment = /* glsl */ `
  uniform vec3 uAtmo;
  uniform float uFade;
  varying vec3 vNormalW;
  varying vec3 vPosW;

  void main() {
    vec3 n = normalize(vNormalW);
    vec3 view = normalize(cameraPosition - vPosW);
    float rim = pow(1.0 - abs(dot(n, view)), 3.2);
    float alpha = rim * uFade;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(uAtmo * alpha, alpha);
  }
`;

interface PlanetProps {
  position: [number, number, number];
  radius: number;
  ocean: string;
  land: string;
  atmosphere: string;
  seed: number;
  spin?: number;
  relief?: number;
}

/**
 * One world. The surface relief is real geometry (displaced in the vertex
 * shader), so the terminator and the atmosphere rim read correctly as it turns.
 * It grows into place instead of fading out of black — no black-disc frame.
 */
function Planet({
  position,
  radius,
  ocean,
  land,
  atmosphere,
  seed,
  spin = 0.05,
  relief = 0.05,
}: PlanetProps) {
  const group = useRef<THREE.Group>(null);
  const progress = useRef(0.001);

  const uniforms = useMemo(
    () => ({
      uSeed: { value: seed },
      uRelief: { value: relief },
      uOcean: { value: new THREE.Color(ocean) },
      uLand: { value: new THREE.Color(land) },
      uAtmo: { value: new THREE.Color(atmosphere) },
      uLightDir: { value: new THREE.Vector3(...DEFAULT_LIGHT).normalize() },
    }),
    [seed, relief, ocean, land, atmosphere],
  );

  const atmosphereUniforms = useMemo(
    () => ({
      uAtmo: { value: new THREE.Color(atmosphere) },
      uFade: { value: 0 },
    }),
    [atmosphere],
  );

  useFrame((_, delta) => {
    const target = reveal(journey.progress);
    progress.current += (target - progress.current) * Math.min(delta * 1.7, 1);
    atmosphereUniforms.uFade.value = progress.current * 0.9;
    const node = group.current;
    if (!node) return;
    node.visible = progress.current > 0.004;
    node.scale.setScalar(Math.max(progress.current, 0.004) * radius);
    node.rotation.y += delta * spin;
  });

  return (
    <group ref={group} position={position} scale={0.004}>
      <mesh>
        <sphereGeometry args={[1, 64, 44]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={planetVertex}
          fragmentShader={planetFragment}
        />
      </mesh>
      <mesh scale={1.045}>
        <sphereGeometry args={[1, 40, 28]} />
        <shaderMaterial
          uniforms={atmosphereUniforms}
          vertexShader={atmosphereVertex}
          fragmentShader={atmosphereFragment}
          transparent
          depthWrite={false}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

/* ----------------------------------------------------------------- galaxy */

const galaxyVertex = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uScale;

  attribute float aRadius;
  attribute float aAngle;
  attribute float aHeight;
  attribute float aTint;
  attribute float aSize;

  varying vec3 vColor;

  void main() {
    float r = aRadius;
    float angle = aAngle + r * 1.7 + uTime * (0.035 / (0.35 + r));

    vec3 spiral = vec3(
      cos(angle) * r * uScale,
      aHeight * uScale * (1.0 - r * 0.35),
      sin(angle) * r * uScale
    );

    vec4 mv = modelViewMatrix * vec4(position + spiral, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(aSize * uPixelRatio * (200.0 / max(-mv.z, 1.0)), 0.8, 9.0);

    vec3 core = vec3(1.0, 0.86, 0.62);
    vec3 arm = vec3(0.48, 0.62, 1.0);
    vec3 halo = vec3(0.62, 0.4, 1.0);
    vColor = mix(core, mix(arm, halo, aTint), smoothstep(0.0, 0.4, r));
  }
`;

const galaxyFragment = /* glsl */ `
  uniform float uOpacity;
  varying vec3 vColor;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float core = smoothstep(1.0, 0.0, d);
    float alpha = pow(core, 2.2) * uOpacity;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(vColor * alpha, alpha);
  }
`;

function Galaxy({ count }: { count: number }) {
  const geometry = useMemo(() => {
    const rand = makeRandom(2210);
    const position = new Float32Array(count * 3);
    const aRadius = new Float32Array(count);
    const aAngle = new Float32Array(count);
    const aHeight = new Float32Array(count);
    const aTint = new Float32Array(count);
    const aSize = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const arm = Math.floor(rand() * 2);
      const r = Math.pow(rand(), 0.65);
      position[i * 3] = GALAXY_CENTER[0];
      position[i * 3 + 1] = GALAXY_CENTER[1];
      position[i * 3 + 2] = GALAXY_CENTER[2];
      aRadius[i] = r;
      aAngle[i] = arm * Math.PI + (rand() - 0.5) * 0.95 + rand() * 0.4;
      aHeight[i] = (rand() - 0.5) * 0.5 * (1.0 - r * 0.5);
      aTint[i] = rand();
      aSize[i] = 1.1 + rand() * 2.6;
    }

    const built = new THREE.BufferGeometry();
    built.setAttribute("position", new THREE.BufferAttribute(position, 3));
    built.setAttribute("aRadius", new THREE.BufferAttribute(aRadius, 1));
    built.setAttribute("aAngle", new THREE.BufferAttribute(aAngle, 1));
    built.setAttribute("aHeight", new THREE.BufferAttribute(aHeight, 1));
    built.setAttribute("aTint", new THREE.BufferAttribute(aTint, 1));
    built.setAttribute("aSize", new THREE.BufferAttribute(aSize, 1));
    built.boundingSphere = new THREE.Sphere(
      new THREE.Vector3(...GALAXY_CENTER),
      700,
    );
    return built;
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: 1 },
      uScale: { value: 168 },
      uOpacity: { value: 0 },
    }),
    [],
  );

  useFrame(() => {
    uniforms.uTime.value = journey.time;
    uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio || 1, 1.5);
    uniforms.uOpacity.value =
      ease(journey.progress, PHASE.multiverse.start + 0.1, PHASE.multiverse.end) *
      0.95;
  });

  return (
    <points geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={galaxyVertex}
        fragmentShader={galaxyFragment}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ---------------------------------------------------------------- nebulae */

const nebulaVertex = /* glsl */ `
  uniform vec2 uSize;
  varying vec2 vUv;
  void main() {
    vUv = position.xy * 2.0 / uSize;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const nebulaFragment = /* glsl */ `
  ${NOISE}
  uniform float uTime;
  uniform float uSeed;
  uniform float uOpacity;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec2 vUv;

  void main() {
    float drift = uTime * 0.012;
    float n = fbm3(vec3(vUv * 1.7 + drift, uSeed));
    float detail = fbm3(vec3(vUv * 4.3 - drift, uSeed * 2.3));
    float mask = exp(-dot(vUv, vUv) * 1.9);
    float clouds = smoothstep(0.28, 0.86, n * 0.75 + detail * 0.5);
    float alpha = clouds * mask * uOpacity;
    if (alpha < 0.004) discard;
    vec3 color = mix(uColorA, uColorB, detail);
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;

interface NebulaProps {
  position: [number, number, number];
  size: [number, number];
  rotation: [number, number, number];
  colorA: string;
  colorB: string;
  seed: number;
  strength?: number;
}

function Nebula({
  position,
  size,
  rotation,
  colorA,
  colorB,
  seed,
  strength = 0.6,
}: NebulaProps) {
  const mesh = useRef<THREE.Mesh>(null);
  // Dependencies are primitives on purpose: the uniform objects must keep their
  // identity for the lifetime of the material, or the render loop would keep
  // writing into objects the GPU no longer reads.
  const width = size[0];
  const height = size[1];
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSeed: { value: seed },
      uOpacity: { value: 0 },
      uColorA: { value: new THREE.Color(colorA) },
      uColorB: { value: new THREE.Color(colorB) },
      uSize: { value: new THREE.Vector2(width, height) },
    }),
    [seed, colorA, colorB, width, height],
  );

  useFrame(() => {
    const target = reveal(journey.progress) * strength;
    uniforms.uTime.value = journey.time;
    uniforms.uOpacity.value = target;
    if (mesh.current) mesh.current.visible = target > 0.01;
  });

  return (
    <mesh ref={mesh} position={position} rotation={rotation}>
      <planeGeometry args={size} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={nebulaVertex}
        fragmentShader={nebulaFragment}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

/* ---------------------------------------------------------------- islands */

const ISLAND_COUNT = 9;

function CosmicIslands() {
  const group = useRef<THREE.Group>(null);
  const rand = useMemo(() => makeRandom(6161), []);
  const islands = useMemo(
    () =>
      Array.from({ length: ISLAND_COUNT }, () => {
        const hue = rand();
        return {
          position: [
            (rand() - 0.5) * 96,
            (rand() - 0.5) * 54,
            -600 - rand() * 340,
          ] as [number, number, number],
          rotation: [rand() * 0.5, rand() * Math.PI * 2, rand() * 0.35] as [
            number,
            number,
            number,
          ],
          size: 5 + rand() * 11,
          spin: (rand() - 0.5) * 0.22,
          bob: rand() * Math.PI * 2,
          color: new THREE.Color().setHSL(
            0.55 + hue * 0.22,
            0.5,
            0.28 + rand() * 0.12,
          ),
          edge: new THREE.Color().setHSL(0.06 + hue * 0.14, 0.75, 0.7),
        };
      }),
    [rand],
  );

  useFrame((_, delta) => {
    const node = group.current;
    if (!node) return;
    const target = reveal(journey.progress);
    node.visible = target > 0.01;
    if (!node.visible) return;
    const time = journey.time;
    node.children.forEach((child, index) => {
      const config = islands[index];
      if (!config) return;
      child.rotation.y += delta * config.spin;
      child.position.y =
        config.position[1] + Math.sin(time * 0.16 + config.bob) * 2.6;
    });
  });

  return (
    <group ref={group} visible={false}>
      {islands.map((island, index) => (
        <group
          key={index}
          position={island.position}
          rotation={island.rotation}
          scale={[island.size, island.size * 0.4, island.size]}
        >
          <mesh>
            <icosahedronGeometry args={[1, 1]} />
            <meshBasicMaterial color={island.color} />
          </mesh>
          <mesh scale={1.02}>
            <icosahedronGeometry args={[1, 1]} />
            <meshBasicMaterial
              color={island.edge}
              wireframe
              transparent
              opacity={0.4}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* --------------------------------------------------------------- portals */

const portalVertex = /* glsl */ `
  uniform float uRadius;
  varying vec2 vUv;
  void main() {
    vUv = position.xy / uRadius;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const portalFragment = /* glsl */ `
  ${NOISE}
  uniform float uTime;
  uniform float uOpacity;
  uniform float uStyle;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec2 vUv;

  void main() {
    float r = length(vUv);
    float angle = atan(vUv.y, vUv.x);
    float swirl = fbm3(vec3(
      cos(angle + r * 3.4 - uTime * 0.22) * 2.2,
      sin(angle + r * 3.4 - uTime * 0.22) * 2.2,
      r * 3.2
    ));

    // Each portal holds a different kind of place, not just a different tint.
    float pattern;
    if (uStyle < 0.5) {
      // A city of lights: filaments running along a spiral.
      float streets = sin(angle * 3.0 + r * 9.0 - uTime * 0.35);
      pattern = smoothstep(0.3, 1.0, streets) * (0.55 + 0.45 * sin(r * 22.0));
    } else if (uStyle < 1.5) {
      // A banded world seen from above: concentric weather.
      pattern = smoothstep(0.2, 0.95, sin(r * 15.0 - uTime * 0.45) * 0.5 + 0.5);
      pattern *= 0.5 + 0.5 * swirl;
    } else if (uStyle < 2.5) {
      // A nebula: pure cloud.
      pattern = smoothstep(0.3, 0.85, swirl * 1.35);
    } else {
      // A cavern of light: rays from the centre.
      float rays = sin(angle * 12.0 + uTime * 0.18) * 0.5 + 0.5;
      pattern = smoothstep(0.15, 1.0, rays) * (1.0 - r * 0.45);
    }

    float mask = smoothstep(1.05, 0.1, r);
    float edge = smoothstep(0.7, 0.99, r) * 1.35;
    float alpha = (mask * (0.22 + pattern * 0.95) + edge) * uOpacity;
    if (alpha < 0.004) discard;
    vec3 color = mix(uColorA, uColorB, pattern);
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;

interface PortalProps {
  position: [number, number, number];
  radius: number;
  colorA: string;
  colorB: string;
  tilt?: number;
  /** 0 city, 1 banded world, 2 nebula, 3 cavern of light. */
  style: number;
}

function Portal({
  position,
  radius,
  colorA,
  colorB,
  tilt = 0,
  style,
}: PortalProps) {
  const node = useRef<THREE.Group>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uOpacity: { value: 0 },
      uStyle: { value: style },
      uColorA: { value: new THREE.Color(colorA) },
      uColorB: { value: new THREE.Color(colorB) },
      uRadius: { value: radius },
    }),
    [colorA, colorB, radius, style],
  );

  useFrame((_, delta) => {
    const target = reveal(journey.progress);
    uniforms.uTime.value = journey.time;
    uniforms.uOpacity.value = target * 0.95;
    if (!node.current) return;
    node.current.visible = target > 0.01;
    node.current.children[1].rotation.z += delta * 0.12;
  });

  return (
    <group ref={node} position={position} rotation={[0, tilt, 0]}>
      <mesh>
        <circleGeometry args={[radius, 48]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={portalVertex}
          fragmentShader={portalFragment}
          transparent
          depthWrite={false}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh>
        <torusGeometry args={[radius, radius * 0.035, 8, 64]} />
        <meshBasicMaterial
          color={colorB}
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------- rock ring */

function RockRing({
  center,
  radius,
  count,
  tilt = 0.32,
}: {
  center: [number, number, number];
  radius: number;
  count: number;
  tilt?: number;
}) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const rocks = useMemo(() => {
    const rand = makeRandom(7788);
    return Array.from({ length: count }, () => ({
      angle: rand() * Math.PI * 2,
      band: radius * (0.78 + rand() * 0.42),
      y: (rand() - 0.5) * radius * 0.06,
      size: radius * (0.012 + rand() * 0.024),
      speed: 0.03 + rand() * 0.05,
      spin: rand() * 2,
    }));
  }, [count, radius]);

  useFrame(() => {
    const instanced = mesh.current;
    if (!instanced) return;
    const target = reveal(journey.progress);
    instanced.visible = target > 0.01;
    if (!instanced.visible) return;
    const time = journey.time;
    for (let i = 0; i < rocks.length; i++) {
      const rock = rocks[i];
      const angle = rock.angle + time * rock.speed;
      dummy.position.set(
        center[0] + Math.cos(angle) * rock.band,
        center[1] + rock.y + Math.sin(angle) * rock.band * tilt,
        center[2] + Math.sin(angle) * rock.band * 0.35,
      );
      dummy.rotation.set(time * rock.spin, angle * 2, 0);
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
      visible={false}
      frustumCulled={false}
    >
      <dodecahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#232741" />
    </instancedMesh>
  );
}

/* ------------------------------------------------------------------ group */

/**
 * The universe on the far side of the black hole: worlds with real relief and
 * atmospheres, a spiral galaxy, nebulae, drifting islands, portals and rings of
 * rock. Every piece appears only when the camera is close enough to see it.
 */
export default function Multiverse({ quality }: { quality: number }) {
  return (
    <group>
      <Planet
        position={[-26, 5, -565]}
        radius={14}
        ocean="#14295c"
        land="#2f6b4f"
        atmosphere="#5fa4ff"
        seed={1.3}
        relief={0.055}
        spin={0.04}
      />
      <Planet
        position={[30, -9, -662]}
        radius={10}
        ocean="#43204a"
        land="#a26b32"
        atmosphere="#ff9a4d"
        seed={4.7}
        relief={0.04}
        spin={0.06}
      />
      <Planet
        position={[-34, 17, -802]}
        radius={19}
        ocean="#101f45"
        land="#2b4d8a"
        atmosphere="#a96bff"
        seed={8.1}
        relief={0.07}
        spin={0.03}
      />
      <Planet
        position={[24, 11, -952]}
        radius={8.5}
        ocean="#2a1a48"
        land="#7f5cc4"
        atmosphere="#7fb6ff"
        seed={2.2}
        relief={0.05}
        spin={0.08}
      />
      <RockRing
        center={[24, 11, -952]}
        radius={20}
        count={Math.max(24, Math.round(70 * quality))}
      />

      <Galaxy count={Math.max(900, Math.round(3200 * quality))} />

      <Nebula
        position={[-84, 24, -700]}
        size={[230, 170]}
        rotation={[0.1, 0.5, 0.2]}
        colorA="#3d3aff"
        colorB="#a96bff"
        seed={1.1}
      />
      <Nebula
        position={[76, -28, -880]}
        size={[280, 200]}
        rotation={[-0.15, -0.4, 0.1]}
        colorA="#1f6bff"
        colorB="#ff9a4d"
        seed={3.4}
        strength={0.5}
      />
      <Nebula
        position={[-30, 34, -1010]}
        size={[340, 230]}
        rotation={[0.2, 0.2, -0.12]}
        colorA="#7a3cff"
        colorB="#ffc07a"
        seed={6.2}
        strength={0.45}
      />

      <CosmicIslands />

      <Portal
        position={[-30, -16, -612]}
        radius={13}
        colorA="#2f6bff"
        colorB="#8fd0ff"
        tilt={-0.35}
        style={0}
      />
      <Portal
        position={[32, 20, -720]}
        radius={10}
        colorA="#ff7a2f"
        colorB="#ffd9a0"
        tilt={0.4}
        style={1}
      />
      <Portal
        position={[-14, 26, -876]}
        radius={16}
        colorA="#8a3cff"
        colorB="#d5a6ff"
        tilt={-0.2}
        style={2}
      />
      <Portal
        position={[28, -22, -1004]}
        radius={12}
        colorA="#12b5a6"
        colorB="#9ff5e6"
        tilt={0.25}
        style={3}
      />
    </group>
  );
}
