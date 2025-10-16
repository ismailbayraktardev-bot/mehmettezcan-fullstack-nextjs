# 09-database-api.md

## Database Architecture

### Sanity CMS (İçerik Yönetimi)
- Blog yazıları
- Proje portfolyosu
- Sayfa içerikleri
- Medya yönetimi

### Supabase (Dynamic Data)
- Form submissions
- Analytics data
- User interactions
- Email subscribers
- Real-time features

## Neden Bu Kombinasyon?
1. **Sanity**: İçerik editörleri için mükemmel UI
2. **Supabase**: Form verileri, real-time features için ideal
3. **Best of both worlds**: CMS + Dynamic database

## Supabase Tables

### form_submissions
```sql
CREATE TABLE form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  project_type VARCHAR(50),
  budget VARCHAR(50),
  message TEXT,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### email_subscribers
```sql
CREATE TABLE email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(50) DEFAULT 'active',
  subscribed_at TIMESTAMP DEFAULT NOW()
);
```

### page_analytics
```sql
CREATE TABLE page_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_url VARCHAR(255),
  visitor_id VARCHAR(255),
  session_id VARCHAR(255),
  referrer VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```