import type { LogoMarkProps } from '@/logos/types'

/**
 * Z-Z Monogram — two chunky Z's that interlock into a single zig-zag
 * shape that reads as a lightning bolt. The negative space is the
 * star of the show.
 */
export function ZZMonogram({ size, variant = 'default', style }: LogoMarkProps) {
  const fill =
    variant === 'mono'
      ? '#0E1116'
      : variant === 'inverse'
        ? '#FFD23F'
        : 'url(#voltGrad)'
  const stroke = variant === 'mono' ? '#0E1116' : '#0E1116'

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={style} aria-hidden>
      {/* combined Z-Z + bolt: the outline of two stacked Z's whose middle
          stems shear into a lightning slash */}
      <path
        d="M 18 18
           L 102 18
           L 102 36
           L 64 36
           L 92 60
           L 102 60
           L 102 78
           L 18 78
           L 18 60
           L 56 60
           L 28 36
           L 18 36
           Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* bottom Z mirrored to anchor the stack */}
      <path
        d="M 18 84
           L 102 84
           L 102 96
           L 56 96
           L 102 102
           L 18 102
           L 18 96
           L 64 96
           L 18 90
           Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="3"
        strokeLinejoin="round"
        opacity="0"
      />
    </svg>
  )
}
