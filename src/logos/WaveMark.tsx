import type { LogoMarkProps } from '@/logos/types'

/**
 * Wave Mark — a single bold geometric stroke that reads simultaneously
 * as a lightning bolt and as a sine-wave (an electrical signal).
 * Drawn as a fat path, no face, no badge — pure shape.
 *
 * Best for: Modern Trade-Tech, Quiet Pro. The mark on the app icon.
 */
export function WaveMark({ size, variant = 'default', style }: LogoMarkProps) {
  const fill =
    variant === 'mono'
      ? '#0E1116'
      : variant === 'inverse'
        ? '#FFD23F'
        : 'url(#voltGrad)'
  const stroke = variant === 'inverse' ? '#FFD23F' : '#0E1116'

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={style} aria-hidden>
      {/* outer ring — keeps the mark legible at favicon scale */}
      <circle
        cx="60"
        cy="60"
        r="54"
        fill={variant === 'inverse' ? '#0E1116' : variant === 'mono' ? 'none' : '#0E1116'}
        stroke={stroke}
        strokeWidth={variant === 'mono' ? 4 : 0}
      />
      {/* the wave-bolt: a sine that sharpens into a zig at the bend */}
      <path
        d="M 18 60
           C 18 60 28 30 38 30
           C 48 30 50 56 60 56
           L 78 56
           L 56 90
           L 64 70
           L 50 70
           C 40 70 38 60 30 60
           Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="3"
        strokeLinejoin="miter"
      />
      {/* trailing dot — the signal pulse */}
      <circle
        cx="92"
        cy="60"
        r="6"
        fill={fill}
        stroke={stroke}
        strokeWidth="3"
      />
    </svg>
  )
}
