import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://chaosmedia.pl',
  vite: {
    plugins: [tailwindcss()],
  },
});
