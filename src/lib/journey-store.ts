import { JOURNEY_ID, PHASES, ABOUT_ID, CONTACT_ID, RAIL } from "./journey";

/**
 * A tiny mutable store that the 3D scene reads every frame and the HUD
 * subscribes to.
 *
 * The scene must never depend on React re-renders (that is the difference
 * between a smooth camera and a stuttering one), so the live values sit in a
 * plain object that `useFrame` reads directly. The DOM HUD subscribes instead,
 * and is only notified when something it actually displays changes — the active
 * phase, the active nav entry or the whole-percent readout.
 */
export interface JourneyState {
  /** Raw scroll position mapped to 0..1 across the journey. */
  target: number;
  /** Smoothed progress that drives the camera and every layer. */
  progress: number;
  /** Smoothed pointer, -1..1 from the centre of the viewport. */
  pointerX: number;
  pointerY: number;
  /** True once a real pointer has moved — touch devices never set it, so
      pointer-driven effects simply never start there. */
  pointerActive: boolean;
  /** Normalised scroll speed, for motion-reactive effects. */
  velocity: number;
  /** Seconds of scene time; frozen when reduced motion is requested. */
  time: number;
  /** True when the visitor asked for reduced motion. */
  reduced: boolean;
  /** 0..1 detail scale chosen from the device (mobile, low core count). */
  quality: number;
  /** Selected work universe: 0 = all, 1..3 = index into UNIVERSES.
      The scene re-colours its wires toward the active universe. */
  universe: number;
}

/**
 * Detail budget. Decided once, before the canvas mounts, so the scene builds its
 * geometry at the right size instead of rebuilding after the first frame.
 * Integrated GPUs, phones and low-core machines get a lighter universe.
 */
function detectQuality() {
  if (typeof window === "undefined") return 1;
  const nav = navigator as Navigator & {
    deviceMemory?: number;
    hardwareConcurrency?: number;
  };
  const cores = nav.hardwareConcurrency ?? 4;
  const memory = nav.deviceMemory ?? 8;
  return window.innerWidth < 900 || cores <= 4 || memory <= 4 ? 0.42 : 1;
}

function detectReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export const journey: JourneyState = {
  target: 0,
  progress: 0,
  pointerX: 0,
  pointerY: 0,
  pointerActive: false,
  velocity: 0,
  time: 0,
  reduced: detectReducedMotion(),
  quality: detectQuality(),
  universe: 0,
};

export interface HudSnapshot {
  /** Index into PHASES. */
  phase: number;
  /** Index into RAIL. */
  rail: number;
  /** Whole percent, 0..100. */
  percent: number;
}

export const hud: HudSnapshot = { phase: 0, rail: 0, percent: 0 };

type Listener = () => void;
const listeners = new Set<Listener>();

export function subscribeJourney(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getHud(): HudSnapshot {
  return hud;
}

/** Called by the driver each frame; notifies only on visible change. */
export function publishHud(phase: number, rail: number, percent: number) {
  if (hud.phase === phase && hud.rail === rail && hud.percent === percent) return;
  hud.phase = phase;
  hud.rail = rail;
  hud.percent = percent;
  listeners.forEach((l) => l());
}

/* ------------------------------------------------------------------ nav */

/** Absolute document offset + scrollable span of the journey container. */
export function measureJourney() {
  const el = document.getElementById(JOURNEY_ID);
  if (!el) return { top: 0, span: 1 };
  const rect = el.getBoundingClientRect();
  const top = rect.top + window.scrollY;
  const span = Math.max(el.offsetHeight - window.innerHeight, 1);
  return { top, span };
}

/** Scrolls the document so the journey sits at `progress`. */
export function scrollToProgress(progress: number) {
  const { top, span } = measureJourney();
  const p = progress < 0 ? 0 : progress > 1 ? 1 : progress;
  window.scrollTo({
    top: top + span * p,
    behavior: journey.reduced ? "auto" : "smooth",
  });
}

/** Scrolls to a nav rail entry, wherever it lives. */
export function scrollToRail(index: number) {
  const entry = RAIL[index];
  if (!entry) return;
  const t = entry.target;
  if (t.kind === "section") {
    document
      .getElementById(t.id)
      ?.scrollIntoView({ behavior: journey.reduced ? "auto" : "smooth" });
    return;
  }
  const key = t.key;
  const phase = PHASES.find((p) => p.key === key);
  if (phase) scrollToProgress(phase.start + (phase.end - phase.start) * 0.06);
}

/** Which rail entry is active once the visitor is past the 3D journey. */
export function railAfterJourney() {
  const about = document.getElementById(ABOUT_ID);
  const contact = document.getElementById(CONTACT_ID);
  const mid = window.scrollY + window.innerHeight * 0.5;
  if (contact) {
    const top = contact.getBoundingClientRect().top + window.scrollY;
    if (mid >= top - window.innerHeight * 0.35) return 5;
  }
  if (about) {
    const top = about.getBoundingClientRect().top + window.scrollY;
    if (mid >= top - window.innerHeight * 0.5) return 4;
  }
  return 3;
}
