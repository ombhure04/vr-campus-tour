import { useEffect, useRef, useState } from "react";

interface PanoramaViewerProps {
  imageUrl: string;
}

export default function PanoramaViewer({ imageUrl }: PanoramaViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const posRef = useRef({ x: 50, y: 50 });
  const dragRef = useRef(false);
  const startRef = useRef({ x: 0, y: 0 });

  const [renderPos, setRenderPos] = useState({ x: 50, y: 50 });
  const [zoom, setZoom] = useState(1);

  // 🎯 smooth animation loop (fixes mobile lag + jitter)
  useEffect(() => {
    let animationFrame: number;

    const update = () => {
      setRenderPos({ ...posRef.current });
      animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // 🖱️ Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    dragRef.current = true;
    startRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragRef.current) return;

    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;

    posRef.current = {
      x: (posRef.current.x + dx * 0.05 + 100) % 100,
      y: Math.max(0, Math.min(100, posRef.current.y + dy * 0.05)),
    };

    startRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    dragRef.current = false;
  };

  // 📱 Touch events (FIXED)
  const handleTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    dragRef.current = true;
    startRef.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragRef.current) return;

    const t = e.touches[0];

    const dx = t.clientX - startRef.current.x;
    const dy = t.clientY - startRef.current.y;

    posRef.current = {
      x: (posRef.current.x + dx * 0.05 + 100) % 100,
      y: Math.max(0, Math.min(100, posRef.current.y + dy * 0.05)),
    };

    startRef.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = () => {
    dragRef.current = false;
  };

  // 🧠 attach global listeners
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // 🔍 zoom fix
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((z) =>
      Math.max(0.8, Math.min(2.5, z + (e.deltaY > 0 ? -0.1 : 0.1)))
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none bg-black cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
    >
      {/* 🌐 PANORAMA */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: `${200 * zoom}% 100%`,
          backgroundPosition: `${renderPos.x}% ${renderPos.y}%`,
          backgroundRepeat: "repeat-x",
        }}
      />

      {/* 🎯 CENTER */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full opacity-70 -translate-x-1/2 -translate-y-1/2" />

      {/* 📝 UI */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full text-white text-sm">
        Drag / Swipe to look • Scroll to zoom
      </div>
    </div>
  );
}