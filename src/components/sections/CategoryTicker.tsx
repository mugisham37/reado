import Link from 'next/link'
import { categories } from '../../data/content'

export function CategoryTicker() {
  // Duplicate categories for seamless infinite loop
  const items = [...categories, ...categories, ...categories]

  return (
    <div
      style={{
        width: '100%',
        height: 50,
        backgroundColor: 'var(--black)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="ticker-track">
        {items.map((cat, i) => (
          <div key={i} style={{ display: 'contents' }}>
            <Link
              href={`/categories/${cat.slug}`}
              className="text-nav"
              style={{
                color: 'var(--white)',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              {cat.name}
            </Link>
            <div
              style={{
                width: 1,
                height: 14,
                backgroundColor: 'var(--neutral-gray)',
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .ticker-track {
          display: flex;
          align-items: center;
          gap: 80px;
          animation: marquee 30s linear infinite;
          white-space: nowrap;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
