import { Suspense, lazy } from "react";
import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import { ScrollToTop } from "~/components/Shared/ScrollToTop";
import CustomDevHero from "~/components/CustomDev/CustomDevHero";
import CustomDevProblem from "~/components/CustomDev/CustomDevProblem";

const CustomDevSolution = lazy(() => import("~/components/CustomDev/CustomDevSolution"));
const CustomDevStack = lazy(() => import("~/components/CustomDev/CustomDevStack"));
const CustomDevTestimonials = lazy(() => import("~/components/CustomDev/CustomDevTestimonials"));
const CustomDevGuarantee = lazy(() => import("~/components/CustomDev/CustomDevGuarantee"));
const CustomDevCTA = lazy(() => import("~/components/CustomDev/CustomDevCTA"));

export const meta: Route.MetaFunction = () => [
  { title: "Développement Sur Mesure | Application Web & Mobile en 90 Jours - Malitix" },
  { name: "description", content: "Arrêtez de tordre votre business pour rentrer dans un logiciel standard. Obtenez votre application web ou mobile sur mesure en 90 jours, garantie sans bug. Budget fixe, propriété totale du code." },
  { property: "og:title", content: "Développement Sur Mesure | Application Web & Mobile en 90 Jours - Malitix" },
  { property: "og:description", content: "Obtenez votre application web ou mobile sur mesure en 90 jours, garantie sans bug. Budget fixe, propriété totale du code." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://www.malitix.com/developpement-sur-mesure" },
  { property: "og:image", content: "https://www.malitix.com/images/custom-dev-og.jpg" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Développement Sur Mesure | Application Web & Mobile en 90 Jours" },
  { name: "twitter:description", content: "Application sur mesure en 90 jours, garantie sans bug. Budget fixe, propriété totale du code." },
  { tagName: "link", rel: "canonical", href: "https://www.malitix.com/developpement-sur-mesure" }
];

export default function CustomDevelopment() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <CustomDevHero />
        <CustomDevProblem />
        <Suspense fallback={<div className="min-h-screen" />}>
          <CustomDevSolution />
          <CustomDevStack />
          <CustomDevTestimonials />
          <CustomDevGuarantee />
          <CustomDevCTA />
        </Suspense>
      </Layout>
    </>
  );
}
