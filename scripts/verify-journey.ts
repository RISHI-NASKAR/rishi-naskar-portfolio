/**
 * Verifies the scroll model the whole experience depends on:
 *
 *  - the phase ranges tile 0..1 exactly (no gap, no overlap, no drift)
 *  - every phase is reachable from the nav rail
 *  - the camera path is finite everywhere and never jumps backwards
 *  - the camera is actually inside the wire corridor during the convergence,
 *    at the singularity during the horizon, and past it during the multiverse
 *  - the eased/window helpers clamp the way the scene layers assume
 *
 * Run: bun scripts/verify-journey.ts
 */
import {
  JOURNEY_VH,
  PHASES,
  PHASE,
  RAIL,
  WORLD,
  at,
  bell,
  clamp01,
  ease,
  phaseIndexAt,
  ramp,
  sampleCamera,
} from "../src/lib/journey";

let failures = 0;
function check(label: string, condition: boolean, detail = "") {
  if (condition) {
    console.log(`  ok   ${label}`);
  } else {
    failures++;
    console.log(`  FAIL ${label}${detail ? ` — ${detail}` : ""}`);
  }
}

console.log("\nPhase tiling");
check("first phase starts at 0", PHASES[0].start === 0);
check("last phase ends at 1", Math.abs(PHASES[PHASES.length - 1].end - 1) < 1e-9);
for (let i = 1; i < PHASES.length; i++) {
  check(
    `${PHASES[i - 1].key} → ${PHASES[i].key} has no gap`,
    Math.abs(PHASES[i].start - PHASES[i - 1].end) < 1e-9,
  );
  check(
    `${PHASES[i].key} advances forward`,
    PHASES[i].end > PHASES[i].start,
  );
}

console.log("\nNav rail coverage");
for (const phase of PHASES) {
  check(`rail entry ${phase.rail} exists for ${phase.key}`, Boolean(RAIL[phase.rail]));
}
check(
  "every rail entry is reachable",
  RAIL.every((entry) => {
    if (entry.target.kind === "section") return true;
    return PHASES.some((p) => p.key === entry.target.key);
  }),
);
check("rail has 6 entries", RAIL.length === 6, `got ${RAIL.length}`);

console.log("\nScroll budget");
const heights = PHASES.map((p) => (p.end - p.start) * JOURNEY_VH);
check(
  "phase heights sum to the declared journey length",
  Math.abs(heights.reduce((a, b) => a + b, 0) - JOURNEY_VH) < 0.01,
  heights.map((h) => h.toFixed(1)).join(" + "),
);
check(
  "nothing is shorter than a screen (except the passage)",
  PHASES.every(
    (p, i) =>
      heights[i] > 70,
  ),
);

console.log("\nCamera path");
let previousZ = Number.POSITIVE_INFINITY;
let pullBacks = 0;
let biggestJump = 0;
let nonFinite = 0;
let samples = 0;
let minZ = 0;
let outOfWorld = 0;
for (let t = 0; t <= 1.0001; t += 0.001) {
  const sample = sampleCamera(t);
  const values = [...sample.pos, ...sample.look, sample.fov, sample.roll];
  if (values.some((v) => !Number.isFinite(v))) nonFinite++;
  if (samples > 0) {
    if (sample.pos[2] > previousZ + 1e-6) pullBacks++;
    biggestJump = Math.max(biggestJump, Math.abs(sample.pos[2] - previousZ));
  }
  // A deliberate pull-back is allowed, teleporting is not.
  if (sample.pos[2] < -1250 || sample.pos[2] > 20) outOfWorld++;
  previousZ = sample.pos[2];
  minZ = Math.min(minZ, sample.pos[2]);
  samples++;
}
check("camera samples are finite", nonFinite === 0, `${nonFinite} bad samples`);
check("camera never teleports", biggestJump < 15, `largest step ${biggestJump.toFixed(2)}`);
check(
  "backward motion stays deliberate",
  pullBacks / samples < 0.12,
  `${pullBacks}/${samples} samples pull back`,
);
check("camera stays inside the world", outOfWorld === 0, `${outOfWorld} out of bounds`);
check("camera lands past the multiverse", minZ < -940, `min z ${minZ.toFixed(1)}`);

let forwardInTravel = 0;
let travelSamples = 0;
for (let t = PHASE.multiverse.start; t <= PHASE.works.end; t += 0.001) {
  const a = sampleCamera(t).pos[2];
  const b = sampleCamera(Math.min(t + 0.001, 1)).pos[2];
  travelSamples++;
  if (b <= a) forwardInTravel++;
}
check(
  "travel through the multiverse is always forward",
  forwardInTravel === travelSamples,
  `${forwardInTravel}/${travelSamples} forward`,
);

console.log("\nStaging (camera vs. world)");
const atConvergence = sampleCamera(at("convergence", 0.5)).pos[2];
const atHorizon = sampleCamera(at("horizon", 0.5)).pos[2];
const atMultiverse = sampleCamera(at("multiverse", 0.5)).pos[2];
const atEnd = sampleCamera(1).pos[2];
check(
  "convergence is spent inside the wire corridor",
  atConvergence < WORLD.corridorStart - 20 &&
    atConvergence > WORLD.corridorStart - WORLD.corridorLength - 20,
  `z ${atConvergence.toFixed(1)}, corridor ${WORLD.corridorStart}..${WORLD.corridorStart - WORLD.corridorLength}`,
);
check(
  "horizon is spent near the singularity",
  Math.abs(atHorizon - WORLD.core[2]) < 40,
  `z ${atHorizon.toFixed(1)} vs core ${WORLD.core[2]}`,
);
check(
  "the passage crosses the singularity",
  sampleCamera(at("passage", 0.2)).pos[2] > WORLD.core[2] &&
    sampleCamera(at("passage", 0.9)).pos[2] < WORLD.core[2],
);
check(
  "multiverse is beyond the tunnel exit",
  atMultiverse < WORLD.tunnelEnd,
  `z ${atMultiverse.toFixed(1)} vs tunnel end ${WORLD.tunnelEnd}`,
);
check(
  "final frame looks back across the new universe",
  atEnd > WORLD.multiverseEnd + 100 && atEnd < atMultiverse,
  `z ${atEnd.toFixed(1)}`,
);

console.log("\nHelpers");
check("ramp clamps below", ramp(0.1, 0.4, 0.6) === 0);
check("ramp clamps above", ramp(0.9, 0.4, 0.6) === 1);
check("ramp is linear", Math.abs(ramp(0.5, 0.4, 0.6) - 0.5) < 1e-9);
check("ease is smoothstep", Math.abs(ease(0.5, 0, 1) - 0.5) < 1e-9);
check("bell is closed at both ends", bell(0, 0.2, 0.6, 0.1, 0.1) === 0 && bell(1, 0.2, 0.6, 0.1, 0.1) === 0);
check("bell peaks inside", bell(0.4, 0.2, 0.6, 0.1, 0.1) === 1);
check("clamp01 holds", clamp01(-3) === 0 && clamp01(3) === 1 && clamp01(0.4) === 0.4);

console.log("\nLayer bookkeeping");
check(
  "bounding spheres cover the wire corridor",
  Math.abs(WORLD.core[2]) + 60 < 1400,
);
check(
  "the tunnel spans the far side of the singularity",
  WORLD.tunnelStart < WORLD.core[2] &&
    WORLD.tunnelEnd < WORLD.tunnelStart &&
    WORLD.multiverseStart < WORLD.tunnelEnd &&
    WORLD.multiverseEnd < WORLD.multiverseStart,
  `${WORLD.core[2]} → ${WORLD.tunnelStart} → ${WORLD.tunnelEnd} → ${WORLD.multiverseStart} → ${WORLD.multiverseEnd}`,
);
check("phase lookup is total", PHASES.every((p) => phaseIndexAt((p.start + p.end) / 2) === PHASES.indexOf(p)));
check(
  "PHASE map matches the phase list",
  PHASES.every((p) => PHASE[p.key] === p),
);

console.log(
  failures === 0
    ? "\nAll journey checks passed."
    : `\n${failures} journey check(s) FAILED.`,
);
process.exit(failures === 0 ? 0 : 1);
