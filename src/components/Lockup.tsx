import type { CSSProperties } from 'react'
import { Sparky } from '@/logos/Sparky'
import { Wordmark } from '@/components/Wordmark'
import { colors, fonts } from '@/theme/tokens'
import type { LogoMarkProps } from '@/logos/types'

export interface LockupProps {
  size?: number
  Mark?: React.ComponentType<LogoMarkProps>
  // 'horizontal' (mark + wordmark side by side)
  // 'stacked'    (mark on top, wordmark below, "LLC" tagline tiny)
  layout?: 'horizontal' | 'stacked'
  color?: string
  showLLC?: boolean
  showTagline?: boolean
  tagline?: string
  style?: CSSProperties
}

/**
 * The default brand lockup. Pairs a chosen mark with the Bungee
 * wordmark and an optional "Denver, CO · LLC" caption underneath.
 */
export function Lockup({
  size = 56,
  Mark = Sparky,
  layout = 'horizontal',
  color = colors.s500,
  showLLC = true,
  showTagline = false,
  tagline = 'Denver electricians',
  style,
}: LockupProps) {
  const wordSize = size * 0.55

  if (layout === 'stacked') {
    const wrap: CSSProperties = {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: size * 0.18,
      ...style,
    }
    const sub: CSSProperties = {
      fontFamily: fonts.mono,
      fontSize: Math.max(9, size * 0.13),
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: colors.n500,
    }
    const script: CSSProperties = {
      fontFamily: fonts.script,
      fontSize: Math.max(14, size * 0.32),
      color: colors.e500,
      lineHeight: 0.9,
    }
    return (
      <div style={wrap}>
        <Mark size={size} />
        <Wordmark size={wordSize} color={color} />
        {showTagline && <span style={script}>{tagline}</span>}
        {showLLC && <span style={sub}>EST. 2026 · DENVER, CO · LLC</span>}
      </div>
    )
  }

  const wrap: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: size * 0.25,
    ...style,
  }
  const text: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  }
  const sub: CSSProperties = {
    fontFamily: fonts.mono,
    fontSize: Math.max(9, wordSize * 0.22),
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: colors.n500,
  }

  return (
    <div style={wrap}>
      <Mark size={size} />
      <div style={text}>
        <Wordmark size={wordSize} color={color} />
        {showLLC && <span style={sub}>Denver · LLC</span>}
      </div>
    </div>
  )
}
