import Link from 'next/link'
import Image from 'next/image'
import { authors, blogPosts } from '../../../data/content'
import { AuthorPostsSection } from './author-posts'

interface AuthorPageProps {
  params: { slug: string }
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const author = authors.find((a: typeof authors[0]) => a.slug === params.slug)

  if (!author) {
    return <div style={{ padding: 40, textAlign: 'center' }}>Author not found</div>
  }

  const authorPosts = blogPosts.filter((p: typeof blogPosts[0]) => p.author === author.name)

  return (
    <main style={{ padding: '100px 30px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 60, alignItems: 'center' }}>
          <Link href="/author" style={{ textDecoration: 'none', color: 'var(--neutral-gray)' }} className="body">Authors</Link>
          <span style={{ color: 'var(--neutral-gray)' }}>→</span>
          <span className="body" style={{ color: 'var(--black)' }}>{author.name}</span>
        </div>

        {/* Author Header */}
        <header style={{ marginBottom: 80, textAlign: 'center' }}>
          {author.image && (
            <div style={{
              width: 140,
              height: 140,
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '0 auto 30px',
              border: '2px solid var(--black)',
              backgroundColor: 'var(--silver)',
            }}>
              <Image src={author.image} alt={author.name} width={140} height={140} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
          <h1 className="h1" style={{ marginBottom: 10 }}>{author.name}</h1>
          <p className="body" style={{ color: 'var(--neutral-gray)', marginBottom: 20 }}>{author.role}</p>
          {author.bio && (
            <p className="body" style={{ maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
              {author.bio}
            </p>
          )}
        </header>

        {/* Author's Articles */}
        {authorPosts.length > 0 && (
          <section>
            <h2 className="h4" style={{ marginBottom: 40 }}>Articles by {author.name}</h2>
            <AuthorPostsSection posts={authorPosts} />
          </section>
        )}

        {/* Other Authors */}
        <section style={{ marginTop: 100, paddingTop: 40, borderTop: '1px solid var(--black)' }}>
          <h2 className="h4">More Authors</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginTop: 40 }}>
            {authors
              .filter((a: typeof authors[0]) => a.slug !== params.slug)
              .map((a: typeof authors[0]) => (
                <Link
                  key={a.slug}
                  href={`/author/${a.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{ textAlign: 'center', cursor: 'pointer' }}>
                    {a.image && (
                      <div style={{
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        margin: '0 auto 15px',
                        border: '1px solid var(--black)',
                        backgroundColor: 'var(--silver)',
                      }}>
                        <Image src={a.image} alt={a.name} width={120} height={120} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    )}
                    <h3 className="h6" style={{ marginBottom: 5 }}>{a.name}</h3>
                    <p className="text-sm" style={{ color: 'var(--neutral-gray)' }}>{a.role}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return authors.map(author => ({
    slug: author.slug,
  }))
}
