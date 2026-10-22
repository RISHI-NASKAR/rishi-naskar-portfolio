/**
 * The journey model.
 *
 * Scroll progress is normalised to 0..1 across the whole 3D experience. Phases
 * are derived from weights so their ranges always tile that range exactly, and
 * the camera keyframes below are written in phase-local terms, so the path can
 * never drift out of sync with the phase boundaries.
 */

export type PhaseKey =
  | "mind"
  | "convergence"
  | "horizon"
  | "passage"
  | "multiverse"
  | "works"
  | "beyond";

export interface Phase {
  key: PhaseKey;
  /** Global progress range, 0..1. */
  start: number;
  end: number;
  /** Which nav entry this phase belongs to (index into RAIL). */
  rail: number;
  index: string;
  label: string;
  kicker: string;
  title: string;
  body: string[];
  align: "left" | "right" | "center";
}

interface PhaseSeed extends Omit<Phase, "start" | "end"> {
  weight: number;
}

const SEEDS: PhaseSeed[] = [
  {
    key: "mind",
    weight: 1.35,
    rail: 0,
    index: "01",
    label: "Mind",
    kicker: "01 — Mind",
    title: "RISHI NASKAR",
    body: [
      "AI Engineer × Cinematographer × Graphic Designer",
      "A mind that creates worlds. Ideas, stories, technology, worlds — every one of them begins here, in a single head, behind a pair of glasses.",
      "Scroll to travel through it.",
    ],
    align: "left",
  },
  {
    key: "convergence",
    weight: 1.75,
    rail: 1,
    index: "02",
    label: "Journey",
    kicker: "02 — Journey",
    title: "Thoughts in motion",
    body: [
      "Ideas, people, moments… all connected.",
      "Hundreds of filaments of thought leave the head and travel the dark — different directions, different speeds — then intertwine into a single, impossibly bright point.",
    ],
    align: "right",
  },
  {
    key: "horizon",
    weight: 2.0,
    rail: 2,
    index: "03",
    label: "Universes",
    kicker: "03 — The black hole",
    title: "Where imagination breaks reality",
    body: [
      "The converged wires begin to turn.",
      "Thought becomes gravity. Gravity becomes an accretion disk — blue, violet and amber — bending light around a shadow that swallows the frame.",
    ],
    align: "left",
  },
  {
    key: "passage",
    weight: 1.15,
    rail: 2,
    index: "03",
    label: "Universes",
    kicker: "03 — Passage",
    title: "THROUGH",
    body: ["The frame stretches. The stars bend. The camera keeps falling."],
    align: "center",
  },
  {
    key: "multiverse",
    weight: 2.6,
    rail: 2,
    index: "03",
    label: "Universes",
    kicker: "04 — Many universes",
    title: "Many universes",
    body: [
      "Different worlds. Different stories. The same mind.",
      "Planets turning on their own light. Spiral galaxies. Nebulae. Rings of rock. Cosmic islands. Civilisations too far away to name — each one behind its own portal.",
    ],
    align: "left",
  },
  {
    key: "works",
    weight: 3.2,
    rail: 3,
    index: "04",
    label: "Works",
    kicker: "05 — My works",
    title: "Three universes of work",
    body: [
      "Films. Visuals. Creative experiments. AI projects. Designs.",
      "The worlds resolve into work — each project a body drifting in the same dark, waiting to be opened.",
    ],
    align: "left",
  },
  {
    key: "beyond",
    weight: 1.7,
    rail: 4,
    index: "05",
    label: "About",
    kicker: "06 — Beyond Everything",
    title: "ONE MIND. INFINITE WORLDS.",
    body: [
      "The universe is not the limit. It is the beginning.",
      "The wires come back — older now, connecting every world that was made here.",
    ],
    align: "center",
  },
];

const TOTAL_WEIGHT = SEEDS.reduce((sum, p) => sum + p.weight, 0);

export const PHASES: Phase[] = (() => {
  let cursor = 0;
  return SEEDS.map((seed) => {
    const start = cursor;
    cursor += seed.weight / TOTAL_WEIGHT;
    return { ...seed, start, end: cursor };
  });
})();

export const PHASE = Object.fromEntries(PHASES.map((p) => [p.key, p])) as Record<
  PhaseKey,
  Phase
>;

/** Total scroll length of the journey, in viewport heights. */
export const JOURNEY_VH = 940;

/** Id of the tall scroll container the driver measures. */
export const JOURNEY_ID = "universe-journey";

/** Sections that live after the 3D journey but belong to the nav. */
export const ABOUT_ID = "about";
export const CONTACT_ID = "contact";

export interface RailEntry {
  index: string;
  label: string;
  /** Either a journey phase key or a plain document section id. */
  target: { kind: "phase"; key: PhaseKey } | { kind: "section"; id: string };
}

export const RAIL: RailEntry[] = [
  { index: "01", label: "Mind", target: { kind: "phase", key: "mind" } },
  { index: "02", label: "Journey", target: { kind: "phase", key: "convergence" } },
  { index: "03", label: "Universes", target: { kind: "phase", key: "horizon" } },
  { index: "04", label: "Works", target: { kind: "phase", key: "works" } },
  { index: "05", label: "About", target: { kind: "section", id: ABOUT_ID } },
  { index: "06", label: "Contact", target: { kind: "section", id: CONTACT_ID } },
];

/* ------------------------------------------------------------------ maths */

export function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

/** 0 → 1 as progress travels from `from` to `to` (linear, clamped). */
export function ramp(progress: number, from: number, to: number) {
  return clamp01((progress - from) / Math.max(to - from, 1e-5));
}

/** Same as ramp, eased with smoothstep. */
export function ease(progress: number, from: number, to: number) {
  const t = ramp(progress, from, to);
  return t * t * (3 - 2 * t);
}

/** Bell curve: 0 outside [from, to], 1 in the middle, fades of `fadeIn`/`fadeOut`. */
export function bell(
  progress: number,
  from: number,
  to: number,
  fadeIn: number,
  fadeOut: number,
) {
  const span = Math.max(to - from, 1e-5);
  const a = ramp(progress, from, Math.min(from + fadeIn, from + span * 0.5));
  const b = 1 - ramp(progress, Math.max(to - fadeOut, from + span * 0.5), to);
  return Math.min(a, b);
}

/**
 * Height allotted to a phase, as a CSS vh length. The document block for each
 * phase uses this so the layout and the camera keyframes stay locked together.
 */
export function phaseHeight(key: PhaseKey) {
  const phase = PHASE[key];
  return `${((phase.end - phase.start) * JOURNEY_VH).toFixed(2)}vh`;
}

/** Progress at a phase-local position (0 = phase start, 1 = phase end). */
export function at(key: PhaseKey, local: number) {
  const p = PHASE[key];
  return p.start + (p.end - p.start) * local;
}

/** Where `progress` sits inside a phase, as -1..2 (clamped to 0..1 by callers). */
export function phaseT(key: PhaseKey, progress: number) {
  const p = PHASE[key];
  return ramp(progress, p.start, p.end);
}

export function phaseIndexAt(progress: number) {
  for (let i = 0; i < PHASES.length; i++) {
    if (progress < PHASES[i].end) return i;
  }
  return PHASES.length - 1;
}

/* ------------------------------------------------------------------ world */

/**
 * World layout, shared by every scene layer. The camera flies down -Z; each
 * stage lives at a fixed depth so the order of events is also the order in
 * space.
 */
export const WORLD = {
  /** Portrait plane, left of frame. */
  portrait: [-2.7, 0.85, 0.6] as [number, number, number],
  /** Crown of the head — where the neural filaments root. */
  crown: [-2.45, 2.45, 0.7] as [number, number, number],
  /** Where the wires converge, and where the black hole forms. */
  core: [0, 0, -180] as [number, number, number],
  /** Where the wire corridor begins (the portrait's depth). */
  corridorStart: 0,
  /** Wire corridor length from the portrait toward the core. */
  corridorLength: 176,
  /** Lateral drift applied to the wire bundle so the camera passes inside it. */
  corridorDrift: [2.35, -0.3, 0] as [number, number, number],
  /** Light tunnel beyond the event horizon. */
  tunnelStart: -184,
  tunnelEnd: -432,
  /** Where the new universe opens up. */
  multiverseStart: -470,
  multiverseEnd: -1180,
} as const;

/* ----------------------------------------------------------------- camera */

export interface CameraKey {
  /** Global progress at which this key is exactly hit. */
  p: number;
  pos: [number, number, number];
  look: [number, number, number];
  fov: number;
  /** Camera roll in radians. */
  roll: number;
}

export const CAMERA_KEYS: CameraKey[] = [
  {
    p: 0,
    pos: [1.5, 1.55, 9.6],
    look: [-1.7, 1.3, -1],
    fov: 41,
    roll: 0,
  },
  {
    // The camera arcs left around the head — an orbit, not a straight dolly.
    p: at("mind", 0.42),
    pos: [-0.7, 1.2, 7.0],
    look: [-1.15, 1.5, -2.2],
    fov: 45,
    roll: 0.03,
  },
  {
    // …and swings back out to the right as it lines up with the corridor.
    p: at("mind", 0.86),
    pos: [0.95, 1.5, 3.4],
    look: [0.1, 1.1, -18],
    fov: 50,
    roll: -0.035,
  },
  {
    p: at("convergence", 0.18),
    pos: [0.35, 1.1, -16],
    look: [0, 0.6, -70],
    fov: 55,
    roll: 0.05,
  },
  {
    p: at("convergence", 0.46),
    pos: [1.5, 0.4, -62],
    look: [0, 0.15, -140],
    fov: 62,
    roll: -0.06,
  },
  {
    p: at("convergence", 0.78),
    pos: [-0.4, -0.9, -122],
    look: [0, 0, -180],
    fov: 58,
    roll: 0.1,
  },
  {
    p: at("horizon", 0.12),
    pos: [-9.5, 4.6, -146],
    look: [0, 0, -180],
    fov: 52,
    roll: -0.12,
  },
  {
    p: at("horizon", 0.44),
    pos: [-11.5, 1.2, -170],
    look: [0, 0, -180],
    fov: 55,
    roll: 0.16,
  },
  {
    p: at("horizon", 0.74),
    pos: [-3.4, 2.6, -167],
    look: [0, 0, -181],
    fov: 62,
    roll: -0.2,
  },
  {
    p: at("passage", 0.3),
    pos: [0, 0.6, -177],
    look: [0, 0, -230],
    fov: 74,
    roll: 0.28,
  },
  {
    p: at("passage", 0.85),
    pos: [0, 0, -262],
    look: [0, 0, -360],
    fov: 82,
    roll: -0.34,
  },
  {
    p: at("multiverse", 0.16),
    pos: [0, 0, -446],
    look: [0, 0, -560],
    fov: 66,
    roll: 0.1,
  },
  {
    p: at("multiverse", 0.42),
    pos: [13, 4.5, -556],
    look: [-4, 0, -690],
    fov: 58,
    roll: -0.08,
  },
  {
    p: at("multiverse", 0.66),
    pos: [-14, -3, -664],
    look: [5, 1, -800],
    fov: 56,
    roll: 0.07,
  },
  {
    p: at("multiverse", 0.94),
    pos: [2, 1.5, -776],
    look: [0, 0, -900],
    fov: 54,
    roll: 0,
  },
  {
    p: at("works", 0.5),
    pos: [0, 0.3, -880],
    look: [0, 0.2, -1010],
    fov: 52,
    roll: 0,
  },
  {
    p: at("beyond", 0.55),
    pos: [0, 2.2, -1000],
    look: [0, 0.4, -1140],
    fov: 56,
    roll: -0.04,
  },
  {
    p: 1,
    pos: [0, 12.5, -962],
    look: [0, 0, -1160],
    fov: 62,
    roll: 0.03,
  },
];

/** Camera state sampled from the keyframe path. */
export interface CameraSample {
  pos: [number, number, number];
  look: [number, number, number];
  fov: number;
  roll: number;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Exponential smoothing factor that is stable across frame rates. */
export function damp(dt: number, rate: number) {
  return 1 - Math.exp(-rate * dt);
}

/**
 * Samples the camera path. Each segment is eased, so the camera settles into
 * every keyframe instead of sliding past it — reads as deliberate camera work.
 */
export function sampleCamera(progress: number): CameraSample {
  const keys = CAMERA_KEYS;
  const t = clamp01(progress);
  let i = 0;
  while (i < keys.length - 2 && t > keys[i + 1].p) i++;
  const a = keys[i];
  const b = keys[i + 1];
  let u = ramp(t, a.p, b.p);
  u = u * u * (3 - 2 * u);
  return {
    pos: [
      lerp(a.pos[0], b.pos[0], u),
      lerp(a.pos[1], b.pos[1], u),
      lerp(a.pos[2], b.pos[2], u),
    ],
    look: [
      lerp(a.look[0], b.look[0], u),
      lerp(a.look[1], b.look[1], u),
      lerp(a.look[2], b.look[2], u),
    ],
    fov: lerp(a.fov, b.fov, u),
    roll: lerp(a.roll, b.roll, u),
  };
}
