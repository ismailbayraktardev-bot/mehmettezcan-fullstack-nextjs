import { Code, Search, ShoppingCart, Palette, Share2, Smartphone, type LucideIcon } from 'lucide-react'

export interface Service {
  slug: string
  icon: LucideIcon
  title: string
  summary: string
  description: string
  benefits: string[]
  technologies: string[]
  features: {
    title: string
    description: string
  }[]
  relatedProjects: string[] // project slugs
  faqs: {
    question: string
    answer: string
  }[]
}

export const services: Service[] = [
  {
    slug: 'web-tasarim',
    icon: Code,
    title: 'Web Tasarım & Geliştirme',
    summary: 'Modern, hızlı ve SEO uyumlu web siteleri ile dijital varlığınızı güçlendirin',
    description: 'İşletmenizin dijital yüzü olan web sitenizi, modern teknolojiler kullanarak kullanıcı deneyimini ön planda tutan bir şekilde tasarlıyor ve geliştiriyoruz. Responsive tasarım, hızlı yükleme süreleri ve SEO optimizasyonu ile arama motorlarında üst sıralarda yer almanızı sağlıyoruz.',
    benefits: [
      'Profesyonel ve Modern Tasarım',
      'Mobil Uyumlu Responsive Yapı',
      'Hızlı Sayfa Yükleme Süreleri',
      'SEO Optimizasyonu',
      'Güvenli ve Güncel Teknolojiler',
      'Kolay İçerik Yönetimi',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'WordPress', 'Node.js'],
    features: [
      {
        title: 'Özel Tasarım',
        description: 'Markanıza özel, özgün ve etkileyici web tasarımları',
      },
      {
        title: 'Performans Odaklı',
        description: 'Hızlı yükleme ve optimize edilmiş kod yapısı',
      },
      {
        title: 'SEO Uyumlu',
        description: 'Arama motorları için optimize edilmiş içerik ve yapı',
      },
      {
        title: 'Responsive Tasarım',
        description: 'Tüm cihazlarda mükemmel görünüm ve kullanım',
      },
    ],
    relatedProjects: ['metsan-technical', 'tatlica-gida'],
    faqs: [
      {
        question: 'İzmir\'de web tasarım hizmeti veren ajanslar arasında sizi farklı kılan nedir?',
        answer: 'Modern teknolojiler (Next.js, React) kullanarak hızlı, SEO uyumlu ve mobil cihazlarda mükemmel çalışan web siteleri geliştiriyoruz. İzmir ve Ege bölgesindeki işletmelere özel, bölgesel SEO stratejileri ve yerel pazar analiziyle dijital varlığınızı güçlendiriyoruz.',
      },
      {
        question: 'Web sitemi ne kadar sürede teslim alırım?',
        answer: 'Projenizin kapsamına göre standart bir kurumsal web sitesi 3-4 hafta, e-ticaret siteleri 4-6 hafta içinde teslim edilmektedir. İzmir içi müşterilerimizle yüz yüze toplantılar yaparak süreci hızlandırabiliyoruz.',
      },
      {
        question: 'Web sitemi kendim güncelleyebilir miyim?',
        answer: 'Evet, WordPress veya custom admin panel ile içerik yönetimini kolayca yapabilirsiniz. Teslim sonrası İzmir\'de ofisimizde veya online eğitim desteği sunuyoruz.',
      },
      {
        question: 'Ege bölgesindeki firmalara özel SEO çalışması yapıyor musunuz?',
        answer: 'Kesinlikle! İzmir, Manisa, Aydın, Muğla gibi Ege bölgesi şehirlerine özel lokal SEO stratejileri uyguluyoruz. Bölgesel anahtar kelimeler ve Google My Business optimizasyonu ile yerel müşterilere ulaşmanızı sağlıyoruz.',
      },
      {
        question: 'Web tasarım fiyatları ne kadar?',
        answer: 'Fiyatlarımız projenizin kapsamına göre değişmektedir. Basit tanıtım siteleri 15.000 TL\'den, kurumsal siteler 25.000 TL\'den, e-ticaret siteleri ise 40.000 TL\'den başlamaktadır. İzmir\'deki ofisimizde ücretsiz ön görüşme yapabilirsiniz.',
      },
      {
        question: 'Hosting ve domain hizmetleri de veriyor musunuz?',
        answer: 'Evet, güvenilir Türk hosting firmaları ile çalışarak hosting, domain tescil ve SSL sertifikası hizmetlerini paket içinde sunuyoruz. İzmir\'deki sunucularımızla hızlı erişim garantisi veriyoruz.',
      },
    ],
  },
  {
    slug: 'seo-dijital-pazarlama',
    icon: Search,
    title: 'SEO & Dijital Pazarlama',
    summary: 'Arama motorlarında üst sıralarda yer alın ve hedef kitlenize ulaşın',
    description: 'Dijital pazarlama stratejileri ve SEO çalışmalarıyla işletmenizi arama motorlarında öne çıkarıyoruz. Anahtar kelime analizi, içerik optimizasyonu ve link building ile organik trafiğinizi artırıyor, dönüşüm oranlarınızı yükseltiyoruz.',
    benefits: [
      'Organik Trafik Artışı',
      'Arama Motoru Sıralamasında Yükseliş',
      'Hedef Kitleye Doğrudan Erişim',
      'Marka Bilinirliği Artışı',
      'Ölçülebilir Sonuçlar',
      'Uzun Vadeli Yatırım Getirisi',
    ],
    technologies: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Google Ads', 'Meta Ads'],
    features: [
      {
        title: 'Anahtar Kelime Analizi',
        description: 'Sektörünüze özel detaylı anahtar kelime araştırması',
      },
      {
        title: 'On-Page SEO',
        description: 'Site içi optimizasyon ve içerik iyileştirme',
      },
      {
        title: 'Link Building',
        description: 'Kaliteli backlink stratejileri ve otorite kazanımı',
      },
      {
        title: 'Raporlama & Analiz',
        description: 'Detaylı performans raporları ve sürekli iyileştirme',
      },
    ],
    relatedProjects: ['billhom-trendyol'],
    faqs: [
      {
        question: 'İzmir\'de SEO hizmeti almanın avantajları nelerdir?',
        answer: 'İzmir ve Ege bölgesinde faaliyet gösteren işletmelerin yerel SEO ile bölgesel müşterilere ulaşması çok daha kolaydır. Google My Business optimizasyonu, yerel anahtar kelimeler (İzmir + hizmet adı) ve bölgesel backlink stratejileri ile Ege bölgesinde görünürlüğünüzü artırıyoruz.',
      },
      {
        question: 'SEO çalışmaları ne kadar sürede sonuç verir?',
        answer: 'SEO organik bir süreçtir. İlk sonuçları 2-3 ay içinde görmeye başlarsınız. 6 ay sonunda ise stabil trafik artışı ve üst sıralama pozisyonları elde edersiniz. İzmir\'deki lokal rekabet avantajıyla daha hızlı sonuç almanız mümkündür.',
      },
      {
        question: 'Hangi SEO araçlarını kullanıyorsunuz?',
        answer: 'Google Analytics, Google Search Console, SEMrush, Ahrefs ve lokal SEO için Google My Business gibi profesyonel araçlar kullanıyoruz. İzmir ve Ege bölgesi için özel anahtar kelime analizi yapıyoruz.',
      },
      {
        question: 'SEO fiyatları nasıl belirleniyor?',
        answer: 'SEO paketlerimiz aylık 8.000 TL\'den başlamaktadır. Fiyatlar; hedef anahtar kelime sayısı, rekabet seviyesi ve içerik üretim ihtiyacına göre değişir. İzmir\'deki ofisimizde detaylı SEO analizi ve teklif sunuyoruz.',
      },
      {
        question: 'E-ticaret siteleri için özel SEO stratejiniz var mı?',
        answer: 'Evet, e-ticaret SEO\'su farklı stratejiler gerektirir. Ürün sayfası optimizasyonu, kategori SEO\'su, yapısal veri işaretleme ve Google Shopping entegrasyonu ile satışlarınızı artırıyoruz.',
      },
    ],
  },
  {
    slug: 'e-ticaret',
    icon: ShoppingCart,
    title: 'E-Ticaret Çözümleri',
    summary: 'Satışlarınızı artıracak, kullanıcı dostu online mağazalar oluşturun',
    description: 'E-ticaret sitenizi modern teknolojilerle kuruyor, ödeme entegrasyonları, stok yönetimi ve kargo entegrasyonları ile eksiksiz bir online satış platformu sunuyoruz. Shopify, WooCommerce veya custom çözümlerle işinize en uygun e-ticaret altyapısını oluşturuyoruz.',
    benefits: [
      'Kolay Ürün Yönetimi',
      'Güvenli Ödeme Sistemleri',
      'Otomatik Stok Takibi',
      'Kargo Entegrasyonları',
      'Mobil Uyumlu Alışveriş',
      'Detaylı Satış Raporları',
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayTR', 'Next.js', 'API Integration'],
    features: [
      {
        title: 'Platform Seçimi',
        description: 'İşinize uygun e-ticaret platformu danışmanlığı',
      },
      {
        title: 'Ödeme Entegrasyonu',
        description: 'Güvenli ve çoklu ödeme yöntemleri',
      },
      {
        title: 'Stok & Kargo',
        description: 'Otomatik stok yönetimi ve kargo entegrasyonları',
      },
      {
        title: 'Mobil Optimizasyon',
        description: 'Mobil cihazlarda mükemmel alışveriş deneyimi',
      },
    ],
    relatedProjects: ['clayspire', 'ruzgar-lastik', 'md-mobilya'],
    faqs: [
      {
        question: 'İzmir\'de e-ticaret sitesi kurmak için ne kadar bütçe gerekir?',
        answer: 'Shopify tabanlı e-ticaret siteleri 40.000 TL\'den, WooCommerce çözümleri 35.000 TL\'den, custom Next.js e-ticaret platformları ise 80.000 TL\'den başlamaktadır. İzmir\'deki işletmelere özel ödeme planları sunuyoruz.',
      },
      {
        question: 'Hangi ödeme sistemlerini entegre ediyorsunuz?',
        answer: 'Türkiye\'de yaygın kullanılan tüm ödeme sistemlerini (iyzico, PayTR, PayU, Stripe) ve banka sanal pos entegrasyonlarını yapıyoruz. İzmir ve Ege bölgesindeki bankalarla doğrudan çalışma imkanımız var.',
      },
      {
        question: 'Kargo entegrasyonları nasıl çalışıyor?',
        answer: 'Yurtiçi Kargo, MNG, Aras Kargo, PTT gibi tüm kargo firmalarıyla API entegrasyonu sağlıyoruz. Otomatik kargo takip numarası gönderimi ve toplu kargo etiketi yazdırma özellikleri mevcuttur.',
      },
      {
        question: 'Shopify mu yoksa WooCommerce mi tercih etmeliyim?',
        answer: 'Shopify uluslararası satış ve kolay yönetim için idealdir. WooCommerce ise Türkiye\'de vergi ve fatura yönetimi için daha uygundur. İzmir\'deki işletmelere ihtiyaçlarına göre danışmanlık veriyoruz.',
      },
      {
        question: 'E-ticaret sitemi sosyal medyaya entegre edebilir miyim?',
        answer: 'Evet, Instagram Shopping, Facebook Shop ve TikTok Shop entegrasyonları ile sosyal medyadan doğrudan satış yapabilirsiniz. İzmir ve Ege bölgesi pazarına özel sosyal ticaret stratejileri uyguluyoruz.',
      },
    ],
  },
  {
    slug: 'grafik-tasarim',
    icon: Palette,
    title: 'Grafik Tasarım',
    summary: 'Markanızı yansıtan özgün ve profesyonel tasarımlar ile fark yaratın',
    description: 'Logo tasarımından kurumsal kimlik çalışmalarına, sosyal medya görsellerinden baskı tasarımlarına kadar tüm grafik tasarım ihtiyaçlarınıza çözüm sunuyoruz. Markanızın değerlerini yansıtan, özgün ve profesyonel tasarımlar yaratıyoruz.',
    benefits: [
      'Profesyonel Logo Tasarımı',
      'Kurumsal Kimlik Paketleri',
      'Sosyal Medya Görselleri',
      'Baskı Tasarımları',
      'Dijital Reklamlar',
      'Sınırsız Revizyon',
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'After Effects', 'CorelDRAW'],
    features: [
      {
        title: 'Logo Tasarımı',
        description: 'Özgün ve akılda kalıcı logo çalışmaları',
      },
      {
        title: 'Kurumsal Kimlik',
        description: 'Kartvizit, antetli kağıt, zarf ve tüm kurumsal materyaller',
      },
      {
        title: 'Sosyal Medya',
        description: 'Instagram, Facebook, LinkedIn için profesyonel görseller',
      },
      {
        title: 'Baskı Tasarımları',
        description: 'Broşür, katalog, afiş ve billboard tasarımları',
      },
    ],
    relatedProjects: [],
    faqs: [
      {
        question: 'Logo tasarımı ne kadar sürede teslim edilir?',
        answer: 'Logo tasarım süreci ortalama 1-2 hafta sürmektedir. İlk konseptler 3-5 iş günü içinde sunulur. İzmir içi müşterilerimizle yüz yüze toplantılarla süreci daha verimli yönetebiliyoruz.',
      },
      {
        question: 'Kurumsal kimlik paketi neler içerir?',
        answer: 'Logo, kartvizit, antetli kağıt, zarf, e-imza, sosyal medya profil görselleri, email imzası ve marka kullanım kılavuzu içerir. İzmir ve Ege bölgesindeki matbaalara hazır baskı dosyaları teslim ediyoruz.',
      },
      {
        question: 'Grafik tasarım fiyatları nasıl belirleniyor?',
        answer: 'Logo tasarımı 8.000 TL\'den, kurumsal kimlik paketi 15.000 TL\'den, sosyal medya tasarım paketi (aylık) 5.000 TL\'den başlamaktadır. İzmir\'deki ajansımızdan detaylı fiyat teklifi alabilirsiniz.',
      },
      {
        question: 'Sosyal medya için düzenli tasarım desteği veriyor musunuz?',
        answer: 'Evet, aylık sosyal medya tasarım paketlerimiz bulunmaktadır. Instagram, Facebook ve LinkedIn için profesyonel görseller, story tasarımları ve reklam kreatifler üretiyoruz.',
      },
      {
        question: 'Hangi tasarım programlarını kullanıyorsunuz?',
        answer: 'Adobe Illustrator, Photoshop, Figma, After Effects gibi endüstri standardı profesyonel tasarım programları kullanıyoruz. Tüm dosyalar kaynak dosya (AI, PSD) olarak teslim edilir.',
      },
    ],
  },
  {
    slug: 'sosyal-medya',
    icon: Share2,
    title: 'Sosyal Medya Yönetimi',
    summary: 'Sosyal medyada etkili varlık oluşturun ve takipçi kitlenizi büyütün',
    description: 'Sosyal medya hesaplarınızı profesyonel bir şekilde yönetiyor, içerik stratejisi oluşturuyor ve reklam kampanyalarınızı optimize ediyoruz. Instagram, Facebook, LinkedIn ve diğer platformlarda markanızın dijital varlığını güçlendiriyoruz.',
    benefits: [
      'Profesyonel İçerik Üretimi',
      'Düzenli Paylaşım Takvimi',
      'Community Yönetimi',
      'Reklam Kampanyaları',
      'Influencer İşbirlikleri',
      'Detaylı Analiz Raporları',
    ],
    technologies: ['Meta Business Suite', 'Instagram', 'Facebook', 'LinkedIn', 'Hootsuite', 'Canva'],
    features: [
      {
        title: 'İçerik Stratejisi',
        description: 'Markanıza özel içerik planlama ve üretimi',
      },
      {
        title: 'Topluluk Yönetimi',
        description: 'Aktif takipçi etkileşimi ve mesaj yönetimi',
      },
      {
        title: 'Reklam Kampanyaları',
        description: 'Hedefli sosyal medya reklam kampanyaları',
      },
      {
        title: 'Analiz & Raporlama',
        description: 'Performans takibi ve aylık detaylı raporlar',
      },
    ],
    relatedProjects: ['taraftarsu'],
    faqs: [
      {
        question: 'Sosyal medya yönetimi hizmeti neler içerir?',
        answer: 'İçerik üretimi, paylaşım takvimi oluşturma, community yönetimi (yorum ve mesaj yanıtlama), reklam kampanyaları yönetimi ve aylık performans raporları içerir. İzmir ve Ege bölgesi hedef kitlesine özel içerik stratejileri geliştiriyoruz.',
      },
      {
        question: 'Hangi sosyal medya platformlarını yönetiyorsunuz?',
        answer: 'Instagram, Facebook, LinkedIn, Twitter (X), TikTok ve YouTube platformlarında profesyonel sosyal medya yönetimi hizmeti sunuyoruz. İzmir pazarına en uygun platformları belirliyoruz.',
      },
      {
        question: 'Sosyal medya yönetimi fiyatları ne kadar?',
        answer: 'Aylık sosyal medya yönetim paketlerimiz 12.000 TL\'den başlamaktadır. Paket içinde 20 gönderi, story tasarımları ve community yönetimi bulunur. İzmir\'deki ajansımızdan özel teklifler alabilirsiniz.',
      },
      {
        question: 'Reklam bütçesini siz mi belirleyeceksiniz?',
        answer: 'Reklam bütçenizi hedeflerinize ve sektörünüze göre öneriyoruz ancak nihai kararı siz verirsiniz. İzmir ve Ege bölgesi için rekabetçi reklam stratejileri ile bütçenizi optimize ediyoruz.',
      },
      {
        question: 'Sosyal medya analiz raporları ne sıklıkla sunuluyor?',
        answer: 'Aylık detaylı performans raporları sunuyoruz. Raporda; erişim, etkileşim, takipçi artışı, reklam performansı ve rakip analizi yer alır. İzmir\'deki ofisimizde aylık strateji toplantıları yapabiliriz.',
      },
    ],
  },
  {
    slug: 'mobil-uygulama',
    icon: Smartphone,
    title: 'Mobil Uygulama Geliştirme',
    summary: 'iOS ve Android platformlarında kullanıcılarınıza ulaşın',
    description: 'Native veya cross-platform teknolojiler kullanarak iOS ve Android uygulamaları geliştiriyoruz. Kullanıcı deneyimini ön planda tutan, performanslı ve güvenli mobil uygulamalar ile işletmenizi mobil dünyaya taşıyoruz.',
    benefits: [
      'iOS & Android Geliştirme',
      'Cross-Platform Çözümler',
      'Kullanıcı Dostu Arayüz',
      'Yüksek Performans',
      'Push Notification',
      'App Store Yayınlama',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Push Notifications'],
    features: [
      {
        title: 'Platform Seçimi',
        description: 'Native veya cross-platform çözüm danışmanlığı',
      },
      {
        title: 'UI/UX Tasarımı',
        description: 'Kullanıcı odaklı mobil arayüz tasarımı',
      },
      {
        title: 'Backend Entegrasyonu',
        description: 'API geliştirme ve veri yönetimi',
      },
      {
        title: 'Yayınlama & Destek',
        description: 'App Store ve Google Play yayınlama süreci',
      },
    ],
    relatedProjects: ['tatlica-gida'],
    faqs: [
      {
        question: 'Mobil uygulama geliştirme süreci nasıl işler?',
        answer: 'Fikir toplantısı, UI/UX tasarım, geliştirme (iOS & Android), test ve App Store/Google Play yayınlama aşamalarından oluşur. İzmir\'deki ofisimizde yüz yüze toplantılarla süreci yönetiyoruz. Ortalama 3-6 ay sürmektedir.',
      },
      {
        question: 'Native mi yoksa cross-platform mı tercih etmeliyim?',
        answer: 'Yüksek performans gereken uygulamalar için Native (Swift/Kotlin), hızlı ve bütçe dostu çözümler için React Native veya Flutter öneririz. İzmir\'deki işletmelere ihtiyaçlarına göre danışmanlık veriyoruz.',
      },
      {
        question: 'Mobil uygulama fiyatları ne kadar?',
        answer: 'Basit uygulamalar 80.000 TL\'den, orta seviye uygulamalar 150.000 TL\'den, karmaşık uygulamalar ise 250.000 TL\'den başlamaktadır. İzmir ve Ege bölgesindeki firmalar için özel ödeme planları sunuyoruz.',
      },
      {
        question: 'App Store ve Google Play yayınlama işlemlerini yapıyor musunuz?',
        answer: 'Evet, developer hesabı açma, uygulama yükleme, metadata optimizasyonu ve yayınlama sürecinin tamamını yönetiyoruz. Her iki platform için gerekli tüm adımları tamamlıyoruz.',
      },
      {
        question: 'Mobil uygulama için backend geliştirme de yapıyor musunuz?',
        answer: 'Evet, Node.js, Firebase veya özel API geliştirme hizmeti sunuyoruz. Kullanıcı yönetimi, veri tabanı, push notification ve ödeme entegrasyonları dahil full-stack çözümler üretiyoruz.',
      },
      {
        question: 'Uygulama yayınlandıktan sonra destek veriyor musunuz?',
        answer: 'Evet, aylık bakım ve destek paketlerimiz bulunmaktadır. Hata düzeltme, güvenlik güncellemeleri, yeni özellik ekleme ve performans optimizasyonu hizmetleri sunuyoruz. İzmir içi acil destek imkanımız var.',
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}
