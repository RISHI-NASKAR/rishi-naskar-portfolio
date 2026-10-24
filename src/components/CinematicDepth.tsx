import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Cinematic depth — restrained scroll parallax for the layers the page already
 * has.
 *
 * Any element in the document may opt in with:
 *   data-depth="0.05"          vertical drift, roughly a twentieth of travel
 *   data-depth-z="-140"        translateZ drift for elements inside a
 *                              `perspective` plane, so background layers also
 *                              change scale very slightly
 *
 * Only decorative layers should carry it: atmosphere blooms, hairlines, the
 * echo portrait, the dossier plate. Text and controls stay exactly where the
 * layout puts them. Movement is computed once per frame from the element's
 * position in the viewport, clamped to a small range, and removed entirely when
 * the visitor prefers reduced motion.
 */
export default function CinematicDepth() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-depth]"),
    );
    if (nodes.length === 0) return;

    const visible = new Set<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target as HTMLElement);
          else visible.delete(entry.target as HTMLElement);
        }
      },
      { rootMargin: "25% 0px 25% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));

    let frame = 0;
    const paint = () => {
      frame = 0;
      const viewport = window.innerHeight || 1;
      visible.forEach((node) => {
        const rect = node.getBoundingClientRect();
        // -0.5 (above the viewport) → 0.5 (below it).
        const position = (rect.top + rect.height / 2 - viewport / 2) / viewport;
        const depth = Number.parseFloat(node.dataset.depth ?? "0") || 0;
        const depthZ = Number.parseFloat(node.dataset.depthZ ?? "0") || 0;
        const y = Math.max(-80, Math.min(80, position * depth * 420));
        const z = Math.max(-220, Math.min(220, position * depthZ));
        node.style.transform = `translate3d(0px, ${y.toFixed(2)}px, ${z.toFixed(2)}px)`;
      });
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
      nodes.forEach((node) => node.style.removeProperty("transform"));
    };
  }, [reduced]);

  return null;
}
