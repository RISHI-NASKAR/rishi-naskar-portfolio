import { Suspense, lazy } from "react";
import { MotionConfig } from "framer-motion";
import About from "./About";
import Contact from "./Contact";
import { CustomCursor } from "./CustomCursor";
import JourneyDriver from "./JourneyDriver";
import JourneyHud from "./JourneyHud";
import ScrollProgress from "./ScrollProgress";
import ShowcaseDeck from "./ShowcaseDeck";
import { BeyondPanel, CaptionPanel, MindIntro } from "./PhasePanels";
import { JOURNEY_ID } from "@/lib/journey";

/**
 * The WebGL scene is the heaviest thing on the site, so it is fetched after the
 * page has painted. The text, the navigation and the scroll model are already
 * live and scrollable while three.js is still downloading.
 */
const JourneyScene = lazy(() => import("@/three/JourneyScene"));

/**
 * Rishi Naskar — the scroll-driven universe.
 *
 * One fixed WebGL canvas holds the whole journey; the document scrolls through
 * it. The camera, the wires, the black hole and the multiverse are all driven by
 * the same progress value, so the visitor travels through a single continuous
 * scene rather than past a series of backgrounds.
 *
 * The journey container and the closing sections are separate blocks on purpose:
 * the container's height is exactly the sum of the phase panels, so scroll
 * progress and camera keyframes stay locked together, while about/contact keep
 * their normal document flow at the end.
 */
export default function Journey() {
  return (
    <MotionConfig reducedMotion="user">
      <JourneyDriver />
      <CustomCursor />
      <ScrollProgress />
      <Suspense fallback={null}>
        <JourneyScene />
      </Suspense>
      <JourneyHud />

      <main className="relative z-10 w-full">
        <div id={JOURNEY_ID} className="relative w-full">
          <MindIntro />
          <CaptionPanel phaseKey="convergence" />
          <CaptionPanel phaseKey="horizon" />
          <CaptionPanel phaseKey="passage" />
          <CaptionPanel phaseKey="multiverse" />
          <ShowcaseDeck />
          <BeyondPanel />
        </div>

        <div className="relative bg-[#05070f]/95">
          <About />
          <Contact />
        </div>
      </main>
    </MotionConfig>
  );
}
