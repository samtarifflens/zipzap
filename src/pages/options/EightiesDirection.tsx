import type { CSSProperties } from 'react'
import { Sparky } from '@/logos/Sparky'
import { Bacterio, MemphisConfetti, CheckerBand } from '@/components/retro/iconic'

// 1986 — pivot Memphis-forward (70%) with synthwave glow as accent (30%).
// Memphis sat its neon shapes on cream/bone, not pure black. Per research:
// "the differentiator from 2016-Tesla-aesthetic is bone, not black."
const C = {
  bone: '#F5F1E8',
  pink: '#FF2E93',           // Memphis hot pink
  teal: '#00C2D1',           // Memphis teal (warmer than synthwave cyan)
  yellow: '#FFD23F',         // Vapor yellow
  black: '#0B0F1A',          // Cosmic black
  purple: '#7B2FBE',
  tang: '#FF6B35',           // Trapper Keeper accent
  lime: '#34C759',
}

export function EightiesDirection() {
  const wrap: CSSProperties = {
    background: C.bone,
    padding: '88px 0 0',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: `4px solid ${C.black}`,
  }

  return (
    <section style={wrap}>
      {/* Memphis confetti scattered through the whole section */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.85, zIndex: 0 }}>
        <MemphisConfetti
          width={1400}
          height={900}
          colors={[C.pink, C.teal, C.yellow, C.purple, C.black]}
          density={42}
          seed={3}
        />
      </div>

      {/* big Bacterio squiggle along left edge */}
      <div style={{ position: 'absolute', top: 80, left: -40, opacity: 0.6, transform: 'rotate(90deg)', transformOrigin: 'left top', zIndex: 0 }}>
        <Bacterio width={500} height={120} color={C.black} strokeWidth={5} />
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 48px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'inline-block',
            fontFamily: "'Audiowide', sans-serif",
            fontSize: 14,
            letterSpacing: '0.24em',
            color: C.black,
            background: C.yellow,
            padding: '8px 18px',
            border: `3px solid ${C.black}`,
            textTransform: 'uppercase',
            marginBottom: 36,
            boxShadow: `5px 5px 0 0 ${C.pink}`,
            transform: 'rotate(-1deg)',
          }}
        >
          ▲ Direction 04 · Anno 1986 ▲
        </div>

        {/* Wordmark — chunky Bowlby One on bone, with chromatic glow as
            accent (synthwave 30%). Sits inside a hot pink Memphis box with
            teal squiggle behind. */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          {/* Memphis backdrop with squiggle */}
          <div
            style={{
              position: 'absolute',
              top: -16,
              left: -24,
              right: -24,
              bottom: -16,
              background: C.pink,
              border: `4px solid ${C.black}`,
              boxShadow: `10px 10px 0 0 ${C.teal}`,
              zIndex: -1,
            }}
          />
          {/* squiggle behind the wordmark */}
          <div style={{ position: 'absolute', top: 30, right: -40, zIndex: -1, opacity: 0.95 }}>
            <Bacterio width={200} height={80} color={C.black} strokeWidth={5} />
          </div>

          <div
            style={{
              fontFamily: "'Bowlby One', sans-serif",
              fontSize: 168,
              lineHeight: 0.85,
              color: C.yellow,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              padding: '4px 32px 12px',
              WebkitTextStroke: `4px ${C.black}`,
              textShadow: `8px 8px 0 ${C.black}`,
            }}
          >
            ZIP ZAP
          </div>
        </div>

        <div
          style={{
            fontFamily: "'Monoton', cursive",
            fontSize: 56,
            color: C.purple,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginTop: 28,
            marginBottom: 24,
            textShadow: `2px 0 0 ${C.pink}, -2px 0 0 ${C.teal}, 0 0 24px rgba(123, 47, 190, 0.4)`,
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
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 19,
                lineHeight: 1.55,
                color: C.black,
                fontWeight: 500,
                maxWidth: 540,
                background: C.bone,
                padding: 16,
                border: `3px solid ${C.black}`,
                boxShadow: `5px 5px 0 0 ${C.teal}`,
              }}
            >
              Sottsass Memphis bookcase, Trapper Keeper Designer Series,
              Saved by the Bell title sequence, Patrick Nagel poster
              portraits. Bacterio squiggles, confetti triangles,
              terrazzo dots — sat on bone, not black. Memphis is older
              than synthwave and twice as 1986.
            </p>
            {/* extra triangles */}
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <div style={{ width: 0, height: 0, borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderBottom: `34px solid ${C.tang}` }} />
              <div style={{ width: 32, height: 32, background: C.teal, border: `3px solid ${C.black}`, transform: 'rotate(20deg)' }} />
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: C.pink, border: `3px solid ${C.black}` }} />
              <div style={{ width: 0, height: 0, borderLeft: '24px solid transparent', borderRight: '24px solid transparent', borderTop: `34px solid ${C.purple}` }} />
              <Bacterio width={120} height={32} color={C.black} strokeWidth={4} />
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              zIndex: 2,
            }}
          >
            {/* terrazzo dot field behind Sparky */}
            <div
              style={{
                position: 'absolute',
                inset: -20,
                background: C.teal,
                border: `4px solid ${C.black}`,
                boxShadow: `8px 8px 0 0 ${C.pink}`,
                zIndex: -1,
                transform: 'rotate(2deg)',
              }}
            />
            <div
              style={{
                filter: `drop-shadow(0 0 18px rgba(255, 46, 147, 0.5)) drop-shadow(0 0 24px rgba(0, 194, 209, 0.4))`,
                transform: 'rotate(-2deg)',
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
            borderTop: `3px solid ${C.black}`,
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
                fontFamily: "'Bowlby One', sans-serif",
                fontSize: 14,
                letterSpacing: '0.18em',
                color: C.black,
                textTransform: 'uppercase',
                marginBottom: 14,
                background: C.yellow,
                display: 'inline-block',
                padding: '4px 12px',
                border: `3px solid ${C.black}`,
              }}
            >
              ▲ Palette · Memphis + neon
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                [C.pink, 'Hot Pink', C.bone],
                [C.teal, 'Memphis Teal', C.black],
                [C.yellow, 'Vapor Yellow', C.black],
                [C.purple, 'Neon Purple', C.bone],
                [C.tang, 'Tang Orange', C.black],
                [C.bone, 'Bone', C.black],
              ].map(([bg, name, fg]) => (
                <div
                  key={name}
                  style={{
                    flex: 1,
                    background: bg,
                    border: `3px solid ${C.black}`,
                    padding: '14px 10px',
                    fontFamily: "'Bowlby One', sans-serif",
                    fontSize: 10,
                    color: fg,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    minHeight: 80,
                    boxShadow: `3px 3px 0 0 ${C.black}`,
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
                fontFamily: "'Bowlby One', sans-serif",
                fontSize: 14,
                letterSpacing: '0.18em',
                color: C.black,
                textTransform: 'uppercase',
                marginBottom: 14,
                background: C.teal,
                display: 'inline-block',
                padding: '4px 12px',
                border: `3px solid ${C.black}`,
              }}
            >
              ▲ Type
            </div>
            <div
              style={{
                background: C.bone,
                border: `3px solid ${C.black}`,
                padding: 18,
                boxShadow: `4px 4px 0 0 ${C.pink}`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Bowlby One', sans-serif",
                  fontSize: 32,
                  color: C.pink,
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                  WebkitTextStroke: `2.5px ${C.black}`,
                  textShadow: `4px 4px 0 ${C.black}`,
                  letterSpacing: '-0.02em',
                }}
              >
                ZIP ZAP
              </div>
              <div
                style={{
                  fontFamily: "'Monoton', cursive",
                  fontSize: 16,
                  color: C.purple,
                  marginTop: 8,
                  letterSpacing: '0.16em',
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
            margin: '32px 0 56px',
            padding: '18px 24px',
            background: C.black,
            color: C.yellow,
            border: `3px solid ${C.black}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: "'Bowlby One', sans-serif",
            fontSize: 12,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            boxShadow: `5px 5px 0 0 ${C.pink}`,
          }}
        >
          <span style={{ color: C.teal }}>Best logos for this direction</span>
          <span>Wave Mark · Bolt-Z</span>
        </div>
      </div>

      {/* B&W checkerboard band footer — the ska/MTV/Memphis tell */}
      <CheckerBand height={36} squares={56} light={C.bone} dark={C.black} />
    </section>
  )
}
