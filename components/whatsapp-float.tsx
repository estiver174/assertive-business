'use client'

import { useEffect } from 'react'

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

  return null
}
