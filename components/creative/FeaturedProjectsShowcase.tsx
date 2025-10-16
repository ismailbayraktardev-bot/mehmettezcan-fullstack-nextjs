'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { Project } from '@/data/projects'
import { ArrowRight } from 'lucide-react'

interface FeaturedProjectsShowcaseProps {
  projects: Project[]
}

export default function FeaturedProjectsShowcase({ projects }: FeaturedProjectsShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Sadece featured projeleri filtrele
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
      }}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Öne Çıkan <span className="text-amber-500">Projelerimiz</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Gerçek sonuçlar, gerçek başarı hikayeleri. Her proje, müşterilerimizin dijital dönüşüm yolculuğunda bir dönüm noktası.
          </p>
        </motion.div>
      </div>

      {/* Featured Projects Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* View All CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mt-20 text-center"
      >
        <Link
          href="/projeler"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
        >
          Tüm Projeleri Görüntüle
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className="group relative"
    >
      <Link href={`/projeler/${project.slug}`} className="block">
        {/* Card Container */}
        <div
          className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
          style={{
            background: `linear-gradient(135deg, ${project.color}15 0%, transparent 100%)`,
          }}
        >
          {/* Image Section */}
          <div className="relative h-80 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay Gradient */}
              <div
                className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(180deg, transparent 0%, ${project.color}40 100%)`,
                }}
              />
            </motion.div>

            {/* Category Badge */}
            <div className="absolute top-6 left-6 z-10">
              <span
                className="px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md"
                style={{
                  background: `${project.color}30`,
                  color: project.color,
                  border: `1px solid ${project.color}50`,
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Year Badge */}
            <div className="absolute top-6 right-6 z-10">
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-black/50 backdrop-blur-md text-white/80 border border-white/10">
                {project.year}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Title */}
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-white/60 text-lg mb-6 line-clamp-2">
              {project.fullDescription}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {project.metrics.slice(0, 2).map((metric, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: project.color }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-sm text-white/50">{metric.metric}</div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-white/60 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Testimonial */}
            {project.testimonial && (
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-white/70 text-sm italic mb-2">
                  "{project.testimonial}"
                </p>
                {project.client && (
                  <p className="text-white/50 text-xs">— {project.client}</p>
                )}
              </div>
            )}

            {/* CTA */}
            <motion.div
              className="mt-6 flex items-center gap-2 text-amber-500 font-semibold group-hover:gap-4 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              Detayları İncele
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
