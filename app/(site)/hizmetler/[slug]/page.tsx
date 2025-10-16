'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Header from '@/components/layout/Header'
import { getServiceBySlug } from '@/data/services'
import { CheckCircle, ArrowRight } from 'lucide-react'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import FAQSection from '@/components/sections/FAQSection'

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const service = getServiceBySlug(slug)

  useEffect(() => {
    if (!service) {
      router.push('/hizmetler')
    }
  }, [service, router])

  if (!service) {
    return null
  }

  const Icon = service.icon

  // Mock related projects data - Bu normalde Sanity'den çekilecek
  const relatedProjects = service.relatedProjects.map((slug) => ({
    title: slug,
    description: 'Proje açıklaması',
    category: 'Kategori',
    technologies: ['Tech 1', 'Tech 2'],
    href: `/projeler/${slug}`,
  }))

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-secondary to-dark -z-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-[1200px] mx-auto px-6">
          {/* Breadcrumbs would go here */}

          <div className="text-center mb-12">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500/20 to-amber-500/5 rounded-2xl mb-6">
              <Icon className="w-10 h-10 text-amber-400" />
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="gradient-text">{service.title}</span>
            </h1>

            {/* Summary */}
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-10">
              {service.summary}
            </p>

            {/* CTA Button */}
            <a
              href="/iletisim"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black rounded-xl font-bold text-lg hover:bg-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/30"
            >
              <span>Teklif Alın</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 xl:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="glass-strong rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-display font-bold mb-6">Hizmet Detayları</h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits & Technologies */}
      <section className="py-16 xl:py-20 bg-dark-secondary/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="glass-strong rounded-3xl p-8 md:p-10">
              <h2 className="text-3xl font-display font-bold mb-8">Avantajlar</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="glass-strong rounded-3xl p-8 md:p-10">
              <h2 className="text-3xl font-display font-bold mb-8">Kullanılan Teknolojiler</h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-400 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 xl:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">Özellikler</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              {service.title} hizmetimizin sunduğu temel özellikler
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="glass-strong rounded-2xl p-8 hover:border-amber-500/30 transition-colors duration-200"
              >
                <h3 className="text-2xl font-display font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {service.relatedProjects.length > 0 && (
        <section className="py-16 xl:py-32 bg-dark-secondary/50">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
                <span className="gradient-text">Referans Projeler</span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Bu hizmetle ilgili tamamladığımız projeler
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.map((project, index) => (
                <CaseStudyCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  technologies={project.technologies}
                  href={project.href}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SEO FAQ Section */}
      <FAQSection
        faqs={service.faqs}
        title="Sık Sorulan Sorular"
        description={`${service.title} hizmetimiz hakkında merak ettikleriniz`}
      />

      {/* Final CTA */}
      <section className="py-16 xl:py-32 bg-dark-secondary/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="glass-strong rounded-3xl p-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              <span className="text-white">Projeniz İçin</span>
              <br />
              <span className="gradient-text">Teklif Alın</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
              {service.title} hizmetimiz hakkında detaylı bilgi almak ve projeniz için
              özel teklif almak için bizimle iletişime geçin
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center gap-2 px-12 py-4 bg-amber-500 text-black rounded-xl font-bold text-lg hover:bg-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/30"
            >
              <span>İletişime Geçin</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
