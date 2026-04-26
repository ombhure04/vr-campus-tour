import { useState, useEffect } from "react";
import type { Scene } from "../types/scene";
import sceneGraph from "../data/sceneGraph";

export const useNavigation = (
  scene: Scene,
  setScene: (scene: Scene) => void,
  onBack: () => void
) => {

  const [history, setHistory] = useState<Scene[]>([]);
  const [path, setPath] = useState<Scene[]>([]);
  const [index, setIndex] = useState(0);
  const [currentDirection, setCurrentDirection] = useState("");

  // 🎯 IMPORTANT: SCAN BASED START POINT
  const [startPoint, setStartPoint] = useState<Scene>(scene);

  // 🧭 BFS PATH FINDER
  const findPath = (start: Scene, end: Scene): Scene[] => {
    const queue: Scene[][] = [[start]];
    const visited = new Set<Scene>();

    while (queue.length) {
      const path = queue.shift()!;
      const node = path[path.length - 1];

      if (node === end) return path;

      if (!visited.has(node)) {
        visited.add(node);

        for (const n of sceneGraph[node] || []) {
          queue.push([...path, n]);
        }
      }
    }
    return [];
  };

  // 🧠 SMART DIRECTION ENGINE
  const getDirection = (from: Scene, to: Scene) => {
    if (from === to) return "";

    if (to.includes("left")) return "Turn left and move forward";
    if (to.includes("right")) return "Turn right and move forward";
    if (to.includes("stairs")) return "Go straight towards stairs";
    if (to.includes("library")) return "Walk towards Library";
    if (to.includes("auditorium")) return "Head towards Auditorium";

    return "Move forward";
  };

  // 🚶 GO STEP
  const goTo = (next: Scene) => {
    setHistory(prev => [...prev, scene]);
    setScene(next);
  };

  // 🔙 BACK
  const goBack = () => {
    if (history.length) {
      const prev = history[history.length - 1];
      setHistory(h => h.slice(0, -1));
      setScene(prev);
    } else {
      onBack();
    }
  };

  // 📍 START NAVIGATION (PRO VERSION)
  const startNavigation = (target: Scene, scanStart?: Scene) => {
    const start = scanStart || startPoint;

    const route = findPath(start, target);

    if (route.length > 0) {
      setPath(route);
      setIndex(0);
      setStartPoint(start);
    }
  };

  // 🧠 AUTO WALK ENGINE (VR FEEL)
  useEffect(() => {
    if (!path.length) return;

    const current = path[index];
    const next = path[index + 1];

    if (scene !== current) {
      setTimeout(() => setScene(current), 500);
    }

    if (next) {
      const dir = getDirection(current, next);
      setCurrentDirection(dir);
    } else {
      setCurrentDirection("🎯 Destination reached");
      return;
    }

    const timer = setTimeout(() => {
      setIndex(i => i + 1);
    }, 2500);

    return () => clearTimeout(timer);
  }, [path, index]);

  // 🔊 VOICE NAVIGATION
  useEffect(() => {
    if (!currentDirection) return;

    const speech = new SpeechSynthesisUtterance(currentDirection);
    speech.rate = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  }, [currentDirection]);

  return {
    goTo,
    goBack,
    startNavigation,
    currentDirection,
    setStartPoint
  };
};