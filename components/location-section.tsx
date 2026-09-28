import { MapPin, Mail, MessageCircle, Navigation } from 'lucide-react'
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  EMAIL,
  ADDRESS,
  MAPS_URL,
} from '@/lib/site'

export function LocationSection() {
  return (
    <section
      id="ubicacion"
      className="relative bg-navy-deep py-20 lg:py-28"
      aria-labelledby="ubicacion-title"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div id="contacto" className="scroll-mt-24 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand">
              Ubicación y Contacto
            </span>
            <h2
              id="ubicacion-title"
              className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl"
            >
              Estamos en el corazón de Houston
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slatey">
              Visítanos en nuestra oficina o contáctanos hoy mismo. Estamos
              listos para ayudarte a poner tu negocio en orden.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-navy-card p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Dirección</p>
                  <p className="mt-1 text-sm leading-relaxed text-slatey">
                    {ADDRESS}
                  </p>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-navy-card p-5 transition-colors hover:border-brand/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">WhatsApp</p>
                  <p className="mt-1 text-sm text-slatey">{WHATSAPP_DISPLAY}</p>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-navy-card p-5 transition-colors hover:border-brand/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Correo</p>
                  <p className="mt-1 text-sm text-slatey">{EMAIL}</p>
                </div>
              </a>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-navy transition-all hover:bg-brand-light hover:shadow-xl hover:shadow-brand/30"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar Asesoría por WhatsApp
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-navy-deep/60">
            <iframe
              title="Mapa de la ubicación de Assertive Business en Houston, Texas"
              src="https://www.google.com/maps?q=7322+Southwest+Fwy+Ste+1153+Houston+TX+77074&output=embed"
              className="h-full min-h-[380px] w-full grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors hover:text-brand"
            >
              <Navigation className="h-4 w-4" />
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
