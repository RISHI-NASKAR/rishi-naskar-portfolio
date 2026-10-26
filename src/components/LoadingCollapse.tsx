import { useEffect, useRef, useState } from "react";

/**
 * THE COLLAPSE — RN
 *
 * The cinematic loading experience. Four phases driven by one 3-second
 * timeline: the void → reality breaking (ring + particles) → the implosion →
 * the rebirth (slit of crimson light, metallic monogram, ripple into the
 * portfolio).
 *
 * It deliberately replaces the plain Suspense fallback and plays once at boot
 * on the homepage. The page behind it keeps loading; when the timeline ends
 * the overlay fades into the site, so the loader can never stall the app:
 * completion is time-driven, never resource-driven.
 *
 * Reduced motion renders the static end-frame (monogram + name) instead of
 * the sequence. Pointer reactions (particles + ring tilt) run only if a fine
 * pointer exists — touch devices get the automatic choreography.
 */

const SEQUENCE_MS = 3200; // phase 1–4
const FADE_MS = 700; // cross-fade into the portfolio
const REDUCED_MS = 900; // static hold for prefers-reduced-motion

type Particle = {
  angle: number;
  radius: number; // fraction of min(w, h)
  spin: number; // rad / ms
  size: number;
  hot: boolean;
  drift: number;
  px: number; // previous draw position (trail)
  py: number;
};

const IMPLOSION_START = 0.66; // fraction of the timeline
const IMPLOSION_END = 0.845;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function LoadingCollapse({ onDone }: { onDone?: () => void }) {
  const reduced = useState(prefersReducedMotion)[0];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) {
      const t = window.setTimeout(() => setDone(true), REDUCED_MS);
      return () => window.clearTimeout(t);
    }

    // Never let the intro lock the document if it unmounts mid-way.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d") ?? null;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!canvas) return;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // The particle swarm — crimson dust that drifts, then spirals inward.
    const particles: Particle[] = Array.from({ length: 110 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 0.22 + Math.random() * 0.42,
      spin: (0.00012 + Math.random() * 0.0002) * (Math.random() < 0.5 ? 1 : -1),
      size: 0.6 + Math.random() * 1.5,
      hot: Math.random() < 0.14,
      drift: Math.random() * Math.PI * 2,
      px: -1,
      py: -1,
    }));

    // Subtle pointer reaction: the swarm centre and the ring plane drift a
    // few pixels toward the cursor (fine pointers only).
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let targetX = 0;
    let targetY = 0;
    let pointerX = 0;
    let pointerY = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      targetX = (event.clientX / window.innerWidth) * 2 - 1;
      targetY = (event.clientY / window.innerHeight) * 2 - 1;
    };
    if (finePointer) window.addEventListener("pointermove", onPointerMove);

    let raf = 0;
    let last = performance.now();
    const start = last;
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      setDone(true);
    };

    const frame = (now: number) => {
      const dt = Math.min(48, now - last);
      last = now;
      const t = now - start;
      const n = Math.min(1, t / SEQUENCE_MS);

      // ---- pointer easing -------------------------------------------------
      pointerX += (targetX - pointerX) * 0.05;
      pointerY += (targetY - pointerY) * 0.05;
      if (tiltRef.current) {
        tiltRef.current.style.transform = `rotateX(${(pointerY * -3).toFixed(2)}deg) rotateY(${(pointerX * 5).toFixed(2)}deg)`;
      }

      // ---- particles ------------------------------------------------------
      if (ctx && w > 0) {
        ctx.clearRect(0, 0, w, h);
        const cx = w / 2 + pointerX * 14;
        const cy = h / 2 + pointerY * 10;
        const base = Math.min(w, h) * 0.5;
        const implode =
          n <= IMPLOSION_START
            ? 0
            : Math.min(1, (n - IMPLOSION_START) / (IMPLOSION_END - IMPLOSION_START));
        const ease = 1 - Math.pow(1 - implode, 2.6);
        const dissolve =
          n < 0.88 ? 1 : Math.max(0, 1 - (n - 0.88) / 0.09);
        // Born from the void, brighten through the drift, flare at the end.
        let alphaScale =
          n < 0.18 ? 0 : n < 0.42 ? (n - 0.18) / 0.24 : 1;
        if (dissolve < 1) alphaScale *= dissolve;

        if (alphaScale > 0) {
          for (const p of particles) {
            p.angle += p.spin * dt * (1 + ease * 9);
            let r = p.radius * base * (1 - ease) + Math.sin(t * 0.001 + p.drift) * 6;
            let vy = 0.62; // elliptical plane = pseudo-3D orbit
            if (ease > 0) vy = 0.62 + ease * 0.38;
            const x = cx + Math.cos(p.angle) * r;
            const y = cy + Math.sin(p.angle) * r * vy;

            const heat = n > 0.55 ? Math.min(1, (n - 0.55) / 0.18) : 0;
            const a = (p.hot ? 0.85 : 0.55) * alphaScale * (1 + heat * 0.4);
            const color = p.hot || heat > 0.75
              ? `rgba(255,150,160,${Math.min(1, a).toFixed(3)})`
              : `rgba(211,38,64,${Math.min(1, a).toFixed(3)})`;

            if (p.px > -1) {
              ctx.beginPath();
              ctx.lineWidth = Math.max(0.5, p.size * 0.55);
              ctx.strokeStyle = color;
              ctx.moveTo(p.px, p.py);
              ctx.lineTo(x, y);
              ctx.stroke();
            }
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(x, y, p.size, 0, Math.PI * 2);
            ctx.fill();
            p.px = x;
            p.py = y;
          }
        }
      }

      if (n >= 1) finish();
      else raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      if (finePointer) window.removeEventListener("pointermove", onPointerMove);
      document.body.style.overflow = previousOverflow;
    };
  }, [reduced]);

  // Fade out, then hand control back to the route.
  useEffect(() => {
    if (!done) return;
    const t = window.setTimeout(() => onDone?.(), FADE_MS);
    return () => window.clearTimeout(t);
  }, [done, onDone]);

  if (reduced) {
    return (
      <div
        className={`loader-collapse is-reduced grain ${done ? "is-done" : ""}`}
        role="status"
        aria-label="Loading the portfolio"
      >
        <div className="loader-collapse__bend" />
        <div className="loader-collapse__brand">
          <span className="loader-collapse__mono font-signature">RN</span>
          <span className="loader-collapse__name meta">Rishi Naskar</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`loader-collapse grain ${done ? "is-done" : ""}`}
      role="status"
      aria-label="Loading the portfolio"
    >
      <div className="loader-collapse__bend" />
      <canvas ref={canvasRef} className="loader-collapse__canvas" />
      <div className="loader-collapse__halo" />

      {/* The orbital stage — tilted crimson rings around the monogram. */}
      <div ref={tiltRef} className="loader-collapse__stage">
        <div className="loader-collapse__rings">
          <span className="loader-collapse__ring loader-ring--a" />
          <span className="loader-collapse__ring loader-ring--b" />
          <span className="loader-collapse__ring loader-ring--arc" />
        </div>
      </div>

      <div className="loader-collapse__brand">
        <span className="loader-collapse__mono font-signature">RN</span>
        <span className="loader-collapse__name meta">Rishi Naskar</span>
      </div>

      <span className="loader-collapse__slit" />
      <span className="loader-collapse__ripple" />

      <span className="sr-only">Loading — Rishi Naskar, portfolio</span>
    </div>
  );
}

/**
 * The route-transition fallback: the same end-frame the collapse resolves
 * into (black, monogram, name) so any handoff between the intro and a lazy
 * route reads as one continuous scene.
 */
export function LoaderIdle() {
  return (
    <div
      className="loader-idle grain"
      role="status"
      aria-label="Loading the portfolio"
    >
      <span className="loader-idle__ring" aria-hidden="true" />
      <span className="font-signature block text-2xl leading-none tracking-[0.14em] text-ivory">
        RN
      </span>
      <span className="meta mt-3 block text-[8.5px] tracking-[0.32em]">
        Rishi Naskar
      </span>
    </div>
  );
}

export default LoadingCollapse;
