'use client'

import { motion } from 'framer-motion'

interface TechLogo {
  name: string
  icon: string
  color: string
  description: string
}

const techStack: TechLogo[] = [
  { name: 'Next.js', icon: '▲', color: '#000000', description: 'React Framework' },
  { name: 'Shopify', icon: '🛍️', color: '#96BF48', description: 'E-commerce Platform' },
  { name: 'WordPress', icon: 'W', color: '#21759B', description: 'CMS' },
  { name: 'Stripe', icon: '$', color: '#635BFF', description: 'Payments' },
  { name: 'Figma', icon: '◆', color: '#F24E1E', description: 'Design Tool' },
  { name: 'TypeScript', icon: 'TS', color: '#3178C6', description: 'Type Safety' },
  { name: 'Tailwind', icon: '🎨', color: '#06B6D4', description: 'CSS Framework' },
  { name: 'Node.js', icon: '⬢', color: '#339933', description: 'Runtime' },
  { name: 'PostgreSQL', icon: '🐘', color: '#4169E1', description: 'Database' },
  { name: 'Google Cloud', icon: '☁️', color: '#4285F4', description: 'Cloud Platform' },
  { name: 'Meta Ads', icon: 'f', color: '#0866FF', description: 'Advertising' },
  { name: 'Analytics', icon: '📊', color: '#E37400', description: 'Data Insights' },
]

export default function TechStackMarquee() {
  const duplicatedStack = [...techStack, ...techStack]

  return (
    <section className="py-16 bg-dark-secondary/30 overflow-hidden border-y border-white/5">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-wider text-amber-400 mb-3 font-semibold"
          >
            Kullandığımız Teknolojiler
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-3xl font-display font-bold text-white"
          >
            En İyi Araçlarla{' '}
            <span className="gradient-text">Güçlü Çözümler</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-secondary/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-secondary/30 to-transparent z-10" />

          <motion.div
            className="flex gap-8 py-8"
            animate={{
              x: [0, -50 * techStack.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {duplicatedStack.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="group relative flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-strong rounded-2xl p-6 w-48 h-32 flex flex-col items-center justify-center border border-white/10 hover:border-amber-500/30 transition-all duration-300">
                  <div
                    className="text-5xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300"
                    style={{
                      color: tech.color,
                      filter: 'grayscale(100%)',
                    }}
                  >
                    {tech.icon}
                  </div>

                  <h3 className="text-white font-semibold text-sm text-center mb-1">
                    {tech.name}
                  </h3>

                  <p className="text-white/40 text-xs text-center group-hover:text-white/60 transition-colors">
                    {tech.description}
                  </p>
                </div>

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                  style={{
                    background: `radial-gradient(circle, ${tech.color}20 0%, transparent 70%)`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-white/50 text-sm mt-8"
        >
          Modern teknolojiler ve kanıtlanmış araçlarla projelerinizi hayata geçiriyoruz
        </motion.p>
      </div>
    </section>
  )
}
