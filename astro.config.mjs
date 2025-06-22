// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import tunnel from 'astro-tunnel';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tunnel()],

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  adapter: vercel()
});