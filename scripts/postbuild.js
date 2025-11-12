import { readdir, readFile, writeFile, rm } from 'fs/promises';
import path from 'path';

const docsDir = path.resolve('docs');
const pagesDir = path.join(docsDir, 'src', 'pages');

async function flattenPages() {
  try {
    const files = await readdir(pagesDir);
    await Promise.all(
      files
        .filter((file) => file.endsWith('.html'))
        .map(async (file) => {
          const filePath = path.join(pagesDir, file);
          const outputPath = path.join(docsDir, file);
          let content = await readFile(filePath, 'utf8');
          content = content.replaceAll('../../assets/', './assets/');
          await writeFile(outputPath, content);
        })
    );
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn('No prebuilt pages found to flatten. Did the Vite build succeed?');
      return;
    }
    throw error;
  }
}

async function cleanupSourceDir() {
  await rm(path.join(docsDir, 'src'), { recursive: true, force: true });
}

try {
  await flattenPages();
  await cleanupSourceDir();
} catch (error) {
  console.error('Failed to finalize docs output:', error);
  process.exitCode = 1;
}
