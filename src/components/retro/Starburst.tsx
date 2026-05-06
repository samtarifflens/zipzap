import type { CSSProperties, ReactNode } from 'react'
import { colors, fonts } from '@/theme/tokens'

export interface StarburstProps {
  size?: number
  // Number of points (4, 8, 12, 16). Higher = more "atomic"
  points?: number
  // Long-point ratio — how dramatic the spike contrast is.
  spike?: number
  fill?: string
  stroke?: string
  strokeWidth?: number
  rotate?: number
  style?: CSSProperties
  children?: ReactNode
  // Stack a smaller starburst inside, like a target
  innerFill?: string
  innerScale?: number
  // Inner text wrapper (lays text on top of the burst)
  textColor?: string
}

/**
 * Atomic starburst. The single most 1950s shape ever drawn — used as a
 * stamp for "ELECTRIC!" / "FREE!" / "NEW!" and as the radiating sun
 * behind hero compositions.
 *
 * Geometry: alternates two radii around `points * 2` vertices to make
 * a sharp many-pointed star.
 */
export function Starburst({
  size = 160,
  points = 12,
  spike = 0.55,
  fill = colors.v400,
  stroke = colors.ink,
  strokeWidth = 3,
  rotate = 0,
  style,
  children,
  innerFill,
  innerScale = 0.6,
  textColor = colors.s500,
}: StarburstProps) {
  const cx = 50
  const cy = 50
  const rOuter = 48
  const rInner = rOuter * spike
  const total = points * 2
  const path: string[] = []
  for (let i = 0; i < total; i += 1) {
    const angle = (Math.PI * 2 * i) / total - Math.PI / 2
    const r = i % 2 === 0 ? rOuter : rInner
    const x = cx + Math.cos(angle) * r
    const y = cy + Math.sin(angle) * r
    path.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`)
  }
  path.push('Z')

  const inner =
    innerFill !== undefined
      ? path
          .join(' ')
          .replace(
            /(-?\d+(\.\d+)?)/g,
            (m) => (parseFloat(m) * innerScale + 50 * (1 - innerScale)).toFixed(2),
          )
      : null

  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        display: 'inline-block',
        ...style,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{ display: 'block', transform: `rotate(${rotate}deg)` }}
        aria-hidden
      >
        <path
          d={path.join(' ')}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinejoin="miter"
        />
        {inner !== null && (
          <path
            d={inner}
            fill={innerFill}
            stroke={stroke}
            strokeWidth={strokeWidth * 0.8}
            strokeLinejoin="miter"
          />
        )}
      </svg>
      {children !== undefined && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: textColor,
            fontFamily: fonts.slab,
            lineHeight: 0.95,
            transform: `rotate(${-rotate * 0.4}deg)`,
            padding: size * 0.18,
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

/**
 * Tiny "sparkle" — 4-pointed star, used to dot the i's, decorate
 * around mascots, sit at the corners of stamps. The 50s comma.
 */
export function Sparkle({
  size = 24,
  fill = colors.v400,
  stroke = colors.ink,
  strokeWidth = 2,
  style,
}: Pick<StarburstProps, 'size' | 'fill' | 'stroke' | 'strokeWidth' | 'style'>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ display: 'inline-block', ...style }}
      aria-hidden
    >
      <path
        d="M 50 4 L 56 44 L 96 50 L 56 56 L 50 96 L 44 56 L 4 50 L 44 44 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="miter"
      />
    </svg>
  )
}
