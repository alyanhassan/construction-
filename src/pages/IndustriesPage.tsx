import React from 'react';
import { ArrowUpRight, Briefcase, Building2, Landmark, Factory, ShieldCheck } from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/mockData';

interface IndustriesPageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-blueprint-grid border-b-4 border-[#374151] py-16 px-6 sm:px-12 bg-[#1F2937]/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">
            <span className="w-2.5 h-2.5 bg-[#FBBF24] inline-block"></span>
            12 CORE SECTORS // MARKET SECTOR MATRIX
          </div>
          <h1 className="font-industrial text-5xl sm:text-7xl font-black text-[#FFFFFF] uppercase tracking-tight">
            INDUSTRIES & <span className="text-[#FBBF24]">MARKETS</span>
          </h1>
          <p className="font-mono-cad text-xs sm:text-sm text-[#9CA3AF] max-w-2xl">
            Titan Build Group delivers specialized heavy construction engineering across 12 primary market sectors, complying with state and federal regulations.
          </p>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES_DATA.map((industry) => (
            <div
              key={industry.id}
              onClick={() => onNavigate('projects', industry.name)}
              className="bg-[#1F2937] border-2 border-[#374151] hover:border-[#FBBF24] p-8 flex flex-col justify-between space-y-6 transition-all hover:-translate-y-1 cursor-pointer group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#374151] pb-4 font-mono-cad text-xs">
                  <span className="text-[#FBBF24] font-bold">{industry.code}</span>
                  <span className="text-[#FFFFFF] font-bold bg-[#111111] px-2.5 py-1 border border-[#374151]">{industry.marketShare}</span>
                </div>

                <h3 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase group-hover:text-[#FBBF24] transition-colors">
                  {industry.name}
                </h3>

                <p className="font-mono-cad text-xs text-[#9CA3AF] leading-relaxed">
                  {industry.description}
                </p>
              </div>

              {/* Regulatory Standards & Specializations */}
              <div className="space-y-3 font-mono-cad text-xs bg-[#111111] p-4 border border-[#374151]">
                <span className="text-[#FBBF24] text-[10px] font-bold uppercase block">REGULATORY CODES</span>
                <div className="flex flex-wrap gap-2 text-[11px] text-[#E5E7EB]">
                  {industry.regulatoryStandards.map((std, i) => (
                    <span key={i} className="bg-[#1F2937] px-2 py-0.5 border border-[#374151]">
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 font-industrial text-lg text-[#FBBF24] font-bold">
                <span>EXPLORE SECTOR PROJECTS</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
