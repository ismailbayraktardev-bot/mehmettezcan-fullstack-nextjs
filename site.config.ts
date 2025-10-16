export const siteConfig = {
  name: 'Mehmet Tezcan - Dijital Ajans İzmir',
  title: 'Mehmet Tezcan | Web Tasarım & Dijital Pazarlama Ajansı İzmir',
  description:
    'İzmir\'de web tasarım, SEO, dijital pazarlama, e-ticaret ve mobil uygulama geliştirme hizmetleri. Ege bölgesinde profesyonel dijital çözümler.',
  url: 'https://mehmettezcan.com',
  ogImage: '/og-image.jpg',
  keywords: [
    'dijital ajans izmir',
    'web tasarım izmir',
    'seo izmir',
    'dijital pazarlama izmir',
    'e-ticaret izmir',
    'mobil uygulama geliştirme izmir',
    'grafik tasarım izmir',
    'sosyal medya yönetimi izmir',
    'web yazılım izmir',
    'kurumsal web sitesi izmir',
  ],
  author: {
    name: 'Mehmet Tezcan',
    email: 'info@mehmettezcan.com',
    url: 'https://mehmettezcan.com',
  },
  creator: 'Mehmet Tezcan',
  company: {
    name: 'Mehmet Tezcan Dijital Ajans',
    address: 'İzmir, Türkiye',
    phone: '+90 XXX XXX XX XX',
    email: 'info@mehmettezcan.com',
  },
  social: {
    twitter: 'https://twitter.com/mehmettezcan',
    facebook: 'https://facebook.com/mehmettezcan',
    instagram: 'https://instagram.com/mehmettezcan',
    linkedin: 'https://linkedin.com/company/mehmettezcan',
    youtube: 'https://youtube.com/@mehmettezcan',
    github: 'https://github.com/mehmettezcan',
  },
  links: {
    home: '/',
    services: '/hizmetler',
    projects: '/projeler',
    blog: '/blog',
    about: '/hakkimizda',
    contact: '/iletisim',
    privacy: '/kvkk',
    terms: '/kullanim-kosullari',
  },
  // Google Analytics 4
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX',
  },
  // SEO & Metadata
  seo: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    favicon: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png',
    manifestUrl: '/manifest.json',
    themeColor: '#0a0a0a',
    tileColor: '#f59e0b',
  },
  // OpenGraph
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://mehmettezcan.com',
    siteName: 'Mehmet Tezcan Dijital Ajans',
    title: 'Mehmet Tezcan | Web Tasarım & Dijital Pazarlama Ajansı İzmir',
    description:
      'İzmir\'de web tasarım, SEO, dijital pazarlama, e-ticaret ve mobil uygulama geliştirme hizmetleri.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mehmet Tezcan Dijital Ajans',
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@mehmettezcan',
    creator: '@mehmettezcan',
    title: 'Mehmet Tezcan | Web Tasarım & Dijital Pazarlama Ajansı İzmir',
    description:
      'İzmir\'de web tasarım, SEO, dijital pazarlama, e-ticaret ve mobil uygulama geliştirme hizmetleri.',
    images: ['/og-image.jpg'],
  },
  // Robots & Sitemap
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
} as const

export type SiteConfig = typeof siteConfig
