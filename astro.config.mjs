import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kimgihong.vercel.app',
  prefetch: true,
  integrations: [
    react(),
    mdx(),
    // Emits sitemap-index.xml with ko/en alternates (xhtml:link hreflang) per page.
    sitemap({
      i18n: {
        defaultLocale: 'ko',
        locales: { ko: 'ko-KR', en: 'en-US' },
      },
      filter: (page) => !page.endsWith('/404/'),
    }),
  ],
});
