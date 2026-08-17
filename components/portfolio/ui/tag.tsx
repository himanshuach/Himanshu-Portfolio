import { cn } from "@/lib/utils";

type TagProps = {
  label: string;
  className?: string;
};

export const Tag = ({ label, className }: TagProps) => {
  return (
    <span
      className={cn(
        "inline-flex rounded-[2px] border border-portfolio-border bg-white/5 px-[9px] py-[5px] font-mono text-[12px] font-medium tracking-[0.6px] text-portfolio-text",
        className
      )}
    >
      {label}
    </span>
  );
};
