import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Target,
  Eye,
  Award,
  Wrench,
  Building2,
  Phone,
} from "lucide-react";
import { company, stats, whyChooseUs } from "@/data/site";
import { Counter, Reveal } from "@/components/site/motion";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | Shaheen Services Pvt Ltd" },
      {
        name: "description",
        content:
          "Discover Shaheen Services Pvt Ltd — corporate facility management, HVAC, electrical, solar, and building maintenance engineered for quality, transparency, and accountability.",
      },
      { property: "og:title", content: "About Shaheen Services Pvt Ltd" },
      {
        property: "og:description",
        content:
          "Specialised multi-division property maintenance with in-house technical teams, modern equipment, and 24/7 coordination.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Profile"
        title="Engineering Standards Built on Transparency & Technical Skill"
        subtitle="Shaheen Services Pvt Ltd provides specialized building maintenance, HVAC, civil repairs, deep cleaning, pest control, and energy solutions designed for commercial and residential asset owners."
      />

      <section className="section-y bg-white">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src="/services/service-building-mgmt.jpg"
                alt="Shaheen Services headquarters and facility operations"
                loading="lazy"
                width={800}
                height={600}
                className="w-full rounded-4xl object-cover shadow-float border border-border"
              />
              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-[#B91C1C] p-5 text-white shadow-glow">
                <span className="block font-display text-sm font-bold">
                  In-House Technical Execution
                </span>
                <span className="block text-xs opacity-90">No subcontracted middlemen</span>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Our Foundation"
              title="A Structured Facility Partner for Modern Properties"
              subtitle="We eliminate the friction of handling dozens of unvetted trade workers. With 13 dedicated divisions, every aspect of your facility is maintained under one clear, documented agreement."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 60}>
                  <div className="rounded-2xl border border-border bg-[#FFF8F8] p-5">
                    <p className="font-display text-3xl font-extrabold text-[#B91C1C]">
                      <Counter value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#242424]/70">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3.5 text-xs font-bold text-white shadow-glow hover:brightness-110"
              >
                View 13 Divisions <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3.5 text-xs font-bold text-[#242424] hover:bg-[#FFF8F8]"
              >
                <Phone className="h-4 w-4 text-primary" /> Call {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-y bg-[#FFF8F8] border-t border-border">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To deliver documented, dependable, and transparent technical services across commercial, industrial, and residential sectors without cutting corners.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To establish Shaheen Services Pvt Ltd as the standard of excellence for building operations, recognized for certified technicians and punctual execution.",
            },
            {
              icon: Award,
              title: "Our Values",
              text: "Technical precision, honest pricing, on-site safety, occupant respect, and photographic accountability on every completed job.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div className="h-full rounded-3xl border border-border bg-white p-8 shadow-soft transition hover:-translate-y-1">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#B91C1C] text-white shadow-glow">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-[#242424]">{c.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Operational Disciplines */}
      <section className="section-y bg-[#242424] text-[#FFF8F8]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Technical Standards"
            title="How We Maintain Quality Control"
            subtitle="Strict operational guidelines governing equipment, chemicals, electrical safety, and customer communication."
            light
            center
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 50}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <Check className="h-5 w-5 text-[#B91C1C]" />
                  <h3 className="mt-4 font-display text-base font-bold text-white">{w.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#FFF8F8]/70">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
