"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/LanguageContext"

const LOGO_SRC = "/brand/livre-logo.jpg"
const LOGO_WIDTH = 1024
const LOGO_HEIGHT = 913

const sizeConfig = {
  sm: { image: "h-8 w-auto", word: "text-xl", tag: "text-[0.6rem] tracking-[0.2em] gap-0" },
  md: { image: "h-10 w-auto", word: "text-2xl", tag: "text-[0.65rem] tracking-[0.25em] gap-0" },
  lg: { image: "h-12 w-auto", word: "text-3xl", tag: "text-xs tracking-[0.3em] gap-0.5" },
} as const

type LivreLogoProps = {
  size?: keyof typeof sizeConfig
  showTagline?: boolean
  className?: string
  taglineClassName?: string
  /** Use when the logo is not inside a link (e.g. print) */
  asDiv?: boolean
  /** Prefer true for above-the-fold header usage */
  priority?: boolean
}

export function LivreLogo({
  size = "md",
  showTagline = true,
  className,
  taglineClassName,
  asDiv = false,
  priority = false,
}: LivreLogoProps) {
  const { t } = useLanguage()
  const c = sizeConfig[size]

  const content = (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image
        src={LOGO_SRC}
        alt={t.brand.logoAlt}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className={cn(
          "shrink-0 object-contain object-left rounded-md ring-1 ring-black/10",
          c.image
        )}
        sizes="(max-width: 768px) 96px, 128px"
        priority={priority}
      />
      <span className="flex flex-col min-w-0 text-left">
        <span
          className={cn(
            "font-serif font-semibold tracking-[0.12em] text-primary leading-tight",
            c.word
          )}
        >
          LIVRE
        </span>
        {showTagline && (
          <span
            className={cn(
              "text-muted-foreground uppercase font-sans",
              c.tag,
              taglineClassName
            )}
          >
            {t.brand.tagline}
          </span>
        )}
      </span>
    </span>
  )

  if (asDiv) {
    return <div className="inline-flex">{content}</div>
  }

  return (
    <Link href="/" className="inline-flex group">
      {content}
    </Link>
  )
}
