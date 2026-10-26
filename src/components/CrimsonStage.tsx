import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import Portrait from "@/components/Portrait";
import { SolarForeground, SolarStatic } from "@/components/HeroSolar";

const SolarScene = lazy(() => import("./SolarScene"));

/**
 * CrimsonStage — the hero's cinematic centrepiece.
 *
 * The real photograph stays the focal point. Behind it, a second exposure of
 * the *same* asset (never a second person) sits slightly offset and darkened;
 * layered crimson smoke — two turbulence layers plus a slow oxblood bloom —
 * flows around it and fades toward the edges. A few luminous motes and two
 * hairline orbital arcs finish the atmosphere. Everything is decorative,
 * pointer-events-off, and static under reduced motion.
 */

const MOTES = [
  { x: 16, y: 34, s: 2, dur: 13, dx: 8, dy: -16 },
  { x: 78, y: 22, s: 1.5, dur: 17, dx: -10, dy: 12 },
  { x: 68, y: 74, s: 2.5, dur: 15, dx: -6, dy: -20 },
  { x: 27, y: 70, s: 1.5, dur: 12, dx: 6, dy: 14 },
  { x: 87, y: 55, s: 2, dur: 19, dx: -12, dy: -10 },
  { x: 12, y: 58, s: 1.5, dur: 16, dx: 10, dy: -12 },
  { x: 55, y: 12, s: 1.5, dur: 14, dx: -8, dy: 10 },
] as const;

/** One volume of crimson smoke: fractal noise cut to sparse plumes. */
export function SmokeLayer({
  id,
  seed,
  scale,
}: {
  id: string;
  seed: number;
  scale: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      preserveAspectRatio="none"
      className={scale}
    >
      <defs>
        <filter id={`crimson-smoke-${id}`} x="-25%" y="-25%" width="150%" height="150%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011 0.019"
            numOctaves="4"
            seed={seed}
            result="noise"
          />
          {/* Constant crimson, alpha carved out of the noise — reads as smoke,
              not as a flat gradient wash. */}
          <feColorMatrix
            in="noise"
            values="0 0 0 0 0.44  0 0 0 0 0.045  0 0 0 0 0.09  0.5 0.5 0.5 0 -0.44"
          />
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>
      <rect width="400" height="400" filter={`url(#crimson-smoke-${id})`} />
    </svg>
  );
}

export default function CrimsonStage() {
  const reduced = useReducedMotion();

  /* The restored planetary system. The WebGL rings/planets/dust mount behind
     the photograph; the travelling SMIL planets orbit in front of it. Activity
     gating and scroll progress mirror the retired HeroSolar wiring so the
     scene only renders while visible and stops under reduced motion. */
  const stage = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [active, setActive] = useState(true);

  // Client-only probe (first render, no effect): WebGL either exists or not.
  const [noWebGL] = useState(() => {
    try {
      const probe = document.createElement("canvas");
      const gl =
        probe.getContext("webgl2") ??
        probe.getContext("webgl") ??
        probe.getContext("experimental-webgl");
      return !gl;
    } catch {
      return true;
    }
  });

  // Responsive scale, resolved once: a lighter composition on small screens.
  const [scale] = useState(() =>
    window.innerWidth < 640 ? 0.6 : window.innerWidth < 1024 ? 0.78 : 0.94,
  );

  // Animate only while on screen (with a small lead margin) and only while the
  // tab is visible.
  useEffect(() => {
    const node = stage.current;
    let inView = true;
    let tabVisible = true;
    const sync = () => setActive(inView && tabVisible);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) inView = entry.isIntersecting;
        sync();
      },
      { rootMargin: "160px 0px", threshold: 0 },
    );
    if (node) observer.observe(node);
    const onVisibility = () => {
      tabVisible = document.visibilityState === "visible";
      sync();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // Scroll drives tilt + camera depth; skipped entirely under reduced motion.
  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const node = stage.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      progress.current = Math.min(
        1,
        Math.max(0, (vh - rect.top) / (vh + rect.height)),
      );
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <div
      ref={stage}
      aria-hidden="true"
      data-motion={reduced ? "off" : "on"}
      className="crimson-stage"
    >
      {/* Deep air: the oxblood atmosphere the whole scene sits inside. */}
      <div className="crimson-veil crimson-veil--base" />

      {/* Smoke volume one — behind the portrait, slower and darker. */}
      <SmokeLayer id="back" seed={7} scale="crimson-smoke crimson-smoke--back" />

      {/* The planetary system, restored: a real WebGL orbital layer behind
          the photograph (or a composed still frame while it loads / when WebGL
          is unavailable). Pointer parallax and scroll depth live inside the
          scene. */}
      <div className="pointer-events-none absolute inset-0">
        {noWebGL ? (
          <SolarStatic />
        ) : (
          <Suspense fallback={<SolarStatic />}>
            <SolarScene
              reducedMotion={reduced}
              active={active}
              progressRef={progress}
              scale={scale}
            />
          </Suspense>
        )}
      </div>

      {/* Second exposure — the same photograph, offset, darkened, dissolved. */}
      <div className="crimson-echo-wrap">
        <img src="/portrait.webp" alt="" loading="lazy" className="crimson-echo" />
      </div>

      {/* The portrait — the primary exposure, unchanged and dominant. */}
      <div className="absolute inset-0">
        <Portrait />
      </div>

      {/* Smoke volume two — a thin front veil, drifting slower still. */}
      <SmokeLayer id="front" seed={23} scale="crimson-smoke crimson-smoke--front" />

      {/* Foreground planets — the same composition's SMIL arc in front of the
          portrait, giving the orbit ring true depth (some behind, some in
          front of the subject). */}
      <SolarForeground reduced={reduced} />

      {/* Delicate orbital arcs and luminous motes. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        fill="none"
        className="crimson-arcs"
      >
        <ellipse
          cx="50" cy="52" rx="46" ry="30"
          transform="rotate(-9 50 50)"
          stroke="rgba(211,38,64,0.22)"
          strokeWidth="0.18"
          strokeDasharray="46 34 12 60"
        />
        <ellipse
          cx="50" cy="50" rx="38" ry="46"
          transform="rotate(18 50 50)"
          stroke="rgba(120,110,116,0.24)"
          strokeWidth="0.12"
          strokeDasharray="30 50 8 70"
        />
      </svg>

      <div className="crimson-motes">
        {MOTES.map((mote, index) => (
          <span
            key={index}
            className="crimson-mote"
            style={{
              left: `${mote.x}%`,
              top: `${mote.y}%`,
              width: mote.s,
              height: mote.s,
              ["--dur" as string]: `${mote.dur}s`,
              ["--dx" as string]: `${mote.dx}px`,
              ["--dy" as string]: `${mote.dy}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
