import { Meta } from "react-router";
import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import { ScrollToTop } from "~/components/Shared/ScrollToTop";

export const meta: Route.MetaFunction = () => [
  { title: "Custom Development | Malitix" },
  { name: "description", content: "Custom Development Services" },
];

export default function CustomDevPage(): JSX.Element {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <div className="container mx-auto px-4 py-24 pt-32">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Custom Development
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Coming soon - Tailored solutions for your business needs.
          </p>
        </div>
      </Layout>
    </>
  );
}
