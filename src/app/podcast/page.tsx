'use client'

import { motion } from 'framer-motion'
import { pageVariants, sectionVariants, staggerContainer, staggerChild, imageZoom } from '../../lib/animations'
import { useInViewAnimation } from '../../hooks'
import { podcastEpisodes } from '../../data/content'
import { Button } from '../../components/ui/Button'
import { Divider, CardHeader } from '../../components/ui/Decorative'
import Link from 'next/link'

export default function Podcast() {
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
                <Link href={`/podcast/${ep.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
