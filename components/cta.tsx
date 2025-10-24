import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary/80 to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Let's discuss how WonderTech Innovations can help you achieve your goals with innovative software solutions.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
        >
          Get Started Today <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  )
}
