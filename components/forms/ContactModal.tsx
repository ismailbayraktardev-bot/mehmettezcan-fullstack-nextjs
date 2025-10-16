'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import ContactForm from './ContactForm'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50"
          />

          {/* Modal - Compact & Mobile-Friendly */}
          <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[500px] glass-strong rounded-3xl p-6 sm:p-8 my-4 sm:my-8"
            >
              {/* Close Button - Mobile Optimized */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="sticky top-0 float-right -mt-1 -mr-1 sm:absolute sm:top-4 sm:right-4 w-10 h-10 flex items-center justify-center rounded-full bg-dark-tertiary/80 hover:bg-dark-tertiary border border-white/10 transition-all text-white/80 hover:text-white z-10 shadow-lg"
                aria-label="Kapat"
              >
                <X size={20} />
              </motion.button>

              {/* Modal Header - Compact */}
              <div className="mb-6 clear-both">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-block px-3 py-1.5 glass rounded-full mb-3"
                >
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                    İletişim
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl sm:text-3xl font-display font-bold mb-2"
                >
                  <span className="gradient-text">Projenizi Konuşalım</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm text-text-secondary"
                >
                  Dijital dünyadaki fikirlerinizi hayata geçirelim
                </motion.p>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <ContactForm />
              </motion.div>

              {/* Additional Info - Compact */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 pt-6 border-t border-white/10"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>24 saat içinde yanıt</span>
                  </div>
                  <div>
                    <a
                      href="mailto:hello@mehmettezcan.com"
                      className="text-primary hover:text-primary-light transition-colors"
                    >
                      hello@mehmettezcan.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
