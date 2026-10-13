import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/site";
import { ServicePage } from "@/components/site/ServicePage";

const service = services.find((s) => s.slug === "ac-repair-and-servicing") || services[0]!;

export const Route = createFileRoute("/ac-services")({
  component: () => <ServicePage service={service} image={service.image} />,
  head: () => ({
    meta: [
      { title: "AC & HVAC Services | Repair, Installation & Maintenance | Shaheen" },
      {
        name: "description",
        content:
          "Split AC installation, AC repair, gas charging, duct cleaning, VRF and commercial HVAC maintenance by certified engineers. Free inspection, 24/7 response.",
      },
      { property: "og:title", content: "AC & HVAC Services | Shaheen Services" },
      {
        property: "og:description",
        content:
          "Certified HVAC engineers for AC repair, maintenance, gas charging, duct cleaning and VRF systems.",
      },
      { property: "og:url", content: "/ac-services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/ac-services" }],
  }),
});
