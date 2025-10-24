import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 animate-float animate-fade-in-up">
          <div className="inline-flex w-24 h-24 bg-white rounded-2xl items-center justify-center shadow-lg p-2">
            <Image
              src="/wondertech-logo.jpeg"
              alt="WonderTech Innovations Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance animate-fade-in-up animate-stagger-1">
          Empowering Businesses Through <span className="gradient-text">Innovative Software Solutions</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance animate-fade-in-up animate-stagger-2">
          Transform your vision into reality with cutting-edge technology and expert development. We build solutions
          that drive growth and innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animate-stagger-3">
          <Link
            href="/contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
          >
            Let's Build Together <ArrowRight size={20} />
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all hover:scale-105"
          >
            View Our Work
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-sm animate-fade-in-up animate-stagger-4">
          <div className="p-3 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all animate-scale-in animate-stagger-1">
            <p className="font-semibold text-primary">50+</p>
            <p className="text-muted-foreground">Projects</p>
          </div>
          <div className="p-3 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all animate-scale-in animate-stagger-2">
            <p className="font-semibold text-primary">30+</p>
            <p className="text-muted-foreground">Clients</p>
          </div>
          <div className="p-3 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all animate-scale-in animate-stagger-3">
            <p className="font-semibold text-primary">3+</p>
            <p className="text-muted-foreground">Years</p>
          </div>
        </div>
      </div>
    </section>
  )
}
