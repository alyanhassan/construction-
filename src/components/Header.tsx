import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Menu, 
  X, 
  ArrowUpRight, 
  Phone, 
  Search, 
  Ruler, 
  HardHat, 
  Briefcase, 
  ShieldCheck, 
  Wrench, 
  FileText, 
  Newspaper, 
  Users, 
  HelpCircle,
  AlertTriangle
} from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, param?: string) => void;
  cadModeActive: boolean;
  onToggleCadMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentView, 
  onNavigate,
  cadModeActive,
  onToggleCadMode
}) => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavClick = (view: string, param?: string) => {
    onNavigate(view, param);
    setPanelOpen(false);
  };

  const navLinks = [
    { id: 'home', label: '01 // Home', icon: Building2 },
    { id: 'projects', label: '02 // Projects (60)', icon: HardHat },
    { id: 'services', label: '03 // Services (15)', icon: Wrench },
    { id: 'case-studies', label: '04 // Case Studies (20)', icon: FileText },
    { id: 'industries', label: '05 // Industries (12)', icon: Briefcase },
    { id: 'equipment', label: '06 // Equipment Fleet', icon: HardHat },
    { id: 'safety', label: '07 // Safety & EMR', icon: ShieldCheck },
    { id: 'process', label: '08 // Process Workflow', icon: Ruler },
    { id: 'team', label: '09 // Team (50)', icon: Users },
    { id: 'careers', label: '10 // Careers & Jobs', icon: Briefcase },
    { id: 'news', label: '11 // News & Whitepapers', icon: Newspaper },
    { id: 'faq', label: '12 // Technical FAQ', icon: HelpCircle },
    { id: 'contact', label: '13 // Contact Hub', icon: Phone },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#0F172A] border-b border-slate-800 select-none">
        {/* Top CAD Status Bar */}
        <div className="hidden lg:flex items-center justify-between px-6 py-1.5 bg-slate-800/80 text-[11px] font-mono-cad text-slate-400 border-b border-slate-700/60">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#FBBF24]">
              <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-ping"></span>
              OPS MATRIX ACTIVE
            </span>
            <span>NATIONAL HEADQUARTERS: HOUSTON, TX</span>
            <span>DISPATCH PHONE: 1-800-555-TITAN</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onToggleCadMode}
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] uppercase font-bold transition-colors cursor-pointer ${
                cadModeActive 
                  ? 'bg-[#FBBF24] text-slate-950 border-[#FBBF24]' 
                  : 'bg-slate-900 text-slate-200 border-slate-700 hover:border-[#FBBF24]'
              }`}
            >
              <Ruler className="w-3 h-3" />
              {cadModeActive ? 'CAD OVERLAY: ON' : 'ENABLE CAD CROSSHAIRS'}
            </button>
            <span className="text-slate-500">LOD 500 SPEC</span>
          </div>
        </div>

        {/* Main Header Container */}
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
          
          {/* LEFT: Large Bold Industrial Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 bg-[#FBBF24] text-slate-950 flex items-center justify-center font-industrial font-black text-2xl rounded-xl border border-slate-700 group-hover:bg-white transition-colors shadow-md">
              T
            </div>
            <div className="flex flex-col">
              <span className="font-industrial text-2xl sm:text-3xl font-black text-white tracking-wider leading-none group-hover:text-[#FBBF24] transition-colors">
                TITAN <span className="text-[#FBBF24] group-hover:text-white">BUILD GROUP</span>
              </span>
              <span className="font-mono-cad text-[9px] text-slate-400 tracking-widest uppercase mt-0.5">
                BUILDING TOMORROW WITH PRECISION
              </span>
            </div>
          </div>

          {/* CENTER: Live Company Metrics Ticker */}
          <div className="hidden md:flex flex-1 max-w-xl xl:max-w-2xl mx-8 overflow-hidden bg-slate-800/80 rounded-xl border border-slate-700/60 py-2 px-3 relative">
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-slate-800 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-slate-800 to-transparent z-10 pointer-events-none"></div>

            <div className="animate-marquee font-mono-cad text-xs whitespace-nowrap text-slate-200 flex items-center gap-8">
              <span className="flex items-center gap-2">
                <span className="text-[#FBBF24] font-bold">ACTIVE CRANES:</span> 42 TOWERS
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-2">
                <span className="text-[#FBBF24] font-bold">ACTIVE SITES:</span> 87 NATIONWIDE
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-2">
                <span className="text-[#FBBF24] font-bold">SAFETY STREAK:</span> 1,420 DAYS NO LTI
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-2">
                <span className="text-[#FBBF24] font-bold">STEEL POURED:</span> 840,000 TONS
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-2">
                <span className="text-[#FBBF24] font-bold">SQ FT UNDERWAY:</span> 28.4M SQ FT
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-2">
                <span className="text-[#FBBF24] font-bold">EMR RATING:</span> 0.54 (OSHA VPP)
              </span>
              {/* Duplicate for seamless infinite loop */}
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-2">
                <span className="text-[#FBBF24] font-bold">ACTIVE CRANES:</span> 42 TOWERS
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-2">
                <span className="text-[#FBBF24] font-bold">ACTIVE SITES:</span> 87 NATIONWIDE
              </span>
            </div>
          </div>

          {/* RIGHT: Request Proposal + Expandable Technical Panel Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Request Proposal Button */}
            <button
              onClick={() => handleNavClick('request-proposal')}
              className="hidden sm:flex items-center gap-2 bg-[#FBBF24] hover:bg-white text-slate-950 font-industrial text-lg font-black px-5 py-2.5 rounded-xl uppercase tracking-wider border border-[#FBBF24] transition-all cursor-pointer shadow-lg active:translate-y-0.5"
            >
              <span>REQUEST PROPOSAL</span>
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Navigation Panel Toggle */}
            <button
              onClick={() => setPanelOpen(!panelOpen)}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-mono-cad text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-700/60 hover:border-[#FBBF24] transition-all cursor-pointer uppercase"
              aria-label="Toggle navigation panel"
            >
              {panelOpen ? (
                <>
                  <X className="w-5 h-5 text-[#FBBF24]" />
                  <span className="hidden sm:inline">CLOSE</span>
                </>
              ) : (
                <>
                  <Menu className="w-5 h-5 text-[#FBBF24]" />
                  <span>PANEL</span>
                </>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* EXPANDABLE NAVIGATION PANEL */}
      <AnimatePresence>
        {panelOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-20 z-50 bg-[#111111] border-b-4 border-[#FBBF24] shadow-2xl overflow-y-auto max-h-[calc(100vh-5rem)] bg-blueprint-grid"
          >
            <div className="max-w-7xl mx-auto p-6 sm:p-10">
              
              {/* Panel Top Info & Quick Search */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-8 border-b border-[#374151]">
                <div>
                  <h2 className="font-industrial text-3xl sm:text-4xl font-black text-[#FFFFFF]">
                    TITAN <span className="text-[#FBBF24]">COMMAND CENTER</span>
                  </h2>
                  <p className="font-mono-cad text-xs text-[#9CA3AF] uppercase mt-1">
                    SELECT SYSTEM MODULE OR ENTER PARAMETERS BELOW
                  </p>
                </div>

                {/* Quick Search Input */}
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-[#FBBF24]" />
                  <input 
                    type="text" 
                    placeholder="Search 60 projects, services, specs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && searchQuery.trim()) {
                        handleNavClick('projects', searchQuery);
                      }
                    }}
                    className="w-full bg-[#1F2937] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] font-mono-cad text-xs pl-10 pr-4 py-2.5 outline-none transition-colors"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => handleNavClick('projects', searchQuery)}
                      className="absolute right-2 top-2 bg-[#FBBF24] text-[#111111] px-2 py-0.5 font-mono-cad text-[10px] font-bold"
                    >
                      GO
                    </button>
                  )}
                </div>
              </div>

              {/* Nav Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = currentView === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`flex items-center justify-between p-4 border text-left transition-all cursor-pointer group ${
                        isActive
                          ? 'bg-[#FBBF24] text-[#111111] border-[#FBBF24] font-bold'
                          : 'bg-[#1F2937]/70 hover:bg-[#1F2937] text-[#E5E7EB] border-[#374151] hover:border-[#FBBF24]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${isActive ? 'text-[#111111]' : 'text-[#FBBF24] group-hover:scale-110'} transition-transform`} />
                        <span className="font-industrial text-xl font-bold tracking-wide uppercase">
                          {link.label}
                        </span>
                      </div>
                      <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-[#111111]' : 'text-[#6B7280] group-hover:text-[#FBBF24]'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Bottom Quick Callouts in Panel */}
              <div className="pt-6 border-t border-[#374151] grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-cad text-xs">
                
                {/* Proposal Callout */}
                <div className="bg-[#1F2937] p-4 border-l-4 border-[#FBBF24]">
                  <span className="text-[#FBBF24] font-bold uppercase block">NEED A CAPEX ESTIMATE?</span>
                  <p className="text-[#9CA3AF] text-[11px] mt-1">Submit technical scope, drawings & site location for a fast engineering proposal response.</p>
                  <button 
                    onClick={() => handleNavClick('request-proposal')}
                    className="mt-3 text-[#FBBF24] hover:underline font-bold flex items-center gap-1"
                  >
                    SUBMIT PROPOSAL REQUEST →
                  </button>
                </div>

                {/* Dispatch Callout */}
                <div className="bg-[#1F2937] p-4 border-l-4 border-[#6B7280]">
                  <span className="text-[#E5E7EB] font-bold uppercase block">24/7 DISPATCH HOTLINE</span>
                  <p className="text-[#9CA3AF] text-[11px] mt-1">Direct line to site operations command & heavy fleet logistics.</p>
                  <a href="tel:18005558482" className="mt-3 text-[#FFFFFF] font-bold flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#FBBF24]" />
                    1-800-555-TITAN (8482)
                  </a>
                </div>

                {/* CAD Overlay Toggle inside menu */}
                <div className="bg-[#1F2937] p-4 border-l-4 border-[#FBBF24] flex flex-col justify-between">
                  <div>
                    <span className="text-[#FBBF24] font-bold uppercase block">TECHNICAL CAD MODE</span>
                    <p className="text-[#9CA3AF] text-[11px] mt-1">Toggle CAD crosshairs & measurement rulers across site pages.</p>
                  </div>
                  <button 
                    onClick={onToggleCadMode}
                    className="mt-3 bg-[#111111] hover:bg-[#FBBF24] hover:text-[#111111] text-[#FBBF24] border border-[#FBBF24] px-3 py-1 font-mono-cad text-xs font-bold transition-colors uppercase self-start cursor-pointer"
                  >
                    {cadModeActive ? 'CAD OVERLAY ACTIVE [DISABLE]' : 'ENABLE CAD OVERLAY'}
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
