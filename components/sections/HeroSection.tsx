'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useContactModal } from '@/components/providers/ContactModalProvider'

const partners = [
  'Microsoft', 'Google', 'Meta', 'Amazon', 'Apple', 'Netflix', 'Tesla', 'Samsung',
  'Adobe', 'Oracle', 'Salesforce', 'IBM', 'Intel', 'Cisco',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
}

export default function HeroSection() {
  const { openModal } = useContactModal()

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center" style={{ paddingTop: 'clamp(96px, 15vh, 220px)' }}>
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-secondary to-dark -z-10" />

      {/* Cam Panel Container - Minimal & Clean */}
      <div className="absolute inset-2 rounded-3xl lg:rounded-[3rem] overflow-hidden border border-black/10 dark:border-white/5">
        {/* Video Background - Clean & Natural */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-35 dark:invert -scale-x-100"
        >
          <source src="/hero-light.mp4" type="video/mp4" />
        </video>

        {/* Minimal Gradient for Readability Only */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Hero Content - Centered with Breathing Space */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center justify-center max-w-5xl mx-auto px-6 text-center"
      >
        {/* Main Heading - Smaller, Cleaner Font */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]"
          style={{ fontSize: 'clamp(2rem, 6vw, 6rem)' }}
        >
          Dijital Dünyanızı
          <span className="block text-amber-500 mt-2">Birlikte İnşa Edelim</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Modern web teknolojileri, yaratıcı tasarım ve güçlü stratejilerle
          markanızı dijital dünyada zirveye taşıyoruz
        </motion.p>

        {/* CTA Buttons - Minimal & Clean */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={openModal}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(245, 158, 11, 0.15)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="group flex items-center gap-2 px-8 py-4 bg-amber-500 text-black rounded-xl font-bold hover:bg-amber-400 transition-colors duration-200"
          >
            <span>Proje Başlat</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>

          <motion.a
            href="/projeler"
            whileHover={{ scale: 1.02, borderColor: 'rgba(245, 158, 11, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="px-8 py-4 text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/5 backdrop-blur-sm transition-all duration-200"
          >
            Projelerimizi İncele
          </motion.a>
        </motion.div>

        {/* Logo Cloud - Super Slow Marquee with Inline SVGs */}
        <motion.div
          variants={itemVariants}
          className="w-full overflow-hidden"
        >
          <p className="text-xs text-white/40 uppercase tracking-wider mb-6 font-medium">
            Güvenilen Markalar
          </p>

          {/* Marquee Container */}
          <div className="relative w-full">
            <div className="flex animate-marquee">
              {/* First Set of Logos */}
              <div className="flex items-center gap-12 px-6">
                {/* Figma */}
                <svg className="w-8 h-8 opacity-60 hover:opacity-90 transition-opacity" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="currentColor"/>
                  <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="currentColor"/>
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="currentColor"/>
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="currentColor"/>
                  <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="currentColor"/>
                </svg>

                {/* Next.js */}
                <svg className="w-8 h-8 opacity-60 hover:opacity-90 transition-opacity" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                    <circle cx="90" cy="90" r="90" fill="black"/>
                  </mask>
                  <g mask="url(#mask0)">
                    <circle cx="90" cy="90" r="87" fill="currentColor" stroke="currentColor" strokeWidth="6"/>
                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)"/>
                    <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)"/>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="currentColor"/>
                      <stop offset="1" stopColor="currentColor" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                      <stop stopColor="currentColor"/>
                      <stop offset="1" stopColor="currentColor" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>

                {/* Node.js */}
                <svg className="w-8 h-8 opacity-60 hover:opacity-90 transition-opacity" viewBox="0 0 256 289" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128 288.464C124.656 288.464 121.424 287.584 118.528 285.824L81.712 264.032C76.944 261.392 79.28 260.4 81.04 259.856C87.856 257.664 89.168 257.216 96.32 253.104C97.088 252.672 98.064 252.896 98.832 253.328L128.64 270.032C129.632 270.576 131.072 270.576 131.952 270.032L241.04 209.808C242.032 209.264 242.592 208.272 242.592 207.168V86.72C242.592 85.616 242.032 84.624 241.04 84.08L131.952 23.968C130.96 23.424 129.632 23.424 128.64 23.968L19.552 84.08C18.56 84.624 18 85.728 18 86.72V207.168C18 208.16 18.56 209.152 19.552 209.808L49.472 226.288C67.504 235.472 78.928 225.52 78.928 215.12V96.112C78.928 94.672 80.144 93.456 81.712 93.456H95.664C97.088 93.456 98.304 94.672 98.304 96.112V215.12C98.304 236.464 86.432 248.56 66.288 248.56C60.368 248.56 55.712 248.56 40.704 240.592L11.44 224.56C5.648 221.248 2 215.008 2 208.384V85.728C2 79.104 5.648 72.864 11.44 69.552L122.192 8.88C127.648 5.68 134.464 5.68 139.808 8.88L250.56 69.552C256.352 72.864 260 79.104 260 85.728V208.384C260 215.008 256.352 221.248 250.56 224.56L139.808 285.232C136.912 287.472 133.456 288.464 128 288.464Z" fill="currentColor"/>
                </svg>

                {/* Shopify */}
                <svg className="w-8 h-8 opacity-60 hover:opacity-90 transition-opacity" viewBox="0 0 256 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M223.774 57.34c-.201-1.046-1.178-1.644-2.393-1.644-.626 0-13.934-.295-13.934-.295s-11.31-11.156-12.514-12.36c-1.204-1.204-3.596-.898-4.513-.596-.046.029-.549.168-1.446.428-.796-2.544-2.166-5.39-4.361-8.273-6.446-8.453-15.933-12.942-27.394-12.942-.323 0-.628.017-.942.032-2.16-2.906-4.8-4.179-6.833-4.179-70.31 0-103.45 88.176-113.93 133.104l-43.188 13.366c-13.314 4.161-13.608 4.559-15.327 17.068C.295 186.708.029 287.174.029 287.174l181.014 34.712 89.924-18.761C270.967 303.125 270.967 57.34 223.774 57.34zm-65.655-36.86c.596.029 1.177.077 1.787.109v.015c-5.558 9.456-12.172 20.023-18.93 30.59l-16.916 5.257c2.906-16.917 11.31-28.395 17.068-33.946 3.627-2.92 8.485-2.025 16.991-2.025zm-21.292 39.957l-28.88 8.936c5.571-21.452 16.044-31.923 25.634-37.966 2.393-1.515 4.786-2.709 7.179-3.628 2.891 6.137 4.903 13.607 5.933 21.022 0 0-.016.015-.032.015-.031 0-.063.015-.094.015-1.497.458-2.994.932-4.491 1.405zm23.095 3.611V63.88c4.559-.612 9.118-1.237 13.677-1.862-2.393 8.936-6.752 19.839-13.677 31.923V64.048zm40.318-30.59l-11.919 3.688c-3.004-11.933-11.045-17.708-19.839-17.708-.916 0-1.769.077-2.623.184-5.558 4.878-11.13 13.675-14.748 26.616l-25.634 7.928v-.336c-3.922-12.36-10.031-25.104-19.839-25.104-.916 0-1.832.077-2.748.184-1.955 1.631-3.846 3.611-5.738 5.592-6.446 6.752-13.028 17.224-18.195 32.517l-55.925 17.332c-7.332 2.28-13.996 4.212-20.168 6.065l19.839-80.28c2.28-8.936 6.137-15.01 11.919-18.03 5.558-2.906 13.028-2.378 20.168-1.13L255.997 57.34v-.015c-.918 0-41.62-1.237-53.538-1.237z" fill="currentColor"/>
                </svg>

                {/* Amazon */}
                <svg className="w-10 h-8 opacity-60 hover:opacity-90 transition-opacity" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M160.815 163.16c-32.27 23.759-79.076 36.424-119.33 36.424-56.492 0-107.313-20.893-145.853-55.66-3.023-2.733-.318-6.459 3.31-4.333 41.49 24.15 92.783 38.684 145.772 38.684 35.737 0 75.047-7.41 111.197-22.753 5.45-2.318 10.003 3.579 4.904 7.638zm13.195-15.03c-4.12-5.287-27.29-2.497-37.696-1.262-3.172.388-3.653-2.374-.795-4.368 18.447-12.99 48.729-9.236 52.255-4.886 3.525 4.381-.927 34.768-18.285 49.269-2.667 2.224-5.204 1.04-4.024-1.91 3.905-9.749 12.664-31.555 8.545-36.843z" fill="currentColor"/>
                </svg>

                {/* Meta */}
                <svg className="w-10 h-8 opacity-60 hover:opacity-90 transition-opacity" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 128.047C256 57.3067 198.692 0 128.047 0 57.307 0 0 57.3067 0 128.047c0 64.01 46.827 117.102 108.032 126.552V165.341H75.52V128.047h32.512V99.867c0-32.055 19.093-49.792 48.32-49.792 14.005 0 28.672 2.496 28.672 2.496v31.552h-16.149c-15.904 0-20.864 9.856-20.864 19.968v23.979h35.52l-5.675 37.27h-29.845v89.258C209.173 245.173 256 192.057 256 128.047z" fill="currentColor"/>
                </svg>
              </div>

              {/* Duplicate Set for Seamless Loop */}
              <div className="flex items-center gap-12 px-6">
                {/* Figma */}
                <svg className="w-8 h-8 opacity-60 hover:opacity-90 transition-opacity" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="currentColor"/>
                  <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="currentColor"/>
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="currentColor"/>
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="currentColor"/>
                  <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="currentColor"/>
                </svg>

                {/* Next.js */}
                <svg className="w-8 h-8 opacity-60 hover:opacity-90 transition-opacity" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                    <circle cx="90" cy="90" r="90" fill="black"/>
                  </mask>
                  <g mask="url(#mask1)">
                    <circle cx="90" cy="90" r="87" fill="currentColor" stroke="currentColor" strokeWidth="6"/>
                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint2_linear)"/>
                    <rect x="115" y="54" width="12" height="72" fill="url(#paint3_linear)"/>
                  </g>
                  <defs>
                    <linearGradient id="paint2_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="currentColor"/>
                      <stop offset="1" stopColor="currentColor" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                      <stop stopColor="currentColor"/>
                      <stop offset="1" stopColor="currentColor" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>

                {/* Node.js */}
                <svg className="w-8 h-8 opacity-60 hover:opacity-90 transition-opacity" viewBox="0 0 256 289" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128 288.464C124.656 288.464 121.424 287.584 118.528 285.824L81.712 264.032C76.944 261.392 79.28 260.4 81.04 259.856C87.856 257.664 89.168 257.216 96.32 253.104C97.088 252.672 98.064 252.896 98.832 253.328L128.64 270.032C129.632 270.576 131.072 270.576 131.952 270.032L241.04 209.808C242.032 209.264 242.592 208.272 242.592 207.168V86.72C242.592 85.616 242.032 84.624 241.04 84.08L131.952 23.968C130.96 23.424 129.632 23.424 128.64 23.968L19.552 84.08C18.56 84.624 18 85.728 18 86.72V207.168C18 208.16 18.56 209.152 19.552 209.808L49.472 226.288C67.504 235.472 78.928 225.52 78.928 215.12V96.112C78.928 94.672 80.144 93.456 81.712 93.456H95.664C97.088 93.456 98.304 94.672 98.304 96.112V215.12C98.304 236.464 86.432 248.56 66.288 248.56C60.368 248.56 55.712 248.56 40.704 240.592L11.44 224.56C5.648 221.248 2 215.008 2 208.384V85.728C2 79.104 5.648 72.864 11.44 69.552L122.192 8.88C127.648 5.68 134.464 5.68 139.808 8.88L250.56 69.552C256.352 72.864 260 79.104 260 85.728V208.384C260 215.008 256.352 221.248 250.56 224.56L139.808 285.232C136.912 287.472 133.456 288.464 128 288.464Z" fill="currentColor"/>
                </svg>

                {/* Shopify */}
                <svg className="w-8 h-8 opacity-60 hover:opacity-90 transition-opacity" viewBox="0 0 256 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M223.774 57.34c-.201-1.046-1.178-1.644-2.393-1.644-.626 0-13.934-.295-13.934-.295s-11.31-11.156-12.514-12.36c-1.204-1.204-3.596-.898-4.513-.596-.046.029-.549.168-1.446.428-.796-2.544-2.166-5.39-4.361-8.273-6.446-8.453-15.933-12.942-27.394-12.942-.323 0-.628.017-.942.032-2.16-2.906-4.8-4.179-6.833-4.179-70.31 0-103.45 88.176-113.93 133.104l-43.188 13.366c-13.314 4.161-13.608 4.559-15.327 17.068C.295 186.708.029 287.174.029 287.174l181.014 34.712 89.924-18.761C270.967 303.125 270.967 57.34 223.774 57.34zm-65.655-36.86c.596.029 1.177.077 1.787.109v.015c-5.558 9.456-12.172 20.023-18.93 30.59l-16.916 5.257c2.906-16.917 11.31-28.395 17.068-33.946 3.627-2.92 8.485-2.025 16.991-2.025zm-21.292 39.957l-28.88 8.936c5.571-21.452 16.044-31.923 25.634-37.966 2.393-1.515 4.786-2.709 7.179-3.628 2.891 6.137 4.903 13.607 5.933 21.022 0 0-.016.015-.032.015-.031 0-.063.015-.094.015-1.497.458-2.994.932-4.491 1.405zm23.095 3.611V63.88c4.559-.612 9.118-1.237 13.677-1.862-2.393 8.936-6.752 19.839-13.677 31.923V64.048zm40.318-30.59l-11.919 3.688c-3.004-11.933-11.045-17.708-19.839-17.708-.916 0-1.769.077-2.623.184-5.558 4.878-11.13 13.675-14.748 26.616l-25.634 7.928v-.336c-3.922-12.36-10.031-25.104-19.839-25.104-.916 0-1.832.077-2.748.184-1.955 1.631-3.846 3.611-5.738 5.592-6.446 6.752-13.028 17.224-18.195 32.517l-55.925 17.332c-7.332 2.28-13.996 4.212-20.168 6.065l19.839-80.28c2.28-8.936 6.137-15.01 11.919-18.03 5.558-2.906 13.028-2.378 20.168-1.13L255.997 57.34v-.015c-.918 0-41.62-1.237-53.538-1.237z" fill="currentColor"/>
                </svg>

                {/* Amazon */}
                <svg className="w-10 h-8 opacity-60 hover:opacity-90 transition-opacity" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M160.815 163.16c-32.27 23.759-79.076 36.424-119.33 36.424-56.492 0-107.313-20.893-145.853-55.66-3.023-2.733-.318-6.459 3.31-4.333 41.49 24.15 92.783 38.684 145.772 38.684 35.737 0 75.047-7.41 111.197-22.753 5.45-2.318 10.003 3.579 4.904 7.638zm13.195-15.03c-4.12-5.287-27.29-2.497-37.696-1.262-3.172.388-3.653-2.374-.795-4.368 18.447-12.99 48.729-9.236 52.255-4.886 3.525 4.381-.927 34.768-18.285 49.269-2.667 2.224-5.204 1.04-4.024-1.91 3.905-9.749 12.664-31.555 8.545-36.843z" fill="currentColor"/>
                </svg>

                {/* Meta */}
                <svg className="w-10 h-8 opacity-60 hover:opacity-90 transition-opacity" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 128.047C256 57.3067 198.692 0 128.047 0 57.307 0 0 57.3067 0 128.047c0 64.01 46.827 117.102 108.032 126.552V165.341H75.52V128.047h32.512V99.867c0-32.055 19.093-49.792 48.32-49.792 14.005 0 28.672 2.496 28.672 2.496v31.552h-16.149c-15.904 0-20.864 9.856-20.864 19.968v23.979h35.52l-5.675 37.27h-29.845v89.258C209.173 245.173 256 192.057 256 128.047z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
