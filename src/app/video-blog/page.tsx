'use client'

import { motion } from 'framer-motion'
import { pageVariants, sectionVariants, staggerContainer, staggerChild, imageZoom } from '../../lib/animations'
import { useInViewAnimation } from '../../hooks'
import { blogPosts } from '../../data/content'
import { Divider, CardHeader } from '../../components/ui/Decorative'
import Link from 'next/link'

export default function VideoBlog() {
  const { ref, isInView } = useInViewAnimation()
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section style={{ padding: '70px 0 100px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="h1">Video Blog</h1>
        </div>
      </section>
      <motion.section ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={sectionVariants} style={{ padding: '0 0 170px 0' }}>
        <div className="container">
          <Divider />
          <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, marginTop: 30 }}>
            {blogPosts.slice(0, 6).map((post) => (
              <motion.div key={post.slug} variants={staggerChild}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <motion.div initial="rest" whileHover="hover" style={{ border: '1px solid var(--neutral-gray)', padding: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <CardHeader number={post.number} color="var(--neutral-gray)" />
                    <div style={{ overflow: 'hidden', border: '1px solid var(--neutral-gray)' }}>
                      <motion.div variants={imageZoom} style={{ paddingBottom: '60%', backgroundColor: 'var(--silver)' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span className="text-sm">{post.category}</span>
                        <div style={{ flex: 1 }} />
                        <span className="text-sm">by {post.author}</span>
                      </div>
                      <h6 className="h6">{post.title}</h6>
                    </div>
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
