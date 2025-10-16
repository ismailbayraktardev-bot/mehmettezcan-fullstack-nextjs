'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface OrganicDividerProps {
  variant?: 'wave' | 'curve' | 'slope'
  color?: string
}

export default function OrganicDivider({ variant = 'wave', color = '#f59e0b' }: OrganicDividerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  const renderShape = () => {
    switch (variant) {
      case 'wave':
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
              fill={`${color}10`}
              stroke={`${color}30`}
              strokeWidth="1"
            />
            <path
              d="M0,70 Q300,20 600,70 T1200,70"
              fill="none"
              stroke={`${color}20`}
              strokeWidth="2"
            />
          </svg>
        )
      case 'curve':
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z"
              fill={`${color}10`}
              stroke={`${color}30`}
              strokeWidth="1"
            />
          </svg>
        )
      case 'slope':
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,100 L1200,0 L1200,120 L0,120 Z"
              fill={`${color}10`}
              stroke={`${color}30`}
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="100"
              x2="1200"
              y2="0"
              stroke={`${color}20`}
              strokeWidth="2"
            />
          </svg>
        )
    }
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="relative w-full h-24 my-16 overflow-hidden"
    >
      <motion.div
        animate={{
          x: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full h-full"
      >
        {renderShape()}
      </motion.div>
    </motion.div>
  )
}
