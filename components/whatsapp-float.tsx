'use client'

import { useState } from 'react'
import { MessageSquare, X, Send } from 'lucide-react'

export function WhatsappFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: 'agent', text: '¡Hola! Bienvenido a Assertive Business. ¿En qué podemos ayudarte hoy?' }
  ])
  const [input, setInput] = useState('')

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessages = [...messages, { sender: 'user', text: input }]
    setMessages(newMessages)
    setInput('')

    // Respuesta automática simulando al asesor
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'agent', text: 'Gracias por tu mensaje. Un asesor revisará tu consulta y te responderá a la brevedad.' }
      ])
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 rounded-full bg-brand px-5 py-3.5 text-sm font-semibold text-navy shadow-2xl shadow-brand/40 transition-all hover:scale-105 hover:bg-brand-light"
          aria-label="Abrir chat en vivo"
        >
          <MessageSquare className="h-5 w-5 fill-navy" />
          Chat en Línea
        </button>
      ) : (
        <div className="flex flex-col w-80 sm:w-96 rounded-2xl bg-navy border border-white/20 shadow-2xl overflow-hidden">
          {/* Cabecera del Chat */}
          <div className="flex items-center justify-between bg-navy-deep px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-bold text-white">Soporte Assertive Business</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Cerrar chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cuerpo de mensajes */}
          <div className="flex flex-col h-72 p-4 overflow-y-auto space-y-3 bg-navy/50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`max-w-[80%] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm ${
                  msg.sender === 'user' 
                    ? 'ml-auto bg-brand text-navy font-medium rounded-br-none' 
                    : 'mr-auto bg-white/10 text-slate-200 rounded-bl-none border border-white/5'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input para escribir */}
          <form onSubmit={handleSend} className="flex items-center gap-2 p-3 bg-navy-deep border-t border-white/10">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 rounded-lg bg-white/5 px-3.5 py-2 text-xs sm:text-sm text-white border border-white/10 focus:border-brand outline-none"
            />
            <button 
              type="submit"
              className="rounded-lg bg-brand p-2 text-navy transition-all hover:bg-brand-light"
              aria-label="Enviar mensaje"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
