'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface CaseStudyCardProps {
  title: string
  description: string
  category: string
  technologies: string[]
  results?: {
    metric: string
    value: string
  }[]
  image?: string
  href: string
  testimonial?: string
  client?: string
}

export default function CaseStudyCard({
  title,
  description,
  category,
  technologies,
  results,
  image,
  href,
  testimonial,
  client,
}: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="group relative bg-black/20 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-amber-500/20 transition-colors duration-200"
    >
      {/* Image/Visual */}
      {image ? (
        <div className="relative aspect-video overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
      ) : (
        <div className="relative aspect-video bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-amber-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-8">
        {/* Category */}
        <div className="text-sm text-amber-500 font-semibold uppercase tracking-wider mb-3">
          {category}
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/70 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-white/5 text-white/60 rounded-full border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Results - Minimal & Subtle */}
        {results && results.length > 0 && results.slice(0, 2).map((result, index) => (
          <div key={index} className="mb-4 opacity-60">
            <div className="text-lg font-semibold text-amber-400/80 mb-1">
              {result.value}
            </div>
            <div className="text-xs text-white/50">{result.metric}</div>
          </div>
        ))}

        {/* Testimonial */}
        {testimonial && (
          <div className="mb-6 p-4 bg-white/5 rounded-2xl border border-white/10 border-l-4 border-l-amber-500">
            <p className="text-sm text-white/70 italic mb-2">"{testimonial}"</p>
            {client && (
              <p className="text-xs text-amber-400 font-semibold">— {client}</p>
            )}
          </div>
        )}

        {/* CTA */}
        <Link href={href}>
          <motion.div
            whileHover={{ gap: '12px' }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-semibold transition-colors duration-200"
          >
            <span>Case Study İncele</span>
            <ArrowRight size={18} />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  )
}
