import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Camera, ChevronDown, ShieldCheck } from "lucide-react";
import img1 from "@/assets/gallery/1.jpg";
import img2 from "@/assets/gallery/2.jpg";
import img3 from "@/assets/gallery/3.jpg";
import img4 from "@/assets/gallery/4.jpg";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: number;
  label: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 0,
    label: "Image 1",
    number: "01",
    title: "Precision Electrical & MEP Diagnostics",
    category: "Technical Calibration",
    description:
      "Shaheen certified technician executing precision wiring adjustments, conduit alignment, and electrical terminal testing with insulated safety screwdrivers.",
    image: img1,
    alt: "Shaheen Services technician in red polo repairing electrical switchboard",
  },
  {
    id: 1,
    label: "Image 2",
    number: "02",
    title: "Mobile Field Response & Rapid Dispatch",
    category: "Operations Fleet",
    description:
      "Rapid dispatch technician carrying an industrial multi-compartment tool chest, positioned beside our dedicated Shaheen Services maintenance vehicle.",
    image: img2,
    alt: "Shaheen Services technician walking with toolbox in front of company van",
  },
  {
    id: 2,
    label: "Image 3",
    number: "03",
    title: "Commercial AC Servicing & Commissioning",
    category: "HVAC Engineering",
    description:
      "Three-specialist Shaheen team conducting precision indoor split AC diagnostic inspection, tablet-assisted sensor logging, and electrical servicing.",
    image: img3,
    alt: "Three Shaheen Services technicians servicing indoor split AC unit with tablet and precision tools",
  },
  {
    id: 3,
    label: "Image 4",
    number: "04",
    title: "Multi-Disciplinary Engineering Operations Fleet",
    category: "Enterprise Workforce",
    description:
      "Our full corps of certified HVAC engineers, deep cleaners, pest technicians, and electricians gathered in official Shaheen Services uniform.",
    image: img4,
    alt: "Full team of Shaheen Services technicians in uniform in front of company van and building",
  },
];

export function CircularImageGallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Synchronized pinned scroll progression for the 4 circular gallery images
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

          // Divide 4 stages evenly across the scroll progression
          if (ratio < 0.25) {
            setActiveIndex(0);
          } else if (ratio < 0.5) {
            setActiveIndex(1);
          } else if (ratio < 0.75) {
            setActiveIndex(2);
          } else {
            setActiveIndex(3);
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

  const total = galleryItems.length;

  const scrollToGalleryIndex = (idx: number) => {
    if (!containerRef.current) {
      setActiveIndex(idx);
      return;
    }
    const containerTop = containerRef.current.offsetTop;
    const totalDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + totalDistance * (idx * 0.26 + 0.04);
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
    setActiveIndex(idx);
  };

  const nextImage = () => {
    const nextIdx = (activeIndex + 1) % total;
    scrollToGalleryIndex(nextIdx);
  };

  const prevImage = () => {
    const prevIdx = (activeIndex - 1 + total) % total;
    scrollToGalleryIndex(prevIdx);
  };

  const current = galleryItems[activeIndex];

  // Physical continuous rotation along circular track driven by scroll + manual selection
  const orbitAngle = scrollProgress * 270;

  return (
    <section
      id="circular-gallery"
      ref={containerRef}
      className="relative w-full bg-[#242424] text-[#FFF8F8] h-[320vh] lg:h-[350vh] border-t border-white/10 scroll-mt-20"
      aria-label="Shaheen Services Circular Image Gallery"
    >
      {/* Sticky Full-Screen Pinned Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-12 px-4 md:px-8 lg:px-12 select-none">
        {/* Subtle Background Lighting & Radial Depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[850px] max-h-[850px] rounded-full bg-[#B91C1C]/15 blur-3xl -z-10"
        />

        {/* Section Header */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#F6D6D6] backdrop-blur-sm">
              <Camera className="h-3.5 w-3.5 text-[#B91C1C]" />
              <span>Verified On-Site Photography</span>
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              AUTHENTIC FIELD OPERATIONS GALLERY
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#FFF8F8]/75 max-w-xl">
              Authentic commercial photography showcasing Shaheen Services technicians, specialized
              field tooling, and rapid mobile maintenance units.
            </p>
          </div>

          {/* Quick Jump Buttons */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#F6D6D6]">
              {current.number} / 04
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevImage}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white shadow-soft transition hover:bg-[#B91C1C] hover:border-[#B91C1C]"
                aria-label="Previous gallery image"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white shadow-soft transition hover:bg-[#B91C1C] hover:border-[#B91C1C]"
                aria-label="Next gallery image"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CIRCULAR COMPOSITION: Central Large Circular Lens + Orbital Track        */}
        {/* ========================================================================= */}
        <div className="relative z-10 flex-1 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 my-auto py-2">
          {/* Circular Frame Composition */}
          <div className="relative flex items-center justify-center">
            {/* Outer Subtle Concentric Orbit Ring */}
            <div
              className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px] rounded-full border border-dashed border-white/20 transition-transform duration-1000 ease-out"
              style={{ transform: `rotate(${orbitAngle}deg)` }}
            >
              {/* 4 Orbital Indicator Beads along the track */}
              {galleryItems.map((item, idx) => {
                const angleRad = (idx * 90 * Math.PI) / 180;
                const radius = 240; // Desktop offset
                const isActive = idx === activeIndex;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToGalleryIndex(idx)}
                    className={cn(
                      "hidden sm:flex absolute -translate-x-1/2 -translate-y-1/2 rounded-full border items-center justify-center transition-all duration-500",
                      isActive
                        ? "h-11 w-11 bg-[#B91C1C] border-white text-white shadow-glow scale-110 z-20"
                        : "h-8 w-8 bg-[#242424] border-white/30 text-white/70 hover:border-white hover:text-white z-10",
                    )}
                    style={{
                      left: `calc(50% + ${Math.cos(angleRad) * 48}%)`,
                      top: `calc(50% + ${Math.sin(angleRad) * 48}%)`,
                      transform: `translate(-50%, -50%) rotate(${-orbitAngle}deg)`,
                    }}
                    aria-label={`Select ${item.title}`}
                  >
                    <span className="font-mono text-xs font-bold">{item.number}</span>
                  </button>
                );
              })}
            </div>

            {/* Middle Glow Ring */}
            <div className="absolute w-[300px] h-[300px] sm:w-[390px] sm:h-[390px] lg:w-[440px] lg:h-[440px] rounded-full border-2 border-[#B91C1C]/40 shadow-glow pointer-events-none" />

            {/* Main Central Circular Frame */}
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[410px] lg:h-[410px] rounded-full overflow-hidden border-4 border-white/80 shadow-float bg-black/60 p-1.5">
              {/* Smooth Crossfade Stage for 4 Images */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                {galleryItems.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div
                      key={item.id}
                      className={cn(
                        "absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center",
                        isActive
                          ? "opacity-100 scale-100 rotate-0"
                          : "opacity-0 scale-90 rotate-6 pointer-events-none",
                      )}
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading={idx === 0 ? "eager" : "lazy"}
                        className="h-full w-full object-cover object-center filter drop-shadow-md"
                      />
                      {/* Vignette Rim Shadow */}
                      <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none ring-1 ring-white/20" />
                    </div>
                  );
                })}
              </div>

              {/* Verified Operation Tag on Circle */}
              <div className="absolute top-4 right-4 rounded-full bg-black/75 border border-white/30 px-3 py-1 backdrop-blur-md flex items-center gap-1.5 shadow-soft">
                <ShieldCheck className="h-3.5 w-3.5 text-[#B91C1C]" />
                <span className="text-[0.68rem] font-bold text-white uppercase tracking-wider">
                  Verified Asset {current.number}
                </span>
              </div>
            </div>
          </div>

          {/* Right Caption & Information Panel */}
          <div className="max-w-md flex flex-col justify-center text-center lg:text-left transition-all duration-500">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#B91C1C]/20 border border-[#B91C1C]/40 px-3 py-1 text-xs font-bold text-[#F6D6D6] w-fit mx-auto lg:mx-0">
              <span>{current.category}</span>
              <span>·</span>
              <span>Asset #{current.number}</span>
            </div>

            <h3 className="mt-3 font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              {current.title}
            </h3>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#FFF8F8]/85">
              {current.description}
            </p>

            {/* Quick Node Navigation Buttons (Mobile & Desktop) */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2">
              {galleryItems.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToGalleryIndex(idx)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300",
                    idx === activeIndex
                      ? "bg-[#B91C1C] text-white shadow-glow"
                      : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/10",
                  )}
                >
                  <span>{item.number}</span>
                  <span className="hidden sm:inline text-[0.7rem] font-normal opacity-90">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            <p className="mt-4 text-[0.72rem] text-[#FFF8F8]/60">
              Captured during live operations · Authentic Shaheen Services fleet & personnel
            </p>
          </div>
        </div>

        {/* Bottom Pinned Progression Helper */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pt-3 border-t border-white/10 text-xs text-[#FFF8F8]/70">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#B91C1C] animate-pulse" />
            <span className="text-[0.72rem]">
              Scroll down to revolve through Images 1, 2, 3, and 4 in sequence
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1 text-[0.72rem] font-bold text-[#F6D6D6]">
            <span>Continuous Scroll</span>
            <ChevronDown className="h-3.5 w-3.5 text-[#B91C1C] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
