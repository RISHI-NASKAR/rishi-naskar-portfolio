import { readdirSync } from "node:fs";
import { join } from "node:path";
import puppeteer from "puppeteer-core";

const CACHE = "/home/daytona/.cache/headless/chrome-headless-shell";
const version = readdirSync(CACHE).find((dir) => dir.startsWith("linux-"));
const BIN = join(CACHE, version, "chrome-headless-shell-linux64", "chrome-headless-shell");

const browser = await puppeteer.launch({
  executablePath: BIN,
  headless: "shell",
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"],
});
const page = await browser.newPage();
page.on("pageerror", (e) => console.log("pageerror:", e.message));
page.on("console", (m) => {
  if (m.type() === "error") console.log("console-error:", m.text().slice(0, 200));
});
await page.setViewport({ width: 1280, height: 900 });
await page.goto("http://localhost:5173", { waitUntil: "networkidle0", timeout: 45000 });
await new Promise((r) => setTimeout(r, 3500));

const probe = await page.evaluate(() => {
  const c = document.createElement("canvas");
  const gl2 = Boolean(c.getContext("webgl2"));
  const gl1 = Boolean(c.getContext("webgl"));
  // Renderer strings via a real live context
  let renderer = "";
  try {
    const ctx = c.getContext("webgl2");
    const dbg = ctx?.getExtension("WEBGL_debug_renderer_info");
    renderer = dbg ? String(ctx.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : "";
  } catch { /* ignore */ }
  return {
    gl2,
    gl1,
    canvases: document.querySelectorAll("canvas").length,
    homeCanvas: document.querySelectorAll("#home canvas").length,
    modals: false,
  };
});
console.log(JSON.stringify(probe), "renderer:", probe.renderer);
await browser.close();
