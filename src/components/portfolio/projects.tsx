'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { SectionHeading } from './section-heading'
import { Badge } from '@/components/ui/badge'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'peb', label: 'PEB Structures' },
  { id: 'equipment', label: 'Equipment' },
]

const projects = [
  {
    title: 'PEB Warehouse Structure',
    image: '/images/project-peb.png',
    category: 'peb',
    description: 'Complete structural design of a pre-engineered warehouse with bolted connections',
  },
  {
    title: 'Equipment Parts Assembly',
    image: '/images/project-equipment.png',
    category: 'equipment',
    description: '2D drafting of industrial equipment components and sub-assemblies',
  },
  {
    title: 'Floor Plan Layout',
    image: '/images/project-floorplan.png',
    category: 'equipment',
    description: 'Detailed industrial floor plan with equipment placement and dimensions',
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-50 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Portfolio"
          subtitle="A showcase of precision CAD designs across various industrial domains"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <Badge
              key={cat.id}
              variant={activeCategory === cat.id ? 'default' : 'outline'}
              className={`cursor-pointer px-5 py-2 text-sm transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black border-transparent hover:from-amber-600 hover:to-orange-600'
                  : 'border-border text-muted-foreground hover:text-amber-500 hover:border-amber-500/50'
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </Badge>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] glass"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark overlay base */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    initial={false}
                    className="transform transition-transform duration-300 group-hover:-translate-y-2"
                  >
                    <Badge
                      variant="outline"
                      className="mb-3 border-amber-500/40 text-amber-500 text-xs bg-amber-500/10"
                    >
                      {categories.find((c) => c.id === project.category)?.label}
                    </Badge>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </motion.div>
                </div>

                {/* Amber border on hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-500/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
