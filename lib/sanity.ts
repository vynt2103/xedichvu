/**
 * Sanity Client Setup (Phase 2)
 * 
 * This file will be used to connect to Sanity CMS in Phase 2.
 * Currently disabled - using mock data from lib/mock.ts
 */

import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Optional, only if you need write access
});

// Phase 2: Uncomment and implement when ready
/*
export async function getOperatorBySlug(slug: string) {
  return sanityClient.fetch(
    operatorBySlugQuery,
    { slug }
  );
}

export async function getAllOperatorSlugs() {
  return sanityClient.fetch(allOperatorSlugsQuery);
}
*/

// Export mock data helpers for now
export { OPERATORS } from './mock';
export type { Operator, Vehicle, Service, ContactLinks } from './types';

