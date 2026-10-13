import { createFileRoute } from "@tanstack/react-router";
import { Signature3DScrollHero } from "@/components/site/Signature3DScrollHero";
import { Services3DCircularSection } from "@/components/site/Services3DCircularSection";
import { BoldTypographyBand } from "@/components/site/BoldTypographyBand";
import { CorporateProfileSection } from "@/components/site/CorporateProfileSection";
import { CircularImageGallerySection } from "@/components/site/CircularImageGallerySection";
import { TechnicalEngagements3DSection } from "@/components/site/TechnicalEngagements3DSection";
import { CustomerReviewsFloatingSection } from "@/components/site/CustomerReviewsFloatingSection";
import { OperationalStandards3DSection } from "@/components/site/OperationalStandards3DSection";
import { ConsultationProcessSection } from "@/components/site/ConsultationProcessSection";
import { FaqSection } from "@/components/site/FaqSection";
import { ContactSection } from "@/components/site/ContactSection";
import { CtaBand } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title: "Shaheen Services | Premium Facility Management & Specialized Technical Services",
      },
      {
        name: "description",
        content:
          "Shaheen Services Pvt Ltd: 13 specialized engineering divisions covering Building Management, AC Servicing, Central HVAC, Deep Cleaning, Pest & Termite Control, Electrical, and Solar Solutions. Helpline: +92 326 7775000.",
      },
      {
        property: "og:title",
        content: "Shaheen Services | Premier Facility Management & Property Services",
      },
      {
        property: "og:description",
        content:
          "Single accountable partner for commercial building maintenance, AC servicing, deep cleaning, termite proofing, electrical, and solar engineering. Free on-site survey.",
      },
      { property: "og:url", content: "https://shaheen-services.com" },
    ],
    links: [{ rel: "canonical", href: "https://shaheen-services.com" }],
  }),
});

function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-clip bg-[#FFF8F8] text-[#242424]">
      {/* ================================================================= */}
      {/* 1. MAIN HERO — FOUR PINNED 3D SCROLL SCENES                       */}
      {/* AC Service -> Deep Cleaning -> Pest Control -> Termite Control    */}
      {/* ================================================================= */}
      <Signature3DScrollHero />

      {/* ================================================================= */}
      {/* BOLD SCROLLING TYPOGRAPHY BAND 1                                  */}
      {/* ================================================================= */}
      <BoldTypographyBand
        theme="charcoal"
        speedSeconds={26}
        phrases={[
          "SHAHEEN SERVICES",
          "BUILT ON TRUST",
          "PROFESSIONAL SERVICE. RELIABLE RESULTS.",
          "CARE IN EVERY DETAIL.",
        ]}
      />

      {/* ================================================================= */}
      {/* 2. SERVICES — CIRCULAR 3D CARD TRANSITIONS (12 SERVICE CARDS)     */}
      {/* ================================================================= */}
      <Services3DCircularSection />

      {/* ================================================================= */}
      {/* 3. CORPORATE PROFILE SECTION (2-COLUMN EDITORIAL, NATURAL SCROLL) */}
      {/* ================================================================= */}
      <CorporateProfileSection />

      {/* ================================================================= */}
      {/* BOLD SCROLLING TYPOGRAPHY BAND 2 (REVERSE DIRECTION)              */}
      {/* ================================================================= */}
      <BoldTypographyBand
        theme="crimson"
        direction="reverse"
        speedSeconds={32}
        phrases={[
          "PREMIER FACILITY MANAGEMENT",
          "TECHNICAL PRECISION",
          "24/7 HELPLINE +92 326 7775000",
          "ZERO MIDDLEMEN",
          "DOCUMENTED QUALITY",
        ]}
      />

      {/* ================================================================= */}
      {/* 4. CIRCULAR IMAGE GALLERY — UPLOADED IMAGES 1, 2, 3, 4            */}
      {/* ================================================================= */}
      <CircularImageGallerySection />

      {/* ================================================================= */}
      {/* 5. RECENT TECHNICAL ENGAGEMENTS — 3D PASSING CARDS               */}
      {/* ================================================================= */}
      <TechnicalEngagements3DSection />

      {/* ================================================================= */}
      {/* BOLD SCROLLING TYPOGRAPHY BAND 3                                  */}
      {/* ================================================================= */}
      <BoldTypographyBand
        theme="charcoal"
        speedSeconds={28}
        phrases={[
          "SAFETY & RESPONSIBILITY",
          "CERTIFIED TECHNICIANS",
          "VERIFIED SUPERVISOR HANDOVER",
          "SHAHEEN SERVICES PVT LTD",
        ]}
      />

      {/* ================================================================= */}
      {/* 6. CUSTOMER REVIEWS — FLOATING POPUP STYLE (NATURAL SCROLL)       */}
      {/* ================================================================= */}
      <CustomerReviewsFloatingSection />

      {/* ================================================================= */}
      {/* 7. OPERATIONAL STANDARDS — FLOATING 3D CARDS (NATURAL FLOW)       */}
      {/* ================================================================= */}
      <OperationalStandards3DSection />

      {/* ================================================================= */}
      {/* 8. FROM INITIAL CONSULTATION TO COMPLETION (6-STEP WORKFLOW)      */}
      {/* ================================================================= */}
      <ConsultationProcessSection />

      {/* ================================================================= */}
      {/* 9. FAQ SECTION (ACCESSIBLE ACCORDION)                             */}
      {/* ================================================================= */}
      <FaqSection />

      {/* ================================================================= */}
      {/* 10. CONTACT & WHATSAPP CONVERSION SECTION                         */}
      {/* ================================================================= */}
      <ContactSection />

      {/* ================================================================= */}
      {/* FINAL CTA BAND                                                    */}
      {/* ================================================================= */}
      <CtaBand
        title="Need Technical Maintenance or Facility Support?"
        text="Speak directly with our engineering coordination desk or request a free on-site survey. We provide fixed written quotations in 24 hours."
      />
    </div>
  );
}
