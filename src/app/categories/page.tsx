'use client'

import { motion } from 'framer-motion'
import { pageVariants, sectionVariants, staggerContainer, staggerChild } from '../../lib/animations'
import { useInViewAnimation } from '../../hooks'
import { blogPosts, categories } from '../../data/content'
import { Divider } from '../../components/ui/Decorative'
import Link from 'next/link'

export default function Categories() {
  const { ref, isInView } = useInViewAnimation()
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section style={{ padding: '70px 0 100px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="h1">Categories</h1>
        </div>
      </section>
      <motion.section ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={sectionVariants} style={{ padding: '0 0 170px 0' }}>
        <div className="container">
          <Divider />
          <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, marginTop: 30 }}>
            {categories.map((cat) => (
              <motion.div key={cat.slug} variants={staggerChild}>
                <Link href={`/categories/${cat.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <motion.div
                    whileHover={{ backgroundColor: 'var(--silver)' }}
                    transition={{ duration: 0.2 }}
                    style={{ border: '1px solid var(--black)', padding: 30, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}
                  >
                    <h4 className="h4">{cat.name}</h4>
                    <span className="text-sm">{blogPosts.filter(p => p.category === cat.name).length} articles</span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <style>{`
        @media (max-width: 810px) { .grid-3 { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 390px) { .grid-3 { grid-template-columns: 1fr !important; } }
      `}</style>
    </motion.div>
  )
}
