import { useState, useRef, useEffect } from "react";
import NavigationControls from "./NavigationControls";
import TopBar from "./TopBar";
import NavigationPanel from "./NavigationPanel";
import CorridorView from "./CorridorView";
import { findPath } from "../utils/findPath";

import "aframe";
import "aframe-look-at-component";
import type { Scene } from "../types/scene";

import scenes from "../data/scenes";
import sceneGraph from "../data/sceneGraph";
import navigationTree from "../data/navigationTree";

import { useHint } from "../hooks/useHint";
import { useCompass } from "../hooks/useCompass";
import { useNavigation } from "../hooks/useNavigation";

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

  const navRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // hooks
  useHint(scene, sceneGraph, setHint);
  useCompass(setDirection);

  const {
    startNavigation,
    goBack: navGoBack,
    currentDirection,
  } = useNavigation(scene, setScene, onBack);

  const current = scenes[scene];

  // 🔊 SPEAK
  const speak = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  // 🚶 manual movement
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

  // 🔍 SEARCH
  const handleSearch = (value: string) => {
    const query = value.toLowerCase().trim();

    const matchEntry = Object.entries(scenes).find(([key, s]) =>
      key.toLowerCase().includes(query) ||
      s.name.toLowerCase().includes(query)
    );

    if (!matchEntry) {
      speak("Location not found");
      return;
    }

    const target = matchEntry[0] as Scene;

    if (mode === "guided") {
      const path = findPath(sceneGraph, scene, target);

      if (!path.length) {
        speak("No path found");
        return;
      }

      startAutoNavigation(path);
    } else {
      setScene(target as Scene);
      speak(`Moved to ${scenes[target as Scene]!.name}`);
    }
  };

  // 🧭 DIRECTION
  const getDirection = (from: Scene, to: Scene) => {
    const current = scenes[from];
    if (!current) return "front";
    const match = current.hotspots.find((h) => h.next === to);
    return match?.direction || "forward";
  };

  // 🚀 AUTO NAVIGATION
  const startAutoNavigation = (path: string[]) => {
    if (navRef.current) clearInterval(navRef.current);

    let i = 1;
    speak("Starting navigation");

    navRef.current = setInterval(() => {
      if (i >= path.length) {
        clearInterval(navRef.current!);
        navRef.current = null;

        const last = path[path.length - 1];
        speak(`You have reached ${String(last)}`);
        return;
      }

      const prev = path[i - 1];
      const next = path[i];

      const dir = getDirection(prev as Scene, next as Scene);

      const dirText =
        dir === "left"
          ? "Turn left"
          : dir === "right"
          ? "Turn right"
          : dir === "back"
          ? "Turn back"
          : "Move forward";

      speak(dirText);
      setScene(next as Scene);

      i++;
    }, 2200);
  };

  

  // 🎤 VOICE INPUT
  const startVoice = () => {
    const SpeechRecognition =
      (window as any).webkitSpeechRecognition ||
      (window as any).SpeechRecognition;

    if (!SpeechRecognition) {
      speak("Voice not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";

    recognition.onstart = () => speak("Listening");

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      speak(`Navigating to ${text}`);
      handleSearch(text);
    };

    recognition.onerror = () => speak("Voice error");

    recognition.start();
  };

  // 🧹 CLEANUP
  useEffect(() => {
    return () => {
      if (navRef.current) clearInterval(navRef.current);
    };
  }, []);

  const handleInput = (value: string) => {
    console.log(value);
  };

  if (!current) {
    return <div className="text-white p-8">Scene not found</div>;
  }

  return (
    <div className="relative h-screen overflow-hidden">

      <NavigationControls
        currentLocation=""
        onBack={goBack}
        onHome={goHome}
      />

      <TopBar
        mode={mode}
        setShowNav={setShowNav}
        startVoice={startVoice}
        handleInput={handleInput}
        handleSearch={handleSearch}
        suggestions={Object.values(scenes).map((s) => s.name)}
      />

      <NavigationPanel
        showNav={showNav}
        setShowNav={setShowNav}
        navigationTree={navigationTree}
        startNavigation={startNavigation}
      />

      {hint && mode === "free" && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-50 bg-cyan-500/10 px-5 py-2 rounded-xl text-cyan-300 text-sm">
          {hint}
        </div>
      )}

      {currentDirection && (
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-50 bg-black/60 px-4 py-2 rounded-xl text-cyan-300 text-sm">
          🎧 {currentDirection}
        </div>
      )}

      <div className="absolute top-5 right-5 z-50 bg-black/60 px-4 py-2 rounded-xl text-white">
        🧭 {direction}
      </div>

      {flash && (
        <div className="absolute inset-0 bg-white opacity-30 z-40 pointer-events-none" />
      )}

      <CorridorView
        image={current.image}
        hotspots={current.hotspots}
        setScene={goTo}
        onBack={goBack}
        onHome={goHome}
      />
    </div>
  );
}