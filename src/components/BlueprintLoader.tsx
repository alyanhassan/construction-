import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, HardHat, Compass } from 'lucide-react';

interface BlueprintLoaderProps {
  onComplete: () => void;
}

export const BlueprintLoader: React.FC<BlueprintLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('LOADING STRUCTURAL CAD SCHEMATICS...');

  useEffect(() => {
    const statuses = [
      'CALIBRATING LASER SURVEY COORDINATES...',
      'VERIFYING BEAM DEFLECTION & TENSION LOADS...',
      'LOADING 60 PROJECT TELEMETRY DATASETS...',
      'INITIALIZING HEAVY FLEET DISPATCH MATRIX...',
      'TITAN BUILD GROUP SYSTEM ONLINE'
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 400);
          return 100;
        }
        
        // Update status text based on progress thresholds
        if (next > 80) setStatusText(statuses[4]);
        else if (next > 60) setStatusText(statuses[3]);
        else if (next > 40) setStatusText(statuses[2]);
        else if (next > 20) setStatusText(statuses[1]);

        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#111111] text-[#E5E7EB] p-6 md:p-12 overflow-hidden bg-blueprint-grid"
    >
      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between border-b border-[#374151] pb-4 font-mono-cad text-xs tracking-widest text-[#9CA3AF]">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#FBBF24] inline-block animate-pulse"></span>
          <span className="text-[#E5E7EB] font-bold uppercase">TITAN OS // STRUCTURAL CAD INIT v4.8</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>LAT: 29.7604° N</span>
          <span>LON: -95.3698° W</span>
          <span>EMR: 0.54</span>
        </div>
        <button 
          onClick={onComplete}
          className="bg-[#1F2937] hover:bg-[#FBBF24] hover:text-[#111111] text-[#FBBF24] border border-[#FBBF24] px-3 py-1 font-mono-cad text-xs transition-colors cursor-pointer uppercase font-bold"
        >
          SKIP ANIMATION [ESC]
        </button>
      </div>

      {/* Main Blueprint Line Drawing Visual */}
      <div className="relative w-full max-w-3xl flex-1 flex flex-col items-center justify-center py-8">
        {/* Scanning Laser Line */}
        <div className="animate-scanline w-full"></div>

        {/* CAD Blueprint Blueprint Frame & Grid Crosshairs */}
        <div className="relative w-full h-64 md:h-80 border-2 border-[#374151] bg-[#111111]/90 p-4 flex flex-col justify-between overflow-hidden shadow-2xl">
          
          {/* Blueprint Corner Markers */}
          <div className="absolute top-2 left-2 text-[10px] font-mono-cad text-[#6B7280]">AXIS [0,0]</div>
          <div className="absolute top-2 right-2 text-[10px] font-mono-cad text-[#6B7280]">REV: 2026.07</div>
          <div className="absolute bottom-2 left-2 text-[10px] font-mono-cad text-[#6B7280]">TENSION: OK</div>
          <div className="absolute bottom-2 right-2 text-[10px] font-mono-cad text-[#FBBF24]">LOD 500</div>

          {/* SVG Line Blueprint Structural Animation */}
          <svg className="w-full h-full stroke-[#FBBF24] fill-none stroke-[1.5]" viewBox="0 0 600 240">
            {/* Grid background lines inside canvas */}
            <defs>
              <pattern id="cadGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="600" height="240" fill="url(#cadGrid)" />

            {/* Ground Line */}
            <line x1="20" y1="210" x2="580" y2="210" stroke="#6B7280" strokeWidth="2" strokeDasharray="4 4" />

            {/* Column 1 */}
            <motion.line 
              x1="100" y1="210" x2="100" y2="30" 
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: Math.min(progress / 100 * 1.2, 1) }} 
              transition={{ duration: 0.2 }}
            />
            {/* Column 2 */}
            <motion.line 
              x1="250" y1="210" x2="250" y2="30" 
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: Math.min(progress / 100 * 1.2, 1) }} 
            />
            {/* Column 3 */}
            <motion.line 
              x1="400" y1="210" x2="400" y2="30" 
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: Math.min(progress / 100 * 1.2, 1) }} 
            />
            {/* Column 4 */}
            <motion.line 
              x1="500" y1="210" x2="500" y2="30" 
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: Math.min(progress / 100 * 1.2, 1) }} 
            />

            {/* Beams */}
            <motion.line x1="100" y1="160" x2="500" y2="160" initial={{ pathLength: 0 }} animate={{ pathLength: Math.max(0, (progress - 20) / 80) }} />
            <motion.line x1="100" y1="100" x2="500" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: Math.max(0, (progress - 40) / 60) }} />
            <motion.line x1="100" y1="40" x2="500" y2="40" initial={{ pathLength: 0 }} animate={{ pathLength: Math.max(0, (progress - 60) / 40) }} />

            {/* Diagonal Trusses */}
            <motion.line x1="100" y1="210" x2="250" y2="160" initial={{ pathLength: 0 }} animate={{ pathLength: Math.max(0, (progress - 30) / 70) }} stroke="#E5E7EB" />
            <motion.line x1="250" y1="210" x2="100" y2="160" initial={{ pathLength: 0 }} animate={{ pathLength: Math.max(0, (progress - 30) / 70) }} stroke="#E5E7EB" />
            <motion.line x1="250" y1="160" x2="400" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: Math.max(0, (progress - 50) / 50) }} stroke="#E5E7EB" />
            <motion.line x1="400" y1="160" x2="250" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: Math.max(0, (progress - 50) / 50) }} stroke="#E5E7EB" />
            <motion.line x1="400" y1="100" x2="500" y2="40" initial={{ pathLength: 0 }} animate={{ pathLength: Math.max(0, (progress - 70) / 30) }} stroke="#E5E7EB" />
            <motion.line x1="500" y1="100" x2="400" y2="40" initial={{ pathLength: 0 }} animate={{ pathLength: Math.max(0, (progress - 70) / 30) }} stroke="#E5E7EB" />

            {/* Dimension Callout Arrow */}
            <g transform="translate(520, 40)">
              <line x1="0" y1="0" x2="0" y2="170" stroke="#FBBF24" strokeWidth="1" strokeDasharray="2 2" />
              <text x="8" y="85" fill="#FBBF24" fontSize="10" fontFamily="JetBrains Mono">170 FT</text>
            </g>
          </svg>

          {/* Center Brand Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111111]/40 pointer-events-none">
            <h1 className="font-industrial text-4xl sm:text-6xl font-black tracking-wider text-[#FFFFFF] drop-shadow-md">
              TITAN <span className="text-[#FBBF24]">BUILD GROUP</span>
            </h1>
            <p className="font-mono-cad text-xs sm:text-sm text-[#E5E7EB] tracking-widest mt-1 bg-[#111111]/80 px-3 py-0.5 border border-[#374151]">
              BUILDING TOMORROW WITH PRECISION
            </p>
          </div>
        </div>

        {/* Progress Bar & Status Line */}
        <div className="w-full mt-6 space-y-3">
          <div className="flex justify-between items-end font-mono-cad text-xs text-[#E5E7EB]">
            <span className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#FBBF24] animate-spin" />
              <span className="text-[#FBBF24] font-bold">{statusText}</span>
            </span>
            <span className="text-3xl font-black text-[#FFFFFF] font-industrial tracking-tight">
              {progress}<span className="text-[#FBBF24]">%</span>
            </span>
          </div>

          <div className="w-full h-3 bg-[#1F2937] border border-[#374151] overflow-hidden p-0.5">
            <div 
              className="h-full bg-gradient-to-r from-[#FBBF24] via-[#FBBF24] to-[#FBBF24] transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Footer Metrics Line */}
      <div className="w-full flex flex-wrap items-center justify-between border-t border-[#374151] pt-4 font-mono-cad text-[11px] text-[#9CA3AF] gap-4">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-[#E5E7EB]">
            <HardHat className="w-3.5 h-3.5 text-[#FBBF24]" />
            50+ YRS EXP
          </span>
          <span className="flex items-center gap-1.5 text-[#E5E7EB]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FBBF24]" />
            99% SAFETY COMPLIANCE
          </span>
        </div>
        <div>
          <span>SYSTEM READY FOR OPERATIONAL DEPLOYMENT</span>
        </div>
      </div>
    </motion.div>
  );
};
