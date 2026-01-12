import type { Route } from "../+types/root";

export interface MetaConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

export function buildTitle(parts: string[], siteName: string = "Malitix"): string {
  const core = parts.filter(Boolean).join(" · ");
  return core ? `${core} | ${siteName}` : siteName;
}

export function buildMeta(
  config: MetaConfig,
  siteName: string = "Malitix"
): Route.MetaDescriptors {
  const { title, description, image, url, type = "website" } = config;

  return [
    { title: buildTitle([title], siteName) },
    { name: "description", content: description },
    { name: "og:type", content: type },
    { name: "og:title", content: buildTitle([title], siteName) },
    { name: "og:description", content: description },
    ...(image ? [{ name: "og:image", content: image }] : []),
    ...(url ? [{ name: "og:url", content: url }] : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: buildTitle([title], siteName) },
    { name: "twitter:description", content: description },
    ...(image ? [{ name: "twitter:image", content: image }] : []),
  ];
}

export function buildStructuredData(
  data: Record<string, unknown>
): Route.MetaDescriptors {
  return [
    {
      name: "script",
      type: "application/ld+json",
      children: JSON.stringify(data),
    } as unknown as Record<string, unknown>,
  ];
}
