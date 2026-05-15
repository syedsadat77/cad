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
  { id: 'machinery', label: 'Machinery' },
]

const projects = [
  {
    title: 'PEB Warehouse Structure',
    image: '/images/project-peb.png',
    category: 'peb',
    description: 'Complete structural design of a pre-engineered warehouse with bolted connections',
  },
  {
    title: 'PEB Industrial Shed',
    image: '/images/project-peb-shed.png',
    category: 'peb',
    description: 'Large span portal frame industrial shed with detailed purlins and girts design',
  },
  {
    title: 'PEB Crane Building',
    image: '/images/project-peb-crane.png',
    category: 'peb',
    description: 'Steel frame structure with crane runway and overhead crane support system',
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
  {
    title: 'Gear Assembly System',
    image: '/images/project-gear-assembly.png',
    category: 'machinery',
    description: 'Precision gear train with shafts and bearings for mechanical transmission',
  },
  {
    title: 'Hydraulic Press Design',
    image: '/images/project-hydraulic-press.png',
    category: 'machinery',
    description: 'Heavy-duty hydraulic press machine with cylinder and frame structure',
  },
  {
    title: 'Conveyor System',
    image: '/images/project-conveyor.png',
    category: 'machinery',
    description: 'Industrial roller conveyor with support structure and drive mechanism',
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
              className={`cursor-pointer px-5 py-2 text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black border-transparent hover:from-amber-600 hover:to-orange-600 scale-105'
                  : 'border-white/20 text-gray-400 hover:text-amber-500 hover:border-amber-500/50 hover:bg-white/5'
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </Badge>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.08, type: 'spring', stiffness: 200 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] glass"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark overlay base */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Hover overlay with amber tint */}
                <motion.div
                  className="absolute inset-0 bg-amber-500/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                    <Badge
                      variant="outline"
                      className="mb-2 border-amber-500/40 text-amber-500 text-xs bg-amber-500/10 backdrop-blur-sm"
                    >
                      {categories.find((c) => c.id === project.category)?.label}
                    </Badge>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <motion.p
                      className="text-gray-300 text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {project.description}
                      </span>
                    </motion.p>
                  </div>
                </div>

                {/* Amber border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{ borderColor: 'rgba(245, 158, 11, 0.4)' }}
                  transition={{ duration: 0.3 }}
                />

                {/* Corner accent on hover */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-500/40 to-transparent translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-500 rotate-45" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
