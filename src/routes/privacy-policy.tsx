import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/data/site";
import { PageHero } from "@/components/site/sections";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Shaheen Services" },
      {
        name: "description",
        content:
          "How Shaheen Services collects, uses, stores and protects the personal information you share when requesting a quote or booking a service.",
      },
      { property: "og:title", content: "Privacy Policy | Shaheen Services" },
      {
        property: "og:description",
        content: "Our commitments on data collection, usage, retention and your rights.",
      },
      { property: "og:url", content: "/privacy-policy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

const sections = [
  {
    h: "Information we collect",
    p: "We collect the name, phone number, email address, property location and service details you provide through our enquiry forms, phone calls and WhatsApp messages. We also collect basic analytics such as pages visited and approximate location for the purpose of improving the website.",
  },
  {
    h: "How we use your information",
    p: "Your information is used solely to respond to enquiries, schedule inspections, prepare quotations, deliver services, issue invoices and provide warranty follow-up. With your consent we may send occasional maintenance reminders or offers, which you can unsubscribe from at any time.",
  },
  {
    h: "Sharing and disclosure",
    p: "We do not sell or rent personal data. Information is shared only with our own technicians and, where required, with subcontracted specialists bound by confidentiality obligations, or with authorities where legally required.",
  },
  {
    h: "Data retention and security",
    p: "Records are retained for as long as necessary to service warranties and satisfy accounting obligations. We apply access controls, encrypted transmission and staff confidentiality agreements to protect your information.",
  },
  {
    h: "Cookies",
    p: "The website uses essential cookies for functionality and optional analytics cookies to understand traffic. You can disable cookies in your browser without affecting your ability to contact us.",
  },
  {
    h: "Your rights",
    p: "You may request access to, correction of, or deletion of your personal data at any time by emailing us. We respond to verified requests within 30 days.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="We treat your personal information with the same care we apply to your property."
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
            Questions about this policy? Email{" "}
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
