import { useEffect, useRef, useState } from "react";

interface PanoramaViewerProps {
  imageUrl: string;
}

export default function PanoramaViewer({ imageUrl }: PanoramaViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // 🔥 use % instead of degrees
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;

      setPosition((prev) => ({
        x: (prev.x + deltaX * 0.05 + 100) % 100, // horizontal loop
        y: Math.max(0, Math.min(100, prev.y + deltaY * 0.05)), // vertical clamp
      }));

      setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  // 📱 MOBILE SUPPORT
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const touch = e.touches[0];

    const deltaX = touch.clientX - dragStart.x;
    const deltaY = touch.clientY - dragStart.y;

    setPosition((prev) => ({
      x: (prev.x + deltaX * 0.05 + 100) % 100,
      y: Math.max(0, Math.min(100, prev.y + deltaY * 0.05)),
    }));

    setDragStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((prev) =>
      Math.max(0.8, Math.min(2.5, prev + (e.deltaY > 0 ? -0.1 : 0.1)))
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing select-none bg-black"
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 🌐 PANORAMA */}
      <div
        className="absolute inset-0 transition-all duration-75"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: `${200 * zoom}% 100%`, // important for 360
          backgroundPosition: `${position.x}% ${position.y}%`,
          backgroundRepeat: "repeat-x",
        }}
      />

      {/* 🎯 CENTER DOT */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full opacity-70 transform -translate-x-1/2 -translate-y-1/2" />

      {/* 📝 CONTROLS */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm flex items-center gap-4">
        <span className="text-xs opacity-70">Drag / Swipe to look</span>
        <span className="text-xs opacity-50">|</span>
        <span className="text-xs opacity-70">Scroll to zoom</span>
      </div>
    </div>
  );
}