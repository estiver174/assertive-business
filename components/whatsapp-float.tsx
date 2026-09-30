'use client'

import { useEffect } from 'react'
import { MessageSquareText } from 'lucide-react'

declare global {
  interface Window {
    $crisp?: any[]
    CRISP_WEBSITE_ID?: string
    openCrispChat?: () => void
  }
}

export function WhatsappFloat() {
  useEffect(() => {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = "a44e0f4d-5e32-4520-af80-ff2f41e37481"

    const d = document
    const s = d.createElement("script")
    s.src = "https://client.crisp.chat/l.js"
    s.async = true
    d.getElementsByTagName("head")[0].appendChild(s)

    // Función global para abrir el chat desde cualquier botón de la página
    window.openCrispChat = () => {
      if (window.$crisp) {
        window.$crisp.push(["do", "chat:open"])
      }
    }
  }, [])

  const handleOpenChat = (e: React.MouseEvent) => {
    e.preventDefault()
    if (window.$crisp) {
      window.$crisp.push(["do", "chat:open"])
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
      {/* Etiqueta flotante corporativa con fondo verde y letras blancas */}
      <div className="hidden sm:flex items-center bg-[#22c55e] text-white text-xs md:text-sm font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-300 group-hover:scale-105 pointer-events-none">
        Chatea con un profesional
      </div>

      {/* Botón flotante corporativo */}
      <button
        onClick={handleOpenChat}
        aria-label="Chatea con un profesional"
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer focus:outline-none"
      >
        <MessageSquareText className="w-7 h-7 md:w-8 md:h-8" />
        
        {/* Indicador de estado */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white border-2 border-[#22c55e] rounded-full animate-pulse"></span>
      </button>
    </div>
  )
}
