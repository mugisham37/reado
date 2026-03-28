'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { NavButton } from '../ui/Button'
import { Divider } from '../ui/Decorative'
import { images } from '../../data/content'

const navLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Categories', href: '/categories' },
  { label: 'Authors', href: '/author' },
  { label: 'About', href: '/about' },
]

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav style={{ position: 'relative', zIndex: 100, padding: '30px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        {/* Main nav row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {/* Logo */}
          <Link href="/" style={{ flexShrink: 0 }}>
            <img src={images.logoDark} alt="Reado" style={{ width: 156, height: 'auto' }} />
          </Link>

          {/* Desktop nav links */}
          <div className="nav-links-desktop" style={{ display: 'flex', flex: 1, justifyContent: 'center', gap: 24 }}>
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} isActive={pathname.startsWith(link.href)} />
            ))}
          </div>

          {/* Search bar */}
          <div
            className="nav-search-desktop"
            style={{
              maxWidth: 140,
              backgroundColor: 'var(--silver)',
              borderRadius: 6,
              padding: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <img src={images.searchIcon} alt="" style={{ width: 10, height: 10 }} />
            <span className="text-sm" style={{ color: 'var(--dark-charcoal)' }}>Search all</span>
          </div>

          {/* Subscribe button */}
          <div className="nav-subscribe-desktop">
            <NavButton />
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              width: 26,
              height: 26,
              backgroundColor: 'var(--black)',
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
              <div style={{ width: 12, height: 1.5, backgroundColor: 'var(--white)' }} />
              <div style={{ width: 12, height: 1.5, backgroundColor: 'var(--white)' }} />
              <div style={{ width: 12, height: 1.5, backgroundColor: 'var(--white)' }} />
            </div>
          </button>
        </div>

        {/* Divider below nav */}
        <Divider color="var(--black)" />
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'var(--black-70)',
                zIndex: 98,
              }}
            />
            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: 'var(--pale-silver)',
                zIndex: 99,
                padding: '30px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <img src={images.logoDark} alt="Reado" style={{ width: 120, height: 'auto' }} />
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  style={{ fontSize: 24, background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  ✕
                </button>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-nav"
                  style={{ padding: '10px 0', borderBottom: '1px solid var(--silver)' }}
                >
                  {link.label}
                </Link>
              ))}
              <NavButton />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 810px) {
          .nav-links-desktop { display: none !important; }
          .nav-search-desktop { display: none !important; }
          .nav-hamburger-mobile { display: flex !important; }
        }
        @media (max-width: 390px) {
          .nav-subscribe-desktop { display: none !important; }
        }
      `}</style>
    </nav>
  )
}

// Nav link with animated dot indicator
function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      <motion.div
        style={{ display: 'flex', alignItems: 'center', gap: 4 }}
        whileHover="hover"
        animate={isActive ? 'active' : 'default'}
      >
        <motion.div
          variants={{
            default: { opacity: 0, width: 1 },
            hover: { opacity: 1, width: 5, transition: { duration: 0.2, ease: 'easeOut' } },
            active: { opacity: 1, width: 5 },
          }}
          style={{
            height: 5,
            borderRadius: '50%',
            backgroundColor: 'var(--black)',
          }}
        />
        <span className="text-nav">{label}</span>
      </motion.div>
    </Link>
  )
}
