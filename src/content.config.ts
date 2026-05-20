import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const projectsCollection = defineCollection({
  loader: glob({
    pattern: '*.mdx',
    base: './src/content/projects',
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    teaser: z.string(),
    role: z.string(),
    period: z.string(),
    product: z.string(),
    implementation: z.enum(['hand-written', 'ai-paired', 'mixed']),
    stack: z.array(z.string()),
    highlights: z.array(z.string()),
    headlineMetric: z
      .object({
        label: z.string(),
        before: z.number(),
        after: z.number(),
        unit: z.string().optional(),
      })
      .optional(),
    links: z
      .object({
        live: z.url().optional(),
        repo: z.url().optional(),
        case: z.url().optional(),
      })
      .optional(),
    cover: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    order: z.number(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
};
