'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, Search, ShoppingCart, Palette, Share2, Smartphone, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Tasarım & Geliştirme',
    description: 'Modern, hızlı ve SEO uyumlu web siteleri ile dijital varlığınızı güçlendirin.',
    features: ['Responsive Tasarım', 'Next.js & React', 'Performans Odaklı'],
    href: '/hizmetler/web-tasarim',
  },
  {
    icon: Search,
    title: 'SEO & Dijital Pazarlama',
    description: 'Arama motorlarında üst sıralarda yer alın ve hedef kitlenize ulaşın.',
    features: ['Anahtar Kelime Analizi', 'İçerik Optimizasyonu', 'Google Analytics'],
    href: '/hizmetler/seo-dijital-pazarlama',
  },
  {
    icon: ShoppingCart,
    title: 'E-Ticaret Çözümleri',
    description: 'Satışlarınızı artıracak, kullanıcı dostu online mağazalar oluşturun.',
    features: ['Ödeme Entegrasyonu', 'Stok Yönetimi', 'Kargo Entegrasyonu'],
    href: '/hizmetler/e-ticaret',
  },
  {
    icon: Palette,
    title: 'Grafik Tasarım',
    description: 'Markanızı yansıtan özgün ve profesyonel tasarımlar ile fark yaratın.',
    features: ['Logo Tasarım', 'Kurumsal Kimlik', 'Sosyal Medya Görselleri'],
    href: '/hizmetler/grafik-tasarim',
  },
  {
    icon: Share2,
    title: 'Sosyal Medya Yönetimi',
    description: 'Sosyal medyada etkili varlık oluşturun ve takipçi kitlenizi büyütün.',
    features: ['İçerik Planlama', 'Community Yönetimi', 'Reklam Kampanyaları'],
    href: '/hizmetler/sosyal-medya',
  },
  {
    icon: Smartphone,
    title: 'Mobil Uygulama',
    description: 'iOS ve Android platformlarında kullanıcılarınıza ulaşın.',
    features: ['Native & Cross-Platform', 'UI/UX Tasarım', 'App Store Optimizasyonu'],
    href: '/hizmetler/mobil-uygulama',
  },
]

export default function ServicesSection() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ minHeight: '95vh' }}>
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-secondary to-dark -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header - Minimal & Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 glass rounded-full mb-6"
          >
            <span className="text-sm text-primary font-semibold uppercase tracking-wider">
              Hizmetlerimiz
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="text-white">Dijital Çözümler</span>
            <br />
            <span className="gradient-text">Tek Çatı Altında</span>
          </h2>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Modern teknolojiler ve yaratıcı yaklaşımlarla markanızı dijital dünyada öne çıkarıyoruz
          </p>
        </motion.div>

        {/* Creative Feature Blocks - NOT Grid Layout */}
        <div className="space-y-28 lg:space-y-32">
          {/* Block 1 - Large Feature Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center"
          >
            <Link href={services[0].href}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="group relative glass-strong rounded-3xl p-10 lg:p-14 hover:border-primary/20 transition-colors duration-200"
              >
                {/* Minimal Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/8 group-hover:to-primary/0 rounded-3xl transition-all duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:from-primary/15 transition-colors duration-200">
                    <Code className="w-10 h-10 text-primary" />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-5 group-hover:text-primary-light transition-colors duration-300">
                    {services[0].title}
                  </h3>

                  <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                    {services[0].description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {services[0].features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-text-muted">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    <span>Keşfet</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Right Small Block */}
            <Link href={services[1].href}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative glass-strong rounded-3xl p-8 lg:p-10 hover:border-primary/20 transition-colors duration-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 group-hover:from-primary/8 rounded-3xl transition-all duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-6">
                    <Search className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary-light transition-colors">
                    {services[1].title}
                  </h3>

                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {services[1].description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Detaylar</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Block 2 - Two Column Equal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            <Link href={services[2].href}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="group relative glass-strong rounded-3xl p-8 lg:p-10 hover:border-primary/20 transition-colors duration-200 h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 group-hover:from-primary/8 rounded-3xl transition-all duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-6">
                    <ShoppingCart className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4 group-hover:text-primary-light transition-colors">
                    {services[2].title}
                  </h3>

                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {services[2].description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {services[2].features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    <span>İncele</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>

            <Link href={services[3].href}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative glass-strong rounded-3xl p-8 lg:p-10 hover:border-primary/20 transition-colors duration-200 h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 group-hover:from-primary/8 rounded-3xl transition-all duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-6">
                    <Palette className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4 group-hover:text-primary-light transition-colors">
                    {services[3].title}
                  </h3>

                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {services[3].description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {services[3].features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    <span>İncele</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Block 3 - Large Feature Right (Opposite of Block 1) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-[1fr,1.2fr] gap-12 items-center"
          >
            {/* Left Small Block */}
            <Link href={services[4].href}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative glass-strong rounded-3xl p-8 lg:p-10 hover:border-primary/20 transition-colors duration-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 group-hover:from-primary/8 rounded-3xl transition-all duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-6">
                    <Share2 className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary-light transition-colors">
                    {services[4].title}
                  </h3>

                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {services[4].description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Detaylar</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Right Large Block */}
            <Link href={services[5].href}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="group relative glass-strong rounded-3xl p-10 lg:p-14 hover:border-primary/20 transition-colors duration-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 group-hover:from-primary/8 rounded-3xl transition-all duration-300" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:from-primary/15 transition-colors duration-200">
                    <Smartphone className="w-10 h-10 text-primary" />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-5 group-hover:text-primary-light transition-colors duration-300">
                    {services[5].title}
                  </h3>

                  <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                    {services[5].description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {services[5].features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-text-muted">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    <span>Keşfet</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* CTA Section - More Whitespace */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-32"
        >
          <Link href="/hizmetler">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(245, 158, 11, 0.15)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="px-12 py-5 bg-primary text-dark rounded-xl font-bold text-lg hover:bg-primary-light transition-colors duration-200"
            >
              Tüm Hizmetleri Keşfet
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
