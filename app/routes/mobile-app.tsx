import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import MobileAppHero from "~/components/MobileApp/MobileAppHero";
import MobileAppProblem from "~/components/MobileApp/MobileAppProblem";
import MobileAppSolution from "~/components/MobileApp/MobileAppSolution";
import SpeedAdvantage from "~/components/MobileApp/SpeedAdvantage";
import SocialProof from "~/components/MobileApp/SocialProof";
import FinalCTA from "~/components/MobileApp/FinalCTA";
import { buildMeta } from "~/utils/seo";

export const meta: Route.MetaFunction = () => buildMeta({
  title: "Développement Mobile | iOS & Android",
  description: "Expert en développement mobile pour iOS, Android et cross-platform. Solutions natives et React Native, 50+ applications lancées avec une note de 4.8★. Du concept à l'App Store.",
  url: "https://malitix.com/developpement-mobile",
});

export default function MobileAppPage() {
  return (
    <Layout>
      <MobileAppHero />
      <MobileAppProblem />
      <MobileAppSolution />
      <SpeedAdvantage />
      <SocialProof />
      <FinalCTA />
    </Layout>
  );
}
