'use client'

import { motion } from 'framer-motion'
import { pageVariants, sectionVariants, staggerContainer, staggerChild } from '../../lib/animations'
import { useInViewAnimation } from '../../hooks'
import { authors } from '../../data/content'
import { Divider } from '../../components/ui/Decorative'
import Link from 'next/link'

export default function Authors() {
  const { ref, isInView } = useInViewAnimation()
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section style={{ padding: '70px 0 100px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="h1">Authors</h1>
        </div>
      </section>
      <motion.section ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={sectionVariants} style={{ padding: '0 0 170px 0' }}>
        <div className="container">
          <Divider />
          <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, marginTop: 30 }}>
            {authors.map((author) => (
              <motion.div key={author.slug} variants={staggerChild}>
                <Link href={`/author/${author.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    style={{ border: '1px solid var(--black)', padding: 20, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', textAlign: 'center' }}
                  >
                    <div style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: 'var(--silver)', overflow: 'hidden', border: '1px solid var(--black)' }}>
                      {author.image && <img src={author.image} alt={author.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                    </div>
                    <h6 className="h6">{author.name}</h6>
                    <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>{author.role}</span>
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
