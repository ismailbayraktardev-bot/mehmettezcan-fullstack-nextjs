# Next.js Dijital Ajans Projesi - Claude Code Master Prompt

Merhaba! Modern bir dijital ajans web sitesi geliştireceğiz. 
Referans tasarım: @design-references/referance-website-open-herosectionbgVideo-HeaderAnimation.gif

## 🎯 Proje Özeti
WordPress sitesini (mehmettezcan.com) Next.js 15 + Sanity CMS + Supabase altyapısına taşıyacağız.

## 📚 Detaylı Dökümanlar
- @01-project-overview.md - Genel bakış ve hedefler
- @02-tech-stack.md - Teknolojiler (Supabase eklendi!)
- @03-design-system.md - Tasarım kuralları
- @04-content-strategy.md - İçerik yapısı  
- @05-components-list.md - Component detayları
- @06-agent-rules.md - Kod yazım kuralları
- @07-seo-marketing.md - SEO gereksinimleri
- @08-deployment.md - Deployment planı
- @09-database-api.md - Database yapısı (Supabase + Sanity)
- @10-api-endpoints.md - API endpoint'leri
- @11-utils-helpers.md - Helper fonksiyonlar
- @.env.example.md - Environment variables

## 🎨 Tasarım Referansları
design-references/ klasöründeki görsellere bak:
- Ana GIF dosyası tüm animasyonları gösteriyor
- Lume Studio tarzı dark theme
- Glassmorphism effects
- Smooth scroll animations

## 🚀 Başlangıç Adımları

1. **Proje Kurulumu**
```bash
   npx create-next-app@latest dijital-ajans --typescript --tailwind --app
   cd dijital-ajans
```

2. **Paketleri Yükle** (@02-tech-stack.md'den)
```bash
   npm install framer-motion @supabase/supabase-js sanity next-sanity resend lucide-react react-hook-form zod
```

3. **Environment Setup**
   - .env.local dosyası oluştur
   - @.env.example.md'deki değişkenleri ekle

4. **Klasör Yapısı**
```
   app/
   ├── (site)/
   │   ├── layout.tsx
   │   ├── page.tsx
   │   └── [pages]/
   ├── api/
   │   ├── contact/
   │   ├── newsletter/
   │   └── analytics/
   └── studio/
```

5. **Database Setup**
   - Supabase projesi oluştur
   - @09-database-api.md'deki tabloları oluştur
   - Sanity projesi başlat

## ⚡ Kritik Özellikler

1. **Hero Section** (GIF'teki gibi)
   - Video background
   - Glassmorphism overlay
   - Smooth reveal animation

2. **Header** (GIF'te gösterilen)
   - Transparent → Solid on scroll
   - Height animation
   - Logo scale animation
   - CTA değişimi

3. **Popup Form**
   - Her sayfadan erişilebilir
   - Supabase'e kayıt
   - Resend ile email

## 🎯 Build Sırası

1. Layout (Header/Footer)
2. Hero Section 
3. Database connections
4. Form components
5. Sanity integration
6. API routes
7. Animations

## ⚠️ Önemli Notlar
- Mobile-first approach
- Accessibility (a11y) 
- Performance optimization
- SEO best practices
- Type safety her yerde

Hazırsan başlayalım! İlk olarak Next.js kurulumu ve temel yapıyı oluşturalım.