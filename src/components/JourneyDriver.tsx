import { useEffect } from "react";
import {
  JOURNEY_ID,
  PHASES,
  clamp01,
  damp,
  phaseIndexAt,
  ramp,
} from "@/lib/journey";
import {
  journey,
  measureJourney,
  publishHud,
  railAfterJourney,
} from "@/lib/journey-store";

/**
 * The engine behind the whole experience.
 *
 * It owns the single `requestAnimationFrame` loop that turns raw scroll into
 * smoothed progress, tracks the pointer for the camera, picks a detail budget
 * for the device and publishes the small snapshot the HUD renders from.
 *
 * Nothing here re-renders React while the visitor scrolls.
 */
export default function JourneyDriver() {
  useEffect(() => {
    /* ------------------------------------------------------ preferences */
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyMotionPreference = () => {
      journey.reduced = motionQuery.matches;
    };
    applyMotionPreference();
    motionQuery.addEventListener("change", applyMotionPreference);

    /* ---------------------------------------------------------- pointer */
    let rawX = 0;
    let rawY = 0;
    const onPointerMove = (event: PointerEvent) => {
      // Touch drags scroll the page and would otherwise leave a frozen gravity
      // well on screen — only a real pointer turns these effects on.
      if (event.pointerType === "mouse" || event.pointerType === "pen") {
        journey.pointerActive = true;
      }
      rawX = (event.clientX / window.innerWidth) * 2 - 1;
      rawY = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    /* ------------------------------------------------ cached geometry */
    let journeyTop = 0;
    let journeySpan = 1;
    const remeasure = () => {
      const measured = measureJourney();
      journeyTop = measured.top;
      journeySpan = measured.span;
    };
    remeasure();

    const container = document.getElementById(JOURNEY_ID);
    const observer =
      typeof ResizeObserver !== "undefined" && container
        ? new ResizeObserver(remeasure)
        : null;
    if (observer && container) observer.observe(container);
    window.addEventListener("resize", remeasure);
    // Fonts and lazy images can change the layout after first paint.
    window.addEventListener("load", remeasure);
    const settleTimer = window.setTimeout(remeasure, 600);

    /* ------------------------------------------------------------ loop */
    let frameId = 0;
    let lastTime = performance.now();
    let lastPhaseIndex = -1;
    let lastRail = -1;
    let lastPercent = -1;

    const snapToPhaseCentre = (value: number) => {
      const phase = PHASES[phaseIndexAt(value)];
      return phase.start + (phase.end - phase.start) * 0.5;
    };

    const tick = (now: number) => {
      frameId = requestAnimationFrame(tick);
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      journey.target = clamp01((window.scrollY - journeyTop) / journeySpan);

      if (journey.reduced) {
        // Reduced motion: still frames per phase instead of a travelling camera.
        journey.progress = snapToPhaseCentre(journey.target);
      } else {
        journey.time += dt;
        journey.progress += (journey.target - journey.progress) * damp(dt, 6.5);
        const delta = Math.abs(journey.progress - journey.target);
        journey.velocity = Math.min(delta / Math.max(dt, 1e-3) / 6, 1);
      }

      journey.pointerX += (rawX - journey.pointerX) * damp(dt, 3.6);
      journey.pointerY += (rawY - journey.pointerY) * damp(dt, 3.6);

      const phaseIndex = phaseIndexAt(journey.progress);
      const rail =
        journey.progress > 0.9985 ? railAfterJourney() : PHASES[phaseIndex].rail;
      const percent = Math.round(
        ramp(journey.progress, 0, 1) * 100,
      );

      if (
        phaseIndex !== lastPhaseIndex ||
        rail !== lastRail ||
        percent !== lastPercent
      ) {
        lastPhaseIndex = phaseIndex;
        lastRail = rail;
        lastPercent = percent;
        publishHud(phaseIndex, rail, percent);
      }
    };
    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(settleTimer);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", remeasure);
      window.removeEventListener("load", remeasure);
      motionQuery.removeEventListener("change", applyMotionPreference);
      observer?.disconnect();
    };
  }, []);

  return null;
}
