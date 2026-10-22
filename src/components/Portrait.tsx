import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Monogram } from "./ornaments";

/**
 * The portrait plate.
 *
 * The photograph lives at `public/portrait.png`. Until that file is in place
 * the plate falls back to the crest composition, so the composition is complete
 * either way and no broken image or "add a photo" note can reach a visitor.
 *
 * Treatment is deliberately restrained: a slight desaturation and contrast
 * lift, a crimson rim on the right edge, an oxblood bloom behind the shoulders,
 * and a few pixels of pointer parallax.
 */
const PORTRAIT_SRC = "/portrait.png";

type Status = "loading" | "ready" | "missing";

export default function Portrait({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>("loading");
  const plate = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const node = plate.current;
        if (!node) return;
        const px = (event.clientX / window.innerWidth - 0.5) * 2;
        const py = (event.clientY / window.innerHeight - 0.5) * 2;
        node.style.setProperty("--px", px.toFixed(3));
        node.style.setProperty("--py", py.toFixed(3));
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <figure className={cn("relative", className)}>
      {/* Bloom behind the plate — the crimson light source of the frame. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 -top-12 bottom-0 -z-10"
      >
        <div className="absolute right-4 top-10 h-64 w-64 rounded-full bg-crimson/20 blur-[90px]" />
        <div className="absolute bottom-4 left-0 h-48 w-56 rounded-full bg-oxblood/30 blur-[80px]" />
      </div>

      <div ref={plate} className="portrait-plate">
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-line/80 bg-charcoal">
          {/* Crest underlay: visible while the photograph loads and if it is absent. */}
          <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(120%_100%_at_50%_10%,#2a0b10_0%,#120d0f_45%,#080808_100%)]">
            <div className="relative">
              <Monogram className="w-[46%] min-w-[9rem]" label="AI · CINEMA · DESIGN" />
            </div>
            <span
              aria-hidden="true"
              className="meta absolute right-4 top-5 text-[0.6rem] tracking-[0.42em] text-ash/60 [writing-mode:vertical-rl]"
            >
              Rishi Naskar
            </span>
            <span className="absolute left-5 top-5 h-8 w-px bg-gradient-to-b from-crimson/70 to-transparent" />
            <span className="absolute left-5 top-5 h-px w-8 bg-gradient-to-r from-crimson/70 to-transparent" />
          </div>

          {status !== "missing" ? (
            <img
              src={PORTRAIT_SRC}
              alt="Rishi Naskar"
              width={800}
              height={1000}
              decoding="async"
              onLoad={(event) => {
                if (!event.currentTarget.naturalWidth) setStatus("missing");
                else setStatus("ready");
              }}
              onError={() => setStatus("missing")}
              className={cn(
                "absolute inset-0 size-full object-cover transition-opacity duration-1000",
                status === "ready" ? "opacity-100" : "opacity-0",
              )}
            />
          ) : null}

          {/* Cinematic grade + vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.34)_0%,rgba(8,8,8,0)_28%,rgba(8,8,8,0.12)_62%,rgba(8,8,8,0.92)_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-[linear-gradient(270deg,rgba(181,18,43,0.2)_0%,rgba(101,13,25,0.06)_45%,rgba(8,8,8,0)_100%)] mix-blend-screen"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-crimson/80 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 border border-ivory/10"
          />

          {/* Caption inside the frame */}
          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-5 pb-5">
            <span className="meta text-[0.6rem] tracking-[0.32em] text-ivory/70">
              Rishi Naskar
            </span>
            <span className="meta text-[0.58rem] tracking-[0.26em] text-crimson">
              AI · Cinema · Design
            </span>
          </figcaption>
        </div>
      </div>

      <div aria-hidden="true" className="mt-3 flex items-center justify-between">
        <span className="meta text-[0.58rem] tracking-[0.3em]">Portfolio — MMXXVI</span>
        <span className="h-px w-16 bg-line" />
      </div>
    </figure>
  );
}
