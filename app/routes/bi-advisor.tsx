import { Suspense, lazy } from "react";
import type { Route } from "./+types/home";
import { Layout } from "~/components/Shared/Layout";
import { buildMeta } from "~/utils/seo";
import BIHero from "~/components/BIAdvisor/BIHero";

// Lazy load below-the-fold sections
const BIVideoShowcase = lazy(() => import("~/components/BIAdvisor/BIVideoShowcase"));
const BITrustStrip = lazy(() => import("~/components/BIAdvisor/BITrustStrip"));
const BIPainPoints = lazy(() => import("~/components/BIAdvisor/BIPainPoints"));
const BIValueProp = lazy(() => import("~/components/BIAdvisor/BIValueProp"));
const BIBeforeAfter = lazy(() => import("~/components/BIAdvisor/BIBeforeAfter"));
const BIMidCTA = lazy(() => import("~/components/BIAdvisor/BIMidCTA"));
const BIRiskReduction = lazy(() => import("~/components/BIAdvisor/BIRiskReduction"));
const BIBenefitsByRole = lazy(() => import("~/components/BIAdvisor/BIBenefitsByRole"));
const BIUseCases = lazy(() => import("~/components/BIAdvisor/BIUseCases"));
const BIFaq = lazy(() => import("~/components/BIAdvisor/BIFaq"));
const BIContactSection = lazy(() => import("~/components/BIAdvisor/BIContactSection"));

export const meta: Route.MetaFunction = () =>
  buildMeta({
    title: "BI Advisor - Prenez des décisions 10x plus vite grâce à l'IA",
    description:
      "Divisez votre temps de décision par 10. BI Advisor transforme votre ERP en assistant IA qui parle votre langue. Prévisions instantanées, alertes proactives. POC gratuit en 48h.",
    url: "https://malitix.com/bi-advisor",
  });

export default function BIAdvisorPage() {
  return (
    <Layout>
      <BIHero />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <BIVideoShowcase />
      </Suspense>
      <Suspense fallback={<div className="min-h-[100px]" />}>
        <BITrustStrip />
      </Suspense>
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <BIPainPoints />
      </Suspense>
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <BIValueProp />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <BIBeforeAfter />
      </Suspense>
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <BIMidCTA />
      </Suspense>
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <BIRiskReduction />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <BIBenefitsByRole />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <BIUseCases />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <BIFaq />
      </Suspense>
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <BIContactSection />
      </Suspense>
    </Layout>
  );
}
