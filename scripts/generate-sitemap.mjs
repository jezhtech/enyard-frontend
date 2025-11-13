import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

import { SITEMAP_ROUTES, BASE_URL } from "../src/seo/seo.config.mjs";

// Fix Windows __dirname issue
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Final output location → dist/sitemap.xml
const distDir = resolve(__dirname, "../dist");
const outputPath = resolve(distDir, "sitemap.xml");

// Ensure dist folder exists (important!)
mkdirSync(distDir, { recursive: true });

// Create sitemap stream
const sitemap = new SitemapStream({
	hostname: BASE_URL,
});

// Add each route
SITEMAP_ROUTES.forEach((route) => {
	sitemap.write({
		url: route.path,
		changefreq: "weekly",
		priority: route.priority,
	});
});

sitemap.end();

// Write sitemap.xml
streamToPromise(sitemap).then((xml) => {
	createWriteStream(outputPath).write(xml.toString());
	console.log("✅ Sitemap generated at:", outputPath);
});
