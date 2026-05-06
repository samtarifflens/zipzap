import type { CSSProperties, ReactNode } from 'react'
import { colors } from '@/theme/tokens'

export interface AtomicOrbitProps {
  size?: number
  // 2 or 3 ellipse orbits
  ringCount?: 2 | 3
  ringColor?: string
  electronColor?: string
  // Solid/dashed rings
  dashed?: boolean
  style?: CSSProperties
  children?: ReactNode
}

/**
 * Sputnik-era atomic orbit. Three rotated ellipses with electrons on
 * each ring. The shape that says "the future" in every postwar ad.
 * Wrap a mascot or a hero element in this for instant 1957.
 */
export function AtomicOrbit({
  size = 320,
  ringCount = 3,
  ringColor = colors.s500,
  electronColor = colors.r500,
  dashed = false,
  style,
  children,
}: AtomicOrbitProps) {
  const cx = 50
  const cy = 50
  const rx = 46
  const ry = 18
  const rings = ringCount === 3 ? [0, 60, 120] : [0, 90]

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
        style={{ display: 'block', position: 'absolute', inset: 0 }}
        aria-hidden
      >
        {rings.map((deg) => (
          <g key={deg} transform={`rotate(${deg} ${cx} ${cy})`}>
            <ellipse
              cx={cx}
              cy={cy}
              rx={rx}
              ry={ry}
              fill="none"
              stroke={ringColor}
              strokeWidth="2"
              strokeDasharray={dashed ? '3 3' : undefined}
            />
            {/* electron at +rx along this ring */}
            <circle
              cx={cx + rx}
              cy={cy}
              r="3.6"
              fill={electronColor}
              stroke={colors.ink}
              strokeWidth="1.2"
            />
            <circle
              cx={cx - rx * 0.7}
              cy={cy + ry * 0.7}
              r="2.2"
              fill={colors.v400}
              stroke={colors.ink}
              strokeWidth="0.8"
            />
          </g>
        ))}
        {/* nucleus dot */}
        <circle
          cx={cx}
          cy={cy}
          r="3"
          fill={colors.v400}
          stroke={colors.ink}
          strokeWidth="1"
        />
      </svg>
      {children !== undefined && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}
