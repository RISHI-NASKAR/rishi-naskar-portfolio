import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * NameCosmos — the right-side planetary system.
 *
 * A real WebGL scene rendered behind the name block: one large dark planet
 * with a crimson rim, an atmospheric halo, four tilted orbital rings with
 * worlds travelling their paths, and a fine field of crimson dust. The pointer
 * drifts the camera like a handheld operator; page scroll pulls the camera in.
 * Motion stops offscreen, when the tab is hidden, and under reduced motion.
 *
 * Everything is non-interactive on purpose: pointer-events are disabled so
 * the scene never blocks links, buttons or the typography over it.
 */

const CRIMSON = "#e11d2e";
const DUST = "#ff4a5e";

type CosmosProps = {
  /** True → one demand-rendered still frame. */
  reducedMotion: boolean;
  /** Only animate while true (in view + visible tab). */
  active: boolean;
  /** 0 (hero below fold) → 1 (scrolled past), eased inside the scene. */
  progressRef: { current: number };
  /** Responsive scale. */
  scale: number;
};

/* ------------------------------------------------------------- the planet */

function MainPlanet({ reduced }: { reduced: boolean }) {
  const node = useRef<THREE.Mesh>(null);

  useFrame((_, dt) => {
    if (reduced || !node.current) return;
    node.current.rotation.y += Math.min(dt, 0.05) * 0.04;
  });

  return (
    <group>
      {/* The body. Dark, absorbing the crimson key from behind. */}
      <mesh ref={node}>
        <sphereGeometry args={[1.5, 48, 48]} />
        <meshStandardMaterial color="#1b1016" metalness={0.4} roughness={0.58} />
      </mesh>
      {/* Atmospheric halo — a backside additive shell. */}
      <mesh scale={1.1}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial
          color={CRIMSON}
          toneMapped={false}
          transparent
          opacity={0.07}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------------ rings */

function PlanetRing({
  radius,
  tilt,
  spin,
  planetSize,
  phase,
  opacity,
  reduced,
}: {
  radius: number;
  tilt: [number, number, number];
  spin: number;
  planetSize: number;
  phase: number;
  opacity: number;
  reduced: boolean;
}) {
  const spinNode = useRef<THREE.Group>(null);
  const planetNode = useRef<THREE.Mesh>(null);

  useFrame((_, dt) => {
    const d = Math.min(dt, 0.05);
    if (spinNode.current && !reduced) {
      spinNode.current.rotation.z += d * spin;
    }
    if (planetNode.current && !reduced) {
      planetNode.current.rotation.y += d * 0.35;
      planetNode.current.rotation.x += d * 0.05;
    }
  });

  return (
    <group rotation={tilt}>
      <group ref={spinNode} rotation={[0, phase, 0]}>
        {/* The luminous crimson path. */}
        <mesh>
          <torusGeometry args={[radius, 0.007, 6, 160]} />
          <meshBasicMaterial
            color={CRIMSON}
            toneMapped={false}
            transparent
            opacity={opacity}
          />
        </mesh>
        {/* A soft halo so the line glows instead of reading flat neon. */}
        <mesh>
          <torusGeometry args={[radius, 0.028, 6, 96]} />
          <meshBasicMaterial
            color={CRIMSON}
            toneMapped={false}
            transparent
            opacity={opacity * 0.24}
          />
        </mesh>
        {/* A world travelling the path. */}
        <mesh ref={planetNode} position={[radius, 0, 0]}>
          <sphereGeometry args={[planetSize, 20, 20]} />
          <meshStandardMaterial color="#1a1219" metalness={0.5} roughness={0.42} />
        </mesh>
      </group>
    </group>
  );
}

/* -------------------------------------------------------------------- dust */

function DustField({ count, reduced }: { count: number; reduced: boolean }) {
  const node = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);
    let seed = 11;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    for (let i = 0; i < count; i += 1) {
      const angle = random() * Math.PI * 2;
      const radius = 1.1 + random() * 3.2;
      array[i * 3] = Math.cos(angle) * radius;
      array[i * 3 + 1] = (random() - 0.5) * radius * 0.62;
      array[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return array;
  }, [count]);

  useFrame((_, dt) => {
    if (reduced || !node.current) return;
    node.current.rotation.y += Math.min(dt, 0.05) * 0.022;
  });

  return (
    <points ref={node}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color={DUST}
        sizeAttenuation
        transparent
        opacity={0.72}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        toneMapped={false}
      />
    </points>
  );
}

/* --------------------------------------------------------------- assembly */

function CosmosWorld({
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
      const target = 0.14 - progressRef.current * 0.34;
      depth.current.rotation.x += (target - depth.current.rotation.x) * 0.05;
      const camera = state.camera;
      const zTarget = 8.3 - progressRef.current * 0.9;
      camera.position.z += (zTarget - camera.position.z) * 0.05;
      camera.position.x += (pointer.current.x * 0.34 - camera.position.x) * 0.04;
      camera.position.y +=
        (0.42 - pointer.current.y * 0.22 - camera.position.y) * 0.04;
      camera.lookAt(0.25, -0.08, 0);
    }
  });

  return (
    <>
      {/* Lighting: crimson key from the upper-left rear (rim), a cool fill,
          and a weaker crimson rear light for the second limb. */}
      <ambientLight intensity={0.16} color="#8b8290" />
      <pointLight
        position={[-2.6, 1.0, -1.6]}
        intensity={72}
        distance={14}
        decay={2}
        color={CRIMSON}
      />
      <directionalLight position={[4, 2.6, 3.4]} intensity={0.5} color="#d8cfd8" />
      <pointLight
        position={[3.6, 1.2, -4.4]}
        intensity={36}
        distance={15}
        decay={2}
        color="#ff5a6e"
      />

      <group ref={depth} scale={scale}>
        {/* The system sits slightly right of centre so the name block keeps
            its negative space to the left. */}
        <group position={[0.55, -0.18, 0]}>
          <DustField count={reduced ? 0 : 140} reduced={reduced} />
          <MainPlanet reduced={reduced} />
          {/* A wide saturnic band hugging the planet itself. */}
          <PlanetRing
            radius={2.05}
            tilt={[1.42, 0.1, 0.06]}
            spin={0.2}
            planetSize={0.13}
            phase={1.1}
            opacity={0.34}
            reduced={reduced}
          />
          <PlanetRing
            radius={2.62}
            tilt={[1.29, -0.14, 0.1]}
            spin={-0.15}
            planetSize={0.18}
            phase={3.2}
            opacity={0.48}
            reduced={reduced}
          />
          <PlanetRing
            radius={3.24}
            tilt={[1.16, 0.5, 0.04]}
            spin={0.11}
            planetSize={0.2}
            phase={5.1}
            opacity={0.32}
            reduced={reduced}
          />
          <PlanetRing
            radius={3.86}
            tilt={[0.92, 1.02, 0.2]}
            spin={-0.08}
            planetSize={0.12}
            phase={2.2}
            opacity={0.2}
            reduced={reduced}
          />
        </group>
      </group>
    </>
  );
}

/* ------------------------------------------------------------------ canvas */

export default function NameCosmos({
  reducedMotion,
  active,
  progressRef,
  scale,
}: CosmosProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={reducedMotion ? "demand" : active ? "always" : "never"}
      camera={{ fov: 40, position: [0, 0.45, 8.3] }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ touchAction: "pan-y", userSelect: "none", pointerEvents: "none" }}
      aria-hidden
    >
      <CosmosWorld reduced={reducedMotion} progressRef={progressRef} scale={scale} />
    </Canvas>
  );
}
