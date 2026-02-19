import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Music Producer",
    content: "The Aero Pro Headphones completely transformed my studio workflow. The spatial audio is unlike anything I've experienced before.",
    rating: 5,
    initials: "AR",
  },
  {
    name: "Priya Sharma",
    role: "Content Creator",
    content: "I've been through dozens of drones, and the Phantom V2 is hands down the best. The camera quality is cinema-grade.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Marcus Chen",
    role: "Fitness Enthusiast",
    content: "The Pulse GT Smartwatch tracks everything I need with incredible accuracy. Battery life lasts almost a full week.",
    rating: 5,
    initials: "MC",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-primary tracking-wider uppercase">Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl bg-card border border-border/50 p-8 transition-all hover:border-primary/30"
            >
              <Quote className="h-8 w-8 text-primary/20" />

              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.content}"`}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
