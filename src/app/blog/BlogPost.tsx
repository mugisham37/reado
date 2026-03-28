import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageVariants } from '../lib/animations'
import { useScrollProgress } from '../hooks'
import { blogPosts } from '../data/content'
import { BlogCard } from '../components/cards/BlogCard'
import { Divider } from '../components/ui/Decorative'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0]
  const progress = useScrollProgress()

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* TOC Island (floating) */}
      <TOCIsland progress={progress} />

      {/* Hero */}
      <section style={{ padding: '70px 0 100px 0' }}>
        <div className="container" style={{ maxWidth: 1460 }}>
          <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 30 }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" className="text-sm" style={{ textDecoration: 'none' }}>Home</Link>
              <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>›</span>
              <Link to="/blog" className="text-sm" style={{ textDecoration: 'none' }}>All blogs</Link>
            </div>
            <h1 className="h1" style={{ textAlign: 'center' }}>{post.title}</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <span className="text-sm">{post.category}</span>
              <div style={{ width: 1, height: 11, backgroundColor: 'var(--neutral-gray)' }} />
              <span className="text-sm">by {post.author}</span>
              <div style={{ width: 1, height: 11, backgroundColor: 'var(--neutral-gray)' }} />
              <span className="text-sm">3 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section style={{ padding: '0 0 170px 0' }}>
        <div className="container">
          <div className="blog-layout" style={{ display: 'flex', gap: 70, alignItems: 'flex-start' }}>
            {/* Main content */}
            <div style={{ flex: 1, maxWidth: 700 }}>
              <div id="toc-headings-source" style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                <div style={{ width: '100%', paddingBottom: '56%', backgroundColor: 'var(--silver)', border: '1px solid var(--black)' }} />
                <p className="body">
                  In recent years, the world of e-commerce has experienced a dramatic transformation. With the rise of mobile shopping, AI-driven recommendations, and seamless payment solutions, consumers now have unprecedented access to products and services from around the globe. This article explores how these trends are reshaping the way we shop and what it means for the future of retail.
                </p>
                <h2 className="rt-h2" id="toc-h2-0">The Rise of Mobile Commerce</h2>
                <p className="body">
                  Mobile devices have become the primary shopping tool for millions of consumers worldwide. The convenience of browsing and purchasing products from anywhere has driven a significant shift in consumer behavior, with mobile commerce now accounting for a substantial portion of all online sales.
                </p>
                <h2 className="rt-h2" id="toc-h2-1">AI and Personalization</h2>
                <p className="body">
                  Artificial intelligence is revolutionizing the shopping experience by providing personalized product recommendations, dynamic pricing, and predictive analytics. Retailers who leverage AI effectively are seeing significant improvements in customer engagement and conversion rates.
                </p>
                <h2 className="rt-h2" id="toc-h2-2">The Future of Retail</h2>
                <p className="body">
                  As technology continues to evolve, the boundaries between physical and digital retail are blurring. Augmented reality, virtual try-ons, and drone delivery are just a few innovations that promise to reshape the retail landscape in the coming years.
                </p>
                <h3 className="rt-h3" id="toc-h3-0">Sustainability in E-commerce</h3>
                <p className="body">
                  Consumers are increasingly demanding sustainable practices from online retailers. From eco-friendly packaging to carbon-neutral shipping, businesses are finding innovative ways to reduce their environmental impact while meeting customer expectations.
                </p>
              </div>

              <div style={{ marginTop: 50 }}>
                <Divider />
              </div>
            </div>

            {/* Sidebar */}
            <div className="blog-sidebar" style={{ width: 400, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 30 }}>
              <div>
                <h5 className="h5">Share post</h5>
                <div style={{ display: 'flex', gap: 20, marginTop: 16 }}>
                  {['Copy', 'Facebook', 'Twitter', 'LinkedIn', 'WhatsApp'].map((p) => (
                    <motion.button
                      key={p}
                      whileHover={{ opacity: 0.7 }}
                      style={{ padding: 12, background: 'none', border: 'none', cursor: 'pointer' }}
                      title={p}
                    >
                      <span className="text-sm">{p[0]}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
              <Divider />
              <div>
                <h5 className="h5">Featured post</h5>
                <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {blogPosts.slice(0, 2).map((p) => (
                    <BlogCard key={p.slug} post={p} variant="featuredSmall" />
                  ))}
                </div>
              </div>
              <Divider />
              <div>
                <h5 className="h5">Recent posts</h5>
                <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {blogPosts.slice(2, 5).map((p) => (
                    <BlogCard key={p.slug} post={p} variant="small" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 810px) {
          .blog-layout { flex-direction: column !important; }
          .blog-sidebar { width: 100% !important; }
        }
      `}</style>
    </motion.div>
  )
}

// ─── TOC Floating Island ─────────────────────────────────────────
function TOCIsland({ progress }: { progress: number }) {
  const [open, setOpen] = useState(false)
  const percent = Math.round(progress * 100)

  // SVG circle progress
  const size = 26
  const strokeWidth = 2
  const r = (size - strokeWidth) / 2
  const circumference = Math.PI * 2 * r
  const dashOffset = circumference - progress * circumference

  return (
    <motion.div
      animate={{ width: open ? 450 : 230 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="toc-island"
      style={{
        position: 'fixed',
        top: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 90,
        backgroundColor: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(20px)',
        borderRadius: 6,
        border: '1px solid var(--white-10)',
        padding: 8,
        overflow: 'hidden',
        color: 'var(--white)',
      }}
    >
      {/* Top bar */}
      <div
        onClick={() => setOpen(!open)}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Progress circle */}
          <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--white-10)" strokeWidth={strokeWidth} />
            <circle
              cx={size / 2} cy={size / 2} r={r} fill="none"
              stroke="var(--white)" strokeWidth={strokeWidth} strokeLinecap="round"
              strokeDasharray={circumference}
              style={{ strokeDashoffset: dashOffset, transition: 'stroke-dashoffset 0.1s' }}
            />
          </svg>
          <span className="text-nav" style={{ color: 'var(--white)' }}>Explore Topics</span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ opacity: 0.5, display: 'flex', alignItems: 'center' }}
          >
            <img
              src="https://framerusercontent.com/images/IZWWzYyCdbnlTRFO6jK7HYSLw.svg"
              alt=""
              style={{ width: 10, height: 10 }}
            />
          </motion.div>
        </div>
        <span className="text-nav" style={{ color: 'var(--white)' }}>{percent}%</span>
      </div>

      {/* TOC content */}
      <motion.div
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ overflow: 'hidden', marginTop: open ? 8 : 0 }}
      >
        <div style={{ backgroundColor: 'var(--white-10)', borderRadius: 2, padding: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { label: 'The Rise of Mobile Commerce', id: 'toc-h2-0' },
            { label: 'AI and Personalization', id: 'toc-h2-1' },
            { label: 'The Future of Retail', id: 'toc-h2-2' },
            { label: 'Sustainability in E-commerce', id: 'toc-h3-0' },
          ].map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById(item.id)
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 100
                  window.scrollTo({ top, behavior: 'smooth' })
                }
                setOpen(false)
              }}
              className="text-sm"
              style={{ color: 'var(--white)', textDecoration: 'none', padding: '4px 0', cursor: 'pointer' }}
              whileHover={{ color: '#FF5733' }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}


