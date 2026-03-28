import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { pageVariants, sectionVariants } from '../lib/animations'
import { useInViewAnimation } from '../hooks'
import { authors, images, socialLinks } from '../data/content'
import { Button } from '../components/ui/Button'
import { Divider } from '../components/ui/Decorative'

export default function About() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <motion.section
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        style={{ padding: '70px 0 170px 0' }}
      >
        <div className="container">
          <div className="about-layout" style={{ display: 'flex', gap: 70, alignItems: 'flex-start' }}>
            {/* Left column */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 50 }}>
              {/* About */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <h2 className="h2">About Us</h2>
                <p className="body">
                  Welcome to Reado, your go-to source for insights, tips, and stories that inspire curiosity and learning. Our mission is to provide readers with high-quality content across topics like lifestyle, travel, productivity, health, finance, and technology.
                </p>
                <p className="body">
                  We're passionate about storytelling, creating a space where ideas come alive, curiosity thrives, and readers feel inspired to make informed choices.
                </p>
              </div>

              <Divider />

              {/* Founder */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <h4 className="h4">Our founder</h4>
                <div className="founder-info" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{ width: '40%', flexShrink: 0, overflow: 'hidden', border: '1px solid var(--black)' }}>
                    <img src={images.founderPhoto} alt="Frances Guerrero" style={{ width: '100%', height: 'auto', display: 'block', border: '1px solid var(--dark-charcoal)' }} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
                      <h5 className="h5">Frances Guerrero</h5>
                      <div style={{ display: 'flex', gap: 6 }}>
                        {[socialLinks.linkedin, socialLinks.facebook, socialLinks.twitter].map((url, i) => (
                          <a key={i} href={url} target="_blank" rel="noopener noreferrer" style={{ width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: 10, color: 'var(--black)' }}>●</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <p className="body">
                      The Founder and Editor-in-Chief of Reado, guiding its editorial vision and overseeing content that sparks curiosity, inspires creativity, and engages readers with thoughtful storytelling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Authors */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <h4 className="h4">Authors</h4>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                  {authors.filter(a => a.role === 'Author').map((author) => (
                    <Link key={author.slug} to={`/author/${author.slug}`} className="text-nav" style={{ textDecoration: 'none' }}>
                      {author.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 50 }}>
              {/* Contact */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <h2 className="h2">Contact us</h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }} onSubmit={(e) => e.preventDefault()}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <label className="body">Name*</label>
                      <input
                        type="text"
                        style={{
                          padding: '10px 12px',
                          border: '1px solid var(--silver-gray)',
                          borderRadius: 6,
                          fontFamily: "'Switzer', sans-serif",
                          fontSize: 14,
                        }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <label className="body">Email*</label>
                      <input
                        type="email"
                        style={{
                          padding: '10px 12px',
                          border: '1px solid var(--silver-gray)',
                          borderRadius: 6,
                          fontFamily: "'Switzer', sans-serif",
                          fontSize: 14,
                        }}
                      />
                    </div>
                    <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <label className="body">Message</label>
                      <textarea
                        rows={5}
                        style={{
                          padding: '10px 12px',
                          border: '1px solid var(--silver-gray)',
                          borderRadius: 6,
                          fontFamily: "'Switzer', sans-serif",
                          fontSize: 14,
                          resize: 'vertical',
                        }}
                      />
                    </div>
                  </div>
                  <Button variant="dark" type="submit">Submit</Button>
                </form>
              </div>

              <Divider />

              {/* Collaborate */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <h4 className="h4">Collaborate or Partner</h4>
                <p className="body">
                  Interested in joining the Reado team, exploring partnerships, or sharing ideas? We'd love to connect. We don't exchange products for features or run banner ads, but we're always open to meaningful collaborations. Reach out anytime at{' '}
                  <a href="mailto:partnerships@reado.com" style={{ textDecoration: 'underline' }}>partnerships@reado.com</a>
                </p>
              </div>

              <Divider />

              {/* Careers */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <h4 className="h4">Careers</h4>
                <p className="body">
                  Love creating content? Join the Reado team! Apply now at{' '}
                  <a href="mailto:career@reado.com" style={{ textDecoration: 'underline' }}>career@reado.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <style>{`
        @media (max-width: 810px) {
          .about-layout { flex-direction: column !important; }
          .founder-info { flex-direction: column !important; }
          .founder-info > div:first-child { width: 100% !important; }
        }
      `}</style>
    </motion.div>
  )
}
