'use client'

import { useLenis } from '../hooks'

export function RootProvider({ children }: { children: React.ReactNode }) {
  // Initialize Lenis for smooth scrolling globally
  useLenis()

  return <>{children}</>
}
