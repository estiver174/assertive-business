import Image from 'next/image'
import { Languages, HeartHandshake, Eye, Scale } from 'lucide-react'

const VALUES = [
  {
    icon: Languages,
    title: '100% en Español',
    description:
      'Te explicamos todo con claridad, en tu idioma, sin tecnicismos confusos.',
  },
  {
    icon: HeartHandshake,
    title: 'Atención Personalizada',
    description:
      'Un trato cercano y humano, enfocado en las necesidades reales de tu negocio.',
  },
  {
    icon: Eye,
    title: 'Transparencia Total',
    description:
      'Sabes en todo momento qué hacemos, cómo y por qué. Sin sorpresas.',
  },
  {
    icon: Scale,
    title: 'Honestidad y Ética',
    description:
      'Asesoría realista y ética, siempre enfocada en las normativas fiscales vigentes.',
  },
]

export function TrustSection() {
  return (
    <section id="nosotros" className="relative bg-navy-deep py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-navy-deep/60">
            <Image
              src="/images/about-office.png"
              alt="Asesora financiera hispana atendiendo a un cliente en una oficina moderna"
              width={640}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl border border-brand/30 bg-brand px-6 py-4 shadow-xl sm:-right-6">
            <p className="text-3xl font-black text-navy">100%</p>
            <p className="text-xs font-semibold text-navy/80">
              En español y a tu lado
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Por qué elegirnos
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Una firma cercana en la que puedes confiar
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-slatey">
            En Assertive Business creemos que la mejor asesoría es la que se
            entiende. Por eso trabajamos de forma transparente, cercana y
            personalizada, con la comunidad hispana de Houston como prioridad.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-navy-card p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slatey">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
