import type { CSSProperties } from 'react'
import { NavLink } from 'react-router-dom'
import { Sparky } from '@/logos/Sparky'
import { Wordmark } from '@/components/Wordmark'
import { colors, fonts } from '@/theme/tokens'

const links: Array<{ to: string; label: string }> = [
  { to: '/', label: 'Menu' },
  { to: '/logos', label: 'Logos' },
  { to: '/atomic', label: 'Atomic Deep-Dive' },
]

export function Header() {
  const bar: CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    background: 'rgba(248, 241, 221, 0.9)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    borderBottom: `2px solid ${colors.ink}`,
  }
  const inner: CSSProperties = {
    maxWidth: 1360,
    margin: '0 auto',
    padding: '0 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 68,
  }
  const markWrap: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    textDecoration: 'none',
  }
  const nav: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 28,
    fontFamily: fonts.mono,
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
  }
  const linkStyle = (active: boolean): CSSProperties => ({
    color: active ? colors.s500 : colors.n600,
    textDecoration: 'none',
    fontWeight: active ? 700 : 500,
    borderBottom: active ? `2px solid ${colors.v500}` : '2px solid transparent',
    paddingBottom: 4,
    transition: 'color 180ms var(--ease)',
  })

  return (
    <div style={bar}>
      <div style={inner}>
        <NavLink to="/" style={markWrap}>
          <Sparky size={36} />
          <Wordmark size={22} color={colors.s500} />
        </NavLink>
        <nav style={nav}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              style={({ isActive }) => linkStyle(isActive)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}
