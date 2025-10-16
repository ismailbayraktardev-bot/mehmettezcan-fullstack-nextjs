import Header from '@/components/layout/Header'
import PageHero from '@/components/sections/PageHero'

export const metadata = {
  title: 'Blog - Mehmet Tezcan Dijital Ajans',
  description: 'Dijital dünyadan haberler, ipuçları ve trendler',
}

// Örnek blog yazıları - Sanity'den çekilecek
const posts = [
  {
    title: 'Web Tasarımında 2024 Trendleri',
    excerpt: 'Bu yıl web tasarımında öne çıkan trendler neler?',
    date: '15 Ekim 2024',
    category: 'Web Tasarım',
  },
  {
    title: 'SEO İçin En İyi Pratikler',
    excerpt: 'Arama motorlarında üst sıralara çıkmanın yolları',
    date: '10 Ekim 2024',
    category: 'SEO',
  },
  {
    title: 'E-Ticarette Başarının Sırları',
    excerpt: 'Online mağazanızı nasıl büyütürsünüz?',
    date: '5 Ekim 2024',
    category: 'E-Ticaret',
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <PageHero
        title="Blog"
        description="Dijital dünyadan haberler, ipuçları ve trendler"
        breadcrumbs={[{ label: 'Blog', href: '/blog' }]}
        variant="gradient"
      />
      <main className="py-16 xl:py-32">
        <div className="max-w-[1200px] mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="glass-strong rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5" />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="text-primary">{post.category}</span>
                    <span className="text-text-muted">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
