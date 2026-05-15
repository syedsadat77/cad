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
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[3/4]">
              {/* Decorative border */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 blur-sm" />
              <div className="absolute -inset-1 rounded-2xl border border-amber-500/30" />
              <div className="relative rounded-2xl overflow-hidden h-full w-full">
                <Image
                  src="/images/about-portrait.jpeg"
                  alt="SYED - Professional AutoCAD Designer"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
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
            <h3 className="text-2xl font-semibold text-foreground">
              Crafting Precision in Every Line
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Hi, I&apos;m SYED — a passionate AutoCAD designer with 5+ years of
              hands-on experience specializing in Pre-Engineered Building (PEB)
              structures, equipment parts design, and 2D/3D machinery part
              modeling. I bring engineering concepts to life through accurate,
              production-ready technical drawings and 3D models.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From detailed PEB structural frameworks to complex equipment
              assemblies and precise machinery components, I approach every
              project with meticulous attention to detail. My goal is to deliver
              CAD solutions that meet the highest industry standards — ensuring
              clarity and precision for fabrication and manufacturing teams.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-muted-foreground text-xs mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
