import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { PHASE, WORLD, ease } from "@/lib/journey";
import { journey } from "@/lib/journey-store";
import { projects } from "@/lib/projects";
import { NOISE } from "./glsl";
import { makeRandom } from "./random";

/** How present the debris is — it belongs to the opening of the journey. */
function presence(progress: number) {
  return 1 - ease(progress, PHASE.mind.end - 0.02, PHASE.convergence.start + 0.1);
}

/**
 * Loads a thumbnail without suspending and without tainting the context.
 * If the host does not allow anonymous cross-origin reads the fragment keeps
 * its procedural glass frame instead — the scene never depends on the network.
 */
function useFragmentTexture(src: string) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    let cancelled = false;
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.decoding = "async";
    image.onload = () => {
      if (cancelled) return;
      const loaded = new THREE.Texture(image);
      loaded.colorSpace = THREE.SRGBColorSpace;
      loaded.needsUpdate = true;
      setTexture(loaded);
    };
    image.onerror = () => {
      /* keep the procedural frame */
    };
    image.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  useEffect(
    () => () => {
      texture?.dispose();
    },
    [texture],
  );

  return texture;
}

const frameVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = position.xy * 2.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const frameFragment = /* glsl */ `
  ${NOISE}
  uniform float uTime;
  uniform float uOpacity;
  uniform vec3 uColor;
  uniform float uSeed;
  varying vec2 vUv;

  void main() {
    vec2 edge = abs(vUv);
    float border = smoothstep(0.86, 1.0, max(edge.x, edge.y));
    float glow = smoothstep(0.6, 1.0, max(edge.x, edge.y)) * 0.35;

    // A faint, shifting interior so a frame still reads as a *thing* without a
    // texture behind it.
    float inner = fbm3(vec3(vUv * 2.2, uSeed + uTime * 0.05));
    float fill = smoothstep(0.42, 0.9, inner) * 0.22;

    float alpha = (border * 0.9 + glow + fill) * uOpacity;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(uColor * alpha, alpha);
  }
`;

interface FragmentConfig {
  position: [number, number, number];
  rotation: [number, number, number];
  size: number;
  spin: number;
  bob: number;
  drift: number;
}

function Fragment({
  config,
  src,
  tint,
}: {
  config: FragmentConfig;
  src: string;
  tint: string;
}) {
  const node = useRef<THREE.Group>(null);
  const texture = useFragmentTexture(src);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uOpacity: { value: 1 },
      uColor: { value: new THREE.Color(tint) },
      uSeed: { value: config.bob },
    }),
    [tint, config.bob],
  );

  useFrame(() => {
    const progress = journey.progress;
    const presenceValue = presence(progress);
    const node3 = node.current;
    if (!node3) return;
    node3.visible = presenceValue > 0.01;
    if (!node3.visible) return;

    uniforms.uTime.value = journey.time;
    uniforms.uOpacity.value = presenceValue;

    const t = journey.time;
    node3.position.set(
      config.position[0] + Math.sin(t * 0.16 + config.bob) * config.drift,
      config.position[1] + Math.cos(t * 0.21 + config.bob) * config.drift * 0.7,
      config.position[2] + Math.sin(t * 0.11 + config.bob * 2) * config.drift,
    );
    node3.rotation.x = config.rotation[0] + Math.sin(t * 0.14 + config.bob) * 0.14;
    node3.rotation.y = config.rotation[1] + t * config.spin;
    node3.rotation.z = config.rotation[2] + Math.cos(t * 0.12 + config.bob) * 0.1;
  });

  return (
    <group ref={node} position={config.position} rotation={config.rotation}>
      <mesh>
        <planeGeometry args={[config.size, config.size * 0.66]} />
        {texture ? (
          <meshBasicMaterial
            map={texture}
            transparent
            opacity={0.62}
            depthWrite={false}
            color="#cddaff"
          />
        ) : (
          <shaderMaterial
            uniforms={uniforms}
            vertexShader={frameVertex}
            fragmentShader={frameFragment}
            transparent
            depthWrite={false}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        )}
      </mesh>
      {/* glass edge, drawn for both the textured and the procedural case */}
      <mesh scale={1.02}>
        <planeGeometry args={[config.size, config.size * 0.66]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={frameVertex}
          fragmentShader={frameFragment}
          transparent
          depthWrite={false}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

/**
 * "Fragments of my creative work" drifting beside the wires, plus the motes of
 * thought around the head. Both belong to the opening and fade out as the camera
 * leaves the mind behind.
 */
export default function MindDebris({ quality }: { quality: number }) {
  const rand = useMemo(() => makeRandom(20482), []);

  const fragments = useMemo(() => {
    const sources = projects.slice(0, 6);
    return sources.map((project, index) => ({
      project,
      config: {
        position: [
          -5.4 + rand() * 12,
          -1.6 + rand() * 5.8,
          -3 - rand() * 26,
        ] as [number, number, number],
        rotation: [
          (rand() - 0.5) * 0.6,
          (rand() - 0.5) * 0.8,
          (rand() - 0.5) * 0.45,
        ] as [number, number, number],
        size: 1.5 + rand() * 1.5,
        spin: (rand() - 0.5) * 0.06,
        bob: rand() * Math.PI * 2 + index,
        drift: 0.5 + rand() * 0.7,
      } satisfies FragmentConfig,
      tint: ["#8fbaff", "#b98cff", "#ffc48a"][index % 3],
    }));
  }, [rand]);

  const motes = useMemo(() => {
    const count = Math.max(90, Math.round(300 * quality));
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const radius = 0.6 + Math.pow(rand(), 1.7) * 5.2;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(rand() * 2 - 1);
      positions[i * 3] = WORLD.crown[0] + radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = WORLD.crown[1] + radius * Math.cos(phi) * 0.8;
      positions[i * 3 + 2] = WORLD.crown[2] + radius * Math.sin(phi) * Math.sin(theta);
      seeds[i] = rand();
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    geometry.boundingSphere = new THREE.Sphere(
      new THREE.Vector3(...WORLD.crown),
      10,
    );
    return geometry;
  }, [quality, rand]);

  const moteUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uOpacity: { value: 0.8 },
      uPixelRatio: { value: 1 },
    }),
    [],
  );
  const moteGroup = useRef<THREE.Points>(null);

  useFrame(() => {
    const presenceValue = presence(journey.progress);
    moteUniforms.uTime.value = journey.time;
    moteUniforms.uOpacity.value = presenceValue * 0.8;
    moteUniforms.uPixelRatio.value = Math.min(window.devicePixelRatio || 1, 1.5);
    const points = moteGroup.current;
    if (!points) return;
    points.visible = presenceValue > 0.01;
    points.rotation.y = journey.time * 0.05;
  });

  return (
    <group>
      {fragments.map(({ project, config, tint }) => (
        <Fragment
          key={project.slug}
          config={config}
          src={project.image}
          tint={tint}
        />
      ))}

      <points ref={moteGroup} geometry={motes} frustumCulled={false}>
        <shaderMaterial
          uniforms={moteUniforms}
          vertexShader={/* glsl */ `
            uniform float uTime;
            uniform float uPixelRatio;
            attribute float aSeed;
            varying float vBright;

            void main() {
              vec3 drifted = position;
              drifted.y += sin(uTime * 0.35 + aSeed * 30.0) * 0.28;
              drifted.x += cos(uTime * 0.27 + aSeed * 22.0) * 0.22;

              vec4 mv = modelViewMatrix * vec4(drifted, 1.0);
              gl_Position = projectionMatrix * mv;
              gl_PointSize = clamp(
                (0.9 + aSeed * 2.4) * uPixelRatio * (150.0 / max(-mv.z, 0.7)),
                0.7,
                9.0
              );
              vBright = 0.6 + 0.4 * sin(uTime * 1.6 + aSeed * 40.0);
            }
          `}
          fragmentShader={/* glsl */ `
            uniform float uOpacity;
            varying float vBright;
            void main() {
              float d = length(gl_PointCoord - 0.5) * 2.0;
              float core = smoothstep(1.0, 0.0, d);
              float alpha = pow(core, 2.4) * vBright * uOpacity;
              if (alpha < 0.004) discard;
              vec3 color = mix(vec3(0.62, 0.78, 1.0), vec3(1.0, 0.86, 0.66), vBright - 0.6);
              gl_FragColor = vec4(color * alpha, alpha);
            }
          `}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
