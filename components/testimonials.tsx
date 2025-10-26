"use client"

import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Diamond",
    company: "Heera Logistics",
    text: "WonderTech transformed our business with an incredible web platform. Their team is professional, innovative, and truly understands our vision.",
    rating: 5,
  },
  {
    name: "Sophia",
    company: "S&M Ushering Services",
    text: "Outstanding service from start to finish. The attention to detail and commitment to excellence is unmatched. Highly recommended!",
    rating: 5,
  },
  {
    name: "Edward",
    company: "Study Agora",
    text: "Working with WonderTech was a game-changer for our company. They delivered beyond expectations and continue to support us.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground">Trusted by businesses across Ghana and beyond</p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="p-8 bg-card border border-border rounded-xl shadow-lg">
                    <div className="flex gap-1 mb-4 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 italic text-center text-lg leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="text-center">
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
