import type { LogoMarkProps } from '@/logos/types'

/**
 * Service Patch — vintage workwear name-tag oval with a stitched
 * border. Reads as a uniform patch sewn onto coveralls.
 */
export function ServicePatch({ size, variant = 'default', style }: LogoMarkProps) {
  const patch =
    variant === 'mono'
      ? '#F8F1DD'
      : variant === 'inverse'
        ? '#FFD23F'
        : '#1F3A93'
  const text = variant === 'mono' ? '#0E1116' : '#FFD23F'
  const outline = variant === 'mono' ? '#0E1116' : '#0E1116'
  const stitch = variant === 'mono' ? '#0E1116' : '#FFD23F'
  const bolt = variant === 'mono' ? '#0E1116' : '#FFD23F'

  return (
    <svg width={size} height={size} viewBox="0 0 160 120" style={style} aria-hidden>
      {/* patch body (oval) */}
      <ellipse
        cx="80"
        cy="60"
        rx="74"
        ry="50"
        fill={patch}
        stroke={outline}
        strokeWidth="3"
      />
      {/* stitch line */}
      <ellipse
        cx="80"
        cy="60"
        rx="68"
        ry="44"
        fill="none"
        stroke={stitch}
        strokeWidth="1.6"
        strokeDasharray="4 3"
      />
      {/* HELLO MY NAME IS-style top strip */}
      <rect
        x="12"
        y="22"
        width="136"
        height="14"
        fill={text}
        opacity="0.9"
        rx="2"
      />
      <text
        x="80"
        y="32"
        textAnchor="middle"
        fill={patch}
        style={{
          fontFamily: "'Bungee', sans-serif",
          fontSize: 8,
          letterSpacing: '0.2em',
        }}
      >
        EST. 2026 · DENVER, CO
      </text>

      {/* main wordmark */}
      <text
        x="80"
        y="68"
        textAnchor="middle"
        fill={text}
        style={{
          fontFamily: "'Bungee', sans-serif",
          fontSize: 24,
          letterSpacing: '0.04em',
        }}
      >
        ZIP ZAP
      </text>

      {/* bolt + LLC line */}
      <g transform="translate(56 76)">
        <path
          d="M 16 0 L 8 12 L 14 12 L 10 22 L 20 8 L 14 8 Z"
          fill={bolt}
          stroke={outline}
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </g>
      <text
        x="92"
        y="92"
        textAnchor="middle"
        fill={text}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9,
          letterSpacing: '0.18em',
          opacity: 0.85,
        }}
      >
        LICENSED · INSURED · LLC
      </text>
    </svg>
  )
}
