import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro'
// import node from '@astrojs/node';
// import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  // adapter: node(),
  integrations: [mdx(), sitemap(), react(), markdoc(), keystatic()],
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