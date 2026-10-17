import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { company } from "@/data/site";
import { Reveal } from "@/components/site/motion";
import { cn } from "@/lib/utils";

interface FaqItem {
  q: string;
  a: string;
}

const detailedFaqs: FaqItem[] = [
  {
    q: "What services does Shaheen Services provide?",
    a: "Shaheen Services Pvt Ltd operates 13 specialized facility divisions across Pakistan. Our capabilities include AC repair and master pressure jet servicing, central HVAC plant maintenance, deep cleaning and sanitisation, municipality-approved pest control, pre- and post-construction termite proofing, civil maintenance and waterproofing, office chair ergonomics repair, sofa and carpet deep extraction, water tank chlorination, licensed electrical distribution board dressing, and turnkey solar PV installations.",
  },
  {
    q: "How can I request a service or schedule an inspection?",
    a: "You can schedule a service or request an initial on-site survey by calling our 24/7 helpline at +92 326 7775000, messaging our dedicated WhatsApp coordination desk, or filling out the inquiry form on our website. Our service coordinators will review your scope and dispatch a technical supervisor.",
  },
  {
    q: "Do you provide AC repair and maintenance for residential and commercial units?",
    a: "Yes. We service residential split ACs, multi-split systems, inverter units, and commercial VRF/chiller setups. Our AC services encompass high-pressure jet cleaning of cooling coils and blowers, electronic PCB diagnostics, capacitor replacements, nitrogen leak testing, and OEM refrigerant charging (R410A / R32 / R22).",
  },
  {
    q: "Do you offer deep cleaning services for newly renovated or occupied premises?",
    a: "Yes. Our deep cleaning division handles post-construction dust and cement removal, kitchen grease extraction, bathroom descaling, single-disc rotary floor buffing, and hospital-grade sanitisation. All cleaning is performed by uniformed, background-checked personnel equipped with commercial HEPA vacuums and eco-certified chemicals.",
  },
  {
    q: "Can I request pest or termite control for my property?",
    a: "Yes. We offer Integrated Pest Management (IPM) using odourless, low-toxicity, municipality-approved formulations for cockroaches, bed bugs, rodents, and flying pests. For termites, we provide specialized pre-construction soil treatment and post-construction sub-slab foundation drilling with high-pressure chemical barrier injection backed by documented service warranties.",
  },
  {
    q: "How can I discuss a customized service requirement or corporate AMC?",
    a: "For corporate facilities, multi-unit properties, or bespoke facility agreements, our commercial engineering team will conduct a comprehensive on-site survey. We provide a customized Annual Maintenance Contract (AMC) proposal with dedicated resident technician staffing, defined preventative maintenance schedules (PPM), and SLA guarantees.",
  },
  {
    q: "How do I contact your team in case of an emergency?",
    a: "Our emergency coordination desk is available 24/7 at +92 326 7775000 and via WhatsApp at https://wa.me/923267775000. Critical electrical outages, severe plumbing leaks, and commercial cooling failures are prioritized for rapid technician dispatch within our 4-hour emergency SLA.",
  },
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section
      id="faq-section"
      className="section-y bg-white text-[#242424] border-t border-border/80 relative scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="container-x max-w-4xl">
        {/* Section Heading */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F6D6D6] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Factual Guidance</span>
          </div>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#242424] tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#242424]/75 max-w-xl mx-auto">
            Clear, transparent answers regarding service procedures, response timelines, commercial
            warranties, and technician deployment standards.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="mt-12 space-y-3.5">
          {detailedFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;

            return (
              <Reveal key={faq.q} delay={idx * 35}>
                <div
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden bg-[#FFF8F8]",
                    isOpen
                      ? "border-[#B91C1C]/40 bg-white shadow-soft"
                      : "border-border hover:border-[#B91C1C]/30 hover:bg-white",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C]"
                    aria-expanded={isOpen}
                    id={`faq-btn-${idx}`}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className="font-display text-sm sm:text-base font-bold text-[#242424] pr-4">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform duration-300",
                        isOpen
                          ? "bg-[#B91C1C] text-white rotate-180"
                          : "bg-white border border-border text-[#242424]/70",
                      )}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-btn-${idx}`}
                      className="border-t border-border/60 px-5 pb-5 pt-3 animate-in fade-in duration-300"
                    >
                      <p className="text-xs sm:text-sm leading-relaxed text-[#242424]/85">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Contact Help Strip */}
        <div className="mt-10 rounded-2xl border border-border bg-[#FFF8F8] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="block font-display text-xs font-bold text-[#242424]">
              Have a specific question not listed here?
            </span>
            <span className="block text-[0.72rem] text-muted-foreground mt-0.5">
              Speak directly with our engineering coordination desk 24 hours a day.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-bold text-[#242424] hover:border-primary"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span>{company.phone}</span>
            </a>
            <a
              href={company.whatsappPrefilled}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#1EBE5D]"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
