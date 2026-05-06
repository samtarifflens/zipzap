import type { LogoMarkProps } from '@/logos/types'

/**
 * Plug Face — a wall-outlet that reads as a face. Two prong-slots are
 * the eyes, the round ground hole is a smiling open mouth. Whimsical,
 * memorable, wildly on-brand.
 */
export function PlugFace({ size, variant = 'default', style }: LogoMarkProps) {
  const face =
    variant === 'mono'
      ? '#F8F1DD'
      : variant === 'inverse'
        ? '#FFD23F'
        : '#FFD23F'
  const outline = variant === 'mono' ? '#0E1116' : '#0E1116'
  const slot = variant === 'mono' ? '#0E1116' : '#0E1116'
  const ringStroke = variant === 'mono' ? '#0E1116' : '#1F3A93'

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={style} aria-hidden>
      {/* outlet plate */}
      <rect
        x="14"
        y="14"
        width="92"
        height="92"
        rx="22"
        fill={face}
        stroke={outline}
        strokeWidth="3.5"
      />
      {/* inner border ring */}
      <rect
        x="22"
        y="22"
        width="76"
        height="76"
        rx="16"
        fill="none"
        stroke={ringStroke}
        strokeWidth="2"
        strokeDasharray="3 4"
        opacity="0.6"
      />
      {/* left eye-slot */}
      <rect x="40" y="40" width="6" height="22" rx="2" fill={slot} />
      {/* right eye-slot */}
      <rect x="74" y="40" width="6" height="22" rx="2" fill={slot} />
      {/* ground-pin smile */}
      <path
        d="M 48 76 Q 60 90 72 76"
        fill="none"
        stroke={slot}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* tiny center screw */}
      <circle cx="60" cy="32" r="2" fill={slot} opacity="0.5" />
      <circle cx="60" cy="92" r="2" fill={slot} opacity="0.5" />
    </svg>
  )
}
