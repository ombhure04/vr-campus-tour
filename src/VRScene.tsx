import { useState } from "react";
import "aframe";
import "aframe-look-at-component";
import { scenes } from "../data/scenes";

export default function VRScene() {
  const [currentScene, setCurrentScene] = useState("entrance");

  const scene = scenes[currentScene];

  return (
    <a-scene embedded style={{ height: "100vh" }}>

      {/* 🌐 IMAGE */}
      <a-sky src={scene.image} />

      {/* 🎥 CAMERA */}
      <a-camera position="0 1.6 0">
        <a-cursor fuse="true" fuse-timeout="1000" />
      </a-camera>

      {/* 🔵 HOTSPOTS */}
      {scene.hotspots.map((spot, i) => (
        <a-cone
          key={i}
          position={spot.position}
          color="cyan"
          class="clickable"
          look-at="[camera]"
          onClick={() => setCurrentScene(spot.target)}
        />
      ))}

      {/* 📝 LABEL */}
      {scene.hotspots.map((spot, i) => (
        <a-text
          key={i}
          value={spot.label}
          position={spot.position.replace("1.5", "2.2")}
          align="center"
          look-at="[camera]"
        />
      ))}

    </a-scene>
  );
}