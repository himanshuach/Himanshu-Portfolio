"use client";

import React, { useEffect, useRef, useState } from "react";
import { AIPillar } from "../types";
import {
  GitBranch,
  Database,
  Bot,
  Zap,
  RefreshCw,
  Cpu,
  Activity,
} from "lucide-react";

interface AIEngineeringSectionProps {
  pillars: AIPillar[];
}

export const AIEngineeringSection: React.FC<AIEngineeringSectionProps> = ({
  pillars,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeMode, setActiveMode] = useState<"neural" | "rag" | "agent">(
    "neural"
  );
  const [pulseCount, setPulseCount] = useState(0);
  const [fps, setFps] = useState(60);

  // Dynamic interactive canvas simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 384);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Generate nodes based on active mode
    const nodeCount =
      activeMode === "rag" ? 24 : activeMode === "agent" ? 32 : 40;
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      glow: string;
      type: string;
    }

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const isCyan = Math.random() > 0.4;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.5 + 1.5,
        color: isCyan ? "#2fd9f4" : "#818cf8",
        glow: isCyan ? "rgba(47, 217, 244, 0.4)" : "rgba(99, 102, 241, 0.4)",
        type: isCyan ? "retrieval" : "reasoning",
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let lastTime = performance.now();
    let frameCount = 0;

    const render = () => {
      const now = performance.now();
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }

      ctx.clearRect(0, 0, width, height);

      // Subtle grid overlay
      ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse attraction
        const dxMouse = mouseX - node.x;
        const dyMouse = mouseY - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 120 && distMouse > 0) {
          node.x += (dxMouse / distMouse) * 0.5;
          node.y += (dyMouse / distMouse) * 0.5;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = activeMode === "rag" ? 140 : 110;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            ctx.strokeStyle =
              node.color === "#2fd9f4"
                ? `rgba(47, 217, 244, ${alpha})`
                : `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.glow;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeMode, pulseCount]);

  const triggerPulse = () => {
    setPulseCount((prev) => prev + 1);
  };

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "hub":
        return <GitBranch className="h-5 w-5 text-[#2fd9f4]" />;
      case "dataset":
        return <Database className="h-5 w-5 text-[#2fd9f4]" />;
      case "smart_toy":
        return <Bot className="h-5 w-5 text-[#2fd9f4]" />;
      case "speed":
        return <Zap className="h-5 w-5 text-[#2fd9f4]" />;
      default:
        return <Cpu className="h-5 w-5 text-[#2fd9f4]" />;
    }
  };

  return (
    <section id="ai" className="relative py-20 md:py-32">
      {/* Section Header */}
      <header className="relative mb-12 text-left md:mb-16">
        <h2 className="font-sora mb-4 text-[32px] font-semibold tracking-tight text-[#dbfcff] md:text-[40px]">
          AI Engineering Showcase
        </h2>
        <p className="font-inter max-w-3xl text-[16px] leading-relaxed text-[#c7c4d7] md:text-[18px]">
          Building the next generation of intelligent agents and RAG systems.
          Architecting high-performance, context-aware AI solutions leveraging
          state-of-the-art models and vector semantics.
        </p>
      </header>

      {/* Architecture Canvas Visualizer */}
      <div className="mb-16 w-full">
        <div className="card-hover-effect group relative flex h-72 w-full flex-col justify-between overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#151b2d]/80 shadow-2xl backdrop-blur-xl md:h-96">
          {/* Interactive HTML5 Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full cursor-crosshair"
          />

          {/* Canvas Top Bar Controls */}
          <div className="z-10 flex flex-wrap items-center justify-between bg-gradient-to-b from-[#151b2d]/95 to-transparent p-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-ping rounded-full bg-[#2fd9f4]" />
              <span className="font-jetbrains text-xs font-semibold uppercase tracking-wider text-[#2fd9f4]">
                SYSTEM SIMULATOR
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveMode("neural")}
                className={`font-jetbrains cursor-pointer rounded px-2.5 py-1 text-[11px] transition-colors ${
                  activeMode === "neural"
                    ? "border border-[#2fd9f4]/40 bg-[#2fd9f4]/20 font-semibold text-[#2fd9f4]"
                    : "bg-white/5 text-[#c7c4d7] hover:text-white"
                }`}
              >
                Neural Net
              </button>
              <button
                onClick={() => setActiveMode("rag")}
                className={`font-jetbrains cursor-pointer rounded px-2.5 py-1 text-[11px] transition-colors ${
                  activeMode === "rag"
                    ? "border border-[#818cf8]/40 bg-[#818cf8]/20 font-semibold text-[#c0c1ff]"
                    : "bg-white/5 text-[#c7c4d7] hover:text-white"
                }`}
              >
                RAG Pipeline
              </button>
              <button
                onClick={() => setActiveMode("agent")}
                className={`font-jetbrains cursor-pointer rounded px-2.5 py-1 text-[11px] transition-colors ${
                  activeMode === "agent"
                    ? "border border-[#2fd9f4]/40 bg-[#2fd9f4]/20 font-semibold text-[#2fd9f4]"
                    : "bg-white/5 text-[#c7c4d7] hover:text-white"
                }`}
              >
                Agent Graph
              </button>
              <button
                onClick={triggerPulse}
                title="Pulse Network Synapse"
                className="cursor-pointer rounded bg-white/5 p-1 text-[#2fd9f4] transition-colors hover:bg-white/10 hover:text-white"
              >
                <RefreshCw className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Center Graphic & Label */}
          <div className="pointer-events-none z-10 my-auto self-center px-6 py-4 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.15)] bg-[#0c1324]/90 text-[#2fd9f4] shadow-lg shadow-[#2fd9f4]/15">
              <Cpu className="h-6 w-6 animate-pulse" />
            </div>
            <h3 className="font-sora mb-1 text-[18px] font-semibold text-[#e5e2e3] md:text-[20px]">
              System Architecture Canvas
            </h3>
            <p className="font-jetbrains text-[12px] font-medium uppercase tracking-widest text-[#2fd9f4]">
              Neural Pathway Visualization Active {"//"} Hover to Interact
            </p>
          </div>

          {/* Canvas Bottom Status Bar */}
          <div className="font-jetbrains z-10 flex flex-wrap items-center justify-between border-t border-[rgba(255,255,255,0.06)] bg-[#151b2d]/90 px-4 py-2.5 text-[11px] text-[#c7c4d7]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-semibold text-[#2fd9f4]">
                <Activity className="h-3.5 w-3.5" />
                <span>LATENCY: 12ms</span>
              </span>
              <span className="hidden sm:inline">VECTORS: 128,400</span>
              <span className="hidden sm:inline">
                EMBEDDING: text-embedding-3-small
              </span>
            </div>
            <div className="text-[10px] text-[#89ceff]">
              FPS: {fps} {"//"} REALTIME
            </div>
          </div>
        </div>
      </div>

      {/* AI Pillars 2x2 Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {pillars.map((pillar) => {
          const isCyan = pillar.glowColor === "cyan";
          return (
            <article
              key={pillar.id}
              className="card-hover-effect group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#151b2d]/70 p-6 backdrop-blur-md sm:p-8"
            >
              {/* Glowing Ambient Corner */}
              <div
                className={`pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-full opacity-0 transition-opacity duration-500 group-hover:opacity-15 ${
                  isCyan ? "bg-[#2fd9f4]" : "bg-[#6366f1]"
                }`}
              />

              <div>
                <header className="mb-4 flex items-center gap-3.5">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-[#2fd9f4]">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <h3 className="font-sora text-[18px] font-semibold text-[#e5e2e3] transition-colors group-hover:text-[#2fd9f4] md:text-[20px]">
                    {pillar.title}
                  </h3>
                </header>

                <p className="font-inter mb-6 text-[15px] leading-relaxed text-[#c7c4d7]">
                  {pillar.description}
                </p>

                {pillar.details && pillar.details.length > 0 && (
                  <ul className="mb-6 space-y-2">
                    {pillar.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="font-inter flex items-start gap-2 text-xs text-[#b9cacb]"
                      >
                        <span className="mt-0.5 text-[#2fd9f4]">▸</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-auto flex flex-wrap gap-2 border-t border-[rgba(255,255,255,0.06)] pt-4">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-jetbrains rounded border border-[rgba(255,255,255,0.08)] bg-white/5 px-3 py-1 text-[12px] text-[#e5e2e3]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
