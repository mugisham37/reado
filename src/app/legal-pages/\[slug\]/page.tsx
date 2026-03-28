'use client'

import { motion } from 'framer-motion'
import { pageVariants } from '../../../lib/animations'
import { Divider } from '../../../components/ui/Decorative'
import Link from 'next/link'

type Props = {
  params: { slug: string }
}

export default function LegalPage({ params }: Props) {
  const { slug } = params
  const title = slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Legal'

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section style={{ padding: '70px 0 170px 0' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 30 }}>
            <Link href="/" className="text-sm">Home</Link>
            <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>›</span>
            <span className="text-sm">{title}</span>
          </div>
          <h1 className="h1" style={{ marginBottom: 30 }}>{title}</h1>
          <Divider />
          <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p className="body">This is the {title} page for Reado. Content would be provided by the site administrator.</p>
            <p className="body">Last updated: January 2026</p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
