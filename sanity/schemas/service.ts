import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Hizmetler',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Hizmet Adı',
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
      name: 'icon',
      title: 'İkon Adı',
      type: 'string',
      description: 'Lucide icon adı (örn: Code, Search, ShoppingCart)',
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
      name: 'features',
      title: 'Özellikler',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'price',
      title: 'Başlangıç Fiyatı',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Sıralama',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
      media: 'featuredImage',
    },
  },
})
