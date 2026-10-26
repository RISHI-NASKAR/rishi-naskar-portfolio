import { readdirSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import puppeteer from "puppeteer-core";

const CACHE = "/home/daytona/.cache/puppeteer/chrome-headless-shell";
const version = readdirSync(CACHE).find((dir) => dir.startsWith("linux-"));
const BIN = join(CACHE, version, "chrome-headless-shell-linux64", "chrome-headless-shell");
const URL = process.env.VERIFY_URL ?? "http://localhost:5173";
const WIDTHS = [1440, 1180, 1024, 768, 430, 390, 360, 320];
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
    if (msg.type() === "error") errors.push(`console: ${msg.text().slice(0, 180)}`);
  });

  await page.setViewport({
    width,
    height: width < 500 ? Math.round((width * 2.1) / 1) : 940,
    deviceScaleFactor: 1,
    isMobile: width < 768,
    hasTouch: width < 768,
  });
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 45000 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 4200));

  const audit = await page.evaluate(() => {
    const vw = window.innerWidth;
    const doc = document.documentElement;
    const rect = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        left: Math.round(r.left), right: Math.round(r.right),
        top: Math.round(r.top), bottom: Math.round(r.bottom),
        w: Math.round(r.width), h: Math.round(r.height),
      };
    };

    const hero = rect(document.querySelector("#home"));
    const cards = [...document.querySelectorAll("#home article.hn-card")];
    const cardRects = cards.map(rect);
    const title = [...document.querySelectorAll("#home h1 span")].map((s) => s.textContent?.trim());
    const ctas = [...document.querySelectorAll("#home a.btn-noir")].map((a) => ({
      text: a.textContent.trim(),
      ...rect(a),
    }));
    const portrait = rect(document.querySelector("#home .portrait-stage"));
    const portraitImg = document.querySelector("#home .portrait-img");
    const portraitVisible = portraitImg && portraitImg.dataset.ready === "true";
    const glitch = document.querySelectorAll("#home .hn-glitch-slice").length;
    const scan = document.querySelectorAll("#home .hn-scan").length;
    const streaks = document.querySelectorAll("#home .hn-streaks span").length;
    const cosmos = document.querySelectorAll("#home canvas, #home svg").length;
    const heroBottom = hero ? hero.bottom : 0;
    const cardRegion = cards.length ? cards[0].getBoundingClientRect().bottom : 0;

    return {
      horizontalOverflow: doc.scrollWidth - vw,
      hero: hero ? { w: hero.w, h: hero.h } : null,
      cards: cards.length,
      cardRegionBelowHeroStart: hero ? cardRegion > heroBottom : false,
      cardRects,
      title: title.filter(Boolean),
      ctas,
      portrait: portrait ? { w: portrait.w, h: portrait.h, ready: portraitVisible } : null,
      glitch, scan, streaks,
      widestRight: [...document.querySelectorAll("#home *")]
        .reduce((m, el) => Math.max(m, el.getBoundingClientRect().right), 0),
      widestLeft: [...document.querySelectorAll("#home *")]
        .reduce((m, el) => Math.min(m, el.getBoundingClientRect().left), Infinity),
    };
  });

  // Hero shot (first viewport) and the craft strip.
  await page.screenshot({ path: join(OUT, `poster-${width}-top.png`), clip: { x: 0, y: 0, width, height: 940 >= width ? Math.round(width * 1.6) : 940 } });

  // Scroll to the bottom of the hero for the card strip shot.
  await page.evaluate(() => {
    const cards = document.querySelectorAll("#home article.hn-card");
    if (cards.length) cards[0].scrollIntoView({ block: "center" });
  });
  await new Promise((r) => setTimeout(r, 1400));
  await page.screenshot({ path: join(OUT, `poster-${width}-cards.png`) });

  report.push({ width, errors, ...audit });
  await page.close();
}

await browser.close();
for (const r of report) {
  console.log(`\n== ${r.width}px ==`);
  console.log(`overflow-x: ${r.horizontalOverflow}`);
  console.log(`cards: ${r.cards} | glitch: ${r.glitch} | scan: ${r.scan} | streaks: ${r.streaks}`);
  console.log(`title lines: ${r.title.join(" / ")}`);
  console.log(`ctas: ${r.ctas.map((c) => `${c.text}@${c.w}x${c.h}`).join(", ")}`);
  console.log(`portrait: ${r.portrait ? `${r.portrait.w}x${r.portrait.h} ready=${r.portrait.ready}` : "none"}`);
  console.log(`widest edges: L=${r.widestLeft.toFixed(0)} R=${r.widestRight.toFixed(0)} (viewport ${r.width})`);
  if (r.errors.length) console.log(`ERRORS:\n${r.errors.slice(0, 6).join("\n")}`);
}
