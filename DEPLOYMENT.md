# 🚀 Deployment Guide - Vercel ile Canlıya Alma

## 📋 Ön Gereksinimler

- GitHub hesabı
- Vercel hesabı (GitHub ile login olabilirsin - ücretsiz!)
- Git kurulu

## 🎯 Adım Adım Deployment

### 1. GitHub Repository Hazırlama

```bash
# Tüm değişiklikleri commit et
git add .
git commit -m "feat: Production ready with projects and optimizations"

# GitHub'a push et
git push origin master
```

### 2. Vercel'e Deploy

#### A) Vercel Dashboard Yöntemi (ÖNERİLEN)

1. **Vercel'e Git:** https://vercel.com
2. **Sign Up/Login:** GitHub hesabınla giriş yap
3. **New Project:** Tıkla
4. **Import Git Repository:** GitHub repo'nu seç
5. **Configure Project:**
   - Framework Preset: `Next.js` (otomatik algılar)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (otomatik)
   - Output Directory: `.next` (otomatik)
6. **Environment Variables:** (Opsiyonel - şimdilik atla)
   - Supabase, Resend için gerekli
   - Frontend çalışır bunlar olmadan
7. **Deploy:** Tıkla ve bekle! ☕

#### B) Vercel CLI Yöntemi (Alternatif)

```bash
# Vercel CLI kur
npm i -g vercel

# Login ol
vercel login

# Deploy et
vercel

# Production'a al
vercel --prod
```

### 3. Domain Bağlama (Opsiyonel)

Vercel'de:
1. Settings → Domains
2. Domain ekle (örn: `mtsoftware.com.tr`)
3. DNS ayarlarını yap (Vercel gösterir)
4. Bekle (5-10 dakika)

## 🔧 Environment Variables Ayarlama

Vercel Dashboard'da → Settings → Environment Variables

**Frontend için GEREKLI DEĞİL!** Ama istersen:

```env
NEXT_PUBLIC_SUPABASE_URL=your-url
SUPABASE_SERVICE_KEY=your-key
RESEND_API_KEY=your-key
RESEND_FROM_EMAIL=noreply@yourdomain.com
```

## 🎨 Build Sonrası Kontroller

Deploy bitince kontrol et:

- ✅ Ana sayfa yükleniyor mu?
- ✅ Projeler sayfası çalışıyor mu?
- ✅ Görseller görünüyor mu?
- ✅ Animasyonlar smooth mu?
- ✅ Mobile responsive mu?

## 🔄 Güncelleme Yapma

Çok basit! Her commit sonrası otomatik deploy olur:

```bash
# Değişiklik yap
git add .
git commit -m "update: New feature"
git push

# Vercel otomatik deploy eder! 🎉
```

## 📊 Vercel Dashboard

- **Overview:** Deploy durumu, analytics
- **Deployments:** Tüm deploylar, rollback
- **Settings:** Domain, env vars, performance
- **Analytics:** Visitor stats (ücretsiz 100k/ay)

## 🚨 Sorun Giderme

### Build Hataları

```bash
# Local'de test et
npm run build

# Hata varsa düzelt ve tekrar push et
git add .
git commit -m "fix: Build error"
git push
```

### Environment Variable Hataları

- Vercel'de env variables ekle
- Redeploy et (Settings → Deployments → ... → Redeploy)

### Domain Bağlanmıyor

- DNS propagation bekle (24 saate kadar)
- Nameserver'ları kontrol et
- Vercel support'a yaz (çok hızlılar)

## 🎉 Tamamdır!

Siten artık canlıda! URL:
- Default: `your-project.vercel.app`
- Custom: `yourdomain.com` (domain bağladıysan)

## 🔗 Faydalı Linkler

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Custom Domain Setup](https://vercel.com/docs/concepts/projects/domains)

---

**Not:** Netlify veya Cloudflare Pages ile de deploy edebilirsin, ama Vercel Next.js için en optimize! 🚀
