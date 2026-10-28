import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import tina from '@tinacms/astro/integration';
import { tinaAdminDevRedirect } from '@tinacms/astro/vite';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap(), tina(), react()],
  site: 'https://elsumario.com',
  build: {
    format: 'file'
  },
  image: {
    domains: ['cdn.elsumario.com']
  },
  vite: {
    plugins: [tinaAdminDevRedirect()]
  }
});