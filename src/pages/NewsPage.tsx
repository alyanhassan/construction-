import React, { useState } from 'react';
import { Newspaper, Search, ArrowUpRight, Calendar, User } from 'lucide-react';
import { NEWS_DATA } from '../data/mockData';
import { NewsArticle } from '../types';

interface NewsPageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNavigate }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [search, setSearch] = useState('');

  const categories = ['ALL', 'Press Release', 'Safety Milestone', 'Engineering Whitepaper', 'Fleet Acquisition', 'Corporate'];

  const filteredNews = NEWS_DATA.filter((n) => {
    const matchesCat = selectedCategory === 'ALL' || n.category === selectedCategory;
    const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase()) || n.summary.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-blueprint-grid border-b-4 border-[#374151] py-16 px-6 sm:px-12 bg-[#1F2937]/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">
            <span className="w-2.5 h-2.5 bg-[#FBBF24] inline-block"></span>
            PRESS RELEASES & TECHNICAL WHITEPAPERS
          </div>
          <h1 className="font-industrial text-5xl sm:text-7xl font-black text-[#FFFFFF] uppercase tracking-tight">
            NEWS & <span className="text-[#FBBF24]">WHITEPAPERS</span>
          </h1>
          <p className="font-mono-cad text-xs sm:text-sm text-[#9CA3AF] max-w-2xl">
            Official announcements, equipment fleet acquisitions, contract awards, and structural engineering research from Titan Build Group.
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
              placeholder="Search news & press releases..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#1F2937] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] text-xs pl-10 pr-4 py-2.5 outline-none"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 uppercase font-bold border whitespace-nowrap transition-colors cursor-pointer text-[11px] ${
                  selectedCategory === cat
                    ? 'bg-[#FBBF24] text-[#111111] border-[#FBBF24]'
                    : 'bg-[#1F2937] text-[#E5E7EB] border-[#374151] hover:border-[#FBBF24]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-[#1F2937] border-2 border-[#374151] hover:border-[#FBBF24] p-6 space-y-4 cursor-pointer group flex flex-col justify-between transition-all hover:-translate-y-1 shadow-xl"
            >
              <div className="space-y-3">
                <div className="h-48 overflow-hidden bg-[#111111] border border-[#374151] relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 left-2 bg-[#111111]/90 border border-[#FBBF24] px-2 py-0.5 font-mono-cad text-[9px] text-[#FBBF24] font-bold">
                    {article.category}
                  </div>
                </div>

                <div className="flex items-center justify-between font-mono-cad text-[10px] text-[#9CA3AF]">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-industrial text-2xl font-black text-[#FFFFFF] uppercase group-hover:text-[#FBBF24] transition-colors leading-tight">
                  {article.title}
                </h3>

                <p className="font-mono-cad text-xs text-[#9CA3AF] line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-2 font-industrial text-lg font-bold text-[#FBBF24] flex items-center justify-between border-t border-[#374151]">
                <span>READ FULL RELEASE</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div 
          onClick={() => setSelectedArticle(null)}
          className="fixed inset-0 z-50 bg-[#111111]/90 flex items-center justify-center p-6 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full bg-[#1F2937] border-4 border-[#FBBF24] p-8 relative space-y-6 cursor-default max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 bg-[#FBBF24] text-[#111111] px-3 py-1 font-mono-cad text-xs font-bold"
            >
              CLOSE [ESC]
            </button>

            <div className="border-b border-[#374151] pb-4 space-y-2">
              <span className="font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">{selectedArticle.code} // {selectedArticle.category}</span>
              <h2 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase">{selectedArticle.title}</h2>
              <span className="font-mono-cad text-xs text-[#9CA3AF] block">DATE: {selectedArticle.date} | AUTHOR: {selectedArticle.author}</span>
            </div>

            <img src={selectedArticle.image} alt="Article visual" className="w-full h-64 object-cover border border-[#374151]" />

            <div className="space-y-4 font-mono-cad text-xs sm:text-sm text-[#E5E7EB] leading-relaxed">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
