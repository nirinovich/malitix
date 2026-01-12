export function buildTitle(parts: string[], siteName?: string) {
  const core = parts.filter(Boolean).join(' · ');
  return siteName ? `${core} | ${siteName}` : core;
}

export function metaDescription(content: string) {
  return [{ name: 'description', content }];
}
