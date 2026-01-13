import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import { ScrollToTop } from "~/components/Shared/ScrollToTop";
import SIRefonteHero from "~/components/SIRefonte/SIRefonteHero";
import SIRefonteProblem from "~/components/SIRefonte/SIRefonteProblem";
import SIRefonteSolution from "~/components/SIRefonte/SIRefonteSolution";
import SIRefonteOffers from "~/components/SIRefonte/SIRefonteOffers";
import SIRefonteBenefits from "~/components/SIRefonte/SIRefonteBenefits";
import SIRefonteContact from "~/components/SIRefonte/SIRefonteContact";

export const meta: Route.MetaFunction = () => [
  { title: "Refonte SI | Modernisation Système d'Information Cloud, Data & IA - Malitix" },
  { name: "description", content: "Modernisez votre Système d'Information en 90 jours : Cloud optimisé, Data gouvernée, Sécurité renforcée, Architecture IA-ready. Audit Express 8h offert + Quick wins à ROI immédiat." },
  { property: "og:title", content: "Refonte SI | Transformation Cloud, Data & Sécurité - Malitix" },
  { property: "og:description", content: "Refonte progressive de votre SI : Réduction 20-40% des coûts cloud, Architecture moderne, Automatisation DevOps. Audit diagnostic 8h offert." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://www.malitix.com/refonte-si" },
  { property: "og:image", content: "https://www.malitix.com/images/refonte-si-og.jpg" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Refonte SI | Modernisation Cloud, Data & IA" },
  { name: "twitter:description", content: "Transformez votre SI en 90 jours. Architecture moderne, cloud optimisé, sécurité renforcée." },
  { tagName: "link", rel: "canonical", href: "https://www.malitix.com/refonte-si" }
];

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
