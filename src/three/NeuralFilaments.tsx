import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";
import { WORLD, at, clamp01, ease, ramp } from "@/lib/journey";
import { journey } from "@/lib/journey-store";
import { UNIVERSES } from "@/lib/projects";
import { makeRandom, randomInSphere, randomUnitVector } from "./random";

/** Wire palette when no single universe is selected. */
const NEUTRAL_WIRE: [string, string] = ["#6a4bff", "#9f7bff"];

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uBlend;
  uniform float uFlowLength;
  uniform vec3 uDrift;
  uniform float uNear;
  uniform float uFar;

  attribute vec3 aEnd;
  attribute vec3 aDir;
  attribute float aBend;
  attribute float aT;
  attribute float aSeed;

  varying float vT;
  varying float vGlow;
  varying float vFade;

  void main() {
    float t = aT;
    float PI = 3.14159265;

    // Every strand runs at its own speed — nothing here is in lockstep.
    float pace = 0.5 + aSeed * 1.35;
    vec3 alive = aDir * (0.44 * sin(uTime * 0.55 * pace + aSeed * 31.0 + t * 4.2));

    // Lateral excursion: the fan out of the head, plus the bundle's drift.
    vec2 lateral = aDir.xy * (aBend * sin(t * PI))
                 + uDrift.xy * smoothstep(0.0, 0.36, t);

    // Twist + orbit: the excursion rotates around the corridor's axis, the
    // rotation accumulating along the strand (a helix) and turning over time
    // (an orbit), harder as the convergence takes hold.
    float twist = 1.0 + uBlend * 1.5;
    float ang = t * (2.3 + aSeed * 2.4) * twist
              + uTime * (0.14 + aSeed * 0.55) * twist;
    float ca = cos(ang);
    float sa = sin(ang);
    lateral = vec2(lateral.x * ca - lateral.y * sa,
                   lateral.x * sa + lateral.y * ca);

    // Loose: leaves the head, twists down the corridor, travels fast.
    vec3 loose = position
      + vec3(lateral, aDir.z * (aBend * sin(t * PI)))
      + vec3(0.0, 0.0, -1.0) * (t * uFlowLength)
      + alive;

    // Focused: every filament funnels into one point of light — but it spirals
    // in rather than flying straight, and the spiral keeps turning.
    float approach = smoothstep(0.0, 0.88, t);
    vec3 rel = (position - aEnd) * (1.0 - approach);
    float ang2 = (1.0 - approach) * (1.8 + aSeed * 2.4)
               + uTime * (0.22 + aSeed * 0.4);
    float c2 = cos(ang2);
    float s2 = sin(ang2);
    rel.xy = vec2(rel.xy.x * c2 - rel.xy.y * s2,
                  rel.xy.x * s2 + rel.xy.y * c2);
    vec3 focused = aEnd + rel;

    float w = clamp((uBlend - aSeed * 0.45) / 0.55, 0.0, 1.0);
    w = w * w * (3.0 - 2.0 * w);
    vec3 p = mix(loose, focused, w);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    // Two light trails per strand, each on its own clock: one races toward the
    // core and speeds up as it goes, the other runs back up the wire.
    float speedA = 0.1 + aSeed * 0.3;
    float speedB = 0.06 + fract(aSeed * 13.7) * 0.2;
    float pulseA = fract(uTime * speedA * (0.7 + t * 1.9) + aSeed * 7.0);
    float pulseB = fract(-uTime * speedB + fract(aSeed * 5.3) * 9.0);
    float trailA = smoothstep(0.17, 0.0, abs(t - pulseA));
    float trailB = 0.75 * smoothstep(0.1, 0.0, abs(t - pulseB));
    vGlow = clamp(trailA + trailB, 0.0, 1.6);
    vT = t;

    float dist = length(mv.xyz);
    vFade = smoothstep(0.55, 3.2, dist) * (1.0 - smoothstep(uNear, uFar, dist));
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uCold;
  uniform vec3 uWarm;
  uniform vec3 uHot;
  uniform float uOpacity;
  uniform float uHotMix;
  uniform float uIntensity;

  varying float vT;
  varying float vGlow;
  varying float vFade;

  void main() {
    vec3 color = mix(uCold, uWarm, smoothstep(0.0, 0.85, vT));
    color = mix(color, uHot, uHotMix * smoothstep(0.45, 1.0, vT));
    float alpha = (0.3 + 0.7 * vGlow) * vFade * uOpacity * uIntensity;
    if (alpha < 0.003) discard;
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;

interface FilamentConfig {
  count: number;
  /** Points per filament. Segments drawn = points - 1. */
  points: number;
  root: (index: number, rand: () => number) => [number, number, number];
  end: (index: number, rand: () => number) => [number, number, number];
  bend: (rand: () => number) => number;
  seedOffset?: number;
}

function buildFilaments(config: FilamentConfig) {
  const rand = makeRandom(config.seedOffset ?? 913);
  const { count, points } = config;
  const segments = points - 1;
  const total = count * segments * 2;

  const position = new Float32Array(total * 3);
  const aEnd = new Float32Array(total * 3);
  const aDir = new Float32Array(total * 3);
  const aBend = new Float32Array(total);
  const aT = new Float32Array(total);
  const aSeed = new Float32Array(total);

  let vertex = 0;
  for (let i = 0; i < count; i++) {
    const root = config.root(i, rand);
    const end = config.end(i, rand);
    const dir = randomUnitVector(rand);
    const bend = config.bend(rand);
    const seed = rand();

    for (let j = 0; j < segments; j++) {
      const t0 = j / segments;
      const t1 = (j + 1) / segments;
      for (let k = 0; k < 2; k++) {
        const t = k === 0 ? t0 : t1;
        const o = vertex * 3;
        position[o] = root[0];
        position[o + 1] = root[1];
        position[o + 2] = root[2];
        aEnd[o] = end[0];
        aEnd[o + 1] = end[1];
        aEnd[o + 2] = end[2];
        aDir[o] = dir[0];
        aDir[o + 1] = dir[1];
        aDir[o + 2] = dir[2];
        aBend[vertex] = bend;
        aT[vertex] = t;
        aSeed[vertex] = seed;
        vertex++;
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(position, 3));
  geometry.setAttribute("aEnd", new THREE.BufferAttribute(aEnd, 3));
  geometry.setAttribute("aDir", new THREE.BufferAttribute(aDir, 3));
  geometry.setAttribute("aBend", new THREE.BufferAttribute(aBend, 1));
  geometry.setAttribute("aT", new THREE.BufferAttribute(aT, 1));
  geometry.setAttribute("aSeed", new THREE.BufferAttribute(aSeed, 1));
  geometry.boundingSphere = new THREE.Sphere(
    new THREE.Vector3(0, 0, -580),
    1400,
  );
  return geometry;
}

/**
 * The wires behind the headline event: they leave the head, fan through the dark
 * and converge into a single point of light, which the accretion disk then
 * inherits.
 */
export function NeuralCorridor({ count }: { count: number }) {
  const geometry = useMemo(
    () =>
      buildFilaments({
        count,
        points: 22,
        root: (_, rand) => {
          const [dx, dy, dz] = randomInSphere(rand, 1.15);
          return [WORLD.crown[0] + dx, WORLD.crown[1] + dy, WORLD.crown[2] + dz];
        },
        end: (_, rand) => {
          const [dx, dy, dz] = randomInSphere(rand, 1.7);
          return [WORLD.core[0] + dx, WORLD.core[1] + dy, WORLD.core[2] + dz];
        },
        bend: (rand) => 3 + Math.pow(rand(), 1.4) * 15,
        seedOffset: 913,
      }),
    [count],
  );

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uBlend: { value: 0 },
      uFlowLength: { value: WORLD.corridorLength },
      uDrift: { value: new THREE.Vector3(...WORLD.corridorDrift) },
      uNear: { value: 1.2 },
      uFar: { value: 265 },
      uCold: { value: new THREE.Color("#2f6bff") },
      uWarm: { value: new THREE.Color("#7fb6ff") },
      uHot: { value: new THREE.Color("#ffd9a3") },
      uOpacity: { value: 1 },
      uHotMix: { value: 0 },
      uIntensity: { value: 1.35 },
    }),
    [],
  );

  useFrame(() => {
    const progress = journey.progress;
    uniforms.uTime.value = journey.time;
    uniforms.uBlend.value =
      ease(progress, at("convergence", 0.24), at("convergence", 0.99)) * 1.3;
    uniforms.uHotMix.value = uniforms.uBlend.value * 0.8;
    uniforms.uOpacity.value =
      1 - ease(progress, at("horizon", 0.16), at("horizon", 0.62));
    uniforms.uIntensity.value =
      1.35 + ramp(progress, at("convergence", 0.5), at("horizon", 0.1)) * 0.9;
  });

  return (
    <lineSegments geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

/**
 * The wires come back at the end, now spanning the whole new universe and
 * linking one world to the next.
 */
export function WireWeb({ count }: { count: number }) {
  const geometry = useMemo(() => {
    const near = WORLD.multiverseStart + 40;
    const far = WORLD.multiverseEnd + 60;
    return buildFilaments({
      count,
      points: 20,
      root: (_, rand) => [
        (rand() - 0.5) * 210,
        (rand() - 0.5) * 96,
        near - rand() * 150,
      ],
      end: (_, rand) => [
        (rand() - 0.5) * 260,
        (rand() - 0.5) * 120,
        near - 120 - rand() * (far - near),
      ],
      bend: (rand) => 6 + rand() * 26,
      seedOffset: 5501,
    });
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uBlend: { value: 1.3 },
      uFlowLength: { value: 0 },
      uDrift: { value: new THREE.Vector3(0, 0, 0) },
      uNear: { value: 2 },
      uFar: { value: 420 },
      uCold: { value: new THREE.Color(NEUTRAL_WIRE[0]) },
      uWarm: { value: new THREE.Color(NEUTRAL_WIRE[1]) },
      uHot: { value: new THREE.Color("#ffc48a") },
      uOpacity: { value: 0 },
      uHotMix: { value: 0.2 },
      uIntensity: { value: 1.1 },
    }),
    [],
  );
  const targetCold = useMemo(() => new THREE.Color(NEUTRAL_WIRE[0]), []);
  const targetWarm = useMemo(() => new THREE.Color(NEUTRAL_WIRE[1]), []);

  useFrame((_, delta) => {
    const progress = journey.progress;
    uniforms.uTime.value = journey.time;
    uniforms.uOpacity.value = clamp01(
      ease(progress, at("works", 0.35), at("beyond", 0.55)) * 0.95,
    );

    // Choosing a universe re-lights the web that links the worlds — the scene
    // answers the portfolio instead of sitting behind it.
    const selected = UNIVERSES[journey.universe - 1];
    targetCold.set(selected ? selected.wire[0] : NEUTRAL_WIRE[0]);
    targetWarm.set(selected ? selected.wire[1] : NEUTRAL_WIRE[1]);
    const k = 1 - Math.exp(-3.2 * Math.max(delta, 1e-4));
    uniforms.uCold.value.lerp(targetCold, k);
    uniforms.uWarm.value.lerp(targetWarm, k);
  });

  return (
    <lineSegments geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}
