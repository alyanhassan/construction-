export type ProjectStatus = 'Under Construction' | 'Completed' | 'Pre-Construction';

export type IndustryCategory = 
  | 'Commercial' 
  | 'Healthcare' 
  | 'Education' 
  | 'Industrial' 
  | 'Hospitality' 
  | 'Residential' 
  | 'Government' 
  | 'Infrastructure'
  | 'Aviation & Logistics'
  | 'Energy & Utilities'
  | 'Data Centers'
  | 'Marine & Rail';

export interface Project {
  id: string;
  code: string; // e.g. "PRJ-9042"
  title: string;
  subtitle: string;
  client: string;
  category: IndustryCategory;
  status: ProjectStatus;
  year: number;
  location: string;
  squareFeet: string;
  budgetRange: string;
  steelWeightTons?: string;
  concreteVolumeYards?: string;
  completionDate: string;
  heroImage: string;
  gallery: string[];
  beforeImage?: string;
  afterImage?: string;
  blueprintUrl?: string;
  description: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  materials: { name: string; spec: string }[];
  timeline: { phase: string; duration: string; description: string; status: 'Complete' | 'In Progress' | 'Upcoming' }[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    organization: string;
  };
}

export interface Service {
  id: string;
  code: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  keyCapabilities: string[];
  iconName: string;
  heroImage: string;
  specifications: { label: string; value: string }[];
  methodology: { step: string; title: string; detail: string }[];
}

export interface Industry {
  id: string;
  code: string;
  name: string;
  description: string;
  heroImage: string;
  marketShare: string;
  keyProjectsCount: number;
  regulatoryStandards: string[];
  specializations: string[];
}

export interface EquipmentItem {
  id: string;
  code: string;
  name: string;
  model: string;
  category: 'Tower Cranes' | 'Earthmoving & Excavation' | 'Concrete & Pumping' | 'Tunnelling & Foundation' | 'Heavy Transport';
  capacity: string;
  powerHP: string;
  operatingWeight: string;
  status: 'Deployed' | 'Available' | 'Scheduled Maintenance';
  location: string;
  image: string;
  specs: { label: string; value: string }[];
}

export interface TeamMember {
  id: string;
  code: string;
  name: string;
  role: string;
  department: 'Executive Leadership' | 'Structural Engineering' | 'Project Management' | 'Safety & Compliance' | 'VDC & BIM Operations';
  experienceYears: number;
  certifications: string[];
  location: string;
  bio: string;
  keyProjects: string[];
  image: string;
}

export interface CaseStudy {
  id: string;
  code: string;
  title: string;
  client: string;
  sector: IndustryCategory;
  date: string;
  summary: string;
  heroImage: string;
  metrics: { label: string; value: string; highlight?: boolean }[];
  engineeringBreakdown: string;
  innovations: string[];
  environmentalSavings: string;
  blueprintGraphicUrl?: string;
}

export interface NewsArticle {
  id: string;
  code: string;
  title: string;
  category: 'Press Release' | 'Engineering Whitepaper' | 'Safety Milestone' | 'Fleet Acquisition' | 'Corporate';
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  author: string;
}

export interface CareerPosting {
  id: string;
  code: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Rotational';
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export interface ProposalData {
  projectType: string;
  estimatedBudget: string;
  targetTimeline: string;
  siteLocation: string;
  estimatedSquareFeet: string;
  scopeDescription: string;
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  blueprintsAttached?: string;
}

export interface FAQItem {
  id: string;
  category: 'General Operations' | 'BIM & VDC' | 'Safety & EMR' | 'Bidding & Proposals' | 'Insurance & Bonding';
  question: string;
  answer: string;
}
