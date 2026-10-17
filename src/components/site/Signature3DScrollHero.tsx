import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  MessageSquare,
  Phone,
  ShieldCheck,
  Wrench,
  Wind,
  Sparkles,
  Bug,
  ShieldAlert,
} from "lucide-react";
import heroAcImg from "@/assets/gallery/3.jpg";
import heroCleanImg from "@/assets/hero-clean.jpg";
import heroPestImg from "@/assets/hero-pest.jpg";
import heroTermiteImg from "@/assets/hero-maint.jpg";
import { company } from "@/data/site";
import { cn } from "@/lib/utils";

interface HeroScene {
  id: number;
  number: string;
  category: string;
  title: string;
  eyebrow: string;
  descriptionLines: string[];
  equipment: string;
  equipmentDetail: string[];
  ctaLabel: string;
  ctaRoute: string;
  waText: string;
  image: string;
  alt: string;
  statBadge: string;
  icon: typeof Wind;
}

const heroScenes: HeroScene[] = [
  {
    id: 0,
    number: "01",
    category: "Division 01 · Climate Engineering",
    eyebrow: "Specialized HVAC & Cooling",
    title: "AC SERVICES",
    descriptionLines: [
      "Master pressure coil cleansing, precision refrigerant balancing, and electrical fault diagnostics.",
      "Engineered to restore maximum cooling performance, lower energy consumption, and eliminate noise.",
      "Certified in-house technicians backed by digital diagnostic reports and 24/7 emergency dispatch.",
    ],
    equipment:
      "Digital manifold gauges, high-pressure jet wash kit, and thermal temperature sensors.",
    equipmentDetail: [
      "Digital Manifold Gauges",
      "High-Pressure Jet Washer",
      "OEM Refrigerant Recharging Kit",
    ],
    ctaLabel: "Book AC Services",
    ctaRoute: "/ac-services",
    waText: "Hello Shaheen Services, I would like to book professional AC Services & Diagnostics.",
    image: heroAcImg,
    alt: "Shaheen Services technician in official red polo and grey trousers servicing split AC unit with precision tools",
    statBadge: "OEM Pressure Diagnostics",
    icon: Wind,
  },
  {
    id: 1,
    number: "02",
    category: "Division 02 · Commercial & Residential",
    eyebrow: "Hygienic Detailing Solutions",
    title: "DEEP CLEANING",
    descriptionLines: [
      "Intensive room-by-room detailing for newly constructed, renovated, and corporate facilities.",
      "Commercial-grade HEPA extraction machinery, steam sanitisation, and eco-certified formulations.",
      "Spotless, hygienic living and commercial environments certified by on-site supervisor inspection.",
    ],
    equipment:
      "Commercial backpack extraction vacuum, steam sanitiser, and single-disc rotary scrubbers.",
    equipmentDetail: [
      "Commercial HEPA Extraction Vacuum",
      "Steam Sanitising Wand",
      "Eco-Certified Disinfectants",
    ],
    ctaLabel: "Book Deep Cleaning",
    ctaRoute: "/cleaning",
    waText: "Hello Shaheen Services, I would like to schedule a Deep Cleaning service.",
    image: heroCleanImg,
    alt: "Shaheen Services technician in red polo and grey trousers with commercial HEPA backpack vacuum and cleaning station",
    statBadge: "Hospital-Grade Detailing",
    icon: Sparkles,
  },
  {
    id: 2,
    number: "03",
    category: "Division 03 · Certified Pest Management",
    eyebrow: "Municipal-Approved IPM",
    title: "PEST CONTROL",
    descriptionLines: [
      "Integrated Pest Management (IPM) deploying odourless, low-toxicity, approved formulations.",
      "Targeted eradication of cockroaches, bed bugs, rodents, and flying pests with zero occupant disruption.",
      "Preventive residual barriers creating cleaner, safer residential and commercial surroundings.",
    ],
    equipment:
      "Backpack pressure sprayer, targeted wand applicators, and certified protective gear.",
    equipmentDetail: [
      "Pressure Backpack Sprayer",
      "Low-Odour Residual Formulations",
      "Certified Safety PPE & Goggles",
    ],
    ctaLabel: "Book Pest Control",
    ctaRoute: "/pest-control",
    waText: "Hello Shaheen Services, I would like to inquire about Pest Control treatments.",
    image: heroPestImg,
    alt: "Shaheen Services pest control technician in red polo, safety goggles, and backpack pressure sprayer",
    statBadge: "Approved Eco-Safe Formulations",
    icon: Bug,
  },
  {
    id: 3,
    number: "04",
    category: "Division 04 · Structural Protection",
    eyebrow: "Sub-Slab & Soil Proofing",
    title: "TERMITE CONTROL",
    descriptionLines: [
      "Pre- and post-construction subterranean termite inspection and deep foundation chemical barrier proofing.",
      "Precision drilling, pressurized foundation injection, and acoustic cavity detection without property damage.",
      "Long-term structural defense protecting property investments from severe structural termite decay.",
    ],
    equipment:
      "Sub-surface injection rods, high-pressure injection pumps, and acoustic cavity scanners.",
    equipmentDetail: [
      "Sub-Surface Chemical Injection Rod",
      "Acoustic Cavity Scanner",
      "Epoxy Floor-Sealing Kit",
    ],
    ctaLabel: "Book Termite Control",
    ctaRoute: "/pest-control",
    waText:
      "Hello Shaheen Services, I would like to request a Termite Control inspection and barrier treatment.",
    image: heroTermiteImg,
    alt: "Shaheen Services technician in official red polo and grey trousers with precision termite inspection and treatment equipment",
    statBadge: "Multi-Year Barrier Warranty",
    icon: ShieldAlert,
  },
];

export function Signature3DScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handler = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Ambient 3D Depth Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isReducedMotion) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    const particles: {
      x: number;
      y: number;
      z: number;
      size: number;
      speed: number;
      alpha: number;
    }[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 800 + 100,
        size: Math.random() * 2.2 + 1,
        speed: Math.random() * 0.35 + 0.12,
        alpha: Math.random() * 0.35 + 0.12,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Soft ambient focal light with crimson hint
      const grad = ctx.createRadialGradient(
        width / 2 + mouseOffset.x * 70,
        height * 0.45 + mouseOffset.y * 50,
        40,
        width / 2,
        height * 0.45,
        width * 0.65,
      );
      grad.addColorStop(0, "rgba(185, 28, 28, 0.09)");
      grad.addColorStop(0.45, "rgba(246, 214, 214, 0.04)");
      grad.addColorStop(1, "rgba(255, 248, 248, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Depth particles
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        const parallaxX = p.x + mouseOffset.x * (p.z * 0.035);
        const parallaxY = p.y + mouseOffset.y * (p.z * 0.035);

        ctx.beginPath();
        ctx.arc(parallaxX, parallaxY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(185, 28, 28, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
    };
  }, [mouseOffset, isReducedMotion]);

  // Pinned Scroll Progression across 4 Scenes
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

          // 4 scenes evenly distributed across scroll progression
          if (ratio < 0.25) {
            setActiveSceneIndex(0);
          } else if (ratio < 0.5) {
            setActiveSceneIndex(1);
          } else if (ratio < 0.75) {
            setActiveSceneIndex(2);
          } else {
            setActiveSceneIndex(3);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const scrollToScene = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const totalDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + totalDistance * (index * 0.28 + 0.05);
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
    setActiveSceneIndex(index);
  };

  const current = heroScenes[activeSceneIndex];
  const CurrentIcon = current.icon;

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-[#FFF8F8] text-[#242424] h-[360vh] lg:h-[390vh]"
      aria-label="Shaheen Services Pinned 3D Hero"
    >
      {/* Sticky Full-Screen Pinned Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-20 pb-5 px-4 md:px-8 lg:px-12 select-none">
        {/* Background Depth Canvas */}
        <canvas
          ref={canvasRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        />

        {/* Ambient Glow shifting in sync with active scene lighting */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[35vh] rounded-full blur-3xl transition-all duration-700 ease-out",
            activeSceneIndex === 0 &&
              "bg-gradient-to-tr from-[#F6D6D6]/50 via-sky-100/35 to-[#B91C1C]/15",
            activeSceneIndex === 1 &&
              "bg-gradient-to-tr from-[#F6D6D6]/50 via-emerald-100/35 to-[#B91C1C]/15",
            activeSceneIndex === 2 &&
              "bg-gradient-to-tr from-[#F6D6D6]/50 via-amber-100/35 to-[#B91C1C]/15",
            activeSceneIndex === 3 &&
              "bg-gradient-to-tr from-[#F6D6D6]/50 via-rose-100/35 to-[#B91C1C]/15",
          )}
        />

        {/* Scene Switcher Bar (Pill Controls) */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full mt-1">
          <div className="inline-flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full border border-border/80 bg-white/90 shadow-soft backdrop-blur-md">
            {heroScenes.map((s, idx) => {
              const active = idx === activeSceneIndex;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollToScene(idx)}
                  className={cn(
                    "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300",
                    active
                      ? "bg-[#B91C1C] text-white shadow-glow scale-[1.02]"
                      : "text-[#242424]/75 hover:text-[#B91C1C] hover:bg-[#F6D6D6]/30",
                  )}
                  aria-label={`Jump to Scene ${s.number}: ${s.title}`}
                >
                  <span className="font-mono text-[0.7rem] opacity-80">{s.number}</span>
                  <span className="hidden sm:inline">{s.title}</span>
                </button>
              );
            })}
          </div>

          {/* 4-Stage Progress Track */}
          <div className="w-48 sm:w-64 h-1 bg-border/60 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-[#B91C1C] transition-all duration-150 ease-out rounded-full"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
        </div>

        {/* Main 3-Column Hero Grid: Left (Description) | Center (Technician) | Right (Large Title) */}
        <div className="relative z-10 grid flex-1 w-full max-w-7xl mx-auto grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-8 my-auto">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Concise 3-Line Description & Contextual CTA   */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1 transition-all duration-500">
            <div
              key={activeSceneIndex}
              className="animate-in fade-in slide-in-from-left-2 duration-500"
            >
              {/* Division Eyebrow */}
              <div className="inline-flex items-center gap-2 w-fit rounded-full bg-[#F6D6D6] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
                <CurrentIcon className="h-3.5 w-3.5" />
                <span>{current.category}</span>
              </div>

              {/* Concise 3-line description with dedicated rhythm */}
              <div className="mt-4 space-y-2 min-h-[5.5rem]">
                {current.descriptionLines.map((line, lIdx) => (
                  <p
                    key={lIdx}
                    className="text-xs sm:text-sm md:text-[0.95rem] font-medium leading-relaxed text-[#242424]/90"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Equipment HUD Chip */}
            <div className="mt-4 rounded-2xl border border-border bg-white/85 p-3.5 shadow-soft backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B91C1C]">
                <Wrench className="h-3.5 w-3.5" />
                <span>Assigned Equipment & Safety Gear:</span>
              </div>
              <p className="mt-1 text-xs font-semibold text-[#242424] leading-normal">
                {current.equipment}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {current.equipmentDetail.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center text-[0.68rem] font-medium bg-[#FFF8F8] border border-border/80 px-2 py-0.5 rounded-md text-[#242424]/85"
                  >
                    • {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Contextual CTAs */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                to={current.ctaRoute}
                className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-3 text-xs font-bold text-white shadow-glow transition hover:brightness-110 active:scale-[0.98]"
              >
                <span>{current.ctaLabel}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={`https://wa.me/923267775000?text=${encodeURIComponent(current.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-xs font-bold text-[#242424] transition hover:bg-[#FFF8F8] hover:border-primary active:scale-[0.98]"
              >
                <MessageSquare className="h-4 w-4 text-[#25D366]" />
                <span>WhatsApp Query</span>
              </a>
            </div>

            {/* Helpline prompt */}
            <div className="mt-3.5 flex items-center gap-2 text-[0.72rem] text-muted-foreground">
              <Phone className="h-3 w-3 text-primary" />
              <span>Direct 24/7 Helpline: </span>
              <a href={company.phoneHref} className="font-bold text-foreground hover:text-primary">
                {company.phone}
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CENTER COLUMN: Realistic Service Technician & 3D Stage    */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 flex items-center justify-center order-1 lg:order-2 h-[38vh] sm:h-[44vh] lg:h-[58vh] relative">
            <div
              className="relative w-full h-full max-w-[340px] lg:max-w-[390px] flex items-center justify-center transition-transform duration-200 ease-out"
              style={
                !isReducedMotion
                  ? {
                      transform: `perspective(1000px) rotateY(${mouseOffset.x * 10}deg) rotateX(${-mouseOffset.y * 7}deg)`,
                      transformStyle: "preserve-3d",
                    }
                  : undefined
              }
            >
              {/* Backing Card with Soft Glass & Rim Light */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/85 via-white/55 to-[#F6D6D6]/35 border border-white/70 shadow-float backdrop-blur-sm -z-10" />

              {/* Technician Cross-Fade Stage */}
              <div className="relative w-full h-full p-2.5 flex items-center justify-center overflow-hidden rounded-3xl">
                {heroScenes.map((scene, idx) => {
                  const isActive = idx === activeSceneIndex;
                  return (
                    <div
                      key={scene.id}
                      className={cn(
                        "absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out",
                        isActive
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none",
                      )}
                    >
                      <img
                        src={scene.image}
                        alt={scene.alt}
                        loading={idx === 0 ? "eager" : "lazy"}
                        className="h-full w-full object-cover object-center rounded-2xl filter drop-shadow-md transition-transform duration-500 hover:scale-[1.02]"
                      />

                      {/* Equipment Spec Tag Pill */}
                      <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/60 bg-white/95 p-2 shadow-soft backdrop-blur-md text-center">
                        <span className="block text-[0.66rem] font-extrabold uppercase tracking-wider text-[#B91C1C]">
                          Uniform & Equipment Verified
                        </span>
                        <span className="block text-[0.72rem] font-semibold text-[#242424] truncate">
                          Red Shaheen Polo · Grey Trousers · {scene.statBadge}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Verified Badge */}
              <div className="absolute -top-3 -right-3 rounded-full bg-white border border-border px-3 py-1 shadow-soft flex items-center gap-1.5 text-[0.68rem] font-bold text-[#B91C1C]">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                <span>Certified Specialist</span>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Large Service Heading & Scene Indicator     */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 flex flex-col justify-center order-3 text-left lg:text-right">
            <div
              key={activeSceneIndex}
              className="animate-in fade-in slide-in-from-right-2 duration-500"
            >
              {/* Scene Numeric Counter */}
              <div className="flex items-center lg:justify-end gap-3">
                <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
                  Scene Progression
                </span>
                <span className="font-display text-4xl lg:text-5xl font-extrabold text-[#242424] tracking-tight">
                  {current.number}
                  <span className="text-xl text-[#242424]/40 font-normal">/04</span>
                </span>
              </div>

              {/* Sub-heading */}
              <span className="mt-2 block text-xs font-bold uppercase tracking-widest text-[#242424]/60">
                {current.eyebrow}
              </span>

              {/* Massive Heading */}
              <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#242424] tracking-tight leading-none uppercase">
                {current.title}
              </h1>

              {/* Accent Bar */}
              <div className="mt-4 flex items-center lg:justify-end gap-2">
                <div className="h-1 w-12 rounded-full bg-[#B91C1C]" />
                <div className="h-1 w-4 rounded-full bg-[#F6D6D6]" />
              </div>
            </div>

            {/* Context Badge */}
            <div className="mt-6 lg:ml-auto max-w-sm rounded-2xl border border-border/80 bg-white/70 p-4 shadow-soft backdrop-blur-sm">
              <span className="block font-display text-xs font-bold text-[#242424]">
                Direct Single-Contract Accountability
              </span>
              <p className="mt-1 text-xs text-[#242424]/75 leading-relaxed">
                Every service visit is supervised by on-site engineers with calibrated tooling and
                digital sign-off documentation.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="relative z-20 flex items-center justify-between w-full max-w-7xl mx-auto pt-2 border-t border-border/50 text-xs text-[#242424]/70">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#B91C1C] animate-pulse" />
            <span className="font-medium text-[0.72rem]">
              Scroll to explore all 4 service scenes · Pinned stage releases automatically
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1 text-[0.72rem] font-bold text-[#B91C1C]">
            <span>Scroll Down</span>
            <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
