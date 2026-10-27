import puppeteer from "puppeteer-core";

const URL = process.env.URL || "http://localhost:5173/";
const EXE =
  "/home/daytona/.cache/puppeteer/chrome-headless-shell/linux-156.0.8078.47/chrome-headless-shell-linux64/chrome-headless-shell";
const browser = await puppeteer.launch({
  executablePath: EXE,
  headless: "shell",
  args: ["--no-sandbox", "--disable-gpu"],
});
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));

for (const width of [320, 375, 768, 1440]) {
  await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
  await page.goto(URL, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1800));
  const info = await page.evaluate(() => {
    const spans = [...document.querySelectorAll("#home span")];
    const el = spans.find((s) => s.textContent.trim().startsWith("Chapter 01"));
    if (!el) return { found: false, overflow: document.documentElement.scrollWidth - window.innerWidth };
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      found: true,
      text: el.textContent.trim(),
      fontSize: cs.fontSize,
      fontWeight: cs.fontWeight,
      color: cs.color,
      family: cs.fontFamily.split(",")[0],
      width: Math.round(r.width),
      right: Math.round(r.right),
      overflow: document.documentElement.scrollWidth - window.innerWidth,
    };
  });
  console.log(width, JSON.stringify(info));
}
console.log("ERRORS", errors.length, errors.slice(0, 3));
await browser.close();
