'use client'

import { useEffect, useState } from 'react'
import { MessageSquareText } from 'lucide-react'

declare global {
  interface Window {
    $crisp?: any[]
    CRISP_WEBSITE_ID?: string
  }
}

export function WhatsappFloat() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = "a44e0f4d-5e32-4520-af80-ff2f41e37481"

    const d = document
    const s = d.createElement("script")
    s.src = "https://client.crisp.chat/l.js"
    s.async = true
    s.onload = () => setLoaded(true)
    d.getElementsByTagName("head")[0].appendChild(s)
  }, [])

  // Función para abrir el chat de Crisp al hacer clic en nuestro botón personalizado
  const handleOpenChat = () => {
    if (window.$crisp) {
      window.$crisp.push(["do", "chat:open"])
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
      {/* Etiqueta flotante corporativa */}
      <div className="hidden sm:flex items-center bg-navy-deep/95 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-105">
        Chatea con un profesional
      </div>

      {/* Botón flotante grande y elegante */}
      <button
        onClick={handleOpenChat}
        aria-label="Chatea con un profesional"
        className="relative flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 bg-brand hover:bg-brand-light text-navy rounded-full shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer focus:outline-none"
      >
        <MessageSquareText className="w-8 h-8 sm:w-9 sm:h-9" />
        
        {/* Indicador verde de estado en línea */}
        <span className="absolute top-1 right-1 w-4 h-4 bg-emerald-400 border-2 border-navy rounded-full animate-pulse"></span>
      </button>
    </div>
  )
}
