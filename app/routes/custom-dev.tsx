import { Meta } from "react-router";
import type { Route } from "../+types/root";

export const meta: Route.MetaFunction = () => [
  { title: "Custom Development | Malitix" },
  { name: "description", content: "Custom Development Services" },
];

export default function CustomDevPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Custom Development</h1>
      <p>Coming soon...</p>
    </div>
  );
}
