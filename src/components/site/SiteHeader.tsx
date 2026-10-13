import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MessageSquare, Phone } from "lucide-react";
import logoImg from "@/assets/shaheen-logo.png";
import { company } from "@/data/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "Services", href: "/#services-3d" },
  { label: "Corporate Profile", href: "/#corporate-profile" },
  { label: "Technical Engagements", href: "/#technical-engagements" },
  { label: "Operational Standards", href: "/#operational-standards" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [path]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-white/95 py-2.5 shadow-soft backdrop-blur-md"
          : "border-b border-border/30 bg-[#FFF8F8]/80 py-3 backdrop-blur-sm",
      )}
    >
      <div className="container-x flex items-center justify-between gap-4">
        {/* Official Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          <img
            src={logoImg}
            alt="Shaheen Services Pvt Ltd Logo"
            width={150}
            height={50}
            className={cn(
              "w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]",
              scrolled ? "h-10 md:h-11" : "h-11 md:h-12",
            )}
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-display text-xs md:text-sm font-extrabold tracking-tight text-[#242424] leading-tight">
              SHAHEEN SERVICES
            </span>
            <span className="text-[0.62rem] md:text-[0.65rem] font-bold tracking-wider text-[#B91C1C] uppercase">
              Facility Management
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-3 py-1.5 text-xs font-bold text-[#242424]/80 hover:text-[#B91C1C] transition-colors rounded-full hover:bg-[#F6D6D6]/40"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-2.5">
          {/* Prominent WhatsApp CTA */}
          <a
            href="https://wa.me/923267775000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-soft transition hover:bg-[#1EBE5D] hover:shadow-glow active:scale-[0.98]"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>WhatsApp Us</span>
          </a>

          {/* Phone Helpline CTA */}
          <a
            href={company.phoneHref}
            className="hidden xl:inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-2 text-xs font-bold text-[#242424] hover:border-[#B91C1C] transition"
          >
            <Phone className="h-3.5 w-3.5 text-[#B91C1C]" />
            <span>{company.phone}</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-[#242424] shadow-sm hover:border-primary transition"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-border bg-white/98 backdrop-blur-lg px-4 py-5 shadow-float animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-1.5 text-xs font-bold">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-xl text-[#242424] hover:bg-[#FFF8F8] hover:text-[#B91C1C] transition"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-3 border-t border-border/80 flex flex-col gap-2">
              <a
                href="https://wa.me/923267775000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-soft"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp: +92 326 7775000</span>
              </a>

              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-border bg-[#FFF8F8] px-4 py-2.5 text-xs font-bold text-[#242424]"
              >
                <Phone className="h-4 w-4 text-[#B91C1C]" />
                <span>Direct 24/7 Helpline: {company.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
