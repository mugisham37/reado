'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollProgress } from '../../../hooks'

export function TOCIsland() {
  const progress = useScrollProgress()
  const [open, setOpen] = useState(false)
  const percent = Math.round(progress * 100)

  // SVG circle progress
  const size = 26
  const strokeWidth = 2
  const r = (size - strokeWidth) / 2
  const circumference = Math.PI * 2 * r
  const dashOffset = circumference - progress * circumference

  return (
    <motion.div
      animate={{ width: open ? 450 : 230 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="toc-island"
      style={{
        position: 'fixed',
        top: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 90,
        backgroundColor: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(20px)',
        borderRadius: 6,
        border: '1px solid var(--white-10)',
        padding: 8,
        overflow: 'hidden',
        color: 'var(--white)',
      }}
    >
      {/* Top bar */}
      <div
        onClick={() => setOpen(!open)}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Progress circle */}
          <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--white-10)" strokeWidth={strokeWidth} />
            <circle
              cx={size / 2} cy={size / 2} r={r} fill="none"
              stroke="var(--white)" strokeWidth={strokeWidth} strokeLinecap="round"
              strokeDasharray={circumference}
              style={{ strokeDashoffset: dashOffset, transition: 'stroke-dashoffset 0.1s' }}
            />
          </svg>
          <span className="text-nav" style={{ color: 'var(--white)' }}>Explore Topics</span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ opacity: 0.5, display: 'flex', alignItems: 'center' }}
          >
            <img
              src="https://framerusercontent.com/images/IZWWzYyCdbnlTRFO6jK7HYSLw.svg"
              alt=""
              style={{ width: 10, height: 10 }}
            />
          </motion.div>
        </div>
        <span className="text-nav" style={{ color: 'var(--white)' }}>{percent}%</span>
      </div>

      {/* TOC content */}
      <motion.div
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ overflow: 'hidden', marginTop: open ? 8 : 0 }}
      >
        <div style={{ backgroundColor: 'var(--white-10)', borderRadius: 2, padding: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { label: 'The Rise of Mobile Commerce', id: 'toc-h2-0' },
            { label: 'AI and Personalization', id: 'toc-h2-1' },
            { label: 'The Future of Retail', id: 'toc-h2-2' },
            { label: 'Sustainability in E-commerce', id: 'toc-h3-0' },
          ].map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById(item.id)
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 100
                  window.scrollTo({ top, behavior: 'smooth' })
                }
                setOpen(false)
              }}
              className="text-sm"
              style={{ color: 'var(--white)', textDecoration: 'none', padding: '4px 0', cursor: 'pointer' }}
              whileHover={{ color: '#FF5733' }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
