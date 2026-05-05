import type { Scene } from "../types/scene";

export function findPath(
  graph: Partial<Record<Scene, Scene[]>>,
  start: Scene,
  target: Scene
): Scene[] {

  const queue: Scene[][] = [[start]];
  const visited = new Set<Scene>();

  while (queue.length) {
    const path = queue.shift()!;
    const node = path[path.length - 1];

    if (node === target) return path;

    if (!visited.has(node)) {
      visited.add(node);

      (graph[node] || []).forEach((next) => {
        queue.push([...path, next]);
      });
    }
  }

  return [];
}