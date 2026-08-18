"use client";

import React from 'react';
import { NavSection } from '../types';
import { ArrowUp } from 'lucide-react';
import Image from 'next/image';
import { links } from '../config';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-white/10 mt-20 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2fd9f4] to-[#8083ff] p-0.5 flex items-center justify-center shadow-lg shadow-[#2fd9f4]/20">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/projects/Himanshu.jpeg"
                alt="Himanshu Raj"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <span className="font-sora font-bold text-base text-[#dbfcff]">
              Himanshu <span className="text-[#2fd9f4] font-normal">Raj</span>
            </span>
            <p className="font-jetbrains text-[11px] text-[#c7c4d7]">
              Frontend-Focused Full Stack Developer // AI Engineering
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-5 font-jetbrains text-xs text-[#c7c4d7]">
          <button onClick={() => onNavigate('hero')} className="hover:text-[#2fd9f4] transition-colors cursor-pointer">
            Hero
          </button>
          <button onClick={() => onNavigate('about')} className="hover:text-[#2fd9f4] transition-colors cursor-pointer">
            About
          </button>
          <button onClick={() => onNavigate('projects')} className="hover:text-[#2fd9f4] transition-colors cursor-pointer">
            Projects
          </button>
          <button onClick={() => onNavigate('experience')} className="hover:text-[#2fd9f4] transition-colors cursor-pointer">
            Experience
          </button>
          <button onClick={() => onNavigate('education')} className="hover:text-[#2fd9f4] transition-colors cursor-pointer">
            Education
          </button>
          <button onClick={() => onNavigate('ai')} className="hover:text-[#2fd9f4] transition-colors cursor-pointer">
            AI Engineering
          </button>
          <button onClick={() => onNavigate('tech')} className="hover:text-[#2fd9f4] transition-colors cursor-pointer">
            Tech Stack
          </button>
          <button onClick={() => onNavigate('contact')} className="hover:text-[#2fd9f4] transition-colors cursor-pointer">
            Contact
          </button>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="ghost-btn p-3 rounded-xl text-xs font-jetbrains text-[#2fd9f4] hover:text-white flex items-center gap-2 cursor-pointer"
          title="Scroll Back to Top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 font-jetbrains text-xs text-[#c7c4d7]/70">
        <div>
          © {new Date().getFullYear()} Himanshu Raj. All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-[#2fd9f4]">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#2fd9f4]">
            LinkedIn
          </a>
          <a href={links.leetcode} target="_blank" rel="noreferrer" className="hover:text-[#2fd9f4]">
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
};
