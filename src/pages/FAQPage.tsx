import React, { useState } from 'react';
import { Search, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

interface FAQPageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [search, setSearch] = useState('');
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const filteredFaqs = FAQ_DATA.filter((faq) => 
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    faq.answer.toLowerCase().includes(search.toLowerCase()) ||
    faq.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-blueprint-grid border-b-4 border-[#374151] py-16 px-6 sm:px-12 bg-[#1F2937]/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">
            <span className="w-2.5 h-2.5 bg-[#FBBF24] inline-block"></span>
            TECHNICAL SPECIFICATIONS & CONTRACTING QA
          </div>
          <h1 className="font-industrial text-5xl sm:text-7xl font-black text-[#FFFFFF] uppercase tracking-tight">
            TECHNICAL <span className="text-[#FBBF24]">FAQ</span>
          </h1>
          <p className="font-mono-cad text-xs sm:text-sm text-[#9CA3AF] max-w-2xl">
            Frequently asked questions regarding Titan Build Group's bonding limits, EMR safety scores, BIM LOD 500 capabilities, and Design-Build delivery models.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 py-12 space-y-8 font-mono-cad">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-3.5 w-4 h-4 text-[#FBBF24]" />
          <input 
            type="text"
            placeholder="Search questions (e.g. bonding capacity, EMR rating, BIM)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1F2937] border-2 border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] text-xs pl-10 pr-4 py-3 outline-none"
          />
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-[#1F2937] border-2 border-[#374151] hover:border-[#FBBF24] transition-colors"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div>
                    <span className="text-[#FBBF24] text-[10px] font-bold uppercase block mb-1">{faq.category}</span>
                    <h3 className="font-industrial text-2xl font-black text-[#FFFFFF] uppercase leading-snug">{faq.question}</h3>
                  </div>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#FBBF24] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#6B7280] shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#374151] text-xs text-[#E5E7EB] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
