import type { CSSProperties } from 'react'
import { colors } from '@/theme/tokens'

export interface SwooshProps {
  width?: number
  height?: number
  color?: string
  strokeWidth?: number
  // 'underline' = long arched underscore (Coca-Cola style)
  // 'flourish'  = short signpainter curl
  variant?: 'underline' | 'flourish'
  style?: CSSProperties
}

/**
 * Hand-drawn signpainter swoosh — drops under a tagline or wraps
 * around a wordmark like the underline of a midcentury brand mark.
 */
export function Swoosh({
  width = 300,
  height = 40,
  color = colors.r500,
  strokeWidth = 5,
  variant = 'underline',
  style,
}: SwooshProps) {
  if (variant === 'flourish') {
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ display: 'block', overflow: 'visible', ...style }}
        aria-hidden
      >
        <path
          d={`M 4 ${height * 0.8} C ${width * 0.25} ${height * -0.2} ${width * 0.6} ${height * 1.3} ${width * 0.85} ${height * 0.4} C ${width * 0.95} ${height * 0.05} ${width * 0.98} ${height * 0.2} ${width - 6} ${height * 0.6}`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ display: 'block', overflow: 'visible', ...style }}
      aria-hidden
    >
      {/* main arched underline */}
      <path
        d={`M 6 ${height * 0.7} Q ${width * 0.5} ${height * 1.5} ${width - 30} ${height * 0.4} L ${width - 8} ${height * 0.15}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* arrow tip */}
      <path
        d={`M ${width - 24} ${height * 0.05} L ${width - 6} ${height * 0.18} L ${width - 16} ${height * 0.4}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="miter"
      />
    </svg>
  )
}

/**
 * Diagonal speed lines — the cartoon "whoosh" effect. Place beside
 * Sparky to imply the electrician moves fast.
 */
export function SpeedLines({
  width = 60,
  height = 100,
  color = colors.ink,
  style,
}: Pick<SwooshProps, 'width' | 'height' | 'color' | 'style'>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ display: 'block', ...style }}
      aria-hidden
    >
      {[0.18, 0.42, 0.66, 0.84].map((y, i) => (
        <line
          key={y}
          x1={i % 2 === 0 ? 4 : width * 0.25}
          y1={height * y}
          x2={width - 6}
          y2={height * (y + 0.04)}
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}
