import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "@/components/site/motion";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/sections";
import { serviceIcons } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Our 13 Technical Services | Shaheen Services Pvt Ltd" },
      {
        name: "description",
        content:
          "Explore all 13 Shaheen Services divisions: Building Management, Construction, Pest Control, HVAC, AC Repair, Office Chair Repair, Deep Cleaning, Water Tank Cleaning, Electrical, and Solar Solutions.",
      },
      { property: "og:title", content: "Our Services | Shaheen Services" },
      {
        property: "og:description",
        content:
          "Thirteen specialist divisions covering every maintenance, repair, and facility engineering need.",
      },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialist Services"
        title="13 Technical Divisions, One Standard of Delivery"
        subtitle="Comprehensive property care, mechanical operations, and specialized engineering — delivered by trained in-house personnel under one accountable service contract."
      />

      <section className="section-y bg-[#FFF8F8]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Complete Portfolio"
            title="Explore Every Service Division"
            subtitle="Click into any division below to view technical scope, equipment standards, and direct booking options."
            center
          />

          <div className="mt-14 space-y-8">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon];
              return (
                <Reveal key={s.slug} delay={i * 30}>
                  <article
                    id={s.slug}
                    className="grid gap-8 rounded-4xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-float md:grid-cols-[240px_1fr_auto] md:items-center md:p-8"
                  >
                    {/* Service Photo Thumbnail */}
                    <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-slate-100 md:h-full md:min-h-[160px]">
                      <img
                        src={s.image}
                        alt={s.name}
                        loading="lazy"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute bottom-3 left-3 grid h-10 w-10 place-items-center rounded-xl bg-[#B91C1C] text-white shadow-glow">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>

                    {/* Service Content */}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#B91C1C]">
                          Division {i + 1 < 10 ? `0${i + 1}` : i + 1}
                        </span>
                      </div>
                      <h3 className="mt-1 font-display text-xl md:text-2xl font-bold text-[#242424]">
                        {s.name}
                      </h3>
                      <p className="mt-2 text-xs md:text-sm leading-relaxed text-[#242424]/80">
                        {s.intro}
                      </p>

                      <ul className="mt-4 flex flex-wrap gap-2">
                        {s.items.map((it) => (
                          <li
                            key={it.title}
                            className="flex items-center gap-1.5 rounded-full bg-[#FFF8F8] border border-border px-3 py-1 text-xs font-medium text-[#242424]"
                          >
                            <Check className="h-3 w-3 text-[#B91C1C]" />
                            {it.title}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Direct Actions */}
                    <div className="flex flex-col gap-2.5 sm:min-w-[150px]">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-1.5 rounded-full gradient-primary px-5 py-3 text-xs font-bold text-white shadow-glow transition hover:brightness-110"
                      >
                        Book Service <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <a
                        href={`https://wa.me/923267775000?text=${encodeURIComponent(`Hello Shaheen Services, I would like to inquire about ${s.name}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-border bg-[#FFF8F8] px-4 py-2 text-xs font-bold text-[#242424] transition hover:bg-[#F6D6D6]/40 hover:border-[#B91C1C]"
                      >
                        WhatsApp Desk
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
