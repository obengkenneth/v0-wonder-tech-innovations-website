import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import Bubbles from "@/components/bubbles"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Heera Logistics Website",
      category: "Web Development",
      description: "Client-facing application for drivers and potential leads for a logistics company. Features vehicle financing, fleet tracking, and transparent payment systems.",
      // technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      image: "/heera-web.png" ,
      url: "https://heeralogistics.com/",
      results: ["Professional client portal", "Lead generation system", "Responsive design"],
    },
    {
      id: 2,
      title: "Heera Logistics Mobile App",
      category: "Mobile Development",
      description: "Mobile app for drivers to make payments, track progress, and schedule vehicle inspections. Available on Google Play Store.",
      // technologies: ["React Native", "Firebase", "Payment Integration", "Push Notifications"],
      image: "/heera-mobile.png",
      url: "https://play.google.com/store/search?q=heera+logistics&c=apps&hl=en",
      results: ["50+ downloads", "Payment tracking", "Vehicle inspection system"],
    },
    {
      id: 3,
      title: "Heera Fleet Admin Portal",
      category: "Web Development",
      description: "Admin portal for company operations including fleet management, driver monitoring, and business analytics dashboard.",
      // technologies: ["React", "Node.js", "PostgreSQL", "Real-time Analytics"],
      image: "/heera-admin.png",
      url: "https://fleet.heeralogistics.com/",
      results: ["Fleet management system", "Real-time tracking", "Business analytics"],
    },
    {
      id: 4,
      title: "Study Agora - Educational Platform",
      category: "Mobile Development",
      description: "Educational mobile app where students can learn courses, take quizzes, and participate in live interactive teaching sessions with teachers.",
      // technologies: ["React Native", "WebRTC", "Firebase", "Real-time Chat"],
      image: "/study-agora.png",
      // url: "Early access",
      results: ["Interactive learning", "Live sessions", "Quiz system"],
    },
    {
      id: 5,
      title: "S&M Ushering Agency",
      category: "Web Development",
      description: "Company website for a professional ushering agency. Customers can request quotes and learn about premium event services.",
      // technologies: ["Next.js", "React", "Contact Forms", "Responsive Design"],
      image: "/smushering.png",
      url: "https://smushering.vercel.app/",
      results: ["Quote request system", "Service showcase", "Professional branding"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-accent/5">
        <Bubbles />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance" data-aos="fade-up">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance" data-aos="fade-up" data-aos-delay="200">
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
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-lg card-hover block"
                data-aos="fade-up"
                data-aos-delay={`${(index % 5) * 100 + 100}`}
              >
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
                    {/* <p className="text-xs font-semibold text-foreground mb-2">Technologies:</p> */}
                    <div className="flex flex-wrap gap-2">
                      {/* {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))} */}
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900 dark:border-t dark:border-slate-700 dark:border-b dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: "50+" },
              { label: "Happy Clients", value: "30+" },
              { label: "Team Members", value: "3+" },
              { label: "Years Experience", value: "3+" },
            ].map((stat, index) => (
              <div key={index} className={`text-center animate-fade-in-up animate-stagger-${index + 1}`}>
                <p className="text-4xl sm:text-5xl font-bold text-primary-foreground dark:text-white mb-2">{stat.value}</p>
                <p className="text-primary-foreground/80 dark:text-white/80">{stat.label}</p>
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
