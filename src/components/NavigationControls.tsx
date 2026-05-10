import { ArrowLeft, Home } from 'lucide-react';
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
}: NavigationControlsProps) {

  const [open, setOpen] = useState(false); // ✅ MENU STATE

  return (
    <>
      <div className="absolute top-5 left-5 z-20">
        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">

          {/* LEFT SIDE */}
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