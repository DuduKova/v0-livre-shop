"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/LanguageContext"
import { LivreLogo } from "@/components/brand/livre-logo"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { href: "#nuestra-historia", label: t.nav.story },
    { href: "#productos", label: t.nav.products },
    { href: "#contacto", label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <LivreLogo
          size="md"
          showTagline
          taglineClassName="hidden sm:block"
          priority
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 border-l border-border pl-8">
            <button
              onClick={() => setLanguage("es")}
              className={cn(
                "text-sm font-medium transition-colors",
                language === "es" ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              ES
            </button>
            <span className="text-muted-foreground/30">|</span>
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "text-sm font-medium transition-colors",
                language === "en" ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu Button & Language Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage("es")}
              className={cn(
                "text-sm font-medium transition-colors",
                language === "es" ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              ES
            </button>
            <span className="text-muted-foreground/30">|</span>
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "text-sm font-medium transition-colors",
                language === "en" ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground p-2"
            aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 transition-all duration-300",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <ul className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
