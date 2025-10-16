import { NextResponse } from 'next/server'
import { siteConfig } from '@/site.config'

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${siteConfig.url}/sitemap.xml

# Disallow admin and API routes
Disallow: /admin
Disallow: /api

# Crawl Delay
Crawl-delay: 1
`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
