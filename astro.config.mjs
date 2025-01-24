import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vuejsco.com',
  base: '/',
  integrations: [tailwind(), vue(), sitemap()],
});
