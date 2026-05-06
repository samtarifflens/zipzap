import type { CSSProperties } from 'react'
import { Sparky } from '@/logos/Sparky'
import { Daisy, PeaceSign, GroovySwirl } from '@/components/retro/decade'

export function SixtiesDirection() {
  const wrap: CSSProperties = {
    background:
      'radial-gradient(ellipse 70% 60% at 50% 50%, #FF74B1 0%, #B026FF 40%, #2B0F4A 100%)',
    padding: '96px 0 104px',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '4px solid #0E1116',
  }
  const inner: CSSProperties = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 48px',
    position: 'relative',
    zIndex: 2,
  }

  // Stacked rainbow text-shadow that fakes the 60s psychedelic shadow stack
  const psychShadow = [
    '4px 4px 0 #FFD600',
    '8px 8px 0 #FF8A00',
    '12px 12px 0 #FF2D87',
    '16px 16px 0 #00C2D1',
    '20px 20px 0 #0E1116',
  ].join(', ')

  return (
    <section style={wrap}>
      {/* swirly background ornaments */}
      <GroovySwirl
        size={500}
        color="rgba(255, 230, 0, 0.18)"
        strokeWidth={4}
        style={{ position: 'absolute', top: -120, left: -120, zIndex: 0 }}
      />
      <GroovySwirl
        size={400}
        color="rgba(127, 188, 3, 0.22)"
        strokeWidth={3}
        style={{ position: 'absolute', bottom: -100, right: -80, zIndex: 0 }}
      />

      {/* scattered daisies */}
      <Daisy size={64} petal="#FFD600" center="#FF2D87" style={{ position: 'absolute', top: 60, right: 120, zIndex: 1, transform: 'rotate(18deg)' }} />
      <Daisy size={48} petal="#7FBC03" center="#FFD600" style={{ position: 'absolute', bottom: 120, left: 80, zIndex: 1, transform: 'rotate(-22deg)' }} />
      <Daisy size={40} petal="#00C2D1" center="#FFD600" style={{ position: 'absolute', top: 220, left: 200, zIndex: 1, transform: 'rotate(35deg)' }} />
      <PeaceSign size={56} fill="#FFD600" style={{ position: 'absolute', bottom: 64, right: 200, zIndex: 1, transform: 'rotate(-8deg)' }} />

      <div style={inner}>
        <div
          style={{
            display: 'inline-block',
            fontFamily: "'Caveat Brush', cursive",
            fontSize: 22,
            color: '#FFD600',
            background: '#0E1116',
            padding: '6px 16px',
            borderRadius: 999,
            border: '3px solid #FFD600',
            transform: 'rotate(-2deg)',
            marginBottom: 28,
            letterSpacing: '0.04em',
          }}
        >
          ✿ Direction 02 · 1968 ✿
        </div>

        <div
          style={{
            fontFamily: "'Sigmar', serif",
            fontSize: 140,
            lineHeight: 0.88,
            color: '#FFD600',
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
            margin: '0 0 24px',
            textShadow: psychShadow,
          }}
        >
          ZIP{' '}
          <span style={{ color: '#FF2D87' }}>ZAP</span>
        </div>

        <div
          style={{
            fontFamily: "'Caveat Brush', cursive",
            fontSize: 64,
            color: '#FFD600',
            transform: 'rotate(-3deg)',
            display: 'inline-block',
            lineHeight: 0.9,
            textShadow: '4px 4px 0 #FF2D87, 8px 8px 0 #0E1116',
            marginBottom: 24,
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
              color: '#FFE9F5',
              fontWeight: 500,
              maxWidth: 540,
            }}
          >
            Yellow Submarine, Fillmore poster, lava-lamp basement. Swirly
            backgrounds, daisies in the corners, rainbow text shadows that
            stack like a bad acid trip. The brand for the electrician who
            kept his mood ring.
          </p>

          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <GroovySwirl
              size={340}
              color="rgba(255, 230, 0, 0.6)"
              strokeWidth={4}
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
            <Daisy size={80} petal="#FFD600" center="#FF2D87" style={{ position: 'absolute', top: -10, right: -10, transform: 'rotate(20deg)', zIndex: 2 }} />
            <Daisy size={60} petal="#7FBC03" center="#FFD600" style={{ position: 'absolute', bottom: -10, left: -10, transform: 'rotate(-30deg)', zIndex: 2 }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Sparky size={240} />
            </div>
          </div>
        </div>

        {/* palette + type */}
        <div
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: '3px dashed rgba(255, 230, 0, 0.5)',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 32,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Caveat Brush', cursive",
                fontSize: 24,
                color: '#FFD600',
                marginBottom: 14,
                transform: 'rotate(-1deg)',
                display: 'inline-block',
              }}
            >
              groovy palette ✿
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                ['#FF2D87', 'Hot Pink'],
                ['#FFD600', 'Marigold'],
                ['#B026FF', 'Royal Purple'],
                ['#7FBC03', 'Lime'],
                ['#FFE9F5', 'Bubblegum Cream'],
              ].map(([bg, name]) => (
                <div
                  key={name}
                  style={{
                    flex: 1,
                    background: bg,
                    border: '3px solid #0E1116',
                    padding: '14px 10px',
                    fontFamily: "'Sigmar', serif",
                    fontSize: 11,
                    color: bg === '#FFE9F5' || bg === '#FFD600' ? '#0E1116' : '#FFE9F5',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    minHeight: 80,
                    boxShadow: '4px 4px 0 0 #0E1116',
                    borderRadius: 12,
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
                fontFamily: "'Caveat Brush', cursive",
                fontSize: 24,
                color: '#FFD600',
                marginBottom: 14,
                transform: 'rotate(1deg)',
                display: 'inline-block',
              }}
            >
              type ✿
            </div>
            <div
              style={{
                background: '#FFE9F5',
                border: '3px solid #0E1116',
                padding: 18,
                boxShadow: '4px 4px 0 0 #0E1116',
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  fontFamily: "'Sigmar', serif",
                  fontSize: 30,
                  color: '#FF2D87',
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                  textShadow: '3px 3px 0 #B026FF',
                }}
              >
                ZIP ZAP
              </div>
              <div
                style={{
                  fontFamily: "'Caveat Brush', cursive",
                  fontSize: 24,
                  color: '#7FBC03',
                  marginTop: 6,
                  lineHeight: 0.95,
                  transform: 'rotate(-2deg)',
                  display: 'inline-block',
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
            background: '#0E1116',
            color: '#FFD600',
            border: '3px solid #FFD600',
            borderRadius: 999,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: "'Sigmar', serif",
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          <span>Best logos · </span>
          <span style={{ color: '#FF2D87' }}>
            Sparky · Live Wire
          </span>
        </div>
      </div>
    </section>
  )
}
