"use client";

import React from "react";
import { ExperienceItem } from "../types";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  return (
    <section id="experience" className="relative py-20 md:py-32">
      {/* Header */}
      <header className="mb-12 md:mb-16">
        <h2 className="font-sora text-[32px] font-bold tracking-tight text-[#dbfcff] sm:text-[42px] md:text-[48px]">
          WORK EXPERIENCE
        </h2>
        <p className="font-inter mt-3 max-w-2xl text-[15px] text-[#c7c4d7] sm:text-[16px]">
          Track record of shipping modern UI systems, performance optimizations,
          and full-stack web applications across forward-thinking teams.
        </p>
      </header>

      {/* Experience Timeline */}
      <div className="max-w-4xl space-y-6">
        {experiences.map((exp) => (
          <article
            key={exp.id}
            className="glass-panel card-hover-effect group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] p-6 sm:p-8"
          >
            <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="mb-1 flex items-center gap-3">
                  <h3 className="font-sora text-xl font-bold text-[#e5e2e3] transition-colors group-hover:text-[#2fd9f4] sm:text-2xl">
                    {exp.role}
                  </h3>
                  <span className="font-jetbrains rounded-full border border-[#2fd9f4]/20 bg-[#2fd9f4]/10 px-2.5 py-0.5 text-xs font-semibold text-[#2fd9f4]">
                    {exp.company}
                  </span>
                </div>

                <div className="font-jetbrains mt-2 flex flex-wrap items-center gap-4 text-xs text-[#c7c4d7]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#2fd9f4]" />
                    <span>{exp.period}</span>
                  </span>
                  {exp.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#2fd9f4]" />
                      <span>{exp.location}</span>
                    </span>
                  )}
                </div>
              </div>

              {exp.liveUrl && (
                <a
                  href={exp.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ghost-btn font-jetbrains flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs text-[#2fd9f4] hover:text-white"
                >
                  <span>Live Site</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>

            {/* Bullets */}
            <ul className="mb-6 space-y-2.5">
              {exp.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="font-inter flex items-start gap-2.5 text-sm leading-relaxed text-[#c7c4d7] sm:text-[15px]"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#2fd9f4]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Technologies Used */}
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-chip text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
