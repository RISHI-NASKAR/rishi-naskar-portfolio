import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Restrained scroll reveal: one short lift and a fade, once, when the block
 * enters the lower third of the viewport. Nothing loops, nothing parallaxes.
 * `variant="line"` scales a hairline out from the left instead.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "rise",
}: {
  children: ReactNode;
  className?: string;
  /** Stagger in milliseconds, applied through a CSS variable. */
  delay?: number;
  variant?: "rise" | "line";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={cn(variant === "line" ? "reveal-line" : "reveal", className)}
    >
      {children}
    </div>
  );
}
