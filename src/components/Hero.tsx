import { useEffect, useRef, useState } from "react";
import { useReducedMotion, usePointerScale } from "@/hooks/use-reduced-motion";
import { GRAIN } from "@/lib/grain";

interface HeroProps {
  onNavigate?: (section: string) => void;
}

/**
 * Hero: dark ink panel on the papery page, oversized serif typography on the
 * left, portrait treated as a 3D plane on the right. Pointer position drives
 * layered parallax (text and portrait move at different speeds); everything
 * eases back to rest when the pointer leaves. Reduced-motion: static.
 */
export default function Hero({ onNavigate }: HeroProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
  const isReduced = useReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const el = panelRef.current;
    if (!el || isReduced) return;
    let frame = 0;
    const move = (e: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const r = el.getBoundingClientRect();
        setPointer({
          x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)),
          y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)),
        });
      });
    };
    const leave = () => setPointer({ x: 0.5, y: 0.5 });
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [isReduced]);

  // Reduced perspective on tablets (see usePointerScale).
  const scale = usePointerScale();
  const px = (pointer.x - 0.5) * scale;
  const py = (pointer.y - 0.5) * scale;
  const EASE = "cubic-bezier(0.2, 0.7, 0.2, 1)";

  const layers = {
    portrait: {
      transform: isReduced
        ? undefined
        : `perspective(1200px) rotateX(${(-py * 4).toFixed(3)}deg) rotateY(${(px * 5.5).toFixed(3)}deg) translate3d(0,0,${(py * 16 + px * 12).toFixed(1)}px)`,
      transition: isReduced ? undefined : `transform 0.25s ${EASE}`,
    },
    portraitInner: {
      transform: isReduced ? undefined : `translate3d(${(px * -22).toFixed(2)}px, ${(py * -16).toFixed(2)}px, 0) scale(1.06)`,
      transition: isReduced ? undefined : `transform 0.35s ${EASE}`,
    },
    text: {
      transform: isReduced ? undefined : `translate3d(${(px * 14).toFixed(2)}px, ${(py * 9).toFixed(2)}px, 0)`,
      transition: isReduced ? undefined : `transform 0.3s ${EASE}`,
    },
    name: {
      transform: isReduced ? undefined : `translate3d(${(px * 24).toFixed(2)}px, ${(py * 12).toFixed(2)}px, 0)`,
      transition: isReduced ? undefined : `transform 0.35s ${EASE}`,
    },
    caption: {
      transform: isReduced ? undefined : `translate3d(${(px * 7).toFixed(2)}px, ${(py * 5).toFixed(2)}px, 0)`,
      transition: isReduced ? undefined : `transform 0.4s ${EASE}`,
    },
  };

  const go = (section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.(section);
  };

  return (
    <section id="top" className="relative w-full px-4 pt-4 sm:px-6 sm:pt-6">
      {/* NAV */}
      <header className="mb-4 flex flex-wrap items-center justify-between gap-2 px-1 sm:mb-6 sm:gap-4">
        <a
          href="#top"
          onClick={go("top")}
          aria-label="Rishi Naskar — home"
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-foreground/70 font-display text-lg font-semibold tracking-tight transition-colors hover:border-[#E63329] hover:bg-[#E63329] hover:text-white"
        >
          RN
        </a>
        <nav className="flex items-center gap-3 sm:gap-6" aria-label="Primary">
          <a href="#work" onClick={go("work")} className="font-mono-label text-[11px] hover:opacity-60 transition-opacity">Work</a>
          <a href="#about" onClick={go("about")} className="font-mono-label text-[11px] hover:opacity-60 transition-opacity">About</a>
          <a href="#contact" onClick={go("contact")} className="font-mono-label text-[11px] hover:opacity-60 transition-opacity">Contact</a>
          <a
            href="/dashboard"
            className="hidden font-mono-label text-[11px] text-muted-foreground transition-opacity hover:opacity-60 sm:inline"
          >
            Studio desk
          </a>
          <a
            href="#contact"
            onClick={go("contact")}
            className="rounded-full border border-[#E63329] bg-[#E63329] px-3 py-2 font-mono-label text-[11px] text-white transition-transform hover:-translate-y-0.5 sm:px-4"
          >
            Let's talk
          </a>
        </nav>
      </header>

      {/* HERO PANEL */}
      <div
        ref={panelRef}
        className="relative overflow-hidden rounded-[28px] bg-black text-[#F2F0EA] shadow-[0_40px_120px_-40px_rgba(230,51,41,0.28)]"
        style={{ minHeight: "min(86vh, 860px)" }}
      >
        {/* grain */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
          style={{ backgroundImage: `url("${GRAIN}")`, backgroundSize: "160px 160px" }}
        />
        {/* TOPBAR */}
        <div className="relative z-10 flex items-center justify-between gap-4 border-b border-[#EDEAE1]/12 px-5 py-4 sm:px-8">
          <span className="hidden font-mono-label text-[10px] text-[#EDEAE1]/60 sm:inline">Edition 01 — Portfolio</span>
          <span className="flex items-center gap-2 font-mono-label text-[10px] text-[#EDEAE1]/60">
            <span className="inline-block size-1.5 rounded-full bg-[#E63329]" aria-hidden="true" />
            <span className="hidden sm:inline">Open for select projects</span>
            <span className="sm:hidden">Open for projects</span>
          </span>
        </div>

        {/* HERO_BODY */}
        <div className="relative z-10 grid items-end gap-6 px-5 pt-8 pb-4 sm:px-8 sm:pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:pb-0">
          {/* Left — oversized typography */}
          <div className="pb-4 lg:pb-16" style={layers.text}>
            <p className="mb-3 font-mono-label text-[11px] text-[#EDEAE1]/70">I am</p>
            <h1 className="font-display font-semibold uppercase leading-[0.84] tracking-[-0.02em]">
              <span
                className="block text-[clamp(3rem,11vw,8.5rem)]"
                style={layers.name}
              >
                Rishi
                <br />
                Naskar
              </span>
              <span
                className="mt-2 block text-[clamp(2rem,7vw,5.4rem)] italic text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(230,51,41,0.95)", ...(layers.name as React.CSSProperties) }}
              >
                Designer
              </span>
              <span
                className="block text-[clamp(2rem,7vw,5.4rem)] italic text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(230,51,41,0.95)", ...(layers.name as React.CSSProperties) }}
              >
                &amp; Filmmaker
              </span>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-[#EDEAE1]/75">
              Graphic design, cinema and visual storytelling — building images
              that carry a mood and hold a frame.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                onClick={go("work")}
                className="rounded-full bg-[#E63329] px-5 py-2.5 font-mono-label text-[11px] text-white transition-transform hover:-translate-y-0.5"
              >
                View selected work
              </a>
              <a
                href="#about"
                onClick={go("about")}
                className="rounded-full border border-[#F2F0EA]/40 px-5 py-2.5 font-mono-label text-[11px] text-[#F2F0EA] transition-colors hover:border-[#F2F0EA]/80"
              >
                About Rishi
              </a>
            </div>
          </div>

          {/* Right — portrait as a 3D plane */}
          <div className="relative" style={layers.portrait}>
            <div className="relative overflow-hidden rounded-t-[220px] rounded-b-[28px] border border-[#F2F0EA]/15 bg-gradient-to-b from-[#1A1A18] to-black" style={{ aspectRatio: "4 / 5" }}>
              <div className="absolute inset-0" style={layers.portraitInner as React.CSSProperties}>
                {!imgFailed ? (
                  <img
                    src="/portrait.png"
                    alt="Rishi Naskar — portrait"
                    width={900}
                    height={1125}
                    loading="eager"
                    onError={() => setImgFailed(true)}
                    className="h-full w-full object-cover object-top grayscale contrast-[1.05]"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label="Portrait placeholder — add your photo at public/portrait.png"
                    className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(160deg,#2A271F_0%,#14130F_70%)]"
                  >
                    <span className="font-display text-7xl font-semibold text-[#EDEAE1]/80 sm:text-8xl">
                      RN
                    </span>
                    <span className="font-mono-label text-[10px] text-[#EDEAE1]/50">
                      Add public/portrait.png
                    </span>
                  </div>
                )}
              </div>
              {/* vignette + grain for cinematic treatment */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_10%,transparent_45%,rgba(0,0,0,0.78)_100%)]" />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
                style={{ backgroundImage: `url("${GRAIN}")`, backgroundSize: "160px 160px" }}
              />
            </div>
            <span className="absolute -left-3 bottom-6 rotate-[-90deg] origin-left font-mono-label text-[10px] text-[#EDEAE1]/50">
              Portrait — grayscale
            </span>
          </div>
        </div>
        {/* CAPTION */}
        <div
          className="relative z-10 mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#EDEAE1]/12 px-5 py-4 sm:px-8"
          style={layers.caption}
        >
          <p className="font-mono-label text-[10px] text-[#EDEAE1]/70">
            Visual Design <span className="text-[#EDEAE1]/40">/</span> Cinematic
            Storytelling <span className="text-[#EDEAE1]/40">/</span> Creative
            Direction
          </p>
          <p className="font-mono-label text-[10px] text-[#EDEAE1]/50">
            Scroll ↓
          </p>
        </div>
      </div>
      <p className="px-1 pb-6 pt-3 font-mono-label text-[10px] text-muted-foreground sm:text-[11px]">
        Portfolio — Rishi Naskar · Designer &amp; Filmmaker
      </p>
    </section>
  );
}
