import Header from "@/components/header"
import Footer from "@/components/footer"
import { ExternalLink } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and analytics.",
      technologies: ["Next.js", "React", "Stripe", "PostgreSQL"],
      image: "bg-gradient-to-br from-blue-500 to-blue-600",
      results: ["40% increase in sales", "50K+ monthly users", "99.9% uptime"],
    },
    {
      id: 2,
      title: "Mobile Fitness App",
      category: "Mobile Development",
      description: "A comprehensive fitness tracking app with workout plans, nutrition tracking, and social features.",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      image: "bg-gradient-to-br from-green-500 to-green-600",
      results: ["100K+ downloads", "4.8 star rating", "Daily active users: 25K"],
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      category: "Web Development",
      description: "An enterprise-grade dashboard for data analytics with real-time updates and custom reporting.",
      technologies: ["React", "TypeScript", "D3.js", "Node.js"],
      image: "bg-gradient-to-br from-purple-500 to-purple-600",
      results: ["500+ enterprise clients", "Real-time data processing", "Custom integrations"],
    },
    {
      id: 4,
      title: "Healthcare Portal",
      category: "Web Development",
      description: "A secure patient portal for appointment booking, medical records, and telemedicine consultations.",
      technologies: ["Next.js", "HIPAA compliant", "PostgreSQL", "AWS"],
      image: "bg-gradient-to-br from-red-500 to-red-600",
      results: ["10K+ patients", "HIPAA certified", "98% patient satisfaction"],
    },
    {
      id: 5,
      title: "AI Content Generator",
      category: "Web Development",
      description: "An AI-powered platform for generating marketing content, blog posts, and social media copy.",
      technologies: ["Next.js", "OpenAI API", "Vercel", "Supabase"],
      image: "bg-gradient-to-br from-yellow-500 to-yellow-600",
      results: ["50K+ users", "1M+ content pieces generated", "Freemium model"],
    },
    {
      id: 6,
      title: "Real Estate App",
      category: "Mobile Development",
      description: "A mobile app for property listings with virtual tours, mortgage calculator, and agent messaging.",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
      image: "bg-gradient-to-br from-orange-500 to-orange-600",
      results: ["200K+ listings", "50K+ monthly active users", "15K+ transactions"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our latest projects and see how we've helped businesses transform through innovative technology
            solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-lg animate-fade-in-up animate-stagger-${(index % 6) + 1}`}
              >
                {/* Project Image */}
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all">
                      <ExternalLink className="text-white" size={32} />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold text-foreground mb-2">Key Results:</p>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: "50+" },
              { label: "Happy Clients", value: "30+" },
              { label: "Team Members", value: "3+" },
              { label: "Years Experience", value: "3+" },
            ].map((stat, index) => (
              <div key={index} className={`text-center animate-fade-in-up animate-stagger-${index + 1}`}>
                <p className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help bring your vision to life with innovative technology solutions.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
