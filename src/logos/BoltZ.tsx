import type { LogoMarkProps } from '@/logos/types'

/**
 * Bolt-Z — a single chunky uppercase Z whose diagonal stroke is drawn
 * as a lightning bolt. Reads as the letter Z and the electrical
 * symbol simultaneously. The shape that says "modern, confident,
 * one mark for one company."
 *
 * Best for: Modern Trade-Tech, Quiet Pro. Scales to favicon.
 */
export function BoltZ({ size, variant = 'default', style }: LogoMarkProps) {
  const fill =
    variant === 'mono'
      ? '#0E1116'
      : variant === 'inverse'
        ? '#FFD23F'
        : 'url(#voltGrad)'
  const stroke = variant === 'inverse' ? '#FFD23F' : '#0E1116'

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={style} aria-hidden>
      <path
        d="M 14 10
           L 106 10
           L 106 32
           L 70 32
           L 86 56
           L 106 56
           L 56 110
           L 56 84
           L 36 84
           L 50 60
           L 14 60
           L 14 38
           L 64 38
           L 50 14
           Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="3.5"
        strokeLinejoin="miter"
      />
    </svg>
  )
}
