import { ArrowLeft, Building2, Home, MoreVertical } from 'lucide-react';
import { useState } from 'react';

interface NavigationControlsProps {
  currentLocation: string;
  onBack?: () => void;
  onHome: () => void;
  infoContent?: React.ReactNode; // ✅ ADD THIS

  showFloorSelector?: boolean;
  currentFloor?: number;
  onFloorChange?: (floor: number) => void;
  totalFloors?: number;
}

export default function NavigationControls({
  currentLocation,
  onBack,
  onHome,
  infoContent,
  showFloorSelector = false,
  currentFloor = 0,
  onFloorChange,
  totalFloors = 3
}: NavigationControlsProps) {

  const [open, setOpen] = useState(false); // ✅ MENU STATE

  return (
    <>
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/60 to-transparent p-4">
        <div className="flex items-center justify-between">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 text-white"
              >
                <ArrowLeft size={20} />
              </button>
            )}

            <button
              onClick={onHome}
              className="p-2 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 text-white"
            >
              <Home size={20} />
            </button>

            <h2 className="text-white font-semibold text-lg">
              {currentLocation}
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* 🏢 FLOOR SELECTOR */}
            {showFloorSelector && onFloorChange && (
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg p-2">
                <Building2 size={18} className="text-white" />
                <div className="flex gap-1">
                  {Array.from({ length: totalFloors }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => onFloorChange(i)}
                      className={`px-3 py-1 rounded text-sm ${
                        currentFloor === i
                          ? 'bg-white text-black'
                          : 'text-white hover:bg-white/20'
                      }`}
                    >
                      {i === 0 ? 'G' : i}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 🔥 3 DOT MENU BUTTON */}
            {infoContent && (
              <button
                onClick={() => setOpen(true)}
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 text-white"
              >
                <MoreVertical size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 🔥 SIDE PANEL */}
      {open && (
        <div className="absolute top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-lg z-30 p-5 text-white">
          
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Details</h3>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {infoContent}
        </div>
      )}
    </>
  );
}