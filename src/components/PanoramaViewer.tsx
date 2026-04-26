import { useEffect } from "react";
import type { Scene } from "../types/scene";
import "aframe-event-set-component";

interface Hotspot {
  position: string; // "x y z"
  next: Scene;
}

interface Props {
  imageUrl: string;
  hotspots: Hotspot[];
  onNavigate: (scene: Scene) => void;
}

export default function PanoramaViewer({
  imageUrl,
  hotspots,
  onNavigate,
}: Props) {
  useEffect(() => {
    if (!(window as any).AFRAME) {
      import("aframe");
    }
  }, []);

  return (
    <a-scene
      embedded
      style={{ width: "100%", height: "100vh" }}
    >

      {/* 🌐 SKY */}
      <a-sky src={imageUrl}></a-sky>

      {/* 📷 CAMERA + CURSOR */}
      <a-entity
        camera
        look-controls="magicWindowTrackingEnabled: true"
        cursor="rayOrigin: mouse"
        raycaster="objects: .clickable"
      >
        {/* Mobile / VR fallback cursor */}
        <a-cursor></a-cursor>
      </a-entity>

      {/* 🔴 HOTSPOTS */}
      {hotspots.map((h, i) => (
        <a-sphere
          key={i}
          position={h.position}
          radius="0.6"
          color="red"
          class="clickable"
          event-set__enter="_event: mouseenter; scale: 1.2 1.2 1.2"
          event-set__leave="_event: mouseleave; scale: 1 1 1"
          onClick={() => onNavigate(h.next)}
        ></a-sphere>
      ))}

    </a-scene>
  );
}