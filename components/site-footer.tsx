import { MapPin, Mail, MessageCircle } from 'lucide-react'
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  EMAIL,
  ADDRESS,
  NAV_LINKS,
} from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-navy font-black text-lg">
                A
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-wide text-white">
                  ASSERTIVE
                </span>
                <span className="text-[0.65rem] font-semibold tracking-[0.35em] text-brand">
                  BUSINESS
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slatey">
              Servicios contables, fiscales y corporativos 100% en español para
              la comunidad hispana de Houston, Texas.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slatey transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slatey">
              <li>Bookkeeping y Contabilidad</li>
              <li>Impuestos Individuales y Corporativos</li>
              <li>Creación de LLC y Corporaciones</li>
              <li>Servicio de Notario</li>
              <li>Control Interno con IA</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slatey">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{ADDRESS}</span>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-brand"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-brand" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-brand"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slatey">
            © {year} Assertive Business. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-slatey">
            <a href="#" className="transition-colors hover:text-brand">
              Aviso de Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-brand">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
