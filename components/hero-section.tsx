import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-cacao.jpg')" }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-primary tracking-[0.4em] text-xs sm:text-sm uppercase mb-6 animate-fade-in">
          Valle Sagrado, Peru
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-tight mb-8">
          <span className="block text-balance">Taste the soul</span>
          <span className="block text-balance">of the <em className="text-primary">Andes</em></span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Chocolate artesanal premium, elaborado con cacao fino de aroma 
          desde las alturas del Valle Sagrado del Peru.
        </p>
        <Link
          href="#productos"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all duration-300"
        >
          Descubre Nuestra Coleccion
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  )
}
