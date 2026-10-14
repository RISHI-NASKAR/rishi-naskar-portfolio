import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { PHASE, bell, sampleCamera } from "@/lib/journey";
import { journey } from "@/lib/journey-store";

/**
 * Drives the camera along the keyframed path with scroll progress.
 *
 * Pointer position offsets the rig in view space and drifts the aim, so the
 * scene leans with the mouse without ever fighting the scroll. Roll and field of
 * view come from the keyframes — the film opens wide, narrows at the horizon and
 * stretches during the passage. Reduced motion keeps the snap-to-phase framing
 * that JourneyDriver produces and drops every additional movement.
 */
export default function CameraRig() {
  const desired = useRef(new THREE.Vector3());
  const focus = useRef(new THREE.Vector3());
  const lastFov = useRef(40);

  useFrame((state) => {
    const camera = state.camera as THREE.PerspectiveCamera;
    const progress = journey.progress;
    const sample = sampleCamera(progress);

    desired.current.set(sample.pos[0], sample.pos[1], sample.pos[2]);
    focus.current.set(sample.look[0], sample.look[1], sample.look[2]);

    if (!journey.reduced) {
      const px = journey.pointerX;
      const py = journey.pointerY;

      // Handheld float keeps the frame alive even when the visitor is still.
      const t = journey.time;
      desired.current.x += Math.sin(t * 0.29) * 0.05;
      desired.current.y += Math.cos(t * 0.23) * 0.045;

      // Pointer parallax, strongest while the camera is close to the work.
      desired.current.x += px * 0.9;
      desired.current.y += -py * 0.55;
      focus.current.x += px * 1.8;
      focus.current.y += -py * 1.15;

      // Falling through the event horizon rattles the frame.
      const passage = bell(
        progress,
        PHASE.passage.start,
        PHASE.passage.end,
        0.04,
        0.06,
      );
      if (passage > 0.001) {
        const jitter = 0.05 * passage;
        desired.current.x += Math.sin(t * 41.0) * jitter;
        desired.current.y += Math.cos(t * 37.0) * jitter;
      }
    }

    camera.position.copy(desired.current);
    camera.up.set(0, 1, 0);
    camera.lookAt(focus.current);
    if (sample.roll !== 0) camera.rotateZ(sample.roll);

    if (Math.abs(sample.fov - lastFov.current) > 0.02) {
      camera.fov = sample.fov;
      camera.updateProjectionMatrix();
      lastFov.current = sample.fov;
    }
  });

  return null;
}
