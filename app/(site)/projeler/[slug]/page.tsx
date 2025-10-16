'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import { getProjectBySlug } from '@/data/projects'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const project = getProjectBySlug(slug)

  useEffect(() => {
    if (!project) {
      router.push('/projeler')
    }
  }, [project, router])

  if (!project) {
    return null
  }

  return (
    <>
      <Header />

      {/* Hero Section - Clean & Minimal */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-secondary to-dark -z-10" />

        <div className="max-w-[1200px] mx-auto px-6">
          {/* Back Button */}
          <Link href="/projeler">
            <motion.div
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Tüm Projeler</span>
            </motion.div>
          </Link>

          <div className="text-center mb-12">
            {/* Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6"
            >
              <span className="text-sm text-amber-400 font-semibold uppercase tracking-wider">
                {project.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            >
              <span className="gradient-text">{project.title}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto"
            >
              {project.fullDescription}
            </motion.p>
          </div>

          {/* Metrics - Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-8 opacity-60"
          >
            {project.metrics.slice(0, 2).map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-amber-400/80 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-white/50">{metric.metric}</div>
              </div>
            ))}
            <div className="text-center">
              <div className="text-3xl font-bold text-white/60 mb-2">
                {project.year}
              </div>
              <div className="text-sm text-white/50">Yıl</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Scroll Section - Problem / Solution / Results */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Sticky Project Image */}
            <div className="lg:sticky lg:top-32 h-[600px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full h-full glass-strong rounded-3xl relative overflow-hidden group"
              >
                {/* Project Image */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <div className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full mb-4">
                    <span className="text-amber-400 font-semibold text-sm">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mt-2">{project.year}</p>
                </div>
              </motion.div>
            </div>

            {/* Right: Scrolling Text Sections */}
            <div className="space-y-32">
              {/* Problem Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="glass-strong rounded-3xl p-8 md:p-12"
              >
                <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                  <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                    01 / Problem
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-white">
                  Meydan Okuma
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {project.problem}
                </p>
              </motion.div>

              {/* Solution Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="glass-strong rounded-3xl p-8 md:p-12"
              >
                <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                  <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                    02 / Çözüm
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-white">
                  Yaklaşımımız
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  {project.solution}
                </p>

                {/* Technologies */}
                <div>
                  <h3 className="text-sm text-white/60 uppercase tracking-wider mb-4 font-semibold">
                    Teknolojiler
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-400 font-semibold text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Results Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="glass-strong rounded-3xl p-8 md:p-12"
              >
                <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                  <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                    03 / Sonuç
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-white">
                  Başarı Hikayesi
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  {project.results}
                </p>

                {/* All Metrics - Clean Layout */}
                <div className="space-y-4">
                  {project.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-amber-400">
                          {metric.value}
                        </div>
                        <div className="text-sm text-white/60">{metric.metric}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial */}
              {project.testimonial && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="glass-strong rounded-3xl p-8 md:p-12 border-l-4 border-l-amber-500"
                >
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-amber-400/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-text-secondary text-xl leading-relaxed italic mb-6">
                    "{project.testimonial}"
                  </p>
                  {project.client && (
                    <p className="text-amber-400 font-bold text-lg">
                      — {project.client}
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-secondary/50">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            <span className="text-white">Sizin İçin de</span>
            <br />
            <span className="gradient-text">Benzer Çözümler Üretelim</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            Projeniz için özel çözümler geliştirmek ve başarı hikayenizi yazmak için
            bizimle iletişime geçin
          </p>
          <Link href="/iletisim">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="px-12 py-4 bg-amber-500 text-black rounded-xl font-bold text-lg hover:bg-amber-400 transition-colors duration-200"
            >
              İletişime Geçin
            </motion.button>
          </Link>
        </div>
      </section>
    </>
  )
}
