"use client";

import React from "react";
import { EducationItem } from "../types";
import {
  GraduationCap,
  Calendar,
  Building2,
  CheckCircle2,
  Award,
} from "lucide-react";

interface EducationSectionProps {
  education: EducationItem[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
}) => {
  return (
    <section id="education" className="relative py-20 md:py-32">
      {/* Header */}
      <header className="mb-12 md:mb-16">
        <h2 className="font-sora text-[32px] font-bold tracking-tight text-[#dbfcff] sm:text-[42px] md:text-[48px]">
          EDUCATION
        </h2>
        <p className="font-inter mt-3 max-w-2xl text-[15px] text-[#c7c4d7] sm:text-[16px]">
          Foundational engineering principles, algorithms, data structures, and
          computer science foundations.
        </p>
      </header>

      {/* Education Cards */}
      <div className="w-full space-y-6">
        {education.map((item) => (
          <article
            key={item.id}
            className="glass-panel card-hover-effect group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] p-6 sm:p-8"
          >
            <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 p-3 text-[#2fd9f4] transition-transform group-hover:scale-105">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-sora text-xl font-bold text-[#e5e2e3] transition-colors group-hover:text-[#2fd9f4] sm:text-2xl">
                    {item.degree}
                  </h3>
                  <div className="font-jetbrains mt-1.5 flex flex-wrap items-center gap-3 text-xs text-[#c7c4d7]">
                    <span className="flex items-center gap-1.5 font-semibold text-[#dbfcff]">
                      <Building2 className="h-3.5 w-3.5 text-[#2fd9f4]" />
                      <span>{item.institution}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 text-[#2fd9f4]">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{item.period}</span>
                    </span>
                  </div>
                </div>
              </div>

              <span className="font-jetbrains rounded-full border border-[#2fd9f4]/20 bg-[#2fd9f4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#2fd9f4]">
                COMPLETED
              </span>
            </div>

            {item.description && (
              <p className="font-inter mb-6 pl-0 text-sm leading-relaxed text-[#c7c4d7] sm:pl-16 sm:text-[15px]">
                {item.description}
              </p>
            )}

            {item.highlights && item.highlights.length > 0 && (
              <div className="space-y-2 border-t border-white/5 pl-0 pt-4 sm:pl-16">
                <h4 className="font-jetbrains mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2fd9f4]">
                  <Award className="h-3.5 w-3.5" />
                  Key Academic Focus
                </h4>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {item.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="font-inter flex items-start gap-2 text-xs text-[#c7c4d7]"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2fd9f4]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
