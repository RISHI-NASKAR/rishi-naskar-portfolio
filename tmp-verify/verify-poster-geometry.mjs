import { readdirSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import puppeteer from "puppeteer-core";

const CACHE = "/home/daytona/.cache/puppeteer/chrome-headless-shell";
const version = readdirSync(CACHE).find((dir) => dir.startsWith("linux-"));
const BIN = join(CACHE, version, "chrome-headless-shell-linux64", "chrome-headless-shell");
const URL = process.env.VERIFY_URL ?? "http://localhost:5173";

const browser = await puppeteer.launch({
  executablePath: BIN,
  headless: "shell",
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--hide-scrollbars", "--use-gl=swiftshader"],
});

/* ---------- desktop geometry ---------- */
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
page.on("console", (m) => { if (m.type() === "error") errors.push(`console: ${m.text().slice(0, 180)}`); });
await page.setViewport({ width: 1440, height: 940, deviceScaleFactor: 1 });
await page.goto(URL, { waitUntil: "networkidle0", timeout: 45000 });
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 4500));

const desktop = await page.evaluate(() => {
  const r = (el) => {
    if (!el) return null;
    const b = el.getBoundingClientRect();
    return {
      x: Math.round(b.x), y: Math.round(b.y),
      w: Math.round(b.width), h: Math.round(b.height),
    };
  };
  const closeup = r(document.querySelector(".hn-left-fig"));
  const stage = r(document.querySelector("#home .portrait-stage"));
  const echo = r(document.querySelector(".hn-centre-echo"));
  const canvas = r(document.querySelector("#home canvas"));
  const rishi = [...document.querySelectorAll("#home h1 span")].map(r);
  const cue = r(document.querySelector('#home a[aria-label*="Scroll"]'));
  const hero = r(document.querySelector("#home"));
  const board = r(document.querySelector("#home > div > div.relative"));
  const ctxTags = document.querySelectorAll("#home article.hn-card").length;
  const canvasCount = document.querySelectorAll("#home canvas").length;
  return { closeup, stage, echo, canvas, rishi, cue, hero, board, ctxTags, canvasCount };
});
console.log("DESKTOP 1440:", JSON.stringify(desktop, null, 1));

/* save desktop hero shot for pixel analysis */
const clip = { x: 0, y: 0, width: 1440, height: 940 };
await page.screenshot({ path: "tmp-verify/geo-1440.png", clip });
const canvasPixel = await page.evaluate(() => {
  // Confirm the WebGL canvas actually has non-black content (planet rendered).
  const canvas = document.querySelector("#home canvas");
  if (!canvas) return "no-canvas";
  const c = document.createElement("canvas");
  c.width = canvas.width; c.height = canvas.height;
  const g = c.getContext("2d");
  g.drawImage(canvas, 0, 0);
  const data = g.getImageData(0, 0, Math.min(c.width, 300), Math.min(c.height, 200)).data;
  let lit = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] + data[i + 1] + data[i + 2] > 30) lit++;
  }
  return `lit-pixels=${lit}`;
});
console.log("CANVAS:", canvasPixel);
await page.close();

/* ---------- mobile stacking ---------- */
const page2 = await browser.newPage();
page2.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
page2.on("console", (m) => { if (m.type() === "error") errors.push(`console: ${m.text().slice(0, 180)}`); });
await page2.setViewport({ width: 390, height: 819, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
await page2.goto(URL, { waitUntil: "networkidle0", timeout: 45000 });
await new Promise((r) => setTimeout(r, 4200));

const mobile = await page2.evaluate(() => {
  const r = (el) => {
    if (!el) return null;
    const b = el.getBoundingClientRect();
    return { y: Math.round(b.y), h: Math.round(b.height), x: Math.round(b.x), w: Math.round(b.width) };
  };
  // The first name column in the mobile flow (h1's parent chain).
  const h1 = r(document.querySelector("#home h1"));
  const desc = [...document.querySelectorAll("#home p")].find((p) => p.textContent.includes("AI, cinema")).getBoundingClientRect();
  const stage = r(document.querySelector("#home .portrait-stage"));
  const cards = [...document.querySelectorAll("#home article.hn-card")].map((a) => r(a));
  const ctas = [...document.querySelectorAll("#home a.btn-noir")].map((a) => ({ text: a.textContent.trim(), ...r(a) }));
  const closeupHidden = getComputedStyle(document.querySelector(".hn-left-fig")).display === "none";
  const firstCard = document.querySelector("#home article.hn-card");
  const title = document.querySelector("#home article.hn-card h3");
  return {
    h1, desc: { y: Math.round(desc.y), h: Math.round(desc.height) },
    stage, cards, ctas, closeupHidden,
    cardTitleSample: title?.textContent,
    cardBottomVsViewport: firstCard?.getBoundingClientRect().bottom,
  };
});
console.log("MOBILE 390:", JSON.stringify(mobile, null, 1));
await page2.close();

console.log("ERRORS:", errors.length ? errors.slice(0, 10).join("\n") : "none");
await browser.close();
