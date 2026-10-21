import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// import node from '@astrojs/node';

export default defineConfig({
  output: 'static',
  // adapter: node({ mode: 'standalone' }),
  integrations: [sitemap()],
  site: 'https://elsumario.com',
  build: {
    format: 'file'
  },
  image: {
    domains: ['cdn.elsumario.com']
  }
});