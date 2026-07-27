const experiences = [
  {
    period: "2023 — Present",
    role: "Full Stack Developer",
    company: "Upwork",
    type: "Freelance",
    description: "Building scalable web applications for clients worldwide using the MERN stack and Next.js. Specializing in full-stack solutions, API development, and performance optimization.",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    period: "2023 — Present",
    role: "Senior Web Developer",
    company: "Fiverr",
    type: "Freelance",
    description: "Delivering high-quality web development services including frontend development, backend systems, and complete full-stack applications for diverse client needs.",
    tags: ["React", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    period: "2022 — 2023",
    role: "Web Developer",
    company: "Freelance",
    type: "Self-Employed",
    description: "Started my professional journey building websites for local businesses. Focused on learning modern web technologies and delivering clean, efficient code.",
    tags: ["JavaScript", "HTML/CSS", "React", "Node.js"],
  },
]

const education = [
  {
    period: "2022 — 2026",
    degree: "BS in Software Engineering",
    school: "University of Agriculture, Faisalabad",
    description: "Currently in 5th semester. Focused on data structures, algorithms, and full stack web development. Actively working on MERN stack projects alongside exploring TypeScript, Next.js, and SQL.",
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-8 py-32 lg:px-16">
        <div className="max-w-4xl">
          <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-8">
            Experience
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-tight text-foreground mb-8">
            Professional
            <br />
            journey.
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-xl leading-relaxed">
            3+ years of building digital experiences for clients worldwide.
            Every role shaped how I approach problems today.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="px-8 pb-20 lg:px-16">
        <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-12">
          Career
        </p>
        <div className="space-y-0">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 py-12 border-b border-border"
            >
              <div>
                <p className="text-sm text-muted-foreground font-light">
                  {exp.period}
                </p>
                <p className="text-xs text-muted-foreground font-light mt-1">
                  {exp.type}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light text-foreground mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-foreground font-light mb-4">
                  {exp.company}
                </p>
                <p className="text-muted-foreground font-light leading-relaxed max-w-2xl mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 border border-border rounded-sm text-muted-foreground font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="px-8 py-20 lg:px-16 border-t border-border">
        <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-12">
          Education
        </p>
        <div className="space-y-0">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 py-12 border-b border-border"
            >
              <div>
                <p className="text-sm text-muted-foreground font-light">
                  {edu.period}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light text-foreground mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-muted-foreground font-light mb-4">
                  {edu.school}
                </p>
                <p className="text-muted-foreground font-light leading-relaxed max-w-2xl">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
