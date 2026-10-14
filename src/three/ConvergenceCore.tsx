import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { PHASE, WORLD, ease, ramp } from "@/lib/journey";
import { journey } from "@/lib/journey-store";
import { NOISE } from "./glsl";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    // Quad is 1x1 and scaled by the mesh, so this is exactly -1..1.
    vUv = position.xy * 2.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  ${NOISE}
  uniform float uTime;
  uniform float uOpacity;
  uniform float uPower;
  varying vec2 vUv;

  void main() {
    float r = length(vUv);
    float angle = atan(vUv.y, vUv.x);

    float core = exp(-r * r * 24.0);
    float halo = exp(-r * r * 3.2);

    // The converged filaments, still visible as rotating spokes of light.
    float spokes = fbm3(vec3(
      cos(angle + uTime * 0.4) * 2.6,
      sin(angle + uTime * 0.4) * 2.6,
      uTime * 0.05 + r * 3.2
    ));
    float ring = smoothstep(0.05, 0.0, abs(r - 0.34)) * (0.35 + 0.9 * spokes);

    vec3 hot = vec3(1.0);
    vec3 mid = vec3(1.0, 0.68, 0.32);
    vec3 cool = vec3(0.40, 0.55, 1.0);
    vec3 color = mix(mid, cool, smoothstep(0.06, 0.45, r));
    color = mix(color, hot, core);

    float energy = 0.55 + uPower * 0.85;
    float alpha = (core * 1.5 + halo * 0.5 + ring * 0.45) * uOpacity * energy;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;

/**
 * The point of light every filament funnels into.
 *
 * It grows into the frame until it has swallowed it, and the accretion disk
 * inherits the position, the colour and the motion as it fades out.
 */
export default function ConvergenceCore() {
  const mesh = useRef<THREE.Mesh>(null);
  const camera = useThree((state) => state.camera);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uOpacity: { value: 0 },
      uPower: { value: 0 },
    }),
    [],
  );

  useFrame(() => {
    const progress = journey.progress;
    uniforms.uTime.value = journey.time;

    const power = ease(
      progress,
      PHASE.convergence.start + 0.05,
      PHASE.convergence.end,
    );
    uniforms.uPower.value = power;

    uniforms.uOpacity.value =
      0.15 +
      power * 0.85 -
      ease(progress, PHASE.horizon.start + 0.02, PHASE.horizon.start + 0.3) * 1.0;

    const scale =
      2.2 +
      power * 26 +
      ramp(progress, PHASE.horizon.start, PHASE.horizon.end) * 8;
    if (mesh.current) {
      mesh.current.quaternion.copy(camera.quaternion);
      mesh.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={mesh} position={WORLD.core}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}
