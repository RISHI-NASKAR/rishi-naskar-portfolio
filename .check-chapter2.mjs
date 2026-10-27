import puppeteer from "puppeteer-core";
const EXE="/home/daytona/.cache/puppeteer/chrome-headless-shell/linux-156.0.8078.47/chrome-headless-shell-linux64/chrome-headless-shell";
const b=await puppeteer.launch({executablePath:EXE,headless:"shell",args:["--no-sandbox","--disable-gpu"]});
const p=await b.newPage();
for(const w of [320,360,390]){
  await p.setViewport({width:w,height:900});
  await p.goto("http://localhost:5173/",{waitUntil:"networkidle2",timeout:60000});
  await new Promise(r=>setTimeout(r,1500));
  console.log(w, JSON.stringify(await p.evaluate(()=>{
    const el=[...document.querySelectorAll("#home span")].find(s=>s.textContent.trim().startsWith("Chapter 01"));
    const r=el.getBoundingClientRect();
    const lh=parseFloat(getComputedStyle(el).lineHeight);
    return {w:Math.round(r.width),h:Math.round(r.height),lines:Math.round(r.height/lh)};
  })));
}
await b.close();
