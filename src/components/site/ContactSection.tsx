import { useState } from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
  AlertCircle,
} from "lucide-react";
import { company } from "@/data/site";
import { Reveal } from "@/components/site/motion";

const serviceOptions = [
  "AC Repair & Maintenance",
  "Deep Cleaning Services",
  "Pest Control",
  "Termite Control",
  "Building Management",
  "Construction & Maintenance",
  "HVAC Services",
  "Office Chair Repair",
  "Sofa & Carpet Cleaning",
  "Water Tank Cleaning",
  "Electrical Services",
  "Solar Solutions",
  "General Property Inspection",
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please provide your full name.");
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setError("Please provide a valid contact telephone number.");
      return;
    }

    setIsSubmitting(true);

    // Format clean WhatsApp pre-filled enquiry message
    const formattedText = `*New Service Request — Shaheen Services Website*\n\n*Name:* ${name.trim()}\n*Phone:* ${phone.trim()}\n*Service Required:* ${service}\n*Message / Location Details:* ${message.trim() || "Free on-site inspection requested."}`;
    const waUrl = `https://wa.me/923267775000?text=${encodeURIComponent(formattedText)}`;

    // Open WhatsApp in new tab for immediate dispatch
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="section-y bg-[#FFF8F8] text-[#242424] border-t border-border/80 relative"
      aria-label="Contact and Service Consultation"
    >
      <div className="container-x">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F6D6D6] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Direct 24/7 Coordination</span>
          </div>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#242424] tracking-tight">
            LET’S DISCUSS YOUR SERVICE REQUIREMENTS
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#242424]/75 max-w-xl mx-auto">
            Schedule an on-site survey, request an itemised written quotation, or consult directly
            with our engineering team for emergency dispatch.
          </p>
        </div>

        {/* Two-Column Contact Treatment */}
        <div className="mt-12 sm:mt-16 grid gap-10 lg:grid-cols-12 max-w-6xl mx-auto items-start">
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-soft">
                <h3 className="font-display text-lg font-bold text-[#242424]">
                  Shaheen Services Pvt Ltd
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Corporate Facility Care & Property Maintenance Desk
                </p>

                {/* Contact List */}
                <ul className="mt-6 space-y-4 text-xs">
                  <li className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#FFF8F8] border border-border text-[#B91C1C]">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="block font-semibold text-muted-foreground">
                        Direct Helpline (24/7):
                      </span>
                      <a
                        href={company.phoneHref}
                        className="font-bold text-sm text-[#242424] hover:text-[#B91C1C] transition-colors"
                      >
                        {company.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#FFF8F8] border border-border text-[#25D366]">
                      <MessageSquare className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="block font-semibold text-muted-foreground">
                        WhatsApp Dispatch:
                      </span>
                      <a
                        href="https://wa.me/923267775000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-sm text-[#242424] hover:text-emerald-700 transition-colors"
                      >
                        +92 326 7775000 (Click to Chat)
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#FFF8F8] border border-border text-[#B91C1C]">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="block font-semibold text-muted-foreground">
                        Official Email:
                      </span>
                      <a
                        href={`mailto:${company.email}`}
                        className="font-bold text-sm text-[#242424] hover:text-[#B91C1C] transition-colors"
                      >
                        {company.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#FFF8F8] border border-border text-[#B91C1C]">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="block font-semibold text-muted-foreground">
                        Head Office Address:
                      </span>
                      <span className="text-[#242424] font-medium leading-normal">
                        {company.address}
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#FFF8F8] border border-border text-[#B91C1C]">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="block font-semibold text-muted-foreground">
                        Working Hours:
                      </span>
                      <span className="text-[#242424] font-medium leading-normal">
                        {company.hours}
                      </span>
                    </div>
                  </li>
                </ul>

                {/* Direct WhatsApp Action Button */}
                <div className="mt-8 pt-6 border-t border-border/80">
                  <a
                    href="https://wa.me/923267775000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-xs font-bold text-white shadow-soft transition hover:bg-[#1EBE5D] active:scale-[0.98]"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Open Live WhatsApp Conversation</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <Reveal delay={60}>
              <div className="rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-soft">
                <div className="flex items-center justify-between pb-4 border-b border-border/70">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#242424]">
                      Service Request & Free On-Site Inspection
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Submit details below for direct dispatch review via our WhatsApp desk.
                    </p>
                  </div>
                  <ShieldCheck className="h-6 w-6 text-[#B91C1C] shrink-0 hidden sm:block" />
                </div>

                {submitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-700 mx-auto">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-[#242424]">
                      Inquiry Transferred to WhatsApp Dispatch
                    </h4>
                    <p className="text-xs text-[#242424]/80 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been generated and forwarded to our official WhatsApp
                      helpline (+92 326 7775000). A coordination officer will follow up with you
                      shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 rounded-full border border-border px-5 py-2 text-xs font-bold text-[#242424] hover:bg-[#FFF8F8]"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {error && (
                      <div className="rounded-2xl border border-red-200 bg-red-50 p-3 flex items-center gap-2 text-xs text-red-700">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-[#242424] uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Tariq Mehmood"
                          className="w-full rounded-xl border border-border bg-[#FFF8F8] px-3.5 py-2.5 text-xs text-[#242424] focus:outline-none focus:border-[#B91C1C] focus:bg-white transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#242424] uppercase tracking-wider mb-1.5">
                          Phone Number (with WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 0321 1234567"
                          className="w-full rounded-xl border border-border bg-[#FFF8F8] px-3.5 py-2.5 text-xs text-[#242424] focus:outline-none focus:border-[#B91C1C] focus:bg-white transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#242424] uppercase tracking-wider mb-1.5">
                        Service Category *
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full rounded-xl border border-border bg-[#FFF8F8] px-3.5 py-2.5 text-xs text-[#242424] focus:outline-none focus:border-[#B91C1C] focus:bg-white transition"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#242424] uppercase tracking-wider mb-1.5">
                        Location & Scope Details
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Briefly describe property type, area, problem description, or preferred inspection time..."
                        className="w-full rounded-xl border border-border bg-[#FFF8F8] px-3.5 py-2.5 text-xs text-[#242424] focus:outline-none focus:border-[#B91C1C] focus:bg-white transition"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3.5 text-xs font-bold text-white shadow-glow transition hover:brightness-110 active:scale-[0.99] disabled:opacity-50"
                      >
                        <Send className="h-4 w-4" />
                        <span>Send Request via WhatsApp Helpline</span>
                      </button>
                      <p className="mt-2 text-center text-[0.68rem] text-muted-foreground">
                        Instant dispatch routing · Direct conversation with Shaheen Services desk
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
