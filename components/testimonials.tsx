import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Kwame Asante",
    company: "TechStart Ghana",
    text: "WonderTech transformed our business with an incredible web platform. Their team is professional, innovative, and truly understands our vision.",
    rating: 5,
  },
  {
    name: "Ama Osei",
    company: "Digital Solutions Ltd",
    text: "Outstanding service from start to finish. The attention to detail and commitment to excellence is unmatched. Highly recommended!",
    rating: 5,
  },
  {
    name: "Kofi Mensah",
    company: "Innovation Hub",
    text: "Working with WonderTech was a game-changer for our company. They delivered beyond expectations and continue to support us.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground">Trusted by businesses across Ghana and beyond</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-all animate-fade-in-up animate-stagger-${index + 1}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
