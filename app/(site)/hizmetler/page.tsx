import Header from '@/components/layout/Header'
import PageHero from '@/components/sections/PageHero'
import Link from 'next/link'
import { services } from '@/data/services'

export const metadata = {
  title: 'Hizmetler - Mehmet Tezcan Dijital Ajans',
  description: 'Web tasarım, SEO, e-ticaret ve dijital pazarlama hizmetleri',
}

export default function HizmetlerPage() {
  return (
    <>
      <Header />
      <PageHero
        title="Hizmetlerimiz"
        description="İşinizi büyütmek için ihtiyacınız olan tüm dijital çözümler"
        breadcrumbs={[{ label: 'Hizmetler', href: '/hizmetler' }]}
        variant="gradient"
      />
      <main className="py-16 xl:py-32">
        <div className="max-w-[1400px] mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={index} href={`/hizmetler/${service.slug}`}>
                  <div className="glass-strong rounded-2xl p-8 hover:scale-105 hover:border-amber-500/30 transition-all duration-300 h-full cursor-pointer">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-text-secondary mb-6">
                      {service.summary}
                    </p>

                    <div className="mt-auto">
                      <span className="text-sm font-semibold text-amber-500 hover:text-amber-400">
                        Detaylı İncele →
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}
