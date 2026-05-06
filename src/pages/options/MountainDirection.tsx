import type { CSSProperties } from 'react'
import { KilowattCrest } from '@/logos/KilowattCrest'

export function MountainDirection() {
  const wrap: CSSProperties = {
    background: '#F4EFE0',
    padding: '88px 0 96px',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '4px solid #2D4A3A',
    backgroundImage:
      "radial-gradient(circle at 1px 1px, rgba(90,63,43,0.18) 1px, transparent 1px)",
    backgroundSize: '14px 14px',
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
      {/* woodcut mountain silhouette across the bottom */}
      <svg
        width="100%"
        height="180"
        viewBox="0 0 1200 180"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: -2,
          left: 0,
          opacity: 0.92,
        }}
        aria-hidden
      >
        <path
          d="M 0 180 L 0 110 L 80 60 L 140 100 L 220 30 L 300 90 L 360 50 L 440 80 L 520 20 L 600 78 L 680 40 L 760 90 L 840 50 L 920 100 L 1000 60 L 1080 90 L 1140 70 L 1200 110 L 1200 180 Z"
          fill="#2D4A3A"
        />
        <path
          d="M 0 180 L 0 150 L 100 130 L 200 145 L 320 120 L 460 138 L 600 118 L 740 142 L 880 124 L 1020 144 L 1140 130 L 1200 148 L 1200 180 Z"
          fill="#1F3528"
        />
      </svg>

      <div style={inner}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.2em',
                color: '#5A3F2B',
                textTransform: 'uppercase',
                marginBottom: 14,
                fontWeight: 600,
              }}
            >
              Direction 03 · Mountain Heritage
            </div>
            <div
              style={{
                fontFamily: "'Alfa Slab One', serif",
                fontSize: 84,
                lineHeight: 0.95,
                color: '#2D4A3A',
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                marginBottom: 12,
              }}
            >
              ZIP ZAP
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                letterSpacing: '0.3em',
                color: '#5A3F2B',
                textTransform: 'uppercase',
                paddingBottom: 16,
                marginBottom: 16,
                borderBottom: '2px solid #5A3F2B',
                fontWeight: 600,
              }}
            >
              · DENVER · COLORADO · EST. 2026 ·
            </div>
            <div
              style={{
                fontFamily: "'Alfa Slab One', serif",
                fontSize: 26,
                color: '#2D4A3A',
                lineHeight: 1.2,
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                marginBottom: 20,
              }}
            >
              Family-owned.
              <br />
              Mile-high crew.
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                lineHeight: 1.6,
                color: '#5A3F2B',
                maxWidth: 460,
              }}
            >
              The made-in-Colorado tradesperson. Pine green and tan canvas,
              woodcut Rocky peaks, slab-serif wordmark on a craft-paper coffee
              sleeve. The electrician your contractor friend recommends.
            </p>
            <div
              style={{
                marginTop: 24,
                display: 'inline-block',
                padding: '10px 18px',
                background: '#E2602D',
                color: '#F4EFE0',
                fontFamily: "'Alfa Slab One', serif",
                fontSize: 13,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                border: '2px solid #2D4A3A',
                boxShadow: '4px 4px 0 0 #2D4A3A',
              }}
            >
              Front Range craftsmanship
            </div>
          </div>

          {/* crest as the hero element */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                background: '#F4EFE0',
                border: '3px solid #2D4A3A',
                padding: 28,
                boxShadow: '8px 8px 0 0 #5A3F2B',
                position: 'relative',
              }}
            >
              <KilowattCrest size={280} />
              {/* corner ornaments */}
              <div
                style={{
                  position: 'absolute',
                  inset: 12,
                  border: '1px solid #5A3F2B',
                  pointerEvents: 'none',
                }}
              />
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.18em',
                color: '#5A3F2B',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              · The Kilowatt Crest ·
            </div>
          </div>
        </div>

        {/* palette + type */}
        <div
          style={{
            marginTop: 56,
            paddingTop: 28,
            borderTop: '2px solid #5A3F2B',
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
                color: '#5A3F2B',
                textTransform: 'uppercase',
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              Palette · earthy + alpine
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                ['#2D4A3A', 'Pine Green', '#F4EFE0'],
                ['#C9A96E', 'Heritage Tan', '#2D4A3A'],
                ['#5A3F2B', 'Bark Brown', '#F4EFE0'],
                ['#E2602D', 'Ember Orange', '#F4EFE0'],
                ['#F4EFE0', 'Raw Cream', '#2D4A3A'],
              ].map(([bg, name, fg]) => (
                <div
                  key={name}
                  style={{
                    flex: 1,
                    background: bg,
                    border: '2px solid #2D4A3A',
                    padding: '14px 10px',
                    fontFamily: "'Alfa Slab One', serif",
                    fontSize: 11,
                    color: fg,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    minHeight: 80,
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
                color: '#5A3F2B',
                textTransform: 'uppercase',
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              Type · Alfa Slab + Inter
            </div>
            <div
              style={{
                background: '#FFFFFF',
                border: '2px solid #2D4A3A',
                padding: 16,
              }}
            >
              <div
                style={{
                  fontFamily: "'Alfa Slab One', serif",
                  fontSize: 28,
                  color: '#2D4A3A',
                  textTransform: 'uppercase',
                  lineHeight: 0.95,
                }}
              >
                ZIP ZAP
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: '#5A3F2B',
                  marginTop: 6,
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                We know the work because we live where it gets done.
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 32,
            padding: '20px 24px',
            background: '#2D4A3A',
            color: '#F4EFE0',
            border: '2px solid #2D4A3A',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            boxShadow: '4px 4px 0 0 #5A3F2B',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <span>Best logos for this direction</span>
          <span style={{ color: '#C9A96E', fontWeight: 600 }}>
            The Crest · Bolt-Z
          </span>
        </div>
      </div>
    </section>
  )
}
