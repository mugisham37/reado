'use client'

import { motion } from 'framer-motion'
import { pageVariants } from '../lib/animations'
import { Button } from '../components/ui/Button'
import { DecoratedBorder } from '../components/ui/Decorative'
import { socialLinks } from '../data/content'

export default function Subscribe() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section style={{ padding: '140px 0 170px 0' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 30px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center' }}>
            <DecoratedBorder className="subscribe-box">
              <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center', textAlign: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
                  <h1 className="h1" style={{ textAlign: 'center' }}>Stay in the loop</h1>
                  <p className="body" style={{ textAlign: 'center' }}>
                    Get the latest stories, insights, and updates delivered straight to your inbox.
                  </p>
                </div>
                <div style={{ width: '100%', maxWidth: 450, position: 'relative' }}>
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

            {/* Social links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <span className="body">Stay connected:</span>
              <div style={{ display: 'flex', gap: 10 }}>
                {[
                  { name: 'LinkedIn', url: socialLinks.linkedin },
                  { name: 'Facebook', url: socialLinks.facebook },
                  { name: 'Twitter/X', url: socialLinks.twitter },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 22,
                      height: 22,
                      border: '1px solid var(--black)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ fontSize: 10 }}>{s.name[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
