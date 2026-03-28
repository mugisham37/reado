'use client'

import { motion } from 'framer-motion'
import { pageVariants, sectionVariants, staggerContainer, staggerChild } from '../../../lib/animations'
import { useInViewAnimation } from '../../../hooks'
import { blogPosts, categories } from '../../../data/content'
import { BlogCard } from '../../../components/cards/BlogCard'
import { Divider } from '../../../components/ui/Decorative'
import Link from 'next/link'

type Props = {
  params: { slug: string }
}

export default function CategoryPosts({ params }: Props) {
  const { slug } = params
  const category = categories.find(c => c.slug === slug)
  const filtered = blogPosts.filter(p => p.category.toLowerCase() === slug?.toLowerCase())
  const { ref, isInView } = useInViewAnimation()

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section style={{ padding: '70px 0 100px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Link href="/" className="text-sm">Home</Link>
            <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>›</span>
            <Link href="/categories" className="text-sm">Categories</Link>
          </div>
          <h1 className="h1" style={{ textAlign: 'center' }}>{category?.name || slug}</h1>
        </div>
      </section>
      <motion.section ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={sectionVariants} style={{ padding: '0 0 170px 0' }}>
        <div className="container">
          <Divider />
          <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, marginTop: 30 }}>
            {filtered.map((post) => (
              <motion.div key={post.slug} variants={staggerChild}>
                <BlogCard post={post} variant="default" />
              </motion.div>
            ))}
          </motion.div>
          {filtered.length === 0 && <p className="body" style={{ textAlign: 'center', marginTop: 30 }}>No posts found in this category.</p>}
        </div>
      </motion.section>
      <style>{`
        @media (max-width: 810px) { .grid-3 { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 390px) { .grid-3 { grid-template-columns: 1fr !important; } }
      `}</style>
    </motion.div>
  )
}
