import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, CheckCircle2, ShieldCheck, HardHat } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [sent, setSent] = useState(false);

  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-blueprint-grid border-b-4 border-[#374151] py-16 px-6 sm:px-12 bg-[#1F2937]/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">
            <span className="w-2.5 h-2.5 bg-[#FBBF24] inline-block"></span>
            REGIONAL DISPATCH HUBS // 24/7 HOTLINE
          </div>
          <h1 className="font-industrial text-5xl sm:text-7xl font-black text-[#FFFFFF] uppercase tracking-tight">
            CONTACT <span className="text-[#FBBF24]">COMMAND CENTER</span>
          </h1>
          <p className="font-mono-cad text-xs sm:text-sm text-[#9CA3AF] max-w-2xl">
            Reach our national headquarters in Houston, regional engineering hubs, or emergency heavy machinery dispatch hotline.
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 space-y-12">
        
        {/* 4 Regional Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono-cad text-xs">
          
          <div className="bg-[#1F2937] border-2 border-[#FBBF24] p-6 space-y-3">
            <span className="bg-[#FBBF24] text-[#111111] px-2 py-0.5 font-bold uppercase text-[10px]">
              NATIONAL HQ
            </span>
            <h3 className="font-industrial text-2xl font-black text-[#FFFFFF] uppercase">HOUSTON COMMAND</h3>
            <p className="text-[#9CA3AF] text-[11px]">800 Energy Corridor Pkwy, Suite 1200, Houston, TX 77079</p>
            <div className="pt-2 border-t border-[#374151] text-[#FBBF24] font-bold">
              DISPATCH: (713) 555-8482
            </div>
          </div>

          <div className="bg-[#1F2937] border border-[#374151] p-6 space-y-3">
            <span className="bg-[#111111] text-[#FFFFFF] border border-[#374151] px-2 py-0.5 font-bold uppercase text-[10px]">
              CHICAGO HUB
            </span>
            <h3 className="font-industrial text-2xl font-black text-[#FFFFFF] uppercase">MIDWEST DIVISION</h3>
            <p className="text-[#9CA3AF] text-[11px]">200 S Wacker Drive, Floor 18, Chicago, IL 60606</p>
            <div className="pt-2 border-t border-[#374151] text-[#FFFFFF] font-bold">
              DISPATCH: (312) 555-9012
            </div>
          </div>

          <div className="bg-[#1F2937] border border-[#374151] p-6 space-y-3">
            <span className="bg-[#111111] text-[#FFFFFF] border border-[#374151] px-2 py-0.5 font-bold uppercase text-[10px]">
              SEATTLE DIVISION
            </span>
            <h3 className="font-industrial text-2xl font-black text-[#FFFFFF] uppercase">PACIFIC MARITIME</h3>
            <p className="text-[#9CA3AF] text-[11px]">Pier 91 Logistics Center, Seattle, WA 98119</p>
            <div className="pt-2 border-t border-[#374151] text-[#FFFFFF] font-bold">
              DISPATCH: (206) 555-4389
            </div>
          </div>

          <div className="bg-[#1F2937] border border-[#374151] p-6 space-y-3">
            <span className="bg-[#111111] text-[#FFFFFF] border border-[#374151] px-2 py-0.5 font-bold uppercase text-[10px]">
              DALLAS YARD
            </span>
            <h3 className="font-industrial text-2xl font-black text-[#FFFFFF] uppercase">HEAVY RIGGING YARD</h3>
            <p className="text-[#9CA3AF] text-[11px]">1400 Industrial Blvd, Dallas, TX 75207</p>
            <div className="pt-2 border-t border-[#374151] text-[#FFFFFF] font-bold">
              DISPATCH: (214) 555-7801
            </div>
          </div>

        </div>

        {/* Contact Form & Dispatch Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 bg-[#1F2937] border-2 border-[#374151] p-8 space-y-6">
            <h2 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase border-b border-[#374151] pb-3">
              DIRECT DISPATCH <span className="text-[#FBBF24]">MESSAGE</span>
            </h2>

            {!sent ? (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 font-mono-cad text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#9CA3AF] uppercase block mb-1">FULL NAME *</label>
                    <input required type="text" placeholder="John Smith" className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-3 outline-none" />
                  </div>
                  <div>
                    <label className="text-[#9CA3AF] uppercase block mb-1">COMPANY / AGENCY *</label>
                    <input required type="text" placeholder="Metropolitan Infrastructure Auth" className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-3 outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#9CA3AF] uppercase block mb-1">EMAIL ADDRESS *</label>
                    <input required type="email" placeholder="j.smith@infrastructure.gov" className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-3 outline-none" />
                  </div>
                  <div>
                    <label className="text-[#9CA3AF] uppercase block mb-1">PHONE NUMBER *</label>
                    <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-3 outline-none" />
                  </div>
                </div>

                <div>
                  <label className="text-[#9CA3AF] uppercase block mb-1">INQUIRY DETAILS *</label>
                  <textarea required rows={4} placeholder="Inquire about general contracting, crane availability, bidding deadlines..." className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-3 outline-none"></textarea>
                </div>

                <button type="submit" className="bg-[#FBBF24] hover:bg-[#FFFFFF] text-[#111111] font-industrial text-xl font-black px-8 py-3.5 uppercase cursor-pointer transition-colors">
                  SEND DISPATCH MESSAGE
                </button>
              </form>
            ) : (
              <div className="bg-[#111111] border-2 border-[#10B981] p-6 text-center space-y-3 font-mono-cad">
                <CheckCircle2 className="w-12 h-12 text-[#10B981] mx-auto" />
                <h3 className="font-industrial text-2xl font-black text-[#FFFFFF] uppercase">MESSAGE LOGGED IN DISPATCH MATRIX</h3>
                <p className="text-xs text-[#9CA3AF]">A regional operations director will contact you shortly.</p>
                <button onClick={() => setSent(false)} className="bg-[#FBBF24] text-[#111111] px-4 py-2 font-bold text-xs uppercase">SEND ANOTHER</button>
              </div>
            )}
          </div>

          <div className="bg-[#111111] border-2 border-[#FBBF24] p-8 space-y-6 font-mono-cad text-xs flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[#FBBF24] font-bold uppercase block text-sm">24/7 HEAVY EQUIPMENT DISPATCH</span>
              <p className="text-[#9CA3AF] text-[11px] leading-relaxed">
                For emergency site logistics, crane mobilization, or urgent structural engineering support, contact our central hotline anytime.
              </p>
              <div className="bg-[#1F2937] p-4 border border-[#374151] text-center space-y-1">
                <span className="text-[#9CA3AF] text-[10px] uppercase block">TOLL-FREE DISPATCH LINE</span>
                <span className="text-[#FFFFFF] font-bold text-xl block">1-800-555-TITAN</span>
              </div>
            </div>

            <button 
              onClick={() => onNavigate('request-proposal')}
              className="w-full bg-[#FBBF24] hover:bg-[#FFFFFF] text-[#111111] font-industrial text-lg font-black py-3 uppercase transition-colors cursor-pointer"
            >
              REQUEST FULL PROPOSAL →
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
