import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Sayfalar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sayfa Başlığı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Başlık (SEO)',
      type: 'string',
      description: 'Arama motorlarında görünecek başlık',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Açıklama (SEO)',
      type: 'text',
      rows: 3,
      description: 'Arama motorlarında görünecek açıklama',
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Bölümü',
      type: 'object',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Hero Bölümünü Göster',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'heading',
          title: 'Ana Başlık',
          type: 'string',
        }),
        defineField({
          name: 'subheading',
          title: 'Alt Başlık',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Arka Plan Görseli',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'ctaText',
          title: 'Buton Metni',
          type: 'string',
        }),
        defineField({
          name: 'ctaLink',
          title: 'Buton Linki',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Sayfa İçeriği',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alternatif Metin',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Görsel Açıklaması',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Özel Bölümler',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'customSection',
          title: 'Özel Bölüm',
          fields: [
            {
              name: 'sectionTitle',
              title: 'Bölüm Başlığı',
              type: 'string',
            },
            {
              name: 'sectionContent',
              title: 'Bölüm İçeriği',
              type: 'array',
              of: [{ type: 'block' }],
            },
            {
              name: 'backgroundColor',
              title: 'Arka Plan Rengi',
              type: 'string',
              options: {
                list: [
                  { title: 'Varsayılan', value: 'default' },
                  { title: 'Koyu', value: 'dark' },
                  { title: 'Açık', value: 'light' },
                  { title: 'Birincil Renk', value: 'primary' },
                ],
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'showContactForm',
      title: 'İletişim Formu Göster',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Yayın Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'isPublished',
      title: 'Yayında',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})
