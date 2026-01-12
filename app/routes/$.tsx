import { Meta } from "react-router";
import type { Route } from "../+types/root";

export const meta: Route.MetaFunction = () => [
  { title: "Legal Notice | Malitix" },
  { name: "description", content: "Legal Notice" },
];

export default function LegalNoticePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Legal Notice</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-4">Coming soon...</p>
    </div>
  );
}
