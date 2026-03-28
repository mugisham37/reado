import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { pageVariants, sectionVariants, staggerContainer, staggerChild, imageZoom } from '../lib/animations'
import { useInViewAnimation } from '../hooks'
import { podcastEpisodes, blogPosts, categories, authors, images } from '../data/content'
import { BlogCard } from '../components/cards/BlogCard'
import { Button } from '../components/ui/Button'
import { Divider, CardHeader } from '../components/ui/Decorative'

// ─── PODCAST LISTING ─────────────────────────────────────────────
export function Podcast() {
  const { ref, isInView } = useInViewAnimation()
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section style={{ padding: '70px 0 100px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="h1">Podcasts</h1>
        </div>
      </section>
      <motion.section ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={sectionVariants} style={{ padding: '0 0 170px 0' }}>
        <div className="container">
          <Divider />
          <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 30, marginTop: 30 }}>
            {podcastEpisodes.map((ep) => (
              <motion.div key={ep.slug} variants={staggerChild}>
                <Link to={`/podcast/${ep.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <motion.div initial="rest" whileHover="hover" style={{ border: '1px solid var(--black)', padding: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <CardHeader number={ep.number} />
                    <div style={{ display: 'flex', gap: 10 }}>
                      <div style={{ width: '40%', overflow: 'hidden', border: '1px solid var(--black)', flexShrink: 0 }}>
                        <motion.div variants={imageZoom} style={{ paddingBottom: '100%', backgroundColor: 'var(--silver)' }} />
                      </div>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <h6 className="h6">{ep.title}</h6>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <span className="text-sm">by {ep.host}</span>
                          <div style={{ width: 1, height: 11, backgroundColor: 'var(--neutral-gray)', margin: '0 4px' }} />
                          <span className="text-sm">{ep.duration}</span>
                        </div>
                        <Button variant="dark">Play episode</Button>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <style>{`@media (max-width: 390px) { .grid-2 { grid-template-columns: 1fr !important; } }`}</style>
    </motion.div>
  )
}

// ─── PODCAST POST ────────────────────────────────────────────────
export function PodcastPost() {
  const { slug } = useParams()
  const ep = podcastEpisodes.find(e => e.slug === slug) || podcastEpisodes[0]
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section style={{ padding: '70px 0 100px 0' }}>
        <div className="container" style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Link to="/" className="text-sm">Home</Link>
              <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>›</span>
              <Link to="/podcast" className="text-sm">Podcasts</Link>
            </div>
            <h1 className="h1" style={{ textAlign: 'center' }}>{ep.title}</h1>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <span className="text-sm">by {ep.host}</span>
              <div style={{ width: 1, height: 11, backgroundColor: 'var(--neutral-gray)' }} />
              <span className="text-sm">{ep.duration}</span>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: '0 0 170px 0' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ width: '100%', paddingBottom: '56%', backgroundColor: 'var(--silver)', border: '1px solid var(--black)', marginBottom: 40 }} />
          <p className="body">Listen to this episode where {ep.host} discusses {ep.title.toLowerCase()}. This episode covers key insights and perspectives on the topic.</p>
        </div>
      </section>
    </motion.div>
  )
}

// ─── VIDEO BLOG ──────────────────────────────────────────────────
export function VideoBlog() {
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
                <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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

// ─── CATEGORIES LISTING ──────────────────────────────────────────
export function Categories() {
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
                <Link to={`/categories/${cat.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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

// ─── CATEGORY POSTS ──────────────────────────────────────────────
export function CategoryPosts() {
  const { slug } = useParams()
  const category = categories.find(c => c.slug === slug)
  const filtered = blogPosts.filter(p => p.category.toLowerCase() === slug?.toLowerCase())
  const { ref, isInView } = useInViewAnimation()
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section style={{ padding: '70px 0 100px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Link to="/" className="text-sm">Home</Link>
            <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>›</span>
            <Link to="/categories" className="text-sm">Categories</Link>
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

// ─── AUTHORS LISTING ─────────────────────────────────────────────
export function Authors() {
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
                <Link to={`/author/${author.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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

// ─── AUTHOR PROFILE ──────────────────────────────────────────────
export function AuthorProfile() {
  const { slug } = useParams()
  const author = authors.find(a => a.slug === slug) || authors[0]
  const authorPosts = blogPosts.filter(p => p.author === author.name)
  const { ref, isInView } = useInViewAnimation()
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section style={{ padding: '70px 0 100px 0' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Link to="/" className="text-sm">Home</Link>
            <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>›</span>
            <Link to="/author" className="text-sm">Authors</Link>
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



