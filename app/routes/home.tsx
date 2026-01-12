import type { Route } from "./+types/home";
import { HeroSection } from "~/components/Home/HeroSection";
import { ServicesSection } from "~/components/Home/ServicesSection";
import { Layout } from "~/components/Shared/Layout";
import { ScrollToTop } from "~/components/Shared/ScrollToTop";

export const meta: Route.MetaFunction = () => [
  { title: "Malitix - Custom Technology Solutions" },
  {
    name: "description",
    content:
      "Transform your business with custom development, mobile apps, and digital transformation services.",
  },
];

export default function Home(): JSX.Element {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <HeroSection />
        <ServicesSection />
      </Layout>
    </>
  );
}
