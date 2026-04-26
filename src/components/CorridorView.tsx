import { useState, useEffect, useRef } from "react";
import NavigationControls from "./NavigationControls";
import type { Scene } from "../types/scene";

import "aframe";
import "aframe-look-at-component";

type Hotspot = {
  position: string;
  next: Scene;
  direction: "front" | "left" | "right" | "back";
};

interface CorridorViewProps {
  image: string;
  hotspots: Hotspot[];
  setScene: (scene: Scene) => void;
  onBack: () => void;
  onHome: () => void;
}

function CorridorView({ image, hotspots, setScene, onBack, onHome }: CorridorViewProps) {
  const [rotationY, setRotationY] = useState(0);
  const cameraRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!cameraRef.current) return;

      const rot = cameraRef.current.getAttribute("rotation") as { x: number; y: number; z: number } | null;
      if (rot) setRotationY(rot.y);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const normalize = (angle: number) => {
    let a = angle % 360;
    if (a > 180) a -= 360;
    if (a < -180) a += 360;
    return a;
  };

  const visibleHotspots = hotspots.filter(h => {
    const angle = normalize(rotationY);

    if (h.direction === "front") return angle > -45 && angle < 45;
    if (h.direction === "left") return angle >= 45 && angle <= 135;
    if (h.direction === "right") return angle <= -45 && angle >= -135;
    return true;
  });

  return (
    <div className="relative h-screen bg-black">
      <NavigationControls
        currentLocation="Campus Tour"
        onBack={onBack}
        onHome={onHome}
      />

      <a-scene embedded cursor="rayOrigin: mouse" raycaster="objects: .clickable">
        <a-sky src={image} rotation="0 -90 0" />

        <a-camera ref={cameraRef}>
          <a-cursor fuse="true" fuse-timeout="800" />
        </a-camera>

        {visibleHotspots.map((h, i) => (
          <a-entity
            key={i}
            position={h.position}
            class="clickable"
            look-at="[camera]"
            geometry="primitive: circle; radius: 0.35"
            material="color: #00ffcc; emissive: #00ffcc; emissiveIntensity: 0.8; opacity: 0.9"
            animation="property: scale; to: 1.5 1.5 1.5; dir: alternate; dur: 600; loop: true"
            animation__rotate="property: rotation; to: 0 360 0; loop: true; dur: 3000"
            text="value: Click to Move; align: center; color: white; width: 3"
            event-set__enter="_event: mouseenter; scale: 1.8 1.8 1.8"
            event-set__leave="_event: mouseleave; scale: 1 1 1"
            onClick={() => {
              const audio = new Audio("/sounds/click.mp3");
              audio.play().catch(err => console.log("Audio blocked:", err));
              setScene(h.next);
            }}
          />
        ))}
      </a-scene>
    </div>
  );
}

export default CorridorView;