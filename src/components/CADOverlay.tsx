import React, { useEffect, useState } from 'react';

interface CADOverlayProps {
  active: boolean;
}

export const CADOverlay: React.FC<CADOverlayProps> = ({ active }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!active) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [active]);

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Dynamic Cursor Crosshair Lines */}
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-[#FBBF24]/40 shadow-[0_0_8px_#FBBF24]"
        style={{ left: `${coords.x}px` }}
      />
      <div 
        className="absolute left-0 right-0 h-[1px] bg-[#FBBF24]/40 shadow-[0_0_8px_#FBBF24]"
        style={{ top: `${coords.y}px` }}
      />

      {/* Coordinate HUD Box at cursor */}
      <div 
        className="absolute bg-[#111111]/90 border border-[#FBBF24] p-1.5 font-mono-cad text-[10px] text-[#FBBF24] shadow-lg flex flex-col gap-0.5"
        style={{ 
          left: `${Math.min(coords.x + 15, window.innerWidth - 140)}px`, 
          top: `${Math.min(coords.y + 15, window.innerHeight - 80)}px` 
        }}
      >
        <span>X: {coords.x}px | Y: {coords.y}px</span>
        <span className="text-[#FFFFFF]">STRUCTURAL TENSION: 100%</span>
        <span className="text-[#9CA3AF]">CAD_GRID: #40X40</span>
      </div>

      {/* Screen Corner CAD Calibration Marks */}
      <div className="absolute top-24 left-6 font-mono-cad text-[10px] text-[#FBBF24]/70 bg-[#111111]/80 px-2 py-1 border border-[#FBBF24]/30">
        [CAD OVERLAY: ON] LAT: 29.7604° N | REF: DWG-TITAN-2026
      </div>
      <div className="absolute top-24 right-6 font-mono-cad text-[10px] text-[#FBBF24]/70 bg-[#111111]/80 px-2 py-1 border border-[#FBBF24]/30">
        SCALE: 1:1 FIELD PREVENTIVE MATRIX
      </div>
    </div>
  );
};
