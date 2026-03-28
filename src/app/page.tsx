'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { pageVariants, sectionVariants, staggerContainer, staggerChild } from '../lib/animations'
import { useInViewAnimation, useMouseParallax } from '../hooks'
import { blogPosts, podcastEpisodes, images } from '../data/content'
import { CategoryTicker } from '../components/sections/CategoryTicker'
import { BlogCard } from '../components/cards/BlogCard'
import { Button } from '../components/ui/Button'
import { Divider, DecoratedBorder, CardHeader, DotOrnament, DashedLine } from '../components/ui/Decorative'

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <HeroSection />
      <RecentPostsSection />
      <EditorsChoiceSection />
      <WatchSection />
      <AuthorSpotlightSection />
      <AdvertisementSection />
      <MoreStoriesSection />
      <PodcastsSection />
    </motion.div>
  )
}

// ─── HERO ────────────────────────────────────────────────────────
function HeroSection() {
  const { ref: parallaxRef, style: parallaxStyle } = useMouseParallax(8)

  return (
    <section style={{ padding: '20px 0 170px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 60, alignItems: 'center' }}>
        {/* Brand logo with parallax */}
        <div style={{ position: 'relative', width: '100%', textAlign: 'center' }}>
          <div ref={parallaxRef} style={{ ...parallaxStyle, position: 'relative', zIndex: 1 }}>
            <img src={images.heroBrand} alt="Reado" style={{ width: '100%', height: 'auto' }} />
          </div>
          <img
            src={images.heroBgBlur}
            alt=""
            style={{ position: 'absolute', top: 6, left: -6, width: '100%', height: 'auto', zIndex: 0, pointerEvents: 'none' }}
          />
        </div>

        {/* Category Ticker */}
        <CategoryTicker />

        {/* Bottom: Two columns */}
        <div className="hero-bottom" style={{ display: 'flex', gap: 80, width: '100%', alignItems: 'flex-start' }}>
          {/* Left column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingBottom: 50 }}>
              <h1 className="h1">A modern magazine for curious minds</h1>
              <p className="body" style={{ maxWidth: '80%' }}>
                Dive into well-crafted stories, interviews, and guides designed to inform, inspire, and keep you updated with the latest in news, and creativity.
              </p>
            </div>
            <DecoratedBorder>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <h6 className="h6">Don&apos;t miss a thing</h6>
                    <p className="body" style={{ maxWidth: '80%' }}>Subscribe to get updates straight to your inbox.</p>
                  </div>
                  <img src={images.subscribeIllustration} alt="" style={{ maxWidth: 130, height: 'auto' }} />
                </div>
                <div style={{ position: 'relative' }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      width: '100%',
                      padding: '12px 130px 12px 12px',
                      border: '1px solid var(--silver-gray)',
                      borderRadius: 6,
                      fontSize: 14,
                      fontFamily: "'Switzer', sans-serif",
                    }}
                  />
                  <div style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)' }}>
                    <Button variant="dark">Subscribe</Button>
                  </div>
                </div>
              </div>
            </DecoratedBorder>
          </div>

          {/* Right column - Featured blog card */}
          <div className="hero-right" style={{ flex: 1 }}>
            <BlogCard post={blogPosts[1]} variant="featured" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 810px) {
          .hero-bottom { flex-direction: column !important; gap: 40px !important; }
          .hero-right { width: 100% !important; }
        }
      `}</style>
    </section>
  )
}

// ─── RECENT POSTS ────────────────────────────────────────────────
function RecentPostsSection() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      style={{ padding: '0 0 170px 0' }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="h2">Recent posts</h2>
          <Link href="/blog"><Button variant="dark">view all posts</Button></Link>
        </div>
        <Divider />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid-3"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}
        >
          {blogPosts.slice(0, 6).map((post) => (
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

// ─── EDITOR'S CHOICE ─────────────────────────────────────────────
function EditorsChoiceSection() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      style={{ padding: '0 0 170px 0' }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        <h2 className="h2">Editor&apos;s choice</h2>
        <Divider />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
          {blogPosts.slice(2, 4).map((post) => (
            <BlogCard key={post.slug} post={post} variant="editor" />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

// ─── WATCH SECTION (DARK) ────────────────────────────────────────
function WatchSection() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      style={{ padding: '170px 0', backgroundColor: 'var(--black)', color: 'var(--white)' }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="h2" style={{ color: 'var(--white)' }}>Watch</h2>
          <Link href="/video-blog"><Button variant="white">View all videos</Button></Link>
        </div>
        <Divider color="var(--neutral-gray)" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid-3"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}
        >
          {/* Featured large card spanning all columns */}
          <motion.div variants={staggerChild} style={{ gridColumn: '1 / -1' }}>
            <Link href={`/blog/${blogPosts[3].slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div
                initial="rest"
                whileHover="hover"
                style={{
                  border: '1px solid var(--neutral-gray)',
                  padding: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <CardHeader number={blogPosts[3].number} color="var(--neutral-gray)" />
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: 280, overflow: 'hidden', border: '1px solid var(--neutral-gray)' }}>
                    <motion.div
                      variants={{ rest: { scale: 1 }, hover: { scale: 1.05, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } } }}
                      style={{ paddingBottom: '50%', backgroundColor: 'var(--dark-charcoal)' }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: 280, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                      <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>{blogPosts[3].category}</span>
                      <div style={{ flex: 1 }} />
                      <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>by {blogPosts[3].author}</span>
                      <div style={{ width: 1, height: 11, backgroundColor: 'var(--neutral-gray)' }} />
                      <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>3 min read</span>
                    </div>
                    <h3 className="h6" style={{ color: 'var(--white)' }}>{blogPosts[3].title}</h3>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

// ─── AUTHOR SPOTLIGHT ────────────────────────────────────────────
function AuthorSpotlightSection() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      style={{ padding: '170px 0' }}
    >
      <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: 50, alignItems: 'center' }}>
        {/* Framed photo */}
        <div style={{ maxWidth: 600, width: '100%', border: '1px solid var(--black)', padding: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <DashedLine color="var(--dark-charcoal)" />
            <DotOrnament color="var(--dark-charcoal)" />
            <DashedLine color="var(--dark-charcoal)" />
          </div>
          <div style={{ border: '1px solid var(--dark-charcoal)', overflow: 'hidden' }}>
            <img
              src={images.founderPhoto}
              alt="Frances Guerrero"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Mission text */}
        <h5 className="h5" style={{ textAlign: 'center' }}>
          This platform was started with a simple idea: to share stories that spark curiosity and inspire conversations. Our team of writers and creators is dedicated to bringing thoughtful and diverse voices together. We hope you find value in every read.
        </h5>

        {/* Decorative divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, maxWidth: 300, width: '100%' }}>
          <DashedLine color="var(--black)" />
          <DotOrnament color="var(--dark-charcoal)" />
          <DashedLine color="var(--black-70)" />
        </div>

        {/* Founder info */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <h6 className="h6">Frances Guerrero</h6>
          <p className="body">Founder &amp; Editor-in-Chief</p>
        </div>
      </div>
    </motion.section>
  )
}

// ─── ADVERTISEMENT ───────────────────────────────────────────────
function AdvertisementSection() {
  return (
    <section>
      <div className="container">
        <a href="https://www.framer.com/@webestica/" target="_blank" rel="noopener noreferrer">
          <img
            src={images.adBanner1}
            alt="Advertisement"
            style={{ width: '100%', height: 'auto', border: '1px solid var(--black)' }}
          />
        </a>
      </div>
    </section>
  )
}

// ─── MORE STORIES ────────────────────────────────────────────────
function MoreStoriesSection() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      style={{ padding: '170px 0' }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        <h2 className="h2">Discover more stories</h2>
        <Divider />
        <div className="more-stories-grid" style={{ display: 'grid', gridTemplateColumns: '270px 1fr 1fr 270px', gap: 30 }}>
          {/* Column 1: Two stacked cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            <BlogCard post={blogPosts[4]} variant="split" />
            <BlogCard post={blogPosts[9]} variant="split" />
          </div>
          {/* Column 2-3: Large card */}
          <div style={{ gridColumn: 'span 2' }}>
            <BlogCard post={blogPosts[5]} variant="split" />
          </div>
          {/* Column 4: Cards + ad */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            <BlogCard post={blogPosts[6]} variant="small" />
            <BlogCard post={blogPosts[7]} variant="small" />
            <a href="https://www.framer.com/@webestica/" target="_blank" rel="noopener noreferrer">
              <img src={images.adBanner2} alt="Ad" style={{ width: '100%', height: 'auto', border: '1px solid var(--black)' }} />
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 810px) {
          .more-stories-grid { grid-template-columns: 1fr 1fr !important; }
          .more-stories-grid > div:nth-child(2) { grid-column: span 1 !important; }
        }
        @media (max-width: 390px) {
          .more-stories-grid { grid-template-columns: 1fr !important; }
          .more-stories-grid > div:nth-child(2) { grid-column: span 1 !important; }
        }
      `}</style>
    </motion.section>
  )
}

// ─── PODCASTS ────────────────────────────────────────────────────
function PodcastsSection() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      style={{ padding: '0 0 170px 0' }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        <h2 className="h2">Podcasts</h2>
        <Divider />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid-2"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 30 }}
        >
          {podcastEpisodes.map((ep) => (
            <motion.div key={ep.slug} variants={staggerChild}>
              <Link href={`/podcast/${ep.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  style={{ border: '1px solid var(--black)', padding: 10, display: 'flex', flexDirection: 'column', gap: 10 }}
                >
                  <CardHeader number={ep.number} />
                  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: '40%', overflow: 'hidden', border: '1px solid var(--black)', flexShrink: 0 }}>
                      <motion.div
                        variants={{ rest: { scale: 1 }, hover: { scale: 1.05, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } } }}
                        style={{ paddingBottom: '100%', backgroundColor: 'var(--silver)' }}
                      />
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <h6 className="h6">{ep.title}</h6>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
                          <span className="text-sm">by</span>
                          <span className="text-sm">{ep.host}</span>
                          <div style={{ width: 1, height: 11, backgroundColor: 'var(--neutral-gray)', margin: '0 4px' }} />
                          <span className="text-sm">{ep.duration}</span>
                        </div>
                        <Button variant="dark">Play episode</Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 390px) { .grid-2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </motion.section>
  )
}
