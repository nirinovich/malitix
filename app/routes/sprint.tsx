import { Suspense, lazy } from "react";
import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import { ScrollToTop } from "~/components/Shared/ScrollToTop";
import SprintHero from "~/components/Sprint/SprintHero";
import SprintProblem from "~/components/Sprint/SprintProblem";
import SprintSolution from "~/components/Sprint/SprintSolution";
// Lazy load Testimonials
const SprintTestimonials = lazy(() => import("~/components/Sprint/SprintTestimonials"));
import SprintBenefits from "~/components/Sprint/SprintBenefits";
import SprintContact from "~/components/Sprint/SprintContact";

export const meta: Route.MetaFunction = () => [
  { title: "Sprint Commando | Développement Web Ultra-Rapide en 2 Semaines - Malitix" },
  { name: "description", content: "Obtenez votre site web professionnel en seulement 2 semaines avec Sprint Commando. Développement agile, qualité premium et mise en ligne garantie. Idéal pour les startups et PME qui veulent avancer vite." },
  { property: "og:title", content: "Sprint Commando | Site Web en 2 Semaines - Malitix" },
  { property: "og:description", content: "Développement web ultra-rapide en 2 semaines. Méthodologie agile, qualité premium et mise en ligne garantie pour votre projet digital." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://www.malitix.com/sprint-commando" },
  { property: "og:image", content: "https://www.malitix.com/images/sprint-commando-og.jpg" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Sprint Commando | Site Web en 2 Semaines" },
  { name: "twitter:description", content: "Développement web ultra-rapide. Obtenez votre site professionnel en 2 semaines avec Sprint Commando." },
  { tagName: "link", rel: "canonical", href: "https://www.malitix.com/sprint-commando" }
];

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
