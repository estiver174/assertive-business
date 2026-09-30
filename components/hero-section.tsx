import Image from 'next/image'
import { MessageCircle, MapPin, ShieldCheck, Star } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* decorative gradients */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-brand-emerald/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
            <MapPin className="h-3.5 w-3.5" />
            Houston, Texas · 100% en Español
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Soluciones contables, fiscales y corporativas con{' '}
            <span className="text-brand">rigor estratégico.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slatey">
            En Assertive Business te acompañamos con un enfoque personalizado y
            cercano para que tu negocio cumpla a tiempo con todas sus
            obligaciones contables y fiscales. Habla con nosotros en tu idioma y
            con total tranquilidad.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
           <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-navy shadow-xl shadow-brand/20 transition-all hover:bg-brand-light hover:shadow-brand/40"
          >
            <MessageCircle className="h-5 w-5" />
            Contáctanos
          </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-all hover:border-brand hover:text-brand"
            >
              Ver Servicios
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { value: '+10', label: 'Años de experiencia' },
              { value: '100%', label: 'Atención en español' },
              { value: 'A tiempo', label: 'Cumplimiento fiscal' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-brand">{stat.value}</dt>
                <dd className="mt-1 text-sm text-slatey">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-navy-deep/60">
            <Image
              src="/images/hero-advisory.png"
              alt="Ejecutivos hispanos recibiendo asesoría de negocios en una oficina moderna de Houston"
              width={720}
              height={820}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
          </div>

          {/* floating trust card */}
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-white/10 bg-navy-soft/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:left-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/15 text-brand">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                Asesoría ética y realista
              </p>
              <p className="text-xs text-slatey">Normativas fiscales vigentes</p>
            </div>
          </div>

          <div className="absolute -top-4 right-4 flex items-center gap-1.5 rounded-xl border border-white/10 bg-navy-soft/95 px-3 py-2 shadow-xl backdrop-blur-sm sm:right-6">
            <Star className="h-4 w-4 fill-brand text-brand" />
            <span className="text-sm font-semibold text-white">Confianza local</span>
          </div>
        </div>
      </div>
    </section>
  )
}
