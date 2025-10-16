# 🔒 Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## 🛡️ Security Features

### Current Implementation

- ✅ **Environment Variables**: All secrets stored in `.env.local` (not committed)
- ✅ **HTTPS Only**: Enforced via security headers
- ✅ **XSS Protection**: React's built-in protection + security headers
- ✅ **CSRF Protection**: SameSite cookies
- ✅ **Clickjacking Protection**: X-Frame-Options header
- ✅ **Content Security**: X-Content-Type-Options
- ✅ **Rate Limiting**: API endpoints protected (placeholder values for build)
- ✅ **Input Validation**: All forms validated
- ✅ **SQL Injection**: N/A (no direct DB queries, using ORMs)

## 🔐 Environment Variables Security

### DO NOT Commit

Never commit these files:
- `.env.local`
- `.env.production`
- `.env.development`
- Any file containing real API keys or secrets

### Safe to Commit

- ✅ `.env.example` - Template with placeholder values

### Vercel Deployment

Set these as **Environment Variables** in Vercel Dashboard:

**Required for Contact Form:**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_FROM=info@yourdomain.com
EMAIL_TO=info@yourdomain.com
```

**Required for Newsletter (Optional):**
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-key
RESEND_API_KEY=re_your-key
```

**Required for Analytics (Optional):**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## 🚨 Security Best Practices

### For Developers

1. **Never hardcode secrets**
   ```typescript
   // ❌ BAD
   const apiKey = "sk_live_123abc"

   // ✅ GOOD
   const apiKey = process.env.API_KEY
   ```

2. **Use HTTPS in production**
   - Vercel provides automatic HTTPS
   - Custom domains: Ensure SSL certificate

3. **Validate all inputs**
   ```typescript
   // Always validate user input
   const emailSchema = z.string().email()
   emailSchema.parse(userEmail)
   ```

4. **Keep dependencies updated**
   ```bash
   npm audit
   npm audit fix
   npm outdated
   ```

5. **Use environment-specific configs**
   - Development: `.env.local`
   - Production: Vercel Environment Variables
   - Never mix them!

### For Production

1. **Enable all security headers** (already configured in `next.config.ts`)
2. **Use Content Security Policy** (optional, can be added)
3. **Monitor dependencies** (GitHub Dependabot)
4. **Regular security audits** (`npm audit`)
5. **Set up error tracking** (Sentry, etc.)

## 🐛 Reporting a Vulnerability

If you discover a security vulnerability, please follow these steps:

### DO NOT
- ❌ Open a public GitHub issue
- ❌ Share details publicly

### DO
1. ✅ Email: security@yourdomain.com
2. ✅ Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)
3. ✅ Wait for acknowledgment (within 48 hours)
4. ✅ Give us reasonable time to fix before disclosure

## 🔍 Security Checklist

### Before Deployment

- [ ] All secrets in environment variables (not code)
- [ ] `.env.local` not committed
- [ ] Security headers configured
- [ ] HTTPS enabled
- [ ] Dependencies up to date (`npm audit`)
- [ ] No console.log with sensitive data
- [ ] API endpoints validated
- [ ] Rate limiting implemented
- [ ] Error messages don't expose internals

### After Deployment

- [ ] Test all forms
- [ ] Verify HTTPS
- [ ] Check security headers (securityheaders.com)
- [ ] Monitor error logs
- [ ] Set up alerts for unusual activity

## 🛠️ Security Tools

### Recommended

- **npm audit**: Check for known vulnerabilities
  ```bash
  npm audit
  npm audit fix
  ```

- **Snyk**: Continuous security monitoring
  ```bash
  npx snyk test
  ```

- **OWASP ZAP**: Security scanner
  - https://www.zaproxy.org/

- **Mozilla Observatory**: Header checker
  - https://observatory.mozilla.org/

- **Security Headers**: Header tester
  - https://securityheaders.com/

## 📚 Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)
- [Vercel Security](https://vercel.com/docs/security/headers)
- [npm Security Best Practices](https://docs.npmjs.com/security-best-practices)

## 📞 Contact

For security-related inquiries:
- Email: security@yourdomain.com
- Response time: Within 48 hours

---

**Last Updated**: October 2025
**Version**: 1.0.0
