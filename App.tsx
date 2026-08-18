"use client";

import React, { useState, useEffect } from 'react';
import { NavSection } from './types';
import { PROJECTS, EXPERIENCES, EDUCATION, TECH_CATEGORIES, AI_PILLARS } from './data';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { TechStackSection } from './components/TechStackSection';
import { AIEngineeringSection } from './components/AIEngineeringSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { AuroraShaderBackground } from './components/AuroraShaderBackground';

export function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('hero');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Smooth scroll handler
  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      const navOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections: NavSection[] = [
        'hero',
        'about',
        'projects',
        'experience',
        'education',
        'ai',
        'tech',
        'contact',
      ];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0c1324] text-[#dce1fb] relative selection:bg-[#2fd9f4] selection:text-[#070d1f]">
      {/* Full-Page Interactive WebGL Aurora Shader Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <AuroraShaderBackground className="w-full h-full opacity-70" />
        {/* Soft vignette and radial gradient depth */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#0c1324]/40 to-[#0c1324]/85 pointer-events-none" />
      </div>

      {/* Ambient Lighting Blurs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-[#22d3ee]/6 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#6366f1]/6 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Floating Top Dock Navigation */}
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onResumeClick={() => setResumeModalOpen(true)}
      />

      {/* Main Container */}
      <main className="relative z-10 w-[92%] max-w-[1200px] mx-auto pt-6 pb-12">
        {/* 1. Hero Section */}
        <HeroSection
          onNavigate={handleNavigate}
          onResumeClick={() => setResumeModalOpen(true)}
        />

        {/* 2. About Section */}
        <AboutSection onNavigate={handleNavigate} />

        {/* 3. Projects Section */}
        <ProjectsSection projects={PROJECTS} />

        {/* 4. Experience Section */}
        <ExperienceSection experiences={EXPERIENCES} />

        {/* 5. Education Section */}
        <EducationSection education={EDUCATION} />

        {/* 6. AI Engineering Section */}
        <AIEngineeringSection pillars={AI_PILLARS} />

        {/* 7. Tech Stack Section */}
        <TechStackSection categories={TECH_CATEGORIES} />

        {/* 8. Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </main>

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
