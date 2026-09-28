import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-brand-dark px-4 py-4 shadow-2xl shadow-brand-dark/40 transition-all hover:bg-brand-emerald sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-brand-dark/40" />
      <MessageCircle className="relative h-6 w-6 text-white" />
      <span className="relative hidden text-sm font-semibold text-white sm:inline">
        Agendar Asesoría
      </span>
    </a>
  )
}
