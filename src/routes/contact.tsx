import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company } from "@/data/site";
import { Reveal } from "@/components/site/motion";
import { PageHero, SectionHeading } from "@/components/site/sections";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Shaheen Services | Free Inspection & 24/7 Support" },
      {
        name: "description",
        content:
          "Call +92 326 7775000, WhatsApp or send an enquiry for Building Management, AC, cleaning, pest control, electrical, solar and maintenance. Free inspection and quotation within 24 hours.",
      },
      { property: "og:title", content: "Contact Shaheen Services Pvt Ltd" },
      {
        property: "og:description",
        content: "Book a free on-site survey or connect with our 24/7 technical dispatch helpline.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const cards = [
    { icon: Phone, title: "Central Telephone", value: company.phone, href: company.phoneHref },
    {
      icon: MessageCircle,
      title: "Official WhatsApp",
      value: "+92 326 7775000 (24/7)",
      href: company.whatsappPrefilled,
    },
    { icon: Mail, title: "Email Inquiry", value: company.email, href: `mailto:${company.email}` },
    { icon: Clock, title: "Operating Hours", value: company.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact & Booking"
        title="Connect with Our Technical Coordination Desk"
        subtitle="Free inspection, fixed itemised quotations within 24 hours, and direct response around the clock via +92 326 7775000."
      />

      <section className="section-y bg-[#FFF8F8]">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c, i) => {
              const Inner = (
                <div className="h-full rounded-3xl border border-border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#B91C1C] text-white shadow-glow">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-[#242424]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#242424]/80">{c.value}</p>
                </div>
              );
              return (
                <Reveal key={c.title} delay={i * 60}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      {Inner}
                    </a>
                  ) : (
                    Inner
                  )}
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] items-start">
            <div>
              <SectionHeading
                eyebrow="Direct Inspection Booking"
                title="Tell Us About Your Property Requirements"
                subtitle="Your enquiry goes straight to an experienced service coordinator — not a call center queue."
              />

              <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-soft bg-white">
                <iframe
                  title="Shaheen Services location map in Karachi"
                  src="https://www.google.com/maps?q=Gulshan%20e%20Iqbal%20Block%205%20Karachi&output=embed"
                  className="h-80 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-white p-5 shadow-sm">
                <p className="flex items-start gap-3 text-xs leading-relaxed text-[#242424]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B91C1C]" />
                  <span>
                    <strong>Corporate Headquarters:</strong> {company.address}
                  </span>
                </p>
                <div className="mt-4 pt-3 border-t border-border flex flex-wrap gap-4 text-xs font-semibold">
                  <a href={company.phoneHref} className="text-[#B91C1C] hover:underline">
                    Call: {company.phone}
                  </a>
                  <a
                    href={company.whatsappPrefilled}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline"
                  >
                    WhatsApp: +92 326 7775000
                  </a>
                </div>
              </div>
            </div>

            <Reveal delay={100}>
              <QuoteForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
