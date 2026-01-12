import { Meta } from "react-router";
import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import { ScrollToTop } from "~/components/Shared/ScrollToTop";

export const meta: Route.MetaFunction = () => [
  { title: "Mobile App Development | Malitix" },
  { name: "description", content: "Mobile App Development Services" },
];

export default function MobileAppPage(): JSX.Element {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <div className="container mx-auto px-4 py-24 pt-32">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Mobile App Development
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Coming soon - iOS, Android, and cross-platform solutions.
          </p>
        </div>
      </Layout>
    </>
  );
}
