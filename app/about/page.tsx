import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle2, Users, Lightbulb, Target } from "lucide-react"
import Bubbles from "@/components/bubbles"

export const metadata: Metadata = {
  title: "About Us | WonderTech Innovations",
  description:
    "WonderTech Innovations is a software development company in Accra, Ghana. We build web and mobile apps, design UI/UX, and provide IT consulting for businesses.",
}

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to understand their vision and bring it to life together.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We are committed to delivering high-quality solutions that exceed expectations.",
    },
    {
      icon: CheckCircle2,
      title: "Reliability",
      description: "Our clients can count on us for consistent, dependable service and support.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 10+ years in software development and business strategy.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Tech innovator specializing in scalable architecture and cloud solutions.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Creative designer focused on user-centered design and exceptional UX.",
    },
    {
      name: "David Okonkwo",
      role: "Lead Developer",
      bio: "Full-stack expert with expertise in modern web and mobile technologies.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-accent/5">
        <Bubbles />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            About <span className="gradient-text">WonderTech Innovations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            We're a team of passionate developers, designers, and strategists dedicated to transforming businesses
            through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2022, WonderTech Innovations started with a simple mission: to empower businesses through
                innovative software solutions. What began as a small team of passionate developers has grown into a
                dynamic company serving clients across multiple industries.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We believe that great technology should be accessible, intuitive, and transformative. Every project we
                undertake is an opportunity to make a meaningful impact on our clients' businesses and their customers'
                experiences.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to have delivered over 50 successful projects for clients ranging from startups to
                established enterprises, helping them achieve their digital transformation goals.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Quick Delivery</h3>
                      <p className="text-muted-foreground text-sm">Rapid project delivery with agile methodologies and efficient workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Global Reach</h3>
                      <p className="text-muted-foreground text-sm">Serving clients across Africa, Europe, and beyond</p>
                    </div>
                  </div>
                  {/* <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Award Winning</h3>
                      <p className="text-muted-foreground text-sm">Recognized for innovation and excellence</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="p-6 bg-background border border-border rounded-xl hover:border-primary transition-all card-hover"
                  data-aos="zoom-in"
                  data-aos-delay={`${index * 100 + 100}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section - Commented out for now */}
      {/* <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Talented professionals dedicated to delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-accent"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}
