import { useEffect, useRef, useSyncExternalStore } from "react";

/** Labels shown for elements that opt in with `data-cursor`. */
const LABELS: Record<string, string> = {
  view: "View",
  explore: "Explore",
  play: "Play",
  connect: "Connect",
};

const INTERACTIVE =
  'a[href], button, select, input, textarea, label, [role="button"], [role="link"], [role="tab"], [role="menuitem"]';

const clamp = (value: number, min: number, max: number) =>
  value < min ? min : value > max ? max : value;

/** A real pointing device, read as a store so the orbit never re-renders. */
const FINE_POINTER_QUERY = "(pointer: fine)";

function subscribeToPointer(onChange: () => void) {
  const query = window.matchMedia(FINE_POINTER_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const readFinePointer = () => window.matchMedia(FINE_POINTER_QUERY).matches;

/** SSR-safe fallback — the orbit is a pointer-only feature. */
const readFinePointerServer = () => false;

type OrbitState = "normal" | "hover" | "tagged";

/**
 * RISHI ORBIT — a small 3D orbital cursor.
 *
 * A luminous crimson core, a metallic orbital ring, a second ring tilted out of
 * the plane for depth, and a satellite travelling the orbit. The whole assembly
 * tilts with pointer velocity so it reads as a small object floating above the
 * page rather than a flat sticker.
 *
 * It is pointer-driven only: fine-pointer devices get the orbit and keep the
 * native cursor hidden for as long as this component is mounted; touch devices
 * render nothing. Under `prefers-reduced-motion` the rings stop spinning but
 * the orbit stays visible, so the cursor is never lost.
 *
 * States: `normal`, `hover` (links and buttons — contracted, brighter), and
 * `tagged` for elements that opt in with `data-cursor="view" | "explore" |
 * "play" | "connect"`, which expands the orbit and shows that word. The `play`
 * label is wired up but only ever appears on an element that declares
 * `data-cursor="play"` — nothing on the site plays a video today.
 */
export default function OrbitCursor() {
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const tag = useRef<HTMLSpanElement>(null);
  const enabled = useSyncExternalStore(
    subscribeToPointer,
    readFinePointer,
    readFinePointerServer,
  );

  useEffect(() => {
    if (!enabled) return;
    // The native cursor stands aside while the orbit is in charge.
    document.body.dataset.orbit = "on";
    return () => {
      delete document.body.dataset.orbit;
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const node = root.current;
    const tiltNode = stage.current;
    const tagNode = tag.current;
    if (!node || !tiltNode || !tagNode) return;

    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let lastX = x;
    let lastY = y;
    let rotateX = 0;
    let rotateY = 0;
    let tiltX = 0;
    let tiltY = 0;
    let releaseTimer = 0;

    const setState = (state: OrbitState, label = "") => {
      node.dataset.state = state;
      tagNode.textContent = label;
    };

    // One loop: position with a light lerp (accurate, barely any lag) and a
    // velocity-driven tilt that always settles back to level.
    const loop = () => {
      x += (targetX - x) * 0.34;
      y += (targetY - y) * 0.34;
      const velocityX = x - lastX;
      const velocityY = y - lastY;
      lastX = x;
      lastY = y;
      tiltX = clamp(velocityX * 0.5, -9, 9);
      tiltY = clamp(-velocityY * 0.5, -9, 9);
      rotateX += (tiltX - rotateX) * 0.1;
      rotateY += (tiltY - rotateY) * 0.1;
      node.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      tiltNode.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      frame = window.requestAnimationFrame(loop);
    };
    frame = window.requestAnimationFrame(loop);

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      node.classList.add("is-live");
    };
    const onLeave = () => node.classList.remove("is-live");

    const onOver = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      const tagged = target.closest("[data-cursor]");
      if (tagged) {
        const key = (tagged.getAttribute("data-cursor") ?? "").toLowerCase();
        setState("tagged", LABELS[key] ?? "");
        return;
      }
      if (target.closest(INTERACTIVE)) {
        setState("hover");
        return;
      }
      setState("normal");
    };

    const onDown = () => {
      window.clearTimeout(releaseTimer);
      node.classList.remove("is-pulse");
      // Force a reflow so the pulse restarts on rapid clicks.
      void node.offsetWidth;
      node.classList.add("is-pulse");
      releaseTimer = window.setTimeout(() => node.classList.remove("is-pulse"), 560);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(releaseTimer);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled]);

  return (
    <div ref={root} className="orbit-cursor" data-state="normal" aria-hidden="true">
      <div ref={stage} className="orbit-cursor__stage">
        <div className="orbit-cursor__scale">
          {/* The metallic main orbit. */}
          <span className="orbit-cursor__ring" />
          {/* A second ring, tilted out of the plane, counter-rotating. */}
          <span className="orbit-cursor__tilt">
            <span className="orbit-cursor__ring orbit-cursor__ring--arc" />
          </span>
          {/* The satellite, travelling its own path. */}
          <span className="orbit-cursor__sat-orbit">
            <span className="orbit-cursor__sat" />
          </span>
          {/* The stable luminous core. */}
          <span className="orbit-cursor__dot" />
          {/* Click pulse. */}
          <span className="orbit-cursor__pulse" />
        </div>
      </div>
      <span ref={tag} className="orbit-cursor__label" />
    </div>
  );
}
