'use client'

import { motion } from 'framer-motion'
import { pageVariants, sectionVariants, staggerContainer, staggerChild } from '../../../lib/animations'
import { useInViewAnimation } from '../../../hooks'
import { blogPosts, authors } from '../../../data/content'
import { BlogCard } from '../../../components/cards/BlogCard'
import { Divider } from '../../../components/ui/Decorative'
import Link from 'next/link'

type Props = {
  params: { slug: string }
}

export default function AuthorProfile({ params }: Props) {
  const { slug } = params
  const author = authors.find(a => a.slug === slug) || authors[0]
  const authorPosts = blogPosts.filter(p => p.author === author.name)
  const { ref, isInView } = useInViewAnimation()

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section style={{ padding: '70px 0 100px 0' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Link href="/" className="text-sm">Home</Link>
            <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>›</span>
            <Link href="/author" className="text-sm">Authors</Link>
          </div>
          <div style={{ width: 120, height: 120, borderRadius: '50%', backgroundColor: 'var(--silver)', overflow: 'hidden', border: '1px solid var(--black)' }}>
            {author.image && <img src={author.image} alt={author.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          </div>
          <h1 className="h1">{author.name}</h1>
          <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>{author.role}</span>
          {author.bio && <p className="body" style={{ maxWidth: 600 }}>{author.bio}</p>}
        </div>
      </section>
      {authorPosts.length > 0 && (
        <motion.section ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={sectionVariants} style={{ padding: '0 0 170px 0' }}>
          <div className="container">
            <h2 className="h2" style={{ marginBottom: 30 }}>Articles by {author.name}</h2>
            <Divider />
            <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, marginTop: 30 }}>
              {authorPosts.map((post) => (
                <motion.div key={post.slug} variants={staggerChild}>
                  <BlogCard post={post} variant="default" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}
      <style>{`
        @media (max-width: 810px) { .grid-3 { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 390px) { .grid-3 { grid-template-columns: 1fr !important; } }
      `}</style>
    </motion.div>
  )
}

export async function generateStaticParams() {
  return authors.map((author) => ({
    slug: author.slug,
  }))
}
