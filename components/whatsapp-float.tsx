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
      {/* Estilos personalizados para hacer el botón de Crisp más grande, visible y con la burbuja de texto */}
      <style jsx global>{`
        /* Ampliar el tamaño del botón flotante de Crisp */
        .crisp-client .cc-1uoi {
          width: 70px !important;
          height: 70px !important;
          bottom: 24px !important;
          right: 24px !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3) !important;
          transition: transform 0.3s ease !important;
        }
        .crisp-client .cc-1uoi:hover {
          transform: scale(1.08) !important;
        }

        /* Burbuja de texto corporativa flotante al lado del botón */
        .crisp-client .cc-1uoi::before {
          content: "Chatea con un profesional";
          position: absolute;
          right: 82px;
          top: 50%;
          transform: translateY(-50%);
          background-color: #0B192C; /* Color corporativo profundo */
          color: #ffffff;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.15);
          pointer-events: none;
          animation: fadeInOut 2s ease-in-out infinite alternate;
        }

        /* Ocultar la burbuja en pantallas muy pequeñas de celular para evitar estorbos */
        @media (max-width: 640px) {
          .crisp-client .cc-1uoi::before {
            display: none;
          }
          .crisp-client .cc-1uoi {
            width: 60px !important;
            height: 60px !important;
          }
        }
      `}</style>
    </>
  )
}
