'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function TOCIsland() {
  const [isOpen, setIsOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      setProgress(scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const tableOfContents = [
    { id: 'intro', title: 'Introduction' },
    { id: 'section1', title: 'Understanding the Basics' },
    { id: 'section2', title: 'Key Takeaways' },
    { id: 'conclusion', title: 'Conclusion' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        border: '1px solid var(--black)',
        padding: 20,
        backgroundColor: 'var(--white)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h3 className="h6">Table of Contents</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 12,
            color: 'var(--neutral-gray)',
          }}
        >
          {isOpen ? '−' : '+'}
        </button>
      </div>

      <motion.div
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {tableOfContents.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                textDecoration: 'none',
                color: 'var(--neutral-gray)',
                fontSize: 13,
                paddingLeft: `${(i % 2) * 15}px`,
                borderLeft: i % 2 === 1 ? '1px solid var(--silver-gray)' : 'none',
                paddingTop: 5,
                paddingBottom: 5,
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--black)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--neutral-gray)'}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Progress indicator */}
      <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--black)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" style={{ position: 'relative' }}>
            <circle cx="12" cy="12" r="10" fill="none" stroke="var(--silver-gray)" strokeWidth="2" />
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="var(--black)"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 10}`}
              strokeDashoffset={`${2 * Math.PI * 10 * (1 - progress / 100)}`}
              style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 0.1s ease' }}
            />
          </svg>
          <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>{Math.round(progress)}%</span>
        </div>
      </div>
    </motion.div>
  )
}
