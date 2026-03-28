import { podcastEpisodes } from '../../../data/content'
import { Divider } from '../../../components/ui/Decorative'
import Link from 'next/link'

type Props = {
  params: { slug: string }
}

export default function PodcastPost({ params }: Props) {
  const { slug } = params
  const ep = podcastEpisodes.find(e => e.slug === slug) || podcastEpisodes[0]

  return (
    <>
      <section style={{ padding: '70px 0 100px 0' }}>
        <div className="container" style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Link href="/" className="text-sm">Home</Link>
              <span className="text-sm" style={{ color: 'var(--neutral-gray)' }}>›</span>
              <Link href="/podcast" className="text-sm">Podcasts</Link>
            </div>
            <h1 className="h1" style={{ textAlign: 'center' }}>{ep.title}</h1>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <span className="text-sm">by {ep.host}</span>
              <div style={{ width: 1, height: 11, backgroundColor: 'var(--neutral-gray)' }} />
              <span className="text-sm">{ep.duration}</span>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: '0 0 170px 0' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ width: '100%', paddingBottom: '56%', backgroundColor: 'var(--silver)', border: '1px solid var(--black)', marginBottom: 40 }} />
          <p className="body">Listen to this episode where {ep.host} discusses {ep.title.toLowerCase()}. This episode covers key insights and perspectives on the topic.</p>
        </div>
      </section>
    </>
  )
}

export async function generateStaticParams() {
  return podcastEpisodes.map((ep) => ({
    slug: ep.slug,
  }))
}
