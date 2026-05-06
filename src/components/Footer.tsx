import type { CSSProperties } from 'react'
import { Sparky } from '@/logos/Sparky'
import { Wordmark } from '@/components/Wordmark'
import { colors, fonts } from '@/theme/tokens'

export interface FooterProps {
  caption?: string
}

export function Footer({ caption = 'Zip Zap, LLC · Brand Kit · 2026' }: FooterProps) {
  const foot: CSSProperties = {
    padding: '40px 0 64px',
    borderTop: `2px solid ${colors.ink}`,
    marginTop: 80,
    color: colors.n600,
    fontFamily: fonts.mono,
    fontSize: 11,
    letterSpacing: '0.1em',
    background: colors.cream,
  }
  const container: CSSProperties = {
    maxWidth: 1360,
    margin: '0 auto',
    padding: '0 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 16,
  }
  const brand: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  }
  return (
    <footer style={foot}>
      <div style={container}>
        <div style={brand}>
          <Sparky size={28} />
          <Wordmark size={18} color={colors.s500} />
        </div>
        <div style={{ textTransform: 'uppercase' }}>{caption}</div>
      </div>
    </footer>
  )
}
