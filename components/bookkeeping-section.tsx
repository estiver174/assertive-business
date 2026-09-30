import Image from 'next/image'
import {
  Settings2,
  Wallet,
  Receipt,
  FileBarChart,
  TrendingUp,
  MessageCircle,
} from 'lucide-react'

const FEATURES = [
  {
    icon: Settings2,
    title: 'Set up de software contable',
    benefit:
      'Organización desde el día uno, sin dolores de cabeza técnicos.',
  },
  {
    icon: Wallet,
    title: 'Payroll / Nómina',
    benefit:
      'Pago puntual a tu equipo cumpliendo todas las normativas laborales.',
  },
  {
    icon: Receipt,
    title: 'Sales Tax / Impuestos de Venta',
    benefit:
      'Evita multas y recargos con la entrega a tiempo ante el estado.',
  },
  {
    icon: FileBarChart,
    title: 'Informes financieros mensuales y anuales',
    benefit:
      'Claridad absoluta sobre la salud y las ganancias de tu negocio.',
  },
  {
    icon: TrendingUp,
    title: 'Análisis financiero continuo',
    benefit:
      'Información estratégica para tomar decisiones de crecimiento.',
  },
]

export function BookkeepingSection() {
  return (
    <section id="servicios" className="relative bg-navy-deep py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand">
              Servicio Destacado
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Servicios de Bookkeeping y Contabilidad en Houston, Texas
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-slatey">
              Mantener el cumplimiento legal, contable y fiscal de tu empresa en
              Estados Unidos no debería ser una carga. Ya sea que operes una LLC
              o una Corporación, nos encargamos de tus libros con precisión y
              transparencia, para que tú te concentres en hacer crecer tu
              negocio con tranquilidad.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-xl">
              <Image
                src="/images/bookkeeping-analysis.png"
                alt="Análisis de gráficos e informes financieros sobre un escritorio de contabilidad"
                width={640}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>

            <a
              href="#contacto"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-navy transition-all hover:bg-brand-light hover:shadow-xl hover:shadow-brand/30"
            >
              <MessageCircle className="h-5 w-5" />
              Solicita tu diagnóstico contable
            </a>
          </div>

          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-slatey">
              Qué incluye el servicio
            </p>
            <ul className="space-y-4">
              {FEATURES.map((feature) => {
                const Icon = feature.icon
                return (
                  <li
                    key={feature.title}
                    className="group flex gap-4 rounded-2xl border border-white/10 bg-navy-card p-5 transition-all hover:border-brand/40 hover:bg-navy-soft"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-navy">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slatey">
                        <span className="font-semibold text-brand-light">
                          Beneficio:{' '}
                        </span>
                        {feature.benefit}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
