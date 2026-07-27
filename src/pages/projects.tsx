import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: "01",
    title: "Full-Stack E-Commerce App",
    category: "Full Stack",
    description: "Complete e-commerce solution with user authentication, product management, shopping cart, and secure checkout functionality.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    color: "bg-neutral-800",
  },
  {
    id: "02",
    title: "Wanderlust Travel Platform",
    category: "Full Stack",
    description: "Airbnb-inspired travel web app with destination listings, image uploads, reviews, and interactive maps.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary", "Mapbox"],
    color: "bg-neutral-700",
  },
  {
    id: "03",
    title: "Book Store MERN",
    category: "Full Stack",
    description: "Full-stack bookstore application where users can browse, add, delete, and edit books in a seamless interface.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    color: "bg-neutral-600",
  },
  {
    id: "04",
    title: "LMS using Node.js",
    category: "Backend",
    description: "Learning Management System with course management, user progress tracking, and content delivery features.",
    tech: ["Node.js", "Express", "MongoDB"],
    color: "bg-neutral-800",
  },
  {
    id: "05",
    title: "Food Delivery App",
    category: "Full Stack",
    description: "Food delivery platform with restaurant listings, menu management, order tracking, and payment integration.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "bg-neutral-700",
  },
  {
    id: "06",
    title: "Alphagcc Marine Website",
    category: "Frontend",
    description: "Corporate website for a marine services company with modern design and responsive layout.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    color: "bg-neutral-600",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-8 py-32 lg:px-16">
        <div className="max-w-4xl">
          <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-8">
            Work
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-tight text-foreground mb-8">
            Selected
            <br />
            projects.
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-xl leading-relaxed">
            A collection of work that moves the needle. Each project represents
            a unique challenge solved with intention and craft.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 pb-32 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
            >
              <div className={`${project.color} aspect-[4/3] rounded-sm mb-6 overflow-hidden`}>
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <span className="text-6xl font-light opacity-20">{project.id}</span>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-light tracking-wide mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-light text-foreground group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light mt-2 max-w-sm">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 border border-border rounded-sm text-muted-foreground font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
