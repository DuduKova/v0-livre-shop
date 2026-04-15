import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    title: "Bombones y Trufas",
    description: "Rellenos cremosos envueltos en el mas fino chocolate",
    image: "/images/bombones.jpg",
    href: "#",
  },
  {
    title: "Chocotejas Peruanas",
    description: "Tradicion peruana con manjar blanco y pecanas",
    image: "/images/chocotejas.jpg",
    href: "#",
  },
  {
    title: "Barras y Tabletas",
    description: "Chocolate puro en diferentes porcentajes de cacao",
    image: "/images/barras.jpg",
    href: "#",
  },
  {
    title: "Grageas y Banados",
    description: "Frutos y semillas cubiertas de chocolate premium",
    image: "/images/grageas.jpg",
    href: "#",
  },
  {
    title: "Vegano",
    description: "Chocolate plant-based sin lacteos ni derivados",
    image: "/images/vegano.jpg",
    href: "#",
  },
  {
    title: "Delicatessen",
    description: "Seleccion gourmet para paladares exigentes",
    image: "/images/delicatessen.jpg",
    href: "#",
  },
]

export function ProductsSection() {
  return (
    <section id="productos" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-primary tracking-[0.4em] text-xs uppercase mb-6">
            Coleccion
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 text-balance">
            Nuestros Productos
          </h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative aspect-[4/5] overflow-hidden bg-card"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explorar <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
