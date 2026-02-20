import { Suspense, lazy } from "react";
import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import { buildMeta } from "~/utils/seo";
import SprintHero from "~/components/Sprint/SprintHero";

// Lazy-load all below-fold sections
const SprintProblem = lazy(() => import("~/components/Sprint/SprintProblem"));
const SprintSolution = lazy(() => import("~/components/Sprint/SprintSolution"));
const SprintTestimonials = lazy(() => import("~/components/Sprint/SprintTestimonials"));
const SprintBenefits = lazy(() => import("~/components/Sprint/SprintBenefits"));
const SprintContact = lazy(() => import("~/components/Sprint/SprintContact"));

export const meta: Route.MetaFunction = () => buildMeta({
  title: "Sprint Commando | Déblocage IT en 2 Semaines",
  description: "Vos projets IT sont en retard ? On redresse votre roadmap en 2 semaines. Diagnostic en 48h, équipe dédiée, résultats mesurables. 600+ projets livrés par 350+ ingénieurs.",
  url: "https://malitix.com/sprint-commando",
});

export default function SprintCommando() {
  return (
    <Layout>
      <SprintHero />
      <Suspense fallback={<div className="min-h-[500px]" />}>
        <SprintProblem />
      </Suspense>
      <Suspense fallback={<div className="min-h-[500px]" />}>
        <SprintSolution />
      </Suspense>
      <Suspense fallback={<div className="h-96 w-full animate-pulse bg-gray-100 dark:bg-white/5" />}>
        <SprintTestimonials />
      </Suspense>
      <Suspense fallback={<div className="min-h-[500px]" />}>
        <SprintBenefits />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <SprintContact />
      </Suspense>
    </Layout>
  );
}
