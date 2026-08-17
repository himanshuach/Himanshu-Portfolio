import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type GlassCardProps = PropsWithChildren<{
  className?: string;
}>;

export const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "rounded border border-portfolio-border bg-portfolio-surface/40 backdrop-blur-md",
        className
      )}
    >
      {children}
    </div>
  );
};
