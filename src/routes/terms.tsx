import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/data/site";
import { PageHero } from "@/components/site/sections";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Shaheen Services" },
      {
        name: "description",
        content:
          "Service terms for Shaheen Services: quotations, scheduling, payment, warranties, cancellations, liability and customer responsibilities.",
      },
      { property: "og:title", content: "Terms & Conditions | Shaheen Services" },
      {
        property: "og:description",
        content: "The terms that govern quotations, service delivery and warranties.",
      },
      { property: "og:url", content: "/terms" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

const sections = [
  {
    h: "Quotations and pricing",
    p: "Quotations are valid for 30 days and are based on the scope observed during inspection. Additional works discovered on site are quoted separately and only proceed with your written approval.",
  },
  {
    h: "Scheduling and access",
    p: "Appointment windows are confirmed in advance. Please ensure safe access to the work area, water and power supply. If our team cannot access the site at the agreed time, a call-out charge may apply.",
  },
  {
    h: "Payment terms",
    p: "Residential work is payable on completion. Contracted commercial clients are invoiced according to the payment terms stated in their annual maintenance contract.",
  },
  {
    h: "Warranty",
    p: "Workmanship is warranted for the period stated on your quotation. Warranty excludes damage caused by misuse, third-party interference, or failure to follow recommended maintenance schedules.",
  },
  {
    h: "Cancellations",
    p: "Appointments may be rescheduled or cancelled free of charge up to four hours before the scheduled slot. Later cancellations may incur a mobilisation fee.",
  },
  {
    h: "Liability",
    p: "We carry public liability and workmanship insurance. Our liability is limited to the value of the services provided, except where liability cannot be limited by law.",
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Clear, fair terms so both sides know exactly what has been agreed."
      />
      <section className="section-y">
        <div className="container-x max-w-3xl space-y-10">
          {sections.map((s) => (
            <article key={s.h}>
              <h2 className="text-2xl">{s.h}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </article>
          ))}
          <p className="text-sm text-muted-foreground">
            For clarification on any term, contact{" "}
            <a href={`mailto:${company.email}`} className="font-semibold text-primary">
              {company.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
