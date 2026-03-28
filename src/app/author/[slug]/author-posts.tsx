'use client'

import { motion } from 'framer-motion'
import { BlogCard } from '../../../components/cards/BlogCard'
import type { BlogPost } from '../../../data/content'

interface AuthorPostsSectionProps {
  posts: BlogPost[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function AuthorPostsSection({ posts }: AuthorPostsSectionProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
      }}
    >
      {posts.map(post => (
        <motion.div key={post.slug} variants={itemVariants}>
          <BlogCard post={post} />
        </motion.div>
      ))}
    </motion.div>
  )
}
