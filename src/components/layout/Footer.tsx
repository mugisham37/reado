'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Divider } from '../ui/Decorative'
import { Button } from '../ui/Button'
import { images, categories, socialLinks } from '../../data/content'
import { useInViewAnimation } from '../../hooks'
import { sectionVariants } from '../../lib/animations'

export function Footer() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      style={{ backgroundColor: 'var(--black)', color: 'var(--white)', padding: '80px 0' }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        <Divider color="var(--neutral-gray)" />

        {/* Top row */}
        <div className="footer-top" style={{ display: 'flex', gap: 50, alignItems: 'flex-start' }}>
          {/* Left - Logo + Subscribe */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 30 }}>
            <Link href="/">
              <Image src={images.logoWhite} alt="Reado" width={154} height={40} style={{ height: 'auto' }} />
            </Link>
            <div style={{ maxWidth: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <h6 className="h-small" style={{ color: 'var(--white)' }}>Never miss an update</h6>
              <div style={{ display: 'flex', position: 'relative' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    width: '100%',
                    padding: '10px 120px 10px 12px',
                    backgroundColor: 'var(--dark-charcoal)',
                    color: 'var(--white)',
                    border: '1px solid var(--neutral-gray)',
                    borderRadius: 6,
                    fontSize: 13,
                    fontFamily: "'Switzer', sans-serif",
                  }}
                />
                <div style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)' }}>
                  <Button variant="white">Subscribe</Button>
                </div>
              </div>
              <Link href="/legal-pages/privacy-policy" className="text-sm" style={{ color: 'var(--neutral-gray)' }}>
                By subscribing to Reado&apos;s newsletter, you agree to our Privacy Policy.
              </Link>
            </div>
          </div>

          {/* Right - Link columns */}
          <div className="footer-columns" style={{ flex: 1, display: 'flex', gap: 50, alignItems: 'flex-start' }}>
            {/* Pages */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h6 className="h6" style={{ color: 'var(--white)' }}>Pages</h6>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Authors', href: '/author' },
                  { label: 'Categories', href: '/categories' },
                  { label: 'Podcast', href: '/podcast' },
                  { label: 'About/contact', href: '/about' },
                  { label: 'Subscribe', href: '/subscribe' },
                ].map((link) => (
                  <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
                ))}
              </div>
            </div>

            <div style={{ width: 1, alignSelf: 'stretch', backgroundColor: 'var(--neutral-gray)' }} />

            {/* Categories */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h6 className="h6" style={{ color: 'var(--white)' }}>Categories</h6>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {categories.map((cat) => (
                  <FooterLink key={cat.slug} href={`/categories/${cat.slug}`}>{cat.name}</FooterLink>
                ))}
              </div>
            </div>

            <div style={{ width: 1, alignSelf: 'stretch', backgroundColor: 'var(--neutral-gray)' }} />

            {/* Socials */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h6 className="h6" style={{ color: 'var(--white)' }}>Socials</h6>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <FooterLink href={socialLinks.facebook} external>Facebook</FooterLink>
                <FooterLink href={socialLinks.instagram} external>Instagram</FooterLink>
                <FooterLink href={socialLinks.twitter} external>Twitter/X</FooterLink>
                <FooterLink href={socialLinks.linkedin} external>Linkedin</FooterLink>
                <FooterLink href={socialLinks.pinterest} external>Pinterest</FooterLink>
              </div>
            </div>
          </div>
        </div>

        <Divider color="var(--neutral-gray)" />

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <p className="body" style={{ color: 'var(--white)' }}>Designed by Webestica, Powered by Framer</p>
          <p className="body" style={{ color: 'var(--white)' }}>© 2026 Reado. All rights reserved</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 810px) {
          .footer-top { flex-direction: column !important; }
          .footer-columns { flex-wrap: wrap !important; }
        }
        @media (max-width: 390px) {
          .footer-columns { flex-direction: column !important; gap: 30px !important; }
          .footer-columns > div[style*="width: 1px"] { display: none !important; }
        }
      `}</style>
    </motion.footer>
  )
}

function FooterLink({ children, href, external }: { children: React.ReactNode; href?: string; external?: boolean }) {
  const inner = (
    <motion.span
      className="text-nav"
      style={{ color: 'var(--white)', display: 'inline-block' }}
      whileHover={{ opacity: 0.7 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  )

  if (external && href) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
  }
  if (href) {
    return <Link href={href}>{inner}</Link>
  }
  return inner
}
