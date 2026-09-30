'use client'

import { useState } from 'react'
import { MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react'

export function LocationSection() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const formData = new FormData(e.currentTarget)
    
    // Usamos el servicio seguro y oficial de Formspree con tu correo institucional
    const response = await fetch('https://formspree.io/f/xlgppwaz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

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

          {/* Columna del Formulario Seguro */}
          <div className="rounded-2xl bg-navy p-8 border border-white/10 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">Solicita tu Asesoría</h3>
            <p className="text-sm text-slate-300 mb-6">Completa el formulario y un especialista te contactará.</p>
            
            {submitted ? (
              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-6 text-center space-y-3">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
                <h4 className="text-lg font-bold text-white">¡Solicitud Enviada con Éxito!</h4>
                <p className="text-sm text-slate-300">
                  Hemos recibido tus datos correctamente. Nos pondremos en contacto contigo a la brevedad en <span className="text-brand font-medium">info@assertivebusiness.us</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-brand underline hover:text-brand-light"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full rounded-lg bg-navy-deep px-4 py-2.5 text-sm text-white border border-white/25 focus:border-brand outline-none transition-all"
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
                      className="w-full rounded-lg bg-navy-deep px-4 py-2.5 text-sm text-white border border-white/25 focus:border-brand outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Teléfono</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required 
                      placeholder="+1 (832) ..."
                      className="w-full rounded-lg bg-navy-deep px-4 py-2.5 text-sm text-white border border-white/25 focus:border-brand outline-none transition-all"
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
                    className="w-full rounded-lg bg-navy-deep px-4 py-2.5 text-sm text-white border border-white/25 focus:border-brand outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {error && (
                  <p className="text-xs text-red-400">Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.</p>
                )}

                <button 
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand py-3 text-sm font-semibold text-navy transition-all hover:bg-brand-light shadow-lg shadow-brand/20 cursor-pointer disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  {submitting ? 'Enviando solicitud...' : 'Enviar Solicitud'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
