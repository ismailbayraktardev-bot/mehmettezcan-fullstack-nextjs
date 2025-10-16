import { NextResponse } from 'next/server'
import { projects } from '@/data/projects'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const slug = searchParams.get('slug')

    let filteredProjects = projects

    if (slug) {
      const project = projects.find(p => p.slug === slug)
      return NextResponse.json({ project: project || null })
    }

    if (category) {
      filteredProjects = projects.filter(p => p.category.toLowerCase() === category.toLowerCase())
    }

    return NextResponse.json({
      projects: filteredProjects,
      count: filteredProjects.length,
    })
  } catch (error) {
    console.error('Projects API error:', error)
    return NextResponse.json(
      { error: 'Projeler yüklenirken bir hata oluştu.' },
      { status: 500 }
    )
  }
}
