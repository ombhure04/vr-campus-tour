import { useEffect, useRef } from "react";
import "aframe";
import "aframe-look-at-component";

interface VRPanoramaProps {
  imageUrl: string;
  onMove?: () => void;
}

export default function VRPanorama({ imageUrl, onMove }: VRPanoramaProps) {
  const hotspotRef = useRef<any>(null);

  useEffect(() => {
    const hotspot = hotspotRef.current;

    const handleClick = () => {
      if (onMove) onMove();
    };

    if (hotspot) {
      hotspot.addEventListener("click", handleClick);
    }

    return () => {
      if (hotspot) {
        hotspot.removeEventListener("click", handleClick);
      }
    };
  }, [onMove]);

  return (
    <a-scene
      embedded
      vr-mode-ui="enabled: true"
      renderer="antialias: true"
      xr-mode-ui="enabled: true"
      style={{ width: "100%", height: "100%" }}
    >
      {/* 🌐 360 Image */}
      <a-sky src={imageUrl} rotation="0 -90 0"></a-sky>

      {/* 🎥 Camera + Cursor */}
      <a-entity id="camera" camera look-controls position="0 1.6 0">
        <a-entity
          cursor="fuse: true; fuseTimeout: 1200"
          position="0 0 -1"
          geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.02"
          material="color: white; shader: flat"
        />
      </a-entity>

      {/* 🔘 Move hotspot */}
      <a-entity
        ref={hotspotRef}
        position="0 1.5 -3"
        geometry="primitive: circle; radius: 0.4"
        material="color: cyan; opacity: 0.7"
        text="value: Move; align: center; color: black; width: 3"
        look-at="#camera"
        class="clickable"
      ></a-entity>
    </a-scene>
  );
}