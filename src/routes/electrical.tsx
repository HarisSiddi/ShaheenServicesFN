import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/site";
import { ServicePage } from "@/components/site/ServicePage";

const service = services.find((s) => s.slug === "electrical-services") || services[0]!;

export const Route = createFileRoute("/electrical")({
  component: () => <ServicePage service={service} image={service.image} />,
  head: () => ({
    meta: [
      { title: "Electrical Services | Wiring, DB Installation & Repairs | Shaheen" },
      {
        name: "description",
        content:
          "Licensed electricians for installation, rewiring, distribution board upgrades, fault finding and commercial electrical maintenance across Pakistan.",
      },
      { property: "og:title", content: "Electrical Services | Shaheen Services" },
      {
        property: "og:description",
        content:
          "Safe, compliant electrical work from certified electricians with emergency breakdown call-outs.",
      },
      { property: "og:url", content: "/electrical" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/electrical" }],
  }),
});
