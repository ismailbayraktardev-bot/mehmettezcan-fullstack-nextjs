import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import WorkProcessSection from '@/components/sections/WorkProcessSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import FAQSection from '@/components/sections/FAQSection'

const homepageFAQs = [
  {
    question: 'İzmir\'de dijital ajans hizmeti almanın avantajları nelerdir?',
    answer: 'İzmir ve Ege bölgesinde yerel olarak hizmet vermemiz, yüz yüze toplantılar, bölgesel pazar bilgisi ve lokal SEO avantajları sağlar. Hızlı iletişim ve İzmir\'deki işletmelerin ihtiyaçlarını daha iyi anlamamız ile projelerde daha etkili sonuçlar elde edersiniz.',
  },
  {
    question: 'Hangi hizmetleri sunuyorsunuz?',
    answer: 'Web tasarım ve geliştirme, SEO ve dijital pazarlama, e-ticaret çözümleri, grafik tasarım, sosyal medya yönetimi ve mobil uygulama geliştirme hizmetleri sunuyoruz. İzmir ve Ege bölgesindeki işletmelere özel entegre dijital çözümler üretiyoruz.',
  },
  {
    question: 'Projemin maliyeti ne kadar olur?',
    answer: 'Proje maliyetleri ihtiyaçlarınıza göre değişmektedir. Web siteleri 15.000 TL\'den, e-ticaret siteleri 40.000 TL\'den, mobil uygulamalar 80.000 TL\'den başlamaktadır. İzmir\'deki ofisimizde ücretsiz ön görüşme ve detaylı teklif alabilirsiniz.',
  },
  {
    question: 'Proje teslim süresi ne kadar?',
    answer: 'Standart web siteleri 3-4 hafta, e-ticaret projeleri 4-6 hafta, mobil uygulamalar 3-6 ay içinde teslim edilmektedir. İzmir içi müşterilerimizle yüz yüze çalışarak süreci hızlandırabiliyoruz.',
  },
  {
    question: 'Proje sonrası destek veriyor musunuz?',
    answer: 'Evet, tüm projelerimizde 3 ay ücretsiz teknik destek sunuyoruz. Sonrasında aylık bakım paketlerimiz bulunmaktadır. İzmir\'deki ofisimizden 7/24 destek alabilirsiniz.',
  },
  {
    question: 'Ege bölgesindeki müşterileriniz kimler?',
    answer: 'İzmir, Manisa, Aydın, Muğla, Denizli gibi Ege bölgesi şehirlerindeki KOBİ\'ler, e-ticaret firmaları, üretim şirketleri ve hizmet sektörü işletmeleri ile çalışıyoruz. Yerel SEO ve bölgesel pazarlama stratejileriyle müşterilerimizin dijital varlıklarını güçlendiriyoruz.',
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <WorkProcessSection />
        <ProjectsSection />
        <FAQSection
          faqs={homepageFAQs}
          title="Sık Sorulan Sorular"
          description="Dijital ajans hizmetlerimiz hakkında merak ettikleriniz"
        />
      </main>

      <Footer />
    </>
  )
}
