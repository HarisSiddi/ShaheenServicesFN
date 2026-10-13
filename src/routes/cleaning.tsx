import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/site";
import { ServicePage } from "@/components/site/ServicePage";

const service = services.find((s) => s.slug === "deep-cleaning") || services[0]!;

export const Route = createFileRoute("/cleaning")({
  component: () => <ServicePage service={service} image={service.image} />,
  head: () => ({
    meta: [
      { title: "Deep Cleaning Services | Home, Office & Upholstery | Shaheen" },
      {
        name: "description",
        content:
          "Professional deep cleaning, sofa and carpet cleaning, kitchen, bathroom and office cleaning contracts with eco-friendly products and uniformed crews.",
      },
      { property: "og:title", content: "Cleaning Services | Shaheen Services" },
      {
        property: "og:description",
        content:
          "Deep cleaning, upholstery care and recurring office cleaning delivered by trained, background-checked crews.",
      },
      { property: "og:url", content: "/cleaning" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/cleaning" }],
  }),
});
