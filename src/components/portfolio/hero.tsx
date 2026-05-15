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
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg z-0" />

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-500/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8"
        >
          <DraftingCompass className="h-4 w-4 text-amber-500" />
          <span className="text-sm text-gray-300">Professional CAD Solutions</span>
        </motion.div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, type: 'spring', stiffness: 100 }}
              className={
                word === 'Designer' || word === 'Drafter'
                  ? 'gradient-text inline-block '
                  : 'text-white inline-block '
              }
            >
              {word}{' '}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4">
          {subtitleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
              className={`inline-block ${word === '•' ? 'text-amber-500 mx-2' : 'mr-1'}`}
            >
              {word}
            </motion.span>
          ))}
        </p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-gray-500 max-w-2xl mx-auto mb-10 text-base md:text-lg"
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => {
                const el = document.querySelector('#portfolio')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold px-8 py-6 text-base hover:from-amber-600 hover:to-orange-600 glow-amber rounded-lg"
            >
              View My Work
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              onClick={() => {
                const el = document.querySelector('#contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base rounded-lg"
            >
              Get In Touch
            </Button>
          </motion.div>
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
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-gray-500 hover:text-amber-500 transition-colors p-2"
          >
            <div className="flex flex-col items-center gap-1">
              <ArrowDown className="h-5 w-5" />
              <span className="text-xs text-gray-600">Scroll</span>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
