import { useEffect, useRef, useState, useSyncExternalStore } from "react";

interface CustomCursorProps {
  hidden?: boolean;
}

/**
 * Desktop-only custom cursor: ink dot + outlined ring.
 * The ring expands over interactive elements; add `data-cursor="VIEW WORK"`
 * to any element to show a contextual label while hovered.
 */
export function CustomCursor({ hidden = false }: CustomCursorProps) {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [ringExpand, setRingExpand] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [pointer, setPointer] = useState({ x: -100, y: -100 });
  const raf = useRef<number | null>(null);

  // Touch devices and reduced-motion users get no custom cursor.
  // Subscribed via useSyncExternalStore so no setState runs inside an effect.
  const isUnsupported = useSyncExternalStore(
    (onChange) => {
      const coarse = window.matchMedia("(pointer: coarse)");
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
      coarse.addEventListener("change", onChange);
      reduced.addEventListener("change", onChange);
      return () => {
        coarse.removeEventListener("change", onChange);
        reduced.removeEventListener("change", onChange);
      };
    },
    () =>
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );

  const isHidden = hidden || isUnsupported;

  useEffect(() => {
    if (isHidden) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let handler: ((e: MouseEvent) => void) | null = null;

    handler = (e: MouseEvent) => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        setPointer({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handler);
    return () => {
      window.removeEventListener("mousemove", handler);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [isHidden]);

  useEffect(() => {
    if (isHidden) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!dot.current || prefersReduced) return;

    let frame: number;
    const tick = () => {
      if (dot.current) {
        dot.current.style.transform = `translate(${pointer.x}px, ${pointer.y}px)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${pointer.x}px, ${pointer.y}px) scale(${ringExpand ? 1.45 : 1})`;
      }
      frame = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(frame);
  }, [pointer, ringExpand, isHidden]);

  // Global hover detection: expand over interactive elements,
  // read a contextual label from the nearest [data-cursor] ancestor.
  useEffect(() => {
    if (isHidden) return;
    const over = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target || typeof target.closest !== "function") return;
      const labelled = target.closest<HTMLElement>("[data-cursor]");
      const interactive = target.closest<HTMLElement>(
        'a, button, [role="button"], input, textarea, select, [data-cursor-expand]'
      );
      setLabel(labelled ? labelled.dataset.cursor || null : null);
      setRingExpand(Boolean(labelled || interactive));
    };
    const out = (e: MouseEvent) => {
      const to = e.relatedTarget as Node | null;
      if (!to) {
        setLabel(null);
        setRingExpand(false);
      }
    };
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [isHidden]);

  // Hide the native cursor only while the custom one is active.
  useEffect(() => {
    document.body.classList.toggle("cursor-none", !isHidden);
    return () => document.body.classList.remove("cursor-none");
  }, [isHidden]);

  return (
    <>
      <div
        ref={dot}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 7,
          height: 7,
          margin: "-3.5px 0 0 -3.5px",
          background: "var(--foreground)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          transition: "transform 0.02s linear",
          opacity: hidden ? 0 : 1,
        }}
      />
      <div
        ref={ring}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 34,
          height: 34,
          margin: "-17px 0 0 -17px",
          border: "1px solid rgba(26, 24, 20, 0.45)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform",
          transition: "transform 0.18s cubic-bezier(0.2, 0.7, 0.2, 1), border-color 0.18s ease",
          opacity: hidden ? 0 : 1,
        }}
      />
      {label && (
        <span
          style={{
            position: "fixed",
            marginLeft: 22,
            marginTop: 46,
            transform: `translate(${pointer.x}px, ${pointer.y}px)`,
            fontFamily: "var(--font-sans)",
            fontSize: "0.6875rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--foreground)",
            background: "var(--background)",
            padding: "4px 8px",
            border: "1px solid var(--border)",
            borderRadius: "1px",
            pointerEvents: "none",
            zIndex: 9999,
            willChange: "transform",
            whiteSpace: "nowrap",
            opacity: 1,
            fontWeight: 500,
          }}
        >
          {label}
        </span>
      )}
    </>
  );
}
