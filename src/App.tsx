import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BlueprintLoader } from './components/BlueprintLoader';
import { CADOverlay } from './components/CADOverlay';

import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailsPage } from './pages/ServiceDetailsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { EquipmentPage } from './pages/EquipmentPage';
import { SafetyPage } from './pages/SafetyPage';
import { ProcessPage } from './pages/ProcessPage';
import { TeamPage } from './pages/TeamPage';
import { CareersPage } from './pages/CareersPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { RequestProposalPage } from './pages/RequestProposalPage';
import { FAQPage } from './pages/FAQPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [selectedParam, setSelectedParam] = useState<string | undefined>(undefined);
  const [cadModeActive, setCadModeActive] = useState(false);

  // Smooth scroll to top on navigation view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedParam]);

  const handleNavigate = (view: string, param?: string) => {
    setCurrentView(view);
    setSelectedParam(param);
  };

  const toggleCadMode = () => {
    setCadModeActive(!cadModeActive);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#E5E7EB] font-sans antialiased selection:bg-[#FBBF24] selection:text-[#111111]">
      
      {/* Blueprint Loading Experience */}
      {loading && (
        <BlueprintLoader onComplete={() => setLoading(false)} />
      )}

      {/* CAD Overlay Crosshairs */}
      <CADOverlay active={cadModeActive} />

      {/* Main App Layout */}
      {!loading && (
        <div className="flex flex-col min-h-screen">
          
          {/* Header */}
          <Header 
            currentView={currentView}
            onNavigate={handleNavigate}
            cadModeActive={cadModeActive}
            onToggleCadMode={toggleCadMode}
          />

          {/* Main View Switcher */}
          <main className="flex-1">
            {currentView === 'home' && (
              <HomePage onNavigate={handleNavigate} />
            )}

            {currentView === 'projects' && (
              <ProjectsPage 
                initialFilter={selectedParam} 
                onNavigate={handleNavigate} 
              />
            )}

            {currentView === 'project-details' && (
              <ProjectDetailsPage 
                projectId={selectedParam} 
                onNavigate={handleNavigate} 
              />
            )}

            {currentView === 'services' && (
              <ServicesPage onNavigate={handleNavigate} />
            )}

            {currentView === 'service-details' && (
              <ServiceDetailsPage 
                serviceId={selectedParam} 
                onNavigate={handleNavigate} 
              />
            )}

            {currentView === 'industries' && (
              <IndustriesPage onNavigate={handleNavigate} />
            )}

            {currentView === 'equipment' && (
              <EquipmentPage onNavigate={handleNavigate} />
            )}

            {currentView === 'safety' && (
              <SafetyPage onNavigate={handleNavigate} />
            )}

            {currentView === 'process' && (
              <ProcessPage onNavigate={handleNavigate} />
            )}

            {currentView === 'team' && (
              <TeamPage onNavigate={handleNavigate} />
            )}

            {currentView === 'careers' && (
              <CareersPage onNavigate={handleNavigate} />
            )}

            {currentView === 'case-studies' && (
              <CaseStudiesPage onNavigate={handleNavigate} />
            )}

            {currentView === 'news' && (
              <NewsPage onNavigate={handleNavigate} />
            )}

            {currentView === 'contact' && (
              <ContactPage onNavigate={handleNavigate} />
            )}

            {currentView === 'request-proposal' && (
              <RequestProposalPage onNavigate={handleNavigate} />
            )}

            {currentView === 'faq' && (
              <FAQPage onNavigate={handleNavigate} />
            )}

            {/* Fallback 404 */}
            {!['home', 'projects', 'project-details', 'services', 'service-details', 'industries', 'equipment', 'safety', 'process', 'team', 'careers', 'case-studies', 'news', 'contact', 'request-proposal', 'faq'].includes(currentView) && (
              <NotFoundPage onNavigate={handleNavigate} />
            )}
          </main>

          {/* Operations Center Style Footer */}
          <Footer onNavigate={handleNavigate} />

        </div>
      )}

    </div>
  );
}
