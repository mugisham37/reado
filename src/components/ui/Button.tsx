import { motion } from 'framer-motion'
import NextLink from 'next/link'
import Image from 'next/image'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'dark' | 'white'
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({ children, href, variant = 'dark', onClick, type = 'button', disabled }: ButtonProps) {
  const isDark = variant === 'dark'

  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 6,
    backgroundColor: isDark ? 'var(--black)' : 'var(--white)',
    color: isDark ? 'var(--white)' : 'var(--black)',
    fontFamily: "'Switzer', sans-serif",
    fontWeight: 500,
    fontSize: 13,
    lineHeight: '1em',
    textTransform: 'uppercase' as const,
    letterSpacing: 0,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap' as const,
  }

  const hoverBg = isDark ? 'rgba(0,0,0,0.8)' : 'rgb(204,204,204)'

  const motionProps = {
    style,
    whileHover: disabled ? undefined : { backgroundColor: hoverBg },
    transition: { duration: 0.2, ease: 'easeOut' },
  }

  if (href) {
    return (
      <motion.div {...motionProps}>
        <NextLink href={href} style={{ color: 'inherit', textDecoration: 'none' }}>{children}</NextLink>
      </motion.div>
    )
  }

  return (
    <motion.button onClick={onClick} type={type} disabled={disabled} {...motionProps}>
      {children}
    </motion.button>
  )
}

// Nav Subscribe button with arrow icon
export function NavButton({ href = '/subscribe', label = 'Subscribe' }: { href?: string; label?: string }) {
  return (
    <Button href={href} variant="dark">
      <span>{label}</span>
      <span style={{ display: 'flex', alignItems: 'center', marginLeft: 6 }}>
        <Image
          src="https://framerusercontent.com/images/tBMERP9IF9GYm76gyrbFKTcXkM.svg"
          alt=""
          width={14}
          height={14}
          style={{ width: 14, height: 'auto' }}
        />
      </span>
    </Button>
  )
}
