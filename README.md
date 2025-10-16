# Mehmet Tezcan - Dijital Ajans Website

Professional digital agency website built with modern web technologies. Features a full-stack Next.js application with dynamic content, SEO optimization, and production-ready infrastructure.

![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Features

- ✅ **Modern Stack**: Next.js 15.5.5 with App Router, TypeScript, Tailwind CSS 4
- ✅ **SEO Optimized**: Dynamic sitemap.xml, robots.txt, OpenGraph, Twitter Cards
- ✅ **Analytics Ready**: Google Analytics 4 & Tag Manager integration
- ✅ **Email System**: Contact form with Resend integration
- ✅ **Newsletter**: Supabase integration for email subscriptions
- ✅ **Custom Fonts**: Lufga & Futura typography with fallbacks
- ✅ **8 Real Projects**: Complete portfolio with case studies
- ✅ **Responsive Design**: Mobile-first, fully responsive layout
- ✅ **Premium Animations**: Framer Motion 12 with optimized timings (0.8-1.4s)
- ✅ **Security Headers**: HSTS, X-Frame-Options, CSP-ready
- ✅ **Production Ready**: Environment variables, security hardening, Vercel-optimized

## 📋 Tech Stack

### Frontend
- **Framework**: Next.js 15.5.5 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4 (Hybrid approach)
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation

### Backend & Services
- **Runtime**: Node.js 18+
- **Email**: Resend API
- **Newsletter**: Supabase (PostgreSQL)
- **Validation**: Zod schemas
- **Image CDN**: Sanity CDN ready

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Type Checking**: TypeScript Compiler
- **Build Tool**: Webpack (standard - Sanity compatible)

## 🛠️ Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ismailbayraktardev-bot/mehmettezcan-fullstack-nextjs.git
   cd dijital-ajans
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and configure your environment variables (see [Environment Variables](#environment-variables) section).

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Environment Variables

Create a `.env.local` file in the root directory. See `.env.example` for template.

### Required for Contact Form
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_FROM=info@yourdomain.com
EMAIL_TO=info@yourdomain.com
```

### Optional (Newsletter & Analytics)
```env
# Newsletter (Supabase)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-key

# Email Marketing (Resend)
RESEND_API_KEY=re_your-api-key
RESEND_FROM_EMAIL=noreply@yourdomain.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Important Security Notes

- ⚠️ **Never commit `.env.local` or `.env.production` files** (already in .gitignore)
- ⚠️ Use App Passwords for Gmail (not your account password)
- ⚠️ Production: Set env vars in Vercel Dashboard (not in code)
- ⚠️ See [SECURITY.md](SECURITY.md) for security best practices

**Note**: Project builds successfully with placeholder values. Add real credentials for full functionality.

## 📂 Project Structure

```
dijital-ajans/
├── app/                          # Next.js App Router pages
│   ├── (site)/                   # Main site pages
│   │   ├── hizmetler/           # Services pages
│   │   ├── projeler/            # Projects pages
│   │   ├── blog/                # Blog pages
│   │   └── iletisim/            # Contact page
│   ├── api/                      # API routes
│   │   ├── contact/             # Contact form endpoint
│   │   ├── projeler/            # Projects API
│   │   ├── hizmetler/           # Services API
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Homepage
├── components/                   # React components
│   ├── layout/                  # Layout components (Header, Footer)
│   ├── sections/                # Page sections
│   ├── ui/                      # Reusable UI components
│   └── providers/               # Context providers
├── data/                         # Static data files
│   ├── projects.ts              # Projects data
│   └── services.ts              # Services data
├── public/                       # Static assets
│   ├── fonts/                   # Custom fonts (Lufga, Futura)
│   └── images/                  # Images and media
├── site.config.ts                # Site configuration & metadata
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## 🎨 Custom Fonts

The project uses custom fonts for enhanced typography:

### Lufga (Body Text)
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Location: `/public/fonts/lufga/`
- Fallback: Inter, sans-serif

### Futura (Headings)
- Weights: 500 (Medium), 700 (Bold)
- Location: `/public/fonts/futura/`
- Fallback: Montserrat, Poppins, sans-serif

**Note**: Font files are not included in the repository. Add `.woff2` files to respective directories. See `/public/fonts/README.md` for details.

## 🔌 API Endpoints

### Contact Form
```
POST /api/contact
```
Submit contact form with email notification.

**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "phone": "string (optional)",
  "subject": "string (optional)",
  "message": "string",
  "service": "string (optional)"
}
```

### Projects
```
GET /api/projeler
GET /api/projeler?category=web-design
GET /api/projeler?slug=project-slug
```

### Services
```
GET /api/hizmetler
GET /api/hizmetler?slug=web-tasarim
```

### SEO
```
GET /robots.txt          # Dynamic robots.txt
GET /sitemap.xml         # Dynamic XML sitemap
```

## 🏗️ Build & Deployment

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

**Build Output**: ~102 kB First Load JS (optimized)

### Deployment to Vercel (Recommended)

**Quick Deploy:**
1. Push to GitHub
2. Import repo to Vercel (https://vercel.com)
3. Auto-detected as Next.js project
4. Add environment variables in Vercel Dashboard
5. Deploy! 🚀

**Detailed Guide**: See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step instructions.

```bash
# Or use Vercel CLI
npm i -g vercel
vercel login
vercel --prod
```

### Environment Variables for Production

**In Vercel Dashboard → Settings → Environment Variables**, add:
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `EMAIL_FROM`, `EMAIL_TO` (required for contact form)
- `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_KEY` (optional - newsletter)
- `RESEND_API_KEY`, `RESEND_FROM_EMAIL` (optional - email marketing)
- `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID` (optional - analytics)

**Security**: All sensitive vars are excluded from git via `.gitignore`

## 📊 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production (standard webpack)
npm start            # Start production server
npm run lint         # Run ESLint
```

**Note**: Build uses standard webpack (not Turbopack) for Sanity CDN compatibility.

## 🎯 SEO & Analytics

### SEO Features
- Dynamic metadata generation
- OpenGraph & Twitter Card support
- Automatic sitemap generation
- Robots.txt configuration
- Structured data ready
- Local SEO optimization (İzmir/Ege focused)

### Analytics Integration
- Google Analytics 4 (GA4)
- Google Tag Manager (GTM)
- Page view tracking
- Event tracking ready
- Conversion tracking setup

## 🔒 Security

- ✅ **Security Headers**: HSTS, X-Frame-Options, X-Content-Type-Options, XSS-Protection, Referrer-Policy
- ✅ **Environment Variables**: All secrets in .env (gitignored)
- ✅ **HTTPS Only**: Enforced via Strict-Transport-Security header
- ✅ **Input Validation**: Zod schemas on all forms
- ✅ **XSS Protection**: React's built-in + security headers
- ✅ **CSRF Protection**: SameSite cookies
- ✅ **Rate Limiting**: API endpoint protection (placeholder for build)
- ✅ **Clickjacking Protection**: X-Frame-Options SAMEORIGIN

See [SECURITY.md](SECURITY.md) for complete security documentation and best practices.

## 📚 Documentation

- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Step-by-step Vercel deployment guide
- **[SECURITY.md](SECURITY.md)** - Security best practices and checklist
- **[VISUAL-RECOMMENDATIONS.md](VISUAL-RECOMMENDATIONS.md)** - Image and visual content guide
- **[.env.example](.env.example)** - Environment variable template

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Mehmet Tezcan**
- Website: [mehmettezcan.com](https://mehmettezcan.com)
- GitHub: [@ismailbayraktardev-bot](https://github.com/ismailbayraktardev-bot)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - React Framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev) - Icon set

## 📞 Support

For support and questions:
- Email: info@mehmettezcan.com
- GitHub Issues: [Create an issue](https://github.com/ismailbayraktardev-bot/mehmettezcan-fullstack-nextjs/issues)

---

**Built with ❤️ in İzmir, Turkey**
