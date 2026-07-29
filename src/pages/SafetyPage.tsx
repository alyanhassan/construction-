import React from 'react';
import { ShieldCheck, HardHat, Award, AlertTriangle, CheckCircle2, Activity } from 'lucide-react';

interface SafetyPageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const SafetyPage: React.FC<SafetyPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-blueprint-grid border-b-4 border-[#374151] py-16 px-6 sm:px-12 bg-[#1F2937]/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">
            <span className="w-2.5 h-2.5 bg-[#10B981] rounded-full inline-block animate-ping"></span>
            ZERO INCIDENT ENVIRONMENT // OSHA VPP STAR CERTIFIED
          </div>
          <h1 className="font-industrial text-5xl sm:text-7xl font-black text-[#FFFFFF] uppercase tracking-tight">
            SAFETY & <span className="text-[#FBBF24]">COMPLIANCE</span>
          </h1>
          <p className="font-mono-cad text-xs sm:text-sm text-[#9CA3AF] max-w-2xl">
            Titan Build Group enforces an uncompromised zero-hazard policy. Our Experience Modification Rate (EMR) of 0.54 ranks in the top 1% of heavy industrial contractors nationwide.
          </p>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 space-y-12">
        
        {/* KPI Dashboard Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono-cad">
          
          <div className="bg-[#1F2937] border-2 border-[#10B981] p-6 space-y-2">
            <span className="text-[#10B981] font-bold text-xs uppercase block">SAFETY STREAK</span>
            <span className="font-industrial text-5xl font-black text-[#FFFFFF] block">1,420</span>
            <span className="text-[#9CA3AF] text-xs uppercase block">CONSECUTIVE DAYS NO LTI</span>
          </div>

          <div className="bg-[#1F2937] border-2 border-[#FBBF24] p-6 space-y-2">
            <span className="text-[#FBBF24] font-bold text-xs uppercase block">EMR SCORE</span>
            <span className="font-industrial text-5xl font-black text-[#FBBF24] block">0.54</span>
            <span className="text-[#9CA3AF] text-xs uppercase block">NATIONAL AVG = 1.00</span>
          </div>

          <div className="bg-[#1F2937] border-2 border-[#374151] p-6 space-y-2">
            <span className="text-[#FFFFFF] font-bold text-xs uppercase block">TOTAL MAN-HOURS</span>
            <span className="font-industrial text-5xl font-black text-[#FFFFFF] block">24.8M</span>
            <span className="text-[#9CA3AF] text-xs uppercase block">WORKED WITHOUT FATALITY</span>
          </div>

          <div className="bg-[#1F2937] border-2 border-[#374151] p-6 space-y-2">
            <span className="text-[#10B981] font-bold text-xs uppercase block">OSHA COMPLIANCE</span>
            <span className="font-industrial text-5xl font-black text-[#10B981] block">100%</span>
            <span className="text-[#9CA3AF] text-xs uppercase block">VPP STAR AUDIT RATING</span>
          </div>

        </div>

        {/* Safety Programs & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-[#1F2937] border border-[#374151] p-8 space-y-4">
            <ShieldCheck className="w-10 h-10 text-[#FBBF24]" />
            <h3 className="font-industrial text-2xl font-black text-[#FFFFFF] uppercase">
              DAILY 360 WORKPLACE AUDITS
            </h3>
            <p className="font-mono-cad text-xs text-[#9CA3AF] leading-relaxed">
              Before every shift, field superintendents conduct digital Job Hazard Analyses (JHA) and crane rigging inspections. Any worker has full stop-work authority.
            </p>
          </div>

          <div className="bg-[#1F2937] border border-[#374151] p-8 space-y-4">
            <HardHat className="w-10 h-10 text-[#FBBF24]" />
            <h3 className="font-industrial text-2xl font-black text-[#FFFFFF] uppercase">
              CONTINUOUS 100% CERTIFICATION
            </h3>
            <p className="font-mono-cad text-xs text-[#9CA3AF] leading-relaxed">
              All on-site project managers, engineers, and superintendents hold active OSHA 30-Hour certificates, CPR/First Aid credentials, and rigging safety badges.
            </p>
          </div>

          <div className="bg-[#1F2937] border border-[#374151] p-8 space-y-4">
            <Award className="w-10 h-10 text-[#FBBF24]" />
            <h3 className="font-industrial text-2xl font-black text-[#FFFFFF] uppercase">
              ISO 45001 OCCUPATIONAL HEALTH
            </h3>
            <p className="font-mono-cad text-xs text-[#9CA3AF] leading-relaxed">
              Certified under international ISO 45001 safety management standards, integrating noise monitoring, air quality HEPA filtration, and thermal stress sensors.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
