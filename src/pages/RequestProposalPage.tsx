import React, { useState } from 'react';
import { FileText, CheckCircle2, ArrowRight, ShieldCheck, HardHat, Upload, AlertTriangle } from 'lucide-react';
import { ProposalData } from '../types';

interface RequestProposalPageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const RequestProposalPage: React.FC<RequestProposalPageProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ProposalData>({
    projectType: 'Commercial High-Rise',
    estimatedBudget: '$50M - $100M',
    targetTimeline: '12 - 24 Months',
    siteLocation: '',
    estimatedSquareFeet: '',
    scopeDescription: '',
    clientName: '',
    companyName: '',
    email: '',
    phone: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `PROP-2026-${Math.floor(Math.random() * 89999 + 10000)}`;
    setReferenceCode(refCode);
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-blueprint-grid border-b-4 border-[#374151] py-16 px-6 sm:px-12 bg-[#1F2937]/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">
            <span className="w-2.5 h-2.5 bg-[#FBBF24] inline-block"></span>
            TECHNICAL INQUIRY FLOW // GUARANTEED MAXIMUM PRICE (GMP)
          </div>
          <h1 className="font-industrial text-5xl sm:text-7xl font-black text-[#FFFFFF] uppercase tracking-tight">
            REQUEST A <span className="text-[#FBBF24]">PROPOSAL</span>
          </h1>
          <p className="font-mono-cad text-xs sm:text-sm text-[#9CA3AF] max-w-2xl">
            Submit your capital expenditure parameters, target location, and structural scope for an engineering review and budget proposal from Titan Build Group.
          </p>
        </div>
      </div>

      {/* Main Flow Container */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 py-12">
        
        {!submitted ? (
          <div className="bg-[#1F2937] border-4 border-[#374151] p-8 space-y-8 shadow-2xl">
            
            {/* Step Indicator Bar */}
            <div className="grid grid-cols-4 gap-2 font-mono-cad text-xs">
              {[
                { num: 1, label: 'TYPE & BUDGET' },
                { num: 2, label: 'LOCATION & TIMELINE' },
                { num: 3, label: 'SCOPE & DRAWINGS' },
                { num: 4, label: 'CONTACT INFO' }
              ].map((s) => (
                <div 
                  key={s.num}
                  className={`p-3 border text-center font-bold ${
                    step === s.num 
                      ? 'bg-[#FBBF24] text-[#111111] border-[#FBBF24]' 
                      : step > s.num 
                      ? 'bg-[#111111] text-[#10B981] border-[#10B981]' 
                      : 'bg-[#111111] text-[#6B7280] border-[#374151]'
                  }`}
                >
                  <span className="block text-sm">0{s.num}</span>
                  <span className="text-[10px] uppercase truncate block">{s.label}</span>
                </div>
              ))}
            </div>

            <form onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
              
              {/* STEP 1: PROJECT TYPE & BUDGET */}
              {step === 1 && (
                <div className="space-y-6 font-mono-cad text-xs">
                  <h3 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase border-b border-[#374151] pb-3">
                    01 // PROJECT TYPE & CAPEX BUDGET
                  </h3>

                  <div>
                    <label className="text-[#9CA3AF] uppercase block mb-2 font-bold">PRIMARY PROJECT SECTOR *</label>
                    <select 
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-3 outline-none"
                    >
                      <option value="Commercial High-Rise">Commercial High-Rise Tower</option>
                      <option value="Heavy Infrastructure & Bridges">Heavy Infrastructure & Bridges</option>
                      <option value="Industrial Refinery & Energy">Industrial Refinery & Energy Plant</option>
                      <option value="Hyperscale Data Center Campus">Hyperscale Data Center Campus</option>
                      <option value="Healthcare Surgical Complex">Healthcare Surgical Complex</option>
                      <option value="Aviation Airport Terminal">Aviation Airport Terminal</option>
                      <option value="Deepwater Marine Port">Deepwater Marine Port</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[#9CA3AF] uppercase block mb-2 font-bold">ESTIMATED BUDGET RANGE *</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {['$10M - $25M', '$25M - $50M', '$50M - $100M', '$100M - $250M', '$250M - $500M', '$500M+ Mega Project'].map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, estimatedBudget: b })}
                          className={`p-3 border text-center font-bold transition-colors cursor-pointer ${
                            formData.estimatedBudget === b
                              ? 'bg-[#FBBF24] text-[#111111] border-[#FBBF24]'
                              : 'bg-[#111111] text-[#E5E7EB] border-[#374151] hover:border-[#FBBF24]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: LOCATION & TIMELINE */}
              {step === 2 && (
                <div className="space-y-6 font-mono-cad text-xs">
                  <h3 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase border-b border-[#374151] pb-3">
                    02 // SITE LOCATION & TARGET SCHEDULE
                  </h3>

                  <div>
                    <label className="text-[#9CA3AF] uppercase block mb-2 font-bold">SITE LOCATION (CITY, STATE, METRO) *</label>
                    <input 
                      required
                      type="text"
                      placeholder="e.g. Houston, TX — Energy Corridor Sector 4"
                      value={formData.siteLocation}
                      onChange={(e) => setFormData({ ...formData, siteLocation: e.target.value })}
                      className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[#9CA3AF] uppercase block mb-2 font-bold">ESTIMATED FOOTPRINT SQUARE FEET</label>
                    <input 
                      type="text"
                      placeholder="e.g. 450,000 Sq Ft"
                      value={formData.estimatedSquareFeet}
                      onChange={(e) => setFormData({ ...formData, estimatedSquareFeet: e.target.value })}
                      className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[#9CA3AF] uppercase block mb-2 font-bold">TARGET CONSTRUCTION TIMELINE</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['Fast-Track (<12 Mos)', '12 - 24 Months', '24 - 36 Months', '36+ Months Phased'].map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setFormData({ ...formData, targetTimeline: t })}
                          className={`p-3 border text-center font-bold transition-colors cursor-pointer ${
                            formData.targetTimeline === t
                              ? 'bg-[#FBBF24] text-[#111111] border-[#FBBF24]'
                              : 'bg-[#111111] text-[#E5E7EB] border-[#374151] hover:border-[#FBBF24]'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: SCOPE & BLUEPRINTS */}
              {step === 3 && (
                <div className="space-y-6 font-mono-cad text-xs">
                  <h3 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase border-b border-[#374151] pb-3">
                    03 // STRUCTURAL SCOPE & DWG UPLOAD
                  </h3>

                  <div>
                    <label className="text-[#9CA3AF] uppercase block mb-2 font-bold">PROJECT SCOPE DESCRIPTION *</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Describe deep caisson requirements, structural steel preferences, cleanroom ISO ratings, or special site conditions..."
                      value={formData.scopeDescription}
                      onChange={(e) => setFormData({ ...formData, scopeDescription: e.target.value })}
                      className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-3 outline-none"
                    ></textarea>
                  </div>

                  <div className="border-2 border-dashed border-[#374151] p-8 text-center space-y-2 bg-[#111111]">
                    <Upload className="w-8 h-8 text-[#FBBF24] mx-auto" />
                    <span className="text-[#FFFFFF] font-bold block uppercase">ATTACH ARCHITECTURAL BLUEPRINTS OR CAD FILES (OPTIONAL)</span>
                    <span className="text-[#9CA3AF] text-[10px] block">Supports .DWG, .RVT, .PDF, .ZIP (Simulated Upload)</span>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT INFORMATION */}
              {step === 4 && (
                <div className="space-y-6 font-mono-cad text-xs">
                  <h3 className="font-industrial text-3xl font-black text-[#FFFFFF] uppercase border-b border-[#374151] pb-3">
                    04 // CONTACT & ORGANIZATIONAL DETAILS
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#9CA3AF] uppercase block mb-1 font-bold">YOUR NAME *</label>
                      <input required type="text" placeholder="Marcus Vance" value={formData.clientName} onChange={(e) => setFormData({ ...formData, clientName: e.target.value })} className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-3 outline-none" />
                    </div>
                    <div>
                      <label className="text-[#9CA3AF] uppercase block mb-1 font-bold">ORGANIZATION / DEVELOPER *</label>
                      <input required type="text" placeholder="Apex Global Infrastructure Partners" value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-3 outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#9CA3AF] uppercase block mb-1 font-bold">WORK EMAIL *</label>
                      <input required type="email" placeholder="m.vance@apex.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-3 outline-none" />
                    </div>
                    <div>
                      <label className="text-[#9CA3AF] uppercase block mb-1 font-bold">DIRECT PHONE NUMBER *</label>
                      <input required type="tel" placeholder="+1 (713) 555-0192" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-[#111111] border border-[#374151] focus:border-[#FBBF24] text-[#E5E7EB] p-3 outline-none" />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-8 border-t border-[#374151] font-mono-cad text-xs">
                {step > 1 ? (
                  <button 
                    type="button" 
                    onClick={handlePrev}
                    className="bg-[#111111] text-[#E5E7EB] border border-[#374151] px-6 py-3 font-bold uppercase cursor-pointer"
                  >
                    ← PREVIOUS
                  </button>
                ) : <div></div>}

                {step < 4 ? (
                  <button 
                    type="button" 
                    onClick={handleNext}
                    className="bg-[#FBBF24] hover:bg-[#FFFFFF] text-[#111111] font-industrial text-xl font-black px-8 py-3 uppercase transition-colors cursor-pointer"
                  >
                    NEXT PARAMETERS →
                  </button>
                ) : (
                  <button 
                    type="submit"
                    className="bg-[#FBBF24] hover:bg-[#FFFFFF] text-[#111111] font-industrial text-2xl font-black px-10 py-4 uppercase transition-colors cursor-pointer shadow-2xl"
                  >
                    SUBMIT PROPOSAL INQUIRY
                  </button>
                )}
              </div>

            </form>

          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="bg-[#1F2937] border-4 border-[#10B981] p-10 space-y-6 text-center font-mono-cad shadow-2xl">
            <CheckCircle2 className="w-20 h-20 text-[#10B981] mx-auto" />
            
            <div className="space-y-2">
              <span className="bg-[#10B981] text-[#111111] font-bold px-3 py-1 text-xs uppercase">
                PROPOSAL INQUIRY LOGGED
              </span>
              <h2 className="font-industrial text-4xl sm:text-5xl font-black text-[#FFFFFF] uppercase">
                ENGINEERING REVIEW IN PROGRESS
              </h2>
            </div>

            <div className="bg-[#111111] p-6 border border-[#374151] max-w-lg mx-auto text-left space-y-2 text-xs">
              <div className="flex justify-between text-[#9CA3AF]">
                <span>REFERENCE CODE:</span>
                <span className="text-[#FBBF24] font-bold">{referenceCode}</span>
              </div>
              <div className="flex justify-between text-[#9CA3AF]">
                <span>PROJECT TYPE:</span>
                <span className="text-[#FFFFFF] font-bold">{formData.projectType}</span>
              </div>
              <div className="flex justify-between text-[#9CA3AF]">
                <span>BUDGET RANGE:</span>
                <span className="text-[#FFFFFF] font-bold">{formData.estimatedBudget}</span>
              </div>
              <div className="flex justify-between text-[#9CA3AF]">
                <span>ASSIGNED HUB:</span>
                <span className="text-[#FFFFFF] font-bold">Houston HQ Pre-Con Division</span>
              </div>
            </div>

            <p className="text-xs text-[#9CA3AF] max-w-md mx-auto">
              A Senior Pre-Construction Engineer will analyze your parameters and contact {formData.email} within 24 operational hours.
            </p>

            <button
              onClick={() => onNavigate('home')}
              className="bg-[#FBBF24] text-[#111111] font-industrial text-xl font-black px-8 py-3 uppercase cursor-pointer"
            >
              RETURN TO COMMAND CENTER
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
