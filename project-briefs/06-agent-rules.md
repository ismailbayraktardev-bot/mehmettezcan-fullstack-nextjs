# Development Kuralları (Agent Rules)

## Kod Yazım Standartları

### Naming Conventions
- Components: PascalCase (ör: `HeroSection.tsx`)
- Functions: camelCase (ör: `handleSubmit`)
- Constants: UPPER_SNAKE_CASE (ör: `API_ENDPOINT`)
- CSS classes: kebab-case (ör: `hero-section`)

### File Organization
```
components/
├── layout/          # Layout components
├── sections/        # Page sections
├── ui/             # Reusable UI components
├── forms/          # Form components
└── [component]/
    ├── index.tsx   # Component code
    ├── styles.css  # Component styles (if needed)
    └── types.ts    # TypeScript types
```

### Component Structure
```typescript
// 1. Imports
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// 2. Types
interface ComponentProps {
  title: string
  description?: string
}

// 3. Component
export function Component({ title, description }: ComponentProps) {
  // 4. State & Hooks
  const [state, setState] = useState()
  
  // 5. Effects
  useEffect(() => {}, [])
  
  // 6. Handlers
  const handleClick = () => {}
  
  // 7. Render
  return <div>...</div>
}
```

## Best Practices

### Performance
- Lazy load images
- Code splitting for routes
- Optimize bundle size
- Use next/image for images
- Implement loading states

### SEO
- Semantic HTML
- Meta tags for all pages
- Structured data
- Sitemap generation
- Robots.txt

### Accessibility
- ARIA labels
- Keyboard navigation
- Focus management
- Alt texts for images
- Color contrast ratios

### State Management
- Local state for UI
- Context for global UI state
- Server state with React Query
- Form state with React Hook Form

## Git Commit Messages
```bash
feat: add hero section component
fix: resolve mobile menu overlap
style: update button hover states
refactor: optimize image loading
docs: update component documentation
test: add unit tests for forms
chore: update dependencies
```

## Error Handling
- Try-catch for async operations
- Error boundaries for components
- User-friendly error messages
- Log errors to service (Sentry)