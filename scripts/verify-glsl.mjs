/**
 * Static checks over every GLSL template literal in src/three.
 *
 * WebGL fails quietly at runtime when a uniform or attribute is used without
 * being declared, or when the two stages disagree about a varying — the scene
 * just renders black. This walks the shader sources and asserts the
 * declarations line up before they ever reach the GPU.
 *
 * Run: node scripts/verify-glsl.mjs
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "three");

/** Walk source, returning every top-level template literal (handles ${} nesting). */
function extractTemplates(source) {
  const out = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== "`") continue;
    let body = "";
    let j = i + 1;
    for (; j < source.length; j++) {
      const ch = source[j];
      if (ch === "\\") {
        body += ch + source[j + 1];
        j++;
        continue;
      }
      if (ch === "$" && source[j + 1] === "{") {
        let k = j + 2;
        let expr = "";
        let brace = 1;
        while (k < source.length && brace > 0) {
          if (source[k] === "{") brace++;
          if (source[k] === "}") brace--;
          if (brace > 0) expr += source[k];
          k++;
        }
        body += `/*${expr.trim()}*/`;
        j = k - 1;
        continue;
      }
      if (ch === "`") break;
      body += ch;
    }
    out.push(body);
    i = j;
  }
  return out;
}

const noise = extractTemplates(readFileSync(join(DIR, "glsl.ts"), "utf8")).find((t) =>
  t.includes("vnoise"),
);
if (!noise) throw new Error("could not find the NOISE chunk in glsl.ts");

const errors = [];
const files = readdirSync(DIR).filter((f) => f.endsWith(".tsx"));
let stages = 0;

for (const file of files) {
  const source = readFileSync(join(DIR, file), "utf8");
  const blobs = extractTemplates(source)
    .map((t) => t.replaceAll("/*NOISE*/", noise))
    .filter((t) => t.includes("void main"));

  const varyingsInFile = new Map();

  for (const glsl of blobs) {
    stages++;
    const isVertex = glsl.includes("gl_Position");
    const uniforms = new Set(
      [...glsl.matchAll(/uniform\s+\w+\s+(\w+)/g)].map((m) => m[1]),
    );
    const attributes = new Set(
      [...glsl.matchAll(/attribute\s+\w+\s+(\w+)/g)].map((m) => m[1]),
    );
    const varyings = [...glsl.matchAll(/varying\s+\w+\s+(\w+)/g)].map((m) => m[1]);
    varyings.forEach((v) => varyingsInFile.set(v, (varyingsInFile.get(v) ?? 0) + 1));

    for (const m of glsl.matchAll(/\b(u[A-Z]\w*)\b/g)) {
      if (!uniforms.has(m[1])) {
        errors.push(`${file}: uses uniform "${m[1]}" without declaring it`);
      }
    }
    for (const m of glsl.matchAll(/\b(a[A-Z]\w*)\b/g)) {
      if (!attributes.has(m[1]) && !uniforms.has(m[1])) {
        errors.push(`${file}: uses attribute "${m[1]}" without declaring it`);
      }
    }
    if (!isVertex && !/gl_FragColor\s*=/.test(glsl)) {
      errors.push(`${file}: stage writes neither gl_Position nor gl_FragColor`);
    }
    if (isVertex && !/gl_Position\s*=/.test(glsl)) {
      errors.push(`${file}: vertex stage never assigns gl_Position`);
    }
    if (/\bmat3\s*\(\s*modelMatrix\s*\)/.test(glsl) && isVertex && !glsl.includes("uniform mat4 modelMatrix")) {
      // modelMatrix is injected by three for every non-raw material.
    }
  }

  for (const [name, count] of varyingsInFile) {
    if (count < 2) {
      errors.push(`${file}: varying "${name}" is declared in only ${count} stage(s)`);
    }
  }

  // Cross-check the JS side: a uniform declared in GLSL but never passed, or an
  // attribute declared but never uploaded by the geometry builder, both leave
  // the shader reading a constant zero.
  for (const glsl of blobs) {
    for (const match of glsl.matchAll(/uniform\s+\w+\s+(u\w+)/g)) {
      const name = match[1];
      if (!new RegExp(`\\b${name}\\s*:`).test(source)) {
        errors.push(`${file}: uniform "${name}" is never provided by a uniforms object`);
      }
    }
    for (const match of glsl.matchAll(/attribute\s+\w+\s+(a\w+)/g)) {
      const name = match[1];
      if (!new RegExp(`setAttribute\\(\\s*"${name}"`).test(source)) {
        errors.push(`${file}: attribute "${name}" is never uploaded by the geometry`);
      }
    }
  }

  console.log(`${file.padEnd(24)} ${String(blobs.length).padStart(2)} shader stages`);
}

if (errors.length) {
  console.error("\nFAILED:\n" + errors.map((e) => " - " + e).join("\n"));
  process.exit(1);
}
console.log(`\n${stages} shader stages checked — all declarations line up.`);
