import { useState, useRef, useEffect } from "react";
import NavigationControls from "./NavigationControls";
import TopBar from "./TopBar";
import NavigationPanel from "./NavigationPanel";
import CorridorView from "./CorridorView";
import { findPath } from "../utils/findPath";
import { buildGraph } from "../utils/buildGraph";

const graph = buildGraph(scenes);


import "aframe";
import "aframe-look-at-component";
import type { Scene } from "../types/scene";

import scenes from "../data/scenes";
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
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [hint, setHint] = useState("");
  const [direction, setDirection] = useState("N");
  const [flash, setFlash] = useState(false);
  const [reached, setReached] = useState(false);
  const [history, setHistory] = useState<Scene[]>([]);

  const navRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // hooks
  useHint(scene, graph, setHint);
  useCompass(setDirection);

  const {
    startNavigation: _startNavigation,
    goBack: navGoBack,
    currentDirection,
  } = useNavigation(scene, setScene, onBack);

  const current = scenes[scene] ?? null;

  const getFloor = () => {
    const s = scene.toLowerCase();

    if (s.includes("first") || s.includes("ff")) { return "First Floor"; }

    if (s.includes("second") || s.includes("sf")) { return "Second Floor"; }

    return "Ground Floor";
  }

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
  const normalize = (str: string) =>
    str.toLowerCase().replace(/\s+/g, "").replace(/-/g, "");

  const handleSearch = (value: string) => {
    const query = normalize(value);

    let bestMatch: { key: Scene; score: number } | null = null;

    for (const key of Object.keys(scenes) as Scene[]) {
      const s = scenes[key];
      if (!s) continue;

      let score = 0;

      if (normalize(s.name).includes(query)) score += 6;
      if (query.includes(normalize(s.name))) score += 3;

      if (s.keywords?.some((k) => normalize(k).includes(query))) {
        score += 10;
      }

      // ✅ SAFE (TS-friendly)
      if (bestMatch === null || score > bestMatch.score) {
        bestMatch = { key, score };
      }
    }

    // ✅ TYPE GUARD (IMPORTANT)
    if (bestMatch === null || bestMatch.score === 0) {
      speak("Location not found");
      return;
    }

    const target: Scene = bestMatch.key;

    if (mode === "guided") {
      const path = findPath(graph, scene, target);

      if (!path || path.length === 0) {
        speak("Directly moving to location");
        setScene(target);
        return;
      }

      startAutoNavigation(path);
    } else {
      setScene(target);
      speak(`Moved to ${scenes[target]?.name}`);
    }
  };

  // 🧭 DIRECTION
  const getDirection = (from: Scene, to: Scene) => {
    const current = scenes[from];
    if (!current?.hotspots) return "forward";

    const match = current.hotspots.find((h) => h.next === to);

    return match?.direction || "forward";
  };

  // 🚀 AUTO NAVIGATION
  const startAutoNavigation = (path: Scene[]) => {
    if (navRef.current) clearInterval(navRef.current);

    let i = 1;

    const steps = path.length * 5;

    speak(`Starting navigation. Destination is approximately ${steps} steps away`);

    navRef.current = setInterval(() => {
      if (i >= path.length) {
        clearInterval(navRef.current!);
        navRef.current = null;

        const last = path[path.length - 1];
        speak(`You reached ${scenes[last]?.name}`);

        setReached(true);

        setTimeout(() => {
          setReached(false);
        }, 3000);
        return;
      }

      const prev = path[i - 1];
      const next = path[i];

      const dir = getDirection(prev, next);

      const text =
        dir === "left"
          ? "Turn left"
          : dir === "right"
            ? "Turn right"
            : dir === "back"
              ? "Turn back"
              : "Move forward";

      speak(text);

      setScene(next);
      i++;
    }, 2000);
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
      const text = event.results[0][0].transcript.toLowerCase();

      console.log(text);

      if (text.includes("back")) {
        speak("Going back");
        goBack();
        return;
      }

      if (text.includes("home")) {
        speak("Going home");
        goHome();
        return;
      }

      speak(`Navigating to ${text}`);
      handleSearch(text);
    };

    recognition.onerror = () => speak("Voice error");

    recognition.start();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 🧹 CLEANUP
  useEffect(() => {
    return () => {
      if (navRef.current) clearInterval(navRef.current);
    };
  }, []);

  const handleInput = (value: string) => {
    console.log(value);
  };

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl text-cyan-400 mb-4">
            Virtual Campus
          </div>

          <div className="text-white animate-pulse">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  if (!current) {
    return <div className="text-white p-8">Scene not found</div>;
  }

  return (
    <div className="relative h-screen overflow-hidden">

      <TopBar
        mode={mode}
        setShowNav={setShowNav}
        startVoice={startVoice}
        handleInput={handleInput}
        handleSearch={handleSearch}
        suggestions={Object.values(scenes).map((s) => s.name)}
        onBack={goBack}
        onHome={goHome}
      />

      <NavigationPanel
        showNav={showNav}
        setShowNav={setShowNav}
        navigationTree={navigationTree}
        startNavigation={(target) => {
          const path = findPath(graph, scene, target);

          if (!path || path.length === 0) {
            speak("No valid path found");
            return;
          }

          startAutoNavigation(path);
        }}
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

      <div className="absolute top-5 right-5 z-50 flex gap-3">

        <div className="bg-black/60 px-4 py-2 rounded-xl text-white backdrop-blur-md">
          🏢 {getFloor()}
        </div>

        <div className="bg-black/60 px-4 py-2 rounded-xl text-white backdrop-blur-md">
          🧭 {direction}
        </div>

      </div>

      {reached && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-green-500 text-white px-8 py-4 rounded-2xl text-2xl shadow-2xl">
            ✅ Destination Reached
          </div>
        </div>
      )}

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