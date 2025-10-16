'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  rating: number
  color: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'Shopify platformunda harika bir e-ticaret deneyimi yarattılar. Uluslararası satışlarımız katlandı.',
    author: 'Clayspire CEO',
    role: 'CEO',
    company: 'Clayspire',
    rating: 5,
    color: '#8B5CF6',
  },
  {
    quote: 'Lastik e-ticaretine özel çözümleriyle işimizi büyüttük. Müşterilerimiz siteyi çok beğeniyor.',
    author: 'Rüzgar Lastik Sahibi',
    role: 'Kurucu',
    company: 'Rüzgar Lastik',
    rating: 5,
    color: '#EF4444',
  },
  {
    quote: 'Müşterilerimiz ürünlerimizi gerçekçi şekilde görebiliyor. Satışlarımız ve memnuniyetimiz arttı.',
    author: 'MD Mobilya Kurucusu',
    role: 'Kurucu',
    company: 'MD Mobilya',
    rating: 5,
    color: '#10B981',
  },
  {
    quote: 'Modern teknoloji ve hızlı performans sayesinde müşterilerimize mükemmel deneyim sunuyoruz.',
    author: 'Tatlıca Gıda Sahibi',
    role: 'İşletme Sahibi',
    company: 'Tatlıca Gıda',
    rating: 5,
    color: '#F59E0B',
  },
]

export default function TestimonialShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Müşterilerimiz <span className="text-amber-500">Ne Diyor?</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Başarı hikayelerimiz, müşterilerimizin memnuniyetini yansıtıyor.
          </p>
        </motion.div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9])

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div
        className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 p-8"
        style={{
          background: `linear-gradient(135deg, ${testimonial.color}10 0%, transparent 100%)`,
        }}
      >
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 opacity-10">
          <Quote className="w-20 h-20" style={{ color: testimonial.color }} />
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-amber-500 text-amber-500"
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-white/90 text-lg mb-8 leading-relaxed relative z-10">
          "{testimonial.quote}"
        </p>

        {/* Author Info */}
        <div
          className="flex items-center gap-4 pt-6 border-t relative z-10"
          style={{ borderColor: `${testimonial.color}30` }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg"
            style={{ background: `${testimonial.color}40` }}
          >
            {testimonial.author.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-white">{testimonial.author}</div>
            <div className="text-sm text-white/50">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
