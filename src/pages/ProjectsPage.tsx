import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ArrowUpRight, Grid, List, MapPin, Building2, HardHat, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/mockData';
import { IndustryCategory, ProjectStatus } from '../types';

interface ProjectsPageProps {
  initialFilter?: string;
  onNavigate: (view: string, param?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ initialFilter, onNavigate }) => {
  const [search, setSearch] = useState(initialFilter || '');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const categories = [
    'ALL', 'Commercial', 'Infrastructure', 'Industrial', 'Healthcare', 
    'Aviation & Logistics', 'Data Centers', 'Energy & Utilities', 'Marine & Rail', 'Government'
  ];

  const statuses = ['ALL', 'Completed', 'Under Construction', 'Pre-Construction'];

  // Filter projects
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.location.toLowerCase().includes(search.toLowerCase()) ||
        project.code.toLowerCase().includes(search.toLowerCase()) ||
        project.client.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = selectedCategory === 'ALL' || project.category === selectedCategory;
      const matchesStatus = selectedStatus === 'ALL' || project.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [search, selectedCategory, selectedStatus]);

  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-screen pb-20">
      
      {/* Page Header */}
      <div className="bg-blueprint-grid border-b-4 border-[#374151] py-16 px-6 sm:px-12 bg-[#1F2937]/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">
            <span className="w-2.5 h-2.5 bg-[#FBBF24] inline-block"></span>
            PORTFOLIO DIRECTORY // 60 REGISTERED PROJECTS
          </div>
          <h1 className="font-industrial text-5xl sm:text-7xl font-black text-[#FFFFFF] uppercase tracking-tight">
            INFRASTRUCTURE <span className="text-[#FBBF24]">PROJECTS</span>
          </h1>
          <p className="font-mono-cad text-xs sm:text-sm text-[#9CA3AF] max-w-2xl">
            Browse our comprehensive portfolio of 60 major commercial towers, heavy infrastructure bridges, energy plants, and hyperscale data centers.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar Controls */}
      <div className="sticky top-20 z-30 bg-[#111111] border-b-2 border-[#374151] px-6 sm:px-12 py-4 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 font-mono-cad text-xs">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 w-4 h-4 text-[#FBBF24]" />
            <input 
              type="text"
              placeholder="Filter by title, city, code (e.g. PRJ-9004)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#1F2937] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] text-xs pl-10 pr-4 py-2.5 outline-none"
            />
          </div>

          {/* Sector Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.slice(0, 6).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 uppercase font-bold text-[11px] border whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#FBBF24] text-[#111111] border-[#FBBF24]'
                    : 'bg-[#1F2937] text-[#E5E7EB] border-[#374151] hover:border-[#FBBF24]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 self-end lg:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 border transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'bg-[#FBBF24] text-[#111111] border-[#FBBF24]' : 'bg-[#1F2937] text-[#9CA3AF] border-[#374151]'
              }`}
              title="Grid Showcase View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 border transition-colors cursor-pointer ${
                viewMode === 'table' ? 'bg-[#FBBF24] text-[#111111] border-[#FBBF24]' : 'bg-[#1F2937] text-[#9CA3AF] border-[#374151]'
              }`}
              title="CAD Matrix Table View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-10">
        
        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#374151] font-mono-cad text-xs">
          <span className="text-[#9CA3AF]">
            SHOWING <span className="text-[#FBBF24] font-bold">{filteredProjects.length}</span> OF 60 PROJECTS
          </span>
          {selectedCategory !== 'ALL' && (
            <button 
              onClick={() => { setSelectedCategory('ALL'); setSelectedStatus('ALL'); setSearch(''); }}
              className="text-[#FBBF24] hover:underline"
            >
              RESET ALL FILTERS
            </button>
          )}
        </div>

        {/* 1. GRID SHOWCASE VIEW */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1F2937] border-2 border-[#374151] hover:border-[#FBBF24] transition-all flex flex-col justify-between overflow-hidden group cursor-pointer shadow-xl"
                onClick={() => onNavigate('project-details', project.id)}
              >
                {/* Image header */}
                <div className="relative h-60 bg-[#111111] overflow-hidden">
                  <img 
                    src={project.heroImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111]/90 border border-[#FBBF24] px-2 py-0.5 font-mono-cad text-[10px] text-[#FBBF24] font-bold uppercase">
                    {project.code}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-0.5 font-mono-cad text-[10px] font-bold uppercase border ${
                      project.status === 'Completed' ? 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]' : 'bg-[#FBBF24]/20 text-[#FBBF24] border-[#FBBF24]'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono-cad text-xs text-[#FBBF24] font-bold block uppercase mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-industrial text-2xl font-black text-[#FFFFFF] uppercase group-hover:text-[#FBBF24] transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Specs summary */}
                  <div className="grid grid-cols-2 gap-2 bg-[#111111] p-3 border border-[#374151] font-mono-cad text-[11px] text-[#9CA3AF]">
                    <div>
                      <span className="block text-[9px]">LOCATION</span>
                      <span className="text-[#E5E7EB] font-bold truncate block">{project.location}</span>
                    </div>
                    <div>
                      <span className="block text-[9px]">STEEL</span>
                      <span className="text-[#FBBF24] font-bold">{project.steelWeightTons}</span>
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-2 flex items-center justify-between font-industrial text-lg font-bold text-[#FBBF24]">
                    <span>INSPECT SPECS</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* 2. CAD MATRIX TABLE VIEW */}
        {viewMode === 'table' && (
          <div className="w-full overflow-x-auto border-2 border-[#374151] bg-[#1F2937]">
            <table className="w-full text-left font-mono-cad text-xs text-[#E5E7EB]">
              <thead className="bg-[#111111] border-b-2 border-[#FBBF24] text-[#FBBF24] font-bold uppercase">
                <tr>
                  <th className="p-4">CODE</th>
                  <th className="p-4">PROJECT TITLE</th>
                  <th className="p-4">CATEGORY</th>
                  <th className="p-4">LOCATION</th>
                  <th className="p-4">BUDGET</th>
                  <th className="p-4">STATUS</th>
                  <th className="p-4 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#374151]">
                {filteredProjects.map((project) => (
                  <tr 
                    key={project.id}
                    onClick={() => onNavigate('project-details', project.id)}
                    className="hover:bg-[#111111] transition-colors cursor-pointer group"
                  >
                    <td className="p-4 text-[#FBBF24] font-bold">{project.code}</td>
                    <td className="p-4 font-bold text-[#FFFFFF] group-hover:text-[#FBBF24]">{project.title}</td>
                    <td className="p-4 text-[#9CA3AF]">{project.category}</td>
                    <td className="p-4 text-[#9CA3AF]">{project.location}</td>
                    <td className="p-4 font-bold text-[#E5E7EB]">{project.budgetRange}</td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 text-[10px] font-bold uppercase border ${
                        project.status === 'Completed' ? 'text-[#10B981] border-[#10B981]' : 'text-[#FBBF24] border-[#FBBF24]'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="bg-[#111111] hover:bg-[#FBBF24] hover:text-[#111111] text-[#FBBF24] border border-[#FBBF24] px-3 py-1 text-[10px] font-bold uppercase transition-colors">
                        INSPECT
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
};
