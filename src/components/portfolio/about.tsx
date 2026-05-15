'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { SectionHeading } from './section-heading'

const stats = [
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Projects Completed', value: 20, suffix: '+' },
  { label: 'Happy Clients', value: 12, suffix: '+' },
  { label: 'CAD Models', value: 100, suffix: '+' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text">
        {count}
        {suffix}
      </div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-50 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Dedicated professional turning complex ideas into precise CAD designs"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait with animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[3/4]">
              {/* Animated glow ring */}
              <motion.div
                className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-amber-500/30 to-orange-500/30 blur-md"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Rotating border */}
              <motion.div
                className="absolute -inset-1.5 rounded-2xl"
                style={{
                  background: 'conic-gradient(from 0deg, #f59e0b, #f97316, #f59e0b, transparent, #f59e0b)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-[2px] rounded-2xl bg-[#0a0a0a]" />
              </motion.div>

              {/* Floating profile image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden h-full w-full"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/images/about-portrait.jpeg"
                  alt="SYED - Professional AutoCAD Designer"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-[#0a0a0a]/20 to-transparent" />

                {/* Shimmer overlay */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(245,158,11,0.08) 45%, rgba(245,158,11,0.15) 50%, rgba(245,158,11,0.08) 55%, transparent 60%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>

              {/* Decorative dots */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  {Array.from({ length: 16 }).map((_, row) =>
                    Array.from({ length: 16 }).map((_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={col * 5 + 2.5}
                        cy={row * 5 + 2.5}
                        r="1"
                        fill={row * 4 + col < 8 ? '#f59e0b' : '#333'}
                        opacity={0.6}
                      />
                    ))
                  )}
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h3
              className="text-2xl font-semibold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Crafting Precision in Every Line
            </motion.h3>
            <motion.p
              className="text-gray-400 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Hi, I&apos;m SYED — a passionate AutoCAD designer with 5+ years of
              hands-on experience specializing in Pre-Engineered Building (PEB)
              structures, equipment parts design, and 2D/3D machinery part
              modeling. I bring engineering concepts to life through accurate,
              production-ready technical drawings and 3D models.
            </motion.p>
            <motion.p
              className="text-gray-400 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              From detailed PEB structural frameworks to complex equipment
              assemblies and precise machinery components, I approach every
              project with meticulous attention to detail. My goal is to deliver
              CAD solutions that meet the highest industry standards — ensuring
              clarity and precision for fabrication and manufacturing teams.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass rounded-xl p-4 text-center cursor-default"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-gray-500 text-xs mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
