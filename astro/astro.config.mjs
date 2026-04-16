import { defineConfig } from 'astro/config'
import node from '@astrojs/node'

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  site: 'https://riftmatch.io',
  compressHTML: true,
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
