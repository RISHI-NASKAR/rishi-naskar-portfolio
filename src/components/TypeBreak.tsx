import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const LINES = [
  { text: "IMAGINATION", dir: 1 },
  { text: "HAS NO", dir: -1 },
  { text: "FRAME.", dir: 1 },
];

/**
 * Oversized typographic statement between gallery and contact.
 * Scroll-linked horizontal drift alternates per line; letters carry a subtle
 * alternating vertical offset for layered depth. Static under reduced motion.
 */
export default function TypeBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const isReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["7%", "-7%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["-4%", "5%"]);
  const motions = [x1, x2, x3];

  return (
    <section
      ref={ref}
      aria-label="Imagination has no frame"
      className="relative w-full overflow-hidden border-y border-border py-16 sm:py-24"
    >
      <div className="px-4 sm:px-6">
        {LINES.map((line, i) => (
          <motion.div
            key={line.text}
            style={{ x: isReduced ? 0 : motions[i] }}
            className="whitespace-nowrap will-change-transform"
          >
            <h2 className="font-display font-semibold uppercase leading-[0.82] tracking-[-0.03em] text-[clamp(3rem,15vw,12rem)]">
              {line.text.split("").map((ch, j) => (
                <span
                  key={`${ch}-${j}`}
                  className={
                    "inline-block " +
                    (j % 3 === 1
                      ? "text-transparent"
                      : "")
                  }
                  style={
                    j % 3 === 1
                      ? {
                          WebkitTextStroke: "1.5px rgba(26,24,20,0.75)",
                          transform: `translateY(${line.dir * (j % 2 ? 8 : 0)}px)`,
                        }
                      : { transform: `translateY(${line.dir * (j % 2 ? 0 : 6)}px)` }
                  }
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
            </h2>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 px-4 font-mono-label text-[10px] text-muted-foreground sm:px-6">
        Statement — scroll to feel the depth
      </p>
    </section>
  );
}
