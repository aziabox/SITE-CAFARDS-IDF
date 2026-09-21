import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Catégories du blog (une page d'archive par catégorie). */
export const categories = {
  cafards: 'Cafards',
  blattes: 'Blattes',
  identification: 'Identification',
  prevention: 'Prévention',
  traitement: 'Traitement',
  copropriete: 'Copropriété',
  restaurant: 'Restaurant',
  habitation: 'Habitation',
} as const;

export type CategoryKey = keyof typeof categories;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** Titre de la balise <title> si différent du H1. */
    metaTitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(['cafards', 'blattes', 'identification', 'prevention', 'traitement', 'copropriete', 'restaurant', 'habitation']),
    /** Réponse directe placée en tête d'article (utile aux moteurs génératifs). */
    answer: z.string(),
    keywords: z.array(z.string()).default([]),
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
