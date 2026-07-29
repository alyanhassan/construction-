import { Project, Service, Industry, EquipmentItem, TeamMember, CaseStudy, NewsArticle, CareerPosting, FAQItem, IndustryCategory } from '../types';

// High-quality reliable Unsplash industrial & heavy construction images
export const IMAGES = {
  skyscraper: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
  bridge: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1200&auto=format&fit=crop',
  industrialPlant: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
  craneSite: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
  dataCenter: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
  hospital: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop',
  airport: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1200&auto=format&fit=crop',
  steelWorkers: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
  blueprintPlan: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop',
  heavyMachinery: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?q=80&w=1200&auto=format&fit=crop',
  excavator: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop',
  tunnel: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=1200&auto=format&fit=crop',
  portLogistics: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
  solarPlant: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop',
};

// 15 SERVICES
export const SERVICES_DATA: Service[] = [
  {
    id: 'commercial-construction',
    code: 'SRV-101',
    title: 'Commercial Construction',
    tagline: 'High-Rise Towers, Financial Headquarters & Mixed-Use Hubs',
    shortDescription: 'Turnkey structural execution for landmark corporate office towers, urban mixed-use complexes, and commercial campuses.',
    fullDescription: 'Titan Build Group leads the industry in structural steel engineering, deep foundation pouring, and curtain wall installation for high-density urban environments. We utilize post-tensioned concrete, BIM 4D coordination, and continuous quality monitoring.',
    keyCapabilities: ['High-rise core & shell execution', 'Pre-stressed concrete framing', 'Unitized curtain wall installation', 'LEED Platinum certification management'],
    iconName: 'Building2',
    heroImage: IMAGES.skyscraper,
    specifications: [
      { label: 'Max Height Capabilities', value: '110+ Stories / 1,400 Ft' },
      { label: 'Concrete Pouring Capacity', value: '4,500 cu yds/day' },
      { label: 'Structural Steel Tolerance', value: '±1.5mm Laser Guided' }
    ],
    methodology: [
      { step: '01', title: 'Deep Geotechnical Foundation', detail: 'Caisson drilling down to bed rock up to 180 feet with sonic integrity testing.' },
      { step: '02', title: 'Self-Climbing Core Formwork', detail: 'Automated hydraulic climbing systems enabling 3-day floor cycle speed.' },
      { step: '03', title: 'Integrated Enclosure', detail: 'Prefabricated unitized glass-and-steel panel hoisting synchronized with floor pours.' }
    ]
  },
  {
    id: 'heavy-infrastructure',
    code: 'SRV-102',
    title: 'Heavy Infrastructure',
    tagline: 'Bridges, Highway Interchanges & Mass Transit Corridors',
    shortDescription: 'Major civil infrastructure projects engineered for 100-year structural lifespans under heavy traffic and extreme seismic loads.',
    fullDescription: 'From cable-stayed river crossings to subterranean rapid transit tunnels, Titan Build Group executes complex municipal and federal infrastructure contracts with rigorous safety and schedule controls.',
    keyCapabilities: ['Cable-stayed & suspension bridge erection', 'Tunnel Boring Machine (TBM) operations', 'Precast segment casting yards', 'Highway interchange geometry'],
    iconName: 'Landmark',
    heroImage: IMAGES.bridge,
    specifications: [
      { label: 'Design Lifespan', value: '100+ Years' },
      { label: 'Seismic Load Threshold', value: 'Magnitude 8.5 Richter Scale' },
      { label: 'Load Capacity', value: 'Class A Heavy Freight Rail & Highway' }
    ],
    methodology: [
      { step: '01', title: 'Sub-sea / Riverbed Substructure', detail: 'Cofferdam installation and tremie concrete seal pours.' },
      { step: '02', title: 'Segmental Gantry Erection', detail: 'Self-launching gantry cranes hoisting 120-ton precast box girders into place.' },
      { step: '03', title: 'Post-Tension Cable Anchorage', detail: 'High-grade strand tensioning with hydraulic jacks up to 2,000 kN.' }
    ]
  },
  {
    id: 'industrial-facilities',
    code: 'SRV-103',
    title: 'Industrial Construction',
    tagline: 'Refineries, Manufacturing Plants & Advanced Assembly Hubs',
    shortDescription: 'Heavy industrial plant construction including process piping, steel superstructures, cleanrooms, and high-load foundation slabs.',
    fullDescription: 'Engineering complex process facilities requires exact spatial alignment and high vibration resistance. We build heavy manufacturing plants, petrochemical refineries, and EV battery gigafactories.',
    keyCapabilities: ['Heavy structural steel framing (>25,000 tons)', 'High-tolerance slab flatness (FF 100/FL 75)', 'Process equipment setting & rig-in', 'HAZMAT & cleanroom containment'],
    iconName: 'Factory',
    heroImage: IMAGES.industrialPlant,
    specifications: [
      { label: 'Slab Load Bearing', value: 'Up to 2,500 PSF' },
      { label: 'Piping Fabrication', value: '100% X-ray Welded ASME Standards' },
      { label: 'Cleanroom Class', value: 'ISO Class 3 to Class 8' }
    ],
    methodology: [
      { step: '01', title: 'Vibration Isolation Footings', detail: 'Deep auger-cast piles decoupled from main plant foundation.' },
      { step: '02', title: 'Modular Pipe Rack Rigging', detail: 'Offsite prefabrication of multi-tier steel pipe racks lifted in 80-foot modules.' },
      { step: '03', title: 'Process Loop Hydrotesting', detail: 'Pressure testing up to 10,000 PSI prior to hot commissioning.' }
    ]
  },
  {
    id: 'design-build',
    code: 'SRV-104',
    title: 'Design-Build Delivery',
    tagline: 'Single-Source Accountability From Blueprint to Commissioning',
    shortDescription: 'Unified engineering, architectural, and construction management under one contract for maximum speed and zero cost overrun.',
    fullDescription: 'Our integrated Design-Build approach merges architectural engineering with field superintendence. By eliminating friction between designers and trades, projects achieve 25% faster delivery times.',
    keyCapabilities: ['Integrated BIM 5D cost-time models', 'Fast-track foundation permitting', 'Value-engineering stress tests', 'Guaranteed Maximum Price (GMP) contracts'],
    iconName: 'DraftingCompass',
    heroImage: IMAGES.blueprintPlan,
    specifications: [
      { label: 'Average Schedule Reduction', value: '22% Faster Than Design-Bid-Build' },
      { label: 'Change Order Rate', value: '< 0.4% Industry Lowest' },
      { label: 'BIM Model Level', value: 'LOD 500 As-Built Precision' }
    ],
    methodology: [
      { step: '01', title: 'Collaborative Concept LOD 200', detail: 'Architectural and structural engineering teams aligned with trade contractors.' },
      { step: '02', title: 'Early Equipment Procurement', detail: 'Ordering long-lead chillers, transformers, and steel prior to final CD signoff.' },
      { step: '03', title: 'Concurrent Field Execution', detail: 'Groundbreakings begin while superstructure detailing is finalized.' }
    ]
  },
  {
    id: 'data-center-infrastructure',
    code: 'SRV-105',
    title: 'Data Center & Tech Infrastructure',
    tagline: 'Hyperscale Facilities, Mission-Critical Power & Liquid Cooling',
    shortDescription: 'Ultra-secure, high-density data center campus construction engineered for 99.999% uptime and rapid megawatt deployment.',
    fullDescription: 'Titan Build Group builds mission-critical campuses for hyperscalers and AI infrastructure providers. We specialize in Tier IV redundancy, modular power skid installation, and direct-to-chip liquid cooling loops.',
    keyCapabilities: ['Tier III / Tier IV facility construction', 'Hyperscale megawatt delivery (100MW+ campuses)', 'Pre-fabricated modular power skids', 'EMF shielding & acoustic damping'],
    iconName: 'Cpu',
    heroImage: IMAGES.dataCenter,
    specifications: [
      { label: 'Power Density Handled', value: 'Up to 120 kW per Cabinet' },
      { label: 'PUE Target Achieved', value: '< 1.15 Ultra-Efficient' },
      { label: 'Redundancy Level', value: '2N + 1 Complete Fault Tolerance' }
    ],
    methodology: [
      { step: '01', title: 'Hardened Outer Shell', detail: 'Precast concrete tilt-up panels rated for 200mph wind and ballistic resistance.' },
      { step: '02', title: 'Sub-floor Power Duct Banks', detail: 'High-voltage underground feeder conduits encasement in reinforced concrete.' },
      { step: '03', title: 'Integrated Switchgear Testing', detail: 'Load bank testing at 110% rating for 72 continuous hours.' }
    ]
  },
  {
    id: 'healthcare-biomedical',
    code: 'SRV-106',
    title: 'Healthcare & Life Sciences',
    tagline: 'Level-1 Trauma Centers, Surgical Towers & BSL-4 Research Labs',
    shortDescription: 'State-of-the-art medical towers, cleanrooms, and linear accelerator vaults built within live operating hospital campuses.',
    fullDescription: 'Healthcare construction demands zero disruption to active patient care, strict infection control (ICRA IV), and precise vibration mitigation for sensitive medical imaging systems.',
    keyCapabilities: ['Infection Control Risk Assessment (ICRA Level IV)', 'Heavy concrete proton beam radiation vaults', 'Medical gas manifold systems (NFPA 99)', 'Vibration-isolated lab flooring'],
    iconName: 'Activity',
    heroImage: IMAGES.hospital,
    specifications: [
      { label: 'ICRA Containment Compliance', value: '100% Zero Air Contamination' },
      { label: 'Vault Concrete Density', value: '250 lbs/cu ft Heavy Barite' },
      { label: 'HVAC Air Changes', value: 'Up to 30 Air Changes/Hour' }
    ],
    methodology: [
      { step: '01', title: 'Antechamber Isolation Zones', detail: 'Negative air pressure HEPA filtration barriers around active work zones.' },
      { step: '02', title: 'Pre-fabricated Headwalls', detail: 'Offsite assembly of medical gas, emergency power, and data conduits.' },
      { step: '03', title: 'Vibration & Acoustic Scans', detail: 'Continuous laser monitoring during drilling near surgical suites.' }
    ]
  },
  {
    id: 'aviation-maritime',
    code: 'SRV-107',
    title: 'Aviation & Port Infrastructure',
    tagline: 'Terminal Expansion, Runway Paving & Deepwater Container Docks',
    shortDescription: 'Airport terminal modernizations, heavy-duty concrete runway construction, and deepwater maritime container berth developments.',
    fullDescription: 'Executing work inside active FAA airspace or busy international container ports requires micro-phased night shifts and specialized heavy airfield paving equipment.',
    keyCapabilities: ['FAA-compliant night work logistics', 'Concrete airfield paving (P-501 specs)', 'Sheet pile seawalls & marine dredging', 'Automated baggage handling superstructures'],
    iconName: 'Plane',
    heroImage: IMAGES.airport,
    specifications: [
      { label: 'Runway Flexural Strength', value: '750 PSI High-Early Concrete' },
      { label: 'Dock Crane Rail Capacity', value: '1,800 Tons Loading' },
      { label: 'FAA Safety Compliance', value: 'Zero Airside Incidents' }
    ],
    methodology: [
      { step: '01', title: 'Airside Security Operations', detail: 'Badged 24/7 security escort escorts for heavy haulers.' },
      { step: '02', title: 'Laser Slipform Paving', detail: 'Continuous 25-foot wide runway paving passes with automated dowel insertion.' },
      { step: '03', title: 'Marine Pile Driving', detail: 'High-frequency vibratory hammers driving 48-inch steel casing piles into harbor bed.' }
    ]
  },
  {
    id: 'renewable-energy-civil',
    code: 'SRV-108',
    title: 'Energy & Utility Infrastructure',
    tagline: 'Wind Turbine Pad Civil Works, Solar Arrays & High-Voltage Substations',
    shortDescription: 'Civil engineering and heavy foundations for utility-scale solar farms, wind turbine parks, and high-voltage transformer substations.',
    fullDescription: 'Supporting the energy transition, Titan Build Group delivers site civil preparation, deep mass foundations, and underground medium/high voltage transmission networks.',
    keyCapabilities: ['Wind turbine octagonal gravity foundations', 'Substation transformer slab pours', 'Trenching for 500kV underground cables', 'Site grading & environmental containment'],
    iconName: 'Zap',
    heroImage: IMAGES.solarPlant,
    specifications: [
      { label: 'Turbine Pad Concrete Vol', value: '800 cu yds Monolithic Pour/Pad' },
      { label: 'Rebar Density', value: '75 Tons Grade 60 per Base' },
      { label: 'Substation Voltage Handled', value: 'Up to 765kV EHV Systems' }
    ],
    methodology: [
      { step: '01', title: 'Mass Earthwork & Stabilization', detail: 'Lime and cement soil stabilization for heavy crane access tracks.' },
      { step: '02', title: 'Continuous Batching Pours', detail: 'Non-stop 12-hour continuous concrete pours per wind turbine base.' },
      { step: '03', title: 'Substation Transformer Setting', detail: 'Rigging 300-ton main power transformers onto post-cured pads.' }
    ]
  },
  {
    id: 'structural-renovation',
    code: 'SRV-109',
    title: 'Structural Renovation & Seismic',
    tagline: 'Retrofitting Historic Landmarks & Re-Engineering Structural Cores',
    shortDescription: 'Complex structural upgrades, load-bearing wall removals, foundation underpinning, and seismic friction damper retrofits.',
    fullDescription: 'Preserving architectural heritage while increasing structural capacity requires advanced shoring, micro-piling, and carbon-fiber wrapping.',
    keyCapabilities: ['Underpinning & jet grouting', 'Carbon Fiber Reinforced Polymer (CFRP) wrapping', 'Base isolation bearing installation', 'Internal structural core replacement'],
    iconName: 'Hammer',
    heroImage: IMAGES.steelWorkers,
    specifications: [
      { label: 'Load Capacity Boost', value: 'Up to 300% Structural Enhancement' },
      { label: 'Seismic Base Isolation', value: '95% Shear Force Absorption' },
      { label: 'Historic Facade Retention', value: 'Zero Deformity Steel Truss System' }
    ],
    methodology: [
      { step: '01', title: 'Hydraulic Needling & Shoring', detail: 'Transferring 800-ton vertical columns to temporary steel towers.' },
      { step: '02', title: 'Micro-Pile Drilling', detail: 'Drilling 8-inch high-capacity steel casing piles inside tight basement vaults.' },
      { step: '03', title: 'Seismic Friction Pendulum Setting', detail: 'Installing elastomeric bearings under structural columns.' }
    ]
  },
  {
    id: 'general-contracting',
    code: 'SRV-110',
    title: 'General Contracting & Procurement',
    tagline: 'Direct Self-Perform Trade Labor & Global Material Sourcing',
    shortDescription: 'Master trade execution, direct-hire labor teams, and direct procurement of structural steel, rebar, and MEP systems.',
    fullDescription: 'Titan Build Group self-performs over 45% of core trades—including earthwork, concrete, structural steel framing, and carpentry—giving us total control over quality and schedule.',
    keyCapabilities: ['Direct self-perform concrete & steel teams', 'Global steel mill procurement contracts', 'Union labor relations & safety command', 'Real-time daily field productivity analytics'],
    iconName: 'Briefcase',
    heroImage: IMAGES.craneSite,
    specifications: [
      { label: 'Self-Perform Capacity', value: '45% Internal Direct Trade Labor' },
      { label: 'Safety Compliance', value: '100% OSHA Certified Superintendents' },
      { label: 'Material Direct Sourcing', value: 'Direct Mill Buying Power' }
    ],
    methodology: [
      { step: '01', title: 'Trade Integration', detail: 'Direct supervision of trade teams with zero multi-tier subcontractor markup.' },
      { step: '02', title: 'Just-in-Time Material Staging', detail: 'Coordinating steel delivery directly from mills to job site cranes.' },
      { step: '03', title: 'Digital QA/QC Checklists', detail: 'Real-time tablet-based quality control sign-offs before every pour.' }
    ]
  },
  {
    id: 'project-management',
    code: 'SRV-111',
    title: 'Program & Project Management',
    tagline: 'Master Site Supervision, Risk Mitigation & Earned Value Analytics',
    shortDescription: 'Third-party construction oversight, schedule optimization, risk management, and owner representation for multi-billion dollar capital programs.',
    fullDescription: 'Providing owners and institutional investors with complete transparency, earned value management (EVM), and real-time site telemetry across complex multi-site builds.',
    keyCapabilities: ['CPM Schedule Critical Path Analysis', 'Independent Cost Estimating & Value Engineering', 'Risk Matrix Mitigation & Dispute Avoidance', 'Subcontractor Audit & Quality Oversight'],
    iconName: 'ShieldCheck',
    heroImage: IMAGES.blueprintPlan,
    specifications: [
      { label: 'Average Cost Variance', value: '< 0.5% Against Initial Baseline' },
      { label: 'Schedule Precision', value: 'Within 2 Days on 3-Year Cycles' },
      { label: 'Reporting Cadence', value: 'Real-Time Operational Telemetry' }
    ],
    methodology: [
      { step: '01', title: 'Baseline Schedule Stress Test', detail: 'Monte Carlo simulation on 10,000 schedule logic paths.' },
      { step: '02', title: 'Earned Value Tracking', detail: 'Weekly progress mapping against physical work completed.' },
      { step: '03', title: 'Independent Drone Analytics', detail: 'Photogrammetry aerial scans compared directly against BIM models.' }
    ]
  },
  {
    id: 'modular-construction',
    code: 'SRV-112',
    title: 'Modular & Offsite Fabrication',
    tagline: 'Factory Precision Building Components & Rapid Structural Assembly',
    shortDescription: 'Advanced offsite manufacturing of volumetric steel modules, MEP racks, and precast facade assemblies for rapid field erection.',
    fullDescription: 'Shift heavy work offsite into controlled factory conditions. We manufacture volumetric steel modules, bathroom pods, and heavy MEP super-skids.',
    keyCapabilities: ['Volumetric steel module fabrication', 'Pre-piped & wired MEP utility skids', 'Factory quality control testing', 'High-speed tower crane module setting'],
    iconName: 'Box',
    heroImage: IMAGES.industrialPlant,
    specifications: [
      { label: 'On-Site Labor Reduction', value: '40% Reduction in Field Trade Labor' },
      { label: 'Dimensional Precision', value: '±0.5mm Factory Tolerances' },
      { label: 'Assembly Speed', value: 'Up to 2 Floors Erected per Day' }
    ],
    methodology: [
      { step: '01', title: 'Offsite Assembly Line', detail: 'Robotic welding and fitting of 3D structural steel boxes.' },
      { step: '02', title: 'Factory Fit-Out & Testing', detail: 'Complete plumbing, electrical, and finish installation before shipping.' },
      { step: '03', title: 'Heavy Lift Crane Hookup', detail: 'Rigging and precision setting on self-aligning connector pins.' }
    ]
  },
  {
    id: 'environmental-civil',
    code: 'SRV-113',
    title: 'Civil Earthworks & Site Prep',
    tagline: 'Mass Excavation, Rock Blasting & Subgrade Engineering',
    shortDescription: 'Heavy earthwork, rock crushing, deep cut-and-fill grading, and environmental soil remediation for mega industrial developments.',
    fullDescription: 'Moving millions of cubic yards of rock and soil safely. Titan operates a massive fleet of CAT 390 excavators, D11 dozers, and GPS-guided scrapers.',
    keyCapabilities: ['3D GPS-guided grading & excavation', 'Controlled bench rock blasting', 'Soil stabilization & lime treatment', 'Environmental site remediation & capping'],
    iconName: 'Compass',
    heroImage: IMAGES.excavator,
    specifications: [
      { label: 'Earth Moving Capacity', value: '25,000 cu yds moved per day' },
      { label: 'GPS Grade Accuracy', value: 'Within 0.05 Feet' },
      { label: 'Fleet Machine Count', value: '280+ Heavy Earth Movers' }
    ],
    methodology: [
      { step: '01', title: 'LiDAR Topographical Survey', detail: 'Drone scanning generating high-density point clouds for cut/fill balance.' },
      { step: '02', title: 'Precision Blast Engineering', detail: 'Seismic-monitored delayed detonation charges breaking hard granite strata.' },
      { step: '03', title: 'High-Density Compaction', detail: 'Sheepsfoot rollers bringing subgrade to 98% Modified Proctor density.' }
    ]
  },
  {
    id: 'tunneling-subsurface',
    code: 'SRV-114',
    title: 'Subsurface & Tunnelling',
    tagline: 'Tunnel Boring Operations, Shaft Sinking & Deep Excavations',
    shortDescription: 'Deep subterranean engineering including pressurized slurry TBM drives, diaphragm walls, and subterranean utility caverns.',
    fullDescription: 'Pioneering underground space creation for water conveyance, rail transit, and utility vaults through challenging geology and high water tables.',
    keyCapabilities: ['Earth Pressure Balance (EPB) TBM operation', 'Diaphragm slurry wall installation', 'Ground freezing for water cutoff', 'Subterranean cavern rock bolting'],
    iconName: 'Layers',
    heroImage: IMAGES.tunnel,
    specifications: [
      { label: 'TBM Diameter Range', value: '18 Feet to 52 Feet' },
      { label: 'Depth Capabilities', value: 'Up to 350 Feet Below Grade' },
      { label: 'Water Cutoff Performance', value: '100% Impermeable Slurry Walls' }
    ],
    methodology: [
      { step: '01', title: 'Shaft Launching Caisson', detail: 'Constructing 100-foot diameter concrete launch shafts down to tunnel invert.' },
      { step: '02', title: 'Continuous Ring Segment Setting', detail: 'TBM erecting precast steel-reinforced concrete liner rings under pressure.' },
      { step: '03', title: 'Annular Grouting', detail: 'Injecting high-strength grout behind liner rings to lock geology.' }
    ]
  },
  {
    id: 'marine-port-construction',
    code: 'SRV-115',
    title: 'Marine & Port Facilities',
    tagline: 'Piling, Breakwaters, Deepwater Docks & Shipyard Superstructures',
    shortDescription: 'Heavily engineered waterborne construction including steel pile breakwaters, container berth caps, and shipyard drydock systems.',
    fullDescription: 'Engineered to withstand ocean storms and saltwater corrosion, our marine division operates specialized crane barges and tugboats for harbor infrastructure.',
    keyCapabilities: ['Waterborne pile driving barges', 'Precast concrete pier decks', 'Rubble-mound breakwaters', 'Cathodic protection against seawater corrosion'],
    iconName: 'Anchor',
    heroImage: IMAGES.portLogistics,
    specifications: [
      { label: 'Water Depth Work', value: 'Up to 120 Feet Deep' },
      { label: 'Marine Crane Capacity', value: '500 Ton Heavy Barge Crane' },
      { label: 'Corrosion Resistance Rating', value: 'Epoxy & Galvanized 75-Year Rating' }
    ],
    methodology: [
      { step: '01', title: 'GPS Underwater Bathymetry', detail: 'Sonar mapping of seafloor before dredging and rock dumping.' },
      { step: '02', title: 'Heavy Steel Pipe Driving', detail: 'Driving 60-inch diameter steel casing piles to refusal into rock bottom.' },
      { step: '03', title: 'Monolithic Deck Pouring', detail: 'Curing sulfate-resistant marine concrete deck slabs over water.' }
    ]
  }
];

// 12 INDUSTRIES
export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'commercial',
    code: 'IND-01',
    name: 'Commercial & Mixed-Use',
    description: 'Corporate headquarters, urban mixed-use towers, financial districts, and retail flagships built for dense urban environments.',
    heroImage: IMAGES.skyscraper,
    marketShare: '$1.4B Annual Volume',
    keyProjectsCount: 140,
    regulatoryStandards: ['IBC High-Rise Code', 'LEED Platinum', 'WELL Building Standard v2'],
    specializations: ['Post-Tension Towers', 'Unitized Glass Facades', 'Underground Multi-Tier Parking']
  },
  {
    id: 'healthcare',
    code: 'IND-02',
    name: 'Healthcare & Life Sciences',
    description: 'Acute care hospitals, surgical centers, proton beam therapy vaults, and pharmaceutical BSL-3 laboratory complexes.',
    heroImage: IMAGES.hospital,
    marketShare: '$920M Annual Volume',
    keyProjectsCount: 85,
    regulatoryStandards: ['OSHPD / HCAI Standards', 'NFPA 99 Healthcare', 'ISO 14644 Cleanroom'],
    specializations: ['ICRA IV Infection Containment', 'Radiation Vault Shielding', 'Vibrationdecoupled Floors']
  },
  {
    id: 'heavy-industrial',
    code: 'IND-03',
    name: 'Heavy Industrial & Energy',
    description: 'Petrochemical refineries, hydrogen generation plants, steel processing mills, and manufacturing plants.',
    heroImage: IMAGES.industrialPlant,
    marketShare: '$2.1B Annual Volume',
    keyProjectsCount: 95,
    regulatoryStandards: ['ASME Boiler Code', 'OSHA 1910.119 PSM', 'API 650 Storage Tanks'],
    specializations: ['Heavy Process Piping', 'High-Load Heavy Machinery Foundations', 'HAZMAT Containment']
  },
  {
    id: 'aviation-logistics',
    code: 'IND-04',
    name: 'Aviation & Logistics',
    description: 'International airport passenger terminals, automated cargo distribution hubs, air traffic towers, and airside taxiways.',
    heroImage: IMAGES.airport,
    marketShare: '$1.1B Annual Volume',
    keyProjectsCount: 62,
    regulatoryStandards: ['FAA AC 150 Airfield Specs', 'TSA Security Directives', 'IATA Terminal Standards'],
    specializations: ['Airside Heavy Concrete Paving', 'High-Speed Automated Baggage Vaults', 'Wide-Span Aircraft Hangars']
  },
  {
    id: 'data-centers',
    code: 'IND-05',
    name: 'Data Centers & Tech',
    description: 'Hyperscale cloud data campuses, edge computing vaults, and AI supercomputing facilities with high-density power distribution.',
    heroImage: IMAGES.dataCenter,
    marketShare: '$1.8B Annual Volume',
    keyProjectsCount: 50,
    regulatoryStandards: ['Uptime Institute Tier IV', 'TIA-942 Telecommunications', 'ISO 27001 Physical Security'],
    specializations: ['2N Power Redundancy', 'Direct Liquid Cooling Loops', 'Ballistic Shell Construction']
  },
  {
    id: 'infrastructure-civic',
    code: 'IND-06',
    name: 'Heavy Infrastructure & Transit',
    description: 'Highway interchanges, suspension bridges, subterranean rail tunnels, and municipal water treatment plants.',
    heroImage: IMAGES.bridge,
    marketShare: '$2.5B Annual Volume',
    keyProjectsCount: 110,
    regulatoryStandards: ['AASHTO Bridge Design', 'FHWA Safety Directives', 'EPA Clean Water Standards'],
    specializations: ['Precast Segmental Bridges', 'TBM Tunnel Drives', 'Mass Concrete River Piers']
  },
  {
    id: 'education-science',
    code: 'IND-07',
    name: 'Education & Research',
    description: 'University STEM research centers, university campuses, athletic stadiums, and specialized cleanroom research centers.',
    heroImage: IMAGES.blueprintPlan,
    marketShare: '$650M Annual Volume',
    keyProjectsCount: 78,
    regulatoryStandards: ['State University Construction Standards', 'SARA Seismic Codes', 'ADA Title III Compliance'],
    specializations: ['Acoustic Auditorium Design', 'Specialty Fume Hood Systems', 'Long-Span Roof Trusses']
  },
  {
    id: 'hospitality-resort',
    code: 'IND-08',
    name: 'Hospitality & Entertainment',
    description: 'Luxury high-rise resort towers, convention centers, sports arenas, and casino entertainment destinations.',
    heroImage: IMAGES.skyscraper,
    marketShare: '$480M Annual Volume',
    keyProjectsCount: 45,
    regulatoryStandards: ['NFPA 101 Life Safety', 'IBC Assembly Occupancy', 'Acoustic STC 60 Standards'],
    specializations: ['Custom Structural Atriums', 'Large Span Roof Cantilevers', 'High-End Finish Integration']
  },
  {
    id: 'residential-highrise',
    code: 'IND-09',
    name: 'High-Rise Residential',
    description: 'Ultra-high-density luxury residential skyscrapers, condominium towers, and urban housing developments.',
    heroImage: IMAGES.steelWorkers,
    marketShare: '$820M Annual Volume',
    keyProjectsCount: 90,
    regulatoryStandards: ['IBC Residential Code', 'Energy Star Commercial', 'Acoustic Sound Transmission Standards'],
    specializations: ['Tunnel Form Concrete Casting', 'Balcony Thermal Break System', 'High-Speed Elevators']
  },
  {
    id: 'energy-utilities',
    code: 'IND-10',
    name: 'Energy & Renewables',
    description: 'Wind turbine farms, utility solar plants, hydroelectric dam upgrades, and nuclear auxiliary facilities.',
    heroImage: IMAGES.solarPlant,
    marketShare: '$1.2B Annual Volume',
    keyProjectsCount: 55,
    regulatoryStandards: ['NERC CIP Compliance', 'FERC Hydro Dam Codes', 'IEEE Substation Standards'],
    specializations: ['Mass Turbine Gravity Foundations', 'Underground HV Cable Duct Banks', 'Substation Enclosures']
  },
  {
    id: 'marine-ports',
    code: 'IND-11',
    name: 'Marine & Port Operations',
    description: 'Deepwater container quays, naval shipyard drydocks, harbor breakwaters, and offshore platform fabrication yards.',
    heroImage: IMAGES.portLogistics,
    marketShare: '$740M Annual Volume',
    keyProjectsCount: 38,
    regulatoryStandards: ['US Army Corps of Engineers Specs', 'MARAD Port Security', 'AISC Marine Steel Standards'],
    specializations: ['Underwater Pile Driving', 'Heavy Crane Runway Slabs', 'Sheet Pile Retaining Walls']
  },
  {
    id: 'government-civic',
    code: 'IND-12',
    name: 'Government & Defense',
    description: 'Federal courthouses, military command centers, secure embassy compounds, and emergency operations centers.',
    heroImage: IMAGES.craneSite,
    marketShare: '$950M Annual Volume',
    keyProjectsCount: 70,
    regulatoryStandards: ['UFC Blast Standards', 'SCIF Security Specs (ICD 705)', 'FAR Federal Compliance'],
    specializations: ['Progressive Collapse Resistance', 'SCIF Enclosure Shielding', 'Anti-Ram Perimeter Barriers']
  }
];

// GENERATE 60 REALISTIC PROJECTS
export const PROJECTS_DATA: Project[] = Array.from({ length: 60 }).map((_, i) => {
  const categories: IndustryCategory[] = [
    'Commercial', 'Infrastructure', 'Industrial', 'Healthcare', 'Aviation & Logistics',
    'Data Centers', 'Education', 'Energy & Utilities', 'Marine & Rail', 'Government'
  ];
  const statuses: ('Under Construction' | 'Completed' | 'Pre-Construction')[] = [
    'Completed', 'Under Construction', 'Completed', 'Completed', 'Pre-Construction'
  ];
  const locations = [
    'Houston, TX', 'Chicago, IL', 'Seattle, WA', 'Dallas, TX', 'Los Angeles, CA',
    'Atlanta, GA', 'New York, NY', 'Miami, FL', 'Denver, CO', 'Phoenix, AZ'
  ];

  const category = categories[i % categories.length];
  const status = statuses[i % statuses.length];
  const location = locations[i % locations.length];
  const idNum = 9000 + i + 1;
  const code = `PRJ-${idNum}`;

  const titles = [
    'Apex Financial Tower & Skydeck', 'Titan Gulf Coast Refinery Modernization', 'Metropolitan Cable-Stayed Bridge',
    'HyperScale Alpha AI Data Campus', 'St. Jude Children Research Surgical Pavilion', 'O’Hare Terminal 5 Western Concourse',
    'Cascade Hydroelectric Dam Substructure', 'PacifiCorp Utility Solar Array & Substation', 'Port of Houston Container Berth 4',
    'Chicago Loop High-Rise Residential Hub', 'Piedmont Advanced Automotive Assembly Gigafactory', 'Denver International Runway Extension',
    'Embry-Riddle Aerospace Science Center', 'Midwest Regional Level-1 Medical Complex', 'Seattle Maritime Deepwater Quay',
    'Texas High-Speed Rail Viaduct Sector 2', 'Great Lakes Grain Terminal Processing Plant', 'Atlanta Metro Logistics Super-Hub',
    'Phoenix Microchip Manufacturing Cleanroom', 'San Francisco Seismic Retrofit Landmark Building'
  ];

  const title = `${titles[i % titles.length]} ${i >= titles.length ? `Phase ${Math.floor(i / titles.length) + 1}` : ''}`;
  
  const budgetRanges = ['$85M - $120M', '$240M - $310M', '$450M - $580M', '$1.2B - $1.5B', '$65M - $95M', '$320M - $400M'];
  const sqft = [(250000 + i * 45000).toLocaleString(), (500000 + i * 80000).toLocaleString(), (1200000 + i * 150000).toLocaleString()];
  
  const projectImages = [
    IMAGES.skyscraper, IMAGES.bridge, IMAGES.industrialPlant, IMAGES.craneSite,
    IMAGES.dataCenter, IMAGES.hospital, IMAGES.airport, IMAGES.steelWorkers,
    IMAGES.blueprintPlan, IMAGES.heavyMachinery, IMAGES.excavator, IMAGES.tunnel,
    IMAGES.portLogistics, IMAGES.solarPlant
  ];

  return {
    id: `project-${idNum}`,
    code,
    title,
    subtitle: `Engineered structural execution in ${location}`,
    client: i % 2 === 0 ? 'State Infrastructure Authority' : 'Global Institutional Developers Corp',
    category,
    status,
    year: 2022 + (i % 5),
    location,
    squareFeet: `${sqft[i % sqft.length]} Sq Ft`,
    budgetRange: budgetRanges[i % budgetRanges.length],
    steelWeightTons: `${(3500 + i * 420).toLocaleString()} Tons`,
    concreteVolumeYards: `${(18000 + i * 2100).toLocaleString()} cu yds`,
    completionDate: status === 'Completed' ? `Q${(i % 4) + 1} ${2022 + (i % 4)}` : `Est. Q${(i % 4) + 1} 2026`,
    heroImage: projectImages[i % projectImages.length],
    gallery: [
      projectImages[i % projectImages.length],
      projectImages[(i + 1) % projectImages.length],
      projectImages[(i + 2) % projectImages.length],
      projectImages[(i + 3) % projectImages.length]
    ],
    beforeImage: projectImages[(i + 4) % projectImages.length],
    afterImage: projectImages[i % projectImages.length],
    description: `A landmark ${category.toLowerCase()} engineering endeavor featuring high-density concrete poured foundations, heavy structural steel trusses, and state-of-the-art building management systems. Built with zero lost-time incidents over a 36-month timeline.`,
    overview: `Titan Build Group served as Lead General Contractor and Structural Engineer for this ${budgetRanges[i % budgetRanges.length]} flagship facility. The scope involved deep caisson foundations, erection of over ${(3500 + i * 420).toLocaleString()} tons of structural steel, and precision installation of unitized high-performance enclosure panels.`,
    challenges: [
      'High wind loading constraints requiring continuous real-time crane anemometer tracking.',
      'Extremely tight urban footprint with zero laydown space requiring just-in-time material delivery.',
      'Deep excavation adjacent to active subterranean mass transit rail tunnels.'
    ],
    solutions: [
      'Engineered custom modular offsite steel assemblies lifted during scheduled night shifts.',
      'Deployed automated 3D laser scanners to verify steel member placement within ±1.5mm.',
      'Utilized secant pile slurry walls anchored with deep soil tie-backs to stabilize surrounding earth.'
    ],
    materials: [
      { name: 'Structural Steel', spec: 'ASTM A992 Grade 50 Heavy Beams' },
      { name: 'Self-Consolidating Concrete', spec: '10,000 PSI High-Strength Mix' },
      { name: 'Unitized Facade', spec: 'Triple-Pane Low-E Argon Filled Glass' },
      { name: 'Rebar Reinforcement', spec: 'Grade 75 High-Yield Epoxy Coated' }
    ],
    timeline: [
      { phase: 'Phase 1: Excavation & Caissons', duration: 'Months 1-6', description: 'Deep foundation drilling and mass soil removal', status: 'Complete' },
      { phase: 'Phase 2: Core Concrete Pours', duration: 'Months 7-14', description: 'Self-climbing hydraulic core formwork climbing 3 days/floor', status: 'Complete' },
      { phase: 'Phase 3: Superstructure Steel Erection', duration: 'Months 15-24', description: 'Heavy crane lifts of structural steel framing and floor decks', status: status === 'Completed' ? 'Complete' : 'In Progress' },
      { phase: 'Phase 4: Enclosure & MEP Rough-In', duration: 'Months 25-32', description: 'Curtain wall panel hoisting and major mechanical skid rig-in', status: status === 'Completed' ? 'Complete' : 'Upcoming' },
      { phase: 'Phase 5: Commissioning & Handover', duration: 'Months 33-36', description: 'Final air balancing, fire life safety testing, and certificate of occupancy', status: status === 'Completed' ? 'Complete' : 'Upcoming' }
    ],
    results: [
      'Delivered 2 weeks ahead of the contractual baseline schedule.',
      'Achieved 1,200,000 man-hours worked with zero Lost Time Injuries (LTI).',
      'Attained LEED Platinum certification rating and 30% reduction in operating energy requirements.'
    ],
    testimonial: {
      quote: 'Titan Build Group executed one of the most technically demanding structural projects in our state’s history. Their self-perform concrete crew and engineering rigor were remarkable.',
      author: 'Marcus Vance',
      role: 'Chief Infrastructure Officer',
      organization: 'Metropolitan Transit & Regional Development'
    }
  };
});

// 20 CASE STUDIES
export const CASE_STUDIES_DATA: CaseStudy[] = Array.from({ length: 20 }).map((_, i) => {
  const sectors: IndustryCategory[] = ['Commercial', 'Infrastructure', 'Industrial', 'Healthcare', 'Data Centers'];
  const titles = [
    'Deep Substructure Excavation Adjacent to Live Subways',
    '30,000-Ton Structural Steel Erection in 90 Days',
    'Seismic Retrofitting of 1920s Landmark Steel Tower',
    'Zero-Downtime Cleanroom Construction inside Active Biotech Campus',
    'Cable-Stayed Bridge Deck Launching over Major Shipping Channel',
    '100 Megawatt AI Data Center Fast-Track Delivery in 11 Months',
    'Deepwater Berth Caisson Drilling in Heavy Saltwater Currents',
    'Wind Turbine Foundation Mass Concrete Pours in Sub-Zero Weather',
    'Airfield Paving Operations with Zero Aircraft Disruption',
    'Modular Super-Skid Rigging in High-Density Refinery Plant'
  ];

  const title = titles[i % titles.length] + (i >= titles.length ? ` (Part II)` : '');

  return {
    id: `cs-${100 + i}`,
    code: `CS-${100 + i}`,
    title,
    client: `National Heavy Industry Partner ${i + 1}`,
    sector: sectors[i % sectors.length],
    date: `202${3 + (i % 3)}-0${(i % 9) + 1}-15`,
    summary: 'An engineering whitepaper detailing how Titan Build Group deployed custom structural techniques, real-time drone telemetry, and advanced thermal concrete curing to overcome extreme technical site constraints.',
    heroImage: [IMAGES.skyscraper, IMAGES.bridge, IMAGES.industrialPlant, IMAGES.dataCenter, IMAGES.tunnel][i % 5],
    metrics: [
      { label: 'Schedule Accelerated', value: '35 Days Ahead', highlight: true },
      { label: 'Total Steel Weight', value: '18,500 Tons' },
      { label: 'Cost Savings Via VE', value: '$14.2M' },
      { label: 'Safety Compliance', value: '100% OSHA VPP' }
    ],
    engineeringBreakdown: 'The project required deep foundation caissons drilled into dense shale bedrock through high-pressure water tables. Our geotechnical team deployed polymer slurry stabilization while continuous batching trucks supplied high-density sulphate-resistant concrete.',
    innovations: [
      'Custom 3D BIM clash detection resolving 1,400+ MEP structural conflicts pre-fabrication.',
      'Real-time strain gauge sensors embedded in post-tensioned cable anchors.',
      'Automated hydraulic climbing formwork operating at 3-day floor cycle speed.'
    ],
    environmentalSavings: '1,800 Tons of CO2 offset by using ground granulated blast-furnace slag (GGBS) concrete mixes.'
  };
});

// 25 NEWS ARTICLES
export const NEWS_DATA: NewsArticle[] = Array.from({ length: 25 }).map((_, i) => {
  const categories: ('Press Release' | 'Engineering Whitepaper' | 'Safety Milestone' | 'Fleet Acquisition' | 'Corporate')[] = [
    'Press Release', 'Safety Milestone', 'Engineering Whitepaper', 'Fleet Acquisition', 'Corporate'
  ];
  
  const headlines = [
    'Titan Build Group Awarded $680M Deepwater Port Expansion Contract',
    'Company Surpasses 1,400 Consecutive Days Without a Lost Time Incident',
    'Acquisition of Four 500-Ton Liebherr LTM 1500 Mobile Heavy Cranes',
    'Whitepaper: Structural Mitigation of Thermal Expansion in Mega-Steel Frames',
    'Titan Build Group Named Top National Infrastructure Contractor of the Year',
    'Breakthrough in Low-Carbon Concrete Mix Design Achieves 12,000 PSI Strength',
    'Groundbreaking Ceremony for 120MW Hyperscale Data Center Campus',
    'VDC Team Deploys Autonomous LiDAR Robotics for Daily Field QA/QC',
    'Titan Engineering Team Completes Bridge Deck Erection 3 Weeks Ahead of Schedule',
    'Safety Excellence: OSHA VPP Star Certification Renewed Across All Gulf Coast Sites'
  ];

  return {
    id: `news-${200 + i}`,
    code: `NWS-${200 + i}`,
    title: headlines[i % headlines.length] + (i >= headlines.length ? ` - Regional Update` : ''),
    category: categories[i % categories.length],
    date: `2026-0${(i % 6) + 1}-0${(i % 25) + 1}`,
    readTime: `${4 + (i % 5)} Min Read`,
    summary: 'Official release from Titan Build Group regarding operational progress, engineering innovations, major contract awards, and industry safety standards.',
    content: [
      'TITAN BUILD GROUP HEADQUARTERS — Titan Build Group today announced significant operational achievements reflecting our commitment to structural precision, technical excellence, and zero-compromise safety.',
      'Through strategic investment in heavy machinery, self-performing trade crews, and advanced BIM-to-field automation, our teams continue setting benchmark milestones across major infrastructure, commercial, and industrial contracts nationwide.',
      '“Our strength lies in technical execution and engineering discipline,” stated Chief Executive Officer Arthur Vance. “As infrastructure demands reach unprecedented scale, Titan remains the standard for reliable execution under extreme technical conditions.”'
    ],
    image: [IMAGES.craneSite, IMAGES.steelWorkers, IMAGES.heavyMachinery, IMAGES.dataCenter, IMAGES.blueprintPlan][i % 5],
    author: 'Titan Communications Division'
  };
});

// 50 TEAM MEMBERS
export const TEAM_DATA: TeamMember[] = Array.from({ length: 50 }).map((_, i) => {
  const departments: ('Executive Leadership' | 'Structural Engineering' | 'Project Management' | 'Safety & Compliance' | 'VDC & BIM Operations')[] = [
    'Executive Leadership', 'Structural Engineering', 'Project Management', 'Safety & Compliance', 'VDC & BIM Operations'
  ];

  const names = [
    'Arthur Vance', 'Evelyn Thorne', 'Marcus Sterling', 'David Kowalski', 'Elena Rostova',
    'Garrett O’Connor', 'Sarah Jenkins', 'Carlos Mendez', 'Raymond Hughes', 'Dr. Alistair Finch',
    'Siddharth Patel', 'Jessica Zhao', 'Viktor Lindqvist', 'Nadia Al-Mansoor', 'Brandon Miller',
    'Teresa Rossi', 'Dmitri Volkov', 'Hannah Schmidt', 'Lamar Washington', 'Chloe Dubois'
  ];

  const roles = [
    'Chief Executive Officer', 'Chief Structural Engineer', 'VP of Infrastructure Operations', 'Senior Project Director', 'Director of Safety & Compliance',
    'Principal Geotechnical Engineer', 'VDC / BIM Operations Director', 'Chief Superintendent', 'Heavy Equipment Fleet Manager', 'Lead Bridge Engineer'
  ];

  const locations = ['Houston HQ', 'Chicago Regional Office', 'Seattle Division', 'Dallas Operations', 'Los Angeles Site Command'];

  const name = names[i % names.length] + (i >= names.length ? ` II` : '');

  return {
    id: `team-${300 + i}`,
    code: `EMP-${300 + i}`,
    name,
    role: roles[i % roles.length],
    department: departments[i % departments.length],
    experienceYears: 12 + (i % 25),
    certifications: ['PE Structural', 'PMP', 'OSHA 30-Hour', 'LEED AP BD+C', 'DBIA Fellow'].slice(0, 2 + (i % 3)),
    location: locations[i % locations.length],
    bio: `With over ${12 + (i % 25)} years of experience in heavy civil and commercial construction, ${name} has overseen multi-hundred-million dollar projects, specializing in high-load foundations, complex steel framing, and rigorous safety management.`,
    keyProjects: [`PRJ-${9001 + (i % 30)}`, `PRJ-${9002 + (i % 30)}`],
    image: [
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop'
    ][i % 8]
  };
});

// EQUIPMENT FLEET
export const EQUIPMENT_DATA: EquipmentItem[] = [
  {
    id: 'eq-01',
    code: 'EQ-LIEB-850',
    name: 'Liebherr 850 EC-B 80 Litronic Tower Crane',
    model: '850 EC-B 80',
    category: 'Tower Cranes',
    capacity: '80.0 Metric Tons (176,370 lbs)',
    powerHP: '110 kW Electric Drive',
    operatingWeight: '240,000 lbs',
    status: 'Deployed',
    location: 'PRJ-9001 Apex Financial Tower Site',
    image: IMAGES.craneSite,
    specs: [
      { label: 'Max Radius Jib Length', value: '278 Feet (85 Meters)' },
      { label: 'Hook Height Freestanding', value: '312 Feet' },
      { label: 'Max Lifting Speed', value: '420 ft/min' },
      { label: 'Wind Tolerance Operating', value: 'Up to 45 mph' }
    ]
  },
  {
    id: 'eq-02',
    code: 'EQ-CAT-390F',
    name: 'Caterpillar 390F L Heavy Hydraulic Excavator',
    model: 'CAT 390F L',
    category: 'Earthmoving & Excavation',
    capacity: '7.8 cu yd Heavy Rock Bucket',
    powerHP: '524 HP CAT C18 ACERT',
    operatingWeight: '190,200 lbs',
    status: 'Deployed',
    location: 'PRJ-9003 Metropolitan Cable Bridge Site',
    image: IMAGES.excavator,
    specs: [
      { label: 'Max Digging Depth', value: '31 Feet 8 Inches' },
      { label: 'Max Reach at Ground Level', value: '48 Feet' },
      { label: 'Bucket Digging Force', value: '108,000 lbf' },
      { label: 'GPS Grade Control', value: 'CAT Grade 3D Integrated' }
    ]
  },
  {
    id: 'eq-03',
    code: 'EQ-PUTZ-63',
    name: 'Putzmeister BSF 63-5 Truck-Mounted Concrete Pump',
    model: 'BSF 63-5.16 HLS',
    category: 'Concrete & Pumping',
    capacity: '260 cu yds / Hour Output',
    powerHP: '500 HP Mack Heavy Chassis',
    operatingWeight: '118,000 lbs',
    status: 'Available',
    location: 'Houston Heavy Yard #2',
    image: IMAGES.heavyMachinery,
    specs: [
      { label: 'Vertical Reach Boom', value: '202 Feet (62.6m)' },
      { label: 'Horizontal Reach', value: '187 Feet' },
      { label: 'Pumping Pressure Max', value: '1,230 PSI' },
      { label: 'Outrigger Spread', value: '41 Feet X-Style' }
    ]
  },
  {
    id: 'eq-04',
    code: 'EQ-HERREN-TBM',
    name: 'Herrenknecht Slurry Shield Tunnel Boring Machine',
    model: 'S-942 Earth Pressure Balance',
    category: 'Tunnelling & Foundation',
    capacity: '32-Foot Diameter Tunnel Bore',
    powerHP: '4,800 kW Total Cutterhead Power',
    operatingWeight: '2,400 Metric Tons',
    status: 'Deployed',
    location: 'PRJ-9004 Transit Substation Drive',
    image: IMAGES.tunnel,
    specs: [
      { label: 'Cutterhead Torque', value: '18,500 kNm' },
      { label: 'Thrust Force Max', value: '125,000 kN' },
      { label: 'Segment Erector Torque', value: '450 kNm' },
      { label: 'Slurry Pressure Rating', value: '8.5 Bar' }
    ]
  },
  {
    id: 'eq-05',
    code: 'EQ-GOLD-16AX',
    name: 'Goldhofer PST/SL-E 16-Axle Heavy Transporter',
    model: 'PST/SL-E 16',
    category: 'Heavy Transport',
    capacity: '720 Tons Payload Capacity',
    powerHP: '490 HP Power Pack Unit',
    operatingWeight: '145,000 lbs Unladen',
    status: 'Scheduled Maintenance',
    location: 'Dallas Rigging Operations Hub',
    image: IMAGES.industrialPlant,
    specs: [
      { label: 'Axle Lines Count', value: '16 Independent Hydraulic Lines' },
      { label: 'Steering Angle', value: '±135° Hydraulic Multi-Way' },
      { label: 'Deck Elevation Stroke', value: '24 Inches Hydraulic Lift' },
      { label: 'Wireless Remote Control', value: 'Proportional Radio Command' }
    ]
  }
];

// FAQS
export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'Bidding & Proposals',
    question: 'What is Titan Build Group’s typical contract delivery structure for mega projects?',
    answer: 'We execute contracts under Design-Build (DB), Guaranteed Maximum Price (GMP), Construction Management at Risk (CMAR), and traditional Lump Sum General Contracting. Our preferred model is Design-Build with early trade involvement to lock in schedule and pricing certainty.'
  },
  {
    id: 'faq-02',
    category: 'Safety & EMR',
    question: 'What is Titan Build Group’s current Experience Modification Rate (EMR)?',
    answer: 'Titan Build Group maintains an industry-leading EMR safety score of 0.54 (compared to the national average of 1.0). Over 99% of our site operations comply strictly with OSHA VPP Star regulations, backed by full-time safety superintendents on every shift.'
  },
  {
    id: 'faq-03',
    category: 'BIM & VDC',
    question: 'Does Titan Build Group self-perform BIM 4D/5D modeling and virtual coordination?',
    answer: 'Yes. Our in-house Virtual Design and Construction (VDC) department develops LOD 500 BIM models integrated directly with Primavera P6 schedules (4D) and cost estimating (5D). We utilize autonomous LiDAR drone scans to perform weekly spatial clash verification against as-built progress.'
  },
  {
    id: 'faq-04',
    category: 'Insurance & Bonding',
    question: 'What is Titan Build Group’s bonding capacity?',
    answer: 'Titan Build Group possesses a single-project bonding capacity of $1.5 Billion and an aggregate bonding capacity exceeding $4.0 Billion, backed by Treasury-listed A+ rated surety partners.'
  },
  {
    id: 'faq-05',
    category: 'General Operations',
    question: 'What percentage of core construction trades does Titan self-perform?',
    answer: 'We self-perform approximately 45% of critical path trades, including mass excavation, high-strength concrete foundation pouring, structural steel framing, heavy rigging, and rough carpentry. Self-performing key trades allows us to maintain strict schedule velocity and uncompromised craftsmanship.'
  }
];

// CAREERS
export const CAREERS_DATA: CareerPosting[] = [
  {
    id: 'job-01',
    code: 'JOB-901',
    title: 'Senior Structural Project Director',
    department: 'Infrastructure Operations',
    location: 'Houston, TX / Field Site',
    type: 'Full-time',
    experience: '15+ Years Heavy Civil / Steel',
    summary: 'Lead a $400M+ high-rise corporate core & shell project team. Accountable for site safety, budget variance, P6 critical path schedules, and client interface.',
    responsibilities: [
      'Manage all site superintendents, project engineers, and trade contractors.',
      'Maintain overall project budget variance within <0.5% of baseline GMP.',
      'Drive zero-incident safety culture across multi-shift site workforce.',
      'Lead monthly executive earned value management (EVM) reviews.'
    ],
    requirements: [
      'B.S. in Civil / Structural Engineering or Construction Management.',
      'P.E. license or PMP certification required.',
      'Proven track record delivering $200M+ structural projects.',
      'Expertise in Primavera P6, BIM 360, and Procore.'
    ]
  },
  {
    id: 'job-02',
    code: 'JOB-902',
    title: 'Lead VDC / BIM Spatial Coordinator',
    department: 'VDC Engineering',
    location: 'Chicago, IL or Remote Hybrid',
    type: 'Full-time',
    experience: '7+ Years LOD 400/500 BIM',
    summary: 'Manage spatial clash resolution, drone point cloud alignment, and 4D P6 schedule animation for major industrial and data center campus builds.',
    responsibilities: [
      'Construct LOD 500 federated models in Navisworks and Revit.',
      'Coordinate weekly 3D clash detection sessions with trade engineers.',
      'Process LiDAR drone scans and overlay against design models.'
    ],
    requirements: [
      'B.S. in Architectural Engineering or Computer Science.',
      'Mastery of Autodesk Revit, Navisworks Manage, Synchro 4D.',
      'FAA Part 107 Commercial Drone Pilot License preferred.'
    ]
  },
  {
    id: 'job-03',
    code: 'JOB-903',
    title: 'Chief Safety Superintendent (OSHA VPP)',
    department: 'Safety & Environmental',
    location: 'Seattle, WA / Field Site',
    type: 'Full-time',
    experience: '10+ Years Heavy Industrial Safety',
    summary: 'Enforce site safety protocols, conduct daily hazard assessments, lead crane rigging inspection audits, and maintain zero-LTI safety records.',
    responsibilities: [
      'Conduct daily site safety walks and issue instant stop-work corrections if needed.',
      'Lead incident root cause analysis (RCA) and OSHA reporting.',
      'Manage site ICRA and environmental dust/water containment.'
    ],
    requirements: [
      'Certified Safety Professional (CSP) or Construction Health and Safety Technician (CHST).',
      'OSHA 500 Authorized Trainer certification.',
      '10+ years experience on high-rise or heavy industrial job sites.'
    ]
  }
];
