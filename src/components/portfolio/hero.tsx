'use client'

import { motion } from 'framer-motion'
import { ArrowDown, DraftingCompass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  const titleWords = ['AutoCAD', 'Designer', '&', 'Drafter']
  const subtitleWords = ['PEB', 'Structures', '•', 'Equipment', 'Parts', '•', '2D/3D', 'Machinery']

  const scrollToAbout = () => {
    const el = document.querySelector('#about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="AutoCAD Designer Workspace"
          fill
          className="object-cover opacity-20 dark:opacity-20 opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8"
        >
          <DraftingCompass className="h-4 w-4 text-amber-500" />
          <span className="text-sm text-muted-foreground">Professional CAD Solutions</span>
        </motion.div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={
                word === 'Designer' || word === 'Drafter'
                  ? 'gradient-text '
                  : 'text-foreground '
              }
            >
              {word}{' '}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4">
          {subtitleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
              className={word === '•' ? 'text-amber-500 mx-2' : ''}
            >
              {word}
              {word !== '•' && i < subtitleWords.length - 1 ? ' ' : ''}
            </motion.span>
          ))}
        </p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg"
        >
          Transforming ideas into precise technical drawings and 3D models with
          years of expertise in industrial and structural CAD design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => {
              const el = document.querySelector('#portfolio')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold px-8 py-6 text-base hover:from-amber-600 hover:to-orange-600 glow-amber rounded-lg"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border-border text-foreground hover:bg-accent/10 px-8 py-6 text-base rounded-lg"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground hover:text-amber-500 transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
