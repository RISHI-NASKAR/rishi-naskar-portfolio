import { readdirSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import puppeteer from "puppeteer-core";

const CACHE = "/home/daytona/.cache/puppeteer/chrome-headless-shell";
const version = readdirSync(CACHE).find((dir) => dir.startsWith("linux-"));
const BIN = join(CACHE, version, "chrome-headless-shell-linux64", "chrome-headless-shell");
const URL = process.env.VERIFY_URL ?? "http://localhost:5173";
const WIDTHS = [320, 360, 375, 390, 430, 768, 1440];
const OUT = "tmp-verify";
mkdirSync(OUT, { recursive: true });

const report = [];

const browser = await puppeteer.launch({
  executablePath: BIN,
  headless: "shell",
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--hide-scrollbars"],
});

for (const width of WIDTHS) {
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (err) => errors.push(`pageerror: ${err.message}`));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`console: ${msg.text().slice(0, 160)}`);
  });

  await page.setViewport({
    width,
    height: width < 500 ? Math.round((width * 16) / 9) : 900,
    deviceScaleFactor: 1,
    isMobile: width < 768,
    hasTouch: width < 768,
  });
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 45000 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 2600));

  const m = await page.evaluate(() => {
    const vw = window.innerWidth;
    const doc = document.documentElement;
    const rect = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        left: r.left, right: r.right, top: r.top, bottom: r.bottom,
        w: r.width, h: r.height, text: (el.textContent || "").slice(0, 26),
      };
    };

    const stage = rect(document.querySelector("#home .crimson-stage"));
    const portrait = rect(document.querySelector("#home .portrait-stage"));
    const echo = rect(document.querySelector("#home .crimson-echo"));
    const smoke = document.querySelectorAll("#home .crimson-smoke").length;
    const motes = document.querySelectorAll("#home .crimson-mote").length;
    const h1 = rect(document.querySelector("#home h1"));
    const desc = [...document.querySelectorAll("#home p")].find((p) =>
      p.textContent.includes("AI, cinema and design"));
    const ctas = [...document.querySelectorAll("#home a.btn-noir")].map(rect);

    // Craft cards: count + geometry.
    const cards = [...document.querySelectorAll("#craft article")].map(rect);

    // Cards must have text: title present everywhere.
    const cardTitles = [...document.querySelectorAll("#craft article h3")].map(
      (n) => n.textContent.trim());

    // Overlaps inside the hero between copy, stage and CTAs.
    const boxes = [
      ["stage", stage], ["h1", h1], ["desc", rect(desc)],
      ...ctas.map((b, i) => [`cta${i}`, b]),
    ].filter(([, v]) => v);
    const overlaps = [];
    for (let i = 0; i < boxes.length; i += 1) {
      for (let j = i + 1; j < boxes.length; j += 1) {
        const [, a] = boxes[i];
        const [, b] = boxes[j];
        const ix = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        const iy = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        if (ix > 6 && iy > 6) overlaps.push(`${boxes[i][0]}<->${boxes[j][0]} ${ix | 0}x${iy | 0}`);
      }
    }

    // Elements clipped outside the viewport.
    const clipped = boxes.filter(([, v]) => v.left < -1 || v.right > vw + 1)
      .map(([n]) => n);

    // Card rows: on mobile expect max 2 columns side by side; count cards
    // sharing a row with another.
    let cardRowOverlap = false;
    for (let i = 0; i < cards.length; i += 1) {
      for (let j = i + 1; j < cards.length; j += 1) {
        const a = cards[i], b = cards[j];
        const iy = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        if (iy > 10) { /* same row family - fine, but flag if 3+ share */ }
        void iy;
      }
    }
    const rowBuckets = {};
    for (const c of cards) {
      const key = Math.round(c.top / 10);
      (rowBuckets[key] ??= []).push(c);
    }
    const rowsMax = Object.values(rowBuckets).map((n) => n.length);
    cardRowOverlap = rowsMax.length ? Math.max(...rowsMax) : 0;

    return {
      viewport: vw,
      scrollWidth: doc.scrollWidth,
      horizOverflow: doc.scrollWidth > vw + 1,
      stage, portrait, echo, smoke, motes, h1, desc: Boolean(desc),
      ctaCount: ctas.length,
      cardCount: cards.length,
      cardTitles,
      cardMaxPerRow: cardRowOverlap,
      cardsClipped: cards.filter((c) => c.left < -1 || c.right > vw + 1).length,
      overlaps, clipped, errors,
    };
  });

  report.push(m);
  // Hero shot and craft shot.
  await page.screenshot({ path: join(OUT, `crimson-${width}.jpg`), type: "jpeg", quality: 45 });
  const craftEl = await page.$("#craft");
  if (craftEl) {
    await page.evaluate(() => document.querySelector("#craft").scrollIntoView({ block: "start" }));
    await new Promise((r) => setTimeout(r, 1200));
    await page.screenshot({ path: join(OUT, `craft-${width}.jpg`), type: "jpeg", quality: 45 });
  }
  await page.close();
}

await browser.close();

for (const r of report) {
  const flag = (b) => (b ? " ✗" : " ✓");
  console.log(
    `w=${r.viewport} overflow=${flag(!r.horizOverflow)} scrollW=${r.scrollWidth}` +
      ` stage=${r.stage ? `${r.stage.w | 0}x${r.stage.h | 0}` : "MISSING"}` +
      ` echo=${r.echo ? "yes" : "MISSING"} smoke=${r.smoke} motes=${r.motes}` +
      ` portrait=${r.portrait ? "yes" : "MISSING"} h1=${r.h1 ? "yes" : "MISSING"} desc=${r.desc}` +
      ` ctas=${r.ctaCount}` +
      ` cards=${r.cardCount}/5 perRowMax=${r.cardMaxPerRow} cardsClipped=${r.cardsClipped}` +
      ` overlaps=${r.overlaps.length ? r.overlaps.join(",") : "none"}` +
      ` clipped=[${r.clipped.join(",")}]` +
      ` errors=${r.errors.length ? JSON.stringify(r.errors) : "0"}`,
  );
  console.log(`  titles: ${r.cardTitles.join(" | ")}`);
}
console.log("shots:", OUT);
