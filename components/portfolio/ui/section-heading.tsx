import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  className?: string;
};

export const SectionHeading = ({ title, className }: SectionHeadingProps) => {
  return (
    <div className={cn("relative inline-flex", className)}>
      <h2 className="font-display text-[32px] font-semibold leading-[38.4px] text-portfolio-text">
        {title}
      </h2>
      <span
        aria-hidden
        className="absolute -bottom-2 left-0 h-px w-1/2 bg-portfolio-accent"
      />
    </div>
  );
};
