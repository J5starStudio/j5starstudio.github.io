import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://j5starstudio.github.io',
  output: 'static',
  base: '/',
  build: {
    assets: '_assets'
  }
});
