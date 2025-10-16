# API Endpoints & Services

## Environment Variables
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_KEY=your-service-key

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token

# Email (Resend)
RESEND_API_KEY=your-resend-key

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Misc
NEXT_PUBLIC_SITE_URL=https://mehmettezcan.com
```

## API Routes

### /api/contact
```typescript
// Form submission endpoint
POST /api/contact
Body: {
  name: string
  email: string
  phone?: string
  company?: string
  projectType: string
  budget: string
  message: string
}
```

### /api/newsletter
```typescript
// Newsletter subscription
POST /api/newsletter
Body: {
  email: string
}
```

### /api/analytics
```typescript
// Page view tracking
POST /api/analytics
Body: {
  pageUrl: string
  referrer?: string
}
```

## External APIs

### Resend Email Templates
1. contact-form-notification
2. contact-form-confirmation
3. newsletter-welcome

### Google APIs
- Analytics Data API
- PageSpeed Insights API
- reCAPTCHA v3

## Rate Limiting
- Form submissions: 5 per hour per IP
- Newsletter: 2 per day per email
- Analytics: No limit