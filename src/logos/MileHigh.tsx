import type { LogoMarkProps } from '@/logos/types'

/**
 * Mile-High — three Rocky Mountain peaks with a lightning bolt
 * cutting through the sky behind them. The Denver provenance, drawn.
 */
export function MileHigh({ size, variant = 'default', style }: LogoMarkProps) {
  const sky =
    variant === 'mono'
      ? 'transparent'
      : variant === 'inverse'
        ? 'transparent'
        : 'url(#mileHighGrad)'
  const bolt =
    variant === 'mono'
      ? '#0E1116'
      : variant === 'inverse'
        ? '#FFD23F'
        : '#FFD23F'
  const peak = variant === 'mono' ? '#0E1116' : '#1F3A93'
  const snow = variant === 'mono' ? '#F8F1DD' : '#F8F1DD'
  const outline = variant === 'mono' ? '#0E1116' : '#0E1116'

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={style} aria-hidden>
      {/* sky disc */}
      <circle
        cx="60"
        cy="60"
        r="56"
        fill={sky}
        stroke={outline}
        strokeWidth="3"
      />
      {/* lightning bolt behind peaks */}
      <path
        d="M 68 18 L 40 60 L 56 60 L 48 88 L 78 50 L 62 50 Z"
        fill={bolt}
        stroke={outline}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* mountain peaks (foreground) */}
      <path
        d="M 4 96
           L 30 56
           L 46 78
           L 60 44
           L 78 78
           L 92 60
           L 116 96
           Z"
        fill={peak}
        stroke={outline}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* snow caps */}
      <path
        d="M 25 64 L 30 56 L 36 64 L 32 66 L 30 64 L 28 66 Z"
        fill={snow}
      />
      <path
        d="M 54 52 L 60 44 L 66 52 L 62 54 L 60 52 L 58 54 Z"
        fill={snow}
      />
      <path
        d="M 86 68 L 92 60 L 98 68 L 94 70 L 92 68 L 90 70 Z"
        fill={snow}
      />
      {/* ground line */}
      <line
        x1="6"
        y1="96"
        x2="114"
        y2="96"
        stroke={outline}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}
