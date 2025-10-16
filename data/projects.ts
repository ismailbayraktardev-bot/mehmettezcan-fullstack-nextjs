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
}

export const projects: Project[] = [
  {
    slug: 'clayspire',
    title: 'Clayspire',
    category: 'E-Ticaret',
    description: 'Yurtdışı pazarına yönelik modern Shopify e-ticaret web sitesi.',
    fullDescription: 'Uluslararası ödeme entegrasyonları ve çoklu dil desteği ile global satış platformu.',
    problem: 'Clayspire, yurtdışı pazarına açılmak ve uluslararası müşterilere hizmet vermek istiyordu. Mevcut altyapıları yetersizdi.',
    solution: 'Shopify platformu üzerinde çoklu dil desteği, uluslararası ödeme gateway entegrasyonları ve global kargo çözümleri ile modern bir e-ticaret sitesi geliştirdik.',
    results: 'Global satışlarda %320 artış sağlandı. Sayfa yükleme hızı 0.9 saniyeye düşürüldü.',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'Stripe'],
    metrics: [
      { metric: 'Global Satış Artışı', value: '+320%' },
      { metric: 'Sayfa Hızı', value: '0.9s' },
    ],
    testimonial: 'Shopify platformunda harika bir e-ticaret deneyimi yarattılar. Uluslararası satışlarımız katlandı.',
    client: 'Clayspire CEO',
    year: '2024',
  },
  {
    slug: 'metsan-technical',
    title: 'Metsan Technical',
    category: 'Endüstriyel',
    description: 'Teknik endüstriyel firma için kurumsal WordPress web sitesi.',
    fullDescription: 'Ürün katalogları, teknik dökümanlar ve çok dilli yapı ile güçlü B2B platformu.',
    problem: 'Metsan Technical, teknik ürünlerini ve kataloglarını dijital ortamda profesyonel bir şekilde sunmak istiyordu.',
    solution: 'WordPress platformu üzerinde custom theme geliştirdik. Ürün katalogları, PDF dökümanlar ve çok dilli yapı ekledik.',
    results: 'B2B başvuruları %180, katalog görüntülenmeleri %250 arttı.',
    technologies: ['WordPress', 'PHP', 'Custom Theme', 'WooCommerce'],
    metrics: [
      { metric: 'B2B Başvuru', value: '+180%' },
      { metric: 'Katalog Görüntüleme', value: '+250%' },
    ],
    testimonial: 'Profesyonel ve teknik dokümanlarımızı mükemmel şekilde yönettik. Müşteri başvurularımız arttı.',
    client: 'Metsan Technical GM',
    year: '2023',
  },
  {
    slug: 'ruzgar-lastik',
    title: 'Rüzgar Lastik',
    category: 'E-Ticaret',
    description: 'Lastik satışı için optimize edilmiş Shopify e-ticaret platformu.',
    fullDescription: 'Araç modeline göre filtreleme, stok yönetimi ve hızlı kargo entegrasyonu.',
    problem: 'Rüzgar Lastik, online lastik satışlarını artırmak ve müşterilere kolay arama imkanı sunmak istiyordu.',
    solution: 'Araç modeline göre akıllı filtreleme sistemi, gerçek zamanlı stok takibi ve kargo entegrasyonu ekledik.',
    results: 'Online satışlar %290 arttı, müşteri memnuniyeti 4.9/5 oldu.',
    technologies: ['Shopify', 'Liquid', 'API Integration', 'Custom Apps'],
    metrics: [
      { metric: 'Online Satış', value: '+290%' },
      { metric: 'Müşteri Memnuniyeti', value: '4.9/5' },
    ],
    testimonial: 'Lastik e-ticaretine özel çözümleriyle işimizi büyüttük. Müşterilerimiz siteyi çok beğeniyor.',
    client: 'Rüzgar Lastik Sahibi',
    year: '2024',
  },
  {
    slug: 'billhom-trendyol',
    title: 'Billhom Trendyol',
    category: 'E-Ticaret Danışmanlık',
    description: 'Trendyol marketplace optimizasyonu ve satış danışmanlığı.',
    fullDescription: 'Ürün yönetimi, fiyatlandırma stratejisi ve reklam kampanyaları.',
    problem: 'Billhom, Trendyol marketplace\'de satışlarını artırmak ve ürün görünürlüğünü yükseltmek istiyordu.',
    solution: 'SEO optimize ürün açıklamaları, dinamik fiyatlandırma ve hedefli reklam kampanyaları ile danışmanlık verdik.',
    results: 'Satışlar %400, ürün görünürlüğü %350 arttı.',
    technologies: ['Trendyol API', 'Analytics', 'SEO', 'Campaign Management'],
    metrics: [
      { metric: 'Satış Artışı', value: '+400%' },
      { metric: 'Ürün Görünürlüğü', value: '+350%' },
    ],
    testimonial: 'Trendyol\'da satışlarımız katlandı. Profesyonel danışmanlık hizmetleri sayesinde büyüdük.',
    client: 'Billhom Yöneticisi',
    year: '2023',
  },
  {
    slug: 'md-mobilya',
    title: 'MD Mobilya',
    category: 'E-Ticaret',
    description: 'Mobilya sektörü için görsel odaklı e-ticaret platformu.',
    fullDescription: '3D ürün görselleri, oda tasarım aracı ve özelleştirilebilir ürünler.',
    problem: 'MD Mobilya, müşterilerine ürünleri gerçekçi şekilde göstermek ve oda içinde görselleştirmek istiyordu.',
    solution: 'Three.js ile 3D ürün görselleri, interaktif oda tasarım aracı ve özelleştirme seçenekleri ekledik.',
    results: 'Ürün görsellemeleri %500, ortalama sepet değeri %85 arttı.',
    technologies: ['Shopify', 'Three.js', 'Custom Apps', 'Payment Gateway'],
    metrics: [
      { metric: 'Ürün Görselleme', value: '+500%' },
      { metric: 'Ortalama Sepet', value: '+85%' },
    ],
    testimonial: 'Müşterilerimiz ürünlerimizi gerçekçi şekilde görebiliyor. Satışlarımız ve memnuniyetimiz arttı.',
    client: 'MD Mobilya Kurucusu',
    year: '2024',
  },
  {
    slug: 'tatlica-gida',
    title: 'Tatlıca Gıda',
    category: 'Foodtech',
    description: 'Next.js ile geliştirilmiş hızlı ve modern gıda e-ticaret platformu.',
    fullDescription: 'Online sipariş, canlı teslimat takibi ve mobil uygulama entegrasyonu.',
    problem: 'Tatlıca Gıda, hızlı online sipariş sistemi ve teslimat takibi ile müşteri deneyimini iyileştirmek istiyordu.',
    solution: 'Next.js 14 ile ultra hızlı platform, Google Maps API ile canlı teslimat takibi ve Stripe ödeme entegrasyonu.',
    results: 'Sipariş hacmi %380 arttı, sayfa yükleme süresi 0.7 saniye oldu.',
    technologies: ['Next.js 14', 'PostgreSQL', 'Stripe', 'Google Maps API'],
    metrics: [
      { metric: 'Sipariş Hacmi', value: '+380%' },
      { metric: 'Sayfa Yükleme', value: '0.7s' },
    ],
    testimonial: 'Modern teknoloji ve hızlı performans sayesinde müşterilerimize mükemmel deneyim sunuyoruz.',
    client: 'Tatlıca Gıda Sahibi',
    year: '2024',
  },
  {
    slug: 'taraftarsu',
    title: 'Taraftarsu',
    category: 'WordPress Özelleştirme',
    description: 'Spor temalı içerik platformu için WordPress özelleştirmesi.',
    fullDescription: 'Custom post types, membership sistemi ve dinamik içerik yönetimi.',
    problem: 'Taraftarsu, spor içeriklerini yönetmek ve üye sistemi ile özel içerikler sunmak istiyordu.',
    solution: 'Custom WordPress plugin\'leri, membership sistemi ve dinamik içerik yönetimi ile platform geliştirdik.',
    results: 'Üye sayısı %600, sayfa görüntülenmeleri %450 arttı.',
    technologies: ['WordPress', 'Custom Plugins', 'Membership', 'PHP'],
    metrics: [
      { metric: 'Üye Sayısı', value: '+600%' },
      { metric: 'Sayfa Görüntüleme', value: '+450%' },
    ],
    testimonial: 'WordPress sitemizdeki özel geliştirmeler sayesinde üyelerimize benzersiz deneyim sunuyoruz.',
    client: 'Taraftarsu Editörü',
    year: '2023',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
