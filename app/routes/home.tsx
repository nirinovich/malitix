import { Suspense, lazy } from "react";
import type { Route } from "./+types/home";
import { HeroSection } from "~/components/Home/HeroSection";
import { Layout } from "~/components/Shared/Layout";
import { buildMeta } from "~/utils/seo";

// Lazy load below-the-fold content
const ServicesSection = lazy(() => import("~/components/Home/ServicesSection").then(module => ({ default: module.ServicesSection })));
const TrustStats = lazy(() => import("~/components/Home/TrustStats").then(module => ({ default: module.TrustStats })));
const CTASection = lazy(() => import("~/components/Home/CTASection").then(module => ({ default: module.CTASection })));

export const meta: Route.MetaFunction = () => buildMeta({
  title: "Excellence technologique, innovation continue",
  description: "Malitix transforme vos défis technologiques en opportunités de croissance. Développement web & mobile, refonte SI, externalisation IT — 600+ projets livrés, 350+ ingénieurs.",
  url: "https://malitix.com/",
});

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
