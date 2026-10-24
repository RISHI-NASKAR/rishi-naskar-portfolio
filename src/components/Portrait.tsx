import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * The portrait — the real photograph, with no frame.
 *
 * The cut-out sits directly on the page: the image is masked at the sides and
 * bottom so it dissolves into the black and oxblood atmosphere instead of
 * ending on a rectangle, then colour-graded just enough to belong to the scene
 * (slight desaturation, a touch of contrast, a soft crimson light from the
 * right). No border, no card, no emblem, no caption.
 *
 * The photograph is read from `public/`, trying the usual filenames in order.
 * If none of them exists the component renders nothing rather than a
 * placeholder.
 */
const PORTRAIT_SOURCES_ORDERED = [
  "/portrait.webp",
  "/portrait-new.webp",
  "/portrait.png",
  "/portrait.jpg",
  "/portrait.jpeg",
];

type Status = "loading" | "ready" | "missing";

export default function Portrait({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>("loading");
  const [source, setSource] = useState(0);
  const stage = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const stageClass = cn("portrait-stage", status === "ready" && className);

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const node = stage.current;
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
  }, [reduced]);    /* When the file is absent the column quietly collapses — no emblem, no
     placeholder, just the hero's negative space. */
    if (status === "missing") return <span hidden data-portrait="missing" />;

  return (
    <div ref={stage} className={stageClass}>
      {/* The light the subject is standing in — behind, never a frame. */}
      <div aria-hidden="true" className="portrait-halo" />
      <div aria-hidden="true" className="portrait-floor" />

      <img
        key={PORTRAIT_SOURCES_ORDERED[source]}
        src={PORTRAIT_SOURCES_ORDERED[source]}
        alt="Rishi Naskar"
        width={1254}
        height={1254}
        fetchPriority="high"
        decoding="async"
        data-ready={status === "ready"}
        onLoad={(event) => {
          if (!event.currentTarget.naturalWidth) setStatus("missing");
          else setStatus("ready");
        }}
        onError={() => {
          const next = source + 1;
          // If the last file also failed, stop retrying instead of looping.
          if (next >= PORTRAIT_SOURCES_ORDERED.length) {
            setStatus("missing");
          } else {
            setSource(next);
          }
        }}
        className="portrait-img"
      />

      {/* Grade: warms the shadows, lets the ivory skin tones stay real. */}
      <div aria-hidden="true" className="portrait-grade" />
    </div>
  );
}
