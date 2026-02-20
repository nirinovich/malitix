import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import { ScrollToTop } from "~/components/Shared/ScrollToTop";
import SIRefonteHero from "~/components/SIRefonte/SIRefonteHero";
import SIRefonteProblem from "~/components/SIRefonte/SIRefonteProblem";
import SIRefonteSolution from "~/components/SIRefonte/SIRefonteSolution";
import SIRefonteOffers from "~/components/SIRefonte/SIRefonteOffers";
import SIRefonteBenefits from "~/components/SIRefonte/SIRefonteBenefits";
import SIRefonteContact from "~/components/SIRefonte/SIRefonteContact";

import { buildMeta } from "~/utils/seo";

export const meta: Route.MetaFunction = () => buildMeta({
  title: "Refonte SI | Modernisation Cloud, Data & IA",
  description: "Modernisez votre Système d'Information en 90 jours : Cloud optimisé, Data gouvernée, Sécurité renforcée, Architecture IA-ready. Réduction 20-40% des coûts. Audit Express 8h offert.",
  url: "https://malitix.com/refonte-si",
});

export default function SIRefonte() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <SIRefonteHero />
        <SIRefonteProblem />
        <SIRefonteSolution />
        <SIRefonteOffers />
        <SIRefonteBenefits />
        <SIRefonteContact />
      </Layout>
    </>
  );
}
