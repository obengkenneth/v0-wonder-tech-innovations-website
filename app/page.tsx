import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
