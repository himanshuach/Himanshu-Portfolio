import { ArrowUpRight, Github, Linkedin } from "lucide-react";

import { links } from "@/config";
import { heroContent } from "@/data/portfolio";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-[819px] flex-col justify-center gap-4 pb-32 pt-36"
    >
      <div id="about" className="flex flex-wrap items-center gap-4 pb-4">
        <div className="inline-flex items-center gap-2 rounded-xl border border-portfolio-border bg-[#161618] px-[13px] py-[5px]">
          <span className="size-2 rounded-full bg-portfolio-accent shadow-[0_0_8px_rgba(0,219,233,0.8)]" />
          <span className="font-mono text-[12px] font-medium uppercase tracking-[0.6px] text-portfolio-muted">
            {heroContent.status}
          </span>
        </div>

        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="text-portfolio-muted transition-colors hover:text-portfolio-highlight"
        >
          <Github className="size-5" />
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="text-portfolio-muted transition-colors hover:text-portfolio-highlight"
        >
          <Linkedin className="size-4" />
        </a>
      </div>

      <h1 className="font-display text-[clamp(3rem,8vw,4.5rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-portfolio-text">
        {heroContent.name}
      </h1>

      <div className="max-w-[672px]">
        <p className="font-display text-[clamp(1.5rem,4vw,2rem)] font-semibold leading-[1.2] text-portfolio-muted">
          {heroContent.headline[0]}
          <br />
          {heroContent.headline[1]}
        </p>
      </div>

      <p className="pt-4 font-mono text-[12px] uppercase tracking-[1.2px] text-portfolio-muted">
        {heroContent.role}
      </p>

      <div className="flex flex-wrap gap-4 pt-8">
        <a
          href={heroContent.primaryCta.href}
          className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-sm font-medium uppercase tracking-[0.7px] text-portfolio-highlight transition-colors hover:border-portfolio-accent"
        >
          {heroContent.primaryCta.label}
          <ArrowUpRight className="size-3.5" />
        </a>
        <a
          href={heroContent.secondaryCta.href}
          className="inline-flex items-center border border-white/20 px-6 py-3 text-sm font-medium uppercase tracking-[0.7px] text-portfolio-muted transition-colors hover:border-white/40 hover:text-portfolio-text"
        >
          {heroContent.secondaryCta.label}
        </a>
      </div>
    </section>
  );
};
