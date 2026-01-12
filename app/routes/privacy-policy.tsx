import { Meta } from "react-router";
import type { Route } from "../+types/root";

export const meta: Route.MetaFunction = () => [
  { title: "Privacy Policy | Malitix" },
  { name: "description", content: "Privacy Policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-4">Coming soon...</p>
    </div>
  );
}
