import type { Config } from "@react-router/dev/config";

const SANITY_PROJECT_ID =
  process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || "tuac272n";
const SANITY_DATASET =
  process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || "production";
const SANITY_API_VERSION = "2025-11-01";

async function fetchBlogSlugs(): Promise<string[]> {
  const query = encodeURIComponent(
    '*[_type == "post" && defined(slug.current)].slug.current'
  );
  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${query}`;

  const headers: Record<string, string> = {};
  const token = process.env.SANITY_READ_TOKEN || process.env.VITE_SANITY_READ_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, { headers });
  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as { result?: string[] };
  return Array.isArray(data.result) ? data.result.filter(Boolean) : [];
}

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  async prerender() {
    const slugs = await fetchBlogSlugs();
    return [
      "/",
      "/custom-dev",
      "/mobile-app",
      "/si-refonte",
      "/sprint",
      "/legal-notice",
      "/privacy-policy",
      "/blog",
      ...slugs.map((slug) => `/blog/${slug}`),
    ];
  },
} satisfies Config;
