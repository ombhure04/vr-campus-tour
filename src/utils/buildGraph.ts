import type { Scene, SceneData } from "../types/scene";

export function buildGraph(
  scenes: Partial<Record<Scene, SceneData>>
) {
  const graph: Partial<Record<Scene, Scene[]>> = {};

  Object.entries(scenes).forEach(([key, scene]) => {
    if (!scene) return;

    graph[key as Scene] = scene.hotspots.map((h) => h.next);
  });

  return graph;
}