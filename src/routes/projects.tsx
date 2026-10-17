import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Layers,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Wrench,
  Building,
} from "lucide-react";
import { projects, company } from "@/data/site";
import { PageHero, SectionHeading, CtaBand } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      {
        title: "Technical Engagements & Work Portfolio | Shaheen Services",
      },
      {
        name: "description",
        content:
          "Explore Shaheen Services technical engagements across central HVAC retrofits, commercial deep cleaning, subterranean termite barriers, and solar PV engineering.",
      },
      {
        property: "og:title",
        content: "Technical Engagements & Capability Portfolio | Shaheen Services",
      },
      {
        property: "og:description",
        content:
          "Documented examples of commercial building maintenance, HVAC commissioning, and MEP engineering delivered by certified Shaheen technicians.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

const projectCategories = [
  "All",
  "HVAC Services",
  "Deep Cleaning",
  "Pest Control",
  "Electrical",
  "Solar Solutions",
  "Water Tank Cleaning",
];

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col w-full bg-[#FFF8F8] text-[#242424]">
      <PageHero
        eyebrow="Proven Execution"
        title="Technical Engagements & Field Case Studies"
        subtitle="Verifiable facility management contracts, preventative maintenance programs, and engineering commissioning delivered across Pakistan."
      />

      <section className="section-y bg-white border-b border-border/80">
        <div className="container-x">
          <SectionHeading
            eyebrow="Capability Archive"
            title="Disciplined Engineering & Property Care"
            description="Explore our technical delivery across 12 commercial and residential facility divisions."
            center
          />

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#B91C1C] text-white shadow-glow"
                    : "bg-[#FFF8F8] text-[#242424]/80 border border-border hover:border-[#B91C1C] hover:text-[#B91C1C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 50}>
                <div className="group rounded-3xl border border-border bg-[#FFF8F8] overflow-hidden shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-float hover:border-[#B91C1C]/40 flex flex-col justify-between h-full">
                  <div>
                    {/* Visual Thumbnail */}
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

                      <div className="absolute top-3.5 left-3.5 rounded-full bg-white/95 px-3 py-1 text-[0.66rem] font-bold uppercase tracking-wider text-[#B91C1C] shadow-sm">
                        {item.category}
                      </div>

                      <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center gap-1.5 text-xs text-white/90">
                        <MapPin className="h-3.5 w-3.5 text-[#B91C1C] shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6">
                      <h3 className="font-display text-lg font-bold text-[#242424] group-hover:text-[#B91C1C] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-xs text-[#242424]/80 leading-relaxed">
                        {item.text}
                      </p>

                      <div className="mt-4 pt-3 border-t border-border/70 flex items-center gap-2 text-[0.7rem] font-semibold text-emerald-700">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                        <span>Supervisor Sign-Off & Inspection Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-0">
                    <a
                      href={`https://wa.me/923267775000?text=${encodeURIComponent(
                        `Hello Shaheen Services, I am interested in inquiring about a project similar to: ${item.title}.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full rounded-full border border-border bg-white px-4 py-2.5 text-xs font-bold text-[#242424] transition hover:bg-[#B91C1C] hover:text-white hover:border-[#B91C1C]"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-emerald-600 group-hover:text-white" />
                      <span>Request Similar Scope Quote</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Planning a Technical Upgrade or Facility Inspection?"
        text="Our senior MEP engineers conduct comprehensive site surveys with digital thermal testing and itemised proposals."
      />
    </div>
  );
}
