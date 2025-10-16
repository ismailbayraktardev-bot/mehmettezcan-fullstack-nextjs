'use client'

import { motion } from 'framer-motion'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

interface BreadcrumbItem {
  label: string
  href: string
}

interface PageHeroProps {
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  backgroundImage?: string
  backgroundVideo?: string
  variant?: 'default' | 'minimal' | 'gradient'
  className?: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
}

export default function PageHero({
  title,
  description,
  breadcrumbs,
  backgroundImage,
  backgroundVideo,
  variant = 'default',
  className = '',
}: PageHeroProps) {
  return (
    <section className={`relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Layer */}
      <div className="absolute inset-2 rounded-3xl lg:rounded-[3rem] overflow-hidden border border-black/10 dark:border-white/5">
        {/* Video Background */}
        {backgroundVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-35 dark:invert -scale-x-100"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        )}

        {/* Image Background */}
        {backgroundImage && !backgroundVideo && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50 dark:opacity-35"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}

        {/* Gradient Background (fallback) */}
        {!backgroundVideo && !backgroundImage && variant === 'gradient' && (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-amber-600/10" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 dark:from-black/80 dark:via-black/60 dark:to-black/90" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-32"
      >
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.div variants={itemVariants} className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]"
        >
          {title}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}
