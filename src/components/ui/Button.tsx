import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: React.ReactNode
  to?: string
  href?: string
  variant?: 'dark' | 'white'
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({ children, to, href, variant = 'dark', onClick, type = 'button', disabled }: ButtonProps) {
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

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>{children}</Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} type={type} disabled={disabled} {...motionProps}>
      {children}
    </motion.button>
  )
}

// Nav Subscribe button with arrow icon
export function NavButton({ to = '/subscribe', label = 'Subscribe' }: { to?: string; label?: string }) {
  return (
    <Button to={to} variant="dark">
      <span>{label}</span>
      <span style={{ display: 'flex', alignItems: 'center', marginLeft: 6 }}>
        <img
          src="https://framerusercontent.com/images/tBMERP9IF9GYm76gyrbFKTcXkM.svg"
          alt=""
          style={{ width: 14, height: 'auto' }}
        />
      </span>
    </Button>
  )
}
