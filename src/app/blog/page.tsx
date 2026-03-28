'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { pageVariants, sectionVariants, staggerContainer, staggerChild } from '../../lib/animations'
import { useInViewAnimation } from '../../hooks'
import { blogPosts, categories } from '../../data/content'
import { BlogCard } from '../../components/cards/BlogCard'
import { Button } from '../../components/ui/Button'

export default function Blog() {
  const { ref, isInView } = useInViewAnimation('-50px')
  const [activeCategory, setActiveCategory] = useState('All')
  const [showCount, setShowCount] = useState(6)

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory)

  const visible = filtered.slice(0, showCount)

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <section style={{ padding: '70px 0 100px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center' }}>
          <h1 className="h1" style={{ textAlign: 'center' }}>Blog</h1>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['All', ...categories.map((c) => c.name)].map((cat) => (
              <motion.button
                key={cat}
                onClick={() => { setActiveCategory(cat); setShowCount(6); }}
                className="text-nav"
                style={{
                  padding: 6,
                  borderRadius: 6,
                  backgroundColor: activeCategory === cat ? 'var(--black-50)' : 'var(--black)',
                  color: 'var(--white)',
                  border: 'none',
                  cursor: 'pointer',
                }}
                whileHover={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                transition={{ duration: 0.2 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        style={{ padding: '0 0 170px 0' }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center' }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid-3"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, width: '100%' }}
          >
            {visible.map((post) => (
              <motion.div key={post.slug} variants={staggerChild}>
                <BlogCard post={post} variant="default" />
              </motion.div>
            ))}
          </motion.div>
          {showCount < filtered.length && (
            <Button variant="dark" onClick={() => setShowCount((c) => c + 6)}>Load More</Button>
          )}
        </div>
      </motion.section>

      <style>{`
        @media (max-width: 810px) { .grid-3 { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 390px) { .grid-3 { grid-template-columns: 1fr !important; } }
      `}</style>
    </motion.div>
  )
}
