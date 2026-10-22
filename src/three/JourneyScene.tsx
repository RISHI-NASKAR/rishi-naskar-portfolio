import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { GRAIN } from "@/lib/grain";
import { journey, subscribeJourney } from "@/lib/journey-store";
import BlackHole from "./BlackHole";
import CameraRig from "./CameraRig";
import ConvergenceCore from "./ConvergenceCore";
import MindDebris from "./MindDebris";
import MindPortrait from "./MindPortrait";
import Multiverse from "./Multiverse";
import { NeuralCorridor, WireWeb } from "./NeuralFilaments";
import Starfield from "./Starfield";
import WarpTunnel from "./WarpTunnel";

/** Highest device pixel ratio worth rendering this scene at. */
function maxDpr(quality: number) {
  return Math.min(window.devicePixelRatio || 1, quality > 0.6 ? 1.5 : 1);
}

/**
 * A tiny frame-rate governor instead of a dependency.
 *
 * The scene is designed for machines without a dedicated GPU, so the render
 * resolution drops when the frame rate does and recovers when there is headroom
 * — once a second at most, and only when it is genuinely needed, so the scene is
 * never rebuilt for a momentary dip.
 */
function useAdaptiveDpr(initial: number) {
  const [dpr, setDpr] = useState(initial);
  const ceiling = useRef(initial);

  useEffect(() => {
    let frames = 0;
    let elapsed = 0;
    let last = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      frames++;
      elapsed += now - last;
      last = now;
      if (elapsed < 1200) return;

      const fps = (frames * 1000) / elapsed;
      frames = 0;
      elapsed = 0;
      setDpr((current) => {
        if (fps < 40 && current > 0.86) return 0.85;
        if (fps > 57 && current < ceiling.current) return ceiling.current;
        return current;
      });
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return dpr;
}

/**
 * In reduced-motion mode the scene is a sequence of still frames, so the canvas
 * only renders when a frame is due instead of burning the GPU at 60fps.
 */
function DemandRenderer() {
  const invalidate = useThree((state) => state.invalidate);
  useEffect(() => subscribeJourney(() => invalidate()), [invalidate]);
  return null;
}

export default function JourneyScene() {
  const quality = journey.quality;
  const dpr = useAdaptiveDpr(maxDpr(quality));

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <Canvas
          flat
          dpr={dpr}
          frameloop={journey.reduced ? "demand" : "always"}
          gl={{
            antialias: true,
            powerPreference: "high-performance",
            stencil: false,
          }}
          camera={{
            // Matches CAMERA_KEYS[0] so the first painted frame is already
            // the opening composition — no jump when the rig takes over.
            position: [1.5, 1.55, 9.6],
            fov: 41,
            near: 0.1,
            far: 3400,
          }}
        >
          {journey.reduced && <DemandRenderer />}
          <CameraRig />

          <Starfield count={Math.max(1400, Math.round(4200 * quality))} />
          <MindPortrait />
          <MindDebris quality={quality} />
          <NeuralCorridor count={Math.max(260, Math.round(780 * quality))} />
          <ConvergenceCore />
          <BlackHole quality={quality} />
          <WarpTunnel quality={quality} />
          <Multiverse quality={quality} />
          <WireWeb count={Math.max(160, Math.round(420 * quality))} />
        </Canvas>
      </div>

      {/* Cinematic grade sitting between the scene and the text. */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[5]">
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_45%,transparent_38%,rgba(0,0,0,0.55)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage: `url("${GRAIN}")`,
            backgroundSize: "180px 180px",
          }}
        />
      </div>
    </>
  );
}
