import { Building2, Stamp, FileText, BrainCircuit, ArrowUpRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Building2,
    title: 'Creación de Empresas',
    description:
      'Formación de LLC y Corporaciones con toda la documentación en regla para operar legalmente en Estados Unidos.',
  },
  {
    icon: Stamp,
    title: 'Servicio de Notario',
    description:
      'Servicio de Notario Público en Houston, Texas, para certificar y autenticar tus documentos importantes.',
  },
  {
    icon: FileText,
    title: 'Impuestos Individuales y Corporativos',
    description:
      'Preparación y presentación de impuestos personales y de empresa, maximizando tu cumplimiento y tranquilidad.',
  },
  {
    icon: BrainCircuit,
    title: 'Control Interno con IA',
    description:
      'Asesoría en control interno para tu negocio, integrada con herramientas de Inteligencia Artificial para mayor eficiencia.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="relative bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Servicios Corporativos
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Todo lo que tu empresa necesita, en un solo lugar
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slatey">
            Soluciones integrales para acompañarte en cada etapa de tu negocio,
            desde su creación hasta su crecimiento.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <a
                key={service.title}
                href="#contacto"
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-navy-card p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-navy-deep/60 cursor-pointer"
              >
                <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-slatey/40 transition-colors group-hover:text-brand" />
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-navy">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slatey">
                  {service.description}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
