import { Meta } from "react-router";
import type { Route } from "../+types/root";

export const meta: Route.MetaFunction = () => [
  { title: "Mobile App Development | Malitix" },
  { name: "description", content: "Mobile App Development Services" },
];

export default function MobileAppPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Mobile App Development</h1>
      <p>Coming soon...</p>
    </div>
  );
}
