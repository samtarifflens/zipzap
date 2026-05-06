import type { CSSProperties } from 'react'
import { Sparky } from '@/logos/Sparky'
import { PaintSplat, SlimeDrip } from '@/components/retro/decade'

export function NinetiesDirection() {
  const wrap: CSSProperties = {
    background: '#FEFCF7',
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
    zIndex: 3,
  }

  // Chromatic chunky text-shadow stack — "EXTREME" 90s feel
  const splatShadow = [
    '4px 4px 0 #FF74B1',
    '8px 8px 0 #00C2D1',
    '12px 12px 0 #0E1116',
  ].join(', ')

  return (
    <section style={wrap}>
      {/* slime drip across the top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}>
        <SlimeDrip width={1400} height={70} color="#7FBC03" stroke="#0E1116" />
      </div>

      {/* paint splats scattered */}
      <PaintSplat size={220} color="#FF74B1" rotate={-12} style={{ position: 'absolute', top: 90, right: 40, zIndex: 1, opacity: 0.95 }} />
      <PaintSplat size={160} color="#FFE000" rotate={28} style={{ position: 'absolute', bottom: 80, left: 20, zIndex: 1 }} />
      <PaintSplat size={120} color="#00C2D1" rotate={-40} style={{ position: 'absolute', top: 320, left: 320, zIndex: 1 }} />
      <PaintSplat size={140} color="#7FBC03" rotate={20} style={{ position: 'absolute', bottom: 200, right: 280, zIndex: 1, opacity: 0.85 }} />

      <div style={inner}>
        <div
          style={{
            display: 'inline-block',
            fontFamily: "'Permanent Marker', cursive",
            fontSize: 24,
            letterSpacing: '0.04em',
            color: '#0E1116',
            background: '#FFE000',
            padding: '6px 18px',
            border: '4px solid #0E1116',
            transform: 'rotate(-3deg)',
            marginBottom: 28,
            boxShadow: '5px 5px 0 0 #FF74B1',
          }}
        >
          ✦ DIRECTION 05 · 1996 ✦
        </div>

        {/* mismatched-color wordmark, each letter rotated slightly */}
        <div
          style={{
            fontFamily: "'Bagel Fat One', sans-serif",
            fontSize: 168,
            lineHeight: 0.85,
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
            margin: '0 0 16px',
            textShadow: splatShadow,
            display: 'flex',
            gap: 4,
            flexWrap: 'wrap',
          }}
        >
          {[
            { ch: 'Z', color: '#7FBC03', rot: -4 },
            { ch: 'I', color: '#FF74B1', rot: 3 },
            { ch: 'P', color: '#00C2D1', rot: -2 },
            { ch: ' ', color: 'transparent', rot: 0 },
            { ch: 'Z', color: '#FFE000', rot: 5 },
            { ch: 'A', color: '#FF74B1', rot: -3 },
            { ch: 'P', color: '#7FBC03', rot: 2 },
          ].map((c, i) => (
            <span
              key={i}
              style={{
                color: c.color,
                transform: `rotate(${c.rot}deg)`,
                display: 'inline-block',
                WebkitTextStroke: c.ch !== ' ' ? '4px #0E1116' : '0',
              }}
            >
              {c.ch === ' ' ? '  ' : c.ch}
            </span>
          ))}
        </div>

        <div
          style={{
            display: 'inline-block',
            fontFamily: "'Permanent Marker', cursive",
            fontSize: 56,
            color: '#FF74B1',
            transform: 'rotate(-2deg)',
            lineHeight: 0.9,
            textShadow: '4px 4px 0 #0E1116',
            marginBottom: 24,
            background: '#FFE000',
            padding: '4px 18px',
            border: '4px solid #0E1116',
          }}
        >
          Slimed it. Done.
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
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
              color: '#0E1116',
              fontWeight: 600,
              maxWidth: 540,
            }}
          >
            Nickelodeon Slime Time. Lisa Frank trapper keepers. Doritos
            commercials. Splats, drips, mismatched chunky type, 4-color
            clash. The brand for the electrician who skateboards to the
            job site. <strong style={{ background: '#FFE000', padding: '0 6px', border: '2px solid #0E1116' }}>EXTREME!</strong>
          </p>

          {/* mascot in a paint splat */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 2 }}>
            <PaintSplat
              size={400}
              color="#FF74B1"
              stroke="#0E1116"
              rotate={8}
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(8deg)' }}
            />
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                transform: 'rotate(-4deg)',
              }}
            >
              <Sparky size={220} />
            </div>
            <div
              style={{
                position: 'absolute',
                top: -10,
                right: -10,
                fontFamily: "'Permanent Marker', cursive",
                fontSize: 32,
                color: '#0E1116',
                background: '#FFE000',
                padding: '4px 12px',
                border: '3px solid #0E1116',
                transform: 'rotate(15deg)',
                boxShadow: '4px 4px 0 0 #00C2D1',
                zIndex: 4,
              }}
            >
              SO COOL!
            </div>
          </div>
        </div>

        {/* palette + type */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 24,
            borderTop: '4px dashed #0E1116',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 32,
            position: 'relative',
            zIndex: 3,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Permanent Marker', cursive",
                fontSize: 22,
                color: '#0E1116',
                marginBottom: 14,
                transform: 'rotate(-1deg)',
                display: 'inline-block',
                background: '#7FBC03',
                padding: '2px 12px',
                border: '3px solid #0E1116',
              }}
            >
              ✦ palette · totally rad
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                ['#7FBC03', 'Slime Green'],
                ['#FF74B1', 'Bubblegum Pink'],
                ['#00C2D1', 'Cyber Cyan'],
                ['#FFE000', 'Sunshine Yellow'],
                ['#0E1116', 'Marker Black'],
              ].map(([bg, name]) => (
                <div
                  key={name}
                  style={{
                    flex: 1,
                    background: bg,
                    border: '4px solid #0E1116',
                    padding: '14px 10px',
                    fontFamily: "'Bagel Fat One', sans-serif",
                    fontSize: 11,
                    color: bg === '#0E1116' ? '#FFE000' : '#0E1116',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    minHeight: 80,
                    transform: `rotate(${name.length % 2 === 0 ? 1 : -1}deg)`,
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
                fontFamily: "'Permanent Marker', cursive",
                fontSize: 22,
                color: '#0E1116',
                marginBottom: 14,
                transform: 'rotate(1deg)',
                display: 'inline-block',
                background: '#FF74B1',
                padding: '2px 12px',
                border: '3px solid #0E1116',
              }}
            >
              ✦ type
            </div>
            <div
              style={{
                background: '#FFFFFF',
                border: '4px solid #0E1116',
                padding: 18,
                boxShadow: '5px 5px 0 0 #00C2D1',
              }}
            >
              <div
                style={{
                  fontFamily: "'Bagel Fat One', sans-serif",
                  fontSize: 30,
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                  WebkitTextStroke: '3px #0E1116',
                  color: '#7FBC03',
                  textShadow: '3px 3px 0 #0E1116',
                }}
              >
                ZIP ZAP
              </div>
              <div
                style={{
                  fontFamily: "'Permanent Marker', cursive",
                  fontSize: 22,
                  color: '#FF74B1',
                  marginTop: 8,
                  lineHeight: 0.95,
                  transform: 'rotate(-2deg)',
                  display: 'inline-block',
                  textShadow: '2px 2px 0 #0E1116',
                }}
              >
                Wires? No prob, dude.
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 28,
            padding: '18px 24px',
            background: '#0E1116',
            color: '#FFE000',
            border: '4px solid #0E1116',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: "'Bagel Fat One', sans-serif",
            fontSize: 12,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            boxShadow: '5px 5px 0 0 #FF74B1',
          }}
        >
          <span style={{ color: '#7FBC03' }}>Best logos for this direction</span>
          <span style={{ color: '#FFE000' }}>
            Sparky · Bolt-Z
          </span>
        </div>
      </div>
    </section>
  )
}
