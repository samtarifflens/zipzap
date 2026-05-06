import type { CSSProperties } from 'react'
import { Sparky } from '@/logos/Sparky'
import { SunRays } from '@/components/retro/decade'
import { SunsetStripes, WoodFrame } from '@/components/retro/iconic'

// 1976 palette — earthy with the three "tells" added: Russet, Pumpkin,
// Brick Red. Per research these push from generic-70s into Atari/Apple
// 1977 territory.
const C = {
  cream: '#F1E6C8',
  paper: '#FFFFFF',
  avocado: '#568203',
  harvestGold: '#D4A017',
  burntOrange: '#B7410E',
  cocoa: '#5C3A21',
  russet: '#8B4513',
  pumpkin: '#E07A1F',
  brickRed: '#9B2D1F',
}

export function SeventiesDirection() {
  const wrap: CSSProperties = {
    background: C.cream,
    padding: '88px 0 96px',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: `4px solid ${C.cocoa}`,
    backgroundImage: `repeating-linear-gradient(0deg, ${C.russet}11 0px, ${C.russet}11 1px, transparent 1px, transparent 8px)`,
  }

  return (
    <section style={wrap}>
      {/* corner sun rays */}
      <SunRays
        size={700}
        rays={20}
        color={C.harvestGold}
        style={{
          position: 'absolute',
          top: -260,
          right: -260,
          opacity: 0.45,
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 48px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontFamily: "'Bowlby One', sans-serif",
              fontSize: 14,
              letterSpacing: '0.18em',
              color: C.cream,
              textTransform: 'uppercase',
              padding: '8px 16px',
              border: `3px solid ${C.cocoa}`,
              background: C.brickRed,
              boxShadow: `4px 4px 0 0 ${C.cocoa}`,
            }}
          >
            ★ Direction 03 · Anno 1976 ★
          </div>
          <div
            style={{
              fontFamily: "'Bowlby One', sans-serif",
              fontSize: 12,
              letterSpacing: '0.16em',
              color: C.cocoa,
              textTransform: 'uppercase',
            }}
          >
            Right on, mile-high.
          </div>
        </div>

        {/* Wood-grain russet badge containing the wordmark stacked over a
            descending sunset stripe stack — the Atari/Apple 1977 vocabulary */}
        <WoodFrame width="100%" height={420} bg={C.cream} border={C.cocoa} grain={C.russet} radius={32}>
          {/* descending sunset stripes inside the badge */}
          <div
            style={{
              position: 'absolute',
              inset: 22,
              borderRadius: 18,
              overflow: 'hidden',
              border: `2px solid ${C.cocoa}`,
            }}
          >
            <SunsetStripes
              height={420}
              bands={[C.brickRed, C.burntOrange, C.pumpkin, C.harvestGold, C.cream]}
            />
            {/* lightning bolt cutting diagonally through the stripes */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1000 360"
              preserveAspectRatio="xMidYMid meet"
              style={{ position: 'absolute', inset: 0 }}
              aria-hidden
            >
              <path
                d="M 740 30 L 460 200 L 580 200 L 480 350 L 760 180 L 640 180 Z"
                fill={C.harvestGold}
                stroke={C.cocoa}
                strokeWidth="6"
                strokeLinejoin="miter"
              />
            </svg>
            {/* wordmark in Bowlby One — single hard cocoa-brown shadow + cream keyline */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '0 56px',
              }}
            >
              <div
                style={{
                  fontFamily: "'Bowlby One', sans-serif",
                  fontSize: 168,
                  lineHeight: 0.9,
                  color: C.cream,
                  letterSpacing: '-0.04em',
                  textTransform: 'uppercase',
                  // single hard offset (Pizza Hut / KFC move) + thin keyline
                  WebkitTextStroke: `4px ${C.cocoa}`,
                  textShadow: `7px 7px 0 ${C.cocoa}`,
                }}
              >
                ZIP ZAP
              </div>
              <div
                style={{
                  fontFamily: "'Bowlby One', sans-serif",
                  fontSize: 26,
                  color: C.cocoa,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginTop: 8,
                  background: C.cream,
                  padding: '4px 12px',
                  border: `3px solid ${C.cocoa}`,
                }}
              >
                Get down with Zip Zap.
              </div>
            </div>
          </div>
        </WoodFrame>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: 48,
            alignItems: 'center',
            marginTop: 56,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 17,
                lineHeight: 1.55,
                color: C.cocoa,
                maxWidth: 540,
                fontWeight: 500,
                marginBottom: 24,
              }}
            >
              Atari Fuji, 1977 Apple rainbow stripe, Hipgnosis album covers,
              the original NBC peacock. Bowlby One letterforms with a single
              hard cocoa-brown shadow, a descending hard-edged sunset stripe
              stack behind the wordmark, and a wood-grain russet keyline
              frame on every layout. The 1976 Sears catalog stack.
            </p>

            {/* badge row — Atari 1972 inspired pill-shapes */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                ['Free!', C.brickRed, C.cream],
                ['Bonded!', C.avocado, C.cream],
                ['Foxy!', C.harvestGold, C.cocoa],
              ].map(([label, bg, fg], i) => (
                <div
                  key={label}
                  style={{
                    background: bg,
                    color: fg,
                    padding: '10px 22px',
                    fontFamily: "'Bowlby One', sans-serif",
                    fontSize: 16,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    border: `3px solid ${C.cocoa}`,
                    borderRadius: 999,
                    boxShadow: `4px 4px 0 0 ${C.cocoa}`,
                    transform: `rotate(${i === 0 ? -2 : i === 1 ? 1 : -1}deg)`,
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* mascot in a fat sun */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <SunRays size={420} rays={16} color={C.harvestGold} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: '50%',
                background: C.harvestGold,
                border: `5px solid ${C.cocoa}`,
                boxShadow: `8px 8px 0 0 ${C.brickRed}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <Sparky size={200} />
            </div>
          </div>
        </div>

        {/* palette + type */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 24,
            borderTop: `3px solid ${C.cocoa}`,
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 32,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Bowlby One', sans-serif",
                fontSize: 14,
                letterSpacing: '0.16em',
                color: C.cocoa,
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              ☼ Palette · earthy + russet tells
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                [C.brickRed, 'Brick Red', C.cream],
                [C.burntOrange, 'Burnt Orange', C.cream],
                [C.pumpkin, 'Pumpkin', C.cocoa],
                [C.harvestGold, 'Harvest Gold', C.cocoa],
                [C.avocado, 'Avocado', C.cream],
                [C.russet, 'Russet', C.cream],
                [C.cocoa, 'Cocoa', C.cream],
              ].map(([bg, name, fg]) => (
                <div
                  key={name}
                  style={{
                    flex: 1,
                    background: bg,
                    border: `3px solid ${C.cocoa}`,
                    padding: '14px 10px',
                    fontFamily: "'Bowlby One', sans-serif",
                    fontSize: 10,
                    color: fg,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    minHeight: 80,
                    boxShadow: `3px 3px 0 0 ${C.cocoa}`,
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Bowlby One', sans-serif",
                fontSize: 14,
                letterSpacing: '0.16em',
                color: C.cocoa,
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              ☼ Type · Bowlby One
            </div>
            <div
              style={{
                background: C.paper,
                border: `3px solid ${C.cocoa}`,
                padding: 18,
                boxShadow: `4px 4px 0 0 ${C.cocoa}`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Bowlby One', sans-serif",
                  fontSize: 32,
                  color: C.burntOrange,
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                  WebkitTextStroke: `2px ${C.cocoa}`,
                  textShadow: `4px 4px 0 ${C.cocoa}`,
                  letterSpacing: '-0.02em',
                }}
              >
                ZIP ZAP
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  color: C.cocoa,
                  marginTop: 8,
                  lineHeight: 1.5,
                }}
              >
                Family-owned & operated. Mile-high since 1976.
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 28,
            padding: '18px 24px',
            background: C.cocoa,
            color: C.harvestGold,
            border: `3px solid ${C.cocoa}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: "'Bowlby One', sans-serif",
            fontSize: 12,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            boxShadow: `4px 4px 0 0 ${C.brickRed}`,
            position: 'relative',
            zIndex: 3,
          }}
        >
          <span>Best logos for this direction</span>
          <span style={{ color: C.harvestGold }}>
            Sparky · The Crest
          </span>
        </div>
      </div>
    </section>
  )
}
