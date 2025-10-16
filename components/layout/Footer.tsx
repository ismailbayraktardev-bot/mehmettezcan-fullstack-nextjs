import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Web Tasarım', href: '/hizmetler/web-tasarim' },
    { name: 'SEO Hizmetleri', href: '/hizmetler/seo' },
    { name: 'E-Ticaret', href: '/hizmetler/e-ticaret' },
    { name: 'Grafik Tasarım', href: '/hizmetler/grafik-tasarim' },
  ],
  company: [
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Projeler', href: '/projeler' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/iletisim' },
  ],
  legal: [
    { name: 'Gizlilik Politikası', href: '/gizlilik' },
    { name: 'Kullanım Koşulları', href: '/kullanim-kosullari' },
    { name: 'Çerez Politikası', href: '/cerez-politikasi' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info - İzmir & Ege Bölgesi SEO */}
          <div>
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              Mehmet Tezcan Dijital Ajans
            </h3>
            <p className="text-text-secondary mb-4">
              İzmir ve Ege bölgesinde dijital çözümler sunan ajans. Web tasarım, SEO, e-ticaret ve mobil uygulama hizmetleri.
            </p>
            <div className="space-y-2 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="flex-shrink-0" />
                <span>Alsancak, İzmir - Ege Bölgesi</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+905551234567" className="hover:text-primary transition-colors">
                  +90 555 123 45 67
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:hello@mehmettezcan.com" className="hover:text-primary transition-colors">
                  hello@mehmettezcan.com
                </a>
              </div>
            </div>

            {/* Lokal SEO Keywords */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-text-muted leading-relaxed">
                İzmir dijital ajans, Ege bölgesi web tasarım, İzmir SEO hizmetleri, Alsancak web ajansı,
                İzmir e-ticaret çözümleri, Ege web geliştirme
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Hizmetler</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Kurumsal</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmet Bölgeleri - SEO */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Hizmet Bölgelerimiz</h4>
            <p className="text-text-secondary text-sm mb-4">
              Ege bölgesinde dijital çözümler sunuyoruz
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>İzmir (Merkez)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Manisa</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Aydın</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Muğla</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Denizli</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Balıkesir</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link href="/iletisim" className="text-sm text-primary hover:text-primary-light transition-colors font-semibold">
                Teklif Alın →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Mehmet Tezcan. Tüm hakları saklıdır.
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>

          {/* Legal Links */}
          <div className="flex gap-4 text-sm">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
