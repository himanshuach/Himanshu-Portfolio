"use client";

import React from 'react';
import { NavSection } from '../types';
import { ArrowUpRight, Github, Linkedin, Mail, Code, Terminal } from 'lucide-react';
import { links } from '../config';
import { ThreeHeroScene } from './ThreeHeroScene';

interface HeroSectionProps {
  onNavigate: (section: NavSection) => void;
  onResumeClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onResumeClick }) => {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center pt-28 pb-16 relative overflow-hidden">
      {/* 1. Glowing Animation & 3D Interactive Scene (Independent Absolute Layer) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full lg:w-[48%] h-[380px] sm:h-[480px] pointer-events-none z-0 flex items-center justify-center opacity-50 sm:opacity-75 lg:opacity-100">
        {/* Ambient radial glow using standard CSS gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,217,244,0.18)_0%,rgba(99,102,241,0.08)_50%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
        
        {/* 3D Scene Visualizer */}
        <ThreeHeroScene className="w-full h-full relative z-10" />
      </div>

      {/* 2. Hero Content (Primary Relative Flow - Centered and Independent) */}
      <div className="relative z-10 w-full max-w-3xl">
        {/* Top Status & Social Row */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#2fd9f4]/30 bg-[#151b2d]/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(47,217,244,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2fd9f4] animate-pulse shadow-[0_0_10px_#2fd9f4]" />
            <span className="font-jetbrains text-[11px] font-semibold uppercase tracking-widest text-[#2fd9f4]">
              AVAILABLE FOR DEPLOYMENT
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#c7c4d7] hover:text-[#2fd9f4] hover:border-[#2fd9f4]/40 transition-all hover:scale-105"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#c7c4d7] hover:text-[#2fd9f4] hover:border-[#2fd9f4]/40 transition-all hover:scale-105"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${links.ownerEmail}`}
              aria-label="Email Himanshu Raj"
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#c7c4d7] hover:text-[#2fd9f4] hover:border-[#2fd9f4]/40 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={links.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode profile"
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#c7c4d7] hover:text-[#2fd9f4] hover:border-[#2fd9f4]/40 transition-all hover:scale-105"
            >
              <Code className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-sora text-[44px] sm:text-[60px] md:text-[76px] font-extrabold text-[#dbfcff] tracking-tight leading-[1.08] mb-6">
          Himanshu Raj
        </h1>

        {/* Subheadline narrative */}
        <div className="max-w-2xl mb-8">
          <p className="font-sora text-[20px] sm:text-[26px] md:text-[32px] font-semibold text-[#c7c4d7] leading-[1.25] tracking-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2fd9f4] via-[#8083ff] to-[#c0c1ff]">intelligent interfaces</span> for the web.
          </p>
        </div>

        {/* Specialty Pill Tag */}
        <div className="inline-flex items-center gap-2 mb-8 text-[#89ceff] font-jetbrains text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-xl w-fit">
          <Terminal className="w-4 h-4 text-[#2fd9f4]" />
          <span>FRONTEND-FOCUSED FULL STACK DEVELOPER {"//"} AI ENGINEERING</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <button
            onClick={() => onNavigate('projects')}
            className="neon-btn px-7 py-3.5 rounded-xl font-inter text-sm font-bold tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>View Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onResumeClick}
            className="ghost-btn px-7 py-3.5 rounded-xl font-inter text-sm font-semibold tracking-wider text-[#dce1fb] uppercase flex items-center gap-2 cursor-pointer"
          >
            <span>Download Resume</span>
          </button>
        </div>
      </div>

      {/* Quick Specs Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-full pt-8 mt-6 border-t border-white/10 relative z-10">
        <div className="glass-panel p-4 rounded-xl">
          <div className="font-jetbrains text-[11px] text-[#2fd9f4] uppercase tracking-wider mb-1">Architecture</div>
          <div className="font-sora text-sm font-semibold text-white">Full Stack & AI Systems</div>
        </div>

        <div className="glass-panel p-4 rounded-xl">
          <div className="font-jetbrains text-[11px] text-[#2fd9f4] uppercase tracking-wider mb-1">Core Stack</div>
          <div className="font-sora text-sm font-semibold text-white">Next.js / FastAPI / LLMs</div>
        </div>

        <div className="glass-panel p-4 rounded-xl">
          <div className="font-jetbrains text-[11px] text-[#2fd9f4] uppercase tracking-wider mb-1">Performance</div>
          <div className="font-sora text-sm font-semibold text-white">&lt;25ms API Response</div>
        </div>

        <div className="glass-panel p-4 rounded-xl">
          <div className="font-jetbrains text-[11px] text-[#2fd9f4] uppercase tracking-wider mb-1">Inference</div>
          <div className="font-sora text-sm font-semibold text-white">Local RAG & WebRTC</div>
        </div>
      </div>
    </section>
  );
};
