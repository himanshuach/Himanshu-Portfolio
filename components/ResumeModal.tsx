"use client";

import React, { useState } from 'react';
import { X, Download, FileText, ExternalLink, CheckCircle2, Copy, Eye, Terminal } from 'lucide-react';
import { links } from '../config';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const resumeUrl = "/Himanshu_Dev_1Y0E.pdf";

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(links.ownerEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="glass-panel w-full max-w-4xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#151b2d] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#2fd9f4]/10 border border-[#2fd9f4]/20 text-[#2fd9f4]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-sora text-lg font-bold text-[#dbfcff]">
                Himanshu Raj — Resume / CV
              </h3>
              <p className="font-jetbrains text-xs text-[#c7c4d7]">
                Frontend-Focused Full Stack Developer // AI Engineering
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 text-[#c7c4d7] hover:text-white border border-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content View Body */}
        <div className="flex-1 bg-[#0c1324] p-4 sm:p-6 overflow-y-auto min-h-[450px] relative">
          <object
            data={resumeUrl}
            type="application/pdf"
            className="w-full h-[550px] rounded-xl border border-white/10 bg-slate-900"
          >
            <div className="flex flex-col items-center justify-center h-[400px] text-center p-6 space-y-4">
              <FileText className="w-12 h-12 text-[#2fd9f4] mx-auto" />
              <h4 className="font-sora text-xl font-bold text-[#e5e2e3]">Resume Preview</h4>
              <p className="font-inter text-sm text-[#c7c4d7] max-w-md">
                Your browser doesn&apos;t support direct PDF embedding, but you can download or view the file in a new tab anytime.
              </p>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="neon-btn px-6 py-3 rounded-xl font-inter text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Open Resume PDF</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </object>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-6 bg-[#151b2d] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="ghost-btn px-4 py-2 rounded-xl text-xs font-jetbrains text-[#c7c4d7] hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2fd9f4]" />
                  <span className="text-[#2fd9f4]">Copied Email</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ghost-btn px-4 py-2.5 rounded-xl text-xs font-jetbrains text-[#c7c4d7] hover:text-white flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Full Screen</span>
            </a>

            <a
              href={resumeUrl}
              download="Himanshu_Raj_Resume.pdf"
              className="neon-btn px-5 py-2.5 rounded-xl font-inter text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
