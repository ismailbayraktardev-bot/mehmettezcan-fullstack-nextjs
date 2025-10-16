import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projeler',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Proje Adı',
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
      name: 'client',
      title: 'Müşteri',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Kısa Açıklama',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Detaylı Açıklama',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Web Tasarım', value: 'web-design' },
          { title: 'E-Ticaret', value: 'e-commerce' },
          { title: 'SEO', value: 'seo' },
          { title: 'Grafik Tasarım', value: 'graphic-design' },
          { title: 'Mobil Uygulama', value: 'mobile-app' },
        ],
      },
    }),
    defineField({
      name: 'featuredImage',
      title: 'Öne Çıkan Görsel',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Proje Görselleri',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'url',
      title: 'Proje URL',
      type: 'url',
    }),
    defineField({
      name: 'technologies',
      title: 'Kullanılan Teknolojiler',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      title: 'Öne Çıkan Proje',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Yayın Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'featuredImage',
    },
  },
})
