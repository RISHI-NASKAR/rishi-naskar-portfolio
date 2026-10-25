import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * SolarScene — the hero's orbital layer.
 *
 * A real WebGL scene that sits *behind* the portrait in the hero stage: four
 * elliptical steel rings with a luminous crimson outline, four dark planets
 * riding the rings with red rim lighting, and a fine field of crimson dust.
 * The pointer drifts the camera like a handheld operator and the page scroll
 * tilts the plane and pulls the camera in. Motion stops offscreen, when the
 * tab is hidden, and under prefers-reduced-motion (one still frame, then).
 *
 * Everything is non-interactive on purpose: pointer-events are disabled so the
 * scene never blocks links, buttons or text over it.
 */

const CRIMSON = "#e11d2e";
const DUST = "#ff4a5e";

type SolarProps = {
  /** True → one demand-rendered still frame, interactions still render. */
  reducedMotion: boolean;
  /** Only animate while true (in view + visible tab). */
  active: boolean;
  /** 0 (hero below fold) → 1 (scrolled past), eased inside the scene. */
  progressRef: { current: number };
  /** Responsive scale: shrunken composition on phones/tablets. */
  scale: number;
};

/* ------------------------------------------------------------------- rings */

function OrbitRing({
  radius,
  tube,
  tilt,
  spin,
  reduced,
  planetSize,
  planetColor = "#17161b",
}: {
  radius: number;
  tube: number;
  tilt: [number, number, number];
  spin: number;
  reduced: boolean;
  planetSize: number;
  planetColor?: string;
}) {
  const spinNode = useRef<THREE.Group>(null);
  const planetNode = useRef<THREE.Mesh>(null);

  const spinRef = useMemo(() => ({ speed: spin }), [spin]);

  useFrame((_, dt) => {
    const d = Math.min(dt, 0.05);
    // Revolution happens around the ring's own axis so the tilt — and with it
    // the elliptical footprint — stays fixed while planets travel the path.
    if (spinNode.current && !reduced) {
      spinNode.current.rotation.z += d * spinRef.speed;
    }
    if (planetNode.current && !reduced) {
      planetNode.current.rotation.y += d * 0.4;
      planetNode.current.rotation.x += d * 0.07;
    }
  });

  return (
    <group rotation={tilt}>
      <group ref={spinNode}>
        {/* Steel body of the orbit. */}
        <mesh>
          <torusGeometry args={[radius, tube, 8, 144]} />
          <meshStandardMaterial color="#2a2124" metalness={0.85} roughness={0.38} />
        </mesh>
        {/* The luminous crimson outline. */}
        <mesh>
          <torusGeometry args={[radius, tube * 0.5, 6, 144]} />
          <meshBasicMaterial color={CRIMSON} toneMapped={false} transparent opacity={0.8} />
        </mesh>
        {/* A soft halo so the line glows instead of reading flat neon. */}
        <mesh>
          <torusGeometry args={[radius, tube * 2.6, 6, 96]} />
          <meshBasicMaterial color={CRIMSON} toneMapped={false} transparent opacity={0.1} />
        </mesh>

        <group rotation={[0, 0.9, 0]}>
          <mesh ref={planetNode} position={[radius, 0, 0]}>
            <sphereGeometry args={[planetSize, 24, 24]} />
            <meshStandardMaterial
              color={planetColor}
              metalness={0.42}
              roughness={0.5}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

/* -------------------------------------------------------------------- dust */

function DustField({ count, reduced }: { count: number; reduced: boolean }) {
  const node = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);
    let seed = 7;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    for (let i = 0; i < count; i += 1) {
      const angle = random() * Math.PI * 2;
      const radius = 1.3 + random() * 2.6;
      array[i * 3] = Math.cos(angle) * radius;
      array[i * 3 + 1] = (random() - 0.5) * radius * 0.7;
      array[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return array;
  }, [count]);

  useFrame((_, dt) => {
    if (reduced || !node.current) return;
    node.current.rotation.y += Math.min(dt, 0.05) * 0.02;
  });

  return (
    <points ref={node}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color={DUST}
        sizeAttenuation
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        toneMapped={false}
      />
    </points>
  );
}

/* ---------------------------------------------------------------- assembly */

function SolarWorld({
  reduced,
  progressRef,
  scale,
}: {
  reduced: boolean;
  progressRef: { current: number };
  scale: number;
}) {
  const depth = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  // Pointer influence read from the window so the disabled-interactive canvas
  // still receives it.
  useEffect(() => {
    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
        pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useFrame((state) => {
    if (reduced) return;
    if (depth.current) {
      // Scroll eases the viewing plane and pulls the camera in slightly.
      const target = 0.2 - progressRef.current * 0.4;
      depth.current.rotation.x += (target - depth.current.rotation.x) * 0.05;
      const camera = state.camera;
      const zTarget = 7.2 - progressRef.current * 0.85;
      camera.position.z += (zTarget - camera.position.z) * 0.05;
      camera.position.x += (pointer.current.x * 0.32 - camera.position.x) * 0.04;
      camera.position.y +=
        (0.35 - pointer.current.y * 0.2 - camera.position.y) * 0.04;
      camera.lookAt(0, -0.05, 0);
    }
  });

  return (
    <>
      {/* Lighting: a crimson core the planets face, a cool key, a warm rim. */}
      <ambientLight intensity={0.22} color="#87808c" />
      <pointLight
        position={[0, 0.5, 1.6]}
        intensity={55}
        distance={11}
        decay={2}
        color={CRIMSON}
      />
      <directionalLight position={[4, 3, 3]} intensity={0.55} color="#c9cfdc" />
      <pointLight
        position={[-2.4, 1.6, -4]}
        intensity={30}
        distance={12}
        decay={2}
        color="#ff5a6e"
      />

      <group ref={depth} scale={scale}>
        <DustField count={reduced ? 0 : 150} reduced={reduced} />
        <OrbitRing radius={1.3} tube={0.014} tilt={[1.05, 0.15, -0.14]} spin={0.24} planetSize={0.3} reduced={reduced} />
        <OrbitRing radius={1.78} tube={0.011} tilt={[-1.18, -0.32, 0.12]} spin={-0.17} planetSize={0.22} planetColor="#141319" reduced={reduced} />
        <OrbitRing radius={2.26} tube={0.009} tilt={[1.26, 0.48, 0.06]} spin={0.12} planetSize={0.19} planetColor="#211518" reduced={reduced} />
        <OrbitRing radius={2.74} tube={0.007} tilt={[0.92, 1.05, 0.26]} spin={-0.09} planetSize={0.15} planetColor="#191521" reduced={reduced} />
      </group>
    </>
  );
}

/* ------------------------------------------------------------------ canvas */

export default function SolarScene({ reducedMotion, active, progressRef, scale }: SolarProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={reducedMotion ? "demand" : active ? "always" : "never"}
      camera={{ fov: 42, position: [0, 0.35, 7.2] }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ touchAction: "pan-y", userSelect: "none", pointerEvents: "none" }}
      aria-hidden
    >
      <SolarWorld reduced={reducedMotion} progressRef={progressRef} scale={scale} />
    </Canvas>
  );
}
