import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { posts } from "@/data/site";
import { Reveal } from "@/components/site/motion";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/sections";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog | Maintenance, HVAC & Cleaning Insights | Shaheen Services" },
      {
        name: "description",
        content:
          "Practical guides on AC maintenance, duct cleaning, pest prevention, solar yield and choosing an annual maintenance contract that pays for itself.",
      },
      { property: "og:title", content: "Blog | Shaheen Services" },
      {
        property: "og:description",
        content: "Expert maintenance guides for homeowners and facility managers.",
      },
      { property: "og:url", content: "/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Maintenance knowledge worth reading"
        subtitle="Field-tested guidance from our engineers on keeping properties efficient, hygienic and compliant."
      />

      <section className="section-y">
        <div className="container-x">
          {featured && (
            <Reveal>
              <article className="grid overflow-hidden rounded-4xl border border-border bg-card shadow-soft lg:grid-cols-2">
                <img
                  src={heroImage}
                  alt={featured.title}
                  loading="lazy"
                  width={1920}
                  height={1200}
                  className="h-full min-h-[18rem] w-full object-cover"
                />
                <div className="p-8 md:p-12">
                  <span className="rounded-full bg-accent px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent-foreground">
                    Featured · {featured.category}
                  </span>
                  <h2 className="mt-5 text-3xl leading-tight">{featured.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4" /> {featured.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" /> {featured.read}
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
                  >
                    Talk to an engineer <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          )}

          <div className="mt-16">
            <SectionHeading eyebrow="Latest Articles" title="More from our team" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={i * 60}>
                  <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 card-lift">
                    <span className="w-fit rounded-full bg-secondary px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
                      {p.category}
                    </span>
                    <h3 className="mt-4 text-lg leading-snug">{p.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" /> {p.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {p.read}
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
