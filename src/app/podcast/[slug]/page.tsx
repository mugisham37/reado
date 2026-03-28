import Link from 'next/link'

interface PodcastPost {
  number: string
  title: string
  slug: string
  description: string
  duration: string
}

const podcastEpisodes: PodcastPost[] = [
  { number: '[No. 001]', title: 'The Future of Digital Marketing', slug: 'future-of-digital-marketing', description: 'Exploring how AI and automation are reshaping marketing strategies', duration: '45 min' },
  { number: '[No. 002]', title: 'Building Sustainable Startups', slug: 'building-sustainable-startups', description: 'Case studies and insights from successful founders', duration: '52 min' },
  { number: '[No. 003]', title: 'The Wellness Revolution', slug: 'wellness-revolution', description: 'How health tech is transforming personal wellness', duration: '48 min' },
  { number: '[No. 004]', title: 'Remote Work Best Practices', slug: 'remote-work-best-practices', description: 'Tips and tricks for thriving in a distributed team', duration: '38 min' },
]

interface PodcastPageProps {
  params: { slug: string }
}

export default function PodcastEpisode({ params }: PodcastPageProps) {
  const episode = podcastEpisodes.find((e: PodcastPost) => e.slug === params.slug)

  if (!episode) {
    return <div style={{ padding: 40, textAlign: 'center' }}>Episode not found</div>
  }

  const relatedEpisodes = podcastEpisodes.filter((ep: PodcastPost) => ep.slug !== episode.slug)

  return (
    <main style={{ padding: '100px 30px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 40, alignItems: 'center' }}>
          <Link href="/podcast" style={{ textDecoration: 'none', color: 'var(--neutral-gray)' }} className="body">Podcast</Link>
          <span style={{ color: 'var(--neutral-gray)' }}>→</span>
          <span className="body" style={{ color: 'var(--black)' }}>{episode.title}</span>
        </div>

        {/* Episode Header */}
        <header style={{ marginBottom: 60 }}>
          <div style={{ marginBottom: 20 }}>
            <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>{episode.number}</span>
          </div>
          <h1 className="h1" style={{ marginBottom: 20 }}>{episode.title}</h1>
          <p className="body" style={{ color: 'var(--neutral-gray)', marginBottom: 20 }}>{episode.description}</p>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <span className="text-sm">{episode.duration}</span>
          </div>
        </header>

        {/* Player Placeholder */}
        <div style={{
          width: '100%',
          height: 200,
          backgroundColor: 'var(--silver)',
          border: '1px solid var(--black)',
          marginBottom: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 48, marginBottom: 10 }}>▶</div>
            <span className="text-sm">Audio Player Placeholder</span>
          </div>
        </div>

        {/* Episode Description */}
        <section style={{ marginBottom: 60 }}>
          <h2 className="h4">About This Episode</h2>
          <p className="body" style={{ marginTop: 20, lineHeight: 1.8 }}>
            {episode.description}
          </p>
          <p className="body" style={{ marginTop: 15, lineHeight: 1.8, color: 'var(--neutral-gray)' }}>
            In this episode, we dive deep into the key trends shaping the industry, discuss real-world applications, and share actionable insights and strategies you can implement immediately.
          </p>
        </section>

        {/* Related Episodes */}
        <section>
          <h2 className="h4">More Episodes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30, marginTop: 30 }}>
            {relatedEpisodes.map(ep => (
              <Link
                key={ep.slug}
                href={`/podcast/${ep.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ padding: 20, border: '1px solid var(--black)', cursor: 'pointer' }}>
                  <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>{ep.number}</span>
                  <h3 className="h6" style={{ marginTop: 10, marginBottom: 8 }}>{ep.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--neutral-gray)' }}>{ep.duration}</p>
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
  return podcastEpisodes.map(episode => ({
    slug: episode.slug,
  }))
}
