"use client";

import React, { useState } from "react";
import { TechCategory } from "../types";
import {
  Search,
  Code2,
  Cpu,
  Database,
  Wrench,
  Layers,
  Terminal,
  Sparkles,
} from "lucide-react";

interface TechStackSectionProps {
  categories: TechCategory[];
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({
  categories,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "frontend":
        return <Layers className="h-5 w-5 text-[#2fd9f4]" />;
      case "backend":
        return <Database className="h-5 w-5 text-[#2fd9f4]" />;
      case "languages":
        return <Code2 className="h-5 w-5 text-[#2fd9f4]" />;
      case "ai & databases":
      case "ai & data":
        return <Cpu className="h-5 w-5 text-[#2fd9f4]" />;
      default:
        return <Wrench className="h-5 w-5 text-[#2fd9f4]" />;
    }
  };

  const allCategoryNames = ["All", ...categories.map((c) => c.title)];

  const filteredCategories = categories.map((cat) => {
    const isCategorySelected =
      activeCategory === "All" || activeCategory === cat.title;
    const matchingSkills = cat.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return {
      ...cat,
      isVisible: isCategorySelected && matchingSkills.length > 0,
      filteredSkills: matchingSkills,
    };
  });

  const totalFilteredSkills = filteredCategories.reduce((acc, cat) => {
    return cat.isVisible ? acc + cat.filteredSkills.length : acc;
  }, 0);

  return (
    <section id="tech" className="relative py-20 md:py-32">
      {/* Header */}
      <header className="mb-12 md:mb-16">
        <h2 className="font-sora text-[32px] font-bold tracking-tight text-[#dbfcff] sm:text-[42px] md:text-[48px]">
          Tech Stack & Capabilities
        </h2>
        <p className="font-inter mt-3 max-w-2xl text-[15px] text-[#c7c4d7] sm:text-[16px]">
          A comprehensive suite of production-proven frameworks, languages, AI
          toolkits, databases, and platform infrastructure.
        </p>
      </header>

      {/* Interactive Controls Bar: Filter Tabs & Search */}
      <div className="mb-10 flex flex-col items-stretch justify-between gap-4 md:flex-row md:items-center">
        {/* Category Tabs */}
        <div className="flex max-w-full items-center gap-1.5 overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-1.5 pb-2 md:pb-0">
          {allCategoryNames.map((catName) => (
            <button
              key={catName}
              onClick={() => setActiveCategory(catName)}
              className={`font-jetbrains cursor-pointer whitespace-nowrap rounded-xl px-4 py-2 text-xs font-semibold tracking-wider transition-all ${
                activeCategory === catName
                  ? "border border-[#2fd9f4]/40 bg-[#2fd9f4]/20 text-[#2fd9f4] shadow-[0_0_15px_rgba(47,217,244,0.15)]"
                  : "text-[#c7c4d7] hover:bg-white/5 hover:text-white"
              }`}
            >
              {catName}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative min-w-[240px] md:min-w-[300px]">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#c7c4d7]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technologies..."
            className="font-jetbrains w-full rounded-xl border border-white/10 bg-[#151b2d]/80 py-2.5 pl-10 pr-4 text-xs text-[#e5e2e3] placeholder-[#c7c4d7]/60 transition-colors focus:border-[#2fd9f4]/50 focus:outline-none"
          />
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map(
          (cat) =>
            cat.isVisible && (
              <div
                key={cat.title}
                className="glass-panel card-hover-effect flex flex-col justify-between rounded-2xl border border-[rgba(255,255,255,0.08)] p-6 sm:p-8"
              >
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
                      {getCategoryIcon(cat.title)}
                    </div>
                    <div>
                      <h3 className="font-sora text-lg font-bold text-[#e5e2e3]">
                        {cat.title}
                      </h3>
                      <span className="font-jetbrains text-[11px] text-[#2fd9f4]">
                        {cat.filteredSkills.length} skills
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.filteredSkills.map((skill) => {
                      const isHighlighted =
                        searchQuery.length > 0 &&
                        skill.toLowerCase().includes(searchQuery.toLowerCase());
                      return (
                        <span
                          key={skill}
                          className={`font-jetbrains rounded-lg border px-3 py-1.5 text-xs transition-all ${
                            isHighlighted
                              ? "border-[#2fd9f4] bg-[#2fd9f4]/25 font-semibold text-[#dbfcff] shadow-[0_0_12px_rgba(47,217,244,0.3)]"
                              : "border-white/10 bg-white/5 text-[#e5e2e3] hover:border-[#2fd9f4]/40 hover:bg-[#2fd9f4]/10 hover:text-[#2fd9f4]"
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="font-jetbrains mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-[11px] text-[#c7c4d7]/70">
                  <span>PRODUCTION READY</span>
                  <Sparkles className="h-3.5 w-3.5 text-[#2fd9f4]" />
                </div>
              </div>
            )
        )}
      </div>

      {totalFilteredSkills === 0 && (
        <div className="glass-panel font-inter rounded-2xl p-12 text-center text-[#c7c4d7]">
          <Terminal className="mx-auto mb-3 h-8 w-8 text-[#2fd9f4]" />
          <p className="text-lg font-semibold text-[#e5e2e3]">
            No matching technologies found.
          </p>
          <p className="mt-1 text-sm text-[#c7c4d7]">
            Try adjusting your search query or switching categories.
          </p>
        </div>
      )}
    </section>
  );
};
