import { useState, useEffect, useSyncExternalStore } from "react";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(m.matches);
    onChange();
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/**
 * Parallax strength by viewport: full tilt on desktop (≥1024px), reduced
 * perspective on tablets, and pointer effects simply don't fire on touch.
 */
export function usePointerScale() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(min-width: 1024px)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => (window.matchMedia("(min-width: 1024px)").matches ? 1 : 0.5),
    () => 1
  );
}
