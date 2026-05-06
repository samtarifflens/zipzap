import type { CSSProperties } from 'react'
import { colors, fonts } from '@/theme/tokens'

export interface WordmarkProps {
  size?: number
  color?: string
  // 'flat' = solid color
  // 'shade' = use Bungee Shade for a 3D drop-shadow display variant
  // 'split' = "Zip" in volt yellow, "Zap" in service navy (or vice versa)
  variant?: 'flat' | 'shade' | 'split'
  style?: CSSProperties
}

/**
 * The Zip Zap wordmark. Bungee at base, with optional Bungee Shade for
 * the dimensional 3D variant or a two-color "Zip / Zap" split.
 */
export function Wordmark({
  size = 40,
  color = colors.s500,
  variant = 'flat',
  style,
}: WordmarkProps) {
  const root: CSSProperties = {
    fontFamily: variant === 'shade' ? fonts.shade : fonts.wordmark,
    fontWeight: 400,
    color,
    lineHeight: 1,
    letterSpacing: '0.01em',
    fontSize: size,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    ...style,
  }

  if (variant === 'split') {
    return (
      <span style={root}>
        <span style={{ color: colors.v500 }}>ZIP</span>
        <span style={{ display: 'inline-block', width: '0.32em' }} />
        <span style={{ color: colors.s500 }}>ZAP</span>
      </span>
    )
  }

  return <span style={root}>ZIP ZAP</span>
}
