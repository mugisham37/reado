import { blogPosts, authors } from '../../../data/content'
import { BlogCard } from '../../../components/cards/BlogCard'
import { Divider } from '../../../components/ui/Decorative'
import Link from 'next/link'
import { AuthorPostsSection } from './author-posts'

type Props = {
  params: { slug: string }
}

export default function AuthorProfile({ params }: Props) {
  const { slug } = params
  const author = authors.find(a => a.slug === slug) || authors[0]
  const authorPosts = blogPosts.filter(p => p.author === author.name)

  return (
    <>
      <section style={{ padding: '70px 0 100px 0' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Link href="/" className="text-sm">Home</Link>
            <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>›</span>
            <Link href="/author" className="text-sm">Authors</Link>
          </div>
          <div style={{ width: 120, height: 120, borderRadius: '50%', backgroundColor: 'var(--silver)', overflow: 'hidden', border: '1px solid var(--black)' }}>
            {author.image && <img src={author.image} alt={author.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          </div>
          <h1 className="h1">{author.name}</h1>
          <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>{author.role}</span>
          {author.bio && <p className="body" style={{ maxWidth: 600 }}>{author.bio}</p>}
        </div>
      </section>
      {authorPosts.length > 0 && (
        <AuthorPostsSection author={author} posts={authorPosts} />
      )}
    </>
  )
}

export async function generateStaticParams() {
  return authors.map((author) => ({
    slug: author.slug,
  }))
}
