import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { WORLD, ease, ramp } from "@/lib/journey";
import { journey } from "@/lib/journey-store";
import { NOISE } from "./glsl";
import { makeRandom, randomUnitVector } from "./random";

const PORTRAIT_SRC = "/portrait.png";
/** Plane height in world units — width follows the image's own aspect ratio. */
const PLANE_HEIGHT = 5.1;

/**
 * Loads the real portrait without suspending. A missing file degrades to the
 * procedural mind core, so the hero is never broken.
 */
function usePortraitTexture() {
  const [state, setState] = useState<{
    texture: THREE.Texture | null;
    aspect: number;
  }>({ texture: null, aspect: 1 });

  useEffect(() => {
    let cancelled = false;
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      if (cancelled) return;
      const loaded = new THREE.Texture(image);
      loaded.colorSpace = THREE.SRGBColorSpace;
      loaded.needsUpdate = true;
      setState({
        texture: loaded,
        aspect:
          image.naturalHeight > 0
            ? image.naturalWidth / image.naturalHeight
            : 1,
      });
    };
    image.onerror = () => {
      // No portrait on disk yet — the procedural mind core stands in.
      if (!cancelled) setState({ texture: null, aspect: 1 });
    };
    image.src = PORTRAIT_SRC;
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(
    () => () => {
      state.texture?.dispose();
    },
    [state.texture],
  );

  return state;
}

/* ------------------------------------------------------------------- aura */

const auraVertex = /* glsl */ `
  uniform float uSize;
  varying vec2 vUv;
  void main() {
    vUv = position.xy * 2.0 / uSize;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const auraFragment = /* glsl */ `
  ${NOISE}
  uniform float uTime;
  uniform float uOpacity;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec2 vUv;

  void main() {
    float r = length(vUv);
    float aura = exp(-r * r * 3.1);
    float flicker = 0.86 + 0.14 * fbm3(vec3(vUv * 3.0, uTime * 0.12));
    vec3 color = mix(uColorA, uColorB, smoothstep(0.0, 1.1, r));
    float alpha = aura * flicker * uOpacity;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;

/* ------------------------------------------------------------------ photo */

const photoVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

/**
 * The photo itself, only *lit* — a cool key from the upper left and a warm
 * stellar kicker from the lower right, both gentle enough that skin tone,
 * features and hair stay exactly as photographed.
 */
const photoFragment = /* glsl */ `
  uniform sampler2D uMap;
  uniform float uOpacity;
  uniform vec3 uCool;
  uniform vec3 uWarm;
  varying vec2 vUv;

  void main() {
    vec4 tex = texture2D(uMap, vUv);
    if (tex.a < 0.004) discard;

    float key = smoothstep(0.05, 1.15, vUv.y * 0.8 + (1.0 - vUv.x) * 0.55);
    float kicker = smoothstep(0.35, 1.1, vUv.x * 0.7 + (1.0 - vUv.y) * 0.55);

    vec3 col = tex.rgb;
    col *= 0.84 + 0.32 * key;
    col += uCool * key * 0.11;
    col = mix(col, col * uWarm * 1.06, kicker * 0.35);

    gl_FragColor = vec4(col, tex.a) * uOpacity;
  }
`;

/**
 * Cinematic rim light: an additive halo traced from the alpha silhouette, so it
 * wraps the head and shoulders from behind without ever touching the face.
 */
const rimFragment = /* glsl */ `
  ${NOISE}
  uniform sampler2D uMap;
  uniform vec2 uTexel;
  uniform float uTime;
  uniform float uOpacity;
  uniform vec3 uCool;
  uniform vec3 uWarm;
  varying vec2 vUv;

  void main() {
    float o = 3.5;
    vec2 t = uTexel * o;
    float n = 0.0;
    n += texture2D(uMap, vUv + vec2( t.x,  0.0)).a;
    n += texture2D(uMap, vUv + vec2(-t.x,  0.0)).a;
    n += texture2D(uMap, vUv + vec2( 0.0,  t.y)).a;
    n += texture2D(uMap, vUv + vec2( 0.0, -t.y)).a;
    n += texture2D(uMap, vUv + vec2( t.x,  t.y)).a;
    n += texture2D(uMap, vUv + vec2(-t.x,  t.y)).a;
    n += texture2D(uMap, vUv + vec2( t.x, -t.y)).a;
    n += texture2D(uMap, vUv + vec2(-t.x, -t.y)).a;
    n *= 0.125;

    float rim = clamp(n - texture2D(uMap, vUv).a, 0.0, 1.0);
    if (rim < 0.004) discard;

    float breathe = 0.72 + 0.28 * sin(uTime * 0.7 + vUv.y * 2.4);
    float side = smoothstep(0.05, 1.0, vUv.x * 0.8 + vUv.y * 0.35);
    vec3 color = mix(uWarm, uCool, side);
    color += vec3(1.0) * 0.18 * smoothstep(0.4, 1.0, rim);

    float alpha = rim * breathe * uOpacity;
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;

/* --------------------------------------------------------- mind core (no photo) */

/** Volumetric stand-in: two counter-rotating shells of light, never a wireframe. */
function MindCore() {
  const outer = useRef<THREE.Points>(null);
  const inner = useRef<THREE.Points>(null);

  const shells = useMemo(() => {
    const rand = makeRandom(60417);
    const build = (count: number, radius: number, spread: number) => {
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const cool = new THREE.Color("#8ec2ff");
      const warm = new THREE.Color("#ffc48a");
      const violet = new THREE.Color("#b489ff");
      for (let i = 0; i < count; i++) {
        const dir = randomUnitVector(rand);
        const r = radius + (rand() - 0.5) * spread;
        positions[i * 3] = dir[0] * r;
        positions[i * 3 + 1] = dir[1] * r;
        positions[i * 3 + 2] = dir[2] * r;
        const pick = rand();
        const c = pick < 0.62 ? cool : pick < 0.86 ? violet : warm;
        const gain = 0.55 + rand() * 0.45;
        colors[i * 3] = c.r * gain;
        colors[i * 3 + 1] = c.g * gain;
        colors[i * 3 + 2] = c.b * gain;
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), radius + spread);
      return geometry;
    };
    return {
      outer: build(560, 1.62, 0.75),
      inner: build(260, 1.0, 0.5),
    };
  }, []);

  useFrame(() => {
    const t = journey.time;
    if (outer.current) {
      outer.current.rotation.y = t * 0.11;
      outer.current.rotation.x = Math.sin(t * 0.14) * 0.22;
    }
    if (inner.current) {
      inner.current.rotation.y = -t * 0.19;
      inner.current.rotation.z = t * 0.07;
    }
  });

  return (
    <group>
      <points ref={outer} geometry={shells.outer}>
        <pointsMaterial
          size={0.055}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.9}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <points ref={inner} geometry={shells.inner}>
        <pointsMaterial
          size={0.04}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.75}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      {/* dark nucleus so the shells read as depth, not a flat disc */}
      <mesh>
        <sphereGeometry args={[0.78, 32, 24]} />
        <meshBasicMaterial color="#04060f" />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------------ group */

/**
 * The starting point: the real portrait standing in deep black behind a cool
 * aura, lit with a cinematic key and rim, drifting a few centimetres with the
 * cursor while the neural filaments grow out of the crown of the head.
 */
export default function MindPortrait() {
  const { texture, aspect } = usePortraitTexture();
  const camera = useThree((state) => state.camera);
  const aura = useRef<THREE.Mesh>(null);
  const root = useRef<THREE.Group>(null);

  const auraUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uOpacity: { value: 0.55 },
      uSize: { value: 13 },
      uColorA: { value: new THREE.Color("#7fb4ff") },
      uColorB: { value: new THREE.Color("#a366ff") },
    }),
    [],
  );

  const photoUniforms = useMemo(
    () => ({
      uMap: { value: texture },
      uOpacity: { value: 1 },
      uCool: { value: new THREE.Color("#8fc4ff") },
      uWarm: { value: new THREE.Color("#ffcf9a") },
    }),
    [texture],
  );

  const rimUniforms = useMemo(
    () => ({
      uMap: { value: texture },
      uTexel: { value: new THREE.Vector2(1 / 1024, 1 / 1024) },
      uTime: { value: 0 },
      uOpacity: { value: 0.85 },
      uCool: { value: new THREE.Color("#6fb6ff") },
      uWarm: { value: new THREE.Color("#ff9f5a") },
    }),
    [texture],
  );

  // Keep the photograph's own proportions whatever file is dropped in: the
  // rim shader works in texels, so it needs the real image dimensions.
  useEffect(() => {
    if (!texture) return;
    const image = texture.image as { width?: number; height?: number };
    const w = image?.width ?? 1024;
    const h = image?.height ?? 1024;
    rimUniforms.uTexel.value.set(1 / Math.max(w, 1), 1 / Math.max(h, 1));
  }, [texture, rimUniforms]);

  const width = PLANE_HEIGHT * Math.max(0.4, Math.min(aspect, 2.4));

  useFrame(() => {
    const progress = journey.progress;
    const t = journey.time;

    auraUniforms.uTime.value = t;
    // The aura flares while the filaments gather, then leaves with the head.
    auraUniforms.uOpacity.value =
      0.5 + ramp(progress, 0, 0.12) * 0.65 * (1 - ease(progress, 0.06, 0.16));
    aura.current?.quaternion.copy(camera.quaternion);

    photoUniforms.uOpacity.value = 1 - ease(progress, 0.02, 0.14);
    rimUniforms.uTime.value = t;
    rimUniforms.uOpacity.value =
      0.55 + 0.35 * (1 - ease(progress, 0.04, 0.16));

    // Restrained parallax: the portrait leans a few centimetres with the
    // cursor, never enough to drift out of the title composition.
    const node = root.current;
    if (node) {
      const active = journey.pointerActive && !journey.reduced ? 1 : 0;
      node.position.x =
        WORLD.portrait[0] + journey.pointerX * 0.22 * active;
      node.position.y =
        WORLD.portrait[1] + -journey.pointerY * 0.13 * active;
      node.position.z = WORLD.portrait[2];
      node.rotation.y = journey.pointerX * 0.05 * active;
      node.visible = photoUniforms.uOpacity.value > 0.01 || !texture;
    }
  });

  return (
    <group ref={root} position={WORLD.portrait}>
      {/* aura */}
      <mesh ref={aura} position={[0, 0.2, -0.6]}>
        <planeGeometry args={[13, 13]} />
        <shaderMaterial
          uniforms={auraUniforms}
          vertexShader={auraVertex}
          fragmentShader={auraFragment}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {texture ? (
        <group>
          {/* the photograph, lit */}
          <mesh>
            <planeGeometry args={[width, PLANE_HEIGHT]} />
            <shaderMaterial
              uniforms={photoUniforms}
              vertexShader={photoVertex}
              fragmentShader={photoFragment}
              transparent
              depthWrite={false}
            />
          </mesh>
          {/* rim light traced from the silhouette */}
          <mesh position={[0, 0, 0.012]}>
            <planeGeometry args={[width, PLANE_HEIGHT]} />
            <shaderMaterial
              uniforms={rimUniforms}
              vertexShader={photoVertex}
              fragmentShader={rimFragment}
              transparent
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </group>
      ) : (
        <MindCore />
      )}
    </group>
  );
}
