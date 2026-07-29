import React from 'react';
import { FileText, ArrowUpRight, CheckCircle2, ShieldCheck, Ruler } from 'lucide-react';
import { CASE_STUDIES_DATA } from '../data/mockData';

interface CaseStudiesPageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-blueprint-grid border-b-4 border-[#374151] py-16 px-6 sm:px-12 bg-[#1F2937]/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">
            <span className="w-2.5 h-2.5 bg-[#FBBF24] inline-block"></span>
            20 TECHNICAL ENGINEERING PRESENTATIONS
          </div>
          <h1 className="font-industrial text-5xl sm:text-7xl font-black text-[#FFFFFF] uppercase tracking-tight">
            ENGINEERING <span className="text-[#FBBF24]">CASE STUDIES</span>
          </h1>
          <p className="font-mono-cad text-xs sm:text-sm text-[#9CA3AF] max-w-2xl">
            In-depth structural calculations, finite element thermal models, and field execution breakdowns from Titan Build Group's engineering division.
          </p>
        </div>
      </div>

      {/* Case Studies List */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 space-y-12">
        {CASE_STUDIES_DATA.map((cs) => (
          <div 
            key={cs.id}
            className="bg-[#1F2937] border-2 border-[#374151] hover:border-[#FBBF24] p-8 space-y-6 transition-all shadow-2xl flex flex-col lg:flex-row gap-8 items-stretch"
          >
            {/* Image */}
            <div className="w-full lg:w-1/3 h-64 lg:h-auto bg-[#111111] overflow-hidden border border-[#374151] relative shrink-0">
              <img src={cs.heroImage} alt={cs.title} className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 bg-[#111111]/90 border border-[#FBBF24] px-2 py-0.5 font-mono-cad text-[10px] text-[#FBBF24] font-bold">
                {cs.code}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono-cad text-xs text-[#9CA3AF] border-b border-[#374151] pb-2">
                  <span className="text-[#FBBF24] font-bold uppercase">{cs.sector}</span>
                  <span>PUBLISHED: {cs.date}</span>
                </div>

                <h2 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase mt-2">{cs.title}</h2>
                <p className="font-mono-cad text-xs text-[#9CA3AF] mt-2 leading-relaxed">{cs.summary}</p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#111111] p-3 border border-[#374151] font-mono-cad text-xs">
                {cs.metrics.map((m, idx) => (
                  <div key={idx}>
                    <span className="text-[#9CA3AF] text-[9px] block uppercase">{m.label}</span>
                    <span className="text-[#FBBF24] font-bold">{m.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('request-proposal')}
                  className="bg-[#FBBF24] hover:bg-[#FFFFFF] text-[#111111] font-industrial text-lg font-black px-6 py-2.5 uppercase transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>REQUEST FULL PDF WHITEPAPER</span>
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </button>
                <span className="font-mono-cad text-xs text-[#6B7280]">CLIENT: {cs.client}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
