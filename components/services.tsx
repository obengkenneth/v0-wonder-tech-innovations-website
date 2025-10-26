import { Code2, Smartphone, Palette, Shield } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description: "Scalable, high-performance web applications built with modern technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions that engage users and drive business results.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience at the core of every decision.",
  },
  {
    icon: Shield,
    title: "IT Consulting & Support",
    description: "Strategic guidance and ongoing support to optimize your technology infrastructure and operations.",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary hover:shadow-lg transition-all group card-hover"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100 + 100}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
