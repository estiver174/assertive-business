import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Assertive Business | Contabilidad e Impuestos en Houston, Texas',
  description:
    'Firma de servicios contables, fiscales y corporativos en Houston, Texas. Bookkeeping, impuestos, creación de LLC y asesoría 100% en español para la comunidad hispana.',
  generator: 'v0.app',
  keywords: [
    'contabilidad Houston',
    'bookkeeping Houston Texas',
    'impuestos en español',
    'creación de LLC Houston',
    'contador hispano Houston',
    'Assertive Business',
  ],
  openGraph: {
    title: 'Assertive Business | Contabilidad e Impuestos en Houston, Texas',
    description:
      'Servicios contables, fiscales y corporativos 100% en español en Houston, Texas.',
    type: 'website',
    locale: 'es_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a192f',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased bg-navy text-white font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
