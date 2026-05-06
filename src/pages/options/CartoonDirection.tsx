import type { CSSProperties } from 'react'
import { Sparky } from '@/logos/Sparky'
import { Starburst, Sparkle } from '@/components/retro/Starburst'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'

export function CartoonDirection() {
  const wrap: CSSProperties = {
    background: '#FFD600',
    padding: '88px 0 96px',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '4px solid #0E1116',
  }
  const inner: CSSProperties = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 48px',
    position: 'relative',
    zIndex: 1,
  }
  return (
    <section style={wrap}>
      <HalftoneOverlay opacity={0.55} />

      {/* corner sparkles */}
      <div style={{ position: 'absolute', top: 60, right: 80, zIndex: 0 }}>
        <Sparkle size={56} fill="#FEFCF7" stroke="#0E1116" strokeWidth={3} />
      </div>
      <div style={{ position: 'absolute', bottom: 80, left: 60, zIndex: 0 }}>
        <Sparkle size={40} fill="#5AA9E6" stroke="#0E1116" strokeWidth={3} />
      </div>
      <div style={{ position: 'absolute', top: '40%', left: '52%', zIndex: 0 }}>
        <Sparkle size={28} fill="#FEFCF7" stroke="#0E1116" strokeWidth={2.5} />
      </div>

      <div style={inner}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Bungee', sans-serif",
                fontSize: 12,
                letterSpacing: '0.18em',
                color: '#E63946',
                textTransform: 'uppercase',
                marginBottom: 16,
                background: '#FEFCF7',
                display: 'inline-block',
                padding: '6px 12px',
                border: '3px solid #0E1116',
                boxShadow: '4px 4px 0 0 #0E1116',
              }}
            >
              Direction 04 · Cartoon
            </div>
            <div
              style={{
                fontFamily: "'Bungee', sans-serif",
                fontSize: 110,
                lineHeight: 0.85,
                color: '#0E1116',
                letterSpacing: '0.01em',
                textTransform: 'uppercase',
                textShadow:
                  '6px 6px 0 #E63946, 12px 12px 0 #FEFCF7, 18px 18px 0 #0E1116',
                marginBottom: 24,
              }}
            >
              ZIP ZAP
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 17,
                lineHeight: 1.55,
                color: '#0E1116',
                maxWidth: 480,
                fontWeight: 500,
                marginBottom: 24,
              }}
            >
              A 1960s Saturday-morning cartoon as a service business. Sparky
              stars in every piece — speech bubbles, KAPOW! starbursts,
              halftone dots. The brand kids beg their parents to call.
            </p>

            {/* speech bubble */}
            <div
              style={{
                background: '#FEFCF7',
                border: '3px solid #0E1116',
                borderRadius: 24,
                padding: '14px 22px',
                fontFamily: "'Caveat Brush', cursive",
                fontSize: 32,
                color: '#0E1116',
                lineHeight: 1,
                display: 'inline-block',
                position: 'relative',
                boxShadow: '5px 5px 0 0 #0E1116',
                transform: 'rotate(-3deg)',
              }}
            >
              "Sparky says: lights on, worries off!"
              {/* bubble tail */}
              <svg
                width="40"
                height="28"
                viewBox="0 0 40 28"
                style={{
                  position: 'absolute',
                  bottom: -22,
                  left: 36,
                  transform: 'rotate(8deg)',
                }}
                aria-hidden
              >
                <path
                  d="M 4 0 L 32 0 L 16 24 Z"
                  fill="#FEFCF7"
                  stroke="#0E1116"
                  strokeWidth="3"
                  strokeLinejoin="miter"
                />
                <line x1="4" y1="0" x2="32" y2="0" stroke="#FEFCF7" strokeWidth="4" />
              </svg>
            </div>
          </div>

          {/* mascot side with KAPOW! */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <Starburst
              size={420}
              points={16}
              spike={0.4}
              fill="#E63946"
              stroke="#0E1116"
              strokeWidth={4}
              rotate={-8}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-8deg)',
              }}
            />
            <Starburst
              size={340}
              points={20}
              spike={0.5}
              fill="#FFD600"
              stroke="#0E1116"
              strokeWidth={4}
              rotate={12}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(12deg)',
              }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <Sparky size={300} />
            </div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: -8,
                transform: 'rotate(15deg)',
                zIndex: 3,
              }}
            >
              <div
                style={{
                  fontFamily: "'Bungee', sans-serif",
                  fontSize: 56,
                  color: '#FFD600',
                  textShadow:
                    '4px 4px 0 #E63946, 7px 7px 0 #0E1116',
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                }}
              >
                ZAP!
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 8,
                left: 16,
                transform: 'rotate(-10deg)',
                zIndex: 3,
              }}
            >
              <div
                style={{
                  fontFamily: "'Bungee', sans-serif",
                  fontSize: 40,
                  color: '#5AA9E6',
                  textShadow: '4px 4px 0 #0E1116',
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                }}
              >
                POW!
              </div>
            </div>
          </div>
        </div>

        {/* palette */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 28,
            borderTop: '4px solid #0E1116',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 32,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Bungee', sans-serif",
                fontSize: 11,
                letterSpacing: '0.16em',
                color: '#0E1116',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Palette · primary pop
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                ['#FFD600', 'Pop Yellow', '#0E1116'],
                ['#E63946', 'Comic Red', '#FEFCF7'],
                ['#5AA9E6', 'Sky Blue', '#0E1116'],
                ['#0E1116', 'Ink Black', '#FFD600'],
                ['#FEFCF7', 'Bubble White', '#0E1116'],
              ].map(([bg, name, fg]) => (
                <div
                  key={name}
                  style={{
                    flex: 1,
                    background: bg,
                    border: '3px solid #0E1116',
                    padding: '14px 10px',
                    fontFamily: "'Bungee', sans-serif",
                    fontSize: 11,
                    color: fg,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    minHeight: 80,
                    boxShadow: '4px 4px 0 0 #0E1116',
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
                fontFamily: "'Bungee', sans-serif",
                fontSize: 11,
                letterSpacing: '0.16em',
                color: '#0E1116',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Type · Bungee + Caveat
            </div>
            <div
              style={{
                background: '#FEFCF7',
                border: '3px solid #0E1116',
                padding: 16,
                boxShadow: '4px 4px 0 0 #0E1116',
              }}
            >
              <div
                style={{
                  fontFamily: "'Bungee', sans-serif",
                  fontSize: 28,
                  color: '#0E1116',
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                  textShadow: '3px 3px 0 #E63946',
                }}
              >
                ZIP ZAP
              </div>
              <div
                style={{
                  fontFamily: "'Caveat Brush', cursive",
                  fontSize: 28,
                  color: '#E63946',
                  marginTop: 6,
                  lineHeight: 0.9,
                  transform: 'rotate(-2deg)',
                  display: 'inline-block',
                }}
              >
                ZAP! Done.
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 32,
            padding: '20px 24px',
            background: '#0E1116',
            color: '#FFD600',
            border: '4px solid #0E1116',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: "'Bungee', sans-serif",
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            boxShadow: '5px 5px 0 0 #E63946',
          }}
        >
          <span>Best logos for this direction</span>
          <span style={{ color: '#FEFCF7' }}>
            Sparky · Live Wire
          </span>
        </div>
      </div>
    </section>
  )
}
