import type { CSSProperties } from 'react'
import { FlyingEyeball, HardRays, ScrollBorder } from '@/components/retro/iconic'

// 1968 palette — vibrating complementary clash, no neutrals.
// Per research: drop the smooth gradient bg, no greys, full saturation.
const C = {
  pink: '#E91E63',
  lime: '#A8E62E',
  magenta: '#D1006C',
  cyan: '#00B6D4',
  marigold: '#F5C518',
  purple: '#5B2D90',
  orange: '#FF5A1F',
  cobalt: '#0033A0',
  inkBlack: '#0E0A1A',
  cream: '#F4E9C8',
}

export function SixtiesDirection() {
  const wrap: CSSProperties = {
    background: C.pink,        // hard ground, NOT a gradient
    padding: 0,
    position: 'relative',
    overflow: 'hidden',
    borderBottom: `4px solid ${C.inkBlack}`,
  }

  return (
    <section style={wrap}>
      {/* Top scrollwork border */}
      <ScrollBorder height={48} color={C.marigold} bg={C.inkBlack} />

      <div
        style={{
          position: 'relative',
          padding: '64px 0 88px',
          // hard-edged radiating wedges from center
          background: C.pink,
        }}
      >
        {/* radiating sun rays in clashing complement (lime on pink) */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.95,
            zIndex: 0,
          }}
        >
          <HardRays size={1400} rays={28} colorA={C.pink} colorB={C.lime} />
        </div>

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
              display: 'inline-block',
              fontFamily: "'Shrikhand', serif",
              fontSize: 22,
              color: C.cream,
              background: C.inkBlack,
              padding: '6px 18px',
              border: `4px solid ${C.marigold}`,
              transform: 'rotate(-2deg)',
              marginBottom: 28,
              letterSpacing: '0.04em',
            }}
          >
            ◐ Direction 02 · Anno 1968 ◑
          </div>

          {/* Bagel Fat One wordmark — letters stretched to touch every edge,
              fills its container; no rainbow stack, just a flat magenta-on-
              lime vibrating clash. */}
          <div
            style={{
              fontFamily: "'Bagel Fat One', sans-serif",
              fontSize: 240,
              lineHeight: 0.78,
              color: C.marigold,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              margin: '0 0 -12px',
              WebkitTextStroke: `4px ${C.inkBlack}`,
              textShadow: `8px 8px 0 ${C.purple}`,
              transform: 'scaleY(1.18)',
              transformOrigin: 'left top',
            }}
          >
            ZIP
          </div>
          <div
            style={{
              fontFamily: "'Bagel Fat One', sans-serif",
              fontSize: 240,
              lineHeight: 0.78,
              color: C.cyan,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              margin: '0 0 12px',
              WebkitTextStroke: `4px ${C.inkBlack}`,
              textShadow: `8px 8px 0 ${C.magenta}`,
              transform: 'scaleY(1.18) translateX(40px)',
              transformOrigin: 'left top',
            }}
          >
            ZAP
          </div>

          <div
            style={{
              display: 'inline-block',
              fontFamily: "'Shrikhand', serif",
              fontSize: 56,
              color: C.cream,
              background: C.inkBlack,
              padding: '8px 22px',
              transform: 'rotate(-3deg)',
              marginTop: 24,
              marginBottom: 24,
              border: `4px solid ${C.marigold}`,
              boxShadow: `8px 8px 0 0 ${C.purple}`,
              letterSpacing: '0.02em',
            }}
          >
            Far out wires, baby.
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr',
              gap: 48,
              alignItems: 'center',
              marginTop: 40,
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 19,
                lineHeight: 1.55,
                color: C.cream,
                fontWeight: 600,
                maxWidth: 540,
                background: C.inkBlack,
                padding: 18,
                border: `3px solid ${C.marigold}`,
              }}
            >
              Wes Wilson Fillmore poster, Rick Griffin flying eyeball,
              Heinz Edelmann Yellow Submarine. Letters as the artwork.
              Vibrating complementary clash — magenta-on-cyan, lime-on-
              pink, no neutrals, no negative space. Daisies are tourist
              stuff. The eyeball pierced by a lightning bolt is the move.
            </p>

            {/* Flying eyeball mascot */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <FlyingEyeball
                size={300}
                iris={C.lime}
                white={C.cream}
                outline={C.inkBlack}
                bolt={C.marigold}
                bloodshot={C.magenta}
              />
            </div>
          </div>

          {/* palette + type */}
          <div
            style={{
              marginTop: 56,
              paddingTop: 24,
              borderTop: `3px dashed ${C.cream}`,
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: 32,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Shrikhand', serif",
                  fontSize: 22,
                  color: C.marigold,
                  marginBottom: 14,
                  display: 'inline-block',
                  background: C.inkBlack,
                  padding: '4px 14px',
                  border: `3px solid ${C.marigold}`,
                  transform: 'rotate(-1deg)',
                }}
              >
                ◐ vibrating palette
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {[
                  [C.pink, 'Hot Pink', C.lime],
                  [C.lime, 'Acid Lime', C.magenta],
                  [C.magenta, 'Magenta', C.cyan],
                  [C.cyan, 'Cyan', C.magenta],
                  [C.marigold, 'Marigold', C.purple],
                  [C.purple, 'Royal Purple', C.marigold],
                ].map(([bg, name, fg]) => (
                  <div
                    key={name}
                    style={{
                      flex: 1,
                      background: bg,
                      border: `3px solid ${C.inkBlack}`,
                      padding: '14px 10px',
                      fontFamily: "'Bagel Fat One', sans-serif",
                      fontSize: 11,
                      color: fg,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      minHeight: 80,
                      boxShadow: `4px 4px 0 0 ${C.inkBlack}`,
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
                  fontFamily: "'Shrikhand', serif",
                  fontSize: 22,
                  color: C.marigold,
                  marginBottom: 14,
                  display: 'inline-block',
                  background: C.inkBlack,
                  padding: '4px 14px',
                  border: `3px solid ${C.marigold}`,
                  transform: 'rotate(1deg)',
                }}
              >
                ◑ type
              </div>
              <div
                style={{
                  background: C.lime,
                  border: `3px solid ${C.inkBlack}`,
                  padding: 18,
                  boxShadow: `4px 4px 0 0 ${C.inkBlack}`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bagel Fat One', sans-serif",
                    fontSize: 32,
                    color: C.magenta,
                    textTransform: 'uppercase',
                    lineHeight: 0.85,
                    WebkitTextStroke: `2.5px ${C.inkBlack}`,
                    textShadow: `3px 3px 0 ${C.purple}`,
                  }}
                >
                  ZIP ZAP
                </div>
                <div
                  style={{
                    fontFamily: "'Shrikhand', serif",
                    fontSize: 22,
                    color: C.inkBlack,
                    marginTop: 8,
                    lineHeight: 0.95,
                  }}
                >
                  Tune in, plug in.
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 32,
              padding: '18px 24px',
              background: C.inkBlack,
              color: C.marigold,
              border: `3px solid ${C.marigold}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontFamily: "'Bagel Fat One', sans-serif",
              fontSize: 12,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            <span>Best logos · </span>
            <span style={{ color: C.cyan }}>
              Sparky · Live Wire
            </span>
          </div>
        </div>
      </div>

      {/* bottom scrollwork border */}
      <ScrollBorder height={48} color={C.marigold} bg={C.inkBlack} />
    </section>
  )
}
