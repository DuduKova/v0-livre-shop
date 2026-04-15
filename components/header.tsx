"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#nuestra-historia", label: "Nuestra Historia" },
  { href: "#productos", label: "Productos" },
  { href: "#valores", label: "Valores" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl tracking-wide text-primary">LIVRE</span>
          <span className="hidden sm:inline-block text-xs tracking-[0.3em] text-muted-foreground uppercase">Premium Chocolate</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
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
