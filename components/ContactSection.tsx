"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Copy,
  Terminal,
  ShieldCheck,
  Code,
} from "lucide-react";
import { links } from "../config";
import { ContactTransmission } from "../types";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactTransmission>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "transmitting" | "success" | "error"
  >("idle");
  const [transmissionLog, setTransmissionLog] = useState<string[]>([]);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(links.ownerEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("transmitting");
    setTransmissionLog(["[INIT] Contact transmission sequence started..."]);

    setTimeout(() => {
      setTransmissionLog((prev) => [
        ...prev,
        "[AUTH] Validating email protocol and payload...",
      ]);
    }, 400);

    setTimeout(() => {
      setTransmissionLog((prev) => [
        ...prev,
        "[ENCRYPT] Securing payload with TLS channel...",
      ]);
    }, 800);

    setTimeout(() => {
      setTransmissionLog((prev) => [
        ...prev,
        "[DISPATCH] Transmission sent successfully! 200 OK",
      ]);
      setStatus("success");
    }, 1400);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32">
      {/* Header */}
      <header className="mb-12 md:mb-16">
        <h2 className="font-sora text-[32px] font-bold tracking-tight text-[#dbfcff] sm:text-[42px] md:text-[48px]">
          Initiate Transmission
        </h2>
        <p className="font-inter mt-3 max-w-2xl text-[15px] text-[#c7c4d7] sm:text-[16px]">
          Whether you have a project in mind, an architectural query, or want to
          discuss full-stack & AI engineering opportunities, my direct line is
          always open.
        </p>
      </header>

      {/* Grid: Direct Line Card & Transmission Form */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* Left Column: Direct Contact Info */}
        <div className="space-y-6 lg:col-span-5">
          {/* Direct Email Card */}
          <div className="glass-panel card-hover-effect rounded-2xl border border-[rgba(255,255,255,0.08)] p-6 sm:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-jetbrains flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2fd9f4]">
                <Mail className="h-4 w-4 text-[#2fd9f4]" />
                Direct Email
              </span>

              <button
                onClick={handleCopyEmail}
                className="ghost-btn font-jetbrains flex cursor-pointer items-center gap-1.5 rounded-xl p-2 text-xs text-[#c7c4d7] hover:text-white"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#2fd9f4]" />
                    <span className="text-[#2fd9f4]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={`mailto:${links.ownerEmail}`}
              className="font-sora mb-2 block break-all text-lg font-bold text-[#dbfcff] transition-colors hover:text-[#2fd9f4] sm:text-xl"
            >
              {links.ownerEmail}
            </a>
            <p className="font-inter text-xs text-[#c7c4d7]">
              Typically responds within 12 hours.
            </p>
          </div>

          {/* Direct Phone Card */}
          <div className="glass-panel card-hover-effect rounded-2xl border border-[rgba(255,255,255,0.08)] p-6 sm:p-8">
            <span className="font-jetbrains mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2fd9f4]">
              <Phone className="h-4 w-4 text-[#2fd9f4]" />
              Direct Phone
            </span>
            <a
              href={`tel:${links.phone}`}
              className="font-sora mb-1 block text-lg font-bold text-[#dbfcff] transition-colors hover:text-[#2fd9f4] sm:text-xl"
            >
              {links.phone}
            </a>
            <p className="font-inter text-xs text-[#c7c4d7]">
              Available for phone / WhatsApp inquiry
            </p>
          </div>

          {/* Professional Network Links */}
          <div className="glass-panel rounded-2xl border border-[rgba(255,255,255,0.08)] p-6 sm:p-8">
            <span className="font-jetbrains mb-4 block text-xs font-semibold uppercase tracking-wider text-[#2fd9f4]">
              {"//"} Online Presence & Profiles
            </span>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="ghost-btn font-jetbrains flex items-center gap-2.5 rounded-xl p-3 text-xs text-[#e5e2e3] hover:text-[#2fd9f4]"
              >
                <Github className="h-4 w-4 text-[#2fd9f4]" />
                <span>GitHub</span>
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="ghost-btn font-jetbrains flex items-center gap-2.5 rounded-xl p-3 text-xs text-[#e5e2e3] hover:text-[#2fd9f4]"
              >
                <Linkedin className="h-4 w-4 text-[#2fd9f4]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={links.leetcode}
                target="_blank"
                rel="noreferrer"
                className="ghost-btn font-jetbrains flex items-center gap-2.5 rounded-xl p-3 text-xs text-[#e5e2e3] hover:text-[#2fd9f4]"
              >
                <Code className="h-4 w-4 text-[#2fd9f4]" />
                <span>LeetCode</span>
              </a>

              <a
                href={`mailto:${links.ownerEmail}`}
                className="ghost-btn font-jetbrains flex items-center gap-2.5 rounded-xl p-3 text-xs text-[#e5e2e3] hover:text-[#2fd9f4]"
              >
                <Mail className="h-4 w-4 text-[#2fd9f4]" />
                <span>Send Mail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Transmission Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel relative rounded-2xl border border-[rgba(255,255,255,0.08)] p-6 shadow-2xl sm:p-10">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="font-jetbrains flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2fd9f4]">
                <Terminal className="h-4 w-4" />
                <span>SYSTEM.TRANSMISSION_FORM</span>
              </div>
              <div className="font-jetbrains flex items-center gap-1.5 text-[10px] text-[#c7c4d7]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#2fd9f4]" />
                <span>TLS ENCRYPTED</span>
              </div>
            </div>

            {status === "success" ? (
              <div className="space-y-4 py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#2fd9f4]/40 bg-[#2fd9f4]/20 text-[#2fd9f4] shadow-lg shadow-[#2fd9f4]/20">
                  <CheckCircle2 className="h-8 w-8 animate-bounce" />
                </div>
                <h3 className="font-sora text-2xl font-bold text-[#dbfcff]">
                  Transmission Successful!
                </h3>
                <p className="font-inter mx-auto max-w-md text-sm text-[#c7c4d7]">
                  Thank you for reaching out. Your transmission payload has been
                  dispatched to Himanshu Raj.
                </p>

                {/* Console Log output */}
                <div className="font-jetbrains mx-auto mt-4 max-w-md space-y-1 rounded-xl border border-white/10 bg-[#0c1324] p-4 text-left text-xs text-[#2fd9f4]">
                  {transmissionLog.map((log, idx) => (
                    <div key={idx}>{log}</div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="ghost-btn font-jetbrains mt-6 cursor-pointer rounded-xl px-6 py-2.5 text-xs uppercase tracking-wider text-[#2fd9f4]"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="font-jetbrains mb-2 block text-xs uppercase tracking-wider text-[#c7c4d7]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Vance"
                      className="font-inter w-full rounded-xl border border-white/10 bg-[#151b2d]/90 px-4 py-3 text-sm text-[#e5e2e3] placeholder-[#c7c4d7]/50 transition-colors focus:border-[#2fd9f4]/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-jetbrains mb-2 block text-xs uppercase tracking-wider text-[#c7c4d7]">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@example.com"
                      className="font-inter w-full rounded-xl border border-white/10 bg-[#151b2d]/90 px-4 py-3 text-sm text-[#e5e2e3] placeholder-[#c7c4d7]/50 transition-colors focus:border-[#2fd9f4]/50 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-jetbrains mb-2 block text-xs uppercase tracking-wider text-[#c7c4d7]">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Project Inquiry / Architectural Consultation"
                    className="font-inter w-full rounded-xl border border-white/10 bg-[#151b2d]/90 px-4 py-3 text-sm text-[#e5e2e3] placeholder-[#c7c4d7]/50 transition-colors focus:border-[#2fd9f4]/50 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-jetbrains mb-2 block text-xs uppercase tracking-wider text-[#c7c4d7]">
                    Message Payload *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe your project, idea, or questions here..."
                    className="font-inter w-full resize-none rounded-xl border border-white/10 bg-[#151b2d]/90 px-4 py-3 text-sm text-[#e5e2e3] placeholder-[#c7c4d7]/50 transition-colors focus:border-[#2fd9f4]/50 focus:outline-none"
                  />
                </div>

                {/* Console Log if transmitting */}
                {status === "transmitting" && (
                  <div className="font-jetbrains space-y-1 rounded-xl border border-[#2fd9f4]/30 bg-[#0c1324] p-3 text-xs text-[#2fd9f4]">
                    {transmissionLog.map((log, idx) => (
                      <div key={idx}>{log}</div>
                    ))}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "transmitting"}
                  className="neon-btn font-inter flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl py-4 text-xs font-bold uppercase tracking-wider shadow-lg disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  <span>
                    {status === "transmitting"
                      ? "Transmitting Payload..."
                      : "Transmit Message"}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
