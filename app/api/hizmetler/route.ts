import { NextResponse } from 'next/server'
import { services } from '@/data/services'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')

    if (slug) {
      const service = services.find(s => s.slug === slug)
      return NextResponse.json({ service: service || null })
    }

    return NextResponse.json({
      services,
      count: services.length,
    })
  } catch (error) {
    console.error('Services API error:', error)
    return NextResponse.json(
      { error: 'Hizmetler yüklenirken bir hata oluştu.' },
      { status: 500 }
    )
  }
}
