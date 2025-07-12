import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://kimik2.ai/sitemap.xml

# Crawl-delay (optional, be respectful)
Crawl-delay: 1

# Disallow sensitive areas
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /
Allow: /about
Allow: /docs
Allow: /pricing
Allow: /blog
Allow: /contact`;

  return new NextResponse(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}