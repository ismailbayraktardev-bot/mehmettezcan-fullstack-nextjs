import { NextResponse } from 'next/server'
import { siteConfig } from '@/site.config'
import { projects } from '@/data/projects'
import { services } from '@/data/services'

export async function GET() {
  const baseUrl = siteConfig.url
  const currentDate = new Date().toISOString().split('T')[0]

  const allPages = [
    { url: '', priority: '1.0', changefreq: 'daily', lastmod: currentDate },
    { url: '/hizmetler', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
    { url: '/projeler', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
    { url: '/blog', priority: '0.8', changefreq: 'daily', lastmod: currentDate },
    { url: '/hakkimizda', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/iletisim', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
    { url: '/kvkk', priority: '0.3', changefreq: 'yearly', lastmod: currentDate },
    ...services.map(s => ({ url: `/hizmetler/${s.slug}`, priority: '0.8', changefreq: 'weekly', lastmod: currentDate })),
    ...projects.map(p => ({ url: `/projeler/${p.slug}`, priority: '0.7', changefreq: 'monthly', lastmod: currentDate })),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('
')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
