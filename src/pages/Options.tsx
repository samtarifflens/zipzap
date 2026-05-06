import type { CSSProperties } from 'react'
import { logos } from '@/logos'
import { directions } from '@/data/directions'
import { AtomicDirection } from '@/pages/options/AtomicDirection'
import { SixtiesDirection } from '@/pages/options/SixtiesDirection'
import { SeventiesDirection } from '@/pages/options/SeventiesDirection'
import { EightiesDirection } from '@/pages/options/EightiesDirection'
import { NinetiesDirection } from '@/pages/options/NinetiesDirection'
import { colors, fonts, gradients } from '@/theme/tokens'
import { Sparky } from '@/logos/Sparky'

// -------- Hero --------
function Hero() {
  const wrap: CSSProperties = {
    background: gradients.meshLight,
    padding: '96px 0 80px',
    borderBottom: `4px solid ${colors.ink}`,
    position: 'relative',
    overflow: 'hidden',
  }
  const inner: CSSProperties = {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '0 48px',
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
  }
  return (
    <section style={wrap}>
      <div style={inner}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <Sparky size={88} />
        </div>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 12,
            letterSpacing: '0.24em',
            color: colors.s500,
            textTransform: 'uppercase',
            marginBottom: 18,
            fontWeight: 700,
            background: colors.v200,
            display: 'inline-block',
            padding: '6px 14px',
            border: `2px solid ${colors.ink}`,
          }}
        >
          Brand Menu · For your eyes only
        </div>
        <h1
          style={{
            fontFamily: fonts.shade,
            fontSize: 96,
            lineHeight: 0.92,
            color: colors.s500,
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
            margin: '0 0 16px',
          }}
        >
          ZIP ZAP
        </h1>
        <div
          style={{
            fontFamily: fonts.script,
            fontSize: 56,
            color: colors.r500,
            transform: 'rotate(-2deg)',
            display: 'inline-block',
            lineHeight: 0.9,
            textShadow: `3px 3px 0 ${colors.ink}`,
            marginBottom: 32,
          }}
        >
          One brand. Five decades.
        </div>
        <p
          style={{
            fontFamily: fonts.sans,
            fontSize: 19,
            lineHeight: 1.55,
            color: colors.n700,
            maxWidth: 720,
            margin: '0 auto',
            fontWeight: 500,
          }}
        >
          The same Zip Zap, dressed up in five different decades. 50s atomic
          mid-century, 60s psychedelic, 70s earthy funk, 80s neon synthwave,
          90s splat-slime. Every direction is retro, whimsical, and fun — pick
          the decade that feels like home, then pair it with a logo below.
        </p>
        <div
          style={{
            marginTop: 36,
            display: 'flex',
            gap: 8,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {directions.map((d) => (
            <a
              key={d.id}
              href={`#dir-${d.id}`}
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: colors.ink,
                background: colors.cream,
                border: `2px solid ${colors.ink}`,
                padding: '8px 14px',
                textDecoration: 'none',
                fontWeight: 600,
                boxShadow: `3px 3px 0 0 ${colors.ink}`,
              }}
            >
              0{d.number} · {d.shortName}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// -------- Logo Gallery --------
function LogoGallery() {
  const wrap: CSSProperties = {
    background: colors.cream,
    padding: '96px 0',
    borderTop: `4px solid ${colors.ink}`,
    borderBottom: `4px solid ${colors.ink}`,
  }
  const inner: CSSProperties = {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 48px',
  }
  const eyebrow: CSSProperties = {
    fontFamily: fonts.mono,
    fontSize: 12,
    letterSpacing: '0.2em',
    color: colors.r500,
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: 18,
    display: 'inline-block',
    background: colors.v300,
    padding: '6px 12px',
    border: `2px solid ${colors.ink}`,
  }
  const h2: CSSProperties = {
    fontFamily: fonts.shade,
    fontSize: 76,
    lineHeight: 0.95,
    color: colors.s500,
    letterSpacing: '0.01em',
    textTransform: 'uppercase',
    margin: '0 0 16px',
  }
  const lede: CSSProperties = {
    fontFamily: fonts.sans,
    fontSize: 18,
    lineHeight: 1.55,
    color: colors.n700,
    maxWidth: 760,
    marginBottom: 56,
  }
  const grid: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 28,
  }
  const card: CSSProperties = {
    background: colors.paper,
    border: `3px solid ${colors.ink}`,
    boxShadow: `7px 7px 0 0 ${colors.ink}`,
    overflow: 'hidden',
  }
  const head: CSSProperties = {
    background: colors.v300,
    borderBottom: `3px solid ${colors.ink}`,
    padding: '18px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
  const num: CSSProperties = {
    fontFamily: fonts.slab,
    fontSize: 14,
    color: colors.r500,
    letterSpacing: '0.08em',
    background: colors.cream,
    border: `2px solid ${colors.ink}`,
    padding: '4px 10px',
  }
  const name: CSSProperties = {
    fontFamily: fonts.wordmark,
    fontSize: 22,
    color: colors.ink,
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
  }
  const showcase: CSSProperties = {
    background: colors.cream,
    minHeight: 320,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 36,
    position: 'relative',
  }
  const sizesRow: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 24,
    padding: '24px 32px',
    borderTop: `2px dashed ${colors.line2}`,
    borderBottom: `2px dashed ${colors.line2}`,
    background: colors.cream,
  }
  const dark: CSSProperties = {
    background: colors.s500,
    padding: '24px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const meta: CSSProperties = {
    padding: '24px 28px',
    background: colors.paper,
  }
  const fact: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '110px 1fr',
    gap: 12,
    padding: '6px 0',
    fontFamily: fonts.sans,
    fontSize: 13,
    color: colors.n700,
    lineHeight: 1.5,
    alignItems: 'baseline',
  }
  const factLbl: CSSProperties = {
    fontFamily: fonts.mono,
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: colors.r500,
    fontWeight: 700,
  }
  return (
    <section style={wrap}>
      <div style={inner}>
        <span style={eyebrow}>Five logo concepts</span>
        <h2 style={h2}>Pick a mark.</h2>
        <p style={lede}>
          Each one is a genuinely different shape. Sparky has a face. Bolt-Z is
          a letterform. Live Wire is a walking character. The Crest is a
          heraldic badge. Wave Mark is a single geometric stroke. They're not
          five lightning bolts in a row — they're five different ideas of what
          the company looks like at a glance.
        </p>
        <div style={grid}>
          {logos.map((def) => {
            const { Component } = def
            const num2 = String(def.number).padStart(2, '0')
            return (
              <div key={def.id} style={card} id={`logo-${def.id}`}>
                <div style={head}>
                  <span style={num}>{num2}</span>
                  <span style={name}>{def.name}</span>
                </div>
                <div style={showcase}>
                  <Component size={220} variant="default" />
                </div>
                <div style={sizesRow}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <Component size={64} variant="default" />
                    <span style={{ fontFamily: fonts.mono, fontSize: 9, letterSpacing: '0.14em', color: colors.n500, textTransform: 'uppercase' }}>64px</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <Component size={32} variant="default" />
                    <span style={{ fontFamily: fonts.mono, fontSize: 9, letterSpacing: '0.14em', color: colors.n500, textTransform: 'uppercase' }}>32px</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <Component size={32} variant="mono" />
                    <span style={{ fontFamily: fonts.mono, fontSize: 9, letterSpacing: '0.14em', color: colors.n500, textTransform: 'uppercase' }}>mono</span>
                  </div>
                </div>
                <div style={dark}>
                  <Component size={72} variant="inverse" />
                </div>
                <div style={meta}>
                  <p
                    style={{
                      fontFamily: fonts.sans,
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: colors.n700,
                      marginTop: 0,
                      marginBottom: 16,
                    }}
                  >
                    {def.description}
                  </p>
                  <div style={fact}>
                    <span style={factLbl}>Shape</span>
                    <span>{def.shape}</span>
                  </div>
                  <div style={fact}>
                    <span style={factLbl}>Best for</span>
                    <span style={{ fontWeight: 600, color: colors.s500 }}>
                      {def.bestFor.join(' · ')}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// -------- Closing --------
function HowToChoose() {
  const wrap: CSSProperties = {
    background: colors.ink,
    color: colors.cream,
    padding: '96px 0',
  }
  const inner: CSSProperties = {
    maxWidth: 920,
    margin: '0 auto',
    padding: '0 48px',
    textAlign: 'center',
  }
  return (
    <section style={wrap}>
      <div style={inner}>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 12,
            letterSpacing: '0.24em',
            color: colors.v300,
            textTransform: 'uppercase',
            marginBottom: 18,
            fontWeight: 700,
          }}
        >
          How to choose
        </div>
        <div
          style={{
            fontFamily: fonts.shade,
            fontSize: 80,
            color: colors.v300,
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
            lineHeight: 0.92,
            marginBottom: 24,
          }}
        >
          MIX AND MATCH
        </div>
        <p
          style={{
            fontFamily: fonts.sans,
            fontSize: 18,
            lineHeight: 1.6,
            color: colors.n300,
            maxWidth: 640,
            margin: '0 auto 32px',
          }}
        >
          You can pick any direction with any mark — the recommendations are
          starting points, not rules. Tell me which direction feels closest to
          who you want to be (or which two), and I'll build the full kit:
          truck door, business cards, yard signs, invoice template, social
          tiles, T-shirts.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            marginTop: 48,
            textAlign: 'left',
          }}
        >
          {[
            ['Step 1', 'Pick a direction', '01–05 above. Tell Sam which one (or two) feel closest.'],
            ['Step 2', 'Pick a mark', 'Sparky, Bolt-Z, Live Wire, Crest, or Wave. They work across directions.'],
            ['Step 3', 'Get the full kit', 'Sam refines and ships truck-door artwork, cards, signs, invoice template.'],
          ].map(([n, t, d]) => (
            <div
              key={n}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: `1px solid rgba(255, 210, 63, 0.2)`,
                padding: 20,
              }}
            >
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  color: colors.v300,
                  textTransform: 'uppercase',
                  marginBottom: 6,
                  fontWeight: 700,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontFamily: fonts.wordmark,
                  fontSize: 18,
                  color: colors.cream,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  marginBottom: 10,
                }}
              >
                {t}
              </div>
              <div
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: colors.n300,
                }}
              >
                {d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Options() {
  return (
    <>
      <Hero />
      <div id="dir-atomic">
        <AtomicDirection />
      </div>
      <div id="dir-sixties">
        <SixtiesDirection />
      </div>
      <div id="dir-seventies">
        <SeventiesDirection />
      </div>
      <div id="dir-eighties">
        <EightiesDirection />
      </div>
      <div id="dir-nineties">
        <NinetiesDirection />
      </div>
      <LogoGallery />
      <HowToChoose />
    </>
  )
}
