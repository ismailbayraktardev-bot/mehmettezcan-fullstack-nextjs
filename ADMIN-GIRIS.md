# Admin Panele Giriş Rehberi

## Sanity Studio Admin Panel

### URL
**Development:** http://localhost:3000/admin

---

## ⚠️ İlk Kurulum (Sadece 1 Kez Yapılır)

### 1. Sanity Dashboard CORS Ayarı

**Neden Gerekli:** Tarayıcı güvenliği için Sanity'nin hangi URL'lerden erişim kabul edeceğini belirtmemiz gerekiyor.

**Adımlar:**

1. **Sanity Dashboard'a Git:**
   ```
   https://www.sanity.io/manage/personal/project/q70j1t7c
   ```

2. **Sol Menüden:** API > CORS Origins

3. **Add CORS origin** butonuna tıkla

4. **Origin ekle:**
   ```
   http://localhost:3000
   ```

5. **Ayarları işaretle:**
   - ✅ Allow credentials (Mutlaka işaretle!)

6. **Save** butonuna bas

7. **Production için de ekle (deployment'tan sonra):**
   ```
   https://yourdomain.com
   ```

---

## 🔐 Admin Panele Giriş

### 1. Admin URL'ini Aç
```
http://localhost:3000/admin
```

### 2. Giriş Yap

Sanity otomatik olarak login sayfasına yönlendirecek.

**Giriş Seçenekleri:**
- Google ile giriş (Önerilen)
- GitHub ile giriş
- Email/Password

**İlk Giriş İçin:**
- Sanity hesabın yoksa **Sign up** ile hesap oluştur (ücretsiz)
- Google hesabınla giriş yapabilirsin

### 3. Admin Panele Hoş Geldin!

Giriş yaptıktan sonra Sanity Studio arayüzünü göreceksin.

---

## 📝 İçerik Türleri

Admin panelde 3 content type var:

### 1. Projeler (Projects)
Portfolio projeleri ekle:
- Proje adı
- Müşteri
- Kategori (Web, E-ticaret, SEO, vb.)
- Görsel galeri
- Proje detayları
- Kullanılan teknolojiler

### 2. Blog Yazıları (Blog Posts)
Blog içerikleri:
- Başlık
- Özet
- İçerik (Rich text editor)
- Öne çıkan görsel
- Kategori
- Etiketler

### 3. Hizmetler (Services)
Hizmet sayfaları:
- Hizmet adı
- Açıklama
- Özellikler listesi
- Fiyat
- Görsel

---

## 🎨 İçerik Ekleme

### Yeni İçerik Oluşturma:

1. Sol menüden content type seç (Örn: Projeler)
2. Sağ üstteki **Create** butonuna tıkla
3. Formu doldur
4. **Publish** butonuna bas

### Görsel Yükleme:

1. Image alanına tıkla
2. Dosya seç veya sürükle-bırak
3. Görsel otomatik olarak Sanity CDN'e yüklenir

### Rich Text Editor:

Blog yazıları ve açıklamalar için:
- **Bold**, *italic*, `code` formatları
- Başlıklar (H2, H3, vb.)
- Listeler
- Bağlantılar

---

## 🚨 Sorun Giderme

### CORS Hatası

**Hata:** "CorsOriginError" veya "Origin not allowed"

**Çözüm:**
1. CORS ayarını yaptın mı kontrol et
2. `http://localhost:3000` eklenmiş mi kontrol et
3. "Allow credentials" işaretli mi kontrol et
4. Tarayıcıyı yenile (Ctrl+F5)
5. Dev server'ı yeniden başlat

### Login Yapamıyorum

**Çözüm:**
1. Sanity hesabın var mı kontrol et: https://www.sanity.io
2. Google hesabınla giriş yapmayı dene
3. Browser'da cookies aktif mi kontrol et
4. Incognito/Private mode'da dene

### İçerik Görünmüyor

**Çözüm:**
1. İçeriği **Publish** ettin mi kontrol et (Save değil!)
2. Vision tool'da query test et
3. Network tab'de API response'u incele

### Görsel Yüklenmiyor

**Çözüm:**
1. Dosya boyutu 10MB'dan küçük olmalı
2. Desteklenen formatlar: JPG, PNG, GIF, WebP, SVG
3. Sanity Dashboard'da asset quota'yı kontrol et

---

## 🔧 Gelişmiş Özellikler

### Vision Tool

GROQ query'leri test etmek için:
1. Sol menüden **Vision** seç
2. Query yaz (örn: `*[_type == "project"]`)
3. **Execute** butonuna bas
4. Sonuçları JSON formatında gör

### API Playground

REST API'yi test et:
```
https://q70j1t7c.api.sanity.io/v2024-01-01/data/query/production?query=*[_type == "project"]
```

### Scheduled Publishing

İçeriği gelecekte yayınla:
1. İçerik oluştururken **Schedule** seç
2. Tarih ve saat belirle
3. Publish

---

## 📚 Kaynaklar

**Sanity Dökümanları:**
- https://www.sanity.io/docs
- https://www.sanity.io/docs/groq

**Destek:**
- Slack: https://slack.sanity.io
- GitHub: https://github.com/sanity-io/sanity

---

## ✅ Hızlı Kontrol Listesi

İlk kurulum için:

- [ ] Sanity Dashboard'a giriş yaptım
- [ ] CORS origin ekledim (`http://localhost:3000`)
- [ ] "Allow credentials" işaretledim
- [ ] Admin panele giriş yaptım
- [ ] İlk içeriğimi oluşturdum
- [ ] Publish ettim

Hepsi tamam mı? Harika! Artık admin paneli kullanmaya hazırsın! 🎉

---

**İpucu:** CORS ayarını yapmayı unutma! Bu en yaygın sorun. 😉
