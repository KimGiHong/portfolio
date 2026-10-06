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

// English translations. Only translatable fields live here — order, period,
// featured, implementation, product and metric numbers stay in the Korean
// source so the two locales can never drift apart (merged in lib/projects.ts).
const projectsEnCollection = defineCollection({
  loader: glob({
    pattern: '*.mdx',
    base: './src/content/projects-en',
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    teaser: z.string(),
    role: z.string().optional(),
    stack: z.array(z.string()).optional(),
    highlights: z.array(z.string()),
    headlineMetric: z
      .object({
        label: z.string(),
        unit: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  projectsEn: projectsEnCollection,
};
