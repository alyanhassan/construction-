import React, { useState } from 'react';
import { Ruler, CheckCircle2, ArrowRight, HardHat, FileText, Compass, ShieldCheck } from 'lucide-react';

interface ProcessPageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'SITE GEOTECHNICAL & PLANNING',
      tag: 'PHASE 1 // PRE-CONSTRUCTION',
      description: 'Comprehensive soil boring samples, seismic hazard modeling, bathymetric sonar scans, and fast-track caisson foundation engineering.',
      keyActions: [
        '3D LiDAR terrain point cloud mapping',
        'Deep soil core drilling down to bedrock (up to 180 feet)',
        'Environmental impact & utility relocation clearances',
        'Long-lead structural steel mill procurement'
      ],
      tolerance: '±0.05 Feet Elevation Accuracy',
      duration: 'Months 1 - 3'
    },
    {
      step: '02',
      title: 'ARCHITECTURAL & BIM LOD 500 DESIGN',
      tag: 'PHASE 2 // VDC MODELING',
      description: 'Developing 3D federated BIM models in Revit and Navisworks to resolve spatial clashes prior to field steel fabrication.',
      keyActions: [
        '100% 3D spatial clash detection across MEP and structural beams',
        '4D schedule integration with Primavera P6 timelines',
        '5D cost estimating & guaranteed maximum price (GMP) baselines',
        'Subcontractor trade pre-fabrication detailing'
      ],
      tolerance: 'Zero Spatial Interference Threshold',
      duration: 'Months 3 - 6'
    },
    {
      step: '03',
      title: 'HEAVY CIVIL & STRUCTURAL ENGINEERING',
      tag: 'PHASE 3 // STEEL & CONCRETE',
      description: 'Engineering post-tensioned floor decks, self-climbing hydraulic core formwork, and heavy structural steel truss connections.',
      keyActions: [
        'Finite Element Analysis (FEA) under wind loads up to 180 mph',
        'Concrete mix design stress testing up to 12,000 PSI',
        'Rebar density optimization & post-tension cable jack calculations',
        'Tower crane capacity & radius load placement simulations'
      ],
      tolerance: '±1.5mm Laser Beam Alignment',
      duration: 'Months 6 - 12'
    },
    {
      step: '04',
      title: 'FIELD ERECTION & SELF-PERFORM TRADES',
      tag: 'PHASE 4 // FIELD EXECUTION',
      description: 'Deploying direct self-perform concrete crews and heavy crane operators to erect structural cores and curtain wall enclosures.',
      keyActions: [
        'Self-climbing core formwork climbing at 3-day floor cycle speed',
        '80-ton tower crane lifts of 120-foot steel roof trusses',
        'Unitized triple-pane glass curtain wall panel hoisting',
        'High-density continuous concrete pours up to 4,500 cu yds/day'
      ],
      tolerance: 'Daily Real-Time Total Station Scans',
      duration: 'Months 12 - 28'
    },
    {
      step: '05',
      title: 'ULTRASONIC INSPECTION & TESTING',
      tag: 'PHASE 5 // QA/QC AUDIT',
      description: 'Ultrasonic non-destructive testing (NDT) on structural welds, laser deflection checks, and pressure hydrotesting on piping.',
      keyActions: [
        '100% X-ray & magnetic particle weld inspection on main steel joints',
        'Continuous thermal concrete curing monitoring via embedded sensors',
        'Infection control ICRA IV containment audits in cleanrooms',
        'Fire life safety smoke evacuation system stress testing'
      ],
      tolerance: '100% ASME & AWS Code Compliance',
      duration: 'Months 28 - 32'
    },
    {
      step: '06',
      title: 'MEP COMMISSIONING & HANDOVER',
      tag: 'PHASE 6 // OCCUPANCY',
      description: 'Integrated systems testing (IST), air balancing, certificate of occupancy acquisition, and complete digital LOD 500 BIM handover.',
      keyActions: [
        '72-Hour continuous full-load bank testing on emergency backup generators',
        'BIM LOD 500 digital twin transfer to facility operations team',
        'Substantial completion sign-off with municipal building inspectors',
        'Final commissioning certificate & warranty activation'
      ],
      tolerance: 'Zero Deficiency Punch List Standard',
      duration: 'Months 33 - 36'
    }
  ];

  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-blueprint-grid border-b-4 border-[#374151] py-16 px-6 sm:px-12 bg-[#1F2937]/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 font-mono-cad text-xs text-[#FBBF24] font-bold uppercase">
            <span className="w-2.5 h-2.5 bg-[#FBBF24] inline-block"></span>
            WORKFLOW DISCIPLINE // 6 INTEGRATED PHASES
          </div>
          <h1 className="font-industrial text-5xl sm:text-7xl font-black text-[#FFFFFF] uppercase tracking-tight">
            CONSTRUCTION <span className="text-[#FBBF24]">PROCESS</span>
          </h1>
          <p className="font-mono-cad text-xs sm:text-sm text-[#9CA3AF] max-w-2xl">
            From geotechnical caisson drilling to LOD 500 digital twin handover, Titan Build Group executes every phase with mechanical precision.
          </p>
        </div>
      </div>

      {/* Interactive Process Timeline Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 space-y-12">
        
        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 font-mono-cad text-xs">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 border text-left transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-[#FBBF24] text-[#111111] border-[#FBBF24] font-bold'
                  : 'bg-[#1F2937] text-[#E5E7EB] border-[#374151] hover:border-[#FBBF24]'
              }`}
            >
              <span className="font-industrial text-2xl font-black block leading-none">{s.step}</span>
              <span className="uppercase text-[11px] block mt-1 truncate">{s.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Phase Detail Box */}
        <div className="bg-[#1F2937] border-2 border-[#FBBF24] p-8 space-y-8 shadow-2xl">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#374151] pb-6">
            <div>
              <span className="bg-[#FBBF24] text-[#111111] font-mono-cad text-xs font-bold px-3 py-1 uppercase">
                {steps[activeStep].tag}
              </span>
              <h2 className="font-industrial text-3xl sm:text-5xl font-black text-[#FFFFFF] uppercase mt-3">
                {steps[activeStep].title}
              </h2>
            </div>

            <div className="font-mono-cad text-xs text-[#9CA3AF] bg-[#111111] p-3 border border-[#374151]">
              <span className="block text-[10px]">ESTIMATED DURATION</span>
              <span className="text-[#FBBF24] font-bold text-base">{steps[activeStep].duration}</span>
            </div>
          </div>

          <p className="font-mono-cad text-xs sm:text-sm text-[#E5E7EB] leading-relaxed">
            {steps[activeStep].description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* Key Actions List */}
            <div className="space-y-3 font-mono-cad text-xs">
              <span className="text-[#FBBF24] font-bold uppercase block text-sm">PHASE KEY DELIVERABLES</span>
              <div className="space-y-2">
                {steps[activeStep].keyActions.map((action, i) => (
                  <div key={i} className="bg-[#111111] p-3 border border-[#374151] flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#FBBF24] shrink-0" />
                    <span className="text-[#E5E7EB]">{action}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* QA/QC Tolerance Threshold Box */}
            <div className="bg-[#111111] p-6 border-2 border-[#374151] space-y-4 font-mono-cad text-xs flex flex-col justify-between">
              <div>
                <span className="text-[#9CA3AF] text-[10px] uppercase block">QUALITY CONTROL TOLERANCE GATE</span>
                <span className="text-[#FBBF24] font-bold text-lg block mt-1">{steps[activeStep].tolerance}</span>
              </div>
              <p className="text-[#9CA3AF] text-[11px] leading-relaxed">
                All work signed off by third-party licensed structural engineers and certified quality superintendents before advancing to next phase.
              </p>
              <button
                onClick={() => onNavigate('request-proposal')}
                className="w-full bg-[#FBBF24] hover:bg-[#FFFFFF] text-[#111111] font-industrial text-lg font-black py-3 uppercase transition-colors cursor-pointer"
              >
                REQUEST PHASE 1 FEASIBILITY STUDY
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
