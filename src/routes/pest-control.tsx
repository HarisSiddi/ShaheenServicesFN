import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/site";
import { ServicePage } from "@/components/site/ServicePage";

const service = services.find((s) => s.slug === "pest-control") || services[0]!;

export const Route = createFileRoute("/pest-control")({
  component: () => <ServicePage service={service} image={service.image} />,
  head: () => ({
    meta: [
      { title: "Pest Control Services | Cockroach, Termite & Bed Bug | Shaheen" },
      {
        name: "description",
        content:
          "Approved pest control treatments for cockroaches, termites, bed bugs, rodents and mosquitoes. Safe products and free follow-up inspection across Pakistan.",
      },
      { property: "og:title", content: "Pest Control Services | Shaheen Services" },
      {
        property: "og:description",
        content:
          "Integrated pest management with inspection, targeted treatment, proofing and follow-up visits.",
      },
      { property: "og:url", content: "/pest-control" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/pest-control" }],
  }),
});
