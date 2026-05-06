import type { LogoMarkProps } from '@/logos/types'

/**
 * Live Wire — homage to Reddy Kilowatt and the postwar utility-company
 * mascot tradition. A walking, smiling figure with a lightbulb head,
 * a lightning-bolt torso, and two-prong-plug feet. Pure 1957.
 *
 * Best for: Atomic Mid-Century. The mascot that wears coveralls.
 */
export function LiveWire({ size, variant = 'default', style }: LogoMarkProps) {
  const body =
    variant === 'mono'
      ? '#0E1116'
      : variant === 'inverse'
        ? '#FFD23F'
        : 'url(#sunshineGrad)'
  const bulbFill = variant === 'mono' ? '#F8F1DD' : '#FFE872'
  const outline = variant === 'mono' ? '#0E1116' : '#0E1116'
  const detail = variant === 'mono' ? '#0E1116' : '#0E1116'
  const accent = variant === 'mono' ? '#0E1116' : '#C8281A'

  return (
    <svg width={size} height={size} viewBox="0 0 120 160" style={style} aria-hidden>
      {/* lightbulb head */}
      <g>
        {/* glass bulb */}
        <path
          d="M 60 8
             C 80 8 92 22 92 38
             C 92 50 84 56 80 62
             L 80 70
             L 40 70
             L 40 62
             C 36 56 28 50 28 38
             C 28 22 40 8 60 8
             Z"
          fill={bulbFill}
          stroke={outline}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* shine highlight */}
        <path
          d="M 44 22 Q 38 30 40 42"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
        />
        {/* screw base */}
        <rect
          x="40"
          y="70"
          width="40"
          height="6"
          fill={detail}
        />
        <rect
          x="42"
          y="76"
          width="36"
          height="4"
          fill={detail}
          opacity="0.7"
        />
        {/* eyes */}
        <circle cx="50" cy="34" r="3.4" fill={detail} />
        <circle cx="70" cy="34" r="3.4" fill={detail} />
        <circle cx="51" cy="33" r="1" fill="#FFFFFF" />
        <circle cx="71" cy="33" r="1" fill="#FFFFFF" />
        {/* cheeks */}
        <ellipse cx="44" cy="44" rx="4" ry="2.5" fill={accent} opacity="0.7" />
        <ellipse cx="76" cy="44" rx="4" ry="2.5" fill={accent} opacity="0.7" />
        {/* smile */}
        <path
          d="M 50 46 Q 60 56 70 46"
          fill="none"
          stroke={detail}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </g>

      {/* bolt-shaped torso */}
      <path
        d="M 40 80
           L 80 80
           L 64 108
           L 84 108
           L 50 144
           L 60 122
           L 38 122
           Z"
        fill={body}
        stroke={outline}
        strokeWidth="3.5"
        strokeLinejoin="miter"
      />

      {/* two-prong-plug feet */}
      <g transform="translate(0 144)">
        <rect
          x="42"
          y="0"
          width="6"
          height="14"
          rx="1.5"
          fill={detail}
        />
        <rect
          x="72"
          y="0"
          width="6"
          height="14"
          rx="1.5"
          fill={detail}
        />
      </g>
    </svg>
  )
}
