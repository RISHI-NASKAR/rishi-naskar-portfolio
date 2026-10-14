/** Deterministic pseudo-random helpers so the universe looks the same every visit. */
export function makeRandom(seed = 20261014) {
  let state = seed % 2147483647;
  if (state <= 0) state += 2147483646;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

export type Rand = () => number;

export function randomUnitVector(rand: Rand): [number, number, number] {
  const z = rand() * 2 - 1;
  const theta = rand() * Math.PI * 2;
  const r = Math.sqrt(Math.max(0, 1 - z * z));
  return [r * Math.cos(theta), r * Math.sin(theta), z];
}

export function randomInSphere(rand: Rand, radius: number): [number, number, number] {
  const [x, y, z] = randomUnitVector(rand);
  const r = radius * Math.cbrt(rand());
  return [x * r, y * r, z * r];
}
