import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// import node from '@astrojs/node';
// import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  // adapter: vercel(),
  integrations: [
    mdx(),
    sitemap()
  ],
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