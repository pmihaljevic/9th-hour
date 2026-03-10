import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://9th-hour.studio',
  vite: { plugins: [tailwindcss()] },
});
