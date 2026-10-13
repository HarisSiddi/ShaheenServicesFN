import { useState } from "react";
import {
  MessageSquare,
  Search,
  FileSpreadsheet,
  Wrench,
  CheckCircle2,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { consultationProcessSteps } from "@/data/site";
import { Reveal } from "@/components/site/motion";
import { cn } from "@/lib/utils";

const stepIcons = [MessageSquare, Search, FileSpreadsheet, Wrench, CheckCircle2, HeartHandshake];

export function ConsultationProcessSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section
      id="process-section"
      className="section-y bg-[#FFF8F8] text-[#242424] border-t border-border/80 relative overflow-hidden"
      aria-label="Workflow Protocol"
    >
      {/* Background Lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 h-80 w-[70vw] rounded-full bg-[#F6D6D6]/35 blur-3xl -z-10"
      />

      <div className="container-x">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F6D6D6] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
            <span>End-to-End Methodology</span>
          </div>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#242424] tracking-tight">
            FROM INITIAL CONSULTATION TO COMPLETION
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#242424]/75 max-w-xl mx-auto">
            A disciplined 6-stage operational protocol ensuring thorough on-site diagnosis, written
            cost transparency, and verifiable supervisor sign-offs.
          </p>
        </div>

        {/* 6 Steps Grid with Visual Connectors (Normal Flow, NOT Pinned) */}
        <div className="mt-14 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {consultationProcessSteps.map((step, idx) => {
            const IconComp = stepIcons[idx] || CheckCircle2;
            const isHovered = hoveredStep === idx;

            return (
              <Reveal key={step.step} delay={idx * 60}>
                <div
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={cn(
                    "relative h-full rounded-3xl border bg-white p-6 sm:p-7 shadow-soft transition-all duration-500",
                    "perspective-1000 transform-gpu",
                    isHovered
                      ? "border-[#B91C1C]/60 shadow-float -translate-y-2 scale-[1.02] ring-2 ring-[#B91C1C]/10"
                      : "border-border hover:border-[#B91C1C]/30",
                  )}
                  style={{
                    transform: isHovered
                      ? "perspective(1000px) rotateX(4deg) translateY(-8px)"
                      : "perspective(1000px) rotateX(0deg)",
                  }}
                >
                  {/* Top Step Pill & Progression Glyphs */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-[#B91C1C]">
                      {step.step}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#FFF8F8] border border-border text-[#B91C1C]">
                      <IconComp className="h-5 w-5" />
                    </span>
                  </div>

                  {/* Stage Headline */}
                  <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-[#242424]">
                    {step.title}
                  </h3>

                  <span className="inline-block mt-1 text-[0.68rem] font-bold text-[#B91C1C] uppercase tracking-wider">
                    {step.short}
                  </span>

                  {/* Step Description */}
                  <p className="mt-2.5 text-xs text-[#242424]/80 leading-relaxed">{step.text}</p>

                  {/* Step Progress Connector Footprint */}
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-[0.7rem] font-semibold text-muted-foreground">
                    <span>Stage {idx + 1} of 6</span>
                    {idx < 5 ? (
                      <span className="flex items-center gap-1 text-[#B91C1C]">
                        Next <ArrowRight className="h-3 w-3" />
                      </span>
                    ) : (
                      <span className="text-emerald-700 font-bold">Complete Handover</span>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
