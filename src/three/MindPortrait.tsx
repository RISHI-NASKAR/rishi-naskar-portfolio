import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { WORLD, ease, ramp } from "@/lib/journey";
import { journey } from "@/lib/journey-store";
import { NOISE } from "./glsl";

const PORTRAIT_SRC = "/portrait.png";
const PLANE_SIZE = 5.1;

/** Loads the transparent portrait without suspending, so a missing file degrades. */
function usePortraitTexture() {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    let cancelled = false;
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      if (cancelled) return;
      const loaded = new THREE.Texture(image);
      loaded.colorSpace = THREE.SRGBColorSpace;
      loaded.needsUpdate = true;
      setTexture(loaded);
    };
    image.onerror = () => {
      // No portrait on disk yet — the procedural mind core stands in.
      if (!cancelled) setTexture(null);
    };
    image.src = PORTRAIT_SRC;
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(
    () => () => {
      texture?.dispose();
    },
    [texture],
  );

  return texture;
}

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

/**
 * The starting point: the portrait standing in deep black, with a cool aura
 * behind it that the neural filaments grow out of.
 */
export default function MindPortrait() {
  const texture = usePortraitTexture();
  const camera = useThree((state) => state.camera);
  const aura = useRef<THREE.Mesh>(null);
  const fallback = useRef<THREE.Group>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uOpacity: { value: 0.55 },
      uSize: { value: 13 },
      uColorA: { value: new THREE.Color("#7fb4ff") },
      uColorB: { value: new THREE.Color("#a366ff") },
    }),
    [],
  );

  useFrame(() => {
    uniforms.uTime.value = journey.time;
    const progress = journey.progress;
    // The aura flares while the filaments gather, then leaves with the head.
    uniforms.uOpacity.value =
      0.5 + ramp(progress, 0, 0.12) * 0.65 * (1 - ease(progress, 0.06, 0.16));

    aura.current?.quaternion.copy(camera.quaternion);
    if (fallback.current) {
      fallback.current.rotation.y = journey.time * 0.12;
      fallback.current.rotation.x = Math.sin(journey.time * 0.18) * 0.16;
    }
  });

  return (
    <group position={WORLD.portrait}>
      {/* aura */}
      <mesh ref={aura} position={[0, 0.2, -0.6]}>
        <planeGeometry args={[13, 13]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={auraVertex}
          fragmentShader={auraFragment}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {texture ? (
        <mesh>
          <planeGeometry args={[PLANE_SIZE, PLANE_SIZE]} />
          <meshBasicMaterial
            map={texture}
            transparent
            depthWrite={false}
            color="#dfe6ff"
          />
        </mesh>
      ) : (
        <group ref={fallback}>
          <mesh>
            <icosahedronGeometry args={[1.5, 1]} />
            <meshBasicMaterial
              color="#79b0ff"
              wireframe
              transparent
              opacity={0.55}
            />
          </mesh>
          <mesh>
            <sphereGeometry args={[1.05, 24, 16]} />
            <meshBasicMaterial color="#1a2340" transparent opacity={0.75} />
          </mesh>
        </group>
      )}
    </group>
  );
}
