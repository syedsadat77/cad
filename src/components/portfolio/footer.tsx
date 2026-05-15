'use client'

import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            Designed by <span className="text-amber-500 font-medium">SYED</span>{' '}
            &copy; {new Date().getFullYear()}
          </p>

          {/* Email Icon */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:syedsadat0123@gmail.com"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-amber-500 hover:glow-amber transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
