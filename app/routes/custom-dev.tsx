import { Suspense, lazy } from "react";
import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import { buildMeta } from "~/utils/seo";
import CustomDevHero from "~/components/CustomDev/CustomDevHero";
import CustomDevProblem from "~/components/CustomDev/CustomDevProblem";

const CustomDevSolution = lazy(() => import("~/components/CustomDev/CustomDevSolution"));
const CustomDevStack = lazy(() => import("~/components/CustomDev/CustomDevStack"));
const SocialProof = lazy(() => import("~/components/Shared/SocialProof").then(m => ({ default: m.SocialProof })));
const CustomDevGuarantee = lazy(() => import("~/components/CustomDev/CustomDevGuarantee"));
const CustomDevCTA = lazy(() => import("~/components/CustomDev/CustomDevCTA"));

export const meta: Route.MetaFunction = () =>
  buildMeta({
    title: "Développement Sur Mesure | Application Web & Mobile en 90 Jours",
    description:
      "Arrêtez de tordre votre business pour un logiciel standard. Application web ou mobile sur mesure en 90 jours, garantie sans bug. Budget fixe, propriété totale du code.",
    url: "https://malitix.com/developpement-sur-mesure",
  });

export default function CustomDevelopment() {
  return (
    <Layout>
      <CustomDevHero />
      <CustomDevProblem />
      <Suspense fallback={<div className="min-h-screen" />}>
        <CustomDevSolution />
        <CustomDevStack />
        <SocialProof />
        <CustomDevGuarantee />
        <CustomDevCTA />
      </Suspense>
    </Layout>
  );
}
