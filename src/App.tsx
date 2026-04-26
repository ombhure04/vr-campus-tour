import { useState } from 'react';

import LandingPage from './components/LandingPage';
import FloorView from './components/FloorView';
import RoomView from './components/RoomView';
import FacilityView from './components/FacilityView';

import type { Room, Facility } from './types.ts';
import type { Scene } from './types/scene.ts';

// ✅ MODE
type Mode = 'guided' | 'free';

// ✅ VIEW TYPES
type ViewType =
  | 'landing'
  | 'floors'
  | 'room'
  | 'facility';

function App() {

  const [mode, setMode] = useState<Mode>('free');
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [currentFloor, setCurrentFloor] = useState(0);

  const [scene, setScene] = useState<Scene>('entrance1');

  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  // 🎯 GUIDED FLOW
  const handleExploreGuided = () => {
    setMode('guided');
    setScene('entrance1');     // ✅ start from entrance
    setCurrentView('floors'); // ✅ go directly to FloorView
  };

  // 🎯 FREE MODE
  const handleExploreFree = () => {
    setMode('free');
    setCurrentView('floors');
    setScene('corridor_main'); // ✅ FIXED (removed 'ground')
  };

  const handleFloorChange = (floor: number) => {
    setCurrentFloor(floor);
  };

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room);
    setCurrentView('room');
  };

  const handleFacilitySelect = (facility: Facility) => {
    setMode('free');
    setSelectedFacility(facility);
    setCurrentView('facility');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    setSelectedRoom(null);
    setSelectedFacility(null);
  };

  const handleBackToFloors = () => {
    setCurrentView('floors');
    setSelectedRoom(null);
  };

  return (
    <>
      {/* 🏠 LANDING */}
      {currentView === 'landing' && (
        <LandingPage
          onExplore={handleExploreGuided}
          onFacility={handleFacilitySelect}
          onFreeExplore={handleExploreFree}
        />
      )}

      {/* 🏢 FLOOR + VR FLOW */}
      {currentView === 'floors' && (
        <FloorView
          currentFloor={currentFloor}
          onFloorChange={handleFloorChange}
          onRoomSelect={handleRoomSelect}
          onBack={handleBackToLanding}
          totalFloors={3}
          mode={mode}
          scene={scene}
          setScene={setScene}
        />
      )}

      {/* 🚪 ROOM */}
      {currentView === 'room' && selectedRoom && (
        <RoomView
          room={selectedRoom}
          onBack={handleBackToFloors}
        />
      )}

      {/* 🏢 FACILITY */}
      {currentView === 'facility' && selectedFacility && (
        <FacilityView
          facility={selectedFacility}
          onBack={handleBackToLanding}
        />
      )}
    </>
  );
}

export default App;