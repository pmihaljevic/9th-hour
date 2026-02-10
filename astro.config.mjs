import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pmihaljevic.github.io',
  base: '/9th-hour',
  vite: { plugins: [tailwindcss()] },
});
