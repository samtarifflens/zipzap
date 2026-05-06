import type { CSSProperties, ReactNode } from 'react'
import { colors, fonts } from '@/theme/tokens'

export interface BannerProps {
  // 'pennant' = single forked-tail right end, swooping flag
  // 'ribbon'  = banner ribbon with forked tails on both ends + folded back
  // 'arc'     = curved banner that bends across content
  variant?: 'pennant' | 'ribbon' | 'arc'
  bg?: string
  color?: string
  size?: number // height in px
  width?: number
  rotate?: number
  style?: CSSProperties
  children?: ReactNode
}

/**
 * Retro banner ribbons — the 1950s carnival/county-fair shape that
 * drapes across hero illustrations announcing "ELECTRIC!" or holding
 * the tagline. Forked-tail ends are the giveaway.
 */
export function Banner({
  variant = 'ribbon',
  bg = colors.r500,
  color = colors.cream,
  size = 56,
  width = 360,
  rotate = -3,
  style,
  children,
}: BannerProps) {
  const stroke = colors.ink
  const sw = 3

  if (variant === 'arc') {
    // Curved banner — uses an SVG path, text bends on path
    return (
      <div
        style={{
          width,
          height: size * 1.6,
          position: 'relative',
          transform: `rotate(${rotate}deg)`,
          ...style,
        }}
      >
        <svg
          width={width}
          height={size * 1.6}
          viewBox={`0 0 ${width} ${size * 1.6}`}
          style={{ display: 'block', overflow: 'visible' }}
          aria-hidden
        >
          <defs>
            <path
              id={`arc-${width}-${size}`}
              d={`M 8 ${size + 12} Q ${width / 2} ${-12} ${width - 8} ${size + 12}`}
            />
          </defs>
          <path
            d={`M 0 ${size + 14} Q ${width / 2} ${-10} ${width} ${size + 14} L ${width} ${size + 28} Q ${width / 2} 6 0 ${size + 28} Z`}
            fill={bg}
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <text
            fill={color}
            style={{
              fontFamily: fonts.slab,
              fontSize: size * 0.5,
              letterSpacing: '0.04em',
            }}
            textAnchor="middle"
          >
            <textPath href={`#arc-${width}-${size}`} startOffset="50%">
              {typeof children === 'string' ? children : ''}
            </textPath>
          </text>
        </svg>
      </div>
    )
  }

  if (variant === 'pennant') {
    return (
      <div
        style={{
          width,
          height: size,
          position: 'relative',
          transform: `rotate(${rotate}deg)`,
          ...style,
        }}
      >
        <svg
          width={width}
          height={size}
          viewBox={`0 0 ${width} ${size}`}
          style={{ display: 'block', overflow: 'visible' }}
          aria-hidden
        >
          {/* drop shadow */}
          <path
            d={`M 6 6 H ${width - size * 0.55 + 6} L ${width - 0 + 4} ${size / 2 + 6} L ${width - size * 0.55 + 6} ${size + 6} H 6 L ${size * 0.4 + 6} ${size / 2 + 6} Z`}
            fill={colors.ink}
            opacity="0.85"
          />
          <path
            d={`M 0 0 H ${width - size * 0.55} L ${width} ${size / 2} L ${width - size * 0.55} ${size} H 0 L ${size * 0.4} ${size / 2} Z`}
            fill={bg}
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="miter"
          />
        </svg>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            paddingLeft: size * 0.6,
            paddingRight: size * 0.7,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color,
            fontFamily: fonts.slab,
            fontSize: size * 0.42,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          {children}
        </div>
      </div>
    )
  }

  // ribbon — center band + two forked-tail ends folded back
  const tailW = size * 0.9
  const bandW = width - tailW * 2
  return (
    <div
      style={{
        width,
        height: size * 1.4,
        position: 'relative',
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    >
      <svg
        width={width}
        height={size * 1.4}
        viewBox={`0 0 ${width} ${size * 1.4}`}
        style={{ display: 'block', overflow: 'visible' }}
        aria-hidden
      >
        {/* left tail (folded-back) */}
        <path
          d={`M 0 ${size * 0.9} L ${tailW * 0.55} ${size * 0.55} L ${tailW * 0.55} ${size * 0.2} L ${tailW} ${size * 0.2} L ${tailW * 0.85} ${size * 0.55} L ${tailW} ${size * 0.9} Z`}
          fill={colors.ink}
          opacity="0.55"
        />
        {/* right tail */}
        <path
          d={`M ${width} ${size * 0.9} L ${width - tailW * 0.55} ${size * 0.55} L ${width - tailW * 0.55} ${size * 0.2} L ${width - tailW} ${size * 0.2} L ${width - tailW * 0.85} ${size * 0.55} L ${width - tailW} ${size * 0.9} Z`}
          fill={colors.ink}
          opacity="0.55"
        />
        {/* main band shadow */}
        <rect
          x={tailW + 4}
          y={size * 0.1 + 4}
          width={bandW}
          height={size}
          fill={colors.ink}
          opacity="0.8"
        />
        {/* main band */}
        <rect
          x={tailW}
          y={size * 0.1}
          width={bandW}
          height={size}
          fill={bg}
          stroke={stroke}
          strokeWidth={sw}
        />
        {/* ribbon notch (V) cut into each end of the main band */}
        <path
          d={`M ${tailW} ${size * 0.1} L ${tailW + size * 0.3} ${size * 0.6} L ${tailW} ${size * 1.1} Z`}
          fill={colors.cream}
          stroke={stroke}
          strokeWidth={sw}
          strokeLinejoin="miter"
        />
        <path
          d={`M ${width - tailW} ${size * 0.1} L ${width - tailW - size * 0.3} ${size * 0.6} L ${width - tailW} ${size * 1.1} Z`}
          fill={colors.cream}
          stroke={stroke}
          strokeWidth={sw}
          strokeLinejoin="miter"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          left: tailW + size * 0.4,
          right: tailW + size * 0.4,
          top: size * 0.1,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color,
          fontFamily: fonts.slab,
          fontSize: size * 0.42,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          lineHeight: 1,
        }}
      >
        {children}
      </div>
    </div>
  )
}
