import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Portrait from "@/components/Portrait";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const SolarScene = lazy(() => import("./SolarScene"));

/**
 * HeroSolar — the hero's orbital composition.
 *
 * Three depth planes around the real portrait: the WebGL orbital scene behind
 * it (axis z-0, pointer-events disabled), the portrait itself (z-10), and a
 * light DOM/SVG orbital layer in front (z-20, two crimson arcs with planets on
 * SMIL-travelled paths). The five profession labels sit on the outer edges on
 * desktop and collapse into a readable list beneath the stage on mobile.
 */

const LABELS = [
  { title: "AI Engineer", sub: "Build · Automate · Innovate", pos: "left-0 top-[3%]", flip: false },
  { title: "Cinematographer", sub: "Capture · Direct · Storytell", pos: "right-0 top-[15%]", flip: true },
  { title: "Creative Designer", sub: "Visualize · Design · Create", pos: "right-[1%] bottom-[13%]", flip: true },
  { title: "Storyteller", sub: "Imagine · Write · Express", pos: "left-[1%] bottom-[5%]", flip: false },
  { title: "Problem Solver", sub: "Analyze · Solve · Improve", pos: "left-[27%] top-[11%]", flip: false },
] as const;

export default function HeroSolar() {
  const reduced = useReducedMotion();
  const stage = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [active, setActive] = useState(true); // corrected by the observer on mount

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
    <div>
      {/* --------------------------------------------------------- the stage */}
      <div
        ref={stage}
        className="hero-rise relative mx-auto aspect-square w-full max-w-[24rem] select-none sm:max-w-[28rem] lg:max-w-[44rem]"
        style={{ "--delay": "0.5s" } as React.CSSProperties}
      >
        {/* Atmospheric bloom behind everything. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(58%_58%_at_50%_42%,rgba(101,13,25,0.42)_0%,rgba(38,7,12,0.26)_44%,rgba(8,8,8,0)_72%)]"
        />

        {/* Back layer — the real 3D orbital scene (or its still fallback). */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
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

        {/* The portrait — the visual anchor everything orbits. */}
        <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center">
          <div className="w-[62%] lg:w-[58%]">
            <Portrait />
          </div>
        </div>

        {/* Front layer — one crimson arc, two planets on SMIL orbital paths.
            Exported so the current hero stage composites them; HeroSolar itself
            is the retired full composition kept as the source of these layers. */}
        <SolarForeground reduced={reduced} />

        {/* Profession labels — desktop only here; mobile renders them as a
            list beneath the stage. */}
        {LABELS.map((label) => (
          <div
            key={label.title}
            data-hero-label
            className={`absolute z-30 hidden lg:block ${label.pos}`}
          >
            <div
              className={`flex items-center gap-3 ${label.flip ? "flex-row-reverse" : ""} ${
                label.flip ? "text-right" : "text-left"
              }`}
            >
              <span
                aria-hidden="true"
                className="size-1.5 shrink-0 rounded-full bg-crimson shadow-[0_0_10px_2px_rgba(225,29,46,0.4)]"
              />
              <span aria-hidden="true" className="h-px w-9 shrink-0 bg-crimson/45" />
              <div className="min-w-0 whitespace-nowrap">
                <p className="font-mono text-[10px] uppercase leading-tight tracking-[0.28em] text-ivory">
                  {label.title}
                </p>
                <p className="meta mt-1 text-[8.5px] tracking-[0.2em] text-ash">
                  {label.sub}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ------------------------------------------------ mobile label list */}
      <ul className="mx-auto mt-7 w-full max-w-[24rem] border-t border-line/50 sm:max-w-[28rem] lg:hidden">
        {LABELS.map((label) => (
          <li
            key={label.title}
            className="flex items-center gap-3 border-b border-line/40 py-2.5"
          >
            <span
              aria-hidden="true"
              className="size-1.5 shrink-0 rounded-full bg-crimson shadow-[0_0_8px_1px_rgba(225,29,46,0.35)]"
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ivory">
              {label.title}
            </span>
            <span className="meta ml-auto text-[8.5px] tracking-[0.16em] whitespace-nowrap text-ash">
              {label.sub}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------- foreground layer */

export function SolarForeground({ reduced }: { reduced: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      fill="none"
      className="pointer-events-none absolute -inset-[6%] z-20 h-[112%] w-[112%]"
    >
      <defs>
        <radialGradient id="solar-planet-a" cx="34%" cy="32%" r="78%">
          <stop offset="0%" stopColor="#3d2127" />
          <stop offset="55%" stopColor="#171419" />
          <stop offset="100%" stopColor="#0c0b0e" />
        </radialGradient>
        <radialGradient id="solar-planet-b" cx="68%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#36222a" />
          <stop offset="60%" stopColor="#161419" />
          <stop offset="100%" stopColor="#0b0a0d" />
        </radialGradient>
      </defs>

      {/* Front arc one — larger ellipse, lower right. */}
      <g transform="translate(50 50) rotate(-16) scale(1 0.56)">
        <ellipse
          rx="46"
          ry="46"
          stroke="rgba(225,29,46,0.28)"
          strokeWidth="0.3"
          strokeDasharray="58 120"
          strokeDashoffset="20"
        >
          {!reduced ? (
            <animate
              attributeName="stroke-dashoffset"
              from="20"
              to="-78"
              dur="50s"
              repeatCount="indefinite"
            />
          ) : null}
        </ellipse>
        <g>
          <circle cx="46" cy="0" r="2.4" fill="url(#solar-planet-a)" />
          <circle cx="45" cy="-0.9" r="0.5" fill="#ff3349" opacity="0.85" />
          {!reduced ? (
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur="40s"
              repeatCount="indefinite"
            />
          ) : null}
        </g>
      </g>

      {/* Front arc two — tighter ellipse, upper left, subtler. */}
      <g transform="translate(50 50) rotate(24) scale(1 0.6)">
        <ellipse
          rx="40"
          ry="40"
          stroke="rgba(225,29,46,0.18)"
          strokeWidth="0.22"
          strokeDasharray="34 170"
          strokeDashoffset="90"
        >
          {!reduced ? (
            <animate
              attributeName="stroke-dashoffset"
              from="90"
              to="240"
              dur="60s"
              repeatCount="indefinite"
            />
          ) : null}
        </ellipse>
        <g>
          <circle cx="40" cy="0" r="1.6" fill="url(#solar-planet-b)" />
          <circle cx="40.7" cy="-0.7" r="0.4" fill="#ff3349" opacity="0.7" />
          {!reduced ? (
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 0 0"
              to="0 0 0"
              dur="55s"
              repeatCount="indefinite"
            />
          ) : null}
        </g>
      </g>
    </svg>
  );
}

/* ------------------------------------------------- static fallback (grid) */

/** The composed still frame for no-WebGL visitors / while the scene loads. */
export function SolarStatic() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      fill="none"
      className="absolute inset-0 h-full w-full"
    >
      {[70, 56, 42, 30].map((r, index) => (
        <ellipse
          key={r}
          cx="50"
          cy="50"
          rx={r}
          ry={r * (index % 2 ? 0.52 : 0.62)}
          stroke={index === 1 ? "rgba(225,29,46,0.55)" : "rgba(120,110,116,0.35)"}
          strokeWidth={index === 1 ? 0.45 : 0.25}
          transform={`rotate(${index % 2 ? 12 : -8} 50 50)`}
        />
      ))}
      <circle cx="83" cy="38" r="3.4" fill="url(#solar-static-planet)" />
      <circle cx="22" cy="63" r="2.4" fill="url(#solar-static-planet)" />
      <circle cx="63" cy="86" r="1.8" fill="#241519" />
      <defs>
        <radialGradient id="solar-static-planet" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#3d2127" />
          <stop offset="60%" stopColor="#171419" />
          <stop offset="100%" stopColor="#0c0b0e" />
        </radialGradient>
      </defs>
    </svg>
  );
}
