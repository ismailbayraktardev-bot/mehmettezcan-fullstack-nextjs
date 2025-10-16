import Header from '@/components/layout/Header'
import PageHero from '@/components/sections/PageHero'
import ContactForm from '@/components/forms/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata = {
  title: 'İletişim - Mehmet Tezcan Dijital Ajans',
  description: 'Bizimle iletişime geçin, projenizi konuşalım',
}

export default function IletisimPage() {
  return (
    <>
      <Header />
      <PageHero
        title="İletişim"
        description="Projeniz için bizimle iletişime geçin, hayalinizdeki dijital çözümü birlikte yaratılım"
        breadcrumbs={[{ label: 'İletişim', href: '/iletisim' }]}
        variant="gradient"
      />
      <main className="py-16 xl:py-32">
        <div className="max-w-[1200px] mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <div className="glass-strong rounded-3xl p-8">
              <h2 className="text-3xl font-display font-bold mb-8">İletişim Bilgileri</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">E-posta</div>
                    <a href="mailto:hello@mehmettezcan.com" className="text-text-secondary hover:text-primary transition-colors">
                      hello@mehmettezcan.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Telefon</div>
                    <a href="tel:+905551234567" className="text-text-secondary hover:text-primary transition-colors">
                      +90 555 123 45 67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Adres</div>
                    <div className="text-text-secondary">
                      İstanbul, Türkiye
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-xl font-display font-bold mb-4">Çalışma Saatleri</h3>
                <div className="space-y-2 text-text-secondary">
                  <div className="flex justify-between">
                    <span>Pazartesi - Cuma</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cumartesi</span>
                    <span>10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pazar</span>
                    <span>Kapalı</span>
                  </div>
                </div>
              </div>
            </div>

            {/* İletişim Formu */}
            <div className="glass-strong rounded-3xl p-8">
              <h2 className="text-3xl font-display font-bold mb-8">Mesaj Gönderin</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
