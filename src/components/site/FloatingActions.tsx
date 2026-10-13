import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { company } from "@/data/site";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition-all duration-300 hover:-translate-y-1",
          show ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
      <a
        href={company.phoneHref}
        aria-label="Call now"
        className="grid h-12 w-12 place-items-center rounded-full gradient-primary text-primary-foreground shadow-glow transition hover:-translate-y-1"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={company.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="flex items-center gap-2 rounded-full bg-charcoal px-4 py-3 text-sm font-semibold text-charcoal-foreground shadow-float transition hover:-translate-y-1"
      >
        <MessageCircle className="h-5 w-5 text-primary-glow" />
        WhatsApp
      </a>
    </div>
  );
}
