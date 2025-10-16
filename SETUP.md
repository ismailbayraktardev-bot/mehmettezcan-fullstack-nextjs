# Dijital Ajans Projesi - Setup Dokümantasyonu

## Proje Bilgileri

**Proje Dizini:** `/f/donusum/dijital-ajans`
**Development Server:** http://localhost:3000
**Admin Panel (Sanity Studio):** http://localhost:3000/admin

## Kurulum Tamamlandı ✅

### Yüklü Teknolojiler
- ✅ Next.js 15.5.5
- ✅ React 19.1.0
- ✅ TypeScript 5.x
- ✅ Tailwind CSS 4.x
- ✅ Framer Motion (Animations)
- ✅ Supabase (Database)
- ✅ Sanity CMS (Content Management)
- ✅ Resend (Email Service)
- ✅ React Hook Form + Zod (Form Management)

### Oluşturulan Componentler
- ✅ Header (Animated header with scroll effects)
- ✅ Footer (Complete footer with links and newsletter)
- ✅ HeroSection (Full-screen hero with animations)
- ✅ ServicesSection (Services grid with glassmorphism)
- ✅ ContactForm (Multi-field contact form with validation)

### API Routes
- ✅ `/api/contact` - Contact form submission
- ✅ `/api/newsletter` - Newsletter subscription

## 🔧 Supabase Database Setup

### 1. Supabase Dashboard'a Git
https://supabase.com/dashboard/project/imfroppxqtkuhodmhevn

### 2. SQL Editor'a Git
Sol menüden **SQL Editor** > **New Query**

### 3. SQL'i Çalıştır
`supabase-schema.sql` dosyasındaki tüm SQL kodunu kopyala ve çalıştır.

Bu 3 tabloyu oluşturacak:
- `form_submissions` - İletişim formu gönderileri
- `email_subscribers` - Bülten aboneleri
- `page_analytics` - Sayfa analitikleri

### 4. Tabloları Kontrol Et
**Table Editor** bölümünden tabloların oluştuğunu doğrula.

## 🎨 Sanity CMS Admin Panel

### 1. Admin Panele Giriş

**URL:** http://localhost:3000/admin

### 2. İlk Giriş
Tarayıcıda admin URL'sini aç. Otomatik olarak Sanity login sayfasına yönlendirecek.

### 3. Google ile Giriş Yap
Sanity hesabınızla (Google ile) giriş yapın.

### 4. CORS Ayarı (ÖNEMLİ!)

Sanity Dashboard'a git:
https://www.sanity.io/manage/personal/project/q70j1t7c

**API Settings** > **CORS Origins** > **Add CORS Origin**

Ekle:
- `http://localhost:3000`
- `https://yourdomain.com` (production için)

**Allow credentials:** ✅ İşaretle

### 5. Content Oluştur

Admin panelde 3 content type var:
- **Projeler** - Portfolio projeleri
- **Blog Yazıları** - Blog içerikleri
- **Hizmetler** - Hizmet sayfaları

## 📧 Email Testi (Resend)

Contact form ve newsletter test etmek için:

1. Form doldur: http://localhost:3000
2. Console'da hata yoksa başarılı
3. Supabase Table Editor'da veriyi gör
4. Resend Dashboard'da email'i kontrol et: https://resend.com/emails

**Not:** `onboarding@resend.dev` test adresi. Production'da kendi domain'inizi kullanın.

## 🚀 Development Commands

```bash
# Development server başlat
npm run dev

# Build (production)
npm run build

# Production'da çalıştır
npm start

# Linting
npm run lint
```

## 📁 Proje Yapısı

```
dijital-ajans/
├── app/
│   ├── admin/[[...index]]/     # Sanity Studio
│   │   └── page.tsx
│   ├── api/
│   │   ├── contact/           # Contact form API
│   │   └── newsletter/        # Newsletter API
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Homepage
│   └── globals.css            # Global styles
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Animated header
│   │   └── Footer.tsx         # Footer with links
│   ├── sections/
│   │   ├── HeroSection.tsx    # Hero with animations
│   │   └── ServicesSection.tsx # Services grid
│   └── forms/
│       └── ContactForm.tsx    # Contact form
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts          # Client-side Supabase
│   │   ├── server.ts          # Server-side Supabase
│   │   └── types.ts           # TypeScript types
│   ├── sanity/
│   │   ├── config.ts          # Sanity config
│   │   └── client.ts          # Sanity client
│   └── utils/
│       └── cn.ts              # Utility functions
│
├── sanity/
│   └── schemas/
│       ├── index.ts           # Schema exports
│       ├── project.ts         # Project schema
│       ├── blogPost.ts        # Blog post schema
│       └── service.ts         # Service schema
│
├── public/                    # Static assets
├── .env.local                 # Environment variables (DOLU!)
├── tailwind.config.ts         # Tailwind configuration
├── sanity.config.ts           # Sanity Studio config
└── supabase-schema.sql        # Database schema
```

## 🎯 Sıradaki Adımlar

### 1. Database Setup (5 dakika)
- Supabase SQL Editor'da `supabase-schema.sql`'i çalıştır

### 2. Sanity CORS Setup (2 dakika)
- Sanity dashboard'da `localhost:3000` ekle

### 3. Test Et
- Contact form doldur
- Newsletter subscribe et
- Admin panele giriş yap
- İçerik oluştur

### 4. Content Ekle
Admin panelde:
- 3-4 proje ekle
- 2-3 blog yazısı ekle
- Hizmetleri oluştur

### 5. Design İyileştirmeleri
- Video background ekle (Hero section)
- Daha fazla animation
- Loading states
- Error handling

## 🔐 Credentials

**Supabase:**
- URL: https://imfroppxqtkuhodmhevn.supabase.co
- Project ID: imfroppxqtkuhodmhevn

**Sanity:**
- Project ID: q70j1t7c
- Dataset: production

**Resend:**
- API Key: Configured ✅
- From Email: onboarding@resend.dev (test)

## ⚠️ Önemli Notlar

1. **CORS:** Sanity'de mutlaka `localhost:3000` ekle!
2. **Database:** SQL'i çalıştırmayı unutma!
3. **Email:** Test için `onboarding@resend.dev` kullanılıyor
4. **Production:** Domain'inizi Sanity CORS'a ekle

## 🐛 Sorun Giderme

### Sanity'de "CORS error"
→ Sanity dashboard'da CORS ayarını kontrol et

### Form submit çalışmıyor
→ Supabase tablolarını kontrol et (SQL çalıştırıldı mı?)

### Admin panel açılmıyor
→ Browser console'da hata var mı kontrol et

### Email gönderilmiyor
→ Resend dashboard'da quota'yı kontrol et

## 📞 Destek

Sorun yaşarsan:
1. Console'daki hataları kontrol et
2. Network tab'inde API response'ları incele
3. Supabase logs'u kontrol et
4. Sanity Studio'da CORS ayarını doğrula

---

**Proje hazır! 🎉**

Development server çalışıyor: http://localhost:3000
Admin panel: http://localhost:3000/admin
