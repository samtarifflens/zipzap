import type { CSSProperties } from 'react'
import { Sparky } from '@/logos/Sparky'
import { BoltBadge } from '@/logos/BoltBadge'
import { PlugFace } from '@/logos/PlugFace'
import { MileHigh } from '@/logos/MileHigh'
import { ServicePatch } from '@/logos/ServicePatch'
import { Lockup } from '@/components/Lockup'
import { GrainOverlay, HalftoneOverlay } from '@/components/HalftoneOverlay'
import { colors, fonts, gradients } from '@/theme/tokens'

const container: CSSProperties = {
  maxWidth: 1280,
  margin: '0 auto',
  padding: '0 48px',
}
const section: CSSProperties = {
  padding: '88px 0',
  borderTop: `2px solid ${colors.ink}`,
}
const eyebrow: CSSProperties = {
  fontFamily: fonts.mono,
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: colors.s500,
  marginBottom: 14,
  display: 'inline-block',
  background: colors.v200,
  padding: '4px 10px',
  border: `1.5px solid ${colors.ink}`,
}
const h2: CSSProperties = {
  fontFamily: fonts.display,
  fontSize: 56,
  lineHeight: 1.0,
  letterSpacing: '-0.02em',
  margin: '0 0 16px',
  color: colors.ink,
  textTransform: 'uppercase',
}
const lede: CSSProperties = {
  fontFamily: fonts.sans,
  fontSize: 19,
  lineHeight: 1.55,
  color: colors.n700,
  maxWidth: 720,
  fontWeight: 400,
}
const card: CSSProperties = {
  background: colors.paper,
  border: `2px solid ${colors.ink}`,
  borderRadius: 6,
  padding: 28,
  boxShadow: '5px 5px 0 0 ' + colors.ink,
}

// -------- Cover --------
function Cover() {
  const cover: CSSProperties = {
    background: gradients.meshLight,
    padding: '88px 0 96px',
    position: 'relative',
    isolation: 'isolate',
    overflow: 'hidden',
    borderTop: 'none',
  }
  const wordmarkXL: CSSProperties = {
    fontFamily: fonts.shade,
    fontSize: 220,
    lineHeight: 0.85,
    color: colors.s500,
    letterSpacing: '0.01em',
    margin: '32px 0 16px',
    fontWeight: 400,
    textTransform: 'uppercase',
  }
  const tagline: CSSProperties = {
    fontFamily: fonts.script,
    fontSize: 64,
    color: colors.e500,
    lineHeight: 0.9,
    transform: 'rotate(-2.5deg)',
    marginBottom: 32,
    textShadow: '3px 3px 0 ' + colors.ink,
  }
  const positioning: CSSProperties = {
    fontFamily: fonts.sans,
    fontSize: 22,
    lineHeight: 1.45,
    color: colors.n700,
    maxWidth: 720,
    margin: 0,
    fontWeight: 500,
  }
  const meta: CSSProperties = {
    marginTop: 64,
    paddingTop: 24,
    borderTop: `2px solid ${colors.ink}`,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 24,
    fontFamily: fonts.mono,
    fontSize: 10,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  }
  const cmLabel: CSSProperties = {
    color: colors.n500,
    marginBottom: 6,
    display: 'block',
    fontWeight: 600,
  }
  const cmVal: CSSProperties = {
    color: colors.ink,
    fontFamily: fonts.sans,
    fontSize: 13,
    letterSpacing: 0,
    textTransform: 'none',
    fontWeight: 500,
  }
  const ribbon: CSSProperties = {
    display: 'inline-block',
    background: colors.s500,
    color: colors.v300,
    fontFamily: fonts.mono,
    fontSize: 11,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    padding: '6px 14px',
    border: `2px solid ${colors.ink}`,
    fontWeight: 600,
  }
  return (
    <section style={cover}>
      <HalftoneOverlay opacity={0.35} />
      <GrainOverlay opacity={0.3} />
      <div style={{ ...container, position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <span style={ribbon}>Brand Kit · v1 · 2026</span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              letterSpacing: '0.14em',
              color: colors.n600,
              textTransform: 'uppercase',
            }}
          >
            Mile-High · Licensed · Insured
          </span>
        </div>

        <Sparky size={88} />

        <div style={wordmarkXL}>
          ZIP{' '}
          <span style={{ color: colors.v500 }}>Z</span>
          <span style={{ color: colors.v500 }}>A</span>
          <span style={{ color: colors.v500 }}>P</span>
        </div>

        <div style={tagline}>Wired right. Done quick.</div>

        <p style={positioning}>
          The neighborhood electrician for the Mile-High City. Friendly,
          fast, fully licensed — and never afraid to crawl in the
          crawlspace. <strong>Zip Zap, LLC</strong> handles every wire
          in your house, your shop, and your detached garage.
        </p>

        <div style={meta}>
          <div>
            <span style={cmLabel}>Owner</span>
            <span style={cmVal}>Master Electrician (Brother-in-Law)</span>
          </div>
          <div>
            <span style={cmLabel}>Service Area</span>
            <span style={cmVal}>Denver Metro · Front Range</span>
          </div>
          <div>
            <span style={cmLabel}>Vibe</span>
            <span style={cmVal}>Whimsical · Retro · Friendly-pro</span>
          </div>
          <div>
            <span style={cmLabel}>Outcome</span>
            <span style={cmVal}>A brand the neighborhood remembers</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// -------- Voice --------
function Voice() {
  const grid: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20,
    marginTop: 32,
  }
  const item: CSSProperties = {
    ...card,
    background: colors.cream,
  }
  const big: CSSProperties = {
    fontFamily: fonts.script,
    fontSize: 38,
    color: colors.s500,
    lineHeight: 1.05,
    marginBottom: 8,
    transform: 'rotate(-1deg)',
    display: 'inline-block',
  }
  const small: CSSProperties = {
    fontFamily: fonts.mono,
    fontSize: 11,
    letterSpacing: '0.14em',
    color: colors.n600,
    textTransform: 'uppercase',
    marginBottom: 12,
  }
  const tone = [
    {
      label: 'Primary tagline',
      line: 'Wired right. Done quick.',
      note: 'Trucks, shirts, voicemail.',
    },
    {
      label: 'Friendly aside',
      line: 'Lights on. Worries off.',
      note: 'For invoices and thank-you cards.',
    },
    {
      label: 'Service line',
      line: 'Plug into Zip Zap.',
      note: 'For yard signs and digital ads.',
    },
  ]
  return (
    <section style={section}>
      <div style={container}>
        <span style={eyebrow}>02 · Voice & Tagline</span>
        <h2 style={h2}>Friendly. Confident. A little electric.</h2>
        <p style={lede}>
          Zip Zap sounds like a neighbor you trust with your kid's bedroom
          rewire. Warm, plain-spoken, never jargony — but every quote is
          itemized and every panel is up to code. Confidence comes from the
          work, not the words.
        </p>
        <div style={grid}>
          {tone.map((t) => (
            <div key={t.line} style={item}>
              <div style={small}>{t.label}</div>
              <div style={big}>{t.line}</div>
              <div style={{ ...small, marginTop: 6 }}>{t.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// -------- Color --------
function ColorSection() {
  const grid: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: 14,
    marginTop: 32,
  }
  const swatch = (bg: string, fg: string): CSSProperties => ({
    background: bg,
    color: fg,
    border: `2px solid ${colors.ink}`,
    borderRadius: 6,
    padding: '24px 16px',
    minHeight: 160,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '4px 4px 0 0 ' + colors.ink,
  })
  const lbl: CSSProperties = {
    fontFamily: fonts.wordmark,
    fontSize: 13,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  }
  const hex: CSSProperties = {
    fontFamily: fonts.mono,
    fontSize: 11,
    letterSpacing: '0.06em',
    opacity: 0.85,
  }

  const swatches: Array<[string, string, string, string]> = [
    [colors.v400, colors.ink, 'Volt Yellow', '#FFD23F'],
    [colors.v500, colors.ink, 'Sun Gold', '#F2B807'],
    [colors.s500, colors.v300, 'Service Navy', '#1F3A93'],
    [colors.ink, colors.v300, 'Bolt Black', '#0E1116'],
    [colors.cream, colors.ink, 'Signpainter Cream', '#F8F1DD'],
    [colors.e500, colors.cream, 'Brick Ember', '#E2602D'],
  ]

  return (
    <section style={{ ...section, background: colors.n50 }}>
      <div style={container}>
        <span style={eyebrow}>03 · Palette</span>
        <h2 style={h2}>Sunshine and a clean uniform.</h2>
        <p style={lede}>
          Volt yellow sits at the center of the brand — pair it with deep
          service navy and bolt black for the iconic 1950s service-station
          look. Cream is the paper we print on. Brick ember adds Denver
          warmth when we need a third voice.
        </p>
        <div style={grid}>
          {swatches.map(([bg, fg, label, h]) => (
            <div key={label} style={swatch(bg, fg)}>
              <span style={lbl}>{label}</span>
              <span style={hex}>{h}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// -------- Type --------
function TypeSection() {
  const sample = (font: string, size: number, sx?: CSSProperties): CSSProperties => ({
    fontFamily: font,
    fontSize: size,
    lineHeight: 1.05,
    margin: 0,
    ...sx,
  })
  const row: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '180px 1fr',
    gap: 24,
    padding: '28px 0',
    borderBottom: `1px dashed ${colors.line2}`,
    alignItems: 'baseline',
  }
  const meta: CSSProperties = {
    fontFamily: fonts.mono,
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: colors.n500,
  }
  return (
    <section style={section}>
      <div style={container}>
        <span style={eyebrow}>04 · Typography</span>
        <h2 style={h2}>Bungee on the truck. Inter on the invoice.</h2>
        <p style={lede}>
          Bungee carries the wordmark and the loud headlines — it has the
          chunky retro signpainter swagger that makes Zip Zap look like
          it's been around since 1958. Caveat Brush handles handwritten
          taglines. Inter keeps body copy and quotes legible.
        </p>
        <div style={{ marginTop: 32, ...card }}>
          <div style={row}>
            <span style={meta}>Wordmark · Bungee Shade</span>
            <p style={sample(fonts.shade, 64, { color: colors.s500, textTransform: 'uppercase' })}>
              ZIP ZAP
            </p>
          </div>
          <div style={row}>
            <span style={meta}>Display · Bungee</span>
            <p style={sample(fonts.wordmark, 44, { color: colors.ink, textTransform: 'uppercase' })}>
              MASTER ELECTRICIAN
            </p>
          </div>
          <div style={row}>
            <span style={meta}>Headline · Archivo Black</span>
            <p style={sample(fonts.display, 36, { color: colors.ink, textTransform: 'uppercase' })}>
              LIGHTS ON. WORRIES OFF.
            </p>
          </div>
          <div style={row}>
            <span style={meta}>Tagline · Caveat Brush</span>
            <p style={sample(fonts.script, 48, { color: colors.e500, transform: 'rotate(-2deg)', display: 'inline-block' })}>
              Wired right. Done quick.
            </p>
          </div>
          <div style={row}>
            <span style={meta}>Body · Inter</span>
            <p style={sample(fonts.sans, 16, { color: colors.n700, lineHeight: 1.6, fontWeight: 400 })}>
              Free in-home estimates. Fully licensed and insured in
              Colorado. We answer the phone, we show up when we say we
              will, and we leave the place cleaner than we found it.
            </p>
          </div>
          <div style={{ ...row, borderBottom: 'none' }}>
            <span style={meta}>Spec · JetBrains Mono</span>
            <p style={sample(fonts.mono, 13, { color: colors.s500, letterSpacing: '0.1em' })}>
              EST. 2026 · DENVER, CO · LICENSED · INSURED · LLC
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// -------- Logos --------
function LogoSection() {
  const grid: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20,
    marginTop: 32,
  }
  const item: CSSProperties = {
    ...card,
    background: colors.cream,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '36px 24px',
    minHeight: 280,
    gap: 16,
  }
  const cap: CSSProperties = {
    fontFamily: fonts.mono,
    fontSize: 11,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: colors.s500,
    marginTop: 4,
  }
  return (
    <section style={{ ...section, background: colors.s500 }}>
      <div style={container}>
        <span
          style={{
            ...eyebrow,
            background: colors.v300,
            color: colors.s500,
            borderColor: colors.ink,
          }}
        >
          05 · Logo Family
        </span>
        <h2 style={{ ...h2, color: colors.cream }}>Six marks, one Zip Zap.</h2>
        <p style={{ ...lede, color: colors.n100 }}>
          One mascot for the truck and the t-shirt. One badge for the
          stamp. One patch for the embroidery. They're all the same
          family — pick the right one for the surface.
        </p>
        <div style={grid}>
          <div style={item}>
            <Sparky size={140} />
            <span style={cap}>Sparky · Mascot</span>
          </div>
          <div style={item}>
            <BoltBadge size={140} />
            <span style={cap}>Bolt Badge · Stamp</span>
          </div>
          <div style={item}>
            <PlugFace size={140} />
            <span style={cap}>Plug Face · Icon</span>
          </div>
          <div style={item}>
            <MileHigh size={140} />
            <span style={cap}>Mile-High · Hero</span>
          </div>
          <div style={{ ...item, gridColumn: 'span 2', minHeight: 280 }}>
            <ServicePatch size={300} />
            <span style={cap}>Service Patch · Uniform & Invoice</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// -------- Lockup --------
function LockupSection() {
  const row: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 20,
    marginTop: 32,
  }
  const tile: CSSProperties = {
    ...card,
    background: colors.cream,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 220,
    padding: 32,
  }
  const dark: CSSProperties = {
    ...tile,
    background: colors.ink,
  }
  const cap: CSSProperties = {
    fontFamily: fonts.mono,
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: colors.n500,
    marginTop: 8,
    display: 'block',
  }
  return (
    <section style={section}>
      <div style={container}>
        <span style={eyebrow}>06 · Lockup</span>
        <h2 style={h2}>The everyday face of Zip Zap.</h2>
        <p style={lede}>
          Sparky to the left, Bungee wordmark to the right. This is the
          lockup that goes everywhere — truck doors, business cards,
          email signatures, Instagram avatars. Don't redraw it. Don't
          recolor it. Don't rotate it. (Caveat Brush taglines? Those go
          everywhere.)
        </p>
        <div style={row}>
          <div>
            <div style={tile}>
              <Lockup Mark={Sparky} size={88} />
            </div>
            <span style={cap}>Primary lockup · cream</span>
          </div>
          <div>
            <div style={dark}>
              <Lockup
                Mark={Sparky}
                size={88}
                color={colors.v300}
              />
            </div>
            <span style={cap}>On bolt-black · for night shots & apparel</span>
          </div>
          <div>
            <div style={tile}>
              <Lockup
                Mark={BoltBadge}
                size={120}
                layout="stacked"
                showLLC
                showTagline
              />
            </div>
            <span style={cap}>Stacked · with handwritten tagline</span>
          </div>
          <div>
            <div style={{ ...tile, background: colors.v400 }}>
              <Lockup Mark={PlugFace} size={88} color={colors.s500} />
            </div>
            <span style={cap}>On volt yellow · for stickers & merch</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// -------- Applied --------
function AppliedSection() {
  const row: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 20,
    marginTop: 32,
  }

  // Truck door
  const truck: CSSProperties = {
    background: colors.cream,
    border: `2px solid ${colors.ink}`,
    borderRadius: 6,
    padding: 36,
    minHeight: 320,
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '5px 5px 0 0 ' + colors.ink,
  }
  // Yard sign
  const sign: CSSProperties = {
    background: colors.v400,
    border: `2px solid ${colors.ink}`,
    borderRadius: 6,
    padding: 36,
    minHeight: 320,
    textAlign: 'center',
    boxShadow: '5px 5px 0 0 ' + colors.ink,
    position: 'relative',
  }
  // Business card
  const bcard: CSSProperties = {
    background: colors.s500,
    color: colors.v300,
    border: `2px solid ${colors.ink}`,
    borderRadius: 6,
    padding: 32,
    minHeight: 320,
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '5px 5px 0 0 ' + colors.ink,
  }
  // Invoice
  const invoice: CSSProperties = {
    background: colors.paper,
    border: `2px solid ${colors.ink}`,
    borderRadius: 6,
    padding: 28,
    minHeight: 320,
    fontFamily: fonts.sans,
    fontSize: 12,
    color: colors.n700,
    boxShadow: '5px 5px 0 0 ' + colors.ink,
  }

  return (
    <section style={{ ...section, background: colors.cream }}>
      <div style={container}>
        <span style={eyebrow}>07 · Applied</span>
        <h2 style={h2}>How it shows up in the wild.</h2>
        <p style={lede}>
          Truck doors. Yard signs. Business cards stuffed in a glovebox.
          Invoices stapled to a kitchen counter. The brand has to feel
          right at every size and on every surface.
        </p>

        <div style={row}>
          {/* Truck door */}
          <div>
            <div style={truck}>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: colors.n500,
                  marginBottom: 8,
                }}
              >
                Service van · driver door
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <Sparky size={120} />
                <div>
                  <div
                    style={{
                      fontFamily: fonts.shade,
                      fontSize: 64,
                      color: colors.s500,
                      lineHeight: 0.9,
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                    }}
                  >
                    ZIP ZAP
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.script,
                      fontSize: 32,
                      color: colors.e500,
                      lineHeight: 1,
                      transform: 'rotate(-2deg)',
                      display: 'inline-block',
                      marginTop: 6,
                    }}
                  >
                    Wired right. Done quick.
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: 28,
                  paddingTop: 16,
                  borderTop: `2px solid ${colors.ink}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  letterSpacing: '0.08em',
                  color: colors.s500,
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                <span>720-555-9477</span>
                <span>zipzapdenver.com</span>
                <span>Lic. EC-12345</span>
              </div>
            </div>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 10,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: colors.n500,
                marginTop: 8,
                display: 'block',
              }}
            >
              Truck door
            </span>
          </div>

          {/* Yard sign */}
          <div>
            <div style={sign}>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: colors.s500,
                  marginBottom: 8,
                  fontWeight: 600,
                }}
              >
                Wired by your friends at
              </div>
              <div
                style={{
                  fontFamily: fonts.shade,
                  fontSize: 76,
                  color: colors.s500,
                  lineHeight: 0.9,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  margin: '4px 0',
                }}
              >
                ZIP ZAP
              </div>
              <Sparky size={92} />
              <div
                style={{
                  fontFamily: fonts.script,
                  fontSize: 38,
                  color: colors.e500,
                  lineHeight: 1,
                  transform: 'rotate(-3deg)',
                  display: 'inline-block',
                  marginTop: 8,
                  textShadow: '2px 2px 0 ' + colors.ink,
                }}
              >
                Lights on. Worries off.
              </div>
              <div
                style={{
                  marginTop: 16,
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  letterSpacing: '0.1em',
                  color: colors.s500,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                720-555-9477
              </div>
            </div>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 10,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: colors.n500,
                marginTop: 8,
                display: 'block',
              }}
            >
              Yard sign · 18×24"
            </span>
          </div>

          {/* Business card */}
          <div>
            <div style={bcard}>
              <HalftoneOverlay opacity={0.18} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  }}
                >
                  <Sparky size={64} />
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 9,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: colors.v200,
                    }}
                  >
                    EST. 2026
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: fonts.wordmark,
                    fontSize: 38,
                    color: colors.v300,
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    margin: '20px 0 4px',
                  }}
                >
                  ZIP ZAP
                </div>
                <div
                  style={{
                    fontFamily: fonts.script,
                    fontSize: 24,
                    color: colors.e500,
                    lineHeight: 1,
                    transform: 'rotate(-2deg)',
                    display: 'inline-block',
                  }}
                >
                  Wired right. Done quick.
                </div>
                <div
                  style={{
                    marginTop: 28,
                    paddingTop: 14,
                    borderTop: `1px dashed ${colors.v300}`,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 8,
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    letterSpacing: '0.06em',
                    color: colors.v100,
                  }}
                >
                  <div>
                    <div style={{ opacity: 0.7 }}>OWNER</div>
                    <div style={{ color: colors.v300, fontWeight: 600 }}>
                      [Brother-in-Law]
                    </div>
                  </div>
                  <div>
                    <div style={{ opacity: 0.7 }}>MASTER ELECTRICIAN</div>
                    <div style={{ color: colors.v300, fontWeight: 600 }}>
                      Lic. EC-12345
                    </div>
                  </div>
                  <div>
                    <div style={{ opacity: 0.7 }}>CALL</div>
                    <div style={{ color: colors.v300, fontWeight: 600 }}>
                      720-555-9477
                    </div>
                  </div>
                  <div>
                    <div style={{ opacity: 0.7 }}>WEB</div>
                    <div style={{ color: colors.v300, fontWeight: 600 }}>
                      zipzapdenver.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 10,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: colors.n500,
                marginTop: 8,
                display: 'block',
              }}
            >
              Business card · 3.5 × 2"
            </span>
          </div>

          {/* Invoice */}
          <div>
            <div style={invoice}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  paddingBottom: 14,
                  borderBottom: `2px solid ${colors.ink}`,
                  marginBottom: 14,
                }}
              >
                <Lockup Mark={Sparky} size={48} />
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontFamily: fonts.wordmark,
                      fontSize: 22,
                      color: colors.s500,
                      textTransform: 'uppercase',
                    }}
                  >
                    INVOICE
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 10,
                      letterSpacing: '0.12em',
                      color: colors.n500,
                    }}
                  >
                    #2026-0042
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: colors.n500,
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <div>
                  <div>Bill to</div>
                  <div
                    style={{
                      color: colors.ink,
                      fontFamily: fonts.sans,
                      fontSize: 12,
                      textTransform: 'none',
                      letterSpacing: 0,
                      fontWeight: 600,
                    }}
                  >
                    The Andersen Residence
                    <br />
                    1234 S. Logan St, Denver
                  </div>
                </div>
                <div>
                  <div>Service date</div>
                  <div
                    style={{
                      color: colors.ink,
                      fontFamily: fonts.sans,
                      fontSize: 12,
                      textTransform: 'none',
                      letterSpacing: 0,
                      fontWeight: 600,
                    }}
                  >
                    May 5, 2026
                  </div>
                </div>
              </div>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: 12,
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: `1px solid ${colors.ink}`,
                      fontFamily: fonts.mono,
                      fontSize: 10,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: colors.n500,
                    }}
                  >
                    <th style={{ textAlign: 'left', padding: '6px 0' }}>Item</th>
                    <th style={{ textAlign: 'right', padding: '6px 0' }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: `1px dashed ${colors.line2}` }}>
                    <td style={{ padding: '6px 0' }}>Panel inspection (200A)</td>
                    <td style={{ textAlign: 'right' }}>$185.00</td>
                  </tr>
                  <tr style={{ borderBottom: `1px dashed ${colors.line2}` }}>
                    <td style={{ padding: '6px 0' }}>
                      Replace 3× kitchen GFCI outlets
                    </td>
                    <td style={{ textAlign: 'right' }}>$240.00</td>
                  </tr>
                  <tr style={{ borderBottom: `1px dashed ${colors.line2}` }}>
                    <td style={{ padding: '6px 0' }}>
                      Hang dining-room pendant
                    </td>
                    <td style={{ textAlign: 'right' }}>$140.00</td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: '10px 0',
                        fontWeight: 700,
                        fontFamily: fonts.wordmark,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: colors.s500,
                      }}
                    >
                      TOTAL DUE
                    </td>
                    <td
                      style={{
                        textAlign: 'right',
                        padding: '10px 0',
                        fontWeight: 700,
                        fontFamily: fonts.wordmark,
                        color: colors.s500,
                      }}
                    >
                      $565.00
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                style={{
                  marginTop: 18,
                  fontFamily: fonts.script,
                  fontSize: 24,
                  color: colors.e500,
                  textAlign: 'center',
                  transform: 'rotate(-1.5deg)',
                  lineHeight: 1,
                }}
              >
                Thanks for trusting Zip Zap!
              </div>
            </div>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 10,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: colors.n500,
                marginTop: 8,
                display: 'block',
              }}
            >
              Invoice · letterhead
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

// -------- Closing --------
function Close() {
  const wrap: CSSProperties = {
    background: colors.ink,
    color: colors.cream,
    padding: '96px 0',
    position: 'relative',
    overflow: 'hidden',
  }
  return (
    <section style={wrap}>
      <HalftoneOverlay opacity={0.25} />
      <div
        style={{
          ...container,
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <Sparky size={120} />
        <div
          style={{
            fontFamily: fonts.shade,
            fontSize: 120,
            color: colors.v300,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            lineHeight: 0.9,
            margin: '24px 0 12px',
          }}
        >
          ZIP ZAP
        </div>
        <div
          style={{
            fontFamily: fonts.script,
            fontSize: 56,
            color: colors.v400,
            transform: 'rotate(-2deg)',
            display: 'inline-block',
            textShadow: '3px 3px 0 ' + colors.s500,
            marginBottom: 24,
          }}
        >
          See you out there, Denver.
        </div>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 12,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: colors.n400,
          }}
        >
          Brand kit prepared with love · 2026
        </div>
      </div>
    </section>
  )
}

export function OnePager() {
  return (
    <>
      <Cover />
      <Voice />
      <ColorSection />
      <TypeSection />
      <LogoSection />
      <LockupSection />
      <AppliedSection />
      <Close />
    </>
  )
}
