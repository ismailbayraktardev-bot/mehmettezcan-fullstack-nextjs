'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, CheckCircle, XCircle, ArrowRight, ArrowLeft } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir email adresi giriniz'),
  phone: z.string().optional(),
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
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const totalSteps = 3

  const nextStep = async () => {
    let fieldsToValidate: (keyof ContactFormData)[] = []

    if (currentStep === 1) {
      fieldsToValidate = ['name', 'email']
    } else if (currentStep === 2) {
      fieldsToValidate = ['projectType', 'budget']
    }

    const isValid = await trigger(fieldsToValidate)
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

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
        setCurrentStep(1)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  const [direction, setDirection] = useState(0)

  const handleNext = () => {
    setDirection(1)
    nextStep()
  }

  const handlePrev = () => {
    setDirection(-1)
    prevStep()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span className="text-text-secondary font-medium">Adım {currentStep}/{totalSteps}</span>
          <span className="text-text-muted">{Math.round((currentStep / totalSteps) * 100)}%</span>
        </div>
        <div className="h-2 bg-dark-tertiary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Form Steps */}
      <div className="relative overflow-hidden min-h-[320px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="space-y-4"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Kişisel Bilgiler</h3>
                <p className="text-sm text-text-secondary">Size nasıl ulaşabiliriz?</p>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Ad Soyad *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-dark-tertiary border border-white/10 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                  placeholder="Adınız Soyadınız"
                  autoFocus
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
                  className="w-full px-4 py-3 bg-dark-tertiary border border-white/10 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
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
                  Telefon <span className="text-text-muted text-xs">(Opsiyonel)</span>
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-dark-tertiary border border-white/10 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                  placeholder="+90 555 123 45 67"
                />
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="space-y-4"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Proje Detayları</h3>
                <p className="text-sm text-text-secondary">Projeniz hakkında bilgi verin</p>
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-text-primary mb-2">
                  Proje Tipi *
                </label>
                <select
                  {...register('projectType')}
                  id="projectType"
                  className="w-full px-4 py-3 bg-dark-tertiary border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
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
                  Bütçe Aralığı *
                </label>
                <select
                  {...register('budget')}
                  id="budget"
                  className="w-full px-4 py-3 bg-dark-tertiary border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
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
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="space-y-4"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Mesajınız</h3>
                <p className="text-sm text-text-secondary">Projeniz hakkında detay verin</p>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Detaylı Açıklama *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={8}
                  className="w-full px-4 py-3 bg-dark-tertiary border border-white/10 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                  placeholder="Projeniz hakkında detaylı bilgi verin... Hedefleriniz, beklentileriniz ve varsa özel istekleriniz neler?"
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4 pt-4">
        {currentStep > 1 ? (
          <motion.button
            type="button"
            onClick={handlePrev}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 text-white border border-white/20 rounded-xl font-medium hover:bg-white/5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Geri
          </motion.button>
        ) : (
          <div />
        )}

        {currentStep < totalSteps ? (
          <motion.button
            type="button"
            onClick={handleNext}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(245, 158, 11, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-black rounded-xl font-bold hover:bg-amber-400 transition-all ml-auto"
          >
            İleri
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        ) : (
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: '0 8px 24px rgba(245, 158, 11, 0.3)' }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="flex items-center gap-2 px-8 py-3 bg-amber-500 text-black rounded-xl font-bold hover:bg-amber-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Gönderiliyor...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Gönder
              </>
            )}
          </motion.button>
        )}
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400"
        >
          <XCircle className="w-5 h-5" />
          <span>Bir hata oluştu. Lütfen tekrar deneyiniz.</span>
        </motion.div>
      )}
    </form>
  )
}
