import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import { NotFound } from "~/components/Shared/NotFound";

export const meta: Route.MetaFunction = () => [
  { title: "Page introuvable | Malitix" },
  { name: "description", content: "La page que vous recherchez n'existe pas ou a été déplacée." },
  { name: "robots", content: "noindex, nofollow" },
];

export default function CatchAllPage() {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
}
