"use client";

import React, { useState } from 'react';
import { NavSection } from '../types';
import { Menu, X, FileText, Sparkles, Terminal } from 'lucide-react';

interface NavigationProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onResumeClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigate,
  onResumeClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavSection; label: string }[] = [
    { id: 'hero', label: 'Hero' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'ai', label: 'AI Engineering' },
    { id: 'tech', label: 'Tech Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleMobileNav = (section: NavSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6">
      <nav className="max-w-[1100px] mx-auto nav-dock rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl border border-white/10">
        {/* Brand logo */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2.5 font-sora font-extrabold text-lg tracking-tight text-[#dbfcff] group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2fd9f4] to-[#8083ff] p-0.5 flex items-center justify-center shadow-lg shadow-[#2fd9f4]/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0c1324] rounded-[7px] flex items-center justify-center text-[#2fd9f4]">
              <Terminal className="w-4 h-4" />
            </div>
          </div>
          <span>
            Himanshu <span className="text-[#2fd9f4] font-normal">Raj</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-inter font-medium tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#2fd9f4]/15 text-[#2fd9f4] border border-[#2fd9f4]/30 shadow-[0_0_15px_rgba(47,217,244,0.2)] font-semibold'
                      : 'text-[#c7c4d7] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Resume Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onResumeClick}
            className="neon-btn px-4 py-2 rounded-xl text-xs font-inter uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 text-[#dce1fb] hover:text-white border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-[1100px] mx-auto glass-panel rounded-2xl p-4 border border-white/10 shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleMobileNav(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-inter transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-[#2fd9f4]/20 text-[#2fd9f4] font-semibold border border-[#2fd9f4]/30'
                    : 'text-[#c7c4d7] hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <Sparkles className="w-4 h-4 text-[#2fd9f4]" />}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
