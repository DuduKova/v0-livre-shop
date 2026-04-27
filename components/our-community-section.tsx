"use client"

import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

const OUR_COMMUNITY_IMAGE = "/images/our-community.png"

export function OurCommunitySection() {
  const { t } = useLanguage()

  return (
    <section id="comunidad" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-primary tracking-[0.4em] text-xs uppercase mb-6">
            {t.ourCommunity.tag}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 text-balance">
            {t.ourCommunity.title}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8" />
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-lg md:text-xl text-foreground font-medium">
              {t.ourCommunity.p1}
            </p>
            <p>{t.ourCommunity.p2}</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          <div className="relative mx-auto w-full h-[min(50vh,28rem)] sm:h-[32rem] overflow-hidden rounded-2xl bg-[#DCDAD2] shadow-sm ring-1 ring-black/5">
            <Image
              src={OUR_COMMUNITY_IMAGE}
              alt={t.ourCommunity.imageAlt}
              fill
              className="object-contain p-2 sm:p-4"
              sizes="(min-width: 768px) 48rem, 100vw"
              quality={78}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
