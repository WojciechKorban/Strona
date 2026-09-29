import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  output: 'static',
  site: 'https://wojciechkorban.github.io',
  base: isGitHubPages ? '/Strona' : '/',
  trailingSlash: 'never'
});
