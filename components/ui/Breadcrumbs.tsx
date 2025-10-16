'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-xs uppercase tracking-widest">
      <Link
        href="/"
        className="text-white/60 hover:text-white transition-colors duration-200"
      >
        Ana Sayfa
      </Link>

      {items.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-2"
        >
          <ChevronRight size={14} className="text-white/40" />
          {index === items.length - 1 ? (
            <span className="text-amber-500 font-semibold">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="text-white/60 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          )}
        </motion.div>
      ))}
    </nav>
  )
}
