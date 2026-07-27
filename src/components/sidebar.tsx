import { Link, useLocation } from "react-router-dom"
import { Home, Briefcase, Building2, Layers, Mail, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Projects", icon: Briefcase, path: "/projects" },
  { label: "Experience", icon: Building2, path: "/experience" },
  { label: "Stack", icon: Layers, path: "/stack" },
  { label: "Contact", icon: Mail, path: "/contact" },
  { label: "Review", icon: Star, path: "/review" },
]

interface SidebarProps {
  expanded: boolean
  onToggle: () => void
}

export function Sidebar({ expanded, onToggle }: SidebarProps) {
  const location = useLocation()

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-50 h-screen border-r border-border bg-background transition-all duration-300 ease-in-out",
        expanded ? "w-64" : "w-20"
      )}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className={cn(
          "flex h-20 items-center border-b border-border",
          expanded ? "px-8" : "px-0 justify-center"
        )}>
          {expanded ? (
            <Link to="/" className="group">
              <span className="text-xl font-light tracking-[0.2em] uppercase text-foreground">
                Rajab Ali
              </span>
            </Link>
          ) : (
            <Link to="/" className="group">
              <span className="text-xl font-light text-foreground">RA</span>
            </Link>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-8">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "group flex items-center rounded-sm text-sm transition-all duration-300",
                      expanded ? "gap-4 px-4 py-3" : "justify-center px-0 py-3",
                      isActive
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    title={!expanded ? item.label : undefined}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    {expanded && (
                      <span className="font-light tracking-wide whitespace-nowrap">
                        {item.label}
                      </span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className={cn(
          "border-t border-border",
          expanded ? "px-8 py-8" : "px-3 py-8"
        )}>
          {expanded ? (
            <>
              <p className="text-xs text-muted-foreground font-light tracking-wide">
                Full Stack Developer
              </p>
              <p className="text-xs text-muted-foreground font-light tracking-wide mt-1">
                Faisalabad, Pakistan
              </p>
            </>
          ) : (
            <p className="text-[10px] text-muted-foreground font-light text-center">
              Dev
            </p>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="absolute top-24 -right-3 h-6 w-6 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          {expanded ? (
            <ChevronLeft className="h-3 w-3" />
          ) : (
            <ChevronRight className="h-3 w-3" />
          )}
        </button>
      </div>
    </aside>
  )
}
