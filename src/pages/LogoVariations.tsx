import type { CSSProperties } from 'react'
import { logos } from '@/logos'
import type { LogoDefinition } from '@/logos/types'
import { Wordmark } from '@/components/Wordmark'
import { colors, fonts } from '@/theme/tokens'

const container: CSSProperties = {
  maxWidth: 1360,
  margin: '0 auto',
  padding: '0 40px',
}
const hero: CSSProperties = { padding: '88px 0 48px' }
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
const h1: CSSProperties = {
  fontFamily: fonts.shade,
  fontSize: 88,
  lineHeight: 0.95,
  letterSpacing: '0.01em',
  margin: '0 0 20px',
  color: colors.s500,
  textTransform: 'uppercase',
}
const lede: CSSProperties = {
  fontFamily: fonts.sans,
  fontSize: 19,
  lineHeight: 1.55,
  color: colors.n700,
  maxWidth: 760,
  fontWeight: 400,
}
const grid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 24,
  paddingBottom: 96,
}

function LogoCard({ def }: { def: LogoDefinition }) {
  const card: CSSProperties = {
    background: colors.paper,
    border: `2px solid ${colors.ink}`,
    borderRadius: 8,
    overflow: 'hidden',
    boxShadow: '6px 6px 0 0 ' + colors.ink,
  }
  const head: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 24px',
    borderBottom: `2px solid ${colors.ink}`,
    background: colors.v300,
  }
  const num: CSSProperties = {
    fontFamily: fonts.mono,
    fontSize: 11,
    color: colors.s500,
    letterSpacing: '0.12em',
    fontWeight: 700,
    padding: '5px 10px',
    background: colors.cream,
    borderRadius: 4,
    border: `1.5px solid ${colors.ink}`,
  }
  const name: CSSProperties = {
    fontFamily: fonts.wordmark,
    fontSize: 24,
    letterSpacing: '0.02em',
    color: colors.ink,
    textTransform: 'uppercase',
  }
  const main: CSSProperties = {
    padding: '48px 28px',
    display: 'grid',
    gridTemplateColumns: '1fr 1px 200px',
    alignItems: 'center',
    gap: 32,
    background: colors.cream,
  }
  const divider: CSSProperties = {
    height: 120,
    background: colors.line,
  }
  const center: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const sizes: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    alignItems: 'center',
  }
  const sizeItem: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  }
  const sz: CSSProperties = {
    fontFamily: fonts.mono,
    fontSize: 9,
    letterSpacing: '0.14em',
    color: colors.n500,
    textTransform: 'uppercase',
  }
  const lockup: CSSProperties = {
    padding: '20px 28px',
    borderTop: `2px solid ${colors.ink}`,
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    background: colors.paper,
  }
  const dark: CSSProperties = {
    background: colors.s500,
    padding: '22px 28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    borderTop: `2px solid ${colors.ink}`,
  }
  const desc: CSSProperties = {
    padding: '20px 28px',
    borderTop: `2px solid ${colors.ink}`,
    fontSize: 13,
    color: colors.n700,
    lineHeight: 1.55,
    background: colors.cream,
  }
  const descLbl: CSSProperties = {
    fontFamily: fonts.mono,
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: colors.s500,
    fontWeight: 700,
    marginRight: 10,
  }
  const num2 = String(def.number).padStart(2, '0')
  const { Component } = def
  return (
    <div style={card}>
      <div style={head}>
        <span style={num}>{num2}</span>
        <span style={name}>{def.name}</span>
      </div>
      <div style={main}>
        <div style={center}>
          <Component size={140} variant="default" />
        </div>
        <div style={divider} />
        <div style={sizes}>
          <div style={sizeItem}>
            <Component size={56} variant="default" />
            <span style={sz}>56</span>
          </div>
          <div style={sizeItem}>
            <Component size={28} variant="mono" />
            <span style={sz}>28 · mono</span>
          </div>
        </div>
      </div>
      <div style={lockup}>
        <Component size={48} variant="default" />
        <Wordmark size={28} color={colors.s500} />
      </div>
      <div style={dark}>
        <Component size={48} variant="inverse" />
        <Wordmark size={28} color={colors.v300} />
      </div>
      <div style={desc}>
        <strong style={descLbl}>USE</strong>
        {def.description}
      </div>
    </div>
  )
}

export function LogoVariations() {
  return (
    <>
      <section style={hero}>
        <div style={container}>
          <span style={eyebrow}>Mark family · six finalists</span>
          <h1 style={h1}>Six Marks. One Zip Zap.</h1>
          <p style={lede}>
            Each mark earns its place by doing one job better than the
            others — Sparky for warmth, Bolt Badge for stamps, Plug Face
            for icons, Mile-High for hero shots, Service Patch for
            uniforms, ZZ Monogram for tiny surfaces. Pick the right
            tool. Don't redraw any of them.
          </p>
        </div>
      </section>
      <div style={container}>
        <div style={grid}>
          {logos.map((def) => (
            <LogoCard key={def.id} def={def} />
          ))}
        </div>
      </div>
    </>
  )
}
