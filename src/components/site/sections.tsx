import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { company } from "@/data/site";
import { Reveal } from "./motion";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden gradient-dark pb-20 pt-36 text-charcoal-foreground md:pb-28 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl"
      />
      <div className="container-x relative">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal-foreground/80">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] md:text-6xl">{title}</h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal-foreground/70 md:text-lg">
            {subtitle}
          </p>
        </Reveal>
        {children ? <Reveal delay={260}>{children}</Reveal> : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          <span className="h-px w-8 gradient-primary" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`mt-4 text-3xl md:text-[2.6rem] md:leading-tight ${
            light ? "text-charcoal-foreground" : "text-foreground"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={140}>
          <p
            className={`mt-4 text-base leading-relaxed ${
              light ? "text-charcoal-foreground/70" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function CtaBand({
  title = "Ready for a property that runs itself?",
  text = "Book a free inspection today. A supervisor will survey your site and return a fixed written quotation within 24 hours.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section-y">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl gradient-primary px-8 py-14 text-primary-foreground shadow-glow md:px-16 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-16 h-72 w-72 rounded-full bg-white/15 blur-3xl"
            />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <h2 className="mt-4 text-3xl md:text-4xl">{title}</h2>
                <p className="mt-4 text-primary-foreground/85">{text}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-sm font-semibold text-charcoal-foreground transition hover:-translate-y-0.5"
                >
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
