import { Suspense, lazy } from "react";
import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import { ScrollToTop } from "~/components/Shared/ScrollToTop";
import { buildMeta } from "~/utils/seo";
import SprintHero from "~/components/Sprint/SprintHero";
import SprintProblem from "~/components/Sprint/SprintProblem";
import SprintSolution from "~/components/Sprint/SprintSolution";
// Lazy load Testimonials
const SprintTestimonials = lazy(() => import("~/components/Sprint/SprintTestimonials"));
import SprintBenefits from "~/components/Sprint/SprintBenefits";
import SprintContact from "~/components/Sprint/SprintContact";

export const meta: Route.MetaFunction = () => buildMeta({
  title: "Sprint Commando | Déblocage IT en 2 Semaines",
  description: "Vos projets IT sont en retard ? On redresse votre roadmap en 2 semaines. Diagnostic en 48h, équipe dédiée, résultats mesurables. 600+ projets livrés par 350+ ingénieurs.",
  url: "https://malitix.com/sprint-commando",
});

export default function SprintCommando() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <SprintHero />
        <SprintProblem />
        <SprintSolution />
        <Suspense fallback={<div className="h-96 w-full animate-pulse bg-gray-100 dark:bg-white/5" />}>
          <SprintTestimonials />
        </Suspense>
        <SprintBenefits />
        <SprintContact />
      </Layout>
    </>
  );
}
