import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, HardHat, Building2, Ruler, Award, CheckCircle2, ChevronRight, Zap, Flame, Compass } from 'lucide-react';
import { PROJECTS_DATA, SERVICES_DATA, EQUIPMENT_DATA, IMAGES } from '../data/mockData';

interface HomePageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Select top 4 showcase projects for horizontal case-study-style previews
  const featuredProjects = PROJECTS_DATA.slice(0, 4);

  return (
    <div className="w-full bg-[#0F172A] text-slate-100 select-none">
      
      {/* 1. SPLIT-SCREEN OPENING / BENTO HERO */}
      <section className="relative w-full min-h-[calc(100vh-5rem)] border-b border-slate-800 flex flex-col lg:flex-row items-stretch bg-blueprint-grid">
        
        {/* LEFT SPLIT: Massive Typography, Statistics & Achievements */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 bg-[#0F172A]/95 relative overflow-hidden">
          
          {/* Subtle Background Hazard Accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-hazard-stripes"></div>

          {/* Top Label Pill */}
          <div className="space-y-4 pt-4">
            <div className="bento-badge">
              <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse mr-2"></span>
              NATIONAL HEAVY CIVIL & INDUSTRIAL CONTRACTOR
            </div>

            {/* Massive Industrial Headline */}
            <h1 className="font-industrial text-5xl sm:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight uppercase">
              BUILDING <br />
              <span className="text-[#FBBF24]">TOMORROW</span> <br />
              WITH PRECISION
            </h1>

            <p className="font-mono-cad text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed mt-4">
              Titan Build Group executes landmark commercial skyscrapers, subterranean transit corridors, deepwater ports, and industrial energy plants with unyielding engineering accuracy.
            </p>
          </div>

          {/* Bento Grid 4 Key Statistics Display */}
          <div className="my-10 grid grid-cols-2 gap-4 font-mono-cad">
            <div className="bg-slate-800/90 rounded-2xl p-5 border border-slate-700/60 hover:border-[#FBBF24]/50 transition-all shadow-md">
              <span className="font-industrial text-4xl sm:text-5xl font-black text-[#FBBF24] block leading-none">
                50+
              </span>
              <span className="text-xs text-slate-200 font-bold uppercase mt-2 block">
                YEARS EXPERIENCE
              </span>
              <span className="text-[10px] text-slate-400">ESTABLISHED 1976</span>
            </div>

            <div className="bg-slate-800/90 rounded-2xl p-5 border border-slate-700/60 hover:border-sky-400/50 transition-all shadow-md">
              <span className="font-industrial text-4xl sm:text-5xl font-black text-sky-400 block leading-none">
                500+
              </span>
              <span className="text-xs text-slate-200 font-bold uppercase mt-2 block">
                PROJECTS DELIVERED
              </span>
              <span className="text-[10px] text-slate-400">$10M TO $1.5B RANGE</span>
            </div>

            <div className="bg-slate-800/90 rounded-2xl p-5 border border-slate-700/60 hover:border-emerald-400/50 transition-all shadow-md">
              <span className="font-industrial text-4xl sm:text-5xl font-black text-emerald-400 block leading-none">
                25M+
              </span>
              <span className="text-xs text-slate-200 font-bold uppercase mt-2 block">
                SQ FT BUILT
              </span>
              <span className="text-[10px] text-slate-400">COMMERCIAL & INDUSTRIAL</span>
            </div>

            <div className="bg-slate-800/90 rounded-2xl p-5 border border-slate-700/60 hover:border-indigo-400/50 transition-all shadow-md">
              <span className="font-industrial text-4xl sm:text-5xl font-black text-indigo-400 block leading-none">
                99%
              </span>
              <span className="text-xs text-slate-200 font-bold uppercase mt-2 block">
                SAFETY COMPLIANCE
              </span>
              <span className="text-[10px] text-slate-400">0.54 EMR RATING</span>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pb-4">
            <button
              onClick={() => onNavigate('projects')}
              className="bg-[#FBBF24] hover:bg-white text-slate-950 font-industrial text-xl font-black px-8 py-4 uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xl flex items-center justify-center gap-2"
            >
              <span>EXPLORE 60 MEGA PROJECTS</span>
              <ArrowUpRight className="w-6 h-6 stroke-[3]" />
            </button>

            <button
              onClick={() => onNavigate('request-proposal')}
              className="bg-slate-800 hover:bg-slate-700 text-white font-mono-cad text-xs font-bold px-6 py-4 rounded-xl border border-slate-700/60 uppercase transition-colors cursor-pointer text-center"
            >
              REQUEST PROPOSAL
            </button>
          </div>

        </div>

        {/* RIGHT SPLIT: Hero Visual Bento Showcase */}
        <div className="w-full lg:w-1/2 relative bg-slate-800/50 min-h-[500px] flex flex-col justify-end p-8 sm:p-12 overflow-hidden">
          
          {/* Background Hero Image */}
          <img 
            src={IMAGES.skyscraper} 
            alt="Titan Build Group Mega Project" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105 hover:scale-100 transition-transform duration-1000"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent"></div>

          {/* CAD Grid Lines Overlay */}
          <div className="absolute inset-0 bg-blueprint-grid-dense pointer-events-none opacity-40"></div>

          {/* Overlay Bento Project Card Preview */}
          <div className="relative z-10 bg-slate-900/95 rounded-2xl border-2 border-[#FBBF24] p-6 sm:p-8 space-y-4 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
              <span className="bento-badge">
                FEATURED FLAGSHIP
              </span>
              <span className="font-mono-cad text-xs text-slate-400">DWG #PRJ-9001</span>
            </div>

            <h2 className="font-industrial text-3xl sm:text-4xl font-black text-white uppercase">
              APEX FINANCIAL TOWER & SKYDECK
            </h2>

            <div className="grid grid-cols-3 gap-2 font-mono-cad text-xs border-y border-slate-700/60 py-3 text-slate-400">
              <div>
                <span className="block text-[10px]">HEIGHT</span>
                <span className="text-slate-200 font-bold">1,150 FT</span>
              </div>
              <div>
                <span className="block text-[10px]">STEEL POURED</span>
                <span className="text-slate-200 font-bold">28,500 TONS</span>
              </div>
              <div>
                <span className="block text-[10px]">STATUS</span>
                <span className="text-[#FBBF24] font-bold">COMPLETED</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('project-details', 'project-9001')}
              className="w-full bg-slate-800 hover:bg-[#FBBF24] hover:text-slate-950 text-[#FBBF24] font-mono-cad text-xs font-bold py-3 uppercase transition-colors rounded-xl border border-[#FBBF24]/50 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>INSPECT COMPLETE PROJECT SPECS</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </section>

      {/* 2. BENTO GRID PROJECT SHOWCASE */}
      <section className="w-full py-20 px-6 sm:px-12 bg-[#0F172A] border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
            <div>
              <span className="bento-badge mb-2">
                01 // CASE STUDY PREVIEWS
              </span>
              <h2 className="font-industrial text-4xl sm:text-6xl font-black text-white uppercase mt-2">
                FEATURED INFRASTRUCTURE <span className="text-[#FBBF24]">PORTFOLIO</span>
              </h2>
            </div>
            
            <button
              onClick={() => onNavigate('projects')}
              className="bg-slate-800 hover:bg-[#FBBF24] hover:text-slate-950 text-white font-mono-cad text-xs font-bold px-6 py-3 rounded-xl border border-slate-700/60 transition-colors cursor-pointer uppercase flex items-center gap-2 self-start md:self-auto"
            >
              <span>VIEW ALL 60 PROJECTS</span>
              <ArrowUpRight className="w-4 h-4 text-[#FBBF24]" />
            </button>
          </div>

          {/* BENTO GRID OF FEATURED PROJECTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, idx) => {
              // Create bento span variations: first card spans 2 cols & 2 rows for featured impact
              const isLarge = idx === 0;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-slate-800/90 rounded-2xl border border-slate-700/60 hover:border-[#FBBF24]/60 transition-all flex flex-col justify-between overflow-hidden group shadow-lg ${
                    isLarge ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                  }`}
                >
                  {/* Image Container */}
                  <div className={`relative w-full overflow-hidden bg-slate-900 ${isLarge ? 'h-64 sm:h-80' : 'h-48'}`}>
                    <img 
                      src={project.heroImage} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                    />
                    <div className="absolute top-3 left-3 bento-badge bg-slate-900/80 text-[#FBBF24] border-[#FBBF24]/40">
                      {project.code}
                    </div>
                    <div className="absolute bottom-3 right-3 bento-badge-sky bg-slate-900/80">
                      {project.location}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between font-mono-cad text-xs mb-2">
                        <span className="text-[#FBBF24] font-bold uppercase">{project.category}</span>
                        <span className="bento-badge-emerald">{project.status}</span>
                      </div>
                      <h3 className={`font-industrial font-black text-white uppercase group-hover:text-[#FBBF24] transition-colors ${
                        isLarge ? 'text-3xl sm:text-4xl' : 'text-2xl'
                      }`}>
                        {project.title}
                      </h3>
                      <p className="font-mono-cad text-xs text-slate-400 mt-2 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Metrics Footer */}
                    <div className="space-y-3 pt-3 border-t border-slate-700/60 font-mono-cad text-xs">
                      <div className="grid grid-cols-2 gap-2 text-slate-400 text-[11px]">
                        <div>
                          <span>BUDGET: </span>
                          <span className="text-white font-bold">{project.budgetRange}</span>
                        </div>
                        <div>
                          <span>SQ FT: </span>
                          <span className="text-white font-bold">{project.squareFeet}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => onNavigate('project-details', project.id)}
                        className="w-full bg-slate-900 hover:bg-[#FBBF24] hover:text-slate-950 text-[#FBBF24] font-industrial text-base font-bold py-2.5 rounded-xl uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 border border-slate-700/60"
                      >
                        <span>INSPECT CASE STUDY</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. BENTO SERVICES OVERVIEW GRID */}
      <section className="w-full py-20 px-6 sm:px-12 bg-[#0F172A] border-b border-slate-800 bg-blueprint-grid">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
            <div>
              <span className="bento-badge-indigo mb-2">
                02 // CAPABILITIES & DIVISIONS
              </span>
              <h2 className="font-industrial text-4xl sm:text-6xl font-black text-white uppercase mt-2">
                ENGINEERING <span className="text-[#FBBF24]">SERVICES</span>
              </h2>
            </div>
            
            <button
              onClick={() => onNavigate('services')}
              className="bg-slate-800 hover:bg-[#FBBF24] hover:text-slate-950 text-white font-mono-cad text-xs font-bold px-6 py-3 rounded-xl border border-slate-700/60 transition-colors cursor-pointer uppercase flex items-center gap-2"
            >
              <span>EXPLORE ALL 15 SERVICES</span>
              <ArrowUpRight className="w-4 h-4 text-[#FBBF24]" />
            </button>
          </div>

          {/* BENTO CARD GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service) => {
              return (
                <div 
                  key={service.id}
                  onClick={() => onNavigate('service-details', service.id)}
                  className="bg-slate-800/90 rounded-2xl border border-slate-700/60 hover:border-indigo-500/50 p-8 flex flex-col justify-between space-y-6 transition-all hover:-translate-y-1 cursor-pointer group shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-700/60 pb-4">
                      <span className="bento-badge-indigo">{service.code}</span>
                      <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                    </div>
                    <h3 className="font-industrial text-2xl font-black text-white uppercase group-hover:text-[#FBBF24] transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-mono-cad text-xs text-slate-400 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-slate-700/60 font-mono-cad text-[11px] text-slate-300">
                    {service.keyCapabilities.slice(0, 2).map((cap, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]"></span>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. BENTO WORKFLOW PREVIEW */}
      <section className="w-full py-20 px-6 sm:px-12 bg-[#0F172A] border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="bento-badge">
              03 // PRECISION DISCIPLINE
            </span>
            <h2 className="font-industrial text-4xl sm:text-6xl font-black text-white uppercase">
              THE 6-PHASE <span className="text-[#FBBF24]">TITAN WORKFLOW</span>
            </h2>
            <p className="font-mono-cad text-xs text-slate-400">
              Every project adheres to rigid quality control gates, BIM 5D spatial modeling, and continuous geotechnical inspection.
            </p>
          </div>

          {/* BENTO GRID PROCESS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 font-mono-cad text-xs">
            {[
              { step: '01', title: 'PLANNING', desc: 'Geotechnical surveys & site civil mapping' },
              { step: '02', title: 'DESIGN', desc: 'LOD 500 BIM clash detection modeling' },
              { step: '03', title: 'ENGINEERING', desc: 'Structural calculations & steel mill staging' },
              { step: '04', title: 'CONSTRUCTION', desc: 'Self-perform concrete pours & crane lifts' },
              { step: '05', title: 'INSPECTION', desc: 'Laser deflection & ultrasonic weld testing' },
              { step: '06', title: 'DELIVERY', desc: 'Commissioning & total occupancy handover' },
            ].map((phase, idx) => (
              <div key={idx} className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/60 hover:border-[#FBBF24]/50 space-y-3 shadow-md transition-all">
                <span className="font-industrial text-3xl font-black text-[#FBBF24] block">{phase.step}</span>
                <span className="text-white font-bold block uppercase">{phase.title}</span>
                <p className="text-slate-400 text-[11px]">{phase.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('process')}
              className="bg-slate-800 hover:bg-[#FBBF24] hover:text-slate-950 text-white font-mono-cad text-xs font-bold px-8 py-3.5 rounded-xl border border-[#FBBF24]/50 transition-colors cursor-pointer uppercase"
            >
              EXPLORE INTERACTIVE PROCESS TIMELINE
            </button>
          </div>

        </div>
      </section>

      {/* 5. BENTO HEAVY EQUIPMENT FLEET SPOTLIGHT */}
      <section className="w-full py-20 px-6 sm:px-12 bg-[#0F172A] border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
            <div>
              <span className="bento-badge-sky mb-2">
                04 // HEAVY MACHINERY & CRANES
              </span>
              <h2 className="font-industrial text-4xl sm:text-6xl font-black text-white uppercase mt-2">
                FLEET & <span className="text-[#FBBF24]">EQUIPMENT SHOWCASE</span>
              </h2>
            </div>
            
            <button
              onClick={() => onNavigate('equipment')}
              className="bg-slate-800 hover:bg-[#FBBF24] hover:text-slate-950 text-white font-mono-cad text-xs font-bold px-6 py-3 rounded-xl border border-slate-700/60 transition-colors cursor-pointer uppercase flex items-center gap-2"
            >
              <span>INSPECT COMPLETE FLEET</span>
              <ArrowUpRight className="w-4 h-4 text-[#FBBF24]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EQUIPMENT_DATA.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-slate-800/90 rounded-2xl border border-slate-700/60 hover:border-sky-400/50 p-6 space-y-4 shadow-lg transition-all">
                <div className="h-48 rounded-xl overflow-hidden bg-slate-900 border border-slate-700/60">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="bento-badge-sky mb-1">{item.code}</span>
                  <h3 className="font-industrial text-2xl font-black text-white uppercase mt-1">{item.name}</h3>
                </div>
                <div className="bg-slate-900/90 rounded-xl p-3 font-mono-cad text-xs space-y-1">
                  <div className="flex justify-between text-slate-400">
                    <span>CAPACITY:</span>
                    <span className="text-white font-bold">{item.capacity}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>STATUS:</span>
                    <span className="text-[#FBBF24] font-bold">{item.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
