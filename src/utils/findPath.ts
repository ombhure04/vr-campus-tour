// utils/findPath.ts
export function findPath(
  graph: Record<string, string[]>,
  start: string,
  target: string
): string[] {
  const queue: string[][] = [[start]];
  const visited = new Set<string>();

  while (queue.length) {
    const path = queue.shift()!;
    const node = path[path.length - 1];

    if (node === target) return path;

    if (!visited.has(node)) {
      visited.add(node);
      for (const next of graph[node] || []) {
        queue.push([...path, next]);
      }
    }
  }

  return [];
}