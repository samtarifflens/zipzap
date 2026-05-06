import type { CSSProperties } from 'react'
import { Sparky } from '@/logos/Sparky'
import { SunRays, GroovyStripes } from '@/components/retro/decade'

export function SeventiesDirection() {
  const wrap: CSSProperties = {
    background: '#F2E5C8',
    padding: '88px 0 96px',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '4px solid #5C3A1E',
  }
  const inner: CSSProperties = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 48px',
    position: 'relative',
    zIndex: 2,
  }

  return (
    <section style={wrap}>
      {/* horizontal stripes across the bottom */}
      <GroovyStripes
        height={56}
        bands={['#C4581E', '#E8B33B', '#FFD23F', '#6F8B3D', '#5C3A1E']}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
      />

      {/* corner sun rays */}
      <SunRays
        size={700}
        rays={20}
        color="#E8B33B"
        style={{
          position: 'absolute',
          top: -260,
          right: -260,
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      <div style={inner}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 12,
          }}
        >
          <div
            style={{
              fontFamily: "'Lilita One', sans-serif",
              fontSize: 14,
              letterSpacing: '0.18em',
              color: '#5C3A1E',
              textTransform: 'uppercase',
              padding: '6px 14px',
              border: '3px solid #5C3A1E',
              background: '#FFD23F',
              boxShadow: '4px 4px 0 0 #5C3A1E',
            }}
          >
            ★ Direction 03 · 1976 ★
          </div>
          <div
            style={{
              fontFamily: "'Lilita One', sans-serif",
              fontSize: 12,
              letterSpacing: '0.16em',
              color: '#5C3A1E',
              textTransform: 'uppercase',
            }}>
            Right on, mile-high.
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div>
            {/* big bubble wordmark with stacked colored shadows */}
            <div
              style={{
                fontFamily: "'Lilita One', sans-serif",
                fontSize: 156,
                lineHeight: 0.88,
                color: '#C4581E',
                letterSpacing: '0.01em',
                textTransform: 'uppercase',
                margin: '24px 0 12px',
                textShadow: [
                  '5px 5px 0 #FFD23F',
                  '10px 10px 0 #6F8B3D',
                  '15px 15px 0 #5C3A1E',
                ].join(', '),
              }}
            >
              ZIP ZAP
            </div>
            <div
              style={{
                fontFamily: "'Lilita One', sans-serif",
                fontSize: 32,
                color: '#5C3A1E',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: 12,
                lineHeight: 1,
              }}>
              Get down with Zip Zap.
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 17,
                lineHeight: 1.55,
                color: '#5C3A1E',
                maxWidth: 480,
                fontWeight: 500,
                marginBottom: 24,
              }}
            >
              Avocado-green appliances, harvest-gold formica, wood-paneled
              basements with a Marlboro radio playing The Eagles. Big bubble
              type, stacked color shadows, 1976 Sears-catalog warmth. Comes
              with a free mustache.
            </p>

            {/* badge row */}
            <div style={{ display: 'flex', gap: 12 }}>
              {['Free!', 'Bonded!', 'Foxy!'].map((label, i) => (
                <div
                  key={label}
                  style={{
                    background: ['#C4581E', '#6F8B3D', '#FFD23F'][i],
                    color: i === 2 ? '#5C3A1E' : '#F2E5C8',
                    padding: '10px 18px',
                    fontFamily: "'Lilita One', sans-serif",
                    fontSize: 16,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    border: '3px solid #5C3A1E',
                    borderRadius: 999,
                    boxShadow: '4px 4px 0 0 #5C3A1E',
                    transform: `rotate(${i === 0 ? -2 : i === 1 ? 1 : -1}deg)`,
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* mascot in a sun */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <SunRays size={420} rays={16} color="#E8B33B" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: '50%',
                background: '#FFD23F',
                border: '5px solid #5C3A1E',
                boxShadow: '8px 8px 0 0 #C4581E',
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
            borderTop: '3px solid #5C3A1E',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 32,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Lilita One', sans-serif",
                fontSize: 14,
                letterSpacing: '0.16em',
                color: '#5C3A1E',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              ☼ Palette · earth tones, baby
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                ['#6F8B3D', 'Avocado'],
                ['#E8B33B', 'Harvest Gold'],
                ['#C4581E', 'Burnt Orange'],
                ['#5C3A1E', 'Cocoa Brown'],
                ['#F2E5C8', 'Cream'],
              ].map(([bg, name]) => (
                <div
                  key={name}
                  style={{
                    flex: 1,
                    background: bg,
                    border: '3px solid #5C3A1E',
                    padding: '14px 10px',
                    fontFamily: "'Lilita One', sans-serif",
                    fontSize: 11,
                    color: bg === '#F2E5C8' || bg === '#E8B33B' ? '#5C3A1E' : '#F2E5C8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    minHeight: 80,
                    boxShadow: '4px 4px 0 0 #5C3A1E',
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
                fontFamily: "'Lilita One', sans-serif",
                fontSize: 14,
                letterSpacing: '0.16em',
                color: '#5C3A1E',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              ☼ Type
            </div>
            <div
              style={{
                background: '#FFFFFF',
                border: '3px solid #5C3A1E',
                padding: 18,
                boxShadow: '4px 4px 0 0 #5C3A1E',
              }}
            >
              <div
                style={{
                  fontFamily: "'Lilita One', sans-serif",
                  fontSize: 30,
                  color: '#C4581E',
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                  textShadow: '3px 3px 0 #6F8B3D',
                }}
              >
                ZIP ZAP
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  color: '#5C3A1E',
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
            background: '#5C3A1E',
            color: '#FFD23F',
            border: '3px solid #5C3A1E',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: "'Lilita One', sans-serif",
            fontSize: 12,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            boxShadow: '4px 4px 0 0 #C4581E',
            position: 'relative',
            zIndex: 3,
          }}
        >
          <span>Best logos for this direction</span>
          <span style={{ color: '#E8B33B' }}>
            Sparky · The Crest
          </span>
        </div>
      </div>
    </section>
  )
}
