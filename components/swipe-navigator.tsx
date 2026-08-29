"use client"

import { useRouter, usePathname } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"

const order = ["/", "/about", "/work", "/skills", "/experience", "/contact"]

export function SwipeNavigator({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [enterFrom, setEnterFrom] = useState<"left" | "right" | null>(null)

  const index = order.indexOf(pathname)
  const navigatingRef = useRef(false)

  const go = useCallback(
    (dir: "next" | "prev") => {
      if (navigatingRef.current) return
      const current = order.indexOf(pathname)
      if (current === -1) return
      const target = dir === "next" ? current + 1 : current - 1
      if (target < 0 || target >= order.length) return
      navigatingRef.current = true
      // remember which direction we came from for the entrance animation
      try {
        sessionStorage.setItem("swipe-dir", dir)
      } catch {}
      router.push(order[target])
    },
    [pathname, router],
  )

  // Entrance animation based on the stored swipe direction
  useEffect(() => {
    navigatingRef.current = false
    let dir: string | null = null
    try {
      dir = sessionStorage.getItem("swipe-dir")
      sessionStorage.removeItem("swipe-dir")
    } catch {}
    if (dir === "next") setEnterFrom("right")
    else if (dir === "prev") setEnterFrom("left")
    else setEnterFrom(null)
    const t = setTimeout(() => setEnterFrom(null), 400)
    return () => clearTimeout(t)
  }, [pathname])

  // Touch swipe
  useEffect(() => {
    let startX = 0
    let startY = 0
    let tracking = false

    const onStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
      tracking = true
    }
    const onEnd = (e: TouchEvent) => {
      if (!tracking) return
      tracking = false
      const dx = e.changedTouches[0].clientX - startX
      const dy = e.changedTouches[0].clientY - startY
      if (Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy)) return
      go(dx < 0 ? "next" : "prev")
    }

    window.addEventListener("touchstart", onStart, { passive: true })
    window.addEventListener("touchend", onEnd, { passive: true })
    return () => {
      window.removeEventListener("touchstart", onStart)
      window.removeEventListener("touchend", onEnd)
    }
  }, [go])

  // Mouse drag swipe (desktop)
  useEffect(() => {
    let startX = 0
    let startY = 0
    let dragging = false

    const onDown = (e: MouseEvent) => {
      // ignore drags that start on interactive elements
      const target = e.target as HTMLElement
      if (target.closest("a, button, input, textarea, select, [role='button']")) return
      startX = e.clientX
      startY = e.clientY
      dragging = true
    }
    const onUp = (e: MouseEvent) => {
      if (!dragging) return
      dragging = false
      const dx = e.clientX - startX
      const dy = e.clientY - startY
      if (Math.abs(dx) < 120 || Math.abs(dx) < Math.abs(dy)) return
      go(dx < 0 ? "next" : "prev")
    }

    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    return () => {
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
    }
  }, [go])

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("input, textarea, select")) return
      if (e.key === "ArrowRight") go("next")
      else if (e.key === "ArrowLeft") go("prev")
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [go])

  const hasPrev = index > 0
  const hasNext = index !== -1 && index < order.length - 1

  return (
    <>
      <div
        key={pathname}
        className={
          enterFrom === "right"
            ? "animate-swipe-in-right"
            : enterFrom === "left"
              ? "animate-swipe-in-left"
              : ""
        }
      >
        {children}
      </div>

      {/* Edge affordances */}
      {hasPrev ? (
        <button
          aria-label="Previous section"
          onClick={() => go("prev")}
          className="fixed left-2 top-1/2 z-40 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 p-2 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground md:flex"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      ) : null}
      {hasNext ? (
        <button
          aria-label="Next section"
          onClick={() => go("next")}
          className="fixed right-2 top-1/2 z-40 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 p-2 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground md:flex"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      ) : null}

      {/* Swipe hint */}
      <div className="pointer-events-none fixed bottom-20 left-1/2 z-40 -translate-x-1/2 md:hidden">
        <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
          Swipe to navigate
        </span>
      </div>
    </>
  )
}
