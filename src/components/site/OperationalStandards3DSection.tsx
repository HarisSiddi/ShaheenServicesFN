import { useState } from "react";
import {
  ShieldCheck,
  HardHat,
  FileCheck2,
  MessageSquare,
  Clock,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { operationalStandards } from "@/data/site";
import { Reveal } from "@/components/site/motion";
import { cn } from "@/lib/utils";

const standardIcons = [ShieldCheck, HardHat, FileCheck2, MessageSquare, Clock, HeartHandshake];

export function OperationalStandards3DSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="operational-standards"
      className="section-y bg-[#242424] text-[#FFF8F8] border-t border-white/10 relative overflow-hidden scroll-mt-20"
      aria-label="Our Operational Standards"
    >
      {/* Background Lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#B91C1C]/15 blur-3xl -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#B91C1C]/10 blur-3xl -z-10"
      />

      <div className="container-x">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#F6D6D6] backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#B91C1C]" />
            <span>Strict Field Principles</span>
          </div>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            OUR OPERATIONAL STANDARDS
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#FFF8F8]/75 max-w-xl mx-auto">
            Governing rules and quality benchmarks that ensure technical consistency, property
            safety, and complete accountability across every trade division.
          </p>
        </div>

        {/* Floating 3D Cards Grid (Normal Document Flow, NOT Pinned) */}
        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {operationalStandards.map((std, idx) => {
            const IconComp = standardIcons[idx] || ShieldCheck;
            const isHovered = hoveredIndex === idx;

            return (
              <Reveal key={std.code} delay={idx * 50}>
                <div
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={cn(
                    "relative h-full rounded-3xl border p-6 sm:p-7 backdrop-blur-sm transition-all duration-500",
                    "perspective-1000 transform-gpu",
                    isHovered
                      ? "border-[#B91C1C] bg-white/10 shadow-glow -translate-y-2.5 scale-[1.02]"
                      : "border-white/10 bg-white/5 shadow-soft hover:border-white/20",
                  )}
                  style={{
                    transform: isHovered
                      ? "perspective(1000px) rotateX(4deg) translateY(-8px)"
                      : "perspective(1000px) rotateX(0deg)",
                  }}
                >
                  {/* Top Numeric & Icon Bar */}
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#B91C1C] text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                      <IconComp className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-2xl font-black text-white/30">{std.code}</span>
                  </div>

                  {/* Standard Title */}
                  <h3 className="mt-5 font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                    {std.title}
                  </h3>

                  {/* Short highlight */}
                  <p className="mt-2 text-xs font-semibold text-[#F6D6D6] leading-normal">
                    {std.short}
                  </p>

                  {/* Description */}
                  <p className="mt-2 text-xs text-[#FFF8F8]/75 leading-relaxed">
                    {std.description}
                  </p>

                  {/* Border Accent Highlight on Bottom */}
                  <div
                    className={cn(
                      "mt-5 h-0.5 rounded-full transition-all duration-500",
                      isHovered ? "w-full bg-[#B91C1C]" : "w-12 bg-white/20",
                    )}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
