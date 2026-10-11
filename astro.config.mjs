import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://khandal.tech',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    })
  ],
  redirects: {
    '/sitemap.xml': '/sitemap-index.xml',
  },
  devToolbar: { enabled: false },
});
