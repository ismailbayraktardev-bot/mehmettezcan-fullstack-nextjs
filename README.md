# Mehmet Tezcan - Dijital Ajans Website

Professional digital agency website built with modern web technologies. Features a full-stack Next.js application with dynamic content, SEO optimization, and production-ready infrastructure.

![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Features

- ✅ **Modern Stack**: Next.js 15.5.5 with App Router, TypeScript, Tailwind CSS
- ✅ **SEO Optimized**: Dynamic sitemap.xml, robots.txt, OpenGraph, Twitter Cards
- ✅ **Analytics Ready**: Google Analytics 4 & Tag Manager integration
- ✅ **Email System**: Contact form with Nodemailer integration
- ✅ **Custom Fonts**: Lufga & Futura typography with fallbacks
- ✅ **API Routes**: RESTful endpoints for projects, services, contact
- ✅ **Responsive Design**: Mobile-first, fully responsive layout
- ✅ **Animations**: Framer Motion for smooth transitions
- ✅ **Rate Limiting**: Built-in protection for API endpoints
- ✅ **Production Ready**: Environment variables, error handling, caching

## 📋 Tech Stack

### Frontend
- **Framework**: Next.js 15.5.5 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.x
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form

### Backend & API
- **Runtime**: Node.js
- **Email**: Nodemailer
- **Validation**: Built-in TypeScript validation
- **Rate Limiting**: Custom implementation

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Type Checking**: TypeScript Compiler
- **Build Tool**: Turbopack (Next.js)

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

Create a `.env.local` file in the root directory with the following variables:

```env
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Mehmet Tezcan Dijital Ajans"

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # Google Analytics ID
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX          # Google Tag Manager ID

# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password         # Use App Password for Gmail
EMAIL_FROM=info@mehmettezcan.com
EMAIL_TO=info@mehmettezcan.com

# Development
NODE_ENV=development
DEBUG=true
```

### Important Security Notes

- ⚠️ **Never commit `.env.local` or `.env.production` files**
- ⚠️ Use App Passwords for Gmail (not your account password)
- ⚠️ Keep production credentials separate and secure
- ⚠️ Review `.gitignore` to ensure env files are excluded

For detailed configuration options, see [.env.example](.env.example).

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

### Deployment Options

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Docker (Optional)
```bash
# Build image
docker build -t dijital-ajans .

# Run container
docker run -p 3000:3000 dijital-ajans
```

#### Manual Deployment
1. Build the project: `npm run build`
2. Upload `.next`, `public`, `package.json`, `package-lock.json`
3. Run `npm install --production` on server
4. Start with `npm start`

### Environment Variables for Production

Set these in your hosting platform:
- `NEXT_PUBLIC_APP_URL` - Your production URL
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager ID
- `SMTP_*` - Email configuration
- `NODE_ENV=production`

## 📊 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

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

- Rate limiting on API endpoints (5 req/min)
- SMTP credentials secured in environment variables
- CORS configuration for production
- Input validation on all forms
- SQL injection protection (when DB integrated)
- XSS protection via React
- CSRF protection ready

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

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
