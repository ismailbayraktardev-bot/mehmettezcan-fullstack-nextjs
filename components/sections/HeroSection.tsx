'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useContactModal } from '@/components/providers/ContactModalProvider'
import {
  SiFigma,
  SiNextdotjs,
  SiShopify,
  SiMeta,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiStripe,
  SiWordpress,
  SiGooglecloud,
  SiGoogleanalytics,
  SiReact,
  SiFramer
} from 'react-icons/si'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
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

export default function HeroSection() {
  const { openModal } = useContactModal()

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center" style={{ paddingTop: 'clamp(96px, 15vh, 220px)' }}>
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-secondary to-dark -z-10" />

      {/* Cam Panel Container - Minimal & Clean */}
      <div className="absolute inset-2 rounded-3xl lg:rounded-[3rem] overflow-hidden border border-black/10 dark:border-white/5">
        {/* Video Background - Clean & Natural */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-35 dark:invert -scale-x-100"
        >
          <source src="/hero-light.mp4" type="video/mp4" />
        </video>

        {/* Minimal Gradient for Readability Only */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Hero Content - Centered with Breathing Space */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center justify-center max-w-5xl mx-auto px-6 text-center"
      >
        {/* Main Heading - Smaller, Cleaner Font */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]"
          style={{ fontSize: 'clamp(2rem, 6vw, 6rem)' }}
        >
          Hello World
          <span className="block text-amber-500 mt-2">🚀 İlk Deploy Başarılı!</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Modern web teknolojileri, yaratıcı tasarım ve güçlü stratejilerle
          markanızı dijital dünyada zirveye taşıyoruz
        </motion.p>

        {/* CTA Buttons - Minimal & Clean */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={openModal}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(245, 158, 11, 0.15)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="group flex items-center gap-2 px-8 py-4 bg-amber-500 text-black rounded-xl font-bold hover:bg-amber-400 transition-colors duration-200"
          >
            <span>Proje Başlat</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>

          <motion.a
            href="/projeler"
            whileHover={{ scale: 1.02, borderColor: 'rgba(245, 158, 11, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="px-8 py-4 text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/5 backdrop-blur-sm transition-all duration-200"
          >
            Projelerimizi İncele
          </motion.a>
        </motion.div>

        {/* Premium Tech Stack Marquee - Integrated into Hero */}
        <motion.div
          variants={itemVariants}
          className="w-full overflow-hidden mt-8"
        >
          <p className="text-xs text-white/50 uppercase tracking-[0.2em] mb-8 font-medium text-center">
            Kullandığımız Teknolojiler
          </p>

          {/* Infinite Marquee - Seamless Loop */}
          <div className="relative w-full">
            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

            <div className="flex gap-16 animate-marquee-slow whitespace-nowrap">
              {/* First Set */}
              <div className="flex items-center gap-16 shrink-0">
                <SiFigma className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" title="Figma" />
                <SiNextdotjs className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" title="Next.js" />
                <SiReact className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" title="React" />
                <SiTypescript className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" title="TypeScript" />
                <SiTailwindcss className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" title="Tailwind CSS" />
                <SiNodedotjs className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" title="Node.js" />
                <SiPostgresql className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" title="PostgreSQL" />
                <SiShopify className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" title="Shopify" />
                <SiWordpress className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" title="WordPress" />
                <SiStripe className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" title="Stripe" />
                <SiGooglecloud className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" title="Google Cloud" />
                <SiGoogleanalytics className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" title="Google Analytics" />
                <SiMeta className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" title="Meta" />
                <SiFramer className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" title="Framer Motion" />
              </div>

              {/* Duplicate Set for Seamless Loop */}
              <div className="flex items-center gap-16 shrink-0" aria-hidden="true">
                <SiFigma className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" />
                <SiNextdotjs className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" />
                <SiReact className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" />
                <SiTypescript className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" />
                <SiTailwindcss className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" />
                <SiNodedotjs className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" />
                <SiPostgresql className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" />
                <SiShopify className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" />
                <SiWordpress className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" />
                <SiStripe className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" />
                <SiGooglecloud className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" />
                <SiGoogleanalytics className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" />
                <SiMeta className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" />
                <SiFramer className="w-10 h-10 text-white/40 hover:text-white/90 transition-all duration-500 hover:scale-110" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
