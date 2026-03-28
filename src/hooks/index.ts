import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Lenis from 'lenis'

// ─── Smooth Scrolling (Lenis, intensity 10) ────────────────────
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
}

// ─── Mouse-Follow Parallax (Hero Logo) ─────────────────────────
export function useMouseParallax(maxMovement = 8) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width
      const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height
      setOffset({ x: dx * maxMovement, y: dy * maxMovement })
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [maxMovement])

  const style: React.CSSProperties = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: 'transform 0.5s ease-out',
  }

  return { ref, style }
}

// ─── Scroll Progress (0-1 based on page scroll) ────────────────
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight > 0) {
        setProgress(window.scrollY / scrollHeight)
      }
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return progress
}

// ─── Section Appear-on-Scroll ───────────────────────────────────
export function useInViewAnimation(margin = '-100px') {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: margin as any })
  return { ref, isInView }
}

// ─── Scroll Spy (TOC active heading tracking) ──────────────────
export function useScrollSpy(headingIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (headingIds.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        let candidate: IntersectionObserverEntry | null = null
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          if (!candidate || entry.intersectionRatio > candidate.intersectionRatio) {
            candidate = entry
          }
        }
        if (candidate?.target) {
          setActiveId(candidate.target.id)
        }
      },
      {
        root: null,
        rootMargin: `-${offset}px 0px -${Math.floor(offset / 4)}px 0px`,
        threshold: 0.1,
      }
    )

    headingIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headingIds, offset])

  return activeId
}
