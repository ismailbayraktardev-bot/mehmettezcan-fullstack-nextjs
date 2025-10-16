'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir email adresi giriniz'),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Proje tipi seçiniz'),
  budget: z.string().min(1, 'Bütçe aralığı seçiniz'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır'),
})

type ContactFormData = z.infer<typeof contactSchema>

const projectTypes = [
  'Web Tasarım',
  'E-Ticaret',
  'SEO Hizmetleri',
  'Grafik Tasarım',
  'Sosyal Medya',
  'Mobil Uygulama',
  'Diğer',
]

const budgetRanges = [
  '5.000 - 10.000 TL',
  '10.000 - 25.000 TL',
  '25.000 - 50.000 TL',
  '50.000 - 100.000 TL',
  '100.000 TL+',
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Desktop: 2 Column Grid, Mobile: Vertical */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Personal Info */}
        <div className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
              Ad Soyad *
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-dark-tertiary border border-white/10 rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Adınız Soyadınız"
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-400 flex items-center gap-1"
              >
                <XCircle className="w-4 h-4" />
                {errors.name.message}
              </motion.p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              E-posta *
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-dark-tertiary border border-white/10 rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="ornek@email.com"
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-400 flex items-center gap-1"
              >
                <XCircle className="w-4 h-4" />
                {errors.email.message}
              </motion.p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
              Telefon
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="w-full px-4 py-3 bg-dark-tertiary border border-white/10 rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="+90 555 123 45 67"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
              Şirket
            </label>
            <input
              {...register('company')}
              type="text"
              id="company"
              className="w-full px-4 py-3 bg-dark-tertiary border border-white/10 rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Şirket Adı"
            />
          </div>
        </div>

        {/* Right Column: Project Details */}
        <div className="space-y-6">
          {/* Project Type */}
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-text-primary mb-2">
              Proje Tipi *
            </label>
            <select
              {...register('projectType')}
              id="projectType"
              className="w-full px-4 py-3 bg-dark-tertiary border border-white/10 rounded-lg text-text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            >
              <option value="">Seçiniz</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-400 flex items-center gap-1"
              >
                <XCircle className="w-4 h-4" />
                {errors.projectType.message}
              </motion.p>
            )}
          </div>

          {/* Budget */}
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-text-primary mb-2">
              Bütçe *
            </label>
            <select
              {...register('budget')}
              id="budget"
              className="w-full px-4 py-3 bg-dark-tertiary border border-white/10 rounded-lg text-text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            >
              <option value="">Seçiniz</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            {errors.budget && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-400 flex items-center gap-1"
              >
                <XCircle className="w-4 h-4" />
                {errors.budget.message}
              </motion.p>
            )}
          </div>

          {/* Message - Taller textarea on right column */}
          <div className="flex-1">
            <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
              Mesajınız *
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={8}
              className="w-full h-full min-h-[200px] px-4 py-3 bg-dark-tertiary border border-white/10 rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              placeholder="Projeniz hakkında detaylı bilgi veriniz..."
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-400 flex items-center gap-1"
              >
                <XCircle className="w-4 h-4" />
                {errors.message.message}
              </motion.p>
            )}
          </div>
        </div>
      </div>

      {/* Submit Button - Centered, Large & Animated */}
      <div className="flex justify-center mt-8">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.05, boxShadow: '0 20px 60px rgba(245, 158, 11, 0.4)' }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="px-12 py-4 bg-amber-500 text-black rounded-xl font-bold text-lg hover:bg-amber-400 transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-500/30"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              Gönderiliyor...
            </>
          ) : (
            <>
              <Send className="w-6 h-6" />
              Mesaj Gönder
            </>
          )}
        </motion.button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
        >
          <XCircle className="w-5 h-5" />
          <span>Bir hata oluştu. Lütfen tekrar deneyiniz.</span>
        </motion.div>
      )}
    </form>
  )
}
