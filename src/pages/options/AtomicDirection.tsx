import type { CSSProperties } from 'react'
import { LiveWire } from '@/logos/LiveWire'
import { Starburst } from '@/components/retro/Starburst'
import { Banner } from '@/components/retro/Banner'
import { Swoosh } from '@/components/retro/Swoosh'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'

export function AtomicDirection() {
  const wrap: CSSProperties = {
    background: '#F8F1DD',
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
      <HalftoneOverlay opacity={0.4} />

      {/* corner sun rays */}
      <div
        style={{
          position: 'absolute',
          top: -120,
          right: -120,
          opacity: 0.25,
        }}
      >
        <Starburst size={420} points={24} spike={0.4} fill="#FFD23F" stroke="#0E1116" strokeWidth={1.5} />
      </div>

      <div style={inner}>
        {/* hero composition */}
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
                fontFamily: "'Alfa Slab One', serif",
                fontSize: 13,
                letterSpacing: '0.18em',
                color: '#C8281A',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Direction 01
            </div>
            <div
              style={{
                fontFamily: "'Bungee Shade', sans-serif",
                fontSize: 96,
                lineHeight: 0.88,
                color: '#1F3A93',
                letterSpacing: '0.01em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              ZIP ZAP
            </div>
            <div style={{ display: 'inline-block', position: 'relative', marginBottom: 24 }}>
              <span
                style={{
                  fontFamily: "'Caveat Brush', cursive",
                  fontSize: 56,
                  color: '#C8281A',
                  lineHeight: 0.9,
                  transform: 'rotate(-3deg)',
                  display: 'inline-block',
                  textShadow: '3px 3px 0 #0E1116',
                }}
              >
                Wired right. Done quick.
              </span>
            </div>
            <Banner variant="ribbon" bg="#C8281A" color="#F8F1DD" size={48} width={420} rotate={-2}>
              Atomic Mid-Century
            </Banner>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 17,
                lineHeight: 1.55,
                color: '#2B271E',
                marginTop: 28,
                maxWidth: 480,
                fontWeight: 500,
              }}
            >
              The friendly neighborhood electrician with a 1957 soul. Atomic
              starbursts, banner ribbons, hazard-red stamps — every truck looks
              like it pulled out of a Texaco station.
            </p>
          </div>

          {/* mascot side */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <Starburst
              size={420}
              points={16}
              spike={0.55}
              fill="#FFD23F"
              stroke="#0E1116"
              strokeWidth={3}
              rotate={-12}
              style={{ position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%) rotate(-12deg)' }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <LiveWire size={260} />
            </div>
            {/* "ELECTRIC!" stamp */}
            <div
              style={{
                position: 'absolute',
                top: 24,
                right: -10,
                transform: 'rotate(14deg)',
                zIndex: 2,
              }}
            >
              <Starburst
                size={140}
                points={12}
                spike={0.5}
                fill="#C8281A"
                stroke="#0E1116"
                strokeWidth={3}
                textColor="#F8F1DD"
              >
                <span
                  style={{
                    fontFamily: "'Alfa Slab One', serif",
                    fontSize: 18,
                    letterSpacing: '0.04em',
                    lineHeight: 0.95,
                  }}
                >
                  ELECTRIC!
                </span>
              </Starburst>
            </div>
          </div>
        </div>

        {/* palette + type strip */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 28,
            borderTop: '3px solid #0E1116',
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
                color: '#5F5642',
                textTransform: 'uppercase',
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              Palette · 5 colors
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                ['#FFD23F', 'Volt Yellow', '#0E1116'],
                ['#1F3A93', 'Service Navy', '#FFD23F'],
                ['#C8281A', 'Hazard Red', '#F8F1DD'],
                ['#0E1116', 'Bolt Black', '#FFD23F'],
                ['#F8F1DD', 'Cream', '#0E1116'],
              ].map(([bg, name, fg]) => (
                <div
                  key={name}
                  style={{
                    flex: 1,
                    background: bg,
                    border: '2px solid #0E1116',
                    padding: '14px 10px',
                    fontFamily: "'Bungee', sans-serif",
                    fontSize: 11,
                    color: fg,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    minHeight: 80,
                    boxShadow: '3px 3px 0 0 #0E1116',
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
                color: '#5F5642',
                textTransform: 'uppercase',
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              Type · Bungee Shade + Inter
            </div>
            <div
              style={{
                background: '#FFFFFF',
                border: '2px solid #0E1116',
                padding: 16,
                boxShadow: '3px 3px 0 0 #0E1116',
              }}
            >
              <div
                style={{
                  fontFamily: "'Bungee Shade', sans-serif",
                  fontSize: 28,
                  color: '#1F3A93',
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                }}
              >
                ZIP ZAP
              </div>
              <div
                style={{
                  fontFamily: "'Alfa Slab One', serif",
                  fontSize: 13,
                  color: '#C8281A',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginTop: 6,
                }}
              >
                FREE ESTIMATES!
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  color: '#2B271E',
                  marginTop: 6,
                  lineHeight: 1.5,
                }}
              >
                Free in-home estimates. Licensed, insured, and never afraid of a crawlspace.
              </div>
            </div>
          </div>
        </div>

        {/* footer with logo recs */}
        <div
          style={{
            marginTop: 32,
            padding: '20px 24px',
            background: '#0E1116',
            color: '#F8F1DD',
            border: '2px solid #0E1116',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            boxShadow: '3px 3px 0 0 #C8281A',
          }}
        >
          <span>Best logos for this direction</span>
          <span style={{ color: '#FFD23F', fontWeight: 600 }}>
            Live Wire · Sparky
          </span>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: -40, left: -40, opacity: 0.2 }}>
        <Swoosh width={400} height={120} color="#1F3A93" strokeWidth={6} variant="flourish" />
      </div>
    </section>
  )
}
