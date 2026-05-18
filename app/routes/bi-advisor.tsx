import { Suspense, lazy } from "react";
import type { Route } from "./+types/home";
import { Layout } from "~/components/Shared/Layout";
import { buildMeta } from "~/utils/seo";
import BIHero from "~/components/BIAdvisor/BIHero";

// Lazy load below-the-fold sections
const BITrustStrip = lazy(() => import("~/components/BIAdvisor/BITrustStrip"));
const BIPainPoints = lazy(() => import("~/components/BIAdvisor/BIPainPoints"));
const BIBeforeAfter = lazy(() => import("~/components/BIAdvisor/BIBeforeAfter"));
const BIValueProp = lazy(() => import("~/components/BIAdvisor/BIValueProp"));
const BIUseCases = lazy(() => import("~/components/BIAdvisor/BIUseCases"));
const BIVideoShowcase = lazy(() => import("~/components/BIAdvisor/BIVideoShowcase"));
const BIRiskReduction = lazy(() => import("~/components/BIAdvisor/BIRiskReduction"));
const BIBenefitsByRole = lazy(() => import("~/components/BIAdvisor/BIBenefitsByRole"));
const BIFaq = lazy(() => import("~/components/BIAdvisor/BIFaq"));
const BIContactSection = lazy(() => import("~/components/BIAdvisor/BIContactSection"));

export const meta: Route.MetaFunction = () =>
  buildMeta({
    title: "BI Advisor - L'IA qui transforme vos données en décisions | Malitix",
    description:
      "Divisez votre temps de décision par 10. BI Advisor transforme votre ERP en assistant IA qui parle votre langue. Prévisions instantanées, alertes proactives. POC gratuit en 48h.",
    url: "https://malitix.com/bi-advisor",
  });

export default function BIAdvisorPage() {
  return (
    <Layout>
      {/* SECTION 1: HERO (Hook & Promise) */}
      <BIHero />

      {/* SECTION 2: TRUST STRIP (Authority) */}
      <Suspense fallback={<div className="min-h-[100px]" />}>
        <BITrustStrip />
      </Suspense>

      {/* SECTION 3: THE PROBLEM (PAS - Agitation) */}
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <BIPainPoints />
      </Suspense>

      {/* SECTION 4: THE SOLUTION (Before / After) */}
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <BIBeforeAfter />
      </Suspense>

      {/* SECTION 5: THE CORE EXPERIENCE (Interactive Demo) */}
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <BIValueProp />
      </Suspense>

      {/* SECTION 6: WALL OF PROOF (Use Cases) */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <BIUseCases />
      </Suspense>

      {/* REVIEWS STRIP */}
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <BIVideoShowcase />
      </Suspense>

      {/* SECTION 7: THE GUARANTEE (Risk Reversal) */}
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <BIRiskReduction />
      </Suspense>

      {/* SECTION 8: WHO IS THIS FOR? */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <BIBenefitsByRole />
      </Suspense>

      {/* SECTION 9: FAQ */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <BIFaq />
      </Suspense>

      {/* SECTION 10: FINAL CTA (Contact) */}
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <BIContactSection />
      </Suspense>
    </Layout>
  );
}
