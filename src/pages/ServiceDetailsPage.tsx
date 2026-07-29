import React from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Wrench, Building2, HardHat, FileText } from 'lucide-react';
import { SERVICES_DATA, PROJECTS_DATA } from '../data/mockData';

interface ServiceDetailsPageProps {
  serviceId?: string;
  onNavigate: (view: string, param?: string) => void;
}

export const ServiceDetailsPage: React.FC<ServiceDetailsPageProps> = ({ serviceId, onNavigate }) => {
  const service = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];

  const relatedProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-screen pb-20">
      
      {/* Top Breadcrumb */}
      <div className="bg-[#1F2937] border-b border-[#374151] px-6 sm:px-12 py-4 font-mono-cad text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => onNavigate('services')}
            className="flex items-center gap-2 text-[#FBBF24] hover:underline font-bold uppercase cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO ALL 15 SERVICES
          </button>
          <span className="text-[#9CA3AF]">
            DIVISION CODE: <span className="text-[#FFFFFF] font-bold">{service.code}</span>
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-blueprint-grid border-b-4 border-[#374151] py-16 px-6 sm:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="bg-[#FBBF24] text-[#111111] px-3 py-1 font-mono-cad text-xs font-bold uppercase">
            {service.code} // FIELD DIVISION
          </span>
          <h1 className="font-industrial text-4xl sm:text-7xl font-black text-[#FFFFFF] uppercase tracking-tight">
            {service.title}
          </h1>
          <p className="font-mono-cad text-sm sm:text-base text-[#FBBF24] max-w-3xl font-bold">
            {service.tagline}
          </p>
        </div>
      </div>

      {/* Main Body Layout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 space-y-16">
        
        {/* Specs & Overview Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Full Description & Key Capabilities (2 Cols) */}
          <div className="lg:col-span-2 space-y-10">
            
            <div className="space-y-4">
              <h2 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase border-b-2 border-[#374151] pb-3">
                SERVICE <span className="text-[#FBBF24]">OVERVIEW</span>
              </h2>
              <p className="font-mono-cad text-xs sm:text-sm text-[#E5E7EB] leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Key Capabilities */}
            <div className="space-y-4">
              <h3 className="font-industrial text-2xl font-black text-[#FFFFFF] uppercase border-b border-[#374151] pb-2">
                CORE FIELD CAPABILITIES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono-cad text-xs">
                {service.keyCapabilities.map((cap, idx) => (
                  <div key={idx} className="bg-[#1F2937] p-4 border-l-4 border-[#FBBF24] flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FBBF24] shrink-0" />
                    <span className="text-[#E5E7EB] font-bold">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology Steps */}
            <div className="space-y-6">
              <h3 className="font-industrial text-2xl font-black text-[#FFFFFF] uppercase border-b border-[#374151] pb-2">
                EXECUTION METHODOLOGY
              </h3>
              <div className="space-y-4 font-mono-cad text-xs">
                {service.methodology.map((m, idx) => (
                  <div key={idx} className="bg-[#1F2937] p-6 border border-[#374151] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-industrial text-2xl font-black text-[#FBBF24]">STEP {m.step}</span>
                      <span className="text-[#FFFFFF] font-bold uppercase">{m.title}</span>
                    </div>
                    <p className="text-[#9CA3AF] text-[11px] leading-relaxed">{m.detail}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Specs Table & Proposal CTA */}
          <div className="space-y-8">
            
            {/* Engineering Specifications Card */}
            <div className="bg-[#1F2937] border-2 border-[#374151] p-6 space-y-4">
              <h3 className="font-industrial text-2xl font-black text-[#FBBF24] uppercase border-b border-[#374151] pb-3">
                DIVISION SPECIFICATIONS
              </h3>
              <div className="space-y-3 font-mono-cad text-xs">
                {service.specifications.map((s, idx) => (
                  <div key={idx} className="bg-[#111111] p-3 border border-[#374151]">
                    <span className="text-[#9CA3AF] text-[10px] block">{s.label}</span>
                    <span className="text-[#FFFFFF] font-bold text-sm block mt-0.5">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Proposal Prompt */}
            <div className="bg-[#111111] border-2 border-[#FBBF24] p-6 text-center space-y-4 font-mono-cad text-xs">
              <span className="text-[#FBBF24] font-bold block uppercase text-sm">NEED THIS DIVISION ON YOUR SITE?</span>
              <p className="text-[#9CA3AF] text-[11px]">Submit project scope for a guaranteed maximum price (GMP) proposal.</p>
              <button 
                onClick={() => onNavigate('request-proposal')}
                className="w-full bg-[#FBBF24] hover:bg-[#FFFFFF] text-[#111111] font-industrial text-xl font-black py-3 uppercase transition-colors cursor-pointer"
              >
                REQUEST DIVISION PROPOSAL
              </button>
            </div>

          </div>

        </div>

        {/* Featured Projects Executed under this service */}
        <div className="space-y-6 pt-10 border-t-2 border-[#374151]">
          <h2 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase">
            FLAGSHIP PROJECTS <span className="text-[#FBBF24]">EXECUTED</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProjects.map((p) => (
              <div 
                key={p.id}
                onClick={() => onNavigate('project-details', p.id)}
                className="bg-[#1F2937] border border-[#374151] hover:border-[#FBBF24] p-5 space-y-3 cursor-pointer group"
              >
                <img src={p.heroImage} alt={p.title} className="w-full h-40 object-cover" />
                <span className="font-mono-cad text-[10px] text-[#FBBF24] font-bold block">{p.code}</span>
                <h3 className="font-industrial text-xl font-bold text-[#FFFFFF] group-hover:text-[#FBBF24] uppercase">
                  {p.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
