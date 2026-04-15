"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary tracking-[0.4em] text-xs uppercase mb-6">
              Contacto
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 text-balance">
              Hablemos
            </h2>
            <div className="w-16 h-px bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground">
              Estamos aqui para responder tus preguntas y crear experiencias 
              de chocolate inolvidables para ti.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12 border border-primary/30 bg-card/50">
              <div className="w-16 h-16 mx-auto mb-6 border border-primary rounded-full flex items-center justify-center">
                <Send className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                Mensaje Enviado
              </h3>
              <p className="text-muted-foreground">
                Gracias por contactarnos. Te responderemos pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-muted-foreground mb-2 tracking-wide"
                  >
                    Nombre y Apellido
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-muted-foreground mb-2 tracking-wide"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-muted-foreground mb-2 tracking-wide"
                >
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="+51 999 999 999"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-muted-foreground mb-2 tracking-wide"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Cuentanos como podemos ayudarte..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 disabled:opacity-70 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Spinner className="w-5 h-5" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
