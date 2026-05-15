'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'

const skills = [
  { name: 'AutoCAD 2D', level: 95 },
  { name: 'AutoCAD 3D', level: 90 },
  { name: 'PEB Design', level: 92 },
  { name: 'Structural Detailing', level: 88 },
  { name: 'Equipment Design', level: 87 },
  { name: 'Machinery Parts', level: 85 },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills"
          subtitle="Technical expertise honed through years of professional CAD design practice"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass rounded-xl p-5 group hover:glow-amber transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-foreground font-medium text-sm group-hover:text-amber-500 transition-colors">
                  {skill.name}
                </span>
                <span className="text-amber-500 text-sm font-semibold">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.06, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
