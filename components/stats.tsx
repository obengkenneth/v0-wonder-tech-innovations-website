export default function Stats() {
  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Team Members", value: "3+" },
    { label: "Years Experience", value: "3+" },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center animate-fade-in-up animate-stagger-${index + 1}`}>
              <p className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</p>
              <p className="text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
