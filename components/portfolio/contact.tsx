"use client";

import { ArrowUpRight, Copy, Mail, Network, Phone } from "lucide-react";
import { useState } from "react";

import { contactContent } from "@/data/portfolio";

import { GlassCard } from "./ui/glass-card";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contactContent.email.value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-40">
      <div className="mb-10 inline-flex rounded border border-portfolio-border bg-portfolio-surface/50 px-[13px] py-[7px] backdrop-blur-sm">
        <span className="font-mono text-[12px] font-medium uppercase tracking-[1.2px] text-portfolio-highlight">
          {contactContent.badge}
        </span>
      </div>

      <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.04em] text-portfolio-text">
        {contactContent.title}
      </h2>

      <p className="mt-6 max-w-[672px] text-lg leading-[1.6] text-portfolio-muted">
        {contactContent.description}
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5">
          <GlassCard className="rounded-lg p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex size-12 items-center justify-center rounded border border-portfolio-border bg-white/5">
                <Mail className="size-5 text-portfolio-highlight" />
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 font-mono text-[12px] font-medium tracking-[0.6px] text-portfolio-muted transition-colors hover:text-portfolio-text"
              >
                <Copy className="size-3.5" />
                {copied ? "COPIED" : "COPY"}
              </button>
            </div>
            <p className="mt-8 text-base text-portfolio-muted">
              {contactContent.email.label}
            </p>
            <a
              href={`mailto:${contactContent.email.value}`}
              className="mt-1 block break-all font-display text-[clamp(1.5rem,4vw,2rem)] font-semibold leading-tight text-portfolio-text hover:text-portfolio-highlight"
            >
              {contactContent.email.value}
            </a>
          </GlassCard>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <GlassCard className="rounded-lg p-6">
              <Phone className="size-5 text-portfolio-highlight" />
              <p className="pt-4 text-base text-portfolio-muted">
                {contactContent.phone.label}
              </p>
              <a
                href={`tel:${contactContent.phone.value.replace(/\s/g, "")}`}
                className="mt-1 block text-lg text-portfolio-text hover:text-portfolio-highlight"
              >
                {contactContent.phone.value}
              </a>
            </GlassCard>

            <GlassCard className="rounded-lg p-6">
              <Network className="size-5 text-portfolio-highlight" />
              <p className="pt-4 text-base text-portfolio-muted">
                {contactContent.network.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-4">
                {contactContent.network.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base text-portfolio-text underline decoration-portfolio-border underline-offset-4 transition-colors hover:text-portfolio-highlight"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        <GlassCard className="rounded-lg p-12 backdrop-blur-xl lg:col-span-7">
          <h3 className="font-display text-[32px] font-semibold text-portfolio-text">
            Send a Transmission
          </h3>

          <form
            className="mt-8 space-y-8"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <label className="block">
                <span className="sr-only">Name</span>
                <input
                  name="name"
                  placeholder="Name"
                  className="w-full border-b border-portfolio-border bg-transparent py-3 text-base text-portfolio-text outline-none placeholder:text-portfolio-muted/50"
                />
              </label>
              <label className="block">
                <span className="sr-only">Email Address</span>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-b border-portfolio-border bg-transparent py-3 text-base text-portfolio-text outline-none placeholder:text-portfolio-muted/50"
                />
              </label>
            </div>

            <label className="block">
              <span className="sr-only">Subject</span>
              <input
                name="subject"
                placeholder="Subject"
                className="w-full border-b border-portfolio-border bg-transparent py-3 text-base text-portfolio-text outline-none placeholder:text-portfolio-muted/50"
              />
            </label>

            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Your message..."
                className="w-full resize-none border-b border-portfolio-border bg-transparent py-3 text-base text-portfolio-text outline-none placeholder:text-portfolio-muted/50"
              />
            </label>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="relative inline-flex items-center gap-3 overflow-hidden border border-portfolio-border bg-portfolio-surface/30 px-8 py-4 font-mono text-[12px] font-medium uppercase tracking-[0.6px] text-portfolio-text transition-colors hover:border-portfolio-accent"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-indigo-500/10" />
                <span className="relative">Initialize Sequence</span>
                <ArrowUpRight className="relative size-3.5" />
              </button>
            </div>
          </form>
        </GlassCard>
      </div>
    </section>
  );
};
