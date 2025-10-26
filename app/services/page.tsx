import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Zap, BarChart3, Lock, Headphones } from "lucide-react"
import Bubbles from "@/components/bubbles"

export default function Services() {
  const mainServices = [
    {
      image: "/web-dev.png",
      title: "Custom Web Development",
      description: "Scalable, high-performance web applications built with modern technologies and best practices.",
      features: ["Full-stack development", "Progressive Web Apps", "E-commerce solutions", "Real-time applications"],
    },
    {
      image: "/mobile.png",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions that engage users and drive business results.",
      features: [
        "iOS & Android development",
        "Cross-platform solutions",
        "App store optimization",
        "Mobile-first design",
      ],
    },
    {
      image: "/ui.png",
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with user experience at the core of every decision.",
      features: ["User research & testing", "Wireframing & prototyping", "Visual design", "Design systems"],
    },
    {
      image: "/itsupport.png",
      title: "IT Consulting & Support",
      description: "Strategic guidance and ongoing support to optimize your technology infrastructure and operations.",
      features: ["Technology strategy", "Infrastructure planning", "Security audits", "24/7 support"],
    },
  ]

  const additionalServices = [
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Improve your application's speed and efficiency for better user experience and SEO.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to help you understand user behavior and make informed decisions.",
    },
    {
      icon: Lock,
      title: "Security Solutions",
      description: "Comprehensive security measures to protect your applications and user data.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Ongoing technical support and maintenance to keep your systems running smoothly.",
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
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance" data-aos="fade-up" data-aos-delay="200">
            Comprehensive solutions tailored to your business needs. From concept to deployment, we've got you covered.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={index} className="grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up" data-aos-delay={`${index * 200 + 100}`}>
                  <div className={`${isEven ? "order-1" : "order-2"}`}>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <div className="space-y-3">
                      <p className="font-semibold text-foreground">Key Features:</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`relative ${isEven ? "order-2" : "order-1"}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-2xl"></div>
                    <div className="relative bg-card border border-border rounded-2xl p-8 h-80 flex items-center justify-center card-hover">
                      <div className="relative w-full h-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Beyond our core offerings, we provide specialized services to enhance your digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="p-6 bg-background border border-border rounded-xl hover:border-primary hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured approach to delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", description: "We understand your business goals and requirements." },
              { step: "02", title: "Planning", description: "We create a detailed roadmap and strategy." },
              { step: "03", title: "Development", description: "We build your solution with precision and care." },
              { step: "04", title: "Launch", description: "We deploy and support your success." },
            ].map((item, index) => (
              <div key={index} className="relative" data-aos="fade-down" data-aos-delay={`${index * 400 + 500}`} data-aos-duration="1000">
                <div className="bg-card border border-border rounded-xl p-6 text-center card-hover">
                  <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
