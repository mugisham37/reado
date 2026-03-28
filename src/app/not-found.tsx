'use client'

import { motion } from 'framer-motion'
import { pageVariants } from '../lib/animations'
import { Button } from '../components/ui/Button'

// ─── 404 PAGE ────────────────────────────────────────────────────
export default function NotFound() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section style={{ padding: '170px 0', textAlign: 'center' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
          <h1 className="h1">404</h1>
          <p className="body">The page you're looking for doesn't exist.</p>
          <Button href="/" variant="dark">Back to Home</Button>
        </div>
      </section>
    </motion.div>
  )
}
