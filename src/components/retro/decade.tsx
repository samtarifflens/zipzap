import type { CSSProperties } from 'react'

// =================== 60s ===================

export function Daisy({
  size = 80,
  petal = '#FEFCF7',
  center = '#FFD23F',
  stroke = '#0E1116',
  strokeWidth = 3,
  style,
}: {
  size?: number
  petal?: string
  center?: string
  stroke?: string
  strokeWidth?: number
  style?: CSSProperties
}) {
  // 5-petal daisy
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden>
      <g transform="translate(50 50)">
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-26"
            rx="14"
            ry="22"
            fill={petal}
            stroke={stroke}
            strokeWidth={strokeWidth}
            transform={`rotate(${deg})`}
          />
        ))}
      </g>
      <circle cx="50" cy="50" r="12" fill={center} stroke={stroke} strokeWidth={strokeWidth} />
    </svg>
  )
}

export function PeaceSign({
  size = 80,
  fill = '#FFD600',
  stroke = '#0E1116',
  strokeWidth = 3,
  style,
}: {
  size?: number
  fill?: string
  stroke?: string
  strokeWidth?: number
  style?: CSSProperties
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden>
      <circle cx="50" cy="50" r="44" fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1="50" y1="6" x2="50" y2="94" stroke={stroke} strokeWidth="6" strokeLinecap="round" />
      <line x1="50" y1="50" x2="20" y2="80" stroke={stroke} strokeWidth="6" strokeLinecap="round" />
      <line x1="50" y1="50" x2="80" y2="80" stroke={stroke} strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

export function GroovySwirl({
  size = 200,
  color = '#B026FF',
  strokeWidth = 5,
  style,
}: {
  size?: number
  color?: string
  strokeWidth?: number
  style?: CSSProperties
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden>
      <path
        d="M 50 50 m -2 0 a 2 2 0 1 1 4 0 a 2 2 0 1 1 -4 0
           M 50 50 m -10 0 a 10 10 0 1 1 20 0 a 10 10 0 1 1 -20 0
           M 50 50 m -20 0 a 20 20 0 1 1 40 0 a 20 20 0 1 1 -40 0
           M 50 50 m -32 0 a 32 32 0 1 1 64 0 a 32 32 0 1 1 -64 0
           M 50 50 m -44 0 a 44 44 0 1 1 88 0 a 44 44 0 1 1 -88 0"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

// =================== 70s ===================

/**
 * Sunburst rays — solid wedges radiating from center. The 1976 album
 * cover effect.
 */
export function SunRays({
  size = 600,
  rays = 18,
  color = '#E8B33B',
  style,
}: {
  size?: number
  rays?: number
  color?: string
  style?: CSSProperties
}) {
  const wedges: string[] = []
  const wedgeAngle = 360 / (rays * 2)
  for (let i = 0; i < rays; i += 1) {
    const start = i * (360 / rays) - wedgeAngle / 2
    const end = start + wedgeAngle
    const sx = 50 + Math.cos((start * Math.PI) / 180) * 200
    const sy = 50 + Math.sin((start * Math.PI) / 180) * 200
    const ex = 50 + Math.cos((end * Math.PI) / 180) * 200
    const ey = 50 + Math.sin((end * Math.PI) / 180) * 200
    wedges.push(`M 50 50 L ${sx.toFixed(2)} ${sy.toFixed(2)} L ${ex.toFixed(2)} ${ey.toFixed(2)} Z`)
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="-150 -150 400 400"
      style={style}
      aria-hidden
    >
      <path d={wedges.join(' ')} fill={color} />
    </svg>
  )
}

/**
 * 70s rainbow stripe field — 5 horizontal bands.
 */
export function GroovyStripes({
  width = '100%',
  height = 80,
  bands = ['#C4581E', '#E8B33B', '#FFD23F', '#6F8B3D', '#5C3A1E'],
  style,
}: {
  width?: number | string
  height?: number
  bands?: string[]
  style?: CSSProperties
}) {
  return (
    <div
      style={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
      aria-hidden
    >
      {bands.map((bg, i) => (
        <div
          key={`${bg}-${i}`}
          style={{
            flex: 1,
            background: bg,
            borderTop: i === 0 ? 'none' : '1px solid rgba(14,17,22,0.4)',
          }}
        />
      ))}
    </div>
  )
}

// =================== 80s ===================

/**
 * Synthwave grid floor — perspective grid receding to a horizon.
 */
export function GridFloor({
  width = 1400,
  height = 320,
  lineColor = '#FF2D87',
  horizonY = 0,
  style,
}: {
  width?: number
  height?: number
  lineColor?: string
  horizonY?: number
  style?: CSSProperties
}) {
  // vertical lines converge to vanishing point at (width/2, horizonY)
  const cx = width / 2
  const verticals: number[] = [-7, -5, -3, -1.4, -0.6, 0, 0.6, 1.4, 3, 5, 7]
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ display: 'block', ...style }}
      aria-hidden
    >
      <defs>
        <linearGradient id="grid-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
          <stop offset="20%" stopColor={lineColor} stopOpacity="0.6" />
          <stop offset="100%" stopColor={lineColor} stopOpacity="1" />
        </linearGradient>
      </defs>
      {/* horizontal lines, exponential spacing toward horizon */}
      {[0.05, 0.12, 0.22, 0.35, 0.5, 0.7, 1].map((t) => (
        <line
          key={t}
          x1="0"
          y1={horizonY + t * height}
          x2={width}
          y2={horizonY + t * height}
          stroke="url(#grid-fade)"
          strokeWidth="2"
        />
      ))}
      {/* vertical perspective lines */}
      {verticals.map((m) => (
        <line
          key={m}
          x1={cx + m * width * 0.5}
          y1={height}
          x2={cx}
          y2={horizonY}
          stroke="url(#grid-fade)"
          strokeWidth="2"
        />
      ))}
    </svg>
  )
}

/**
 * Vapor sun — half-circle gradient with horizontal slits.
 */
export function NeonSun({
  size = 360,
  fromColor = '#FFE74C',
  toColor = '#FF2D87',
  style,
}: {
  size?: number
  fromColor?: string
  toColor?: string
  style?: CSSProperties
}) {
  const gradId = `vsun-${fromColor.replace('#', '')}-${toColor.replace('#', '')}`
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fromColor} />
          <stop offset="60%" stopColor={toColor} />
          <stop offset="100%" stopColor={toColor} stopOpacity="0.4" />
        </linearGradient>
        <mask id={`${gradId}-mask`}>
          <rect width="100" height="100" fill="white" />
          <rect y="62" width="100" height="2" fill="black" />
          <rect y="68" width="100" height="2.4" fill="black" />
          <rect y="75" width="100" height="3" fill="black" />
          <rect y="83" width="100" height="3.6" fill="black" />
          <rect y="92" width="100" height="4.5" fill="black" />
        </mask>
      </defs>
      <circle cx="50" cy="50" r="44" fill={`url(#${gradId})`} mask={`url(#${gradId}-mask)`} />
    </svg>
  )
}

// =================== 90s ===================

/**
 * Paint splat — irregular blob with 5-7 lobes, used as a sticker shape.
 */
export function PaintSplat({
  size = 200,
  color = '#7FBC03',
  stroke = '#0E1116',
  strokeWidth = 3,
  rotate = 0,
  style,
}: {
  size?: number
  color?: string
  stroke?: string
  strokeWidth?: number
  rotate?: number
  style?: CSSProperties
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={{ transform: `rotate(${rotate}deg)`, display: 'inline-block', ...style }}
      aria-hidden
    >
      <path
        d="M 100 14
           C 130 8 150 32 154 56
           C 180 50 196 76 184 100
           C 198 118 188 148 162 152
           C 168 178 142 196 118 184
           C 108 200 80 200 70 184
           C 46 198 18 178 26 152
           C 4 144 2 112 22 102
           C 6 82 22 56 48 60
           C 50 36 70 18 100 14 Z"
        fill={color}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Slime drip — a horizontal band that drips down with rounded blobs.
 * Use it across the top or bottom of a section.
 */
export function SlimeDrip({
  width = 1400,
  height = 80,
  color = '#7FBC03',
  stroke = '#0E1116',
  flip = false,
  style,
}: {
  width?: number
  height?: number
  color?: string
  stroke?: string
  flip?: boolean
  style?: CSSProperties
}) {
  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      style={{ display: 'block', transform: flip ? 'scaleY(-1)' : undefined, ...style }}
      aria-hidden
    >
      <path
        d={`M 0 0 L ${width} 0 L ${width} ${height * 0.4}
            C ${width * 0.95} ${height * 0.65} ${width * 0.9} ${height * 0.5} ${width * 0.85} ${height * 0.7}
            C ${width * 0.82} ${height * 0.95} ${width * 0.78} ${height} ${width * 0.74} ${height * 0.75}
            C ${width * 0.7} ${height * 0.55} ${width * 0.66} ${height * 0.7} ${width * 0.6} ${height * 0.5}
            C ${width * 0.55} ${height * 0.85} ${width * 0.5} ${height} ${width * 0.45} ${height * 0.7}
            C ${width * 0.4} ${height * 0.5} ${width * 0.36} ${height * 0.65} ${width * 0.32} ${height * 0.85}
            C ${width * 0.28} ${height} ${width * 0.24} ${height * 0.95} ${width * 0.2} ${height * 0.65}
            C ${width * 0.16} ${height * 0.45} ${width * 0.12} ${height * 0.6} ${width * 0.08} ${height * 0.5}
            C ${width * 0.05} ${height * 0.4} ${width * 0.02} ${height * 0.45} 0 ${height * 0.4}
            Z`}
        fill={color}
        stroke={stroke}
        strokeWidth="3"
      />
    </svg>
  )
}
