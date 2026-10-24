import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Identity from "@/components/Identity";
import Interlude from "@/components/Interlude";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import OrbitCursor from "@/components/OrbitCursor";
import CinematicDepth from "@/components/CinematicDepth";

/**
 * The portfolio as a visual journal: an opening frame, the creative identity,
 * a typographic interlude, the person, the work, the craft, and the final
 * crimson frame. All motion is scroll-triggered and short; nothing hijacks the
 * scroll and everything reads as a still frame when motion is reduced.
 */
export default function Landing() {
  return (
    <div className="relative min-h-screen bg-ink text-ivory">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:border focus:border-crimson focus:bg-ink focus:px-5 focus:py-3 focus:font-mono focus:text-[10px] focus:uppercase focus:tracking-[0.24em] focus:text-ivory"
      >
        Skip to content
      </a>

      <SiteHeader />

      {/* Two enhancements over the same page: the orbital cursor, and the
          scroll-driven depth that only ever moves decorative layers. */}
      <OrbitCursor />
      <CinematicDepth />

      <main id="main">
        <Hero />
        <Identity />
        <Interlude />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
