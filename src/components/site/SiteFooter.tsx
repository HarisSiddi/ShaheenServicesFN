import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import { company, services } from "@/data/site";
import logoImg from "@/assets/shaheen-logo.png";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#242424] text-[#FFF8F8] border-t border-white/15">
      {/* Background Subtle Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#B91C1C]/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 bottom-10 h-64 w-64 rounded-full bg-[#B91C1C]/10 blur-3xl"
      />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Column */}
        <div>
          <Link to="/" className="inline-flex rounded-2xl bg-white p-3 shadow-soft group">
            <img
              src={logoImg}
              alt="Shaheen Services Pvt Ltd logo"
              width={160}
              height={64}
              className="h-14 w-auto object-contain"
            />
          </Link>

          <p className="mt-5 max-w-xs text-xs leading-relaxed text-[#FFF8F8]/80">
            Shaheen Services Pvt Ltd is a premier Pakistani facility management and specialized
            property engineering company. Single-accountability partner across HVAC, deep cleaning,
            termite barriers, and civil maintenance.
          </p>

          <div className="mt-6 flex flex-col gap-2.5">
            <a
              href="https://wa.me/923267775000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-soft transition hover:bg-[#1EBE5D] w-fit"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp: +92 326 7775000</span>
            </a>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFF8F8]/90 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#B91C1C]" />
              <span>Helpline: {company.phone}</span>
            </a>
          </div>
        </div>

        {/* 12 Services Column */}
        <div>
          <h3 className="font-display text-xs uppercase tracking-[0.2em] text-[#F6D6D6] font-bold">
            Service Divisions
          </h3>
          <ul className="mt-5 grid grid-cols-1 gap-2 text-xs max-h-72 overflow-y-auto pr-2">
            {[
              { label: "AC Repair & Maintenance", href: "/#services-3d" },
              { label: "Deep Cleaning Services", href: "/#services-3d" },
              { label: "Pest Control", href: "/#services-3d" },
              { label: "Termite Control", href: "/#services-3d" },
              { label: "Building Management", href: "/#services-3d" },
              { label: "Construction & Maintenance", href: "/#services-3d" },
              { label: "HVAC Services", href: "/#services-3d" },
              { label: "Office Chair Repair", href: "/#services-3d" },
              { label: "Sofa & Carpet Cleaning", href: "/#services-3d" },
              { label: "Water Tank Cleaning", href: "/#services-3d" },
              { label: "Electrical Services", href: "/#services-3d" },
              { label: "Solar Solutions", href: "/#services-3d" },
            ].map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-[#FFF8F8]/75 transition hover:text-white hover:underline underline-offset-2"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="font-display text-xs uppercase tracking-[0.2em] text-[#F6D6D6] font-bold">
            Navigation & Sections
          </h3>
          <ul className="mt-5 space-y-2.5 text-xs">
            {[
              { label: "Home", href: "/#hero" },
              { label: "Our Professional Services", href: "/#services-3d" },
              { label: "Corporate Profile", href: "/#corporate-profile" },
              { label: "Field Operations Gallery", href: "/#circular-gallery" },
              { label: "Recent Technical Engagements", href: "/#technical-engagements" },
              { label: "What Our Clients Say", href: "/#reviews-section" },
              { label: "Operational Standards", href: "/#operational-standards" },
              { label: "Consultation Process", href: "/#process-section" },
              { label: "Frequently Asked Questions", href: "/#faq-section" },
              { label: "Contact & Consultation", href: "/#contact" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-[#FFF8F8]/75 transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information Column */}
        <div>
          <h3 className="font-display text-xs uppercase tracking-[0.2em] text-[#F6D6D6] font-bold">
            Office Details
          </h3>
          <ul className="mt-5 space-y-3.5 text-xs text-[#FFF8F8]/80">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-[#B91C1C]" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-[#B91C1C]" />
              <a href={company.phoneHref} className="hover:text-white transition">
                {company.phone} (24/7 Support)
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-[#B91C1C]" />
              <a href={`mailto:${company.email}`} className="hover:text-white transition">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 shrink-0 text-[#B91C1C]" />
              <span>{company.hours}</span>
            </li>
          </ul>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-3.5">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <ShieldCheck className="h-4 w-4 text-[#B91C1C]" />
              <span>Emergency SLA Response</span>
            </div>
            <p className="mt-1 text-[0.7rem] text-[#FFF8F8]/70 leading-normal">
              Direct live coordination desk answering calls around the clock for urgent facility
              breakdowns.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/30 py-6">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FFF8F8]/60">
          <p>© {new Date().getFullYear()} Shaheen Services Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
            <a href="https://shaheen-services.com" className="hover:text-white transition">
              shaheen-services.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
