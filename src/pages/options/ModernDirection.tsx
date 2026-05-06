import type { CSSProperties } from 'react'
import { WaveMark } from '@/logos/WaveMark'
import { BoltZ } from '@/logos/BoltZ'

export function ModernDirection() {
  const wrap: CSSProperties = {
    background: '#FFFFFF',
    padding: '88px 0 96px',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '1px solid #E2E8F0',
  }
  const inner: CSSProperties = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 48px',
  }
  // background grid
  const gridBg: CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    opacity: 0.6,
    maskImage: 'radial-gradient(ellipse at 70% 40%, #000 30%, transparent 70%)',
    WebkitMaskImage: 'radial-gradient(ellipse at 70% 40%, #000 30%, transparent 70%)',
    pointerEvents: 'none',
  }
  return (
    <section style={wrap}>
      <div aria-hidden style={gridBg} />
      <div style={{ ...inner, position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 56,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.18em',
                color: '#2563EB',
                textTransform: 'uppercase',
                marginBottom: 16,
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 12px',
                background: '#EFF6FF',
                borderRadius: 999,
                border: '1px solid #BFDBFE',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#34D399',
                  boxShadow: '0 0 0 4px rgba(52, 211, 153, 0.2)',
                }}
              />
              Direction 02 · Trade-Tech
            </div>
            <div
              style={{
                fontFamily: "'Inter Tight', 'Inter', sans-serif",
                fontSize: 96,
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: '#0F172A',
                marginBottom: 20,
              }}
            >
              Zip Zap.
            </div>
            <div
              style={{
                fontFamily: "'Inter Tight', 'Inter', sans-serif",
                fontSize: 28,
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                color: '#0F172A',
                maxWidth: 460,
                marginBottom: 16,
              }}
            >
              Book online.
              <br />
              <span style={{ color: '#2563EB' }}>We arrive by 2pm.</span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                lineHeight: 1.6,
                color: '#475569',
                maxWidth: 460,
                marginBottom: 24,
              }}
            >
              The Lyft of electricians. Transparent pricing, real-time arrival,
              online booking. A trade business that feels like it was built by
              software people — clean, calm, and you know exactly what you're paying.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button
                style={{
                  background: '#2563EB',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '14px 22px',
                  borderRadius: 10,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '-0.005em',
                  cursor: 'default',
                  boxShadow: '0 1px 0 rgba(255,255,255,0.15) inset, 0 1px 2px rgba(15,23,42,0.1)',
                }}
              >
                Get a quote in 60 seconds →
              </button>
              <button
                style={{
                  background: '#FFFFFF',
                  color: '#0F172A',
                  border: '1px solid #CBD5E1',
                  padding: '14px 22px',
                  borderRadius: 10,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'default',
                }}
              >
                See pricing
              </button>
            </div>
          </div>

          {/* product card mockup */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 16,
              border: '1px solid #E2E8F0',
              padding: 24,
              boxShadow:
                '0 1px 0 rgba(15,23,42,0.04), 0 16px 48px -12px rgba(15,23,42,0.18)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 20,
              }}
            >
              <WaveMark size={44} />
              <div>
                <div
                  style={{
                    fontFamily: "'Inter Tight', 'Inter', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#0F172A',
                  }}
                >
                  Zip Zap
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    color: '#64748B',
                  }}
                >
                  Denver · 4.9★ (412 jobs)
                </div>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: "'JetBrains Mono', monospace",
                    color: '#059669',
                    background: '#ECFDF5',
                    padding: '4px 8px',
                    borderRadius: 999,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                  }}
                >
                  ● ON THE WAY
                </span>
              </div>
            </div>
            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: 12,
                padding: 16,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: '#64748B',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 6,
                }}
              >
                Today's appointment
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#0F172A',
                }}
              >
                Replace 3× kitchen GFCI outlets
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: '#475569',
                  marginTop: 4,
                }}
              >
                Arriving 1:48 PM · 14 min away
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: '#475569',
              }}
            >
              <span>Quoted total</span>
              <span style={{ color: '#0F172A', fontWeight: 600 }}>$240.00</span>
            </div>
          </div>
        </div>

        {/* palette + type */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 28,
            borderTop: '1px solid #E2E8F0',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 32,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.16em',
                color: '#64748B',
                textTransform: 'uppercase',
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              Palette · 5 colors
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                ['#2563EB', 'Electric Blue', '#FFFFFF'],
                ['#FACC15', 'Safety Yellow', '#0F172A'],
                ['#0F172A', 'Slate Ink', '#FFFFFF'],
                ['#34D399', 'Mint Signal', '#0F172A'],
                ['#FFFFFF', 'Pure White', '#0F172A'],
              ].map(([bg, name, fg]) => (
                <div
                  key={name}
                  style={{
                    flex: 1,
                    background: bg,
                    border: '1px solid #E2E8F0',
                    padding: '14px 10px',
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: 11,
                    color: fg,
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    minHeight: 80,
                    borderRadius: 8,
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
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.16em',
                color: '#64748B',
                textTransform: 'uppercase',
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              Type · Inter Tight
            </div>
            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                padding: 16,
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontSize: 28,
                  fontWeight: 700,
                  color: '#0F172A',
                  letterSpacing: '-0.03em',
                  lineHeight: 0.95,
                }}
              >
                Zip Zap
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: '#475569',
                  marginTop: 6,
                  lineHeight: 1.5,
                }}
              >
                Up-front pricing. No surprise fees. Licensed and insured in
                Colorado.
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: '#2563EB',
                  marginTop: 8,
                  letterSpacing: '0.06em',
                }}
              >
                /book · zipzap.app
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            marginTop: 32,
            padding: '18px 24px',
            background: '#0F172A',
            color: '#FFFFFF',
            borderRadius: 12,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: '#94A3B8' }}>Best logos for this direction</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <WaveMark size={20} variant="inverse" />
            <span>Wave Mark · Bolt-Z</span>
            <BoltZ size={20} variant="inverse" />
          </span>
        </div>
      </div>
    </section>
  )
}
