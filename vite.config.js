import { defineConfig } from 'vite';
import { resolve } from 'path';

const pageFiles = [
  'src/pages/index.html',
  'src/pages/about-story.html',
  'src/pages/about-approach.html',
  'src/pages/about-team.html',
  'src/pages/about-partners.html',
  'src/pages/programmes-overview.html',
  'src/pages/programmes-general-business.html',
  'src/pages/programmes-eap.html',
  'src/pages/programmes-skills-exams.html',
  'src/pages/impact-overview.html',
  'src/pages/impact-stories.html',
  'src/pages/stories.html',
  'src/pages/join-students.html',
  'src/pages/join-volunteers.html',
  'src/pages/donate.html',
  'src/pages/faq.html',
  'src/pages/financials.html'
];

const input = Object.fromEntries(
  pageFiles.map((page) => {
    const name = page
      .replace('src/pages/', '')
      .replace('.html', '');
    return [name === 'index' ? 'index' : name, resolve(__dirname, page)];
  })
);

export default defineConfig({
  base: './',
  publicDir: 'public',
  resolve: {
    alias: {
      '@material/web/theme/app-theme.js': resolve(__dirname, 'src/theme/app-theme.js')
    }
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input
    }
  }
});
