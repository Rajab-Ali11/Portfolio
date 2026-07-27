import { ArrowRight, Code2, Zap, Globe, Shield, Clock } from "lucide-react"
import { AiCharacter } from "@/components/ai-character"

const stats = [
  { number: "3+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "50+", label: "Projects Delivered" },
]

const services = [
  {
    icon: Code2,
    title: "Full Stack Solutions",
    description: "Complete MERN stack applications from clean UI to powerful backend systems. Every feature designed to be fast, secure, and production-ready.",
  },
  {
    icon: Globe,
    title: "Frontend Development",
    description: "Modern, responsive, pixel-perfect UIs using React, Next.js, and Tailwind. Smooth interactions, fast load times, and premium design systems.",
  },
  {
    icon: Shield,
    title: "Backend Development",
    description: "Scalable architectures, secure authentication, efficient APIs, and databases optimized for performance. Built to last.",
  },
  {
    icon: Zap,
    title: "API Development",
    description: "Secure, well-structured REST APIs and third-party integrations including payment gateways, social logins, and CRMs.",
  },
  {
    icon: Clock,
    title: "Deployment & DevOps",
    description: "Professional deployment on Vercel, Render, DigitalOcean. Environment variables, SSL, domains, routing, and CI/CD.",
  },
  {
    icon: Shield,
    title: "Bug Fixing & Optimization",
    description: "From broken components to server crashes, I trace problems to their source and solve them cleanly. Better stability guaranteed.",
  },
]

const principles = [
  {
    title: "High-Speed Performance",
    description:
      "I build optimized, fast-loading applications using React & Next.js. A faster website means better SEO rankings and happier users.",
  },
  {
    title: "100% Custom Code",
    description:
      "No generic templates or bloated site builders. I write clean, scalable code tailored exactly to your specific business requirements.",
  },
  {
    title: "Full Ownership",
    description:
      "You get 100% ownership of the source code and assets. No hidden lock-ins — just a transparent partnership focused on your growth.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-8 py-16 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[60vh]">
          {/* Left - Text */}
          <div>
            <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-8">
              Full Stack Developer
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas leading-[0.85] tracking-normal text-foreground mb-8">
              RAJAB
            </h1>
            <h2 className="text-3xl md:text-4xl font-light leading-tight text-muted-foreground mb-8">
              Full-Stack Solutions
              <br />
              <span className="text-foreground">With Precision, Passion,</span>
              <br />
              and Purpose!
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-xl leading-relaxed">
              Building scalable web applications with the MERN stack and Next.js.
              From clean UI to powerful backend systems — every feature designed
              to be fast, secure, and production-ready.
            </p>
          </div>

          {/* Right - AI Character */}
          <div className="hidden lg:flex justify-center items-center">
            <AiCharacter />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-8 lg:px-16 py-20 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-6xl md:text-7xl font-light text-foreground mb-4">
                {stat.number}
              </p>
              <p className="text-sm text-muted-foreground font-light tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-32 border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-8">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground mb-8">
              Hi, I'm Rajab Ali — a Full Stack MERN Developer & Next.js
              Architect.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground font-light leading-relaxed">
              Passionate about building scalable web solutions that drive real
              business growth. With 3+ years of experience in the MERN stack
              and Next.js, I deliver pixel-perfect websites that are fast,
              secure, and SEO-ready.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              From the first line of code to the final launch, I ensure a
              smooth process and a product that exceeds expectations. Currently
              pursuing BS in Software Engineering at University of Agriculture,
              Faisalabad.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Whether it's a complex web application, a sleek landing page, or
              a full-stack SaaS product — I build it with precision and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-8 py-32 border-t border-border">
        <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-12">
          What I'm offering
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 border border-border rounded-sm hover:bg-foreground hover:text-background transition-all duration-500 cursor-pointer"
            >
              <service.icon className="h-6 w-6 mb-6" />
              <h3 className="text-xl font-light mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground font-light group-hover:text-background/70 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles Section */}
      <section className="px-8 py-32 border-t border-border">
        <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-12">
          My Expertise
        </p>
        <div className="space-y-0">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 border-b border-border"
            >
              <div className="flex items-start gap-4">
                <span className="text-sm text-muted-foreground font-light">
                  0{index + 1}
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-foreground">
                  {principle.title}
                </h3>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-32 border-t border-border relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-muted/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Main CTA */}
            <div>
              <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-6">
                Let's Connect
              </p>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-foreground mb-8">
                Let's
                <br />
                <span className="text-muted-foreground">Talk!</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light max-w-md leading-relaxed mb-10">
                Ready to transform your digital presence? Let's discuss your
                project and explore what's possible together.
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center gap-4 bg-foreground text-background px-10 py-5 hover:bg-muted-foreground transition-all duration-300"
              >
                <span className="font-light text-lg">Start a Project</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            {/* Right - Contact Info */}
            <div className="space-y-10">
              <div>
                <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-4">
                  Get in touch
                </p>
                <a
                  href="mailto:rajab.cloudy@gmail.com"
                  className="text-xl font-light text-foreground hover:text-muted-foreground transition-colors"
                >
                  rajab.cloudy@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-4">
                  Call me
                </p>
                <a
                  href="tel:+923295220072"
                  className="text-xl font-light text-foreground hover:text-muted-foreground transition-colors"
                >
                  +92 3295220072
                </a>
              </div>

              <div>
                <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-4">
                  Follow
                </p>
                <div className="flex gap-6">
                  {[
                    { name: "LinkedIn", url: "https://linkedin.com/in/rajab-ali-636524375" },
                    { name: "Upwork", url: "https://www.upwork.com/freelancers/~01bf3c34879bc12ce2" },
                    { name: "Fiverr", url: "https://www.fiverr.com/rajabali10005" },
                    { name: "GitHub", url: "https://github.com/Rajab-ali99" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground font-light hover:text-foreground transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground font-light">
                  Based in Faisalabad, Pakistan
                </p>
                <p className="text-sm text-muted-foreground font-light mt-1">
                  Available Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
