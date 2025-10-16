import Header from '@/components/layout/Header'
import PageHero from '@/components/sections/PageHero'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import { projects } from '@/data/projects'

export const metadata = {
  title: 'Projeler - Mehmet Tezcan Dijital Ajans',
  description: 'Tamamladığımız başarılı projeler ve referanslar',
}

const mappedProjects = projects.map(project => ({
  title: project.title,
  category: project.category,
  description: project.description,
  technologies: project.technologies,
  results: project.metrics,
  testimonial: project.testimonial,
  client: project.client,
  href: `/projeler/${project.slug}`,
}))

export default function ProjelerPage() {
  return (
    <>
      <Header />
      <PageHero
        title="Projelerimiz"
        description="Başarılı projelerimize göz atın ve dijital dönüşüm hikayelerimizi keşfedin"
        breadcrumbs={[{ label: 'Projeler', href: '/projeler' }]}
        variant="gradient"
      />
      <main className="py-16 xl:py-32">
        <div className="max-w-[1400px] mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">
            {mappedProjects.map((project, index) => (
              <CaseStudyCard
                key={index}
                title={project.title}
                description={project.description}
                category={project.category}
                technologies={project.technologies}
                results={project.results}
                href={project.href}
                testimonial={project.testimonial}
                client={project.client}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
