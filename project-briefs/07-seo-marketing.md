# SEO & Marketing Stratejisi

## Technical SEO

### Meta Tags
```typescript
// Her sayfa için dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: `${pageTitle} | Dijital Ajans`,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      images: ['/og-image.jpg'],
    },
  }
}
```

### Structured Data
- Organization schema
- Service schema
- Blog post schema
- FAQ schema

### Performance
- Core Web Vitals optimizasyonu
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

### Sitemap
- Dynamic sitemap generation
- Priority levels
- Change frequency

## Content SEO

### URL Structure
- /hizmetler/web-tasarim
- /projeler/marka-adi-proje
- /blog/baslik-slug

### Heading Hierarchy
- H1: Sayfa başlığı (1 adet)
- H2: Ana bölümler
- H3: Alt başlıklar

### Internal Linking
- Related services
- Related projects
- Blog categories

## Marketing Features

### Analytics
- Google Analytics 4
- Google Tag Manager
- Conversion tracking
- Event tracking

### Social Media
- OG tags for sharing
- Twitter cards
- Social share buttons
- Instagram feed integration

### Lead Generation
- Exit intent popup
- Newsletter signup
- Free consultation CTA
- Resource downloads

### A/B Testing
- Headlines
- CTA buttons
- Form fields
- Page layouts