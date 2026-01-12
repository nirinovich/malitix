import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import { NotFound } from "~/components/Shared/NotFound";

export const meta: Route.MetaFunction = () => [
  { title: "Page Not Found | Malitix" },
  { name: "description", content: "The page you're looking for doesn't exist" },
];

export default function CatchAllPage(): JSX.Element {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
}
