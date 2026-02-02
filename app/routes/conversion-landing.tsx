import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import {
  AboveTheFold,
  Humaniser,
  ValueStack,
  GrandSlamOffer,
  LeadMagnet,
  LeadForm,
  SocialProof,
  Faq,
} from "~/components/ConversionLanding";
import { buildMeta } from "~/utils/seo";

export const meta: Route.MetaFunction = () =>
  buildMeta({
    title: "Équipe senior opérationnelle en 72h",
    description:
      "Accédez au top 1% d'ingénieurs, prêts en 72h. Zéro risque RH, flexibilité totale et intégration immédiate à vos outils.",
    url: "https://www.malitix.com/externalisation",
    image: "https://www.malitix.com/images/conversion-landing-og.jpg",
  });

export default function ConversionLandingRoute() {
  return (
    <Layout>
      <AboveTheFold />
      <Humaniser />
      <ValueStack />
      <SocialProof />
      <GrandSlamOffer />
      <LeadMagnet />
      <Faq />
      <LeadForm />
    </Layout>
  );
}
