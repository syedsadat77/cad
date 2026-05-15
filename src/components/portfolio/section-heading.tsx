'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
      <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
    </motion.div>
  )
}
