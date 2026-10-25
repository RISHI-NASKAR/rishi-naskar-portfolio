import { readdirSync, statSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import puppeteer from "puppeteer-core";

const CACHE = "/home/daytona/.cache/headless/chrome-headless-shell";
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
  // Let entrance animations and lazy loads settle.
  await new Promise((r) => setTimeout(r, 2600));

  const m = await page.evaluate(() => {
    const vw = window.innerWidth;
    const doc = document.documentElement;
    const rect = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { left: r.left, right: r.right, top: r.top, bottom: r.bottom, w: r.width, h: r.height };
    };
    const pick = (sel) => rect(document.querySelector(sel));

    const copyDiv = document.querySelector("#home h1")?.parentElement;
    const titles = copyDiv?.querySelector("ul");
    const ctaRow = [...document.querySelectorAll("#home a.btn-noir")][0]?.parentElement;
    const mobileLine = document.querySelector("#home p.sm\\:hidden");
    const scrollCue = document.querySelector('#home a[href="#identity"]');

    const parts = {
      copy: rect(copyDiv), // name heading column
      h1: rect(document.querySelector("#home h1")),
      portrait: rect(document.querySelector("#home .portrait-stage")),
      titles: rect(titles),
      mobileLine: rect(mobileLine),
      ctaRow: rect(ctaRow),
      scrollCue: rect(scrollCue),
      headerBar: rect(document.querySelector("header")),
    };
    const buttons = [...document.querySelectorAll("#home .btn-noir")].map(rect);

    const overlap = pairwise(Object.values(parts).filter(Boolean));
    function pairwise(list) {
      const hits = [];
      for (let i = 0; i < list.length; i += 1) {
        for (let j = i + 1; j < list.length; j += 1) {
          const a = list[i];
          const b = list[j];
          const ix = Math.min(a.right, b.right) - Math.max(a.left, b.left);
          const iy = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
          if (ix > 6 && iy > 6) hits.push([ix | 0, iy | 0]);
        }
      }
      return hits;
    }

    const btnIssues = buttons.map((b, i) => ({
      i,
      wider: b.w > vw - 2,
      clipped: b.right > vw + 1 || b.left < -1,
      w: Math.round(b.w),
    }));

    return {
      viewport: vw,
      scrollWidth: doc.scrollWidth,
      horizOverflow: doc.scrollWidth > vw + 1,
      overlaps: overlap.map(([x, y]) => `${x}x${y}`),
      parts: Object.fromEntries(
        Object.entries(parts).map(([k, v]) => [
          k,
          v ? { l: Math.round(v.left), r: Math.round(v.right), t: Math.round(v.top), b: Math.round(v.bottom) } : null,
        ]),
      ),
      btnIssues,
    };
  });

  report.push({ ...m, errors });
  await page.screenshot({
    path: join(OUT, `hero-${width}.jpg`),
    type: "jpeg",
    quality: 45,
    fullPage: false,
  });
  await page.close();
}

await browser.close();

for (const r of report) {
  const flag = (b) => (b ? " ✗" : " ✓");
  console.log(
    `w=${r.viewport} overflow=${flag(!r.horizOverflow)} scrollW=${r.scrollWidth}` +
      ` overlaps=${r.overlaps.length ? r.overlaps.join(",") : "none"}` +
      ` btn=${r.btnIssues.map((b) => `#${b.i}:${Math.round(b.w)}w${b.clipped ? " CLIPPED" : ""}${!b.wider ? "" : " WIDE"}`).join(" ")}` +
      ` errors=${r.errors.length ? JSON.stringify(r.errors) : "0"}`,
  );
}
console.log("shots:", OUT);
