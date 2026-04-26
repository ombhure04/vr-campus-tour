import { useEffect } from "react";

export function useHint(
    scene: string,
    sceneGraph: Record<string, string[]>,
    setHint: (hint: string) => void
) {
  useEffect(() => {
    const neighbors = sceneGraph[scene];

    if (neighbors?.length) {
      setHint(`You can go to: ${neighbors.join(", ")}`);
    }
  }, [scene, sceneGraph, setHint]);
}