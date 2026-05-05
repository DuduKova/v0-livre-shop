"use client"

import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

const OUR_ROOTS_IMAGE = "/images/our-roots.jpg"

export function OurRootsSection() {
  const { t } = useLanguage()

  return (
    <section id="nuestras-raices" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 md:max-w-lg shrink-0">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl shadow-lg md:mx-0 md:max-w-none bg-muted">
              <Image
                src={OUR_ROOTS_IMAGE}
                alt={t.ourRoots.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 42vw, 90vw"
                quality={78}
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 min-w-0 text-center md:text-left">
            <p className="text-primary tracking-[0.4em] text-xs uppercase mb-6">
              {t.ourRoots.tag}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
              {t.ourRoots.title}
            </h2>
            <div className="w-16 h-px bg-primary mx-auto md:mx-0 mb-8" />
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg md:text-xl text-foreground font-medium">{t.ourRoots.p1}</p>
              <p>{t.ourRoots.p2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
