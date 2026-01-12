import { Meta } from "react-router";
import type { Route } from "../+types/root";

export const meta: Route.MetaFunction = () => [
  { title: "SI Refonte | Malitix" },
  { name: "description", content: "SI Refonte Services" },
];

export default function SIRefontePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">SI Refonte</h1>
      <p>Coming soon...</p>
    </div>
  );
}
