import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ContactModalProvider } from "@/components/providers/ContactModalProvider";
import { siteConfig } from "@/site.config";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Lufga font for body text
// Note: Add font files to public/fonts/lufga/ directory
// See public/fonts/README.md for details
// Uncomment when font files are available:
/*
const lufga = localFont({
  src: [
    {
      path: "../public/fonts/lufga/Lufga-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/lufga/Lufga-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/lufga/Lufga-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/lufga/Lufga-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lufga",
  display: "swap",
  fallback: ["Inter", "sans-serif"],
});
*/

// Futura font for headings
// Note: Add font files to public/fonts/futura/ directory
// See public/fonts/README.md for details
// Uncomment when font files are available:
/*
const futura = localFont({
  src: [
    {
      path: "../public/fonts/futura/Futura-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/futura/Futura-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-futura",
  display: "swap",
  fallback: ["Montserrat", "Poppins", "sans-serif"],
});
*/

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [siteConfig.author],
  creator: siteConfig.creator,
  openGraph: {
    type: siteConfig.openGraph.type,
    locale: siteConfig.openGraph.locale,
    url: siteConfig.openGraph.url,
    siteName: siteConfig.openGraph.siteName,
    title: siteConfig.openGraph.title,
    description: siteConfig.openGraph.description,
    images: siteConfig.openGraph.images,
  },
  twitter: {
    card: siteConfig.twitter.card,
    site: siteConfig.twitter.site,
    creator: siteConfig.twitter.creator,
    title: siteConfig.twitter.title,
    description: siteConfig.twitter.description,
    images: siteConfig.twitter.images,
  },
  robots: siteConfig.robots,
  icons: {
    icon: siteConfig.seo.favicon,
    apple: siteConfig.seo.appleTouchIcon,
  },
  manifest: siteConfig.seo.manifestUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        {siteConfig.analytics.googleAnalyticsId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleAnalyticsId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${siteConfig.analytics.googleAnalyticsId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Google Tag Manager */}
        {siteConfig.analytics.googleTagManagerId && (
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${siteConfig.analytics.googleTagManagerId}');
              `,
            }}
          />
        )}
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        {siteConfig.analytics.googleTagManagerId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.analytics.googleTagManagerId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        <ContactModalProvider>
          {children}
        </ContactModalProvider>
      </body>
    </html>
  );
}
