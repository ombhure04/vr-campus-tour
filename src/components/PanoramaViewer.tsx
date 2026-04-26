import { useEffect } from "react";

interface PanoramaViewerProps {
  imageUrl: string;
}

export default function PanoramaViewer({ imageUrl }: PanoramaViewerProps) {
  useEffect(() => {
    // ensure A-Frame is loaded only once (safe for React)
    if (!(window as any).AFRAME) {
      import("aframe")
    }
  }, []);

  return (
    <div className="w-full h-full">
      <a-scene embedded vr-mode-ui="enabled: true">

        {/* 🌐 360 SKY (MAIN VR PANORAMA) */}
        <a-sky
          src={imageUrl}
          rotation="0 -130 0"
        ></a-sky>

        {/* 📷 CAMERA (MOBILE + DESKTOP CONTROL) */}
        <a-entity
          camera
          look-controls="magicWindowTrackingEnabled: true; touchEnabled: true"
        ></a-entity>

      </a-scene>
    </div>
  );
}