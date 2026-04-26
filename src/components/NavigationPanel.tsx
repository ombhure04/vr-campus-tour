import React from "react";
import type { Scene } from "../types/scene";

interface Props {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  navigationTree: any;

  // 🔥 IMPORTANT CHANGE
  startNavigation: (target: Scene) => void;
}

export default function NavigationPanel({
  showNav,
  setShowNav,
  navigationTree,
  startNavigation,
}: Props) {

  const renderNavigationTree = (tree: any) => {
    return Object.entries(tree).map(([key, value]) => {

      if (typeof value === "string") {
        return (
          <div
            key={key}
            className="cursor-pointer px-3 py-2 rounded-lg hover:bg-white/20 transition ml-2"
            onClick={() => {
              startNavigation(value as Scene);
              setShowNav(false);
            }}
          >
            → {key}
          </div>
        );
      }

      return (
        <div key={key} className="ml-2">
          <div className="text-sm font-semibold text-cyan-300 mt-2 mb-1">
            {key}
          </div>

          {renderNavigationTree(value)}
        </div>
      );
    });
  };

  if (!showNav) return null;

  return (
    <div className="absolute top-20 right-5 z-50 w-80 max-h-[70vh] overflow-y-auto bg-black/80 backdrop-blur-2xl border border-white/20 text-white rounded-2xl p-4 shadow-2xl">

      <div className="flex justify-between items-center mb-3">
        <div className="text-cyan-400 font-bold">📍 Navigate To</div>

        <button
          onClick={() => setShowNav(false)}
          className="hover:bg-white/20 p-1 rounded"
        >
          ❌
        </button>
      </div>

      {renderNavigationTree(navigationTree)}
    </div>
  );
}