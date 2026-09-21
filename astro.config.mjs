import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * L'URL canonique du site. A remplacer par le domaine reel avant mise en ligne
 * (ou a definir via la variable d'environnement SITE_URL au moment du build).
 */
const SITE_URL = process.env.SITE_URL ?? 'https://www.blattis.fr';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: false },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/merci') && !page.includes('/404'),
      changefreq: 'monthly',
      lastmod: new Date(),
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname.replace(/\/$/, '') || '/';
        if (path === '/') item.priority = 1.0;
        else if (['/cafards', '/traitement-cafards', '/zones-intervention'].includes(path)) item.priority = 0.9;
        else if (path.startsWith('/blog/')) item.priority = 0.5;
        else item.priority = 0.7;
        return item;
      },
    }),
  ],
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  compressHTML: true,
});
