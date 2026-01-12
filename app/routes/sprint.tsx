import { Meta } from "react-router";
import type { Route } from "../+types/root";

export const meta: Route.MetaFunction = () => [
  { title: "Sprint Commando | Malitix" },
  { name: "description", content: "Sprint Commando Services" },
];

export default function SprintPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Sprint Commando</h1>
      <p>Coming soon...</p>
    </div>
  );
}
