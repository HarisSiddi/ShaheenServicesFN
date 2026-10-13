import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Sparkles,
  Wind,
  Bug,
  Building,
  HardHat,
  Fan,
  Armchair,
  Sofa,
  Droplet,
  Zap,
  Sun,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardData {
  id: number;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  image: string;
  route: string;
  icon: typeof Sparkles;
}

const professionalServices: ServiceCardData[] = [
  {
    id: 0,
    title: "AC Repair & Maintenance",
    category: "Division 01 · Climate",
    description:
      "Deep coil pressure jet wash, precision refrigerant balancing (R410A / R32), and compressor diagnostics for peak cooling output.",
    bullets: [
      "Pressure Jet Cleansing",
      "OEM Refrigerant Recharging",
      "Capacitor & Inverter PCB Testing",
    ],
    image: "/services/service-ac.jpg",
    route: "/ac-services",
    icon: Wind,
  },
  {
    id: 1,
    title: "Deep Cleaning Services",
    category: "Division 02 · Detailing",
    description:
      "Comprehensive room-by-room detailing for newly constructed, renovated, or executive spaces using hospital-grade extraction machinery.",
    bullets: [
      "Post-Construction Residue Removal",
      "Kitchen Degreasing & Hood Steaming",
      "Single-Disc Floor Buffing",
    ],
    image: "/services/service-cleaning.jpg",
    route: "/cleaning",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Pest Control",
    category: "Division 03 · Certified IPM",
    description:
      "Municipality-approved treatments targeting cockroaches, bed bugs, and rodents with odourless, eco-safe active ingredients.",
    bullets: [
      "Cockroach Gel Baiting & Barrier",
      "Bed Bug Eradication Cycles",
      "Tamper-Resistant Rodent Baiting",
    ],
    image: "/services/service-pest.jpg",
    route: "/pest-control",
    icon: Bug,
  },
  {
    id: 3,
    title: "Termite Control",
    category: "Division 04 · Structural Proofing",
    description:
      "Sub-slab drilling, pressurized foundation chemical barrier injection, and acoustic cavity mapping backed by multi-year service warranties.",
    bullets: [
      "Pre-Construction Soil Barrier",
      "Sub-Slab Pressurized Foundation Injection",
      "Acoustic Wall Cavity Scanning",
    ],
    image: "/services/service-termite.jpg",
    route: "/pest-control",
    icon: Bug,
  },
  {
    id: 4,
    title: "Building Management",
    category: "Division 05 · Corporate MEP",
    description:
      "Complete facility oversight, planned preventive maintenance (PPM), and tenant operations for commercial towers and residential complexes.",
    bullets: [
      "Planned Preventive Schedules (PPM)",
      "BMS & MEP Utility Supervision",
      "Centralised Occupant Helpdesk",
    ],
    image: "/services/service-building-mgmt.jpg",
    route: "/facility-management",
    icon: Building,
  },
  {
    id: 5,
    title: "Construction & Maintenance",
    category: "Division 06 · Civil Works",
    description:
      "Civil refurbishments, roof and basement waterproofing membranes, floor screeding, and commercial painting under architectural standards.",
    bullets: [
      "Roof & Foundation Waterproofing",
      "Civil Masonry & Partition Walls",
      "Epoxy & Weather-Shield Finishes",
    ],
    image: "/services/service-construction.jpg",
    route: "/services#construction-and-maintenance",
    icon: HardHat,
  },
  {
    id: 6,
    title: "HVAC Services",
    category: "Division 07 · Industrial Cooling",
    description:
      "Industrial chiller overhauls, VRF/VRV central system commissioning, AHU filter maintenance, and robotic air duct sanitisation.",
    bullets: [
      "Chiller Descaling & Oil Analysis",
      "VRF Digital Diagnostic Balancing",
      "Robotic Air Duct Cleansing",
    ],
    image: "/services/service-hvac.jpg",
    route: "/ac-services",
    icon: Fan,
  },
  {
    id: 7,
    title: "Office Chair Repair",
    category: "Division 08 · Corporate Seating",
    description:
      "Restoration of executive ergonomic seating: heavy-duty Class-4 pneumatic gas lifts, synchronous tilt mechanisms, and PU castors.",
    bullets: [
      "Class-4 Pneumatic Gas Lifts",
      "Tilt & Recline Recalibration",
      "PU Castor & Base Upgrades",
    ],
    image: "/services/service-chair.jpg",
    route: "/services#office-chair-repair",
    icon: Armchair,
  },
  {
    id: 8,
    title: "Sofa & Carpet Cleaning",
    category: "Division 09 · Fabric Extraction",
    description:
      "Hot water injection-extraction lifting deep stains, dust mites, and allergens from imported rugs, upholstery, and commercial carpets.",
    bullets: [
      "Deep Hot Water Extraction",
      "Colour-Safe Stain Neutralisation",
      "Rapid 2-to-4 Hour Dry Times",
    ],
    image: "/services/service-carpet.jpg",
    route: "/cleaning",
    icon: Sofa,
  },
  {
    id: 9,
    title: "Water Tank Cleaning",
    category: "Division 10 · Hygiene Sanitisation",
    description:
      "Confined-space municipal standard underground RCC and overhead tank de-sludging, high-pressure jet wash, and chlorine disinfection.",
    bullets: [
      "Slurry Dewatering & Sludge Removal",
      "High-Pressure Rotary Jetting",
      "UV / Chlorine Biofilm Sanitisation",
    ],
    image: "/services/service-tank.jpg",
    route: "/services#water-tank-cleaning",
    icon: Droplet,
  },
  {
    id: 10,
    title: "Electrical Services",
    category: "Division 11 · Power Distribution",
    description:
      "Distribution board (DB) dressing, thermographic infrared surveys, load balancing, earthing resistance testing, and emergency fault clearance.",
    bullets: [
      "DB Dressing & Neat Trunking",
      "Infrared Hot-Spot Thermography",
      "IEEE Compliant Earth Pit Testing",
    ],
    image: "/services/service-electrical.jpg",
    route: "/electrical",
    icon: Zap,
  },
  {
    id: 11,
    title: "Solar Solutions",
    category: "Division 12 · Renewable Energy",
    description:
      "On-grid and hybrid solar PV engineering, net-metering synchronization, Tier-1 inverters, and high-pressure deionised panel washing.",
    bullets: [
      "Tier-1 High Yield PV Arrays",
      "Net-Metering Utility Approvals",
      "Deionised Solar Panel Cleansing",
    ],
    image: "/services/service-solar.jpg",
    route: "/solar",
    icon: Sun,
  },
];

export function Services3DCircularSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Pinned scroll handler for circular 3D transition
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
            Math.floor(ratio * professionalServices.length),
            professionalServices.length - 1,
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

  const total = professionalServices.length;

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const activeService = professionalServices[activeIndex];

  return (
    <section
      id="services-3d"
      ref={containerRef}
      className="relative w-full bg-[#FFF8F8] text-[#242424] h-[340vh] lg:h-[380vh] border-t border-border/80"
      aria-label="Our Professional Services 3D Circular Sequence"
    >
      {/* Pinned Sticky Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-16 px-4 md:px-8 lg:px-12">
        {/* Ambient Top Light */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[70vw] h-[30vh] rounded-full bg-[#F6D6D6]/40 blur-3xl -z-10"
        />

        {/* Section Heading & Category Tracker */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F6D6D6] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Comprehensive Facility Care</span>
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#242424]">
              OUR PROFESSIONAL SERVICES
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#242424]/75 max-w-xl">
              12 specialized divisions engineered for residential, commercial, and enterprise
              property standards—delivered strictly by certified in-house teams.
            </p>
          </div>

          {/* Quick Controls & Counter */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm font-bold text-[#B91C1C]">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevCard}
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-[#242424] shadow-soft transition hover:bg-[#B91C1C] hover:text-white hover:border-[#B91C1C]"
                aria-label="Previous service"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextCard}
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-[#242424] shadow-soft transition hover:bg-[#B91C1C] hover:text-white hover:border-[#B91C1C]"
                aria-label="Next service"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3D CIRCULAR / CURVED DEPTH STAGE (Desktop & Tablet)                      */}
        {/* ========================================================================= */}
        <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto flex items-center justify-center my-auto perspective-1200 overflow-visible py-4">
          <div className="relative w-full max-w-4xl h-[400px] sm:h-[450px] flex items-center justify-center">
            {professionalServices.map((card, i) => {
              // Calculate offset relative to active card (-total/2 to +total/2)
              let offset = i - activeIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isCurrent = offset === 0;
              const isVisible = Math.abs(offset) <= 3; // Render immediate neighbors for 3D depth

              if (!isVisible && !isMobile) return null;

              // 3D positioning along a curved cylindrical arc
              const angle = offset * 24; // degree step along circular path
              const translateZ = Math.cos((offset * Math.PI) / 6) * 160 - Math.abs(offset) * 110;
              const translateX = offset * 260;
              const scale = isCurrent ? 1 : Math.max(0.78, 1 - Math.abs(offset) * 0.12);
              const opacity = isCurrent ? 1 : Math.max(0.2, 0.7 - Math.abs(offset) * 0.22);
              const IconComp = card.icon;

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "absolute w-full max-w-[340px] sm:max-w-[420px] rounded-3xl border transition-all duration-700 ease-out cursor-pointer select-none",
                    isCurrent
                      ? "z-30 bg-white border-[#B91C1C]/40 shadow-float ring-2 ring-[#B91C1C]/10"
                      : "z-10 bg-white/90 border-border/80 shadow-soft hover:bg-white hover:border-[#B91C1C]/30",
                  )}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${angle * -0.65}deg) scale(${scale})`,
                    opacity: opacity,
                    filter: isCurrent ? "none" : `blur(${Math.min(Math.abs(offset) * 1.5, 4)}px)`,
                    pointerEvents: isCurrent ? "auto" : "none",
                  }}
                >
                  {/* Card Visual Header */}
                  <div className="relative h-44 sm:h-52 overflow-hidden rounded-t-3xl bg-slate-100">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading={isCurrent ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Icon Badge */}
                    <span className="absolute bottom-3 left-4 grid h-10 w-10 place-items-center rounded-2xl bg-[#B91C1C] text-white shadow-glow">
                      <IconComp className="h-5 w-5" />
                    </span>

                    {/* Division Pill */}
                    <span className="absolute top-3 right-4 rounded-full bg-white/95 px-3 py-1 text-[0.66rem] font-bold uppercase tracking-wider text-[#242424] backdrop-blur-sm shadow-sm">
                      {card.category}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#242424]">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-[#242424]/80 line-clamp-2">
                        {card.description}
                      </p>

                      {/* Key features bullet points */}
                      <ul className="mt-3.5 space-y-1.5 border-t border-border/60 pt-3">
                        {card.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-center gap-2 text-[0.72rem] font-medium text-[#242424]"
                          >
                            <Check className="h-3 w-3 text-[#B91C1C] shrink-0" />
                            <span className="truncate">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Actions */}
                    <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3.5">
                      <Link
                        to={card.route}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B91C1C] hover:underline"
                      >
                        <span>Explore Service</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>

                      <a
                        href={`https://wa.me/923267775000?text=${encodeURIComponent(
                          `Hello Shaheen Services, I am interested in inquiring about ${card.title}.`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF8F8] border border-border px-3.5 py-1.5 text-[0.72rem] font-bold text-[#242424] transition hover:bg-[#B91C1C] hover:text-white hover:border-[#B91C1C]"
                      >
                        <MessageCircle className="h-3.5 w-3.5 text-emerald-600 group-hover:text-white" />
                        <span>Contact Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Orbit Indicator & Scroll Progression */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-border/50 text-xs">
          {/* Service Carousel Dot Navigation */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {professionalServices.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  idx === activeIndex
                    ? "w-7 bg-[#B91C1C]"
                    : "w-2 bg-border/80 hover:bg-[#B91C1C]/50",
                )}
                aria-label={`Jump to ${s.title}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 text-[#242424]/70 text-[0.72rem]">
            <span className="font-medium">
              Curved 3D card orbit transitions forward as you scroll
            </span>
            <ChevronDown className="h-3.5 w-3.5 text-[#B91C1C] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
