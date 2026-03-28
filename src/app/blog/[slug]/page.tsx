import Link from 'next/link'
import { blogPosts } from '../../../data/content'
import { TOCIsland } from './toc-island'
import { BlogCard } from '../../../components/cards/BlogCard'
import { Divider } from '../../../components/ui/Decorative'

interface BlogPostPageProps {
  params: { slug: string }
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    return <div style={{ padding: 40, textAlign: 'center' }}>Post not found</div>
  }

  const relatedPosts = blogPosts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3)
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <main style={{ padding: '100px 30px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 40, alignItems: 'center' }}>
          <Link href="/blog" style={{ textDecoration: 'none', color: 'var(--neutral-gray)' }} className="body">Blog</Link>
          <span style={{ color: 'var(--neutral-gray)' }}>→</span>
          <span className="body" style={{ color: 'var(--black)' }}>{post.title}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 60, alignItems: 'start' }}>
          {/* Main Content */}
          <article>
            <header style={{ marginBottom: 60 }}>
              <div style={{ marginBottom: 20 }}>
                <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>{post.category}</span>
              </div>
              <h1 className="h1" style={{ marginBottom: 20, margin: 0 }}>{post.title}</h1>
              <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginTop: 20 }}>
                <span className="text-sm">by {post.author}</span>
                <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>5 min read</span>
              </div>
            </header>

            {post.image && (
              <div style={{ width: '100%', height: 400, marginBottom: 60, overflow: 'hidden', border: '1px solid var(--black)' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}

            <div className="article-content" style={{ lineHeight: 1.8, fontSize: 16, marginBottom: 60 }}>
              <p style={{ marginBottom: 20 }}>{post.content}</p>
              <p style={{ marginBottom: 20 }}>This is a placeholder for the full article content. The real content would be rich HTML or markdown transformed into React components, with support for images, quotes, code blocks, and interactive elements.</p>
              <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 20 }}>Key Takeaways</h2>
              <ul style={{ marginBottom: 20, paddingLeft: 20 }}>
                <li style={{ marginBottom: 10 }}>First important point about the topic</li>
                <li style={{ marginBottom: 10 }}>Second important point with context</li>
                <li style={{ marginBottom: 10 }}>Third valuable insight readers should remember</li>
              </ul>
            </div>

            <Divider />

            {/* Sharing */}
            <div style={{ display: 'flex', gap: 20, marginTop: 60, marginBottom: 60, alignItems: 'center' }}>
              <span className="text-sm">Share:</span>
              <div style={{ display: 'flex', gap: 10 }}>
                {['LinkedIn', 'Twitter', 'Facebook'].map(platform => (
                  <a key={platform} href="#" style={{ padding: '8px 12px', border: '1px solid var(--black)', textDecoration: 'none', color: 'var(--black)', fontSize: 12 }}>
                    {platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section style={{ marginTop: 80 }}>
                <h2 className="h4">Related Articles</h2>
                <div style={{ display: 'grid', gap: 40, marginTop: 40 }}>
                  {relatedPosts.map(p => (
                    <BlogCard key={p.slug} post={p} variant="split" />
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: 100 }}>
            <TOCIsland />
            
            <div style={{ marginTop: 80, paddingTop: 30, borderTop: '1px solid var(--black)' }}>
              <h3 className="h6" style={{ marginBottom: 20 }}>Recent Posts</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                {recentPosts.map(p => (
                  <BlogCard key={p.slug} post={p} variant="small" />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }))
}
