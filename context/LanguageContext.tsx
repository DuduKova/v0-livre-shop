"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

type Language = "es" | "en"

type Translations = {
  [key in Language]: {
    nav: {
      story: string
      products: string
      contact: string
      howToBuy: string
    }
    hero: {
      subtitle: string
      titleLine1: string
      titleLine2: string
      titleEmphasis: string
      description: string
      cta: string
      scroll: string
    }
    story: {
      tag: string
      title: string
      p1: string
      p2: string
      p3: string
      p4: string
      p5: string
    }
    values: {
      tag: string
      title: string
      directTrade: {
        title: string
        desc: string
      }
      beanToBar: {
        title: string
        desc: string
      }
      superfoods: {
        tag: string
        desc: string
      }
    }
    products: {
      tag: string
      title: string
      explore: string
      categories: {
        bombones: { title: string; desc: string }
        chocotejas: { title: string; desc: string }
        barras: { title: string; desc: string }
        grageas: { title: string; desc: string }
        vegano: { title: string; desc: string }
        delicatessen: { title: string; desc: string }
      }
    }
    contact: {
      tag: string
      title: string
      desc: string
      desc2: string
      desc3: string
      form: {
        name: string
        namePlaceholder: string
        email: string
        emailPlaceholder: string
        phone: string
        phonePlaceholder: string
        message: string
        messagePlaceholder: string
        submit: string
        submitting: string
        successTitle: string
        successDesc: string
      }
    }
    footer: {
      desc: string
      navTitle: string
      contactTitle: string
      location: string
      rights: string
      madeWithLove: string
    }
  }
}

const translations: Translations = {
  es: {
    nav: {
      story: "Nuestra Historia",
      products: "Productos",
      contact: "Contacto",
      howToBuy: "Como Comprar",
    },
    hero: {
      subtitle: "Valle Sagrado, Peru",
      titleLine1: "Prueba el alma",
      titleLine2: "de los",
      titleEmphasis: "Andes",
      description: "Chocolate artesanal premium, elaborado con cacao fino de aroma desde las alturas del Valle Sagrado del Peru.",
      cta: "Descubre Nuestra Coleccion",
      scroll: "Scroll",
    },
    story: {
      tag: "Nuestra Historia",
      title: "Del grano a la barra",
      p1: "Livre premium chocolate nace en el majestuoso valle sagrado de los incas, una tierra de historia energía y riqueza natural incomparable. Bajo la filosofía “bean to bar” transformamos cuidadosamente el cacao desde el grano hasta la obra final.",
      p2: "Somos herederos de una cultura ancestral donde el cacao no solo se cultiva… se honra.",
      p3: "Seleccionamos el cacao más fino del mundo y lo fusionamos con frutas, hierbas y superalimentos de origen peruano como la quinua,lúcuma,camu camu creando chocolates que conectan con la tierra, la historia y los sentidos.",
      p4: "Elaboramos bombones, trufas y chocolates con frutos secos, liofilizados cuidando cada detalle para transformar ingredientes nobles en experiencias únicas, llenas de identidad y sofisticación.",
      p5: "Cada creación nace del respeto: al origen, a los procesos y a las manos que lo hacen posible. Trabajamos bajo principios de comercio justo, de la mano de pequeños agricultores y productores locales, construyendo juntos un camino sostenible, auténtico y lleno de propósito. Más que chocolate, creamos experiencias que celebran nuestras raíces, elevan el sabor y cuentan una historia en cada bocado.",
    },
    values: {
      tag: "Nuestros Valores",
      title: "Compromiso con la excelencia",
      directTrade: {
        title: "Comercio directo",
        desc: "Precios justos con los agricultores.",
      },
      beanToBar: {
        title: "Del arbol a la barra",
        desc: "Cacao fino peruano.",
      },
      superfoods: {
        tag: "Superalimentos Peruanos",
        desc: "Fusionamos el cacao con los tesoros nutricionales del Peru, creando sabores unicos con beneficios extraordinarios.",
      }
    },
    products: {
      tag: "Coleccion",
      title: "Nuestros Productos",
      explore: "Explorar",
      categories: {
        bombones: { title: "Bombones y trufas", desc: "Rellenos cremosos envueltos en el mas fino chocolate" },
        chocotejas: { title: "Chocotejas peruanas", desc: "Tradicion peruana con manjar blanco y pecanas" },
        barras: { title: "Barras y tabletas", desc: "Chocolate puro en diferentes porcentajes de cacao" },
        grageas: { title: "Grageas y bañados", desc: "Frutos y semillas cubiertas de chocolate premium" },
        vegano: { title: "Vegano", desc: "Chocolate plant-based sin lacteos ni derivados" },
        delicatessen: { title: "Delicattesen", desc: "Seleccion gourmet para paladares exigentes" },
      }
    },
    contact: {
      tag: "Contacto",
      title: "Con gusto te atenderemos",
      desc: "Tenemos la suerte de haber nacido en el país que da origen al cacao.",
      desc2: "Transformamos el cacao en barras y estas barras en finos bombones.",
      desc3: "Ideales para regalar, tenemos muchos productos que encajan con tu personalidad.",
      form: {
        name: "Nombre y Apellido",
        namePlaceholder: "Tu nombre completo",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        phone: "Telefono",
        phonePlaceholder: "+51 999 999 999",
        message: "Mensaje",
        messagePlaceholder: "Cuentanos como podemos ayudarte...",
        submit: "Enviar Mensaje",
        submitting: "Enviando...",
        successTitle: "Mensaje Enviado",
        successDesc: "Gracias por contactarnos. Te responderemos pronto.",
      }
    },
    footer: {
      desc: "Chocolate artesanal premium desde el corazon del Valle Sagrado del Peru.",
      navTitle: "Navegacion",
      contactTitle: "Contacto",
      location: "Tarabamba, Valle Sagrado",
      rights: "Livre Premium Chocolate. Todos los derechos reservados.",
      madeWithLove: "Hecho con amor en el Valle Sagrado",
    }
  },
  en: {
    nav: {
      story: "Our Story",
      products: "Products",
      contact: "Contact",
      howToBuy: "How to Buy",
    },
    hero: {
      subtitle: "Sacred Valley, Peru",
      titleLine1: "Taste the soul",
      titleLine2: "of the",
      titleEmphasis: "Andes",
      description: "Premium artisanal chocolate, made with fine aroma cacao from the heights of the Sacred Valley of Peru.",
      cta: "Discover Our Collection",
      scroll: "Scroll",
    },
    story: {
      tag: "Our Story",
      title: "From bean to bar",
      p1: "Livre premium chocolate is born in the majestic Sacred Valley of the Incas, a land of incomparable history, energy, and natural wealth. Under the 'bean to bar' philosophy, we carefully transform cacao from the bean to the final masterpiece.",
      p2: "We are heirs to an ancestral culture where cacao is not only cultivated... it is honored.",
      p3: "We select the finest cacao in the world and fuse it with fruits, herbs, and superfoods of Peruvian origin like quinoa, lucuma, and camu camu, creating chocolates that connect with the land, history, and the senses.",
      p4: "We make bonbons, truffles, and chocolates with nuts, freeze-dried fruits, taking care of every detail to transform noble ingredients into unique experiences, full of identity and sophistication.",
      p5: "Every creation is born from respect: for the origin, the processes, and the hands that make it possible. We work under fair trade principles, hand in hand with small farmers and local producers, building together a sustainable, authentic path full of purpose. More than chocolate, we create experiences that celebrate our roots, elevate the flavor, and tell a story in every bite.",
    },
    values: {
      tag: "Our Values",
      title: "Commitment to excellence",
      directTrade: {
        title: "Direct Trade",
        desc: "Fair prices with farmers.",
      },
      beanToBar: {
        title: "From Tree to Bar",
        desc: "Fine Peruvian cacao.",
      },
      superfoods: {
        tag: "Peruvian Superfoods",
        desc: "We fuse cacao with the nutritional treasures of Peru, creating unique flavors with extraordinary benefits.",
      }
    },
    products: {
      tag: "Collection",
      title: "Our Products",
      explore: "Explore",
      categories: {
        bombones: { title: "Bonbons and Truffles", desc: "Creamy fillings wrapped in the finest chocolate" },
        chocotejas: { title: "Peruvian Chocotejas", desc: "Peruvian tradition with dulce de leche and pecans" },
        barras: { title: "Bars and Tablets", desc: "Pure chocolate in different cacao percentages" },
        grageas: { title: "Dragees and Coated", desc: "Fruits and seeds covered in premium chocolate" },
        vegano: { title: "Vegan", desc: "Plant-based chocolate without dairy or derivatives" },
        delicatessen: { title: "Delicatessen", desc: "Gourmet selection for demanding palates" },
      }
    },
    contact: {
      tag: "Contact",
      title: "We will gladly assist you",
      desc: "We are lucky to have been born in the country that gave origin to cacao.",
      desc2: "We transform cacao into bars and these bars into fine bonbons.",
      desc3: "Ideal for gifting, we have many products that fit your personality.",
      form: {
        name: "Full Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        phone: "Phone",
        phonePlaceholder: "+51 999 999 999",
        message: "Message",
        messagePlaceholder: "Tell us how we can help you...",
        submit: "Send Message",
        submitting: "Sending...",
        successTitle: "Message Sent",
        successDesc: "Thank you for contacting us. We will reply soon.",
      }
    },
    footer: {
      desc: "Premium artisanal chocolate from the heart of the Sacred Valley of Peru.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      location: "Tarabamba, Sacred Valley",
      rights: "Livre Premium Chocolate. All rights reserved.",
      madeWithLove: "Made with love in the Sacred Valley",
    }
  }
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.es
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
