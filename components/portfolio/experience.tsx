import { experiences } from "@/data/portfolio";

import { GlassCard } from "./ui/glass-card";
import { SectionHeading } from "./ui/section-heading";

export const Experience = () => {
  return (
    <section id="experience" className="py-40">
      <SectionHeading title="Experience" />

      <div className="relative mt-16 border-l border-portfolio-border pl-8 md:pl-12">
        <div className="flex flex-col gap-12">
          {experiences.map((item) => (
            <article key={item.id} className="relative">
              <span className="absolute -left-[41px] top-2 size-4 rounded-xl border-2 border-portfolio-accent bg-portfolio-bg shadow-[0_0_8px_rgba(0,219,233,0.5)]" />

              <GlassCard className="rounded p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-portfolio-highlight">
                      {item.role}
                    </h3>
                    <p className="pt-1 text-base text-portfolio-text">
                      {item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="transition-colors hover:text-portfolio-highlight"
                        >
                          {item.company}
                        </a>
                      ) : (
                        item.company
                      )}
                      {item.location && (
                        <span className="text-portfolio-muted">
                          {" "}
                          | {item.location}
                        </span>
                      )}
                    </p>
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-block font-mono text-[12px] tracking-[0.6px] text-portfolio-accent transition-colors hover:text-portfolio-highlight"
                      >
                        Live: {item.liveUrl.replace(/^https?:\/\//, "")}
                      </a>
                    )}
                  </div>
                  <span className="inline-flex w-fit rounded-xl border border-portfolio-border px-[13px] py-[5px] font-mono text-[12px] font-medium tracking-[0.6px] text-portfolio-muted">
                    {item.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-4 text-base leading-6 text-portfolio-muted"
                    >
                      <span aria-hidden className="text-portfolio-accent">
                        •
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
