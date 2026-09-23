// @ts-check
import { defineConfig } from 'astro/config';

// Served as a GitHub Pages project site: https://quackbyte.dev/clicktype/
export default defineConfig({
  site: 'https://quackbyte.dev',
  base: '/clicktype',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
});
