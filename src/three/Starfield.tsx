import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { PHASE, WORLD, bell, ease, ramp } from "@/lib/journey";
import { journey } from "@/lib/journey-store";
import { makeRandom } from "./random";

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform vec2 uLensCenter;
  uniform float uLens;
  uniform float uWarp;
  uniform vec2 uPointer;
  uniform float uPull;

  attribute float aSize;
  attribute float aSeed;
  attribute float aTint;

  varying vec3 vColor;
  varying float vBright;

  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;

    // Gravitational lensing: the star's screen position is pushed away from the
    // singularity, which is what bends a background sky into a ring.
    if (gl_Position.w > 0.0 && uLens > 0.001) {
      vec2 ndc = gl_Position.xy / gl_Position.w;
      vec2 d = ndc - uLensCenter;
      float r = max(length(d), 0.0006);
      float amount = min(uLens / (r * r * 24.0 + 0.32), 0.9);
      gl_Position.xy += normalize(d) * amount * gl_Position.w;
    }

    // The cursor carries a small gravity well of its own: nearby stars lean
    // toward it and let go as it passes — restrained, never a swirl.
    if (gl_Position.w > 0.0 && uPull > 0.0001) {
      vec2 ndc = gl_Position.xy / gl_Position.w;
      vec2 d = uPointer - ndc;
      float r = max(length(d), 0.0008);
      float amount = min(uPull / (r * 6.0 + 1.0), 0.05);
      gl_Position.xy += (d / r) * amount * gl_Position.w;
    }

    // Warp: the whole sky stretches radially while falling through.
    if (gl_Position.w > 0.0 && uWarp > 0.001) {
      vec2 ndc = gl_Position.xy / gl_Position.w;
      float r = length(ndc);
      gl_Position.xy += ndc * uWarp * (0.22 + r * r) * gl_Position.w;
    }

    vec3 cold = vec3(0.60, 0.76, 1.0);
    vec3 warm = vec3(1.0, 0.80, 0.55);
    vColor = mix(mix(cold, vec3(1.0), 0.45), warm, aTint);

    float twinkle = 0.74 + 0.26 * sin(uTime * (0.7 + aSeed * 2.6) + aSeed * 41.0);
    float dist = max(-mv.z, 0.7);
    gl_PointSize = clamp(aSize * uPixelRatio * (160.0 / dist), 0.8, 18.0);
    vBright = twinkle;
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uOpacity;

  varying vec3 vColor;
  varying float vBright;

  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float core = smoothstep(1.0, 0.0, d);
    float alpha = pow(core, 2.6) * vBright * uOpacity;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(vColor * alpha, alpha);
  }
`;

function buildStars(count: number) {
  const rand = makeRandom(4711);
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const seeds = new Float32Array(count);
  const tints = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const angle = rand() * Math.PI * 2;
    const radius = 16 + Math.pow(rand(), 2.3) * 470;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = Math.sin(angle) * radius * 0.72;
    positions[i * 3 + 2] = 130 - rand() * 1660;

    sizes[i] = 1.05 + Math.pow(rand(), 2.1) * 3.8;
    seeds[i] = rand();
    tints[i] = rand() < 0.14 ? 0.55 + rand() * 0.45 : rand() * 0.12;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
  geometry.setAttribute("aTint", new THREE.BufferAttribute(tints, 1));
  // The field never needs frustum culling: it always surrounds the camera.
  geometry.boundingSphere = new THREE.Sphere(
    new THREE.Vector3(0, 0, -700),
    2200,
  );
  return geometry;
}

/**
 * The sky.
 *
 * One additive point cloud carrying the whole background for every phase. The
 * lensing and warp displacements happen in the vertex shader, so the black hole
 * bends a real starfield rather than faking it with a sprite.
 */
export default function Starfield({ count }: { count: number }) {
  const geometry = useMemo(() => buildStars(count), [count]);
  const material = useRef<THREE.ShaderMaterial>(null);
  const camera = useThree((state) => state.camera);
  const hole = useMemo(() => new THREE.Vector3(...WORLD.core), []);
  const projected = useMemo(() => new THREE.Vector3(), []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: 1 },
      uLensCenter: { value: new THREE.Vector2(0, 0) },
      uLens: { value: 0 },
      uWarp: { value: 0 },
      uPointer: { value: new THREE.Vector2(0, 0) },
      uPull: { value: 0 },
      uOpacity: { value: 0.9 },
    }),
    [],
  );

  useFrame(() => {
    const progress = journey.progress;
    uniforms.uTime.value = journey.time;
    uniforms.uPixelRatio.value = Math.min(
      window.devicePixelRatio || 1,
      journey.quality > 0.6 ? 1.5 : 1,
    );

    if (holesVisible(progress)) {
      projected.copy(hole).project(camera);
      uniforms.uLensCenter.value.set(projected.x, projected.y);
    }
    uniforms.uLens.value = lensStrength(progress);
    uniforms.uWarp.value = warpStrength(progress);

    // Pointer gravity: only for a live pointer, never under reduced motion,
    // and faded while the real singularity is doing the bending.
    const pointerWell = journey.pointerActive && !journey.reduced ? 0.034 : 0;
    uniforms.uPull.value = pointerWell * (1 - uniforms.uLens.value * 0.6);
    uniforms.uPointer.value.set(journey.pointerX, -journey.pointerY);
  });

  return (
    <points geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function holesVisible(progress: number) {
  return (
    progress > PHASE.horizon.start - 0.08 &&
    progress < PHASE.passage.end + 0.12
  );
}

function lensStrength(progress: number) {
  const build = ease(progress, PHASE.horizon.start - 0.02, PHASE.horizon.start + 0.14);
  const release = ease(progress, PHASE.passage.end - 0.02, PHASE.passage.end + 0.14);
  const near = ramp(progress, PHASE.horizon.start, PHASE.horizon.end);
  return build * (1 - release) * (0.12 + near * 0.5);
}

function warpStrength(progress: number) {
  return (
    bell(progress, PHASE.passage.start - 0.02, PHASE.passage.end + 0.03, 0.05, 0.04) *
    1.35
  );
}
