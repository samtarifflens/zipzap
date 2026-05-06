import type { CSSProperties, ReactNode } from 'react'
import { colors } from '@/theme/tokens'

export interface RetroFrameProps {
  bg?: string
  // 'double' = double-line outline (parallel rules, midcentury menu cards)
  // 'rounded' = chunky rounded card with a 6-8px offset shadow
  // 'screen'  = TV-screen rounded rectangle (wide aspect, 3:2 ish)
  variant?: 'double' | 'rounded' | 'screen'
  pinstripe?: boolean
  shadow?: boolean
  shadowColor?: string
  style?: CSSProperties
  children?: ReactNode
}

/**
 * Retro frame primitives — the rounded TV-screen rectangles, double-rule
 * menu-card outlines, and pinstriped panels that anchor postwar layouts.
 */
export function RetroFrame({
  bg = colors.cream,
  variant = 'double',
  pinstripe = false,
  shadow = true,
  shadowColor = colors.ink,
  style,
  children,
}: RetroFrameProps) {
  const base: CSSProperties = {
    background: bg,
    border: `3px solid ${colors.ink}`,
    position: 'relative',
    boxShadow: shadow ? `7px 7px 0 0 ${shadowColor}` : undefined,
  }

  if (variant === 'rounded') {
    return (
      <div
        style={{
          ...base,
          borderRadius: 16,
          padding: 32,
          ...style,
        }}
      >
        {pinstripe && <Pinstripe radius={12} />}
        {children}
      </div>
    )
  }

  if (variant === 'screen') {
    return (
      <div
        style={{
          ...base,
          borderRadius: '40px / 28px',
          padding: 32,
          ...style,
        }}
      >
        {pinstripe && <Pinstripe radius={36} />}
        {children}
      </div>
    )
  }

  // double-line outline
  return (
    <div
      style={{
        ...base,
        borderRadius: 6,
        padding: 32,
        outline: `2px solid ${colors.ink}`,
        outlineOffset: 6,
        ...style,
      }}
    >
      {pinstripe && <Pinstripe radius={4} />}
      {children}
    </div>
  )
}

function Pinstripe({ radius = 8 }: { radius?: number }) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 8,
        border: `1px solid ${colors.ink}`,
        borderRadius: radius,
        pointerEvents: 'none',
        opacity: 0.5,
      }}
    />
  )
}
