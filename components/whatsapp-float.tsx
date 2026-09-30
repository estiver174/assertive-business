'use client'

import { useEffect } from 'react'

// Declaración global para TypeScript para reconocer el objeto de Crisp
declare global {
  interface Window {
    $crisp?: any[]
    CRISP_WEBSITE_ID?: string
  }
}

export function WhatsappFloat() {
  useEffect(() => {
    // Inicializar la configuración de Crisp
    window.$crisp = []
    window.CRISP_WEBSITE_ID = "a44e0f4d-5e32-4520-af80-ff2f41e37481"

    // Crear e insertar el script de Crisp en el documento
    const d = document
    const s = d.createElement("script")
    s.src = "https://client.crisp.chat/l.js"
    s.async = true
    d.getElementsByTagName("head")[0].appendChild(s)
  }, [])

  // Este componente no renderiza nada visual propio porque Crisp inyecta su propio widget flotante flotante
  return null
}
