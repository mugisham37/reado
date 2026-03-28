'use client'

import Link from 'next/link'

interface LegalPageProps {
  params: { slug: string }
}

export default function LegalPage({ params }: LegalPageProps) {
  const legalPages = [
    { slug: 'privacy-policy', title: 'Privacy Policy' },
    { slug: 'terms-of-service', title: 'Terms of Service' },
    { slug: 'cookie-policy', title: 'Cookie Policy' },
    { slug: 'disclaimer', title: 'Disclaimer' },
  ]

  const page = legalPages.find(p => p.slug === params.slug)
  
  if (!page) {
    return <div style={{ padding: 40, textAlign: 'center' }}>Page not found</div>
  }

  return (
    <main style={{ padding: '100px 30px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 40, alignItems: 'center' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'var(--neutral-gray)' }} className="body">Home</Link>
          <span style={{ color: 'var(--neutral-gray)' }}>→</span>
          <span className="body" style={{ color: 'var(--black)' }}>{page.title}</span>
        </div>

        {/* Page Header */}
        <header style={{ marginBottom: 60 }}>
          <h1 className="h1">{page.title}</h1>
          <p className="body" style={{ color: 'var(--neutral-gray)', marginTop: 10 }}>Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        {/* Content */}
        <article style={{ lineHeight: 1.8 }}>
          <section style={{ marginBottom: 40 }}>
            <h2 className="h4">1. Introduction</h2>
            <p className="body" style={{ marginTop: 15, color: 'var(--neutral-gray)' }}>
              This {page.title.toLowerCase()} outlines the terms and conditions governing your use of our platform and services. By accessing and using this website, you accept and agree to be bound by the terms and provision of this policy.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4">2. Key Information</h2>
            <p className="body" style={{ marginTop: 15, color: 'var(--neutral-gray)' }}>
              We collect and process information in accordance with applicable laws and regulations. Your privacy and data security are paramount to us, and we're committed to maintaining the highest standards of data protection.
            </p>
            <ul style={{ marginTop: 15, paddingLeft: 20 }}>
              <li style={{ marginBottom: 10, color: 'var(--neutral-gray)' }}>We respect your privacy</li>
              <li style={{ marginBottom: 10, color: 'var(--neutral-gray)' }}>Data is processed transparently</li>
              <li style={{ marginBottom: 10, color: 'var(--neutral-gray)' }}>Security is our priority</li>
              <li style={{ marginBottom: 10, color: 'var(--neutral-gray)' }}>You have control over your information</li>
            </ul>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4">3. Usage Rights</h2>
            <p className="body" style={{ marginTop: 15, color: 'var(--neutral-gray)' }}>
              Unless otherwise noted, all content on this site including but not limited to text, graphics, logos, images and source code is the property of Reado and protected by international copyright laws.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4">4. Limitation of Liability</h2>
            <p className="body" style={{ marginTop: 15, color: 'var(--neutral-gray)' }}>
              To the fullest extent permitted by law, in no event shall Reado or its suppliers be liable for any indirect, incidental, special, punitive, or consequential damages arising from your use of the site.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4">5. Contact Us</h2>
            <p className="body" style={{ marginTop: 15, color: 'var(--neutral-gray)' }}>
              If you have questions about this {page.title.toLowerCase()}, please contact us at{' '}
              <a href="mailto:legal@reado.io" style={{ color: 'var(--black)', textDecoration: 'underline' }}>legal@reado.io</a>
            </p>
          </section>
        </article>

        {/* Other Legal Pages */}
        <section style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--black)' }}>
          <h2 className="h4">Other Legal Documents</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 15, marginTop: 20 }}>
            {legalPages
              .filter(p => p.slug !== params.slug)
              .map(p => (
                <Link
                  key={p.slug}
                  href={`/legal-pages/${p.slug}`}
                  style={{
                    textDecoration: 'none',
                    padding: '10px 15px',
                    border: '1px solid var(--black)',
                    color: 'var(--black)',
                    fontSize: 13,
                  }}
                >
                  {p.title}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </main>
  )
}
