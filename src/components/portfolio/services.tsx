'use client'

import { motion } from 'framer-motion'
import { Building2, Cog, Box } from 'lucide-react'
import { SectionHeading } from './section-heading'

const services = [
  {
    icon: Building2,
    title: 'PEB Structure Design',
    description:
      'Comprehensive design of Pre-Engineered Building structures including main frames, secondary members, bracing systems, and connection details with precise fabrication drawings.',
    features: [
      'Main Frame Design',
      'Secondary Members',
      'Bracing Systems',
      'Connection Details',
    ],
  },
  {
    icon: Cog,
    title: 'Equipment Parts Design',
    description:
      'Detailed 2D drafting and modeling of industrial equipment components, assemblies, and sub-assemblies with tolerance specifications and bill of materials.',
    features: [
      'Part Detailing',
      'Assembly Drawings',
      'BOM Preparation',
      'Tolerance Specs',
    ],
  },
  {
    icon: Box,
    title: '2D/3D Machinery Parts',
    description:
      'Creating accurate 2D technical drawings and 3D models of machinery components including isometric views, section views, and exploded assemblies.',
    features: [
      '3D Modeling',
      'Isometric Views',
      'Section Views',
      'Exploded Assemblies',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Services"
          subtitle="Specialized CAD design services tailored for industrial and structural needs"
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-6 lg:p-8 group cursor-pointer transition-all duration-500 hover:glow-amber-lg relative overflow-hidden"
              >
                {/* Hover gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-all duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Icon className="h-7 w-7 text-amber-500" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-500 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, fi) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + fi * 0.05 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 group-hover:bg-amber-500 transition-colors" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
