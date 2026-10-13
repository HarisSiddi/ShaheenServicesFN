import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Search } from "lucide-react";
import { faqs } from "@/data/site";
import { Reveal } from "@/components/site/motion";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/sections";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQs | Response Times, Warranties & Pricing | Shaheen Services" },
      {
        name: "description",
        content:
          "Answers on emergency response times, free inspections, technician certification, AMC coverage, product safety and service warranties.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Shaheen Services" },
      {
        property: "og:description",
        content: "Everything customers ask before booking a service visit.",
      },
      { property: "og:url", content: "/faq" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function FaqPage() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number | null>(0);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Straight answers before you book"
        subtitle="If your question is not here, message us on WhatsApp — a coordinator replies in minutes."
      />

      <section className="section-y">
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="Help Centre" title="Search our answers" center />

          <div className="relative mx-auto mt-10 max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              maxLength={80}
              placeholder="Search questions…"
              aria-label="Search FAQs"
              className="w-full rounded-full border border-input bg-card py-3.5 pl-11 pr-5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/25"
            />
          </div>

          <div className="mt-10 space-y-3">
            {list.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-foreground">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                        open === i && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-400",
                      open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            {list.length === 0 && (
              <p className="py-10 text-center text-sm text-muted-foreground">
                No results. Try a different keyword or contact us directly.
              </p>
            )}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
