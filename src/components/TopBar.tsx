import React from "react";

interface TopBarProps {
  mode: "guided" | "free";
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  startVoice: () => void;
  handleInput: (value: string) => void;
  handleSearch: (value: string) => void;
}

export default function TopBar({
  mode,
  setShowNav,
  startVoice,
  handleInput,
  handleSearch,
}: TopBarProps) {
  return (
    <div className="absolute top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-black/50 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg border border-white/20">
      
      {mode === "free" && (
        <input
          type="text"
          placeholder="Search location..."
          className="px-4 py-2 rounded-full text-sm bg-transparent text-white outline-none w-56 placeholder:text-gray-300"
          onChange={(e) => handleInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch((e.target as HTMLInputElement).value);
            }
          }}
        />
      )}

      <div className="text-cyan-300 font-semibold">
        📍 {mode === "guided" ? "Guided" : "Free"} Mode
      </div>

      <button
        onClick={() => setShowNav((prev) => !prev)}
        className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition"
      >
        🗺️
      </button>

      <button
        onClick={startVoice}
        className="bg-cyan-400 hover:bg-cyan-300 text-black p-2 rounded-full"
      >
        🎤
      </button>
    </div>
  );
}