"use client"

import { useLanguage } from "@/context/LanguageContext"

export function StorySection() {
  const { t } = useLanguage()

  return (
    <section id="nuestra-historia" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-primary tracking-[0.4em] text-xs uppercase mb-6">
            {t.story.tag}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 text-balance">
            {t.story.title}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground text-center leading-relaxed">
          <p className="text-lg md:text-xl text-foreground font-medium">{t.story.p1}</p>
          <p>{t.story.p2}</p>
          <p>{t.story.p3}</p>
          <p>{t.story.p4}</p>
          <p>{t.story.p5}</p>
        </div>
      </div>
    </section>
  )
}
