import { useEffect, useState } from "react"

export function AiCharacter() {
  const [rotation, setRotation] = useState(0)
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Outer glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-80 h-80 rounded-full bg-gradient-to-br from-muted/20 to-transparent blur-3xl transition-opacity duration-1000 ${
            pulse ? "opacity-100" : "opacity-50"
          }`}
        />
      </div>

      {/* Rotating rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer ring */}
        <div
          className="absolute w-72 h-72 border border-border/30 rounded-full"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-foreground rounded-full" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-muted-foreground rounded-full" />
        </div>

        {/* Middle ring */}
        <div
          className="absolute w-56 h-56 border border-border/50 rounded-full"
          style={{ transform: `rotate(${-rotation * 1.5}deg)` }}
        >
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-foreground rounded-full" />
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-muted-foreground rounded-full" />
        </div>

        {/* Inner ring */}
        <div
          className="absolute w-40 h-40 border border-border/70 rounded-full"
          style={{ transform: `rotate(${rotation * 2}deg)` }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full" />
        </div>
      </div>

      {/* Center core */}
      <div className="relative z-10">
        <div
          className={`w-24 h-24 rounded-full bg-gradient-to-br from-foreground to-muted-foreground flex items-center justify-center transition-transform duration-500 ${
            pulse ? "scale-110" : "scale-100"
          }`}
        >
          <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center">
            <span className="text-[10px] font-light text-muted-foreground tracking-[0.2em] uppercase">
              Developer
            </span>
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground/50 rounded-full"
            style={{
              top: `${50 + 40 * Math.sin((rotation + i * 60) * (Math.PI / 180))}%`,
              left: `${50 + 40 * Math.cos((rotation + i * 60) * (Math.PI / 180))}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {/* Status indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-muted-foreground font-light">Online</span>
        </div>
        <div className="w-px h-3 bg-border" />
        <span className="text-xs text-muted-foreground font-light">Ready to build</span>
      </div>

      {/* Floating code snippets */}
      <div
        className="absolute top-16 left-8 text-[10px] text-muted-foreground/40 font-mono"
        style={{ transform: `translateY(${Math.sin(rotation * 0.02) * 5}px)` }}
      >
        {"{ code }"}
      </div>
      <div
        className="absolute top-24 right-8 text-[10px] text-muted-foreground/40 font-mono"
        style={{ transform: `translateY(${Math.cos(rotation * 0.02) * 5}px)` }}
      >
        {"</>"}
      </div>
      <div
        className="absolute bottom-24 left-12 text-[10px] text-muted-foreground/40 font-mono"
        style={{ transform: `translateY(${Math.sin(rotation * 0.03) * 5}px)` }}
      >
        {"01010"}
      </div>
      <div
        className="absolute bottom-32 right-12 text-[10px] text-muted-foreground/40 font-mono"
        style={{ transform: `translateY(${Math.cos(rotation * 0.03) * 5}px)` }}
      >
        {"function()"}
      </div>
    </div>
  )
}
