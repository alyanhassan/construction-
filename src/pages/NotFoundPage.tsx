import React from 'react';
import { AlertTriangle, ArrowLeft, Building2, HardHat } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-[80vh] flex flex-col items-center justify-center p-6 bg-blueprint-grid">
      
      <div className="max-w-2xl w-full bg-[#1F2937] border-4 border-[#EF4444] p-8 sm:p-12 text-center space-y-6 font-mono-cad shadow-2xl relative overflow-hidden">
        
        {/* Background Hazard Stripes */}
        <div className="absolute top-0 left-0 w-full h-3 bg-hazard-stripes"></div>

        <div className="w-16 h-16 bg-[#EF4444]/20 border border-[#EF4444] rounded-full flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8 text-[#EF4444]" />
        </div>

        <div className="space-y-2">
          <span className="bg-[#EF4444] text-[#FFFFFF] font-bold px-3 py-1 text-xs uppercase">
            STRUCTURAL CAD ERROR // 404
          </span>
          <h1 className="font-industrial text-4xl sm:text-6xl font-black text-[#FFFFFF] uppercase">
            SPECIFICATION NOT FOUND
          </h1>
        </div>

        <p className="text-xs text-[#9CA3AF] leading-relaxed max-w-md mx-auto">
          The requested coordinate or blueprint specification sheet does not exist in the active Titan Build Group operational matrix.
        </p>

        <div className="bg-[#111111] p-4 border border-[#374151] text-[11px] text-[#FBBF24] max-w-sm mx-auto">
          ERROR_CODE: DWG_MISSING_REF_0x404
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="w-full sm:w-auto bg-[#FBBF24] hover:bg-[#FFFFFF] text-[#111111] font-industrial text-xl font-black px-8 py-3 uppercase transition-colors cursor-pointer"
          >
            RETURN TO COMMAND CENTER
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="w-full sm:w-auto bg-[#111111] text-[#FFFFFF] border border-[#374151] hover:border-[#FBBF24] font-mono-cad text-xs font-bold px-6 py-3 uppercase transition-colors cursor-pointer"
          >
            BROWSE 60 PROJECTS
          </button>
        </div>

      </div>

    </div>
  );
};
