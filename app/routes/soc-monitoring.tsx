import { Suspense, lazy } from "react";
import type { Route } from "./+types/soc-monitoring";
import { Layout } from "~/components/Shared/Layout";
import { buildMeta } from "~/utils/seo";
import SOCHero from "~/components/SOCMonitoring/SOCHero";
import { LogoCarousel } from "~/components/Utility/LogoCarousel";

const SOCHiddenCosts = lazy(() => import("~/components/SOCMonitoring/SOCHiddenCosts"));
const SOCROICalculator = lazy(() => import("~/components/SOCMonitoring/SOCROICalculator"));
const SOCBeforeAfter = lazy(() => import("~/components/SOCMonitoring/SOCBeforeAfter"));
const SOCContact = lazy(() => import("~/components/SOCMonitoring/SOCContact"));

export const meta: Route.MetaFunction = () =>
  buildMeta({
    title: "Externalisation SOC | Malitix",
    description:
      "Externalisez votre SOC avec Malitix. Réduisez vos coûts de monitoring sécurité, libérez vos ingénieurs et gagnez en productivité. Calculez votre ROI instantanément.",
    url: "https://malitix.com/soc-monitoring",
  });

const DUMMY_LOGOS = [
  { id: 1, name: "Cisco", logo: "/images/Cisco.webp" },
  { id: 2, name: "GCP", logo: "/images/GCP.webp" },
  { id: 3, name: "Hubspot", logo: "/images/Hubspot.webp" },
  { id: 4, name: "Salesforce", logo: "/images/Salesforce.webp" },
];

export default function SOCMonitoringPage() {
  return (
    <Layout>
      <SOCHero />
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <section className="py-12 px-6 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-lg text-[var(--text-tertiary)] mb-8">
              Déjà <span className="font-bold text-[#2ca3bd]">+50 000</span> alertes traitées pour des équipes tech de haut niveau
            </p>
            <LogoCarousel logos={DUMMY_LOGOS} />
          </div>
        </section>
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <SOCHiddenCosts />
      </Suspense>
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <SOCROICalculator />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <SOCBeforeAfter />
      </Suspense>
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <SOCContact />
      </Suspense>
    </Layout>
  );
}
