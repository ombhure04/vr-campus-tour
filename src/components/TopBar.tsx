import React, { useState } from "react";
import {
  Mic,
  Search,
  Map,
  Navigation,
  X,
  ArrowLeft,
  Home,
} from "lucide-react";

interface TopBarProps {
  mode: "guided" | "free";
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  startVoice: () => void;
  handleInput: (value: string) => void;
  handleSearch: (value: string) => void;
  suggestions: string[];
  onBack?: () => void;
  onHome?: () => void;
}

export default function TopBar({
  mode,
  setShowNav,
  startVoice,
  handleInput,
  handleSearch,
  suggestions,
  onBack,
  onHome,
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

    setFiltered(results.slice(0, 5));
  };

  // 🚀 handle search
  const onSearch = (value: string) => {
    if (!value) return;

    setLoading(true);
    setFiltered([]);

    handleSearch(value);

    setTimeout(() => setLoading(false), 1500);
  };

  // 🎤 voice
  const handleVoice = () => {
    setListening(true);
    startVoice();

    setTimeout(() => setListening(false), 3000);
  };

  return (
    <div className="absolute top-4 left-4 z-50 flex items-center gap-5">

      {/* 🏫 Left Controls */}
      <div
        className="
          flex items-center gap-2
          px-3 py-2
          rounded-2xl
          bg-black/45
          backdrop-blur-xl
          border border-white/10
          shadow-lg
        "
      >
        {/* 🔙 Back */}
        <button
          onClick={onBack}
          className="
            p-2 rounded-xl
            bg-white/5
            hover:bg-white/15
            transition-all duration-200
          "
        >
          <ArrowLeft size={18} className="text-white" />
        </button>

        {/* 🏠 Home */}
        <button
          onClick={onHome}
          className="
            p-2 rounded-xl
            bg-white/5
            hover:bg-white/15
            transition-all duration-200
          "
        >
          <Home size={18} className="text-white" />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Title */}
        <div className="text-white font-semibold text-lg whitespace-nowrap">
          Campus Tour
        </div>
      </div>

      {/* 🔍 Main Search Bar */}
      <div
        className="
          flex items-center gap-3
          px-4 py-3
          rounded-2xl
          bg-black/45
          backdrop-blur-xl
          border border-white/10
          shadow-lg
        "
      >

        {/* 🔍 Search */}
        <div
          className="
            relative flex items-center
            bg-black/30
            px-3 py-2
            rounded-full
            border border-white/10
            focus-within:border-cyan-400
            transition
          "
        >
          <Search size={16} className="text-gray-300 mr-2" />

          <input
            type="text"
            placeholder={
              mode === "guided"
                ? "Search destination..."
                : "Search location..."
            }
            value={query}
            className="
              bg-transparent
              outline-none
              text-white text-sm
              w-48 md:w-56
              placeholder:text-gray-400
            "
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
            <div
              className="
                absolute top-12 left-0 w-full
                bg-black/80
                backdrop-blur-xl
                border border-white/10
                rounded-xl
                overflow-hidden
              "
            >
              {filtered.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setQuery(item);
                    setFiltered([]);
                    onSearch(item);
                  }}
                  className="
                    px-4 py-2
                    text-sm text-white
                    hover:bg-cyan-400/20
                    cursor-pointer
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 📍 Mode */}
        <div
          className={`
            px-3 py-1
            text-xs font-medium
            rounded-full
            flex items-center gap-1
            ${
              mode === "guided"
                ? "bg-green-400/20 text-green-300"
                : "bg-cyan-400/20 text-cyan-300"
            }
          `}
        >
          <Navigation size={14} />
          {mode.toUpperCase()}
        </div>

        {/* 🗺️ Map */}
        <button
          onClick={() => setShowNav((prev) => !prev)}
          className="
            p-2 rounded-full
            bg-white/10
            hover:bg-white/20
            hover:scale-105
            transition-all duration-200
          "
        >
          <Map size={18} className="text-white" />
        </button>

        {/* 🎤 Voice */}
        <button
          onClick={handleVoice}
          className={`
            p-2 rounded-full transition
            ${
              listening
                ? "bg-red-400 animate-pulse"
                : "bg-cyan-400 hover:bg-cyan-300 text-black"
            }
          `}
        >
          <Mic size={18} />
        </button>
      </div>

      {/* 🎙 Listening */}
      {listening && (
        <div className="absolute top-20 left-[420px]">
          <div className="text-xs text-cyan-300 animate-pulse">
            Listening...
          </div>
        </div>
      )}
    </div>
  );
}