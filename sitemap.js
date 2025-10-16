// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const BASE_URL = 'https://enyard.in';

// ✅ List all your site routes
const routes = [
  '/',
  '/about',
  '/career'
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream('./dist/sitemap.xml');

  routes.forEach((route) => {
    sitemap.write({ url: route, changefreq: 'weekly', priority: route === '/' ? 1.0 : 0.8 });
  });

  sitemap.end();
  const data = await streamToPromise(sitemap);
  writeStream.write(data.toString());
  writeStream.end();

  console.log('Sitemap generated at dist/sitemap.xml');
}

generateSitemap().catch(console.error);
