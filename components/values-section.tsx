"use client"

import { Leaf, Heart, Award, Sparkles } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const superfoods = [
  {
    name: "Quinoa",
    descriptionEs: "Grano ancestral de los Andes",
    descriptionEn: "Ancestral grain of the Andes",
  },
  {
    name: "Lucuma",
    descriptionEs: "El oro de los Incas",
    descriptionEn: "The gold of the Incas",
  },
  {
    name: "Camu Camu",
    descriptionEs: "Superfrutas de la Amazonia",
    descriptionEn: "Amazonian superfruits",
  },
]

export function ValuesSection() {
  const { t, language } = useLanguage()

  const values = [
    {
      icon: Heart,
      title: t.values.directTrade.title,
      description: t.values.directTrade.desc,
    },
    {
      icon: Award,
      title: t.values.beanToBar.title,
      description: t.values.beanToBar.desc,
    },
  ]

  return (
    <section id="valores" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-primary tracking-[0.4em] text-xs uppercase mb-6">
            {t.values.tag}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 text-balance">
            {t.values.title}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </div>

        {/* Main Values */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto mb-20">
          {values.map((value) => (
            <div key={value.title} className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 border border-primary/30 rounded-full flex items-center justify-center">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Superfoods */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary tracking-[0.3em] text-xs uppercase">
                {t.values.superfoods.tag}
              </span>
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.values.superfoods.desc}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {superfoods.map((food) => (
              <div
                key={food.name}
                className="p-8 border border-border/50 bg-card/50 text-center hover:border-primary/50 transition-colors duration-300"
              >
                <Leaf className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-serif text-lg text-foreground mb-2">
                  {food.name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {language === 'es' ? food.descriptionEs : food.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
