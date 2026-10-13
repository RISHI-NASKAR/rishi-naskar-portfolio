import { motion, useScroll, useSpring } from "framer-motion";

/** Thin ink line at the very top of the viewport tracking scroll progress. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-40 h-[3px] origin-left bg-foreground"
    />
  );
}
