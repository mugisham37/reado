'use client'

import Link from 'next/link'
import { blogPosts, categories } from '../../../data/content'
import { BlogCard } from '../../../components/cards/BlogCard'

interface CategoriesPageProps {
  params: { slug: string }
}

export default function CategoryPage({ params }: CategoriesPageProps) {
  const category = categories.find(c => c.slug === params.slug)
  const postsInCategory = blogPosts.filter(p => p.category === category?.name || p.slug.includes(params.slug))

  if (!category) {
    return <div style={{ padding: 40, textAlign: 'center' }}>Category not found</div>
  }

  return (
    <main style={{ padding: '100px 30px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 40, alignItems: 'center' }}>
          <Link href="/categories" style={{ textDecoration: 'none', color: 'var(--neutral-gray)' }} className="body">Categories</Link>
          <span style={{ color: 'var(--neutral-gray)' }}>→</span>
          <span className="body" style={{ color: 'var(--black)' }}>{category.name}</span>
        </div>

        {/* Category Header */}
        <header style={{ marginBottom: 60 }}>
          <h1 className="h1">{category.name}</h1>
          <p className="body" style={{ color: 'var(--neutral-gray)', marginTop: 10 }}>
            {postsInCategory.length} articles in this category
          </p>
        </header>

        {/* Posts Grid */}
        {postsInCategory.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            {postsInCategory.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 40, borderTop: '1px solid var(--black)' }}>
            <p className="body" style={{ color: 'var(--neutral-gray)' }}>No articles found in this category</p>
          </div>
        )}

        {/* Other Categories */}
        <section style={{ marginTop: 100, paddingTop: 40, borderTop: '1px solid var(--black)' }}>
          <h2 className="h4">Browse Other Categories</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 20, marginTop: 30 }}>
            {categories.map(cat => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                style={{
                  textDecoration: 'none',
                  padding: 20,
                  border: cat.slug === params.slug ? '2px solid var(--black)' : '1px solid var(--black)',
                  textAlign: 'center',
                  backgroundColor: cat.slug === params.slug ? 'var(--black)' : 'transparent',
                  color: cat.slug === params.slug ? 'var(--white)' : 'var(--black)',
                  cursor: 'pointer',
                }}
              >
                <span className="text-sm">{cat.name}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
