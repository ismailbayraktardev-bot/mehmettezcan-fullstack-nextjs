'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { useContactModal } from '@/components/providers/ContactModalProvider'

interface StrategicCTAProps {
  variant?: 'primary' | 'minimal' | 'bold'
  title?: string
  description?: string
  buttonText?: string
}

export default function StrategicCTA({
  variant = 'primary',
  title = 'Projenizi Gerçeğe Dönüştürmeye Hazır mısınız?',
  description = 'Dijital dünyada fark yaratmak için bugün başlayalım. Ücretsiz danışmanlık için hemen iletişime geçin.',
  buttonText = 'Ücretsiz Görüşme',
}: StrategicCTAProps) {
  const { openModal } = useContactModal()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9])

  if (variant === 'minimal') {
    return (
      <motion.div
        ref={ref}
        style={{ opacity, scale }}
        className="relative py-16 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {title}
            </h3>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black rounded-xl font-bold hover:bg-amber-400 transition-all duration-300"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  if (variant === 'bold') {
    return (
      <motion.div
        ref={ref}
        style={{ opacity, scale }}
        className="relative py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-500/5" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative glass-strong rounded-3xl p-12 md:p-16 border border-amber-500/20"
          >
            <div className="relative z-10 text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {title}
              </h3>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  onClick={openModal}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-2 px-10 py-5 bg-amber-500 text-black rounded-xl font-bold text-lg hover:bg-amber-400 transition-all duration-300"
                >
                  <span>{buttonText}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.a
                  href="/projeler"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
                >
                  Projelerimizi İncele
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  // Default: primary variant
  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="relative py-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-10 md:p-14 text-center border border-white/10"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h3>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <motion.button
            onClick={openModal}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black rounded-xl font-bold hover:bg-amber-400 transition-all duration-300"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}
