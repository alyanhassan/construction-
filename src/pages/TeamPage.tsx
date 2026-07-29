import React, { useState } from 'react';
import { Users, Search, HardHat, Award, ShieldCheck, Mail } from 'lucide-react';
import { TEAM_DATA } from '../data/mockData';
import { TeamMember } from '../types';

interface TeamPageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  const [selectedDept, setSelectedDept] = useState<string>('ALL');
  const [search, setSearch] = useState('');
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  const departments = ['ALL', 'Executive Leadership', 'Structural Engineering', 'Project Management', 'Safety & Compliance', 'VDC & BIM Operations'];

  const filteredTeam = TEAM_DATA.filter((m) => {
    const matchesDept = selectedDept === 'ALL' || m.department === selectedDept;
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.role.toLowerCase().includes(search.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-blueprint-grid border-b-4 border-[#374151] py-16 px-6 sm:px-12 bg-[#1F2937]/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">
            <span className="w-2.5 h-2.5 bg-[#FBBF24] inline-block"></span>
            50 REGISTERED EXECUTIVES & FIELD ENGINEERS
          </div>
          <h1 className="font-industrial text-5xl sm:text-7xl font-black text-[#FFFFFF] uppercase tracking-tight">
            LEADERSHIP & <span className="text-[#FBBF24]">ENGINEERING TEAM</span>
          </h1>
          <p className="font-mono-cad text-xs sm:text-sm text-[#9CA3AF] max-w-2xl">
            Meet the senior project directors, chief structural engineers, and safety superintendents driving mega infrastructure execution across 87 active field sites.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="sticky top-20 z-30 bg-[#111111] border-b-2 border-[#374151] px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-cad text-xs">
          
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-3 w-4 h-4 text-[#FBBF24]" />
            <input 
              type="text"
              placeholder="Search team members by name or role..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#1F2937] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] text-xs pl-10 pr-4 py-2.5 outline-none"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {departments.slice(0, 4).map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3 py-2 uppercase font-bold border whitespace-nowrap transition-colors cursor-pointer text-[11px] ${
                  selectedDept === dept
                    ? 'bg-[#FBBF24] text-[#111111] border-[#FBBF24]'
                    : 'bg-[#1F2937] text-[#E5E7EB] border-[#374151] hover:border-[#FBBF24]'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              onClick={() => setActiveMember(member)}
              className="bg-[#1F2937] border-2 border-[#374151] hover:border-[#FBBF24] p-5 space-y-4 cursor-pointer group transition-all hover:-translate-y-1 shadow-xl"
            >
              <div className="h-48 overflow-hidden bg-[#111111] border border-[#374151] relative">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 left-2 bg-[#111111]/90 border border-[#FBBF24] px-2 py-0.5 font-mono-cad text-[9px] text-[#FBBF24] font-bold">
                  {member.code}
                </div>
              </div>

              <div>
                <span className="font-mono-cad text-[10px] text-[#FBBF24] font-bold uppercase block">{member.department}</span>
                <h3 className="font-industrial text-2xl font-black text-[#FFFFFF] uppercase group-hover:text-[#FBBF24] transition-colors">{member.name}</h3>
                <span className="font-mono-cad text-xs text-[#9CA3AF] block mt-0.5">{member.role}</span>
              </div>

              <div className="bg-[#111111] p-2.5 border border-[#374151] font-mono-cad text-[10px] space-y-1 text-[#9CA3AF]">
                <div className="flex justify-between">
                  <span>EXPERIENCE:</span>
                  <span className="text-[#FFFFFF] font-bold">{member.experienceYears} YRS</span>
                </div>
                <div className="flex justify-between">
                  <span>HUB:</span>
                  <span className="text-[#FBBF24] font-bold">{member.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Bio Modal */}
      {activeMember && (
        <div 
          onClick={() => setActiveMember(null)}
          className="fixed inset-0 z-50 bg-[#111111]/90 flex items-center justify-center p-6 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl w-full bg-[#1F2937] border-4 border-[#FBBF24] p-8 relative space-y-6 cursor-default"
          >
            <button 
              onClick={() => setActiveMember(null)}
              className="absolute top-4 right-4 bg-[#FBBF24] text-[#111111] px-3 py-1 font-mono-cad text-xs font-bold"
            >
              CLOSE [ESC]
            </button>

            <div className="flex items-center gap-4 border-b border-[#374151] pb-4">
              <div className="w-16 h-16 bg-[#111111] border border-[#FBBF24] overflow-hidden">
                <img src={activeMember.image} alt={activeMember.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-mono-cad text-xs text-[#FBBF24] font-bold uppercase block">{activeMember.code} // {activeMember.department}</span>
                <h2 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase">{activeMember.name}</h2>
                <span className="font-mono-cad text-xs text-[#9CA3AF]">{activeMember.role}</span>
              </div>
            </div>

            <p className="font-mono-cad text-xs text-[#E5E7EB] leading-relaxed">
              {activeMember.bio}
            </p>

            <div className="bg-[#111111] p-4 border border-[#374151] font-mono-cad text-xs space-y-2">
              <span className="text-[#FBBF24] font-bold uppercase block">ACTIVE CERTIFICATIONS</span>
              <div className="flex flex-wrap gap-2 text-[#FFFFFF]">
                {activeMember.certifications.map((c, i) => (
                  <span key={i} className="bg-[#1F2937] px-2 py-0.5 border border-[#374151]">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
