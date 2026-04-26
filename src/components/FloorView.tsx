import { useState } from "react";
import NavigationControls from "./NavigationControls";
import TopBar from "./TopBar";
import NavigationPanel from "./NavigationPanel";

import "aframe";
import "aframe-look-at-component";
import type { Scene } from "../types/scene";

import scenes from "../data/scenes";
import sceneGraph from "../data/sceneGraph";
import navigationTree from "../data/navigationTree";

import { useHint } from "../hooks/useHint";
import { useCompass } from "../hooks/useCompass";
import { useNavigation } from "../hooks/useNavigation";
import PanoramaViewer from "./PanoramaViewer";

interface FloorViewProps {
  onBack: () => void;
  mode: "guided" | "free";
  scene: Scene;
  setScene: (scene: Scene) => void;
}

export default function FloorView({
  onBack,
  mode,
  scene,
  setScene,
}: FloorViewProps) {
  const [showNav, setShowNav] = useState(false);
  const [hint, setHint] = useState("");
  const [direction, setDirection] = useState("N");
  const [flash, setFlash] = useState(false);
  const [history, setHistory] = useState<Scene[]>([]);

  // hooks
  useHint(scene, sceneGraph, setHint);
  useCompass(setDirection);

  const {
    startNavigation,
    goBack: navGoBack,
    currentDirection,
  } = useNavigation(scene, setScene, onBack);

  const current = scenes[scene];

  // 🚶 manual movement (hotspots)
  const goTo = (next: Scene) => {
    setFlash(true);
    setTimeout(() => setFlash(false), 300);

    setHistory((prev) => [...prev, scene]);
    setScene(next);
  };

  const goBack = () => {
    if (history.length) {
      const prev = history[history.length - 1];
      setHistory((h) => h.slice(0, -1));
      setScene(prev);
    } else {
      navGoBack();
    }
  };

  const goHome = () => {
    setHistory([]);
    onBack();
  };

  const handleSearch = (value: string) => {
    const key = value.toLowerCase();

    const map: Record<string, Scene> = {
      library: "library",
      auditorium: "auditorium",
      entrance: "entrance1",
    };

    const found = Object.keys(map).find((k) => key.includes(k));
    if (found) {
      setScene(map[found]);
    }
  };

  const handleInput = (value: string) => {
    const key = value.toLowerCase();

    const filtered = Object.keys(scenes).filter((s) =>
      s.toLowerCase().includes(key)
    );

    console.log(filtered);
  };

  if (!current) {
    return (
      <div className="text-white p-8">
        Scene not found
      </div>
    );
  }

  return (
    <div className="relative h-screen overflow-hidden">

      {/* TOP CONTROLS */}
      <NavigationControls
        currentLocation=""
        onBack={goBack}
        onHome={goHome}
      />

      {/* TOP BAR */}
      <TopBar
        mode={mode}
        setShowNav={setShowNav}
        startVoice={() => {}}
        handleInput={handleInput}
        handleSearch={handleSearch}
      />

      {/* NAVIGATION PANEL */}
      <NavigationPanel
        showNav={showNav}
        setShowNav={setShowNav}
        navigationTree={navigationTree}
        startNavigation={startNavigation}
      />

      {/* HINT */}
      {hint && mode === "free" && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-50 bg-cyan-500/10 px-5 py-2 rounded-xl text-cyan-300 text-sm">
          {hint}
        </div>
      )}

      {/* VOICE DIRECTION */}
      {currentDirection && (
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-50 bg-black/60 px-4 py-2 rounded-xl text-cyan-300 text-sm">
          🎧 {currentDirection}
        </div>
      )}

      {/* COMPASS */}
      <div className="absolute top-5 right-5 z-50 bg-black/60 px-4 py-2 rounded-xl text-white">
        🧭 {direction}
      </div>

      {/* FLASH EFFECT */}
      {flash && (
        <div className="absolute inset-0 bg-white opacity-30 z-40 pointer-events-none" />
      )}

      <PanoramaViewer 
      imageUrl={current.image}
      hotspots={current.hotspots}
      onNavigate={goTo} />
    </div>
  );
}