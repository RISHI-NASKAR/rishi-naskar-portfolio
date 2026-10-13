import { MotionConfig } from "framer-motion";
import { CustomCursor } from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import TypeBreak from "@/components/TypeBreak";
import Contact from "@/components/Contact";

/**
 * Rishi's Portfolio — the long-page editorial experience.
 * Papery base, ink panels, cursor-driven 3D depth, scroll-linked motion.
 */
export default function Landing() {
  const navigate = (section: string) => {
    if (section === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MotionConfig reducedMotion="user">
      <CustomCursor />
      <ScrollProgress />
      <main className="min-h-screen overflow-x-clip bg-background text-foreground">
        <Hero onNavigate={navigate} />
        <About />
        <Work />
        <TypeBreak />
        <Contact />
      </main>
    </MotionConfig>
  );
}
