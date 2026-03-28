import { motion } from 'framer-motion'
import Link from 'next/link'
import { CardHeader } from '../ui/Decorative'
import { imageZoom } from '../../lib/animations'
import type { BlogPost } from '../../data/content'

interface BlogCardProps {
  post: BlogPost
  variant?: 'default' | 'featured' | 'editor' | 'small' | 'split' | 'featuredSmall'
}

export function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  if (variant === 'small') return <SmallCard post={post} />
  if (variant === 'featuredSmall') return <FeaturedSmallCard post={post} />

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
      <motion.div
        initial="rest"
        whileHover="hover"
        style={{
          border: '1px solid var(--black)',
          padding: 10,
          display: 'flex',
          flexDirection: variant === 'editor' ? 'row' : 'column',
          gap: 10,
          height: '100%',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        {/* Header with dots + number */}
        <div style={{ width: '100%', order: variant === 'editor' ? undefined : 0 }}>
          <CardHeader number={post.number} />
        </div>

        {/* Image */}
        <div
          style={{
            width: variant === 'editor' ? '50%' : '100%',
            overflow: 'hidden',
            border: '1px solid var(--black)',
            flexShrink: 0,
          }}
        >
          <motion.div
            variants={imageZoom}
            style={{
              width: '100%',
              paddingBottom: variant === 'split' ? '100%' : '60%',
              backgroundColor: 'var(--silver)',
              backgroundImage: post.image ? `url(${post.image})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span className="text-sm" style={{ flex: '0 0 auto' }}>{post.category}</span>
            <div style={{ flex: 1 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span className="text-sm">by</span>
              <span className="text-sm">{post.author}</span>
            </div>
            <div style={{ width: 1, height: 11, backgroundColor: 'var(--neutral-gray)' }} />
            <span className="text-sm">3 min read</span>
          </div>
          <motion.h3
            className="h6"
            variants={{ rest: {}, hover: { textDecoration: 'underline' } }}
            style={{ margin: 0 }}
          >
            {post.title}
          </motion.h3>
        </div>
      </motion.div>
    </Link>
  )
}

function SmallCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <motion.div
        whileHover={{ opacity: 0.8 }}
        transition={{ duration: 0.2 }}
        style={{
          borderBottom: '1px solid var(--black)',
          paddingBottom: 30,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="text-sm">{post.category}</span>
          <div style={{ flex: 1 }} />
          <span className="text-sm">by {post.author}</span>
          <div style={{ width: 1, height: 11, backgroundColor: 'var(--neutral-gray)' }} />
          <span className="text-sm">3 min read</span>
        </div>
        <h3 className="h6" style={{ margin: 0 }}>{post.title}</h3>
      </motion.div>
    </Link>
  )
}

function FeaturedSmallCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
      <motion.div
        initial="rest"
        whileHover="hover"
        style={{ display: 'flex', gap: 20, alignItems: 'flex-start', width: '100%' }}
      >
        <div style={{ width: 120, height: 90, overflow: 'hidden', border: '1px solid var(--black)', flexShrink: 0 }}>
          <motion.div
            variants={imageZoom}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--silver)',
              backgroundImage: post.image ? `url(${post.image})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
          <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>{post.category}</span>
          <h4 className="h6" style={{ margin: 0, fontSize: 16 }}>{post.title}</h4>
        </div>
      </motion.div>
    </Link>
  )
}
