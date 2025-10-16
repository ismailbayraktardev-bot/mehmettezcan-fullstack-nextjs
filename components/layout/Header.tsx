'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useContactModal } from '@/components/providers/ContactModalProvider'

const navigation = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'Hizmetler', href: '/hizmetler' },
  { name: 'Projeler', href: '/projeler' },
  { name: 'Blog', href: '/blog' },
  { name: 'İletişim', href: '/iletisim' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { openModal } = useContactModal()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6"
    >
      <div className={`mx-auto transition-all duration-300 ${
        isScrolled
          ? 'max-w-4xl mt-4 py-3 bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl'
          : 'max-w-6xl py-6 bg-transparent'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <motion.div
              animate={{
                scale: isScrolled ? 0.8 : 1,
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center gap-3"
            >
              {/* Logo Icon */}
              <div className={`relative transition-all duration-500 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl rotate-6 opacity-20 blur-sm" />
                <div className="relative w-full h-full bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <span className="text-black font-display font-black text-xl">M</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`font-display font-bold text-white transition-all duration-500 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
                  Mehmet Tezcan
                </span>
                <span className={`text-amber-400 font-semibold transition-all duration-500 ${isScrolled ? 'text-[10px]' : 'text-xs'}`}>
                  Digital Agency
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 text-sm font-bold rounded-xl transition-all duration-500 ${
                isScrolled
                  ? 'bg-amber-500 text-black hover:bg-amber-400 shadow-lg shadow-amber-500/30'
                  : 'bg-transparent text-white border-2 border-white/40 hover:border-white hover:bg-white/10'
              }`}
            >
              Proje Başlat
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Menü"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="md:hidden overflow-hidden glass-strong border-t border-white/5"
      >
        <nav className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/70 hover:text-white transition-colors py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => {
              openModal()
              setIsMobileMenuOpen(false)
            }}
            className="mt-4 w-full px-6 py-3 bg-amber-500 text-black rounded-xl font-bold hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/30"
          >
            Proje Başlat
          </button>
        </nav>
      </motion.div>
    </motion.header>
  )
}
