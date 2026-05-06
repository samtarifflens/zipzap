import type { CSSProperties } from 'react'
import { Sparky } from '@/logos/Sparky'
import { PaintSplat, SlimeDrip } from '@/components/retro/decade'
import { NickSplat, MemphisConfetti } from '@/components/retro/iconic'

// 1996 — corrected per research:
//   - swap Bubblegum Pink for Hot Magenta
//   - warm Cyber Cyan to #0CB2C0
//   - add Grape Purple (essential missing color)
//   - anchor with Nickelodeon Orange (the actual Splat color)
//   - newsprint cream instead of pure white
const C = {
  cream: '#E8E6D9',
  paper: '#FEFCF7',
  nickOrange: '#F57C13',     // Pantone 021, the canonical Splat
  slime: '#C4D600',          // Nick's actual yellow-green
  magenta: '#F725A0',        // replaces Bubblegum Pink
  cyan: '#0CB2C0',           // warmer than synthwave cyan
  yellow: '#FAD141',          // Goldenrod
  grape: '#672394',          // Grape Purple (was missing)
  coral: '#FA7B52',
  black: '#0A0A0A',
}

export function NinetiesDirection() {
  const wrap: CSSProperties = {
    background: C.cream,
    padding: '0 0 96px',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: `4px solid ${C.black}`,
  }

  return (
    <section style={wrap}>
      {/* slime drip across the top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}>
        <SlimeDrip width={1400} height={70} color={C.slime} stroke={C.black} />
      </div>

      {/* Memphis confetti — the missing 90s motif (squiggles, triangles,
          half-circles, dot clusters) */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.85, zIndex: 1 }}>
        <MemphisConfetti
          width={1400}
          height={1100}
          colors={[C.black, C.grape, C.cyan, C.magenta]}
          density={36}
          seed={7}
        />
      </div>

      {/* a few large paint splats kept (you have them, keep them) */}
      <PaintSplat size={220} color={C.magenta} stroke={C.black} rotate={-12} style={{ position: 'absolute', top: 120, right: 40, zIndex: 1, opacity: 0.95 }} />
      <PaintSplat size={140} color={C.yellow} stroke={C.black} rotate={28} style={{ position: 'absolute', bottom: 80, left: 20, zIndex: 1 }} />
      <PaintSplat size={100} color={C.cyan} stroke={C.black} rotate={-40} style={{ position: 'absolute', top: 380, left: 320, zIndex: 1 }} />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '88px 48px 0',
          position: 'relative',
          zIndex: 3,
        }}
      >
        <div
          style={{
            display: 'inline-block',
            fontFamily: "'Permanent Marker', cursive",
            fontSize: 24,
            letterSpacing: '0.04em',
            color: C.black,
            background: C.yellow,
            padding: '6px 18px',
            border: `4px solid ${C.black}`,
            transform: 'rotate(-3deg)',
            marginBottom: 28,
            boxShadow: `5px 5px 0 0 ${C.magenta}`,
          }}
        >
          ✦ DIRECTION 05 · ANNO 1996 ✦
        </div>

        {/* THE move: wordmark CONTAINED inside an orange Nick Splat blob,
            knocked out white. The splat is the frame, not decoration. */}
        <div style={{ marginBottom: 24 }}>
          <NickSplat width={780} height={360} color={C.nickOrange} stroke={C.black} rotate={-3}>
            <div style={{ textAlign: 'center', lineHeight: 0.85 }}>
              <div
                style={{
                  fontFamily: "'Bagel Fat One', sans-serif",
                  fontSize: 152,
                  color: C.paper,
                  letterSpacing: '-0.04em',
                  textTransform: 'uppercase',
                  lineHeight: 0.85,
                  WebkitTextStroke: `4px ${C.black}`,
                  textShadow: `7px 7px 0 ${C.black}`,
                }}
              >
                ZIP ZAP
              </div>
              <div
                style={{
                  fontFamily: "'Permanent Marker', cursive",
                  fontSize: 32,
                  color: C.black,
                  marginTop: 14,
                  display: 'inline-block',
                  background: C.slime,
                  padding: '2px 14px',
                  border: `3px solid ${C.black}`,
                  transform: 'rotate(-2deg)',
                }}
              >
                Slimed it. Done.
              </div>
            </div>
          </NickSplat>
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
              color: C.black,
              fontWeight: 600,
              maxWidth: 540,
              background: C.paper,
              padding: 16,
              border: `4px solid ${C.black}`,
              boxShadow: `5px 5px 0 0 ${C.cyan}`,
            }}
          >
            Nickelodeon Splat (1984–2009), Saved by the Bell title sequence,
            Surge soda, MTV TRL. The wordmark sits <em>inside</em> the
            splat — the splat is the frame. Memphis confetti scattered
            around. Pure flat fills, zero gradients (those are Y2K).{' '}
            <strong style={{ background: C.yellow, padding: '0 6px', border: `2px solid ${C.black}` }}>EXTREME!</strong>
          </p>

          {/* Sparky in a grape-purple paint splat */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 2 }}>
            <PaintSplat
              size={400}
              color={C.grape}
              stroke={C.black}
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
                color: C.black,
                background: C.slime,
                padding: '4px 12px',
                border: `4px solid ${C.black}`,
                transform: 'rotate(15deg)',
                boxShadow: `4px 4px 0 0 ${C.cyan}`,
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
            borderTop: `4px dashed ${C.black}`,
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
                color: C.black,
                marginBottom: 14,
                transform: 'rotate(-1deg)',
                display: 'inline-block',
                background: C.slime,
                padding: '2px 12px',
                border: `3px solid ${C.black}`,
              }}
            >
              ✦ palette · totally rad
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                [C.nickOrange, 'Nick Orange', C.black],
                [C.slime, 'Slime Green', C.black],
                [C.magenta, 'Hot Magenta', C.paper],
                [C.cyan, 'Memphis Cyan', C.black],
                [C.grape, 'Grape Purple', C.yellow],
                [C.yellow, 'Goldenrod', C.black],
              ].map(([bg, name, fg]) => (
                <div
                  key={name}
                  style={{
                    flex: 1,
                    background: bg,
                    border: `4px solid ${C.black}`,
                    padding: '14px 10px',
                    fontFamily: "'Bagel Fat One', sans-serif",
                    fontSize: 10,
                    color: fg,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    minHeight: 80,
                    transform: `rotate(${name.length % 2 === 0 ? 1 : -1}deg)`,
                    boxShadow: `4px 4px 0 0 ${C.black}`,
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
                color: C.paper,
                marginBottom: 14,
                transform: 'rotate(1deg)',
                display: 'inline-block',
                background: C.magenta,
                padding: '2px 12px',
                border: `3px solid ${C.black}`,
              }}
            >
              ✦ type
            </div>
            <div
              style={{
                background: C.paper,
                border: `4px solid ${C.black}`,
                padding: 18,
                boxShadow: `5px 5px 0 0 ${C.cyan}`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Bagel Fat One', sans-serif",
                  fontSize: 30,
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                  WebkitTextStroke: `3px ${C.black}`,
                  color: C.nickOrange,
                  textShadow: `3px 3px 0 ${C.black}`,
                }}
              >
                ZIP ZAP
              </div>
              <div
                style={{
                  fontFamily: "'Permanent Marker', cursive",
                  fontSize: 22,
                  color: C.grape,
                  marginTop: 8,
                  lineHeight: 0.95,
                  transform: 'rotate(-2deg)',
                  display: 'inline-block',
                  textShadow: `2px 2px 0 ${C.black}`,
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
            background: C.black,
            color: C.yellow,
            border: `4px solid ${C.black}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: "'Bagel Fat One', sans-serif",
            fontSize: 12,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            boxShadow: `5px 5px 0 0 ${C.magenta}`,
          }}
        >
          <span style={{ color: C.slime }}>Best logos for this direction</span>
          <span style={{ color: C.yellow }}>
            Sparky · Bolt-Z
          </span>
        </div>
      </div>
    </section>
  )
}
