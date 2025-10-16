import Header from '@/components/layout/Header'
import PageHero from '@/components/sections/PageHero'

export const metadata = {
  title: 'Hakkımızda - Mehmet Tezcan Dijital Ajans',
  description: 'Dijital dünyada fark yaratan projeler üretiyoruz',
}

export default function HakkimizdaPage() {
  return (
    <>
      <Header />
      <PageHero
        title="Hakkımızda"
        description="Modern web teknolojileri ile markanızı dijital dünyada zirveye taşıyoruz"
        breadcrumbs={[{ label: 'Hakkımızda', href: '/hakkimizda' }]}
        variant="gradient"
      />
      <main className="py-16 xl:py-32">
        <div className="max-w-[1200px] mx-auto px-6">

          <div className="glass-strong rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Biz Kimiz?</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Mehmet Tezcan Dijital Ajans olarak, markaların dijital dünyada güçlü bir varlık oluşturmasına yardımcı oluyoruz.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Modern web tasarımından SEO'ya, e-ticaretten sosyal medya yönetimine kadar geniş bir yelpazede hizmet sunuyoruz.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Misyonumuz</h2>
                <p className="text-text-secondary leading-relaxed">
                  İşletmelerin dijital dönüşüm sürecinde yanlarında olmak, yaratıcı çözümler sunmak ve uzun vadeli başarılarına katkıda bulunmak.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
              <div className="text-center">
                <div className="text-4xl font-display font-bold gradient-text mb-2">150+</div>
                <div className="text-text-secondary">Tamamlanan Proje</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold gradient-text mb-2">98%</div>
                <div className="text-text-secondary">Müşteri Memnuniyeti</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold gradient-text mb-2">5+</div>
                <div className="text-text-secondary">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
