import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Ruler, Calendar, DollarSign, Building2, HardHat, FileText, ChevronRight } from 'lucide-react';
import { PROJECTS_DATA, IMAGES } from '../data/mockData';
import { Project } from '../types';

interface ProjectDetailsPageProps {
  projectId?: string;
  onNavigate: (view: string, param?: string) => void;
}

export const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({ projectId, onNavigate }) => {
  const project = PROJECTS_DATA.find((p) => p.id === projectId) || PROJECTS_DATA[0];
  
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState<'overview' | 'blueprint' | 'materials' | 'timeline'>('overview');
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  const relatedProjects = PROJECTS_DATA
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-screen pb-20">
      
      {/* Top Breadcrumb Nav Bar */}
      <div className="bg-[#1F2937] border-b border-[#374151] px-6 sm:px-12 py-4 font-mono-cad text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => onNavigate('projects')}
            className="flex items-center gap-2 text-[#FBBF24] hover:underline font-bold uppercase cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO ALL 60 PROJECTS
          </button>
          <span className="text-[#9CA3AF]">
            DWG SPEC: <span className="text-[#FFFFFF] font-bold">{project.code}</span>
          </span>
        </div>
      </div>

      {/* Hero Title & Blueprint Header */}
      <div className="bg-blueprint-grid border-b-4 border-[#374151] py-12 px-6 sm:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-3 font-mono-cad text-xs">
            <span className="bg-[#FBBF24] text-[#111111] px-2.5 py-0.5 font-bold uppercase">{project.category}</span>
            <span className="bg-[#1F2937] text-[#FFFFFF] border border-[#374151] px-2.5 py-0.5 uppercase">{project.location}</span>
            <span className="text-[#10B981] font-bold uppercase">{project.status}</span>
          </div>

          <h1 className="font-industrial text-4xl sm:text-7xl font-black text-[#FFFFFF] uppercase tracking-tight">
            {project.title}
          </h1>

          <p className="font-mono-cad text-xs sm:text-sm text-[#9CA3AF] max-w-3xl">
            {project.subtitle} — Executed under contract for {project.client}.
          </p>

          {/* Prompt Required Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-6 border-t border-[#374151] font-mono-cad text-xs">
            <div className="bg-[#1F2937] p-4 border-l-4 border-[#FBBF24]">
              <span className="text-[#9CA3AF] text-[10px] block">BUDGET RANGE</span>
              <span className="text-[#FFFFFF] font-bold text-lg">{project.budgetRange}</span>
            </div>
            <div className="bg-[#1F2937] p-4 border-l-4 border-[#6B7280]">
              <span className="text-[#9CA3AF] text-[10px] block">SQUARE FEET</span>
              <span className="text-[#FFFFFF] font-bold text-lg">{project.squareFeet}</span>
            </div>
            <div className="bg-[#1F2937] p-4 border-l-4 border-[#FBBF24]">
              <span className="text-[#9CA3AF] text-[10px] block">STEEL POURED</span>
              <span className="text-[#FBBF24] font-bold text-lg">{project.steelWeightTons}</span>
            </div>
            <div className="bg-[#1F2937] p-4 border-l-4 border-[#6B7280]">
              <span className="text-[#9CA3AF] text-[10px] block">CONCRETE VOL</span>
              <span className="text-[#FFFFFF] font-bold text-lg">{project.concreteVolumeYards}</span>
            </div>
            <div className="bg-[#1F2937] p-4 border-l-4 border-[#10B981]">
              <span className="text-[#9CA3AF] text-[10px] block">COMPLETION</span>
              <span className="text-[#10B981] font-bold text-lg">{project.completionDate}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Page Layout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 space-y-16">
        
        {/* INTERACTIVE BEFORE & AFTER SLIDER & BLUEPRINT SHOWCASE */}
        <div className="bg-[#1F2937] border-2 border-[#374151] p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#374151] pb-4">
            <div>
              <span className="font-mono-cad text-xs text-[#FBBF24] font-bold uppercase block">
                VISUAL INSPECTION // COMPARISON SLIDER
              </span>
              <h2 className="font-industrial text-2xl sm:text-3xl font-black text-[#FFFFFF] uppercase">
                BEFORE SITE EXCAVATION VS AS-BUILT SUPERSTRUCTURE
              </h2>
            </div>

            <div className="flex items-center gap-2 font-mono-cad text-xs">
              <span className="text-[#9CA3AF]">SLIDE CURSOR TO INSPECT DEPLOYMENT</span>
            </div>
          </div>

          {/* Interactive Comparison Slider */}
          <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden select-none border-2 border-[#111111]">
            
            {/* After Image (Full width background) */}
            <img 
              src={project.afterImage || project.heroImage} 
              alt="Completed Infrastructure" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-[#10B981] text-[#111111] font-mono-cad text-xs font-black px-3 py-1 uppercase shadow-lg">
              AS-BUILT STRUCTURAL HANDOVER
            </div>

            {/* Before Image (Clipped by slider position) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={project.beforeImage || IMAGES.excavator} 
                alt="Before Construction Site" 
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%' }}
              />
              <div className="absolute top-4 left-4 bg-[#FBBF24] text-[#111111] font-mono-cad text-xs font-black px-3 py-1 uppercase shadow-lg">
                SITE CLEARANCE & CAISSON PHASE
              </div>
            </div>

            {/* Vertical Splitter Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-[#FBBF24] cursor-ew-resize z-20 shadow-[0_0_12px_#FBBF24]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FBBF24] text-[#111111] font-bold flex items-center justify-center font-mono-cad text-xs shadow-2xl">
                ↔
              </div>
            </div>

            {/* Invisible Range Input Control */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPosition} 
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>
        </div>

        {/* PROJECT OVERVIEW & TABBED CAD NAVIGATION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Deep Overview & Challenges/Solutions (2 Cols) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview Section */}
            <div className="space-y-4">
              <h2 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase border-b-2 border-[#374151] pb-3">
                PROJECT <span className="text-[#FBBF24]">OVERVIEW</span>
              </h2>
              <p className="font-mono-cad text-xs sm:text-sm text-[#E5E7EB] leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Engineering Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Challenges */}
              <div className="bg-[#1F2937] p-6 border-l-4 border-[#EF4444] space-y-3">
                <span className="font-mono-cad text-xs text-[#EF4444] font-bold block uppercase">
                  SITE & STRUCTURAL CHALLENGES
                </span>
                <ul className="space-y-2 font-mono-cad text-xs text-[#9CA3AF]">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#EF4444] font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="bg-[#1F2937] p-6 border-l-4 border-[#10B981] space-y-3">
                <span className="font-mono-cad text-xs text-[#10B981] font-bold block uppercase">
                  ENGINEERING & FIELD SOLUTIONS
                </span>
                <ul className="space-y-2 font-mono-cad text-xs text-[#E5E7EB]">
                  {project.solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Construction Timeline Phases */}
            <div className="space-y-6">
              <h2 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase border-b-2 border-[#374151] pb-3">
                CONSTRUCTION <span className="text-[#FBBF24]">PROCESS TIMELINE</span>
              </h2>

              <div className="space-y-4 font-mono-cad text-xs">
                {project.timeline.map((item, idx) => (
                  <div key={idx} className="bg-[#1F2937] p-4 border border-[#374151] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[#FBBF24] font-bold block">{item.phase}</span>
                      <p className="text-[#9CA3AF] text-[11px]">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-[#E5E7EB] bg-[#111111] px-2.5 py-1 border border-[#374151]">{item.duration}</span>
                      <span className="text-[#10B981] font-bold">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantifiable Results */}
            <div className="bg-[#111111] border-2 border-[#FBBF24] p-8 space-y-4">
              <span className="font-mono-cad text-xs text-[#FBBF24] font-bold uppercase block">
                DELIVERED PERFORMANCE METRICS
              </span>
              <ul className="space-y-3 font-industrial text-2xl text-[#FFFFFF] font-bold">
                {project.results.map((r, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-[#FBBF24]">✓</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Materials & Client Testimonial Sidebar (1 Col) */}
          <div className="space-y-8">
            
            {/* Materials Breakdown */}
            <div className="bg-[#1F2937] border-2 border-[#374151] p-6 space-y-4">
              <h3 className="font-industrial text-2xl font-black text-[#FBBF24] uppercase border-b border-[#374151] pb-3">
                STRUCTURAL MATERIALS
              </h3>
              <div className="space-y-3 font-mono-cad text-xs">
                {project.materials.map((m, idx) => (
                  <div key={idx} className="bg-[#111111] p-3 border border-[#374151]">
                    <span className="text-[#FFFFFF] font-bold block">{m.name}</span>
                    <span className="text-[#9CA3AF] text-[11px] mt-0.5 block">{m.spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial Card */}
            {project.testimonial && (
              <div className="bg-[#1F2937] border-2 border-[#FBBF24] p-6 space-y-4">
                <span className="font-mono-cad text-xs text-[#FBBF24] font-bold uppercase block">
                  CLIENT TESTIMONIAL
                </span>
                <p className="font-mono-cad text-xs text-[#E5E7EB] italic leading-relaxed">
                  "{project.testimonial.quote}"
                </p>
                <div className="border-t border-[#374151] pt-3 font-mono-cad text-xs">
                  <span className="text-[#FFFFFF] font-bold block">{project.testimonial.author}</span>
                  <span className="text-[#9CA3AF] text-[11px] block">{project.testimonial.role}</span>
                  <span className="text-[#FBBF24] text-[10px] block">{project.testimonial.organization}</span>
                </div>
              </div>
            )}

            {/* Blueprint PDF / CAD Download Box */}
            <div className="bg-[#111111] border border-[#374151] p-6 text-center space-y-3 font-mono-cad text-xs">
              <FileText className="w-8 h-8 text-[#FBBF24] mx-auto" />
              <span className="text-[#FFFFFF] font-bold block uppercase">CAD / BIM SPEC DOCUMENTATION</span>
              <p className="text-[#9CA3AF] text-[11px]">Download full architectural blueprints, caisson schedules, and structural calculations.</p>
              <button 
                onClick={() => onNavigate('request-proposal')}
                className="w-full bg-[#FBBF24] hover:bg-[#FFFFFF] text-[#111111] font-industrial text-lg font-black py-2.5 uppercase transition-colors cursor-pointer"
              >
                REQUEST DWG FILES
              </button>
            </div>

          </div>

        </div>

        {/* PROJECT GALLERY GRID */}
        <div className="space-y-6">
          <h2 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase border-b-2 border-[#374151] pb-3">
            FIELD CONSTRUCTION <span className="text-[#FBBF24]">GALLERY</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.gallery.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedGalleryImg(img)}
                className="relative h-48 bg-[#1F2937] border border-[#374151] hover:border-[#FBBF24] overflow-hidden cursor-pointer group"
              >
                <img src={img} alt="Gallery shot" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">
                  ENLARGE DWG
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED PROJECTS */}
        {relatedProjects.length > 0 && (
          <div className="space-y-6 pt-10 border-t-2 border-[#374151]">
            <h2 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase">
              SIMILAR SECTOR <span className="text-[#FBBF24]">PROJECTS</span>
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
        )}

      </div>

      {/* Gallery Modal */}
      {selectedGalleryImg && (
        <div 
          onClick={() => setSelectedGalleryImg(null)}
          className="fixed inset-0 z-50 bg-[#111111]/95 flex items-center justify-center p-6 cursor-pointer"
        >
          <div className="max-w-5xl w-full bg-[#1F2937] border-4 border-[#FBBF24] p-4 relative space-y-4">
            <button 
              onClick={() => setSelectedGalleryImg(null)}
              className="absolute top-4 right-4 bg-[#FBBF24] text-[#111111] px-3 py-1 font-mono-cad text-xs font-bold"
            >
              CLOSE [ESC]
            </button>
            <img src={selectedGalleryImg} alt="Enlarged field view" className="w-full max-h-[70vh] object-contain bg-[#111111]" />
            <div className="font-mono-cad text-xs text-[#E5E7EB] text-center">
              HIGH-RESOLUTION FIELD CAD TELEMETRY — {project.title}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
