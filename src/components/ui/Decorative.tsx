import React from 'react'
import Image from 'next/image'

// Three-dot decorative ornament: 3 circles, 8px each, 2px gap, border-only
export function DotOrnament({ color = 'var(--dark-charcoal)' }: { color?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            border: `1px solid ${color}`,
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  )
}

// Dashed line ornament
export function DashedLine({ color = 'var(--dark-charcoal)', vertical = false }: { color?: string; vertical?: boolean }) {
  return (
    <div
      style={{
        flex: 1,
        position: 'relative',
        minHeight: vertical ? undefined : 1,
        minWidth: vertical ? 1 : undefined,
      }}
    >
      <div
        style={{
          position: 'absolute',
          ...(vertical
            ? { top: 0, bottom: 0, left: '50%', width: 0, borderLeft: `1px dashed ${color}` }
            : { left: 0, right: 0, top: '50%', height: 0, borderBottom: `1px dashed ${color}` }),
        }}
      />
    </div>
  )
}

// Dots + dashed line row (used in blog card headers)
export function CardHeader({ number, color = 'var(--dark-charcoal)' }: { number: string; color?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%' }}>
      <DotOrnament color={color} />
      <DashedLine color={color} />
      <span className="text-xxs" style={{ color, flexShrink: 0 }}>{number}</span>
    </div>
  )
}

// Decorated border box (used for subscription forms)
export function DecoratedBorder({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--white)', padding: 30, overflow: 'hidden' }} className={className}>
      {/* Top border */}
      <Image
        src="https://framerusercontent.com/images/kVZzMIEr2stOUElhUEqYUTd4MgE.svg"
        alt=""
        width={1000}
        height={5}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 5 }}
      />
      {/* Bottom border */}
      <Image
        src="https://framerusercontent.com/images/kVZzMIEr2stOUElhUEqYUTd4MgE.svg"
        alt=""
        width={1000}
        height={5}
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 5 }}
      />
      {/* Left border */}
      <Image
        src="https://framerusercontent.com/images/Qa0UvZ1Zorl06gRRPfcIzni7IWc.svg"
        alt=""
        width={5}
        height={1000}
        style={{ position: 'absolute', top: 0, left: 0, width: 5, height: '100%' }}
      />
      {/* Right border */}
      <Image
        src="https://framerusercontent.com/images/Qa0UvZ1Zorl06gRRPfcIzni7IWc.svg"
        alt=""
        width={5}
        height={1000}
        style={{ position: 'absolute', top: 0, right: 0, width: 5, height: '100%' }}
      />
      {children}
    </div>
  )
}

// Horizontal divider (used between sections)
export function Divider({ color = 'var(--black)' }: { color?: string }) {
  return <div style={{ width: '100%', height: 1, backgroundColor: color }} />
}

// Vertical divider
export function VerticalDivider({ color = 'var(--neutral-gray)', height = 14 }: { color?: string; height?: number }) {
  return <div style={{ width: 1, height, backgroundColor: color, flexShrink: 0 }} />
}
