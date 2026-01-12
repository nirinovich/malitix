import { Meta } from "react-router";
import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import { ScrollToTop } from "~/components/Shared/ScrollToTop";

export const meta: Route.MetaFunction = () => [
  { title: "Privacy Policy | Malitix" },
  { name: "description", content: "Privacy Policy" },
];

export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <div className="container mx-auto px-4 py-24 pt-32 max-w-3xl">
          <h1 className="text-5xl font-bold mb-8 text-slate-900 dark:text-white">
            Privacy Policy
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Coming soon - Our privacy policy and data protection information.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
