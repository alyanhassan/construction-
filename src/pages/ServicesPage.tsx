import React from 'react';
import { ArrowUpRight, Wrench, Building2, Landmark, Factory, Cpu, Activity, Plane, Zap, Hammer, Briefcase, Box, Compass, Layers, Anchor } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';

interface ServicesPageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-screen pb-20">
      
      {/* Page Header */}
      <div className="bg-blueprint-grid border-b-4 border-[#374151] py-16 px-6 sm:px-12 bg-[#1F2937]/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">
            <span className="w-2.5 h-2.5 bg-[#FBBF24] inline-block"></span>
            15 SPECIALIZED DIVISIONS // INDUSTRIAL CAPABILITIES
          </div>
          <h1 className="font-industrial text-5xl sm:text-7xl font-black text-[#FFFFFF] uppercase tracking-tight">
            ENGINEERING & <span className="text-[#FBBF24]">SERVICES</span>
          </h1>
          <p className="font-mono-cad text-xs sm:text-sm text-[#9CA3AF] max-w-2xl">
            Titan Build Group self-performs core structural civil, heavy steel erection, deep foundation caissons, and mission-critical MEP integration across 15 specialized divisions.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => onNavigate('service-details', service.id)}
              className="bg-[#1F2937] border-2 border-[#374151] hover:border-[#FBBF24] p-8 flex flex-col justify-between space-y-6 transition-all hover:-translate-y-1 cursor-pointer group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#374151] pb-4 font-mono-cad text-xs">
                  <span className="text-[#FBBF24] font-bold">{service.code}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#6B7280] group-hover:text-[#FBBF24] transition-colors" />
                </div>

                <h3 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase group-hover:text-[#FBBF24] transition-colors">
                  {service.title}
                </h3>

                <p className="font-mono-cad text-xs text-[#9CA3AF] leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2 pt-4 border-t border-[#374151] font-mono-cad text-[11px] text-[#E5E7EB]">
                  {service.keyCapabilities.slice(0, 3).map((cap, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#FBBF24] shrink-0"></span>
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-[#111111] hover:bg-[#FBBF24] hover:text-[#111111] text-[#FBBF24] font-mono-cad text-xs font-bold py-2.5 uppercase transition-colors border border-[#FBBF24]">
                  INSPECT SERVICE METHODOLOGY →
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
