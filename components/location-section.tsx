'use client'

import { MapPin, Mail, Phone, Send } from 'lucide-react'

export function LocationSection() {
  return (
    <section id="contacto" className="bg-navy-deep py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold tracking-wider text-brand uppercase">Ubicación y Contacto</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Estamos listos para impulsar tu negocio
          </h2>
          <p className="mt-4 text-slate-300">
            Visítanos en nuestra oficina en Houston o déjanos tus datos a través de nuestro formulario.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Columna de Información y Oficina */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-xl bg-white/5 p-6 border border-white/10">
              <div className="rounded-lg bg-brand/10 p-3 text-brand">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Dirección Principal</h3>
                <p className="text-sm text-slate-300 mt-1">7322 Southwest Fwy Ste. 1153, Houston, TX 77074, EE. UU.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-white/5 p-6 border border-white/10">
              <div className="rounded-lg bg-brand/10 p-3 text-brand">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Teléfono Directo</h3>
                <p className="text-sm text-slate-300 mt-1">+1 (832) 460-4828</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-white/5 p-6 border border-white/10">
              <div className="rounded-lg bg-brand/10 p-3 text-brand">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Correo Electrónico</h3>
                <p className="text-sm text-slate-300 mt-1">info@assertivebusiness.us</p>
              </div>
            </div>
          </div>

          {/* Columna del Formulario Conectado a tu Correo */}
          <div className="rounded-2xl bg-navy p-8 border border-white/10 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">Solicita tu Asesoría</h3>
            <p className="text-sm text-slate-300 mb-6">Completa el formulario y un especialista te contactará.</p>
            
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="space-y-4"
            >
              {/* Clave de acceso pública vinculada a tu correo */}
              <input type="hidden" name="access_key" value="535a3964-b054-477b-84a1-db9b015e5a26" />
              <input type="hidden" name="subject" value="Nuevo mensaje desde la web de Assertive Business" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Nombre Completo</label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  placeholder="Ej. Carlos Mendoza"
                  className="w-full rounded-lg bg-navy-deep px-4 py-2.5 text-sm text-white border border-white/20 focus:border-brand outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Correo Electrónico</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    placeholder="correo@empresa.com"
                    className="w-full rounded-lg bg-navy-deep px-4 py-2.5 text-sm text-white border border-white/20 focus:border-brand outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Teléfono</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required 
                    placeholder="+1 (832) ..."
                    className="w-full rounded-lg bg-navy-deep px-4 py-2.5 text-sm text-white border border-white/20 focus:border-brand outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Descripción del Servicio Deseado</label>
                <textarea 
                  name="message"
                  rows={4}
                  required 
                  placeholder="Cuéntanos brevemente qué necesitas (contabilidad, impuestos, creación de empresa...)"
                  className="w-full rounded-lg bg-navy-deep px-4 py-2.5 text-sm text-white border border-white/20 focus:border-brand outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand py-3 text-sm font-semibold text-navy transition-all hover:bg-brand-light shadow-lg shadow-brand/20 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
