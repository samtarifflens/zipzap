import type { LogoMarkProps } from '@/logos/types'

/**
 * Sparky — the Zip Zap mascot. A friendly cartoon lightning bolt
 * with eyes and a smile. Lives on truck doors, apparel, and yard signs.
 */
export function Sparky({ size, variant = 'default', style }: LogoMarkProps) {
  const body =
    variant === 'mono'
      ? '#0E1116'
      : variant === 'inverse'
        ? '#FFD23F'
        : 'url(#sunshineGrad)'
  const outline = variant === 'mono' ? '#0E1116' : '#0E1116'
  const featureFill = variant === 'mono' ? '#F8F1DD' : '#0E1116'
  const cheek = variant === 'mono' ? 'transparent' : '#E2602D'

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={style} aria-hidden>
      {/* bolt body */}
      <path
        d="M 74 8
           C 76 8 78 10 77 13
           L 64 44
           L 86 44
           C 90 44 92 48 89 52
           L 50 110
           C 47 114 41 112 42 107
           L 50 78
           L 32 78
           C 28 78 26 74 29 70
           L 66 12
           C 68 9 71 8 74 8
           Z"
        fill={body}
        stroke={outline}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* cheeks (blush) */}
      <ellipse cx="50" cy="58" rx="5" ry="3" fill={cheek} opacity="0.85" />
      <ellipse cx="72" cy="48" rx="5" ry="3" fill={cheek} opacity="0.85" />
      {/* eyes */}
      <circle cx="55" cy="48" r="3.2" fill={featureFill} />
      <circle cx="74" cy="38" r="3.2" fill={featureFill} />
      <circle cx="56" cy="47" r="1" fill="#F8F1DD" />
      <circle cx="75" cy="37" r="1" fill="#F8F1DD" />
      {/* smile */}
      <path
        d="M 54 60 Q 62 68 70 56"
        fill="none"
        stroke={featureFill}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
