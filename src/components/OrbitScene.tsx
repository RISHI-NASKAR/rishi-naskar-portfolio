import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * RISHI ORBIT — the interactive study.
 *
 * A dark metallic monolith held in four tilted steel rings, with luminous
 * crimson particles travelling the orbital paths. The whole assembly is a real
 * WebGL scene: the pointer shifts the frame like a camera operator, dragging
 * rotates the installation with a little inertia, and the page scroll eases its
 * tilt and depth. Motion stops when the section leaves the viewport, when the
 * tab is hidden, or when the visitor prefers reduced motion (the scene then
 * still renders one still frame and drag remains possible).
 */

const CRIMSON = "#e11d2e";
const CRIMSON_HOT = "#ff2b40";

/** Small deterministic PRNG so both renditions of a setup look identical. */
function mulberry(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type SceneProps = {
  /** When true the scene renders once and animates only while dragged. */
  reducedMotion: boolean;
  /** Only animate while this is true (in view + visible tab). */
  active: boolean;
  /** 0 (section below the fold) → 1 (scrolled past), eased inside the scene. */
  progressRef: { current: number };
};

/* --------------------------------------------------------------- particles */

function ParticleBlob({
  radius,
  tilt,
  count,
  size,
  speed,
  seed,
  reduced,
}: {
  radius: number;
  tilt: [number, number, number];
  count: number;
  size: number;
  speed: number;
  seed: number;
  reduced: boolean;
}) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const group = useRef<THREE.Group>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const seeds = useMemo(() => {
    const random = mulberry(seed);
    return Array.from({ length: count }, (_, i) => {
      void i;
      return {
        offset: random() * Math.PI * 2,
        speed: speed * (0.55 + random() * 0.9),
        wobble: random() * 0.07,
        phase: random() * Math.PI * 2,
      };
    });
  }, [count, seed, speed]);

  const place = (t: number) => {
    const node = mesh.current;
    if (!node) return;
    for (let i = 0; i < seeds.length; i += 1) {
      const s = seeds[i];
      const angle = s.offset + t * s.speed;
      const r = radius + Math.sin(t * 0.6 + s.phase) * s.wobble;
      dummy.position.set(Math.cos(angle) * r, Math.sin(angle) * r, 0);
      dummy.updateMatrix();
      node.setMatrixAt(i, dummy.matrix);
    }
    node.instanceMatrix.needsUpdate = true;
  };

  // One static pass so reduced-motion / demand renders never start empty.
  useEffect(() => {
    place(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seeds]);

  useFrame((state, dt) => {
    if (reduced) return;
    place(state.clock.elapsedTime);
    if (group.current) group.current.rotation.z += dt * 0.045;
  });

  return (
    <group ref={group} rotation={tilt}>
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <sphereGeometry args={[size, 6, 6]} />
        <meshBasicMaterial color={CRIMSON_HOT} toneMapped={false} />
      </instancedMesh>
    </group>
  );
}

/* ------------------------------------------------------------------- rings */

function SteelRing({
  radius,
  tube,
  tilt,
  precess,
  reduced,
}: {
  radius: number;
  tube: number;
  tilt: [number, number, number];
  precess: number;
  reduced: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (reduced || !group.current) return;
    group.current.rotation.z += dt * precess;
  });
  return (
    <group ref={group} rotation={tilt}>
      <mesh castShadow={false}>
        <torusGeometry args={[radius, tube, 10, 160]} />
        <meshStandardMaterial color="#82828c" metalness={1} roughness={0.34} />
      </mesh>
    </group>
  );
}

function HaloRing({
  radius,
  tube,
  opacity,
  tilt,
}: {
  radius: number;
  tube: number;
  opacity: number;
  tilt: [number, number, number];
}) {
  return (
    <group rotation={tilt}>
      <mesh>
        <torusGeometry args={[radius, tube, 6, 128]} />
        <meshBasicMaterial
          color={CRIMSON}
          toneMapped={false}
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

/* ---------------------------------------------------------------- monolith */

function Monolith({ reduced }: { reduced: boolean }) {
  const stone = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (reduced || !stone.current) return;
    stone.current.rotation.y -= dt * 0.1;
    stone.current.rotation.x += dt * 0.018;
  });
  return (
    <group>
      {/* The sculptural centre: a dark, nearly polished cutting-stone. */}
      <mesh ref={stone}>
        <icosahedronGeometry args={[0.98, 1]} />
        <meshStandardMaterial
          color="#1c1c20"
          metalness={0.92}
          roughness={0.2}
          flatShading
        />
      </mesh>
      {/* Two luminous threads hugging the stone. */}
      <HaloRing radius={1.42} tube={0.007} opacity={0.9} tilt={[Math.PI / 2.45, 0.25, 0]} />
      <HaloRing radius={1.58} tube={0.004} opacity={0.3} tilt={[Math.PI / 1.85, -0.5, 0.35]} />
    </group>
  );
}

/* ---------------------------------------------------------------- assembly */

function OrbitWorld({
  reduced,
  progressRef,
}: {
  reduced: boolean;
  progressRef: { current: number };
}) {
  const depth = useRef<THREE.Group>(null); // scroll-driven tilt + depth
  const spin = useRef<THREE.Group>(null); // autonomous spin + drag momentum
  const tilt = useRef<THREE.Group>(null); // drag tilt + pointer influence

  const pointer = useRef({ x: 0, y: 0 });
  const drag = useRef({ vx: 0, tilt: 0, down: false, lastX: 0, lastY: 0 });

  const gl = useThree((s) => s.gl);
  const invalidate = useThree((s) => s.invalidate);

  // Pointer influence + drag. Attached to the WebGL canvas element itself so
  // events only fire while hovering/holding the installation. `touch-action:
  // pan-y` (set on the canvas) keeps vertical touch scrolling native; a
  // vertical touch drag is cancelled by the browser and turns into a scroll.
  useEffect(() => {
    const el = gl.domElement;
    const state = drag.current;

    const onDown = (event: PointerEvent) => {
      state.down = true;
      state.lastX = event.clientX;
      state.lastY = event.clientY;
      el.setPointerCapture(event.pointerId);
    };
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      pointer.current.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.current.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      if (!state.down) return;
      const dx = event.clientX - state.lastX;
      const dy = event.clientY - state.lastY;
      state.lastX = event.clientX;
      state.lastY = event.clientY;
      state.vx += dx * 0.0021;
      state.tilt = THREE.MathUtils.clamp(state.tilt + dy * 0.0032, -0.55, 0.55);
      if (reduced) invalidate();
    };
    const onUp = (event: PointerEvent) => {
      state.down = false;
      if (el.hasPointerCapture(event.pointerId)) {
        el.releasePointerCapture(event.pointerId);
      }
    };
    const onLeave = () => {
      pointer.current.x = 0;
      pointer.current.y = 0;
      if (reduced) invalidate();
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [gl, invalidate, reduced]);

  useFrame((state, dt) => {
    const d = Math.min(dt, 0.05);
    const spinNode = spin.current;
    const depthNode = depth.current;
    const tiltNode = tilt.current;

    if (spinNode) {
      if (!reduced) spinNode.rotation.y += d * 0.16;
      spinNode.rotation.y += drag.current.vx;
      drag.current.vx *= 0.93;
    }

    if (depthNode && !reduced) {
      // Scroll eases the viewing angle and nudges the camera in.
      const target = 0.34 - progressRef.current * 0.6;
      depthNode.rotation.x += (target - depthNode.rotation.x) * 0.06;
      const camera = state.camera;
      const zTarget = 7.6 - progressRef.current * 1.05;
      camera.position.z += (zTarget - camera.position.z) * 0.06;

      // The pointer drifts the frame like a handheld operator would.
      camera.position.x += (pointer.current.x * 0.42 - camera.position.x) * 0.05;
      camera.position.y +=
        (0.5 - pointer.current.y * 0.24 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
    }

    if (tiltNode) {
      const xTarget = drag.current.tilt - pointer.current.y * 0.1;
      tiltNode.rotation.x += (xTarget - tiltNode.rotation.x) * 0.09;
      const zTarget = -pointer.current.x * 0.08;
      tiltNode.rotation.z += (zTarget - tiltNode.rotation.z) * 0.09;
    }
  });

  return (
    <>
      {/* Lights: one cool key, one deep crimson floor bloom, one back rim. */}
      <ambientLight intensity={0.4} color="#9a9aa6" />
      <directionalLight position={[4, 5, 3.2]} intensity={1.2} color="#ccd3e2" />
      <pointLight
        position={[-3.4, -2.6, 1.6]}
        intensity={52}
        distance={13}
        decay={2}
        color={CRIMSON}
      />
      <pointLight
        position={[0.4, 2.4, -3.4]}
        intensity={22}
        distance={10}
        decay={2}
        color="#6b1020"
      />

      <group ref={depth}>
        <group ref={spin}>
          <group ref={tilt}>
            <Monolith reduced={reduced} />

            {/* Steel rings: four radii and tilts spaced by eye. */}
            <SteelRing radius={1.95} tube={0.012} tilt={[0.5, 0.2, -0.42]} precess={0.05} reduced={reduced} />
            <SteelRing radius={2.4} tube={0.009} tilt={[-0.92, 0.4, 0.5]} precess={-0.034} reduced={reduced} />
            <SteelRing radius={2.85} tube={0.007} tilt={[1.15, -0.45, 0.1]} precess={0.024} reduced={reduced} />
            <SteelRing radius={3.25} tube={0.006} tilt={[0.24, 0.95, -0.9]} precess={-0.018} reduced={reduced} />

            {/* The crimson travellers — the moving life of the study. */}
            <ParticleBlob key="r1" radius={1.95} tilt={[0.5, 0.2, -0.42]} count={7} size={0.03} speed={0.85} seed={11} reduced={reduced} />
            <ParticleBlob key="r2" radius={2.4} tilt={[-0.92, 0.4, 0.5]} count={8} size={0.026} speed={-0.6} seed={29} reduced={reduced} />
            <ParticleBlob key="r3" radius={2.85} tilt={[1.15, -0.45, 0.1]} count={7} size={0.023} speed={0.48} seed={47} reduced={reduced} />
            <ParticleBlob key="r4" radius={3.25} tilt={[0.24, 0.95, -0.9]} count={6} size={0.021} speed={-0.4} seed={83} reduced={reduced} />
          </group>
        </group>
      </group>

    </>
  );
}

/* ------------------------------------------------------------------ canvas */

export default function OrbitScene({ reducedMotion, active, progressRef }: SceneProps) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      frameloop={reducedMotion ? "demand" : active ? "always" : "never"}
      camera={{ fov: 42, position: [0, 0.5, 7.6] }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ touchAction: "pan-y", userSelect: "none" }}
    >
      <OrbitWorld reduced={reducedMotion} progressRef={progressRef} />
    </Canvas>
  );
}
