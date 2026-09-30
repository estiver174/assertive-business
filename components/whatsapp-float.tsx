'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    $crisp?: any[]
    CRISP_WEBSITE_ID?: string
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
  }, [])

  return (
    <>
      <style jsx global>{`
        /* Burbuja de texto con fondo verde y letras blancas al lado del botón original de Crisp */
        .crisp-client .cc-1uoi::before {
          content: "Chatea con un profesional";
          position: absolute;
          right: 70px;
          top: 50%;
          transform: translateY(-50%);
          background-color: #22c55e; /* Verde brillante corporativo */
          color: #ffffff; /* Letras blancas */
          padding: 10px 16px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 8px 20px rgba(34, 197, 94, 0.35);
          pointer-events: none;
        }

        /* Ocultar la burbuja en pantallas de celulares muy pequeños para no invadir espacio */
        @media (max-width: 640px) {
          .crisp-client .cc-1uoi::before {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
