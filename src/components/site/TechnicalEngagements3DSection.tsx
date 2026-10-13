import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface EngagementCard {
  id: number;
  title: string;
  category: string;
  location: string;
  scope: string;
  executionDetail: string[];
  image: string;
}

const technicalEngagements: EngagementCard[] = [
  {
    id: 0,
    title: "Central VRF Air Conditioning Retrofit",
    category: "HVAC & Climate Services",
    location: "Corporate Plaza Facilities",
    scope:
      "Multi-zone variable refrigerant flow (VRF) commissioning, digital electronic manifold calibration, and branch selector leak isolation.",
    executionDetail: [
      "Digital Nitrogen Pressure Testing",
      "OEM Weight Refrigerant Charge",
      "Smart Thermostat Network Sync",
    ],
    image: "/services/service-hvac.jpg",
  },
  {
    id: 1,
    title: "High-Rise Commercial Deep Detailing",
    category: "Commercial Deep Cleaning",
    location: "Financial District Headquarters",
    scope:
      "Post-renovation multi-story detailing covering diamond marble floor polishing, false ceiling dust extraction, and sanitisation.",
    executionDetail: [
      "Industrial Single-Disc Scrubbing",
      "Hospital-Grade Detergents",
      "Photographic Checklist Handover",
    ],
    image: "/services/service-cleaning.jpg",
  },
  {
    id: 2,
    title: "Subterranean Termite Perimeter Barrier",
    category: "Structural Termite Control",
    location: "Regional Residential Complex",
    scope:
      "Sub-slab drilling and high-pressure chemical barrier saturation targeting subterranean termites without structural surface marring.",
    executionDetail: [
      "Sub-Slab Pressurized Injection",
      "Colour-Matched Epoxy Hole Seal",
      "Multi-Year Documented Warranty",
    ],
    image: "/services/service-termite.jpg",
  },
  {
    id: 3,
    title: "Commercial Distribution Board Overhaul",
    category: "MEP & Electrical Services",
    location: "Manufacturing Logistics Facility",
    scope:
      "Total main switchboard rewire, infrared thermography hot-spot inspection, neat cable trunking, and balanced three-phase load redistribution.",
    executionDetail: [
      "FLIR Thermographic Scan",
      "IEEE Earth Pit Verification",
      "Zero Downtime Phased Cutover",
    ],
    image: "/services/service-electrical.jpg",
  },
  {
    id: 4,
    title: "Commercial Rooftop Solar Array (75 kW)",
    category: "Renewable Solar Solutions",
    location: "Industrial Distribution Warehouse",
    scope:
      "Tier-1 monocrystalline PV array installation, high-wind galvanised structure mounting, hybrid inverters, and net-metering synchronization.",
    executionDetail: [
      "Galvanised High-Wind Framing",
      "Live App Generation Tracking",
      "Utility SLD Formal Sign-Off",
    ],
    image: "/services/service-solar.jpg",
  },
];

export function TechnicalEngagements3DSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const totalDistance = containerRef.current.offsetHeight - window.innerHeight;

          if (totalDistance <= 0) return;

          const current = -rect.top;
          const ratio = Math.min(Math.max(current / totalDistance, 0), 1);
          setScrollProgress(ratio);

          const index = Math.min(
            Math.floor(ratio * technicalEngagements.length),
            technicalEngagements.length - 1,
          );
          setActiveIndex(index);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const total = technicalEngagements.length;

  const nextEngagement = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevEngagement = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section
      id="technical-engagements"
      ref={containerRef}
      className="relative w-full bg-[#FFF8F8] text-[#242424] h-[300vh] lg:h-[340vh] border-t border-border/80"
      aria-label="Recent Technical Engagements 3D Passing Cards"
    >
      {/* Sticky Full-Screen Pinned Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-12 px-4 md:px-8 lg:px-12 select-none">
        {/* Subtle Ambient Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/4 right-1/4 w-[50vw] h-[40vh] rounded-full bg-[#F6D6D6]/40 blur-3xl -z-10"
        />

        {/* Section Header */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F6D6D6] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
              <Layers className="h-3.5 w-3.5" />
              <span>Documented Capability Examples</span>
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#242424]">
              RECENT TECHNICAL ENGAGEMENTS
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#242424]/75 max-w-xl">
              Physical 3D sequence of multi-disciplinary facility contracts, preventive maintenance
              routines, and precision equipment installations.
            </p>
          </div>

          {/* Controls & Counter */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#B91C1C]">
              0{activeIndex + 1} / 0{total}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevEngagement}
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-[#242424] shadow-soft transition hover:bg-[#B91C1C] hover:text-white hover:border-[#B91C1C]"
                aria-label="Previous technical engagement"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextEngagement}
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-[#242424] shadow-soft transition hover:bg-[#B91C1C] hover:text-white hover:border-[#B91C1C]"
                aria-label="Next technical engagement"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3D PASSING CARDS STAGE: Layers moving through Z-axis Depth               */}
        {/* ========================================================================= */}
        <div className="relative z-10 flex-1 w-full max-w-5xl mx-auto flex items-center justify-center my-auto perspective-1200 py-4">
          <div className="relative w-full max-w-3xl h-[420px] sm:h-[460px] flex items-center justify-center">
            {technicalEngagements.map((item, idx) => {
              const diff = idx - activeIndex;
              const isCurrent = diff === 0;
              const isPast = diff < 0;
              const isUpcoming = diff > 0;

              // 3D Passing Card Transform Logic
              let transformStyle = "";
              let opacity = 0;
              let zIndex = 10;
              let pointerEvents: "auto" | "none" = "none";

              if (isCurrent) {
                transformStyle = "translate3d(0, 0, 0px) rotateX(0deg) scale(1)";
                opacity = 1;
                zIndex = 30;
                pointerEvents = "auto";
              } else if (isPast) {
                // Passed card moves forward and upward out of view
                transformStyle = `translate3d(0, -110px, 120px) rotateX(-8deg) scale(1.04)`;
                opacity = 0;
                zIndex = 5;
              } else if (isUpcoming) {
                // Approaching cards stacked in depth background
                const depthOffset = Math.min(diff, 2);
                transformStyle = `translate3d(0, ${depthOffset * 32}px, -${depthOffset * 130}px) rotateX(${depthOffset * 5}deg) scale(${1 - depthOffset * 0.08})`;
                opacity = depthOffset === 1 ? 0.65 : 0.25;
                zIndex = 20 - depthOffset;
              }

              return (
                <div
                  key={item.id}
                  className={cn(
                    "absolute inset-0 rounded-3xl border bg-white shadow-float transition-all duration-700 ease-out overflow-hidden flex flex-col md:flex-row",
                    isCurrent
                      ? "border-[#B91C1C]/40 ring-2 ring-[#B91C1C]/15 shadow-float"
                      : "border-border/80 shadow-soft",
                  )}
                  style={{
                    transform: transformStyle,
                    opacity: opacity,
                    zIndex: zIndex,
                    pointerEvents: pointerEvents,
                  }}
                >
                  {/* Left Card Visual */}
                  <div className="relative md:w-1/2 h-48 md:h-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading={idx === 0 ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                    <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[#B91C1C] shadow-sm">
                      {item.category}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-1.5 text-xs text-white/90">
                      <MapPin className="h-3.5 w-3.5 text-[#B91C1C] shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>

                  {/* Right Card Content */}
                  <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[0.68rem] font-bold text-muted-foreground uppercase tracking-widest">
                          Engagement #0{item.id + 1}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[0.68rem] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                          <ShieldCheck className="h-3 w-3" /> Standard Compliant
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-lg sm:text-xl md:text-2xl font-bold text-[#242424] leading-tight">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-xs leading-relaxed text-[#242424]/80">{item.scope}</p>

                      {/* Technical specifications */}
                      <div className="mt-4 border-t border-border/70 pt-3">
                        <span className="text-[0.68rem] font-bold text-[#B91C1C] uppercase tracking-wider block">
                          Technical Protocol Delivered:
                        </span>
                        <ul className="mt-2 space-y-1.5">
                          {item.executionDetail.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-center gap-2 text-[0.72rem] font-medium text-[#242424]"
                            >
                              <CheckCircle2 className="h-3 w-3 text-[#B91C1C] shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B91C1C] hover:underline"
                      >
                        <span>Inquire About Similar Work</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>

                      <span className="text-[0.68rem] text-muted-foreground">
                        Documented Sign-Off
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Pinned Helper */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pt-3 border-t border-border/50 text-xs text-[#242424]/70">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#B91C1C] animate-pulse" />
            <span className="text-[0.72rem]">
              Scroll down as 3D physical panels advance through perspective depth
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1 text-[0.72rem] font-bold text-[#B91C1C]">
            <span>Release Section on Completion</span>
            <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
