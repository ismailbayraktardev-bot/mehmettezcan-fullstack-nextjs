# Utility Functions & Helpers

## Supabase Client
```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

## Sanity Client
```typescript
// lib/sanity.ts
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})
```

## Form Validation Schemas
```typescript
// lib/validations.ts
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.enum(['web', 'seo', 'ecommerce', 'design', 'social']),
  budget: z.enum(['5k-10k', '10k-25k', '25k-50k', '50k+']),
  message: z.string().min(10).max(1000)
})
```

## SEO Helpers
```typescript
// lib/seo.ts
export const generateOGImage = (title: string) => {
  return `/api/og?title=${encodeURIComponent(title)}`
}

export const jsonLd = (data: any) => {
  return {
    __html: JSON.stringify(data)
  }
}
```