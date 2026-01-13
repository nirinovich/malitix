import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import MobileAppHero from "~/components/MobileApp/MobileAppHero";
import MobileAppProblem from "~/components/MobileApp/MobileAppProblem";
import MobileAppSolution from "~/components/MobileApp/MobileAppSolution";
import SpeedAdvantage from "~/components/MobileApp/SpeedAdvantage";
import SocialProof from "~/components/MobileApp/SocialProof";
import FinalCTA from "~/components/MobileApp/FinalCTA";

export const meta: Route.MetaFunction = () => [
  { title: "Développement Mobile | iOS & Android | Malitix" },
  { name: "description", content: "Expert en développement mobile pour iOS, Android et cross-platform. Solutions natives et React Native. 50+ applications lancées avec une note de 4.8★." },
  { property: "og:title", content: "Développement Mobile | iOS & Android | Malitix" },
  { property: "og:description", content: "Expert en développement mobile. Spécialistes iOS & Android natifs, React Native et Flutter. Du concept à l'App Store." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://www.malitix.com/developpement-mobile" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Développement Mobile | iOS & Android | Malitix" },
  { name: "twitter:description", content: "Expert en développement mobile. Spécialistes iOS & Android natifs, React Native et Flutter." },
];

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
