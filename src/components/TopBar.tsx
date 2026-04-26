import React, { useState } from "react";
import { Mic, Search, Map, Navigation, X } from "lucide-react";

interface TopBarProps {
  mode: "guided" | "free";
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  startVoice: () => void;
  handleInput: (value: string) => void;
  handleSearch: (value: string) => void;
  suggestions: string[]; // 👈 pass scene names
}

export default function TopBar({
  mode,
  setShowNav,
  startVoice,
  handleInput,
  handleSearch,
  suggestions,
}: TopBarProps) {
  const [query, setQuery] = useState("");
  const [listening, setListening] = useState(false);
  const [filtered, setFiltered] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // 🔍 handle typing
  const onChange = (value: string) => {
    setQuery(value);
    handleInput(value);

    if (!value) {
      setFiltered([]);
      return;
    }

    const results = suggestions.filter((s) =>
      s.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(results.slice(0, 5)); // top 5
  };

  // 🚀 handle search
  const onSearch = (value: string) => {
    if (!value) return;

    setLoading(true);
    setFiltered([]);

    handleSearch(value);

    setTimeout(() => setLoading(false), 1500); // simulate navigation
  };

  // 🎤 voice
  const handleVoice = () => {
    setListening(true);
    startVoice();
    setTimeout(() => setListening(false), 3000);
  };

  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50">

      <div className="flex items-center gap-3 px-5 py-3 rounded-full 
        bg-white/10 backdrop-blur-2xl border border-white/20 
        shadow-[0_0_25px_rgba(0,255,255,0.2)]">

        {/* 🔍 Search */}
        <div className="relative flex items-center bg-black/30 px-3 py-2 rounded-full border border-white/10 focus-within:border-cyan-400 transition">
          
          <Search size={16} className="text-gray-300 mr-2" />

          <input
            type="text"
            placeholder={
              mode === "guided"
                ? "Search destination (guided)"
                : "Search location..."
            }
            value={query}
            className="bg-transparent outline-none text-white text-sm w-56 placeholder:text-gray-400"
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch(query);
              }
            }}
          />

          {/* ❌ Clear */}
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setFiltered([]);
              }}
              className="ml-2 text-gray-400 hover:text-white"
            >
              <X size={14} />
            </button>
          )}

          {/* ⏳ Loading */}
          {loading && (
            <div className="ml-2 w-3 h-3 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          )}

          {/* 📌 Suggestions */}
          {filtered.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
              {filtered.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setQuery(item);
                    setFiltered([]);
                    onSearch(item);
                  }}
                  className="px-4 py-2 text-sm text-white hover:bg-cyan-400/20 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 📍 Mode */}
        <div className={`px-3 py-1 text-xs rounded-full font-medium flex items-center gap-1
          ${mode === "guided" ? "bg-green-400/20 text-green-300" : "bg-cyan-400/20 text-cyan-300"}`}>
          <Navigation size={14} />
          {mode.toUpperCase()}
        </div>

        {/* 🗺️ Map */}
        <button
          onClick={() => setShowNav((prev) => !prev)}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <Map size={18} />
        </button>

        {/* 🎤 Voice */}
        <button
          onClick={handleVoice}
          className={`p-2 rounded-full transition
            ${listening ? "bg-red-400 animate-pulse" : "bg-cyan-400 hover:bg-cyan-300 text-black"}`}
        >
          <Mic size={18} />
        </button>

      </div>

      {/* 🎙 Listening */}
      {listening && (
        <div className="text-center text-xs text-cyan-300 mt-2 animate-pulse">
          Listening...
        </div>
      )}
    </div>
  );
}