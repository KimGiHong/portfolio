import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://portfolio-kimgihongs-projects.vercel.app',
  prefetch: true,
  integrations: [react(), mdx()],
});
