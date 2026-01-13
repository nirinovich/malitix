import { Suspense, lazy } from "react";
import type { Route } from "./+types/home";
import { HeroSection } from "~/components/Home/HeroSection";
import { Layout } from "~/components/Shared/Layout";

// Lazy load below-the-fold content
const ServicesSection = lazy(() => import("~/components/Home/ServicesSection").then(module => ({ default: module.ServicesSection })));
const TrustStats = lazy(() => import("~/components/Home/TrustStats").then(module => ({ default: module.TrustStats })));
const CTASection = lazy(() => import("~/components/Home/CTASection").then(module => ({ default: module.CTASection })));

export const meta: Route.MetaFunction = () => [
  { title: "Malitix | Excellence technologique, innovation continue" },
  {
    name: "description",
    content:
      "Malitix transforme vos défis technologiques en opportunités de croissance. Solutions innovantes en développement web, cloud et transformation digitale pour propulser votre entreprise vers l'excellence.",
  },
  { property: "og:title", content: "Malitix | Excellence technologique, innovation continue" },
  { property: "og:description", content: "Malitix transforme vos défis technologiques en opportunités de croissance. Solutions innovantes en développement web, cloud et transformation digitale." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://www.malitix.com/" },
  { property: "og:image", content: "https://www.malitix.com/images/og-image.jpg" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Malitix | Excellence technologique, innovation continue" },
  { name: "twitter:description", content: "Solutions innovantes en développement web, cloud et transformation digitale pour propulser votre entreprise." },
];

export default function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        <Suspense fallback={<div className="min-h-screen" />}>
          <ServicesSection />
          <TrustStats />
          <CTASection />
        </Suspense>
      </Layout>
    </>
  );
}
