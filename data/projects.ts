export interface Project {
  slug: string
  title: string
  category: string
  description: string
  fullDescription: string
  problem: string
  solution: string
  results: string
  technologies: string[]
  metrics: {
    metric: string
    value: string
  }[]
  testimonial?: string
  client?: string
  year: string
  // Visual enhancements
  thumbnail: string // Main project thumbnail
  images?: string[] // Additional project images
  color: string // Brand color for gradients
  featured?: boolean // Highlight on homepage
}

export const projects: Project[] = [
  {
    slug: 'clayspire',
    title: 'Clayspire',
    category: 'E-Ticaret',
    description: 'Shopify E-Ticaret Projesi - Uluslararası pazar odaklı',
    fullDescription: 'Clayspire markası için Shopify platformu üzerinde çok para birimli ödeme, uluslararası kargo entegrasyonları ve kullanıcı dostu arayüz ile global müşteri deneyimi optimize edildi.',
    problem: 'Clayspire markası, yabancı pazarlara yönelik hızlı ve güvenilir bir e-ticaret altyapısı arayışındaydı. Shopify platformu üzerinde, çok para birimli ödeme, uluslararası kargo entegrasyonları ve kullanıcı dostu arayüz ile global müşteri deneyimi optimize edildi.',
    solution: 'Shopify\'ın güçlü app ekosistemi kullanılarak özel ödeme gateway\'leri, çoklu dil desteği ve SEO optimize edilmiş ürün sayfaları tasarlandı. Mobil-first yaklaşımla responsive tasarım, checkout süreçlerinde kullanıcı deneyimi iyileştirmeleri ve analytics entegrasyonları uygulandı.',
    results: 'Proje tamamlandıktan sonra, Clayspire\'ın online satışları %60 artış gösterdi ve uluslararası müşteri memnuniyeti %85\'in üzerine çıktı. Shopify altyapısı sayesinde stok yönetimi, sipariş takibi ve müşteri hizmetleri otomasyonu sorunsuz işledi.',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'Multi-Currency', 'SEO'],
    metrics: [
      { metric: 'Online Satış Artışı', value: '+60%' },
      { metric: 'Müşteri Memnuniyeti', value: '%85+' },
    ],
    testimonial: 'İzmir Menemen\'deki web tasarım ve e-ticaret danışmanlığı uzmanlığının somut bir örneği.',
    client: 'Clayspire',
    year: '2024',
    thumbnail: '/images/project-img/clayspire.jpg',
    images: ['/images/project-img/clayspire.jpg'],
    color: '#8B5CF6',
    featured: true,
  },
  {
    slug: 'metsan-teknik',
    title: 'Metsan Teknik',
    category: 'Kurumsal Web',
    description: 'TR/EN Çok Dilli WordPress Kurumsal Projesi',
    fullDescription: 'Metsan Teknik için WordPress platformunda hem Türkçe hem İngilizce ayrı site yapıları ile SEO uyumlu kurumsal dijital kimlik oluşturuldu.',
    problem: 'Metsan Teknik, endüstriyel teknik hizmetler sektöründe hem yerel hem de uluslararası müşterilere ulaşmak için profesyonel bir dijital kimliğe ihtiyaç duyuyordu. WordPress platformunu kullanarak hem Türkçe hem İngilizce ayrı site yapıları oluşturulması gerekiyordu.',
    solution: 'WPML eklentisi ve özel tema geliştirmesiyle iki dil için ayrı site yapısı kuruldu. Her dilin kendi sitemap, meta tag ve içerik stratejisi oluşturuldu. Teknik SEO optimizasyonu, hızlı hosting altyapısı ve güvenlik önlemleri ile kurumsal imaj güçlendirildi.',
    results: 'Çok dilli site yapısı sayesinde, Metsan Teknik\'in organik trafiği %70 arttı ve uluslararası müşteri sorguları ikiye katlandı. WordPress\'in esnekliği sayesinde içerik yönetimi kolaylaştı ve site güncellemeleri kesintisiz yapılabildi.',
    technologies: ['WordPress', 'WPML', 'Custom Theme', 'SEO', 'PHP'],
    metrics: [
      { metric: 'Organik Trafik', value: '+70%' },
      { metric: 'Uluslararası Sorgu', value: '2x' },
    ],
    testimonial: 'İzmir\'den dünyaya açılan dijital varlığımız sağlamlaştırıldı.',
    client: 'Metsan Teknik',
    year: '2024',
    thumbnail: '/images/project-img/metsantechnical.jpg',
    images: ['/images/project-img/metsantechnical.jpg'],
    color: '#3B82F6',
    featured: true,
  },
  {
    slug: 'ruzgarlastik',
    title: 'Rüzgarlastik',
    category: 'E-Ticaret',
    description: 'Shopify E-Ticaret Projesi - Plastik ve ambalaj sektörü',
    fullDescription: 'Rüzgarlastik markası için Shopify platformunda hızlı, güvenli ve ölçeklenebilir e-ticaret altyapısı kuruldu.',
    problem: 'Rüzgarlastik markası, plastik ve ambalaj ürünleri sektöründe online satış kanalı oluşturmak için hızlı, güvenli ve ölçeklenebilir bir e-ticaret platformuna ihtiyaç duydu.',
    solution: 'Shopify tema özelleştirmesi, Türk ödeme sistemleri entegrasyonu (iyzico, PayTR), kargo entegrasyonları ve ürün yönetimi otomasyonu uygulandı. Mobil-first tasarım, hızlı checkout süreçleri ve analytics takibi ile müşteri deneyimi optimize edildi.',
    results: 'Rüzgarlastik\'in online satışları ilk 3 ayda %50 artış gösterdi. Shopify\'ın kolay yönetim paneli sayesinde ürün güncellemeleri ve kampanya yönetimi hızlandı.',
    technologies: ['Shopify', 'iyzico', 'PayTR', 'Kargo API', 'Analytics'],
    metrics: [
      { metric: 'Online Satış (3 ay)', value: '+50%' },
      { metric: 'Sipariş İşleme Hızı', value: '3x' },
    ],
    testimonial: 'Menemen merkezli e-ticaret uzmanlığının ve Shopify tecrübesinin başarılı bir örneği.',
    client: 'Rüzgarlastik',
    year: '2024',
    thumbnail: '/images/project-img/ars-filtre.jpg',
    images: ['/images/project-img/ars-filtre.jpg'],
    color: '#EF4444',
    featured: true,
  },
  {
    slug: 'yuse-group',
    title: 'Yuse Group',
    category: 'Kurumsal Web',
    description: 'WordPress Kurumsal Web Sitesi',
    fullDescription: 'Yuse Group için profesyonel ve güvenilir dijital kimlik oluşturmak amacıyla WordPress ile kurumsal web sitesi geliştirildi.',
    problem: 'Yuse Group, yatırım ve ticaret alanında faaliyet gösteren grup şirketleri için profesyonel ve güvenilir bir dijital kimlik oluşturmak istiyordu.',
    solution: 'Özel WordPress tema geliştirmesi, responsive tasarım, hızlı hosting ve güvenlik önlemleri ile kurumsal imaj güçlendirildi. Grup şirketleri için alt sayfalar, portfolyo bölümleri ve iletişim formları oluşturuldu.',
    results: 'Yuse Group\'un web sitesi trafikleri %60 arttı ve kurumsal müşteri sorguları belirgin şekilde yükseldi. WordPress\'in esnekliği sayesinde içerik güncellemeleri kolaylaştı.',
    technologies: ['WordPress', 'Custom Theme', 'Security', 'SEO'],
    metrics: [
      { metric: 'Web Trafiği', value: '+60%' },
      { metric: 'Müşteri Sorgusu', value: '+75%' },
    ],
    testimonial: 'Menemen merkezli kurumsal web geliştirme uzmanlığının kanıtı.',
    client: 'Yuse Group',
    year: '2024',
    thumbnail: '/images/project-img/yusegrup.jpg',
    images: ['/images/project-img/yusegrup.jpg'],
    color: '#10B981',
    featured: false,
  },
  {
    slug: 'tatlica-gida',
    title: 'Tatlıca Gıda',
    category: 'E-Ticaret',
    description: 'WooCommerce E-Ticaret Web Sitesi',
    fullDescription: 'Tatlıca Gıda için WooCommerce altyapısıyla hızlı, güvenli ve responsive e-ticaret platformu geliştirildi.',
    problem: 'Tatlıca Gıda, gıda sektöründe online satış kanalı oluşturmak için hızlı, güvenli ve responsive bir e-ticaret platformuna ihtiyaç duydu.',
    solution: 'WooCommerce tema özelleştirmesi, Türk ödeme sistemleri, kargo entegrasyonları ve ürün yönetimi otomasyonu uygulandı. Mobil-first tasarım, hızlı sayfa yüklemeleri ve kullanıcı dostu checkout süreçleri ile müşteri deneyimi optimize edildi.',
    results: 'Tatlıca Gıda\'nın online satışları ilk 6 ayda %70 artış gösterdi. WooCommerce\'in esnekliği sayesinde ürün ve stok yönetimi kolaylaştı.',
    technologies: ['WordPress', 'WooCommerce', 'Payment Gateway', 'Kargo API'],
    metrics: [
      { metric: 'Online Satış (6 ay)', value: '+70%' },
      { metric: 'Stok Yönetimi Verimliliği', value: '+85%' },
    ],
    testimonial: 'Menemen merkezli e-ticaret uzmanlığının başarılı bir örneği.',
    client: 'Tatlıca Gıda',
    year: '2023',
    thumbnail: '/images/project-img/tatlica-gida.jpg',
    images: ['/images/project-img/tatlica-gida.jpg'],
    color: '#F59E0B',
    featured: false,
  },
  {
    slug: 'karakas-yapi',
    title: 'Karakaş Yapı Market',
    category: 'E-Ticaret',
    description: 'WooCommerce E-Ticaret - Yapı malzemeleri',
    fullDescription: 'Karakaş Yapı Market için WooCommerce ile güçlü e-ticaret altyapısı ve local SEO stratejileri uygulandı.',
    problem: 'Karakaş Yapı Market, yapı malzemeleri sektöründe online satış kanalı oluşturmak ve yerel müşterilere hızlı hizmet vermek için dijital bir platforma ihtiyaç duydu.',
    solution: 'WooCommerce tema özelleştirmesi, stok yönetimi, ürün kategorileri, Türk ödeme sistemleri ve kargo entegrasyonları uygulandı. Local SEO stratejileri ile İzmir bölgesindeki hedef kitleye ulaşıldı.',
    results: 'Karakaş Yapı Market\'in online satışları %80 arttı ve yerel müşteri memnuniyeti zirveye çıktı. Local SEO çalışmaları sayesinde Google Haritalar\'da üst sıralarda yer aldı.',
    technologies: ['WordPress', 'WooCommerce', 'Local SEO', 'Google Maps'],
    metrics: [
      { metric: 'Online Satış', value: '+80%' },
      { metric: 'Local Search Ranking', value: 'Top 3' },
    ],
    testimonial: 'İzmir Menemen merkezli e-ticaret ve local SEO uzmanlığının kanıtı.',
    client: 'Karakaş Yapı Market',
    year: '2023',
    thumbnail: '/images/project-img/gunduzler-yapi-insaat.jpg',
    images: ['/images/project-img/gunduzler-yapi-insaat.jpg'],
    color: '#DC2626',
    featured: false,
  },
  {
    slug: 'soinox',
    title: 'SOINOX Pizza Fırınları',
    category: 'Kurumsal Web',
    description: 'WordPress Kurumsal Web Sitesi / Ürün Showcase',
    fullDescription: 'SOINOX Pizza Fırınları için WordPress ile modern kurumsal site ve ürün showcase platformu geliştirildi.',
    problem: 'SOINOX Pizza Fırınları, endüstriyel pizza fırını üretiminde profesyonel bir dijital kimlik ve ürün showcase platformuna ihtiyaç duyuyordu.',
    solution: 'Özel WordPress tema geliştirmesi, ürün katalogları, teknik özellikler sayfaları, responsive tasarım ve SEO optimizasyonu uygulandı. Görsel ağırlıklı içerik ve hızlı sayfa yüklemeleri ile marka imajı güçlendirildi.',
    results: 'SOINOX\'un web sitesi trafiği %65 arttı ve uluslararası müşteri sorguları belirgin şekilde yükseldi. Ürün showcase sayfaları sayesinde marka bilinirliği arttı.',
    technologies: ['WordPress', 'Custom Theme', 'Product Showcase', 'SEO'],
    metrics: [
      { metric: 'Web Trafiği', value: '+65%' },
      { metric: 'Uluslararası Sorgu', value: '+80%' },
    ],
    testimonial: 'Menemen merkezli kurumsal web geliştirme uzmanlığının kanıtı.',
    client: 'SOINOX',
    year: '2023',
    thumbnail: '/images/project-img/esnafexpress.jpg',
    images: ['/images/project-img/esnafexpress.jpg'],
    color: '#F97316',
    featured: false,
  },
  {
    slug: 'sever-fidancilik',
    title: 'Sever Fidancılık',
    category: 'E-Ticaret',
    description: 'WooCommerce E-Ticaret - Bitki ve fidancılık',
    fullDescription: 'Sever Fidancılık için WooCommerce ile bitki ve fidancılık sektörüne özel e-ticaret platformu geliştirildi.',
    problem: 'Sever Fidancılık, bitki ve fidancılık ürünlerini online satmak için özel bir e-ticaret platformuna ihtiyaç duydu.',
    solution: 'WooCommerce tema özelleştirmesi, ürün kategorileri, stok yönetimi, Türk ödeme sistemleri ve özel kargo çözümleri uygulandı. Görsel ağırlıklı ürün sayfaları ve SEO optimizasyonu ile organik trafik hedeflendi.',
    results: 'Sever Fidancılık\'ın online satışları %75 arttı ve müşteri memnuniyeti %90\'ın üzerine çıktı. SEO çalışmaları sayesinde Google\'da üst sıralarda yer aldı.',
    technologies: ['WordPress', 'WooCommerce', 'Custom Shipping', 'SEO'],
    metrics: [
      { metric: 'Online Satış', value: '+75%' },
      { metric: 'Müşteri Memnuniyeti', value: '%90+' },
    ],
    testimonial: 'Menemen merkezli e-ticaret uzmanlığının başarılı bir örneği.',
    client: 'Sever Fidancılık',
    year: '2023',
    thumbnail: '/images/project-img/sever-fidancilik.jpg',
    images: ['/images/project-img/sever-fidancilik.jpg'],
    color: '#16A34A',
    featured: false,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
