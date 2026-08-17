import Image from "next/image";
import { ArrowUpRight, ExternalLink, Smartphone } from "lucide-react";

import { projects, type PortfolioProject } from "@/data/portfolio";
import { cn } from "@/lib/utils";

import { SectionHeading } from "./ui/section-heading";
import { Tag } from "./ui/tag";

const layoutClasses: Record<PortfolioProject["layout"], string> = {
  "featured-large": "md:col-span-8 md:row-span-1 md:min-h-[400px]",
  compact: "md:col-span-4 md:row-span-1 md:min-h-[400px]",
  "featured-alt": "md:col-span-5 md:row-span-1 md:min-h-[400px]",
  split: "md:col-span-7 md:row-span-1 md:min-h-[400px]",
  small: "md:col-span-6 md:row-span-1 md:min-h-[300px]",
};

const ProjectCard = ({ project }: { project: PortfolioProject }) => {
  const isFeaturedLarge = project.layout === "featured-large";
  const isCompact = project.layout === "compact";
  const isFeaturedAlt = project.layout === "featured-alt";
  const isSplit = project.layout === "split";
  const isSmall = project.layout === "small";

  return (
    <article
      className={cn(
        "group relative overflow-hidden border border-portfolio-border bg-portfolio-surface/40 backdrop-blur-sm",
        layoutClasses[project.layout]
      )}
    >
      {isFeaturedLarge && (
        <div className="grid h-full md:grid-cols-2">
          {project.image && (
            <div className="relative min-h-[220px] border-b border-portfolio-border bg-[#1c1b1c] md:border-b-0 md:border-r">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover opacity-60"
              />
            </div>
          )}
          <ProjectContent project={project} className="p-8" />
        </div>
      )}

      {isCompact && (
        <div className="flex h-full flex-col">
          {project.image && (
            <div className="relative h-[192px] border-b border-portfolio-border bg-[#1c1b1c]">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover opacity-60"
              />
            </div>
          )}
          <ProjectContent project={project} className="flex-1 p-6" compact />
        </div>
      )}

      {isFeaturedAlt && (
        <div className="relative flex h-full flex-col justify-between p-8">
          {project.image && (
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover opacity-20"
            />
          )}
          <ProjectContent project={project} className="relative z-10" />
        </div>
      )}

      {isSplit && (
        <div className="grid h-full md:grid-cols-2">
          <ProjectContent project={project} className="p-8" />
          {project.image && (
            <div className="relative min-h-[220px] border-t border-portfolio-border bg-[#1c1b1c] md:border-l md:border-t-0">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover opacity-60"
              />
            </div>
          )}
        </div>
      )}

      {isSmall && (
        <div className="flex h-full flex-col justify-between p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[12px] font-medium tracking-[0.6px] text-portfolio-accent">
                {project.number}
              </p>
              <h3 className="pt-2 text-lg font-bold text-portfolio-text">
                {project.title}
              </h3>
            </div>
            {project.icon === "external" && (
              <ExternalLink className="size-5 text-portfolio-muted" />
            )}
            {project.icon === "mobile" && (
              <Smartphone className="size-5 text-portfolio-muted" />
            )}
          </div>
          <div>
            <p className="pb-6 text-base text-portfolio-muted">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0%,rgba(99,102,241,0)_70%)]" />
      </div>
    </article>
  );
};

const ProjectContent = ({
  project,
  className,
  compact = false,
}: {
  project: PortfolioProject;
  className?: string;
  compact?: boolean;
}) => {
  return (
    <div className={cn("flex h-full flex-col justify-between", className)}>
      <div className={cn("space-y-2", compact ? "pb-4" : "pb-6")}>
        <p className="font-mono text-[12px] font-medium tracking-[0.6px] text-portfolio-accent">
          {project.number}
        </p>
        <h3 className="text-lg font-bold text-portfolio-text">{project.title}</h3>
        <p className="text-base leading-6 text-portfolio-muted">
          {project.description}
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {project.link && !compact && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.7px] text-portfolio-highlight transition-opacity hover:opacity-80"
          >
            View Project
            <ArrowUpRight className="size-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-40">
      <SectionHeading title="Select Works" />
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
