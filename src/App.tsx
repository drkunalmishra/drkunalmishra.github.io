import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StartupBlueprint } from './components/StartupBlueprint';
import { CompetenciesChart } from './components/CompetenciesChart';
import { ResearchEconometrics } from './components/ResearchEconometrics';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { AcademicJourney } from './components/AcademicJourney';
import { Certifications } from './components/Certifications';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <StartupBlueprint />
        <CompetenciesChart />
        <ResearchEconometrics />
        <ExperienceTimeline />
        <AcademicJourney />
        <Certifications />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}

export default App;
