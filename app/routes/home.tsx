import type { Route } from "./+types/home";
import { HeroSection } from "~/components/Home/HeroSection";
import { ServicesSection } from "~/components/Home/ServicesSection";
import { TrustStats } from "~/components/Home/TrustStats";
import { CTASection } from "~/components/Home/CTASection";
import { Layout } from "~/components/Shared/Layout";

export const meta: Route.MetaFunction = () => [
  { title: "Malitix | Excellence technologique, innovation continue" },
  {
    name: "description",
    content:
      "Malitix transforme vos défis technologiques en opportunités de croissance. Solutions innovantes en développement web, cloud et transformation digitale pour propulser votre entreprise vers l'excellence.",
  },
  { property: "og:title", content: "Malitix | Excellence technologique, innovation continue" },
  { property: "og:description", content: "Malitix transforme vos défis technologiques en opportunités de croissance. Solutions innovantes en développement web, cloud et transformation digitale." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://www.malitix.com/" },
  { property: "og:image", content: "https://www.malitix.com/images/og-image.jpg" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Malitix | Excellence technologique, innovation continue" },
  { name: "twitter:description", content: "Solutions innovantes en développement web, cloud et transformation digitale pour propulser votre entreprise." },
];

export default function Home(): JSX.Element {
  return (
    <>
      <Layout>
        <HeroSection />
        <ServicesSection />
        <TrustStats />
        <CTASection />
      </Layout>
    </>
  );
}
