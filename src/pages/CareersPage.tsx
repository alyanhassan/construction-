import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, CheckCircle2, ShieldCheck, HardHat, FileText } from 'lucide-react';
import { CAREERS_DATA } from '../data/mockData';
import { CareerPosting } from '../types';

interface CareersPageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  const [selectedJob, setSelectedJob] = useState<CareerPosting | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-blueprint-grid border-b-4 border-[#374151] py-16 px-6 sm:px-12 bg-[#1F2937]/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">
            <span className="w-2.5 h-2.5 bg-[#FBBF24] inline-block"></span>
            CAREERS & FIELD OPPORTUNITIES
          </div>
          <h1 className="font-industrial text-5xl sm:text-7xl font-black text-[#FFFFFF] uppercase tracking-tight">
            BUILD YOUR <span className="text-[#FBBF24]">LEGACY</span>
          </h1>
          <p className="font-mono-cad text-xs sm:text-sm text-[#9CA3AF] max-w-2xl">
            Join 4,500+ engineers, heavy crane operators, and VDC specialists constructing America's most demanding mega infrastructure projects.
          </p>
        </div>
      </div>

      {/* Benefits Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-cad text-xs">
          
          <div className="bg-[#1F2937] p-6 border-l-4 border-[#FBBF24] space-y-2">
            <span className="text-[#FBBF24] font-bold uppercase block text-sm">COMPETITIVE CAPEX PAY & BONUSES</span>
            <p className="text-[#9CA3AF] text-[11px]">Top-tier salary packages, quarterly site safety performance bonuses, and 100% company-matched 401(k).</p>
          </div>

          <div className="bg-[#1F2937] p-6 border-l-4 border-[#10B981] space-y-2">
            <span className="text-[#10B981] font-bold uppercase block text-sm">COMPREHENSIVE HEALTH & SAFETY</span>
            <p className="text-[#9CA3AF] text-[11px]">Full medical, dental, vision coverage with zero deductible options for field superintendents.</p>
          </div>

          <div className="bg-[#1F2937] p-6 border-l-4 border-[#6B7280] space-y-2">
            <span className="text-[#FFFFFF] font-bold uppercase block text-sm">TITAN FIELD ACADEMY TRAINING</span>
            <p className="text-[#9CA3AF] text-[11px]">Continuous sponsorship for P.E. structural licensing, PMP certifications, and heavy equipment credentials.</p>
          </div>

        </div>

        {/* Job Postings */}
        <div className="mt-12 space-y-6">
          <h2 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase border-b-2 border-[#374151] pb-3">
            OPEN FIELD & ENGINEERING <span className="text-[#FBBF24]">POSITIONS</span>
          </h2>

          <div className="space-y-4">
            {CAREERS_DATA.map((job) => (
              <div 
                key={job.id} 
                className="bg-[#1F2937] border-2 border-[#374151] hover:border-[#FBBF24] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3 font-mono-cad text-xs">
                    <span className="bg-[#FBBF24] text-[#111111] px-2 py-0.5 font-bold uppercase">{job.code}</span>
                    <span className="text-[#9CA3AF]">{job.department}</span>
                    <span className="text-[#10B981] font-bold uppercase">{job.type}</span>
                  </div>
                  <h3 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase">{job.title}</h3>
                  <span className="font-mono-cad text-xs text-[#9CA3AF] block">LOCATION: {job.location} | REQUIRED EXP: {job.experience}</span>
                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="bg-[#111111] hover:bg-[#FBBF24] hover:text-[#111111] text-[#FBBF24] font-mono-cad text-xs font-bold px-6 py-3 uppercase border border-[#FBBF24] transition-colors cursor-pointer shrink-0"
                >
                  APPLY FOR POSITION →
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div 
          onClick={() => { setSelectedJob(null); setAppliedSuccess(false); }}
          className="fixed inset-0 z-50 bg-[#111111]/90 flex items-center justify-center p-6 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl w-full bg-[#1F2937] border-4 border-[#FBBF24] p-8 relative space-y-6 cursor-default"
          >
            <button 
              onClick={() => { setSelectedJob(null); setAppliedSuccess(false); }}
              className="absolute top-4 right-4 bg-[#FBBF24] text-[#111111] px-3 py-1 font-mono-cad text-xs font-bold"
            >
              CLOSE [ESC]
            </button>

            {!appliedSuccess ? (
              <>
                <div className="border-b border-[#374151] pb-4">
                  <span className="font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">{selectedJob.code} // APPLICATION FORM</span>
                  <h2 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase">{selectedJob.title}</h2>
                  <span className="font-mono-cad text-xs text-[#9CA3AF]">{selectedJob.location}</span>
                </div>

                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setAppliedSuccess(true);
                  }}
                  className="space-y-4 font-mono-cad text-xs"
                >
                  <div>
                    <label className="text-[#9CA3AF] uppercase block mb-1">FULL NAME *</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-2.5 outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#9CA3AF] uppercase block mb-1">EMAIL ADDRESS *</label>
                      <input required type="email" placeholder="j.doe@titanbuild.com" className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-2.5 outline-none" />
                    </div>
                    <div>
                      <label className="text-[#9CA3AF] uppercase block mb-1">PHONE NUMBER *</label>
                      <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-2.5 outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#9CA3AF] uppercase block mb-1">YEARS STRUCTURAL EXPERIENCE *</label>
                    <input required type="text" placeholder="e.g. 12 Years Heavy Civil" className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-2.5 outline-none" />
                  </div>
                  <button type="submit" className="w-full bg-[#FBBF24] hover:bg-[#FFFFFF] text-[#111111] font-industrial text-xl font-black py-3 uppercase transition-colors cursor-pointer">
                    SUBMIT APPLICATION
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4 font-mono-cad">
                <CheckCircle2 className="w-16 h-16 text-[#10B981] mx-auto" />
                <h3 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase">APPLICATION RECEIVED</h3>
                <p className="text-xs text-[#9CA3AF]">Your engineering application profile has been submitted to Titan HR Dispatch (REF: APP-{Math.floor(Math.random() * 89999 + 10000)}).</p>
                <button 
                  onClick={() => { setSelectedJob(null); setAppliedSuccess(false); }}
                  className="bg-[#FBBF24] text-[#111111] px-6 py-2.5 text-xs font-bold uppercase"
                >
                  RETURN TO CAREERS LIST
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
