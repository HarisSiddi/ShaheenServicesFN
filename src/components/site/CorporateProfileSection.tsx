import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Wrench,
  Building2,
  Users,
} from "lucide-react";
import { company, stats } from "@/data/site";
import { Counter, Reveal } from "@/components/site/motion";

export function CorporateProfileSection() {
  return (
    <section
      id="corporate-profile"
      className="section-y bg-white text-[#242424] border-t border-border/80 relative overflow-hidden"
      aria-label="Corporate Profile"
    >
      {/* Subtle Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-[#F6D6D6]/40 blur-3xl -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-[#B91C1C]/10 blur-3xl -z-10"
      />

      <div className="container-x">
        {/* Two-Column Editorial Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <Reveal>
              <div className="relative rounded-3xl border border-border bg-[#FFF8F8] p-3 shadow-float">
                <div className="relative h-[380px] sm:h-[460px] overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src="/services/service-building-mgmt.jpg"
                    alt="Shaheen Services modern corporate facility engineering"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Overlaid Badge */}
                  <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3.5 py-1.5 shadow-soft backdrop-blur-sm flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#B91C1C]" />
                    <span className="text-xs font-bold text-[#242424]">
                      Shaheen Services Pvt Ltd
                    </span>
                  </div>

                  {/* Overlaid Stats Strip on Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/40 bg-white/95 p-4 shadow-soft backdrop-blur-md">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <span className="block font-display text-2xl font-black text-[#B91C1C]">
                          100%
                        </span>
                        <span className="block text-[0.68rem] font-bold text-[#242424]/70 uppercase tracking-wider">
                          In-House Crews
                        </span>
                      </div>
                      <div className="border-l border-border/80">
                        <span className="block font-display text-2xl font-black text-[#B91C1C]">
                          24/7
                        </span>
                        <span className="block text-[0.68rem] font-bold text-[#242424]/70 uppercase tracking-wider">
                          Live Helpline
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Floating Secondary Verification Card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-float max-w-xs">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#B91C1C] text-white shadow-glow">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <span className="block font-display text-xs font-bold text-[#242424]">
                  Industrial Tooling Inventory
                </span>
                <span className="block text-[0.68rem] text-muted-foreground">
                  OEM manifolds, jet washers & detectors
                </span>
              </div>
            </div>
          </div>

          {/* Right Editorial Copy Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal delay={60}>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F6D6D6] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#B91C1C] w-fit">
                <Building2 className="h-3.5 w-3.5" />
                <span>Single Accountability Partner</span>
              </div>

              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#242424] tracking-tight">
                CORPORATE PROFILE
              </h2>

              <p className="mt-2 text-base sm:text-lg font-semibold text-[#B91C1C]">
                Structured Facility Management & Technical Property Solutions Across Pakistan
              </p>

              <div className="mt-5 space-y-3.5 text-sm leading-relaxed text-[#242424]/85">
                <p>
                  Shaheen Services Pvt Ltd was established to relieve corporate property heads,
                  commercial enterprises, and residential owners of the inefficiency of coordinating
                  disparate, unaccountable subcontractors.
                </p>
                <p>
                  We operate as a single disciplined operational partner across mechanical,
                  electrical, plumbing (MEP), HVAC systems, civil renovations, deep sanitisation,
                  and municipality-approved pest and termite proofing. Every trade division is
                  staffed with in-house, trade-tested technicians using modern commercial machinery.
                </p>
                <p>
                  Our commitment is rooted in full-scope transparency: every project begins with an
                  on-site technical assessment, followed by an itemised written proposal, and
                  concludes with a digital supervisor sign-off report.
                </p>
              </div>

              {/* Factual Operational Highlights */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Zero Subcontracted Middlemen",
                    desc: "All technicians are employed, uniformed, and directly supervised by Shaheen Services.",
                  },
                  {
                    title: "Calibrated Commercial Tooling",
                    desc: "Digital manifold gauges, pressure washers, and non-destructive cavity scanners.",
                  },
                  {
                    title: "Documented Sign-Off Quality",
                    desc: "Before-and-after photographic reporting and supervisor checklists on every visit.",
                  },
                  {
                    title: "Rapid Emergency SLA",
                    desc: "24/7 coordination with prompt 4-hour attendance for critical utility breakdowns.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-2.5 rounded-2xl border border-border bg-[#FFF8F8] p-3.5"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#B91C1C] mt-0.5" />
                    <div>
                      <h4 className="font-display text-xs font-bold text-[#242424]">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-[0.72rem] text-muted-foreground leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prominent Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3.5 text-xs font-bold text-white shadow-glow transition hover:brightness-110 active:scale-[0.98]"
                >
                  <span>Discuss Your Project Requirements</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3.5 text-xs font-bold text-[#242424] shadow-soft transition hover:border-primary hover:bg-[#FFF8F8]"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span>Call {company.phone}</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
