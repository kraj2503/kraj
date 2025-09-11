import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://yourdomain.com";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    <url>
      <loc>${baseUrl}/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
      <image:image>
        <image:loc>${baseUrl}/kshitiz-raj.png</image:loc>
        <image:title>Kshitiz Raj - Software Engineer and Full-Stack Developer</image:title>
        <image:caption>Official portfolio photo of Kshitiz Raj</image:caption>
      </image:image>
    </url>
    <url>
      <loc>${baseUrl}/about</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${baseUrl}/projects</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${baseUrl}/contact</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>${baseUrl}/blog</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.6</priority>
    </url>
  </urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
