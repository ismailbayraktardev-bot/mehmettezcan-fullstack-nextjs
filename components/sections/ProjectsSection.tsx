'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const categories = ['Tümü', 'Web Tasarım', 'E-Ticaret', 'SEO', 'Mobil Uygulama']

// Sample projects - will be fetched from Sanity CMS
const projects = [
  {
    id: 1,
    title: 'Modern E-Ticaret Platformu',
    category: 'E-Ticaret',
    description: 'Next.js ve Stripe entegrasyonu ile kurumsal e-ticaret çözümü',
    image: '/projects/project-1.jpg',
    url: '#',
    technologies: ['Next.js', 'Stripe', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Kurumsal Web Sitesi',
    category: 'Web Tasarım',
    description: 'React ve Framer Motion ile interaktif kurumsal web sitesi',
    image: '/projects/project-2.jpg',
    url: '#',
    technologies: ['React', 'Framer Motion', 'Sanity CMS'],
  },
  {
    id: 3,
    title: 'SEO Optimizasyon Projesi',
    category: 'SEO',
    description: 'Arama motoru sıralamasında %300 artış sağlayan SEO çalışması',
    image: '/projects/project-3.jpg',
    url: '#',
    technologies: ['Google Analytics', 'SEMrush', 'Content Strategy'],
  },
  {
    id: 4,
    title: 'Fitness Mobil Uygulaması',
    category: 'Mobil Uygulama',
    description: 'React Native ile cross-platform fitness uygulaması',
    image: '/projects/project-4.jpg',
    url: '#',
    technologies: ['React Native', 'Firebase', 'Push Notifications'],
  },
  {
    id: 5,
    title: 'SaaS Web Uygulaması',
    category: 'Web Tasarım',
    description: 'Multi-tenant SaaS platformu ve yönetim paneli',
    image: '/projects/project-5.jpg',
    url: '#',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe'],
  },
  {
    id: 6,
    title: 'Online Mağaza',
    category: 'E-Ticaret',
    description: 'WooCommerce tabanlı özelleştirilmiş e-ticaret sitesi',
    image: '/projects/project-6.jpg',
    url: '#',
    technologies: ['WordPress', 'WooCommerce', 'Custom Theme'],
  },
]

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')

  const filteredProjects = selectedCategory === 'Tümü'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="relative py-32 overflow-hidden bg-dark-secondary">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 glass rounded-full mb-6"
          >
            <span className="text-sm text-primary font-semibold uppercase tracking-wider">
              Portföy
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="text-white">Başarılı</span>{' '}
            <span className="gradient-text">Projelerimiz</span>
          </h2>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Müşterilerimiz için hayata geçirdiğimiz özel projelere göz atın
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-dark shadow-lg glow-primary'
                  : 'glass text-white hover:border-primary/30'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="group relative glass-strong rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-200"
              >
                {/* Project Image Placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60" />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center w-14 h-14 bg-primary rounded-full text-dark"
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">
                    {project.category}
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary-light transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <motion.a
                    href={project.url}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors group/link"
                  >
                    <span>Projeyi İncele</span>
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/projeler"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-dark rounded-xl font-semibold hover:bg-primary-light transition-all duration-300 shadow-lg glow-primary-strong"
          >
            <span>Tüm Projeleri Gör</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
