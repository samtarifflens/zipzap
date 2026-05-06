import type { LogoMarkProps } from '@/logos/types'

/**
 * Bolt Badge — circular service-station style badge.
 *
 * Navy outer ring with "ZIP ZAP · DENVER, CO ·" curving around the
 * perimeter, sunshine-yellow disc in the center holding a chunky
 * lightning bolt. Reads as a 1950s service patch.
 */
export function BoltBadge({ size, variant = 'default', style }: LogoMarkProps) {
  const ring = variant === 'inverse' ? '#F8F1DD' : '#1F3A93'
  const ringText = variant === 'inverse' ? '#0E1116' : '#F8F1DD'
  const disc =
    variant === 'mono'
      ? '#F8F1DD'
      : variant === 'inverse'
        ? '#FFD23F'
        : 'url(#sunshineGrad)'
  const bolt = variant === 'mono' ? '#0E1116' : '#0E1116'
  const stroke = variant === 'mono' ? '#0E1116' : '#1F3A93'

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={style} aria-hidden>
      {/* outer ring */}
      <circle cx="60" cy="60" r="58" fill={ring} />
      <circle cx="60" cy="60" r="50" fill={disc} stroke={stroke} strokeWidth="2" />

      {/* perimeter text */}
      <defs>
        <path id="bb-arc" d="M 60 60 m -54 0 a 54 54 0 1 1 108 0 a 54 54 0 1 1 -108 0" />
      </defs>
      <text
        fill={ringText}
        style={{
          fontFamily: "'Bungee', sans-serif",
          fontSize: 9,
          letterSpacing: '0.18em',
        }}
      >
        <textPath href="#bb-arc" startOffset="2%">
          ZIP ZAP · DENVER, CO · ZIP ZAP · DENVER, CO ·
        </textPath>
      </text>

      {/* lightning bolt */}
      <path
        d="M 70 22 L 38 64 L 56 64 L 48 96 L 84 54 L 64 54 Z"
        fill={bolt}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
