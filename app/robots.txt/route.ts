import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://mateusmarquesds.com/sitemap.xml`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
