import { type Room } from '../lib/supabase';
import PanoramaViewer from './PanoramaViewer';
import NavigationControls from './NavigationControls';

interface RoomViewProps {
  room: Room;
  onBack: () => void;
}

export default function RoomView({ room, onBack }: RoomViewProps) {
  return (
    <div className="relative min-h-screen bg-slate-900">
      <NavigationControls
        currentLocation={room.name}
        onBack={onBack}
        onHome={onBack}
      />

      <div className="h-screen">
        {room.image_360 ? (
          <PanoramaViewer imageUrl={room.image_360} />
        ) : (
          <div className="w-full h-full bg-slate-800 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
              <p className="text-slate-400">{room.description}</p>
              <p className="text-sm text-slate-500 mt-4">360° image coming soon</p>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-8 right-8 bg-black/70 backdrop-blur-sm rounded-lg p-4 max-w-xs">
        <h3 className="text-white font-semibold mb-2">{room.name}</h3>
        <p className="text-slate-300 text-sm mb-2">{room.description}</p>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-blue-600/50 rounded text-xs text-white">
            {room.type}
          </span>
        </div>
      </div>
    </div>
  );
}
