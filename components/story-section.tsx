export function StorySection() {
  return (
    <section id="nuestra-historia" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary tracking-[0.4em] text-xs uppercase mb-6">
            Nuestra Historia
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 text-balance">
            Del grano a la barra
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-12" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
          {/* Pillar 1 */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 border border-primary/30 rounded-full flex items-center justify-center">
              <span className="font-serif text-2xl text-primary">01</span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
              Herencia Ancestral
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Honramos las tecnicas ancestrales de los pueblos andinos, 
              quienes cultivaron el cacao como alimento sagrado durante milenios.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 border border-primary/30 rounded-full flex items-center justify-center">
              <span className="font-serif text-2xl text-primary">02</span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
              Bean to Bar
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Controlamos cada paso del proceso, desde la seleccion del grano 
              hasta el moldeo final, garantizando la maxima calidad.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 border border-primary/30 rounded-full flex items-center justify-center">
              <span className="font-serif text-2xl text-primary">03</span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
              Valle Sagrado
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro hogar en Tarabamba nos conecta con la tierra sagrada 
              de los Incas, donde el cacao crece bajo condiciones unicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
