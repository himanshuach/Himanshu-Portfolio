import { education } from "@/data/portfolio";

import { GlassCard } from "./ui/glass-card";
import { SectionHeading } from "./ui/section-heading";

export const Education = () => {
  return (
    <section id="education" className="py-40">
      <SectionHeading title="Education" />

      <div className="mt-16 flex flex-col gap-6">
        {education.map((item) => (
          <GlassCard key={item.id} className="rounded p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-portfolio-highlight">
                  {item.degree}
                </h3>
                <p className="pt-1 text-base text-portfolio-text">
                  {item.institution}
                </p>
              </div>
              <span className="inline-flex w-fit rounded-xl border border-portfolio-border px-[13px] py-[5px] font-mono text-[12px] font-medium tracking-[0.6px] text-portfolio-muted">
                {item.period}
              </span>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
