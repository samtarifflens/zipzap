import type { LogoMarkProps } from '@/logos/types'

/**
 * Kilowatt Crest — heraldic shield-style badge. Crossed tools
 * (screwdriver + lineman's pliers) behind a vertical lightning bolt,
 * Rocky peaks across the bottom, "EST. 2026 · DENVER" banner.
 *
 * Best for: Mountain Heritage, Quiet Pro. Trade-craftsman authority.
 */
export function KilowattCrest({ size, variant = 'default', style }: LogoMarkProps) {
  const shield =
    variant === 'mono'
      ? '#F8F1DD'
      : variant === 'inverse'
        ? '#FFD23F'
        : '#11225C'
  const outline = variant === 'mono' ? '#0E1116' : '#0E1116'
  const accent = variant === 'mono' ? '#0E1116' : '#FFD23F'
  const peaks = variant === 'mono' ? '#0E1116' : '#5E8E83'
  const snow = variant === 'mono' ? '#F8F1DD' : '#F8F1DD'
  const banner = variant === 'mono' ? '#0E1116' : '#C8281A'
  const bannerText = variant === 'mono' ? '#F8F1DD' : '#F8F1DD'

  return (
    <svg width={size} height={size} viewBox="0 0 140 160" style={style} aria-hidden>
      {/* crossed tools — drawn first so they sit behind the shield */}
      <g transform="translate(70 80) rotate(-30)" stroke={outline} strokeWidth="2">
        {/* screwdriver shaft + handle */}
        <rect x="-58" y="-6" width="48" height="6" fill="#9AA3B2" />
        <rect x="-78" y="-9" width="22" height="12" rx="3" fill={accent} />
      </g>
      <g transform="translate(70 80) rotate(30)" stroke={outline} strokeWidth="2">
        {/* pliers handle + jaws */}
        <rect x="-58" y="-6" width="38" height="6" fill="#9AA3B2" />
        <rect x="-78" y="-9" width="22" height="12" rx="3" fill={accent} />
        <path d="M -20 -6 L -10 -10 L -10 0 L -20 0 Z" fill="#9AA3B2" />
        <path d="M -20 6 L -10 10 L -10 0 L -20 0 Z" fill="#9AA3B2" />
      </g>

      {/* shield body — heater/escutcheon shape */}
      <path
        d="M 18 18
           L 122 18
           L 122 86
           C 122 116 100 138 70 148
           C 40 138 18 116 18 86
           Z"
        fill={shield}
        stroke={outline}
        strokeWidth="3.5"
        strokeLinejoin="miter"
      />
      {/* inner pinstripe */}
      <path
        d="M 24 24
           L 116 24
           L 116 86
           C 116 112 96 132 70 141
           C 44 132 24 112 24 86
           Z"
        fill="none"
        stroke={accent}
        strokeWidth="1.6"
      />

      {/* mountain peaks at the base of the shield */}
      <g>
        <path
          d="M 28 110
             L 50 80
             L 64 100
             L 78 70
             L 96 100
             L 112 88
             L 116 92
             L 116 122
             C 116 130 104 138 70 146
             C 36 138 24 130 24 122
             L 24 92
             Z"
          fill={peaks}
          stroke={outline}
          strokeWidth="2.5"
          strokeLinejoin="miter"
        />
        <path d="M 46 90 L 50 80 L 54 90 L 50 92 Z" fill={snow} />
        <path d="M 74 80 L 78 70 L 82 80 L 78 82 Z" fill={snow} />
        <path d="M 92 96 L 96 100 L 92 102 Z" fill={snow} />
      </g>

      {/* central lightning bolt — runs through the shield */}
      <path
        d="M 78 30
           L 56 72
           L 70 72
           L 60 110
           L 86 64
           L 72 64
           Z"
        fill={accent}
        stroke={outline}
        strokeWidth="2.6"
        strokeLinejoin="miter"
      />

      {/* banner ribbon across the base */}
      <g transform="translate(0 124)">
        {/* ribbon shadow */}
        <path
          d="M 6 4 L 22 14 L 22 6 L 118 6 L 118 14 L 134 4 L 130 24 L 118 18 L 22 18 L 10 24 Z"
          fill={outline}
          opacity="0.4"
        />
        {/* ribbon */}
        <path
          d="M 4 2 L 20 12 L 20 4 L 116 4 L 116 12 L 132 2 L 128 22 L 116 16 L 20 16 L 8 22 Z"
          fill={banner}
          stroke={outline}
          strokeWidth="2"
          strokeLinejoin="miter"
        />
        <text
          x="70"
          y="14"
          textAnchor="middle"
          fill={bannerText}
          style={{
            fontFamily: "'Alfa Slab One', serif",
            fontSize: 10,
            letterSpacing: '0.12em',
          }}
        >
          EST. 2026 · DENVER
        </text>
      </g>
    </svg>
  )
}
