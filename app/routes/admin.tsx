import type { Route } from "./+types/admin";
import { lazy, Suspense } from "react";

const SanityStudio = lazy(() => import("~/components/Admin/SanityStudio"));

export const meta: Route.MetaFunction = () => [
  { title: "Malitix Admin" },
];

export default function AdminStudio() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-lg">Loading Studio…</div>}>
      <SanityStudio />
    </Suspense>
  );
}
