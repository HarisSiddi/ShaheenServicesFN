import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/site";
import { ServicePage } from "@/components/site/ServicePage";

const service = services.find((s) => s.slug === "solar-solutions") || services[0]!;

export const Route = createFileRoute("/solar")({
  component: () => <ServicePage service={service} image={service.image} />,
  head: () => ({
    meta: [
      { title: "Solar Solutions | EPC Installation, Inverters & Panel Wash | Shaheen" },
      {
        name: "description",
        content:
          "Rooftop and commercial solar PV design, tier-1 panel mounting, inverter servicing, and automated panel cleaning across Pakistan.",
      },
      { property: "og:title", content: "Solar Solutions | Shaheen Services" },
      {
        property: "og:description",
        content:
          "Turnkey solar engineering for villas, corporate rooftops, and industrial facilities.",
      },
      { property: "og:url", content: "/solar" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/solar" }],
  }),
});
