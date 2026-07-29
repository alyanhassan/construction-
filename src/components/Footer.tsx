import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, ShieldCheck, HardHat, Building2, Terminal, AlertTriangle } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#0F172A] text-slate-100 border-t border-slate-800 pt-0 select-none">
      
      {/* HEAVY HAZARD PROPOSAL CALLOUT BANNER */}
      <div className="bg-hazard-stripes text-slate-950 py-8 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0F172A] p-6 sm:p-8 rounded-2xl border-2 border-[#FBBF24] shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="bento-badge">
              CAPEX & PROJECT INQUIRIES
            </span>
            <h2 className="font-industrial text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              READY TO BUILD MAJOR INFRASTRUCTURE?
            </h2>
            <p className="font-mono-cad text-xs sm:text-sm text-slate-400 max-w-2xl">
              Partner with Titan Build Group for unified Design-Build, heavy civil engineering, and zero-compromise safety compliance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <button
              onClick={() => onNavigate('request-proposal')}
              className="w-full sm:w-auto bg-[#FBBF24] hover:bg-white text-slate-950 font-industrial text-xl font-black px-8 py-4 uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-xl flex items-center justify-center gap-2"
            >
              <span>REQUEST PROPOSAL</span>
              <ArrowUpRight className="w-6 h-6 stroke-[3]" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-mono-cad text-xs font-bold px-6 py-4 rounded-xl border border-slate-700/60 uppercase transition-colors cursor-pointer"
            >
              DISPATCH CONTACT
            </button>
          </div>
        </div>
      </div>

      {/* MAIN OPERATIONS CENTER FOOTER BODY */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        
        {/* Operations Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FBBF24] text-slate-950 flex items-center justify-center font-industrial text-3xl font-black rounded-xl">
              T
            </div>
            <div>
              <h3 className="font-industrial text-3xl font-black text-white">
                TITAN <span className="text-[#FBBF24]">BUILD GROUP</span>
              </h3>
              <p className="font-mono-cad text-xs text-slate-400 uppercase">
                NATIONAL CONSTRUCTION OPERATIONS & INFRASTRUCTURE MATRIX
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono-cad text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              ALL 87 SITES OPERATIONAL
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hidden sm:inline">OSHA VPP STAR CERTIFIED</span>
          </div>
        </div>

        {/* 4-Column Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          
          {/* Column 1: Regional Office Locations */}
          <div className="space-y-4">
            <h4 className="font-industrial text-xl font-bold text-[#FBBF24] uppercase tracking-wide border-b border-slate-800 pb-2">
              REGIONAL OPERATIONS
            </h4>
            <ul className="space-y-3 font-mono-cad text-xs text-slate-200">
              <li className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
                <span className="text-[#FBBF24] font-bold block">NATIONAL HQ — HOUSTON, TX</span>
                <span className="text-slate-400 text-[11px]">800 Energy Corridor Pkwy, Suite 1200</span>
                <span className="text-slate-400 block text-[10px] mt-1">DISPATCH: (713) 555-8482</span>
              </li>
              <li className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
                <span className="text-white font-bold block">CHICAGO METRO HUB</span>
                <span className="text-slate-400 text-[11px]">200 S Wacker Drive, Chicago, IL</span>
              </li>
              <li className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
                <span className="text-white font-bold block">SEATTLE MARITIME DIVISION</span>
                <span className="text-slate-400 text-[11px]">Pier 91 Logistics Center, Seattle, WA</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Active Sectors Matrix */}
          <div className="space-y-4">
            <h4 className="font-industrial text-xl font-bold text-[#FBBF24] uppercase tracking-wide border-b border-slate-800 pb-2">
              ACTIVE SECTORS
            </h4>
            <div className="grid grid-cols-1 gap-2 font-industrial text-lg text-slate-200">
              {[
                { name: 'Commercial High-Rise', view: 'projects', filter: 'Commercial' },
                { name: 'Heavy Infrastructure & Bridges', view: 'projects', filter: 'Infrastructure' },
                { name: 'Industrial & Energy Refineries', view: 'projects', filter: 'Industrial' },
                { name: 'Hyperscale Data Centers', view: 'projects', filter: 'Data Centers' },
                { name: 'Healthcare Surgical Towers', view: 'projects', filter: 'Healthcare' },
                { name: 'Aviation Airfield Logistics', view: 'projects', filter: 'Aviation & Logistics' },
              ].map((sector, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate(sector.view, sector.filter)}
                  className="flex items-center justify-between text-left hover:text-[#FBBF24] hover:pl-2 transition-all cursor-pointer border-b border-slate-800 pb-1"
                >
                  <span>{sector.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-600" />
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Telemetry & Safety Metrics */}
          <div className="space-y-4">
            <h4 className="font-industrial text-xl font-bold text-[#FBBF24] uppercase tracking-wide border-b border-slate-800 pb-2">
              OPERATIONAL TELEMETRY
            </h4>
            <div className="space-y-2 font-mono-cad text-xs">
              <div className="flex justify-between p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
                <span className="text-slate-400">TOTAL EXPERIENCE:</span>
                <span className="text-[#FBBF24] font-bold">50+ YEARS</span>
              </div>
              <div className="flex justify-between p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
                <span className="text-slate-400">PROJECTS DELIVERED:</span>
                <span className="text-white font-bold">500+ MAJOR</span>
              </div>
              <div className="flex justify-between p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
                <span className="text-slate-400">SQUARE FEET BUILT:</span>
                <span className="text-white font-bold">25.0M+ SQ FT</span>
              </div>
              <div className="flex justify-between p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
                <span className="text-slate-400">SAFETY COMPLIANCE:</span>
                <span className="text-[#FBBF24] font-bold">99% OSHA VPP</span>
              </div>
              <div className="flex justify-between p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
                <span className="text-slate-400">EMR RATING:</span>
                <span className="text-white font-bold">0.54 SUPERIOR</span>
              </div>
              <div className="flex justify-between p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
                <span className="text-slate-400">BONDING CAPACITY:</span>
                <span className="text-[#FBBF24] font-bold">$4.0 BILLION</span>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Navigation & Dispatch */}
          <div className="space-y-4">
            <h4 className="font-industrial text-xl font-bold text-[#FBBF24] uppercase tracking-wide border-b border-slate-800 pb-2">
              QUICK DISPATCH
            </h4>
            <ul className="space-y-2 font-industrial text-lg text-slate-200">
              {[
                { label: 'View 60 Projects', view: 'projects' },
                { label: '15 Engineering Services', view: 'services' },
                { label: '20 Technical Case Studies', view: 'case-studies' },
                { label: 'Equipment Fleet Specs', view: 'equipment' },
                { label: 'Safety & EMR Dashboard', view: 'safety' },
                { label: 'Careers & Job Openings', view: 'careers' },
                { label: 'Submit Technical Proposal', view: 'request-proposal' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(item.view)}
                    className="flex items-center gap-2 hover:text-[#FBBF24] transition-colors cursor-pointer"
                  >
                    <span className="text-[#FBBF24] font-mono-cad text-xs">»</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM ARCHITECTURAL CAD FOOTER */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 font-mono-cad text-xs text-slate-400">
          <div>
            <span>© 2026 TITAN BUILD GROUP. ALL RIGHTS RESERVED. FRONTEND OPERATIONS DEMO.</span>
          </div>
          <div className="flex items-center gap-6">
            <span>BIM LOD 500</span>
            <span>OSHA COMPLIANT</span>
            <span>ISO 45001 CERTIFIED</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
