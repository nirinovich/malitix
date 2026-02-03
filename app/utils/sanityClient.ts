import { createClient } from '@sanity/client';

export const SANITY_PROJECT_ID =
  import.meta.env.VITE_SANITY_PROJECT_ID ?? 'tuac272n';
export const SANITY_DATASET =
  import.meta.env.VITE_SANITY_DATASET ?? 'production';
export const SANITY_API_VERSION = '2025-11-01';

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: true,
  perspective: 'published',
  stega: false,
});
