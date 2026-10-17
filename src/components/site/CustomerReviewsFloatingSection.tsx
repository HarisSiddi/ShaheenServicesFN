import { CheckCircle2, Star, Quote } from "lucide-react";
import { verifiedReviews } from "@/data/site";
import { Reveal } from "@/components/site/motion";

export function CustomerReviewsFloatingSection() {
  return (
    <section
      id="reviews-section"
      className="section-y bg-white text-[#242424] border-t border-border/80 relative overflow-hidden scroll-mt-20"
      aria-label="Customer Reviews"
    >
      {/* Subtle Background Elements */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-[#F6D6D6]/35 blur-3xl -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-1/3 h-80 w-80 rounded-full bg-[#B91C1C]/10 blur-3xl -z-10"
      />

      <div className="container-x">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F6D6D6] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
            <span>Documented Feedback</span>
          </div>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#242424] tracking-tight">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#242424]/75 max-w-xl mx-auto">
            Documented client feedback from corporate facility agreements, residential deep cleans,
            and specialized pest management programs across Pakistan.
          </p>
        </div>

        {/* Floating Popup Style Cards Grid (Naturally Scrollable) */}
        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {verifiedReviews.map((r, i) => (
            <Reveal key={r.client + i} delay={i * 70}>
              <figure
                className="group relative flex h-full flex-col justify-between rounded-3xl border border-border bg-[#FFF8F8] p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-float hover:border-[#B91C1C]/40 hover:bg-white"
                style={{
                  // Subtle alternating floating animation stagger
                  animation: `float-slow ${7 + i}s ease-in-out infinite ${i * 0.8}s`,
                }}
              >
                {/* Floating Popup Header Accent */}
                <div className="absolute -top-3 left-6 rounded-full bg-white border border-border px-2.5 py-0.5 shadow-sm flex items-center gap-1 text-[0.65rem] font-bold text-emerald-700">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                  <span>Verified Engagement</span>
                </div>

                <div>
                  {/* Top Stars & Quote Glyph */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex gap-1 text-[#B91C1C]">
                      {Array.from({ length: r.rating }).map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-5 w-5 text-[#B91C1C]/20" />
                  </div>

                  <blockquote className="mt-4 text-xs sm:text-[0.82rem] leading-relaxed text-[#242424]/90 italic">
                    “{r.feedback}”
                  </blockquote>
                </div>

                {/* Author Metadata Footer */}
                <figcaption className="mt-6 border-t border-border/70 pt-4">
                  <span className="block font-display text-xs font-bold text-[#242424] group-hover:text-[#B91C1C] transition-colors">
                    {r.client}
                  </span>
                  <span className="block text-[0.7rem] font-medium text-muted-foreground mt-0.5">
                    {r.property}
                  </span>
                  <span className="inline-block mt-1 text-[0.68rem] font-bold text-[#B91C1C] uppercase tracking-wider">
                    {r.service}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
