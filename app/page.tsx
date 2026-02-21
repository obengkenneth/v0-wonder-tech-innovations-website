import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "WonderTech Innovations | Software Development in Ghana",
  description:
    "Custom web and mobile app development, UI/UX design, and IT consulting in Accra, Ghana. Transform your vision into reality with innovative software solutions.",
}

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
