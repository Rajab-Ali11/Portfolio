import { useState } from "react"
import { ArrowRight, Mail, MapPin, Phone, MessageCircle } from "lucide-react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [projectType, setProjectType] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project Inquiry from ${name} - ${projectType}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}`
    )
    window.open(`mailto:rajab.cloudy@gmail.com?subject=${subject}&body=${body}`)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-8 py-32 lg:px-16">
        <div className="max-w-4xl">
          <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-8">
            Contact
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-tight text-foreground mb-8">
            Let's
            <br />
            <span className="text-muted-foreground">Talk!</span>
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-xl leading-relaxed">
            Ready to transform your digital presence? Tell me about your
            project and let's explore what's possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-8 pb-32 lg:px-16 border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pt-20">
          {/* Form */}
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground font-light">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-foreground transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground font-light">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-foreground transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground font-light">
                Project Type
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                required
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-foreground transition-colors appearance-none"
              >
                <option value="" className="bg-background">Select a type</option>
                <option value="Full Stack Solution" className="bg-background">Full Stack Solution</option>
                <option value="Frontend Development" className="bg-background">Frontend Development</option>
                <option value="Backend Development" className="bg-background">Backend Development</option>
                <option value="API Development" className="bg-background">API Development</option>
                <option value="Bug Fixing & Debugging" className="bg-background">Bug Fixing & Debugging</option>
                <option value="Speed & Optimization" className="bg-background">Speed & Optimization</option>
                <option value="Other" className="bg-background">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground font-light">
                Message
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-foreground transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 hover:bg-muted-foreground transition-colors"
            >
              <span className="font-light">Send Message</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-6">
                Get in touch
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span className="font-light">rajab.cloudy@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span className="font-light">+92 3295220072</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span className="font-light">Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="h-5 w-5 text-muted-foreground" />
                  <span className="font-light">WhatsApp Available</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-6">
                Availability
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Available for freelance projects and full-time opportunities.
                Let's discuss how we can bring your vision to life.
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase mb-6">
                Follow
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { name: "LinkedIn", url: "https://linkedin.com/in/rajab-ali-636524375" },
                  { name: "Upwork", url: "https://www.upwork.com/freelancers/~01bf3c34879bc12ce2" },
                  { name: "Fiverr", url: "https://www.fiverr.com/rajabali10005" },
                  { name: "GitHub", url: "https://github.com/Rajab-ali99" },
                  { name: "Portfolio", url: "https://rajabali.pk" },
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
          </div>
        </div>
      </section>
    </div>
  )
}
