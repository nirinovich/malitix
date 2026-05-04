import type { Route } from "./+types/admin";
import { lazy, Suspense, useEffect, useState } from "react";

// Sanity Studio is a client-only SPA — it requires window/document
// We guard it with a client-side check to prevent SSR crashes
const SanityStudio = lazy(() => import("~/components/Admin/SanityStudio"));

export const meta: Route.MetaFunction = () => [
  { title: "Malitix Admin" },
  { name: "robots", content: "noindex, nofollow" },
];

// Tell React Router this route should not be prerendered or SSR'd
export const handle = { hydrate: true };

export function headers() {
  return {
    "Cache-Control": "no-store",
  };
}

export default function AdminStudio() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg">
        Loading Studio…
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen text-lg">Loading Studio…</div>
      }
    >
      <SanityStudio />
    </Suspense>
  );
}
