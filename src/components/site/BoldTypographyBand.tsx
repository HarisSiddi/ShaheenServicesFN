import { cn } from "@/lib/utils";

interface BoldTypographyBandProps {
  phrases?: string[];
  theme?: "charcoal" | "crimson" | "light";
  direction?: "normal" | "reverse";
  speedSeconds?: number;
  className?: string;
}

export function BoldTypographyBand({
  phrases = [
    "SHAHEEN SERVICES",
    "BUILT ON TRUST",
    "PROFESSIONAL SERVICE. RELIABLE RESULTS.",
    "CARE IN EVERY DETAIL.",
  ],
  theme = "charcoal",
  direction = "normal",
  speedSeconds = 28,
  className,
}: BoldTypographyBandProps) {
  const themeClasses = {
    charcoal: "bg-[#242424] text-[#FFF8F8] border-y border-white/10",
    crimson: "bg-[#B91C1C] text-white border-y border-white/20",
    light: "bg-[#FFF8F8] text-[#242424] border-y border-[#F6D6D6]",
  };

  const accentColor = {
    charcoal: "text-[#B91C1C]",
    crimson: "text-[#F6D6D6]",
    light: "text-[#B91C1C]",
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-4 sm:py-6 select-none z-20",
        themeClasses[theme],
        className,
      )}
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{
          animation: `marquee ${speedSeconds}s linear infinite ${
            direction === "reverse" ? "reverse" : "normal"
          }`,
        }}
      >
        {/* Render multiple duplicate spans for infinite seamless ticker loop */}
        {Array.from({ length: 4 }).map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center shrink-0">
            {phrases.map((phrase, pIdx) => (
              <div key={`${loopIdx}-${pIdx}`} className="flex items-center">
                <span className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight px-4 sm:px-8">
                  {phrase}
                </span>
                <span
                  className={cn(
                    "text-base sm:text-xl font-bold opacity-70 px-2",
                    accentColor[theme],
                  )}
                >
                  ✦
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
