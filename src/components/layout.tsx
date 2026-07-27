import { useState } from "react"
import type { ReactNode } from "react"
import { Sidebar } from "@/components/sidebar"
import { cn } from "@/lib/utils"

export function Layout({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="min-h-screen">
      <Sidebar expanded={expanded} onToggle={() => setExpanded(!expanded)} />
      <main
        className={cn(
          "transition-all duration-300 ease-in-out",
          expanded ? "ml-64" : "ml-20"
        )}
      >
        {children}
      </main>
    </div>
  )
}
