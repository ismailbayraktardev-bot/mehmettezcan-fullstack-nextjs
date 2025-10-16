'use client'

import { motion } from 'framer-motion'
import { Target, Zap, Shield, HeartHandshake } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Hedef Odaklı Çözümler',
    description: 'Her projeyi işinizin hedeflerine uygun olarak özelleştiriyor, ölçülebilir sonuçlar sunuyoruz.',
  },
  {
    icon: Zap,
    title: 'Hızlı & Performanslı',
    description: 'Modern teknolojilerle yüksek performanslı, hızlı yüklenen dijital çözümler geliştiriyoruz.',
  },
  {
    icon: Shield,
    title: 'Güvenilir Ortaklık',
    description: 'Projelerinizde baştan sona şeffaf iletişim ve profesyonel destek sağlıyoruz.',
  },
  {
    icon: HeartHandshake,
    title: 'Müşteri Memnuniyeti',
    description: 'Başarınız bizim başarımız. Uzun vadeli iş ortaklıkları kurmayı hedefliyoruz.',
  },
]

export default function WhyUsSection() {
  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary via-dark to-dark-secondary -z-10" />

      {/* Minimal Blob - Very Subtle */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Sticky Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6"
          >
            <span className="text-sm text-amber-400 font-semibold uppercase tracking-wider">
              Neden Biz?
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="text-white">Fark Yaratan</span>
            <br />
            <span className="gradient-text">Dijital Çözümler</span>
          </h2>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Projenizin başarısı için modern teknolojiler ve yaratıcı yaklaşımlarla yanınızdayız
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                }}
                className="group relative"
              >
                {/* Card - Minimal Hover */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="relative glass-strong rounded-3xl p-8 lg:p-10 hover:border-amber-500/20 transition-all duration-200 h-full"
                >
                  {/* Minimal Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-amber-500/0 rounded-3xl transition-all duration-300 pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon - Minimal */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="w-16 h-16 bg-gradient-to-br from-amber-500/10 to-amber-500/5 rounded-2xl flex items-center justify-center mb-6 group-hover:from-amber-500/15 transition-all duration-200"
                    >
                      <Icon className="w-8 h-8 text-amber-400" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                      {reason.title}
                    </h3>

                    <p className="text-text-secondary leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
