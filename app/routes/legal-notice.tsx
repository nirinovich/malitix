import { Meta } from "react-router";
import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import { ScrollToTop } from "~/components/Shared/ScrollToTop";

export const meta: Route.MetaFunction = () => [
  { title: "Legal Notice | Malitix" },
  { name: "description", content: "Legal Notice" },
];

export default function LegalNoticePage(): JSX.Element {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <div className="container mx-auto px-4 py-24 pt-32 max-w-3xl">
          <h1 className="text-5xl font-bold mb-8 text-slate-900 dark:text-white">
            Legal Notice
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Coming soon - Legal information and terms of service.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
