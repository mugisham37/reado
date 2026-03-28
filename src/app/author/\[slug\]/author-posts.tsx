'use client'

import { motion } from 'framer-motion'
import { sectionVariants, staggerContainer, staggerChild } from '../../../lib/animations'
import { useInViewAnimation } from '../../../hooks'
import { BlogCard } from '../../../components/cards/BlogCard'
import { Divider } from '../../../components/ui/Decorative'
import type { Author } from '../../../data/content'
import type { BlogPost } from '../../../data/content'

interface AuthorPostsSectionProps {
  author: Author
  posts: BlogPost[]
}

export function AuthorPostsSection({ author, posts }: AuthorPostsSectionProps) {
  const { ref, isInView } = useInViewAnimation()

  return (
    <motion.section ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={sectionVariants} style={{ padding: '0 0 170px 0' }}>
      <div className="container">
        <h2 className="h2" style={{ marginBottom: 30 }}>Articles by {author.name}</h2>
        <Divider />
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, marginTop: 30 }}>
          {posts.map((post) => (
            <motion.div key={post.slug} variants={staggerChild}>
              <BlogCard post={post} variant="default" />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 810px) { .grid-3 { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 390px) { .grid-3 { grid-template-columns: 1fr !important; } }
      `}</style>
    </motion.section>
  )
}
