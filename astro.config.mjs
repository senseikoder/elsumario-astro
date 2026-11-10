import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import tina from '@tinacms/astro/integration';
import { tinaAdminDevRedirect } from '@tinacms/astro/vite';
import react from '@astrojs/react';
import pagefind from 'astro-pagefind';

export default defineConfig({
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap(), tina(), react(), pagefind()],
  site: 'https://elsumario-astro.onrender.com/',
  build: {
    format: 'directory'
  },
  image: {
    domains: ['cdn.elsumario.com']
  },
  vite: {
    plugins: [tinaAdminDevRedirect()]
  },
  trailingSlash: 'always',

});