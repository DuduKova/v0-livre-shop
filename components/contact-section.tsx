"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"
import { useLanguage } from "@/context/LanguageContext"

export function ContactSection() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      // In a real app we might show a toast error here
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary tracking-[0.4em] text-xs uppercase mb-6">
              {t.contact.tag}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 text-balance">
              {t.contact.title}
            </h2>
            <div className="w-16 h-px bg-primary mx-auto mb-8" />
            <div className="text-muted-foreground space-y-2">
              <p>{t.contact.desc}</p>
              <p>{t.contact.desc2}</p>
              <p>{t.contact.desc3}</p>
            </div>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12 border border-primary/30 bg-card/50">
              <div className="w-16 h-16 mx-auto mb-6 border border-primary rounded-full flex items-center justify-center">
                <Send className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                {t.contact.form.successTitle}
              </h3>
              <p className="text-muted-foreground">
                {t.contact.form.successDesc}
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
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-muted-foreground mb-2 tracking-wide"
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-muted-foreground mb-2 tracking-wide"
                >
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder={t.contact.form.phonePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-muted-foreground mb-2 tracking-wide"
                >
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
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
                    {t.contact.form.submitting}
                  </>
                ) : (
                  <>
                    {t.contact.form.submit}
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
