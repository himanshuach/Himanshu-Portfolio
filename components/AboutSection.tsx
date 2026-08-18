"use client";

import React from "react";
import {
  Layers,
  Database,
  Cpu,
  TrendingUp,
  Sparkles,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { NavSection } from "../types";

interface AboutSectionProps {
  onNavigate?: (section: NavSection) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="relative py-20 md:py-32">
      {/* Section Header with Metadata Tag */}
      <header className="mb-12 md:mb-16">
        <h2 className="font-sora max-w-3xl text-[32px] font-bold leading-[1.15] tracking-tight text-[#dbfcff] sm:text-[42px] md:text-[48px]">
          A developer who thinks in systems.
        </h2>
      </header>

      {/* Two Column Narrative */}
      <div className="mb-16 grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-inter mb-6 text-[18px] font-medium leading-relaxed text-[#e5e2e3] md:text-[20px]">
            Bridging the gap between robust architectural engineering and fluid,
            intuitive user experiences.
          </p>
          <p className="font-inter text-[15px] leading-relaxed text-[#c7c4d7] md:text-[16px]">
            With a strong foundation in modern web technologies and a relentless
            focus on performance, I specialize in architecting resilient
            full-stack systems and integrating advanced AI capabilities into
            production-grade applications.
          </p>
        </div>

        <div className="font-inter space-y-5 text-[15px] leading-relaxed text-[#c7c4d7] md:text-[16px] lg:col-span-7">
          <p>
            My engineering philosophy is rooted in technical rigor, clarity, and
            precision. Whether designing real-time collaborative protocols or
            deploying agentic workflows, I build software that scales
            effortlessly and performs reliably under heavy concurrency.
          </p>
          <p>
            Beyond code, I maintain a deep fascination with human-computer
            interaction, vector embeddings, local-first inference architectures,
            and the frontiers of machine intelligence.
          </p>
          {onNavigate && (
            <div className="pt-2">
              <button
                onClick={() => onNavigate("contact")}
                className="font-inter group inline-flex cursor-pointer items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#2fd9f4] hover:text-white"
              >
                <span>Initiate collaboration</span>
                <ArrowUpRight className="h-4 w-4 text-[#2fd9f4] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 4 Core Expertise Cards */}
      <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Frontend Card */}
        <div className="glass-panel card-hover-effect group relative overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] p-6">
          <div className="mb-5 w-fit rounded-lg border border-white/5 bg-white/5 p-2.5 text-[#2fd9f4] transition-transform group-hover:scale-110">
            <Layers className="h-6 w-6" />
          </div>
          <h3 className="font-inter mb-3 text-[18px] font-bold text-[#e5e2e3] transition-colors group-hover:text-[#2fd9f4]">
            Frontend
          </h3>
          <p className="font-inter text-[14px] leading-relaxed text-[#c7c4d7]">
            Crafting responsive, high-performance interfaces with Next.js,
            React, Tailwind CSS, and shadcn/ui.
          </p>
        </div>

        {/* Backend Card */}
        <div className="glass-panel card-hover-effect group relative overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] p-6">
          <div className="mb-5 w-fit rounded-lg border border-white/5 bg-white/5 p-2.5 text-[#2fd9f4] transition-transform group-hover:scale-110">
            <Database className="h-6 w-6" />
          </div>
          <h3 className="font-inter mb-3 text-[18px] font-bold text-[#e5e2e3] transition-colors group-hover:text-[#2fd9f4]">
            Backend
          </h3>
          <p className="font-inter text-[14px] leading-relaxed text-[#c7c4d7]">
            Architecting robust RESTful APIs, FastAPI, Node.js services, JWT
            auth, and Supabase / PostgreSQL databases.
          </p>
        </div>

        {/* Full Stack Card */}
        <div className="glass-panel card-hover-effect group relative overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] p-6">
          <div className="mb-5 w-fit rounded-lg border border-white/5 bg-white/5 p-2.5 text-[#2fd9f4] transition-transform group-hover:scale-110">
            <Code2 className="h-6 w-6" />
          </div>
          <h3 className="font-inter mb-3 text-[18px] font-bold text-[#e5e2e3] transition-colors group-hover:text-[#2fd9f4]">
            Full Stack
          </h3>
          <p className="font-inter text-[14px] leading-relaxed text-[#c7c4d7]">
            Developing end-to-end architectures, secure payment integrations,
            and reliable microservices.
          </p>
        </div>

        {/* AI Engineering Card */}
        <div className="glass-panel card-hover-effect group relative overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] p-6">
          <div className="mb-5 w-fit rounded-lg border border-white/5 bg-white/5 p-2.5 text-[#2fd9f4] transition-transform group-hover:scale-110">
            <Cpu className="h-6 w-6" />
          </div>
          <h3 className="font-inter mb-3 text-[18px] font-bold text-[#e5e2e3] transition-colors group-hover:text-[#2fd9f4]">
            AI Engineering
          </h3>
          <p className="font-inter text-[14px] leading-relaxed text-[#c7c4d7]">
            Integrating LLMs, architecting RAG pipelines, and constructing
            agentic tools for next-gen intelligent applications.
          </p>
        </div>
      </div>

      {/* Technical Metrics Highlight Card */}
      <div className="glass-panel rounded-xl border border-[rgba(255,255,255,0.08)] p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-8 divide-y divide-[rgba(255,255,255,0.08)] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <div className="sm:pr-6">
            <div className="font-sora mb-1 flex items-baseline gap-1 text-[40px] font-extrabold tracking-tight text-[#2fd9f4] sm:text-[48px]">
              <span>30%</span>
              <TrendingUp className="inline h-6 w-6 text-[#2fd9f4]" />
            </div>
            <h4 className="font-inter mb-1 text-[16px] font-semibold text-[#e5e2e3]">
              Performance Optimization
            </h4>
            <p className="font-inter text-[14px] leading-relaxed text-[#c7c4d7]">
              Average load-time reduction achieved across production client
              platforms.
            </p>
          </div>

          <div className="pt-6 sm:pl-8 sm:pt-0">
            <div className="font-sora mb-1 flex items-baseline gap-1 text-[40px] font-extrabold tracking-tight text-[#dbfcff] sm:text-[48px]">
              <span>20+</span>
              <Code2 className="inline h-6 w-6 text-[#2fd9f4]" />
            </div>
            <h4 className="font-inter mb-1 text-[16px] font-semibold text-[#e5e2e3]">
              Responsive Pages Designed
            </h4>
            <p className="font-inter text-[14px] leading-relaxed text-[#c7c4d7]">
              Engineered from scratch adhering strictly to modern UI/UX design
              systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
