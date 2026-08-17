"use client";

import { useEffect, useState } from "react";

import { links } from "@/config";
import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [activeHref, setActiveHref] = useState<string>("#hero");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-[5%]">
      <nav className="mx-auto flex max-w-[1152px] items-center justify-between rounded-xl border border-portfolio-border bg-portfolio-nav/60 px-8 py-3 backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,240,255,0.1)]">
        <a
          href="#hero"
          className="font-display text-lg font-extrabold tracking-[-0.45px] text-portfolio-text"
        >
          {links.ownerName}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "border-b-2 border-portfolio-accent pb-1.5 text-portfolio-highlight"
                      : "text-portfolio-muted hover:text-portfolio-text"
                  )}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="/resume.pdf"
          className="border border-white/20 px-[17px] py-2 text-xs font-medium uppercase tracking-[0.6px] text-portfolio-highlight transition-colors hover:border-portfolio-accent hover:text-white"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};
