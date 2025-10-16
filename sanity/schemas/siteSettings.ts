import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Ayarları',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Adı',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Mehmet Tezcan - Dijital Ajans',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Açıklaması',
      type: 'text',
      rows: 3,
      initialValue: 'Modern web tasarım, SEO ve dijital pazarlama çözümleri',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'contactInfo',
      title: 'İletişim Bilgileri',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'E-posta',
          type: 'string',
          validation: (Rule) => Rule.email(),
          initialValue: 'hello@mehmettezcan.com',
        }),
        defineField({
          name: 'phone',
          title: 'Telefon',
          type: 'string',
          initialValue: '+90 555 123 45 67',
        }),
        defineField({
          name: 'address',
          title: 'Adres',
          type: 'text',
          rows: 2,
          initialValue: 'İstanbul, Türkiye',
        }),
        defineField({
          name: 'workingHours',
          title: 'Çalışma Saatleri',
          type: 'text',
          rows: 3,
          initialValue: 'Pazartesi - Cuma: 09:00 - 18:00\nCumartesi: 10:00 - 16:00\nPazar: Kapalı',
        }),
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Sosyal Medya',
      type: 'object',
      fields: [
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
        }),
        defineField({
          name: 'github',
          title: 'GitHub',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'analytics',
      title: 'Analytics',
      type: 'object',
      fields: [
        defineField({
          name: 'googleAnalyticsId',
          title: 'Google Analytics ID',
          type: 'string',
          description: 'GA4 Measurement ID (örn: G-XXXXXXXXXX)',
        }),
        defineField({
          name: 'googleTagManagerId',
          title: 'Google Tag Manager ID',
          type: 'string',
          description: 'GTM Container ID (örn: GTM-XXXXXX)',
        }),
        defineField({
          name: 'facebookPixelId',
          title: 'Facebook Pixel ID',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Ayarları',
      type: 'object',
      fields: [
        defineField({
          name: 'defaultMetaTitle',
          title: 'Varsayılan Meta Başlık',
          type: 'string',
          initialValue: 'Mehmet Tezcan - Dijital Ajans',
        }),
        defineField({
          name: 'defaultMetaDescription',
          title: 'Varsayılan Meta Açıklama',
          type: 'text',
          rows: 3,
          initialValue: 'Modern web teknolojileri, yaratıcı tasarım ve güçlü stratejilerle markanızı dijital dünyada zirveye taşıyoruz.',
        }),
        defineField({
          name: 'keywords',
          title: 'Anahtar Kelimeler',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Site genelinde kullanılacak anahtar kelimeler',
        }),
        defineField({
          name: 'ogImage',
          title: 'Open Graph Görseli',
          type: 'image',
          description: 'Sosyal medyada paylaşıldığında görünecek görsel',
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer Ayarları',
      type: 'object',
      fields: [
        defineField({
          name: 'copyrightText',
          title: 'Telif Hakkı Metni',
          type: 'string',
          initialValue: '© 2024 Mehmet Tezcan. Tüm hakları saklıdır.',
        }),
        defineField({
          name: 'showNewsletter',
          title: 'Newsletter Göster',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'newsletterTitle',
          title: 'Newsletter Başlık',
          type: 'string',
          initialValue: 'Bültenimize Abone Olun',
        }),
        defineField({
          name: 'newsletterDescription',
          title: 'Newsletter Açıklama',
          type: 'text',
          rows: 2,
          initialValue: 'Dijital dünyadan haberler ve özel teklifler için e-posta listemize katılın',
        }),
      ],
    }),
    defineField({
      name: 'maintenance',
      title: 'Bakım Modu',
      type: 'object',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Bakım Modu Aktif',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'message',
          title: 'Bakım Mesajı',
          type: 'text',
          rows: 3,
          initialValue: 'Sitemiz şu anda bakımdadır. Lütfen daha sonra tekrar ziyaret edin.',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'siteDescription',
    },
  },
})
