import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveBackground } from './components/InteractiveBackground';
import { InteractivePlayground } from './components/InteractivePlayground';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { soundEffects } from './utils/audio';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundEffects.enabled);
  const [activePlaygroundTab, setActivePlaygroundTab] = useState<string>('resume-matcher');

  const handleToggleSound = () => {
    const newState = soundEffects.toggle();
    setSoundEnabled(newState);
  };

  const handleOpenPlaygroundTab = (tab: string) => {
    setActivePlaygroundTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Interactive Particle Network Canvas */}
      <InteractiveBackground />

      {/* Navigation Header */}
      <Navbar
        onOpenResume={() => setIsResumeModalOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenPlaygroundTab={handleOpenPlaygroundTab}
        />

        <InteractivePlayground
          initialTab={activePlaygroundTab}
        />

        <ProjectsSection
          onOpenDemo={handleOpenPlaygroundTab}
        />

        <SkillsSection />

        <ExperienceSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;

