import type { CSSProperties } from 'react'

// =================== 50s ===================

/**
 * Googie panel — the cocked-parallelogram shape used on 1957 service-
 * station signage to hold a wordmark. Tilted right, sharp corners.
 */
export function GoogiePanel({
  width = 480,
  height = 140,
  bg = '#0F4C5C',
  border = '#0E1116',
  borderWidth = 4,
  skew = -10,
  style,
  children,
}: {
  width?: number
  height?: number
  bg?: string
  border?: string
  borderWidth?: number
  skew?: number
  style?: CSSProperties
  children?: React.ReactNode
}) {
  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        display: 'inline-block',
        transform: `skewX(${skew}deg)`,
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: bg,
          border: `${borderWidth}px solid ${border}`,
          boxShadow: `8px 8px 0 0 ${border}`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `skewX(${-skew}deg)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </div>
  )
}

// =================== 60s ===================

/**
 * Flying eyeball pierced by a lightning bolt — Rick Griffin 1968,
 * recast for an electrician. The disembodied-eyeball-with-wings is
 * THE Fillmore-poster mascot.
 */
export function FlyingEyeball({
  size = 280,
  iris = '#A8E62E',
  white = '#F4E9C8',
  outline = '#0E0A1A',
  bolt = '#F5C518',
  bloodshot = '#D1006C',
  style,
}: {
  size?: number
  iris?: string
  white?: string
  outline?: string
  bolt?: string
  bloodshot?: string
  style?: CSSProperties
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={style} aria-hidden>
      {/* wings */}
      <path
        d="M 30 110 C 0 80 -10 60 30 60 C 50 60 60 80 50 100 Z"
        fill={iris}
        stroke={outline}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M 12 90 L 30 88 M 16 100 L 30 96 M 20 78 L 30 80" stroke={outline} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M 170 110 C 200 80 210 60 170 60 C 150 60 140 80 150 100 Z"
        fill={iris}
        stroke={outline}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M 188 90 L 170 88 M 184 100 L 170 96 M 180 78 L 170 80" stroke={outline} strokeWidth="2" strokeLinecap="round" />

      {/* eye almond */}
      <path
        d="M 50 100 C 50 60 100 40 100 40 C 100 40 150 60 150 100 C 150 140 100 160 100 160 C 100 160 50 140 50 100 Z"
        fill={white}
        stroke={outline}
        strokeWidth="4"
      />

      {/* iris */}
      <circle cx="100" cy="100" r="34" fill={iris} stroke={outline} strokeWidth="3" />
      {/* pupil */}
      <circle cx="100" cy="100" r="14" fill={outline} />
      {/* highlight */}
      <circle cx="91" cy="91" r="5" fill={white} />
      {/* bloodshot veins */}
      <path d="M 60 100 Q 70 90 80 95" stroke={bloodshot} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 65 110 Q 72 108 78 115" stroke={bloodshot} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 130 100 Q 122 96 116 102" stroke={bloodshot} strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* lightning bolt piercing diagonally */}
      <path
        d="M 130 30 L 80 100 L 110 100 L 80 180 L 150 90 L 120 90 Z"
        fill={bolt}
        stroke={outline}
        strokeWidth="3"
        strokeLinejoin="miter"
      />

      {/* teardrop */}
      <path
        d="M 100 165 C 95 175 95 185 100 188 C 105 185 105 175 100 165 Z"
        fill={iris}
        stroke={outline}
        strokeWidth="2.5"
      />
    </svg>
  )
}

/**
 * Hard-edged radiating sun rays — alternating wedge color for the
 * vibrating-complementary trick. Use TWO instances of this stacked,
 * rotated, to create the Fillmore-poster radiating background.
 */
export function HardRays({
  size = 1000,
  rays = 24,
  colorA = '#E91E63',
  colorB = '#A8E62E',
  style,
}: {
  size?: number
  rays?: number
  colorA?: string
  colorB?: string
  style?: CSSProperties
}) {
  const path: { fill: string; d: string }[] = []
  const wedge = 360 / rays
  for (let i = 0; i < rays; i += 1) {
    const start = i * wedge - wedge / 2
    const end = start + wedge
    const sx = Math.cos((start * Math.PI) / 180) * 200
    const sy = Math.sin((start * Math.PI) / 180) * 200
    const ex = Math.cos((end * Math.PI) / 180) * 200
    const ey = Math.sin((end * Math.PI) / 180) * 200
    path.push({
      fill: i % 2 === 0 ? colorA : colorB,
      d: `M 0 0 L ${sx.toFixed(2)} ${sy.toFixed(2)} L ${ex.toFixed(2)} ${ey.toFixed(2)} Z`,
    })
  }
  return (
    <svg width={size} height={size} viewBox="-200 -200 400 400" style={style} aria-hidden>
      {path.map((p, i) => (
        <path key={i} d={p.d} fill={p.fill} />
      ))}
    </svg>
  )
}

/**
 * Fillmore scrollwork tendril — ornate Art-Nouveau-derived border
 * scroll for framing. Renders as a single repeating SVG stripe.
 */
export function ScrollBorder({
  width = 1200,
  height = 60,
  color = '#F5C518',
  bg = '#0E0A1A',
  style,
}: {
  width?: number
  height?: number
  color?: string
  bg?: string
  style?: CSSProperties
}) {
  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      style={{ display: 'block', ...style }}
      aria-hidden
    >
      <rect width={width} height={height} fill={bg} />
      {/* repeating tendril unit, every 80px */}
      {Array.from({ length: Math.ceil(width / 80) }).map((_, i) => {
        const x = i * 80
        return (
          <g key={i} stroke={color} strokeWidth="3" fill="none" strokeLinecap="round">
            <path d={`M ${x + 4} ${height / 2} Q ${x + 16} ${height / 4}, ${x + 28} ${height / 2} T ${x + 52} ${height / 2} T ${x + 76} ${height / 2}`} />
            <circle cx={x + 8} cy={height / 2} r="3" fill={color} />
            <circle cx={x + 40} cy={height / 4} r="2.5" fill={color} />
            <circle cx={x + 64} cy={(height * 3) / 4} r="2.5" fill={color} />
          </g>
        )
      })}
    </svg>
  )
}

// =================== 70s ===================

/**
 * Sunset stripe stack — descending hard-edged horizontal bands, the
 * Atari/Apple 1977 vocabulary. Shorter at top, taller at bottom is the
 * authentic feel; here we go uniform for cleanliness.
 */
export function SunsetStripes({
  width = 1200,
  height = 360,
  bands = ['#9B2D1F', '#B7410E', '#E07A1F', '#D4A017', '#F1E6C8'],
  style,
}: {
  width?: number
  height?: number
  bands?: string[]
  style?: CSSProperties
}) {
  const each = height / bands.length
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      style={{ display: 'block', ...style }}
      aria-hidden
    >
      {bands.map((bg, i) => (
        <rect key={`${bg}-${i}`} x={0} y={i * each} width={width} height={each} fill={bg} />
      ))}
    </svg>
  )
}

/**
 * Wood-grain russet frame — rounded-rectangle badge with a heavy
 * russet keyline and faint horizontal grain texture. Pure 1970s panel.
 */
export function WoodFrame({
  width = 800,
  height = 320,
  bg = '#F1E6C8',
  border = '#5C3A21',
  grain = '#8B4513',
  borderWidth = 8,
  radius = 28,
  style,
  children,
}: {
  width?: number | string
  height?: number
  bg?: string
  border?: string
  grain?: string
  borderWidth?: number
  radius?: number
  style?: CSSProperties
  children?: React.ReactNode
}) {
  return (
    <div
      style={{
        position: 'relative',
        width,
        background: bg,
        border: `${borderWidth}px solid ${border}`,
        borderRadius: radius,
        boxShadow: `8px 8px 0 0 ${border}`,
        backgroundImage: `repeating-linear-gradient(0deg, ${grain}11 0px, ${grain}11 1px, transparent 1px, transparent 6px)`,
        overflow: 'hidden',
        minHeight: height,
        ...style,
      }}
    >
      {/* inner russet keyline */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 8,
          border: `2px solid ${border}`,
          borderRadius: radius - 8,
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  )
}

// =================== 80s ===================

/**
 * Bacterio squiggle — Sottsass's bacteria-pattern wavy line. The
 * single most "1980s" motif. Renders as a repeating compact pattern.
 */
export function Bacterio({
  width = 200,
  height = 100,
  color = '#0B0F1A',
  strokeWidth = 4,
  style,
}: {
  width?: number
  height?: number
  color?: string
  strokeWidth?: number
  style?: CSSProperties
}) {
  // single squiggle that travels from left to right with up/down loops
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ display: 'block', ...style }}
      aria-hidden
    >
      <path
        d={`M 4 ${height / 2}
            C ${width * 0.1} ${height * 0.2}, ${width * 0.18} ${height * 0.2}, ${width * 0.24} ${height / 2}
            C ${width * 0.3} ${height * 0.8}, ${width * 0.38} ${height * 0.8}, ${width * 0.44} ${height / 2}
            C ${width * 0.5} ${height * 0.2}, ${width * 0.58} ${height * 0.2}, ${width * 0.64} ${height / 2}
            C ${width * 0.7} ${height * 0.8}, ${width * 0.78} ${height * 0.8}, ${width * 0.84} ${height / 2}
            C ${width * 0.9} ${height * 0.2}, ${width * 0.96} ${height * 0.2}, ${width - 4} ${height / 2}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}

/**
 * Memphis confetti — scattered triangles, dots, half-circles, and
 * squiggles that anchor any 80s composition. Pass color set to vary.
 */
export function MemphisConfetti({
  width = 800,
  height = 320,
  colors = ['#FF2E93', '#00C2D1', '#FFD23F', '#7B2FBE', '#0B0F1A'],
  density = 24,
  seed = 0,
  style,
}: {
  width?: number
  height?: number
  colors?: string[]
  density?: number
  seed?: number
  style?: CSSProperties
}) {
  // Deterministic pseudo-random scatter so SSR/dev hot-reload stable
  const rnd = (i: number) => {
    const x = Math.sin((i + seed) * 12.9898) * 43758.5453
    return x - Math.floor(x)
  }

  const items = Array.from({ length: density }).map((_, i) => {
    const x = rnd(i * 3 + 1) * width
    const y = rnd(i * 3 + 2) * height
    const c = colors[i % colors.length]
    const r = rnd(i * 3 + 3) * 360
    const s = 14 + rnd(i * 7 + 1) * 24
    const kind = i % 5
    return { x, y, c, r, s, kind }
  })

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ display: 'block', ...style }}
      aria-hidden
    >
      {items.map((it, i) => {
        if (it.kind === 0) {
          // triangle
          return (
            <polygon
              key={i}
              points={`0,${-it.s} ${it.s * 0.9},${it.s * 0.6} ${-it.s * 0.9},${it.s * 0.6}`}
              fill={it.c}
              transform={`translate(${it.x} ${it.y}) rotate(${it.r})`}
            />
          )
        }
        if (it.kind === 1) {
          return <circle key={i} cx={it.x} cy={it.y} r={it.s * 0.5} fill={it.c} />
        }
        if (it.kind === 2) {
          // half-circle
          return (
            <path
              key={i}
              d={`M ${-it.s} 0 A ${it.s} ${it.s} 0 0 1 ${it.s} 0 Z`}
              fill={it.c}
              transform={`translate(${it.x} ${it.y}) rotate(${it.r})`}
            />
          )
        }
        if (it.kind === 3) {
          // squiggle
          return (
            <path
              key={i}
              d={`M ${-it.s * 0.8} 0 C ${-it.s * 0.4} ${-it.s * 0.7}, ${it.s * 0.4} ${it.s * 0.7}, ${it.s * 0.8} 0`}
              fill="none"
              stroke={it.c}
              strokeWidth={3.5}
              strokeLinecap="round"
              transform={`translate(${it.x} ${it.y}) rotate(${it.r})`}
            />
          )
        }
        // dot cluster
        return (
          <g key={i} transform={`translate(${it.x} ${it.y})`}>
            <circle cx="0" cy="0" r="3" fill={it.c} />
            <circle cx={it.s * 0.4} cy={it.s * 0.2} r="2.5" fill={it.c} />
            <circle cx={-it.s * 0.3} cy={it.s * 0.4} r="2" fill={it.c} />
            <circle cx={it.s * 0.2} cy={-it.s * 0.4} r="2.5" fill={it.c} />
          </g>
        )
      })}
    </svg>
  )
}

/**
 * B&W checkerboard band — ska/MTV/Memphis tell. Use as a footer or
 * edge stripe.
 */
export function CheckerBand({
  width = 1200,
  height = 32,
  squares = 60,
  light = '#F5F1E8',
  dark = '#0B0F1A',
  style,
}: {
  width?: number
  height?: number
  squares?: number
  light?: string
  dark?: string
  style?: CSSProperties
}) {
  const sw = width / squares
  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      style={{ display: 'block', ...style }}
      aria-hidden
    >
      <rect width={width} height={height} fill={light} />
      {Array.from({ length: squares }).map((_, i) =>
        i % 2 === 0 ? <rect key={i} x={i * sw} y={0} width={sw} height={height} fill={dark} /> : null,
      )}
    </svg>
  )
}

// =================== 90s ===================

/**
 * Nickelodeon-style splat blob — irregular orange splash with 6-9
 * lobes that contains a wordmark. The actual Splat is the FRAME, not
 * decoration — the wordmark sits inside, knocked out white.
 */
export function NickSplat({
  width = 600,
  height = 300,
  color = '#F57C13',
  stroke = '#0A0A0A',
  rotate = -4,
  style,
  children,
}: {
  width?: number
  height?: number
  color?: string
  stroke?: string
  rotate?: number
  style?: CSSProperties
  children?: React.ReactNode
}) {
  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        display: 'inline-block',
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 600 300"
        style={{ display: 'block' }}
        aria-hidden
      >
        <path
          d="M 70 92
             C 30 60 50 22 110 28
             C 130 -8 200 8 220 32
             C 250 4 310 8 320 38
             C 350 12 410 14 420 50
             C 460 26 530 50 530 92
             C 580 96 600 140 560 168
             C 590 200 558 250 510 240
             C 504 282 440 296 410 268
             C 376 296 320 290 308 256
             C 280 286 220 290 200 256
             C 168 282 110 274 100 240
             C 60 252 18 218 36 178
             C -2 168 6 116 70 92 Z"
          fill={color}
          stroke={stroke}
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `rotate(${-rotate}deg)`,
          padding: 28,
        }}
      >
        {children}
      </div>
    </div>
  )
}
