import type { CSSProperties } from 'react'
import { LiveWire } from '@/logos/LiveWire'
import { Starburst } from '@/components/retro/Starburst'
import { Banner } from '@/components/retro/Banner'
import { GoogiePanel } from '@/components/retro/iconic'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'

// 1957 palette (per research):
//   Linoleum cream paper, Bakelite Brown (replaces navy — navy reads 90s),
//   Atomic Tangerine (the 'good' 50s orange), Frigidaire Mint, Maraschino,
//   Buttercream Yellow.
const C = {
  cream: '#EFE8AD',
  paper: '#FFFDD0',
  brown: '#2B2118',           // Bakelite — warm near-black
  tangerine: '#F58F4C',       // Atomic Tangerine
  mint: '#9BDBC1',            // Frigidaire Mint
  yellow: '#F4D35E',          // Buttercream
  cherry: '#CC2D30',          // Maraschino
  teal: '#0F4C5C',            // Deep teal (alt to navy)
}

export function AtomicDirection() {
  const wrap: CSSProperties = {
    background: C.cream,
    padding: '88px 0 96px',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: `4px solid ${C.brown}`,
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
        <Starburst size={420} points={24} spike={0.4} fill={C.tangerine} stroke={C.brown} strokeWidth={1.5} />
      </div>
      {/* atomic orbit decoration top-left */}
      <svg
        width="180"
        height="180"
        viewBox="0 0 100 100"
        style={{ position: 'absolute', top: 24, left: 24, opacity: 0.55 }}
        aria-hidden
      >
        <ellipse cx="50" cy="50" rx="44" ry="14" fill="none" stroke={C.teal} strokeWidth="2" transform="rotate(20 50 50)" />
        <ellipse cx="50" cy="50" rx="44" ry="14" fill="none" stroke={C.cherry} strokeWidth="2" transform="rotate(-30 50 50)" />
        <ellipse cx="50" cy="50" rx="44" ry="14" fill="none" stroke={C.tangerine} strokeWidth="2" transform="rotate(80 50 50)" />
        <circle cx="50" cy="50" r="4" fill={C.brown} />
      </svg>

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
                color: C.cherry,
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              Direction 01 · Anno 1957
            </div>

            {/* Googie cocked-parallelogram panel containing chrome two-tone wordmark */}
            <GoogiePanel
              width={460}
              height={150}
              bg={C.teal}
              border={C.brown}
              skew={-8}
              style={{ marginBottom: 24 }}
            >
              <span
                style={{
                  fontFamily: "'Atomic Age', serif",
                  fontSize: 78,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                  // chrome two-tone: top half cream, bottom half tangerine, horizon line
                  background: `linear-gradient(180deg, ${C.cream} 49%, ${C.brown} 49%, ${C.brown} 51%, ${C.tangerine} 51%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: `drop-shadow(2px 0 0 ${C.cherry}) drop-shadow(-2px 0 0 ${C.mint})`,
                }}
              >
                ZIP ZAP
              </span>
            </GoogiePanel>

            {/* Pacifico (NOT Caveat — Caveat reads 2015 Etsy per research) */}
            <div
              style={{
                fontFamily: "'Pacifico', cursive",
                fontSize: 56,
                color: C.cherry,
                lineHeight: 0.95,
                transform: 'rotate(-3deg)',
                display: 'inline-block',
                marginBottom: 24,
                // color-misregister offset (cyan ghost behind red)
                textShadow: `2px 0 0 ${C.mint}, -2px 0 0 ${C.teal}, 4px 4px 0 ${C.brown}`,
              }}
            >
              Wired right. Done quick.
            </div>

            <Banner variant="ribbon" bg={C.cherry} color={C.cream} size={48} width={420} rotate={-2}>
              Atomic Mid-Century
            </Banner>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 17,
                lineHeight: 1.55,
                color: C.brown,
                marginTop: 28,
                maxWidth: 480,
                fontWeight: 500,
              }}
            >
              Bakelite-brown phones, chrome appliances, googie service-station
              signage. Atomic starbursts, atomic orbits, banner ribbons, two-
              tone chrome lettering with hand-painted misregistration. Every
              truck looks like it pulled out of a 1957 Texaco.
            </p>
          </div>

          {/* mascot side */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <Starburst
              size={420}
              points={16}
              spike={0.55}
              fill={C.yellow}
              stroke={C.brown}
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
                fill={C.cherry}
                stroke={C.brown}
                strokeWidth={3}
                textColor={C.cream}
              >
                <span
                  style={{
                    fontFamily: "'Atomic Age', serif",
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
            borderTop: `3px solid ${C.brown}`,
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
                color: C.brown,
                textTransform: 'uppercase',
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              Palette · 6 colors · 1957 authentic
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                [C.tangerine, 'Atomic Tangerine', C.brown],
                [C.teal, 'Deep Teal', C.cream],
                [C.cherry, 'Maraschino', C.cream],
                [C.brown, 'Bakelite Brown', C.yellow],
                [C.mint, 'Frigidaire Mint', C.brown],
                [C.yellow, 'Buttercream', C.brown],
              ].map(([bg, name, fg]) => (
                <div
                  key={name}
                  style={{
                    flex: 1,
                    background: bg,
                    border: `2px solid ${C.brown}`,
                    padding: '14px 10px',
                    fontFamily: "'Atomic Age', serif",
                    fontSize: 11,
                    color: fg,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    minHeight: 80,
                    boxShadow: `3px 3px 0 0 ${C.brown}`,
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
                color: C.brown,
                textTransform: 'uppercase',
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              Type · Atomic Age + Pacifico
            </div>
            <div
              style={{
                background: C.paper,
                border: `2px solid ${C.brown}`,
                padding: 16,
                boxShadow: `3px 3px 0 0 ${C.brown}`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Atomic Age', serif",
                  fontSize: 28,
                  color: C.teal,
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                  letterSpacing: '0.02em',
                }}
              >
                ZIP ZAP
              </div>
              <div
                style={{
                  fontFamily: "'Pacifico', cursive",
                  fontSize: 22,
                  color: C.cherry,
                  marginTop: 6,
                  lineHeight: 0.95,
                  transform: 'rotate(-2deg)',
                  display: 'inline-block',
                }}
              >
                Free Estimates!
              </div>
            </div>
          </div>
        </div>

        {/* footer with logo recs */}
        <div
          style={{
            marginTop: 32,
            padding: '20px 24px',
            background: C.brown,
            color: C.cream,
            border: `2px solid ${C.brown}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            boxShadow: `3px 3px 0 0 ${C.cherry}`,
          }}
        >
          <span>Best logos for this direction</span>
          <span style={{ color: C.tangerine, fontWeight: 600 }}>
            Live Wire · Sparky
          </span>
        </div>
      </div>
    </section>
  )
}
