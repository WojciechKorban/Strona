import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://korban.com.pl',
  base: '/',
  trailingSlash: 'never'
});
