import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { FullServiceSection } from "@/components/full-service-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BrandsSection } from "@/components/brands-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        {/* <ServicesSection /> */}
        <FullServiceSection />
        <TestimonialsSection />
        {/* <BrandsSection /> */}
      </main>
      <Footer />
    </div>
  )
}
