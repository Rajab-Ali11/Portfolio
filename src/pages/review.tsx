import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Rajab delivered a complete e-commerce solution that exceeded our expectations. The code was clean, the performance was outstanding, and he was incredibly responsive throughout the project.",
    author: "Sarah Mitchell",
    role: "E-Commerce Owner",
    rating: 5,
  },
  {
    quote:
      "Our website went from slow and outdated to a modern, fast-loading platform. The attention to detail and commitment to quality was remarkable. Highly recommend for any web development project.",
    author: "Ahmad Khan",
    role: "Startup Founder",
    rating: 5,
  },
  {
    quote:
      "Working with Rajab was a game-changer for our business. He built a full-stack application that handles thousands of users daily without any issues. The backend architecture is solid.",
    author: "Michael Chen",
    role: "Tech Entrepreneur",
    rating: 5,
  },
  {
    quote:
      "From concept to deployment, Rajab handled everything professionally. The API integration was seamless, and the frontend is pixel-perfect. Will definitely work together again.",
    author: "Fatima Al-Hassan",
    role: "Product Manager",
    rating: 5,
  },
  {
    quote:
      "Rajab fixed bugs that other developers couldn't figure out. His debugging skills are impressive, and he explained everything clearly. The optimization work improved our load times by 60%.",
    author: "David Park",
    role: "SaaS Founder",
    rating: 5,
  },
  {
    quote:
      "Professional, reliable, and talented. Rajab delivered our project on time and within budget. The code quality was excellent, and he provided great documentation for future maintenance.",
    author: "Emma Rodriguez",
    role: "Marketing Director",
    rating: 5,
  },
]

const stats = [
  { value: "100%", label: "Client Satisfaction" },
  { value: "100%", label: "Google Lighthouse Score" },
  { value: "24/7", label: "Support Available" },
  { value: "14 Days", label: "Free Support After Launch" },
]

export default function Review() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-8 py-32 lg:px-16">
        <div className="max-w-4xl">
          <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-8">
            Reviews
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-tight text-foreground mb-8">
            What people
            <br />
            say about us.
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-xl leading-relaxed">
            Don't just take my word for it. Here's what my clients and
            collaborators have to say.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 py-20 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-light text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-8 py-20 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-background p-10 group hover:bg-foreground hover:text-background transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-lg font-light leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-light">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground font-light group-hover:text-background/70 transition-colors">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32 border-t border-border lg:px-16">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light leading-tight text-foreground mb-8">
            Ready to join
            <br />
            <span className="text-muted-foreground">my success stories?</span>
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 hover:bg-muted-foreground transition-colors"
          >
            <span className="font-light">Start a Project</span>
          </a>
        </div>
      </section>
    </div>
  )
}
