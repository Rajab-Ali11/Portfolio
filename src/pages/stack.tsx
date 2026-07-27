const categories = [
  {
    name: "Frontend",
    tools: [
      { name: "React", description: "Component-based UI library" },
      { name: "Next.js", description: "Full-stack React framework" },
      { name: "TypeScript", description: "Type-safe JavaScript" },
      { name: "Tailwind CSS", description: "Utility-first styling" },
      { name: "HTML/CSS", description: "Web fundamentals" },
      { name: "Bootstrap", description: "Responsive framework" },
      { name: "Redux.js", description: "State management" },
    ],
  },
  {
    name: "Backend",
    tools: [
      { name: "Node.js", description: "JavaScript runtime" },
      { name: "Express.js", description: "Web framework" },
      { name: "MongoDB", description: "NoSQL database" },
      { name: "REST APIs", description: "API design" },
      { name: "SQL", description: "Relational databases" },
    ],
  },
  {
    name: "Languages",
    tools: [
      { name: "JavaScript", description: "Primary language" },
      { name: "TypeScript", description: "Type-safe JS" },
      { name: "C++", description: "Systems programming" },
      { name: "Python", description: "Scripting & automation" },
    ],
  },
  {
    name: "Tools & Platforms",
    tools: [
      { name: "Git", description: "Version control" },
      { name: "Vercel", description: "Deployment platform" },
      { name: "Render", description: "Cloud hosting" },
      { name: "DigitalOcean", description: "Cloud infrastructure" },
      { name: "Upwork", description: "Freelance platform" },
      { name: "Fiverr", description: "Freelance platform" },
    ],
  },
]

export default function Stack() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-8 py-32 lg:px-16">
        <div className="max-w-4xl">
          <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-8">
            Stack
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-tight text-foreground mb-8">
            Technologies
            <br />
            & tools.
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-xl leading-relaxed">
            The technologies I use to bring ideas to life. Always learning,
            always evolving.
          </p>
        </div>
      </section>

      {/* Stack Grid */}
      <section className="px-8 pb-32 lg:px-16">
        <div className="space-y-20">
          {categories.map((category) => (
            <div key={category.name}>
              <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-8">
                {category.name}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="group bg-background p-8 hover:bg-foreground hover:text-background transition-all duration-500 cursor-pointer"
                  >
                    <h3 className="text-lg font-light mb-2">{tool.name}</h3>
                    <p className="text-xs text-muted-foreground font-light group-hover:text-background/70 transition-colors">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
