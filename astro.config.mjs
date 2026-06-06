// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://talonexe.github.io',
  base: '/apu-starter-pack',

  vite: {
    plugins: [tailwindcss()],
  },
});