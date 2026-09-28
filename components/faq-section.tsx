'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    question: '¿Qué es el bookkeeping y por qué lo necesita mi empresa?',
    answer:
      'El bookkeeping es el registro ordenado de todas las transacciones financieras de tu negocio. Es fundamental porque mantiene tus libros al día, te permite cumplir con tus obligaciones fiscales ante el IRS y el estado de Texas, y te da una visión clara de la salud financiera de tu LLC o Corporación para tomar mejores decisiones.',
  },
  {
    question: '¿Atienden empresas nuevas (LLC recién creadas)?',
    answer:
      'Sí. De hecho, acompañamos a muchos emprendedores desde el primer día. Configuramos tu software contable, organizamos tus cuentas y establecemos procesos claros para que tu empresa arranque con bases sólidas y sin complicaciones técnicas.',
  },
  {
    question: '¿Cada cuánto debo presentar el Sales Tax en Texas?',
    answer:
      'La frecuencia (mensual, trimestral o anual) depende del volumen de ventas de tu negocio y de lo que determine el estado de Texas. Nosotros revisamos tu caso, te indicamos tu calendario exacto y nos encargamos de presentar tus impuestos de venta a tiempo para que evites multas y recargos.',
  },
  {
    question: '¿Qué diferencia hay entre impuestos individuales y corporativos?',
    answer:
      'Los impuestos individuales corresponden a tu declaración personal, mientras que los corporativos aplican a tu empresa según su estructura legal (LLC, S-Corp, C-Corp, etc.). Cada uno tiene reglas y plazos distintos. Te asesoramos en ambos para asegurar el cumplimiento total y aprovechar los beneficios a los que tienes derecho.',
  },
  {
    question: '¿Realmente todo el servicio es en español?',
    answer:
      'Sí, absolutamente. Toda nuestra asesoría, comunicación y explicaciones son 100% en español. Nuestro objetivo es que entiendas cada detalle de la situación contable y fiscal de tu negocio con total claridad y confianza.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Preguntas Frecuentes
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Resolvemos tus dudas
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slatey">
            Todo lo que necesitas saber sobre bookkeeping e impuestos para tu
            empresa en Estados Unidos.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={cn(
                  'overflow-hidden rounded-2xl border transition-colors',
                  isOpen
                    ? 'border-brand/40 bg-navy-soft'
                    : 'border-white/10 bg-navy-card',
                )}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    >
                      <Plus className="h-5 w-5" />
                    </span>
                  </button>
                </h3>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-in-out',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-slatey">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
