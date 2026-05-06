import type { CSSProperties } from 'react'

export interface HalftoneOverlayProps {
  opacity?: number
  zIndex?: number
}

/**
 * Retro printed-poster halftone overlay. Tiles a 12px dot pattern at
 * low opacity over hero surfaces. Pair with GrainOverlay for warmth.
 */
export function HalftoneOverlay({
  opacity = 0.5,
  zIndex = 0,
}: HalftoneOverlayProps) {
  const style: CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'var(--halftone)',
    opacity,
    pointerEvents: 'none',
    zIndex,
    mixBlendMode: 'multiply',
  }
  return <div aria-hidden style={style} />
}

export function GrainOverlay({ opacity = 0.4, zIndex = 0 }: HalftoneOverlayProps) {
  const style: CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'var(--grain)',
    opacity,
    pointerEvents: 'none',
    zIndex,
    mixBlendMode: 'multiply',
  }
  return <div aria-hidden style={style} />
}
