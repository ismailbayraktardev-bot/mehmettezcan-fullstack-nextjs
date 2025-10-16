'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Palette, Code, Rocket, BarChart, Headphones } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Keşif & Strateji',
    description:
      'İhtiyaçlarınızı dinliyor, hedeflerinizi belirliyoruz. Pazar analizi ve rekabet araştırması yaparak dijital stratejinizi oluşturuyoruz.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Tasarım & Planlama',
    description:
      'Markanıza özel, modern ve kullanıcı dostu tasarımlar yaratıyoruz. Wireframe ve prototip ile fikirlerinizi görselleştiriyoruz.',
  },
  {
    number: '03',
    icon: Code,
    title: 'Geliştirme',
    description:
      'Modern teknolojiler kullanarak hızlı, güvenli ve ölçeklenebilir çözümler geliştiriyoruz. Sürekli testlerle kaliteyi garantiliyoruz.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Yayınlama & Lansman',
    description:
      'Projenizi canlıya alıyor, SEO optimizasyonu yapıyoruz. Hosting, domain ve tüm teknik altyapıyı hazırlayarak yayınlıyoruz.',
  },
  {
    number: '05',
    icon: BarChart,
    title: 'Analiz & Optimizasyon',
    description:
      'Performansı sürekli izliyor, kullanıcı davranışlarını analiz ediyoruz. Veri odaklı kararlarla sürekli iyileştirme yapıyoruz.',
  },
  {
    number: '06',
    icon: Headphones,
    title: 'Destek & Bakım',
    description:
      'Sürekli teknik destek, güvenlik güncellemeleri ve içerik yönetimi ile yanınızdayız. İzmir\'de ofisimizden 7/24 destek sunuyoruz.',
  },
]

export default function WorkProcessSection() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ minHeight: '95vh' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary via-dark to-dark-secondary -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-2 glass rounded-full mb-6"
          >
            <span className="text-sm text-primary font-semibold uppercase tracking-wider">
              Çalışma Yöntemimiz
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="text-white">Projelerinizi</span>
            <br />
            <span className="gradient-text">6 Adımda Hayata Geçiriyoruz</span>
          </h2>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Keşif aşamasından lansmanına, oradan sürekli desteğe kadar her adımda yanınızdayız
          </p>
        </motion.div>

        {/* Process Steps - Creative Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative glass-strong rounded-3xl p-8 hover:border-primary/20 transition-colors duration-300"
              >
                {/* Minimal Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 group-hover:from-primary/8 rounded-3xl transition-all duration-300" />

                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="text-6xl font-display font-bold text-white/10 mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/15 transition-colors duration-200">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary-light transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
