import React, { useState } from 'react';
import { HardHat, ArrowUpRight, Zap, ShieldCheck, Ruler, CheckCircle2 } from 'lucide-react';
import { EQUIPMENT_DATA } from '../data/mockData';

interface EquipmentPageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const EquipmentPage: React.FC<EquipmentPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Tower Cranes', 'Earthmoving & Excavation', 'Concrete & Pumping', 'Tunnelling & Foundation', 'Heavy Transport'];

  const filteredEquipment = selectedCategory === 'ALL'
    ? EQUIPMENT_DATA
    : EQUIPMENT_DATA.filter((eq) => eq.category === selectedCategory);

  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-blueprint-grid border-b-4 border-[#374151] py-16 px-6 sm:px-12 bg-[#1F2937]/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">
            <span className="w-2.5 h-2.5 bg-[#FBBF24] inline-block"></span>
            FLEET DISPATCH MATRIX // HEAVY MACHINERY & TOWER CRANES
          </div>
          <h1 className="font-industrial text-5xl sm:text-7xl font-black text-[#FFFFFF] uppercase tracking-tight">
            EQUIPMENT & <span className="text-[#FBBF24]">HEAVY FLEET</span>
          </h1>
          <p className="font-mono-cad text-xs sm:text-sm text-[#9CA3AF] max-w-2xl">
            Titan Build Group owns and operates a $350M internal heavy equipment fleet including 80-ton tower cranes, 32-foot TBM tunneling shields, and 16-axle hydraulic transporters.
          </p>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="sticky top-20 z-30 bg-[#111111] border-b-2 border-[#374151] px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto font-mono-cad text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 uppercase font-bold border whitespace-nowrap transition-colors cursor-pointer ${
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

      {/* Fleet Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredEquipment.map((item) => (
            <div key={item.id} className="bg-[#1F2937] border-2 border-[#374151] hover:border-[#FBBF24] p-8 space-y-6 flex flex-col justify-between shadow-2xl">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#374151] pb-3 font-mono-cad text-xs">
                  <span className="text-[#FBBF24] font-bold">{item.code}</span>
                  <span className={`px-2.5 py-1 font-bold uppercase border ${
                    item.status === 'Deployed' ? 'text-[#10B981] border-[#10B981]' : 'text-[#FBBF24] border-[#FBBF24]'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div className="h-64 overflow-hidden bg-[#111111] border border-[#374151] relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 bg-[#111111]/90 border border-[#FBBF24] px-2 py-0.5 font-mono-cad text-[10px] text-[#FBBF24]">
                    LOCATION: {item.location}
                  </div>
                </div>

                <div>
                  <span className="font-mono-cad text-xs text-[#9CA3AF] uppercase block">{item.category}</span>
                  <h3 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase mt-1">{item.name}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3 bg-[#111111] p-4 border border-[#374151] font-mono-cad text-xs">
                  <div>
                    <span className="text-[#9CA3AF] text-[10px] block">PAYLOAD CAPACITY</span>
                    <span className="text-[#FBBF24] font-bold">{item.capacity}</span>
                  </div>
                  <div>
                    <span className="text-[#9CA3AF] text-[10px] block">HORSEPOWER</span>
                    <span className="text-[#FFFFFF] font-bold">{item.powerHP}</span>
                  </div>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="space-y-3 font-mono-cad text-xs border-t border-[#374151] pt-4">
                <span className="text-[#FFFFFF] font-bold uppercase block text-[11px]">MACHINE TECHNICAL SPECIFICATIONS</span>
                <div className="grid grid-cols-2 gap-2 text-[#9CA3AF]">
                  {item.specs.map((s, idx) => (
                    <div key={idx} className="bg-[#111111] p-2 border border-[#374151]">
                      <span className="text-[9px] block">{s.label}</span>
                      <span className="text-[#E5E7EB] font-bold text-[11px] block">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
