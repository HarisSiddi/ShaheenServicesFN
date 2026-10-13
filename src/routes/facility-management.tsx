import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/site";
import { ServicePage } from "@/components/site/ServicePage";

const service = services.find((s) => s.slug === "building-management") || services[0]!;

export const Route = createFileRoute("/facility-management")({
  component: () => <ServicePage service={service} image={service.image} />,
  head: () => ({
    meta: [
      { title: "Building Management & AMC | Shaheen Services Pvt Ltd" },
      {
        name: "description",
        content:
          "Complete building administration, planned preventive maintenance (PPM), MEP supervision, and annual maintenance contracts (AMC) across Pakistan.",
      },
      { property: "og:title", content: "Building Management | Shaheen Services" },
      {
        property: "og:description",
        content:
          "One accountable partner for building maintenance, BMS oversight, and tenant operations.",
      },
      { property: "og:url", content: "/facility-management" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/facility-management" }],
  }),
});
