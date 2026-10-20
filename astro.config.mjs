import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
// import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap()],
  site: 'https://elsumario.com',
  build: {
    format: 'file'
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  image: {
    domains: ['cdn.elsumario.com']
  }
});