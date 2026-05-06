import type { CSSProperties } from 'react'
import { BoltZ } from '@/logos/BoltZ'
import { WaveMark } from '@/logos/WaveMark'

export function QuietDirection() {
  const wrap: CSSProperties = {
    background: '#F4EFE0',
    padding: '120px 0 128px',
    position: 'relative',
  }
  const inner: CSSProperties = {
    maxWidth: 920,
    margin: '0 auto',
    padding: '0 48px',
  }
  return (
    <section style={wrap}>
      <div style={inner}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: '0.32em',
            color: '#9E9D94',
            textTransform: 'uppercase',
            marginBottom: 48,
            paddingBottom: 16,
            borderBottom: '1px solid rgba(14, 17, 22, 0.18)',
            fontWeight: 500,
          }}
        >
          Direction · 05 · Quiet Pro Craftsman
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 48,
          }}
        >
          <BoltZ size={88} variant="mono" />
        </div>

        <h1
          style={{
            fontFamily: "'Limelight', serif",
            fontSize: 88,
            lineHeight: 1.0,
            color: '#0E1116',
            textAlign: 'center',
            fontWeight: 400,
            letterSpacing: '0.04em',
            margin: '0 0 16px',
          }}
        >
          Zip Zap
        </h1>

        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.4em',
            color: '#6B1E1E',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 56,
            fontWeight: 500,
          }}
        >
          · Master Electrician · Denver · Referred Work ·
        </div>

        <div
          style={{
            maxWidth: 640,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: "'Limelight', serif",
              fontSize: 28,
              lineHeight: 1.4,
              color: '#0E1116',
              fontWeight: 400,
              marginBottom: 24,
              letterSpacing: '0.01em',
            }}
          >
            Master electrician.
            <br />
            Referred work only.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              lineHeight: 1.7,
              color: '#403A2C',
              maxWidth: 520,
              margin: '0 auto',
            }}
          >
            The opposite of every electrician advert. Single spot color on
            cream, a small letterpress monogram, no mascot, no mountain. The
            trusted craftsperson your architect recommends — and the one you
            keep on retainer once you find them.
          </p>
        </div>

        {/* divider rule */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            margin: '64px 0 40px',
            color: 'rgba(14, 17, 22, 0.3)',
          }}
        >
          <div style={{ flex: 1, height: 1, background: 'currentColor' }} />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#6B1E1E',
              fontWeight: 500,
            }}
          >
            ·
          </span>
          <div style={{ flex: 1, height: 1, background: 'currentColor' }} />
        </div>

        {/* palette + type */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 56,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.3em',
                color: '#9E9D94',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              Palette
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                ['#0E1116', 'Ink Black'],
                ['#6B1E1E', 'Oxblood'],
                ['#9E9D94', 'Stone'],
                ['#F4EFE0', 'Press Cream'],
              ].map(([bg, name]) => (
                <div
                  key={name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(14, 17, 22, 0.1)',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: bg,
                      border: bg === '#F4EFE0' ? '1px solid rgba(14, 17, 22, 0.2)' : 'none',
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "'Limelight', serif",
                        fontSize: 17,
                        color: '#0E1116',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: '#6B1E1E',
                        letterSpacing: '0.12em',
                      }}
                    >
                      {bg.toUpperCase()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.3em',
                color: '#9E9D94',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              Voice
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Master electrician. Referred work.',
                'Quiet, exact, lifetime warranty on workmanship.',
                'For homes designed to last.',
              ].map((line) => (
                <div
                  key={line}
                  style={{
                    fontFamily: "'Limelight', serif",
                    fontSize: 19,
                    color: '#0E1116',
                    lineHeight: 1.4,
                    letterSpacing: '0.02em',
                    paddingLeft: 16,
                    borderLeft: '2px solid #6B1E1E',
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 64,
            paddingTop: 24,
            borderTop: '1px solid rgba(14, 17, 22, 0.18)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#6B1E1E',
            fontWeight: 500,
          }}
        >
          <span>Best logos · </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <BoltZ size={20} variant="mono" />
            <span>Bolt-Z · Wave Mark · Crest</span>
            <WaveMark size={20} variant="mono" />
          </span>
        </div>
      </div>
    </section>
  )
}
