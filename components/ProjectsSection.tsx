"use client";

import React, { useState } from "react";
import { Project } from "../types";
import {
  ExternalLink,
  Github,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  X,
  Sparkles,
  Activity,
} from "lucide-react";

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getColSpanClass = (span: number) => {
    switch (span) {
      case 4:
        return "lg:col-span-4";
      case 5:
        return "lg:col-span-5";
      case 6:
        return "lg:col-span-6";
      case 7:
        return "lg:col-span-7";
      case 8:
        return "lg:col-span-8";
      default:
        return "lg:col-span-6";
    }
  };

  return (
    <section id="projects" className="relative py-20 md:py-32">
      {/* Header */}
      <header className="mb-12 md:mb-16">
        <h2 className="font-sora text-[32px] font-bold tracking-tight text-[#dbfcff] sm:text-[42px] md:text-[48px]">
          PROJECTS
        </h2>
        <p className="font-inter mt-3 max-w-2xl text-[15px] text-[#c7c4d7] sm:text-[16px]">
          Handcrafted full-stack applications, RESTful payment gateways,
          real-time WebRTC tools, and zero-telemetry local AI systems.
        </p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-12">
        {projects.map((project) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`glass-panel project-card group flex cursor-pointer flex-col justify-between rounded-2xl p-6 md:p-8 ${getColSpanClass(
              project.colSpanDesktop
            )}`}
            style={{ minHeight: project.heightDesktop || "380px" }}
          >
            {/* Top metadata */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="font-jetbrains rounded-lg border border-[#2fd9f4]/20 bg-[#2fd9f4]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#2fd9f4]">
                  {project.number}
                </span>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="rounded-xl border border-white/5 bg-white/5 p-2 text-[#c7c4d7] transition-colors hover:bg-white/10 hover:text-white"
                      title="View GitHub Repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="rounded-xl border border-white/5 bg-white/5 p-2 text-[#2fd9f4] transition-colors hover:bg-white/10 hover:text-white"
                      title="View Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-sora mb-3 text-[22px] font-bold text-[#e5e2e3] transition-colors group-hover:text-[#2fd9f4] sm:text-[26px]">
                {project.title}
              </h3>

              <p className="font-inter mb-6 text-[14px] leading-relaxed text-[#c7c4d7] sm:text-[15px]">
                {project.description}
              </p>

              {/* Metrics Pill Bar if present */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="mb-6 flex flex-wrap gap-3 rounded-xl border border-white/5 bg-white/5 p-3">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="font-jetbrains flex items-center gap-1.5 text-xs"
                    >
                      <Activity className="h-3 w-3 text-[#2fd9f4]" />
                      <span className="text-[#c7c4d7]">{metric.label}:</span>
                      <span className="font-semibold text-[#dbfcff]">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Tech Tags & Details CTA */}
            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="font-jetbrains inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#2fd9f4] transition-transform group-hover:translate-x-1">
                <span>View Details</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md duration-200 sm:p-6">
          <div
            className="glass-panel relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-6 top-6 cursor-pointer rounded-xl border border-white/10 bg-white/5 p-2 text-[#c7c4d7] hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-3 flex items-center gap-3">
              <span className="font-jetbrains rounded-lg border border-[#2fd9f4]/20 bg-[#2fd9f4]/10 px-3 py-1 text-xs font-bold uppercase text-[#2fd9f4]">
                PROJECT {selectedProject.number}
              </span>
            </div>

            <h3 className="font-sora mb-4 text-2xl font-extrabold text-[#dbfcff] sm:text-3xl">
              {selectedProject.title}
            </h3>

            <p className="font-inter mb-6 text-base leading-relaxed text-[#c7c4d7]">
              {selectedProject.longDescription || selectedProject.description}
            </p>

            {/* Metrics */}
            {selectedProject.metrics && selectedProject.metrics.length > 0 && (
              <div className="mb-6">
                <h4 className="font-jetbrains mb-3 text-xs font-semibold uppercase tracking-wider text-[#2fd9f4]">
                  Performance Metrics
                </h4>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {selectedProject.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/10 bg-white/5 p-3"
                    >
                      <div className="font-jetbrains text-[11px] uppercase text-[#c7c4d7]">
                        {m.label}
                      </div>
                      <div className="font-sora text-lg font-bold text-[#2fd9f4]">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {selectedProject.keyFeatures &&
              selectedProject.keyFeatures.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-jetbrains mb-3 text-xs font-semibold uppercase tracking-wider text-[#2fd9f4]">
                    Key Technical Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.keyFeatures.map((feature, idx) => (
                      <li
                        key={idx}
                        className="font-inter flex items-start gap-2 text-sm text-[#e5e2e3]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2fd9f4]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Tags */}
            <div className="mb-8">
              <h4 className="font-jetbrains mb-3 text-xs font-semibold uppercase tracking-wider text-[#2fd9f4]">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="tech-chip text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 border-t border-white/10 pt-4">
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="neon-btn font-inter flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-bold uppercase tracking-wider"
                >
                  <span>Launch Project</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ghost-btn font-inter flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white"
                >
                  <Github className="h-4 w-4" />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
