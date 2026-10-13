import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  HardHat,
  Bug,
  Wrench,
  Wind,
  Armchair,
  Sparkles,
  Droplets,
  Zap,
  Sun,
  Users,
  Check,
  type LucideIcon,
} from "lucide-react";
import type { ServiceGroup, ServiceIconType } from "@/data/site";
import { Reveal } from "./motion";
import { PageHero, SectionHeading, CtaBand } from "./sections";
import { QuoteForm } from "./QuoteForm";
import { company } from "@/data/site";

export const serviceIcons: Record<ServiceIconType, LucideIcon> = {
  wind: Wind,
  sparkles: Sparkles,
  bug: Bug,
  zap: Zap,
  sun: Sun,
  building: Building2,
  "hard-hat": HardHat,
  wrench: Wrench,
  fan: Wind,
  armchair: Armchair,
  sofa: Sparkles,
  droplet: Droplets,
  users: Users,
};

export function ServicePage({ service, image }: { service: ServiceGroup; image: string }) {
  const Icon = serviceIcons[service.icon];

  return (
    <>
      <PageHero eyebrow={service.name} title={service.short} subtitle={service.intro}>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5"
          >
            Book Inspection <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-charcoal-foreground transition hover:-translate-y-0.5"
          >
            Call {company.phone}
          </a>
        </div>
      </PageHero>

      <section className="section-y">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -left-6 -top-6 h-32 w-32 rounded-3xl gradient-primary opacity-20 blur-2xl"
              />
              <img
                src={image}
                alt={`${service.name} by Shaheen Services`}
                loading="lazy"
                width={1200}
                height={900}
                className="relative w-full rounded-4xl object-cover shadow-float"
              />
              <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-border bg-card p-5 shadow-float md:left-10 md:right-auto md:w-72">
                <span className="grid h-11 w-11 place-items-center rounded-xl gradient-primary">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  Certified technicians, documented results
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Why clients choose us"
              title={`Premium ${service.name.toLowerCase()} delivered to a documented standard`}
              subtitle={service.intro}
            />
            <ul className="mt-8 grid gap-3">
              {service.benefits.map((b, i) => (
                <Reveal key={b} delay={i * 70} as="li">
                  <span className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/60 p-4 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {b}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/50">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we cover"
            title="Every service, one accountable team"
            subtitle="Select any service below and we will scope it during a free site inspection."
            center
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <article className="group h-full rounded-3xl border border-border bg-card p-7 card-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent transition group-hover:gradient-primary">
                    <Icon className="h-5 w-5 text-primary transition group-hover:text-primary-foreground" />
                  </span>
                  <h3 className="mt-5 text-lg">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                  >
                    Book now <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Get started"
              title="Free inspection, fixed written quotation"
              subtitle="Tell us about the property and we will schedule a supervisor visit at a time that suits you — including evenings and weekends."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { k: "Response time", v: "Under 4 hours" },
                { k: "Quotation", v: "Within 24 hours" },
                { k: "Warranty", v: "On all workmanship" },
                { k: "Support", v: "24/7 coordination" },
              ].map((s, i) => (
                <Reveal key={s.k} delay={i * 70}>
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {s.k}
                    </p>
                    <p className="mt-2 font-display text-xl font-bold text-foreground">{s.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <QuoteForm compact />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
