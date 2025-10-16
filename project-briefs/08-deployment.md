# Deployment Planı

## Vercel Deployment

### Environment Variables
```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
RESEND_API_KEY=
NEXT_PUBLIC_GA_ID=
```

### Build Settings
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### Domain Setup
- Production: mehmettezcan.com
- Preview: preview.mehmettezcan.com
- WWW redirect

## Sanity Deployment
- Sanity Studio: studio.mehmettezcan.com
- Dataset: production
- CORS origins: localhost, *.vercel.app, mehmettezcan.com

## Performance Optimization
- Enable ISR (Incremental Static Regeneration)
- Image optimization with next/image
- Font optimization
- Edge caching

## Security
- Environment variable encryption
- CORS configuration
- Rate limiting
- Input sanitization

## Monitoring
- Vercel Analytics
- Error tracking (Sentry)
- Uptime monitoring
- Performance alerts

## Backup & Recovery
- Daily Sanity backups
- Git version control
- Deployment rollback plan