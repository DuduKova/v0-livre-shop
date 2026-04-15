import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { ProductsSection } from "@/components/products-section"
import { ValuesSection } from "@/components/values-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StorySection />
      <ProductsSection />
      <ValuesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
