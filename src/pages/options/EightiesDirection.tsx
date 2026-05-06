import type { CSSProperties } from 'react'
import { Sparky } from '@/logos/Sparky'
import { GridFloor, NeonSun } from '@/components/retro/decade'

export function EightiesDirection() {
  const wrap: CSSProperties = {
    background:
      'linear-gradient(180deg, #0B0224 0%, #2B0852 50%, #5A1170 80%, #0B0224 100%)',
    padding: '96px 0 0',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '4px solid #FF2D87',
    color: '#F8F1FF',
  }
  const inner: CSSProperties = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 48px',
    position: 'relative',
    zIndex: 2,
  }

  // Chromatic-aberration neon shadow (cyan + pink offset)
  const neonGlow = [
    '0 0 12px rgba(255,45,135,0.7)',
    '0 0 24px rgba(0,217,255,0.5)',
    '4px 0 0 #FF2D87',
    '-4px 0 0 #00D9FF',
    '0 0 40px rgba(176,38,255,0.8)',
  ].join(', ')

  return (
    <section style={wrap}>
      {/* perspective grid floor at the bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 320,
          zIndex: 1,
          opacity: 0.95,
        }}
      >
        <GridFloor width={1400} height={320} lineColor="#FF2D87" horizonY={0} />
      </div>

      {/* sun centered behind wordmark */}
      <div
        style={{
          position: 'absolute',
          top: 200,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 0,
          opacity: 0.95,
        }}
      >
        <NeonSun size={520} fromColor="#FFE74C" toColor="#FF2D87" />
      </div>

      {/* triangles + palm-tree silhouettes */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          left: 60,
          width: 0,
          height: 0,
          borderLeft: '24px solid transparent',
          borderRight: '24px solid transparent',
          borderBottom: '40px solid #00D9FF',
          opacity: 0.8,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 130,
          right: 100,
          width: 0,
          height: 0,
          borderLeft: '16px solid transparent',
          borderRight: '16px solid transparent',
          borderBottom: '30px solid #FF2D87',
          opacity: 0.9,
          transform: 'rotate(180deg)',
          zIndex: 1,
        }}
      />

      <div style={inner}>
        <div
          style={{
            display: 'inline-block',
            fontFamily: "'Audiowide', sans-serif",
            fontSize: 14,
            letterSpacing: '0.24em',
            color: '#00D9FF',
            background: 'rgba(0, 217, 255, 0.1)',
            padding: '8px 16px',
            border: '2px solid #00D9FF',
            textTransform: 'uppercase',
            marginBottom: 36,
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)',
          }}
        >
          ▲ Direction 04 · 1986 ▲
        </div>

        <div
          style={{
            fontFamily: "'Monoton', cursive",
            fontSize: 168,
            lineHeight: 0.85,
            color: '#FFE74C',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            margin: '0 0 16px',
            textShadow: neonGlow,
            position: 'relative',
            zIndex: 2,
          }}
        >
          ZIP ZAP
        </div>

        <div
          style={{
            fontFamily: "'Audiowide', sans-serif",
            fontSize: 38,
            color: '#FF2D87',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: 24,
            textShadow:
              '0 0 12px rgba(255, 45, 135, 0.8), 0 0 24px rgba(255, 45, 135, 0.4)',
          }}
        >
          MAX VOLTAGE
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 40,
            alignItems: 'center',
            marginTop: 40,
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 19,
              lineHeight: 1.55,
              color: '#E0CFFF',
              fontWeight: 500,
              maxWidth: 540,
              position: 'relative',
              zIndex: 2,
            }}
          >
            Trapper Keeper. Saved by the Bell. Outrun on a CRT in the back of
            your dad's basement. Hot pink and electric cyan against deep
            cosmic purple, a perspective-grid floor, a neon sun on the
            horizon. The brand for the electrician with a Camaro.
          </p>

          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              zIndex: 2,
            }}
          >
            <div
              style={{
                filter: 'drop-shadow(0 0 24px rgba(0, 217, 255, 0.6)) drop-shadow(0 0 40px rgba(255, 45, 135, 0.5))',
              }}
            >
              <Sparky size={240} />
            </div>
          </div>
        </div>

        {/* palette + type */}
        <div
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: '2px solid rgba(255, 45, 135, 0.5)',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 32,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Audiowide', sans-serif",
                fontSize: 12,
                letterSpacing: '0.24em',
                color: '#00D9FF',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              ▲ Palette · synthwave
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                ['#FF2D87', 'Hot Pink'],
                ['#00D9FF', 'Electric Cyan'],
                ['#B026FF', 'Neon Purple'],
                ['#FFE74C', 'Vapor Yellow'],
                ['#0B0224', 'Cosmic Black'],
              ].map(([bg, name]) => (
                <div
                  key={name}
                  style={{
                    flex: 1,
                    background: bg,
                    border: `2px solid ${bg === '#0B0224' ? '#FF2D87' : '#0B0224'}`,
                    padding: '14px 10px',
                    fontFamily: "'Audiowide', sans-serif",
                    fontSize: 11,
                    color: bg === '#0B0224' ? '#00D9FF' : '#0B0224',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    minHeight: 80,
                    boxShadow:
                      bg === '#0B0224'
                        ? '0 0 12px rgba(255,45,135,0.5)'
                        : `4px 4px 0 0 #0B0224`,
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
                fontFamily: "'Audiowide', sans-serif",
                fontSize: 12,
                letterSpacing: '0.24em',
                color: '#00D9FF',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              ▲ Type
            </div>
            <div
              style={{
                background: 'rgba(11, 2, 36, 0.8)',
                border: '2px solid #FF2D87',
                padding: 18,
                boxShadow:
                  '0 0 16px rgba(255, 45, 135, 0.5), inset 0 0 12px rgba(0,217,255,0.2)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Monoton', cursive",
                  fontSize: 30,
                  color: '#FFE74C',
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                  letterSpacing: '0.04em',
                  textShadow:
                    '2px 0 0 #FF2D87, -2px 0 0 #00D9FF, 0 0 18px rgba(255, 231, 76, 0.6)',
                }}
              >
                ZIP ZAP
              </div>
              <div
                style={{
                  fontFamily: "'Audiowide', sans-serif",
                  fontSize: 12,
                  color: '#FF2D87',
                  marginTop: 8,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                ENTER ▶ MAX VOLTAGE
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            margin: '32px 0 96px',
            padding: '18px 24px',
            background: '#0B0224',
            color: '#FFE74C',
            border: '2px solid #FF2D87',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: "'Audiowide', sans-serif",
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            boxShadow:
              '0 0 16px rgba(255, 45, 135, 0.6), inset 0 0 12px rgba(0,217,255,0.15)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <span style={{ color: '#00D9FF' }}>Best logos for this direction</span>
          <span style={{ color: '#FFE74C' }}>
            Wave Mark · Bolt-Z
          </span>
        </div>
      </div>
    </section>
  )
}
