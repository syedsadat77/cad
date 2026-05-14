'use client'

import { Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            Designed by <span className="text-amber-500 font-medium">SYED</span>{' '}
            &copy; {new Date().getFullYear()}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-amber-500 hover:glow-amber transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:syed@autocaddesigner.com"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-amber-500 hover:glow-amber transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="tel:+1234567890"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-amber-500 hover:glow-amber transition-all duration-300"
              aria-label="Phone"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
