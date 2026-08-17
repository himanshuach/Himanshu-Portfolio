import { techStack } from "@/data/portfolio";

import { GlassCard } from "./ui/glass-card";
import { SectionHeading } from "./ui/section-heading";
import { Tag } from "./ui/tag";

export const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="border-t border-white/50 py-40"
    >
      <SectionHeading title="Tech Stack" />

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {techStack.map((category) => (
          <GlassCard key={category.id} className="rounded p-6">
            <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.6px] text-portfolio-accent">
              {category.title}
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
