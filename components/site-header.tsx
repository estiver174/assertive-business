'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-navy/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-navy-deep/40'
          : 'bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
        aria-label="Navegación principal"
      >
       <a href="#inicio" className="flex items-center gap-3 group" aria-label="ASSERTIVE BUSINESS - Inicio">
         <img
           src="/Logo assertive"
           alt="Assertive Business Logo"
           className="h-10 w-auto object-contain"
           />
         </a>
           
          <span className="hidden border-l border-white/15 pl-3 text-[0.7rem] font-medium tracking-wide text-slatey sm:block">
            Precisión que impulsa negocios
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slatey transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-brand-light hover:shadow-lg hover:shadow-brand/30 lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          Agendar Asesoría
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy/95 backdrop-blur-md lg:hidden">
          <ul className="space-y-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slatey transition-colors hover:bg-navy-soft hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-navy"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar Asesoría
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
