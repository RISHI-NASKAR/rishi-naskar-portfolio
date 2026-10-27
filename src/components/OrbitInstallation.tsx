import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const OrbitScene = lazy(() => import("./OrbitScene"));

/**
 * Chapter 03.5 — the interactive study.
 *
 * A real WebGL installation sits between the interlude and the about frame.
 * The canvas is lazy-loaded so it never blocks the first paint, animates only
 * while it is on screen and the tab is visible, and degrades to a still SVG
 * study when WebGL is missing or when the visitor prefers reduced motion.
 */
export default function OrbitInstallation() {
  const reduced = useReducedMotion();
  const stage = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [active, setActive] = useState(true); // corrected by the observer on mount

  // Client-only probe: WebGL either exists or it doesn't, so resolve it during
  // the first render instead of in an effect (no cascading render).
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

  // Animate only while on screen (with a small lead margin) and only while the
  // tab is actually visible.
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
      { rootMargin: "120px 0px", threshold: 0 },
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

  // Scroll drives the installation's tilt and camera depth: a frame-fraction
  // style progress across the section, updated inside a rAF callback.
  useEffect(() => {
    if (reduced) return; // the still frame doesn't need the subscription
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
    <section
      id="orbit"
      aria-labelledby="orbit-title"
      className="relative border-t border-line/60 px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1560px]">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4">
            <span className="meta text-[clamp(11px,2.6vw,14px)] tracking-[0.34em] text-crimson">
              Interlude Study — Rishi Orbit
            </span>
            <span className="meta hidden text-[10.5px] tracking-[0.34em] sm:block">
              Interactive · WebGL
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-20">
          <Reveal delay={60}>
            <h2
              id="orbit-title"
              className="font-editorial text-[clamp(2.4rem,5.6vw,4.9rem)] leading-[0.98] text-ivory"
            >
              An orbit in <span className="type-italic text-crimson">red</span>{" "}
              and steel.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-[15px] leading-[1.85] text-ash lg:pb-3">
              A small installation in weight and light. Drag it to rotate, let
              the scroll move the frame, and the crimson travellers keep their
              paths.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div
            ref={stage}
            className="relative mt-14 overflow-hidden border border-line/70 select-none"
          >
            <div className="absolute inset-0 bg-[radial-gradient(115%_120%_at_50%_8%,#18080b_0%,#0c0a0b_55%,#070607_100%)]" />

            {/* Left bloom, right rim — the hero's light carried into 3D. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-oxblood/30 blur-[110px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-10 -top-16 h-56 w-56 rounded-full bg-crimson/10 blur-[90px]"
            />

            <div className="relative h-[88vw] max-h-[540px] min-h-[340px] w-full sm:h-[500px] lg:h-[620px]">
              {noWebGL ? (
                <StaticOrbit />
              ) : (
                <Suspense fallback={<StaticOrbit />}>
                  <OrbitScene
                    reducedMotion={reduced}
                    active={active}
                    progressRef={progress}
                  />
                </Suspense>
              )}
            </div>

            {/* Control surface — the only instruction the piece gives. */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-line/50 bg-ink/55 px-4 py-3 backdrop-blur-sm sm:px-6">
              <span className="meta text-[9px] tracking-[0.3em] text-ivory/70">
                Drag · Rotate
              </span>
              <span className="meta hidden text-[9px] tracking-[0.3em] text-ash sm:block">
                {reduced
                  ? "Still frame — reduced motion respected"
                  : "Scroll · Depth"}
              </span>
              <span className="meta text-[9px] tracking-[0.3em] text-crimson/85">
                {noWebGL ? "Static study" : "Live render"}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** The composed still frame: rings, bloom and a lone crimson traveller. */
function StaticOrbit() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 grid place-items-center"
    >
      <svg
        viewBox="0 0 480 480"
        fill="none"
        className="w-[74%] max-w-[440px] text-ivory/25"
        stroke="currentColor"
      >
        <ellipse cx="240" cy="240" rx="188" ry="188" strokeWidth="0.8" />
        <ellipse
          cx="240"
          cy="240"
          rx="196"
          ry="170"
          strokeWidth="0.7"
          transform="rotate(-18 240 240)"
        />
        <ellipse
          cx="240"
          cy="240"
          rx="176"
          ry="150"
          strokeWidth="0.6"
          transform="rotate(28 240 240)"
        />
        <circle cx="240" cy="240" r="34" className="fill-[#17171b]" />
        <circle cx="240" cy="240" r="34" strokeWidth="0.6" />
        <circle cx="377" cy="204" r="3" fill="#ff2b40" stroke="none" />
        <circle cx="110" cy="118" r="2" fill="#ff2b40" stroke="none" opacity="0.6" />
      </svg>
    </div>
  );
}
