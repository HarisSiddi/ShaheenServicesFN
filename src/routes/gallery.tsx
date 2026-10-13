import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X, ZoomIn } from "lucide-react";
import { Reveal } from "@/components/site/motion";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/sections";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Technical Work Gallery | Shaheen Services Pvt Ltd" },
      {
        name: "description",
        content:
          "Browse real photography of Shaheen Services technicians, specialized equipment, commercial chiller plants, solar arrays, deep sanitisation, and civil works.",
      },
      { property: "og:title", content: "Gallery | Shaheen Services" },
      {
        property: "og:description",
        content:
          "Photography of our technicians, commercial equipment, and completed facility projects.",
      },
      { property: "og:url", content: "/gallery" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

const items = [
  {
    src: "/hero/hero-maint.jpg",
    cat: "Maintenance",
    alt: "Shaheen Services building technician in uniform with tools",
    tall: true,
  },
  {
    src: "/hero/hero-clean.jpg",
    cat: "Cleaning",
    alt: "Specialist cleaning technician with commercial HEPA vacuum",
    tall: true,
  },
  {
    src: "/hero/hero-pest.jpg",
    cat: "Pest Control",
    alt: "Certified pest technician with backpack pressure sprayer",
    tall: true,
  },
  {
    src: "/services/service-building-mgmt.jpg",
    cat: "Management",
    alt: "Commercial building control center & high-rise property",
    tall: false,
  },
  {
    src: "/services/service-construction.jpg",
    cat: "Civil Works",
    alt: "Civil construction & finishing engineers on site",
    tall: false,
  },
  {
    src: "/services/service-hvac.jpg",
    cat: "HVAC",
    alt: "Commercial central air conditioning and chiller maintenance",
    tall: false,
  },
  {
    src: "/services/service-electrical.jpg",
    cat: "Electrical",
    alt: "Certified power distribution board dressing and safety testing",
    tall: false,
  },
  {
    src: "/services/service-solar.jpg",
    cat: "Solar",
    alt: "Rooftop solar photovoltaic array installation",
    tall: false,
  },
  {
    src: "/services/service-tank.jpg",
    cat: "Sanitisation",
    alt: "Water reservoir tank pressure jetting and chlorination",
    tall: false,
  },
  {
    src: "/services/service-carpet.jpg",
    cat: "Cleaning",
    alt: "Hot water upholstery extraction on commercial furnishings",
    tall: false,
  },
  {
    src: "/services/service-repair.jpg",
    cat: "Maintenance",
    alt: "Multi-skilled technician executing precise fixture repair",
    tall: false,
  },
  {
    src: "/services/service-chair.jpg",
    cat: "Maintenance",
    alt: "Commercial ergonomic chair restoration and mechanism repair",
    tall: false,
  },
];

const cats = [
  "All",
  "Maintenance",
  "Cleaning",
  "Pest Control",
  "HVAC",
  "Electrical",
  "Solar",
  "Civil Works",
  "Sanitisation",
];

function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const list = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <PageHero
        eyebrow="Visual Portfolio"
        title="Field Teams, Specialized Tooling & Handover Finishes"
        subtitle="A transparent photographic record of our certified technicians, commercial machinery, and work across Pakistan."
      />

      <section className="section-y bg-[#FFF8F8]">
        <div className="container-x">
          <SectionHeading eyebrow="Media Archive" title="Filter by Discipline" center />

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  active === c
                    ? "bg-[#B91C1C] text-white shadow-soft"
                    : "border border-border bg-white text-[#242424]/80 hover:bg-[#F6D6D6]/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Gallery Masonry/Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((item, i) => (
              <Reveal key={item.src + i} delay={i * 45}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setLightbox(item)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setLightbox(item);
                  }}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div
                    className={`relative overflow-hidden bg-slate-100 ${item.tall ? "h-96" : "h-64"}`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[#B91C1C] shadow-sm">
                      {item.cat}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-xs font-medium truncate pr-2">{item.alt}</span>
                      <ZoomIn className="h-4 w-4 shrink-0 text-white" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close Preview"
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-[#242424] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[75vh] w-auto mx-auto rounded-2xl object-contain"
            />
            <p className="p-4 text-center text-xs font-semibold text-white/90">{lightbox.alt}</p>
          </div>
        </div>
      )}

      <CtaBand />
    </>
  );
}
