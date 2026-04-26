import { useEffect } from "react";
import type { Scene } from "../types/scene";

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
    <a-scene embedded vr-mode-ui="enabled: true">

      {/* 🌐 SKY */}
      <a-sky src={imageUrl}></a-sky>

      {/* 📷 CAMERA */}
      <a-entity
        camera
        look-controls="magicWindowTrackingEnabled: true"
      ></a-entity>

      {/* 🔴 HOTSPOTS */}
      {hotspots.map((h, i) => (
        <a-sphere
          key={i}
          position={h.position}
          radius="0.5"
          color="red"
          onClick={() => onNavigate(h.next)}
        ></a-sphere>
      ))}
    </a-scene>
  );
}