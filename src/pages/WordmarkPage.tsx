import type { CSSProperties } from 'react'
import { Wordmark } from '@/components/Wordmark'
import { colors, fonts } from '@/theme/tokens'

const container: CSSProperties = {
  maxWidth: 1280,
  margin: '0 auto',
  padding: '88px 48px 96px',
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
const h1: CSSProperties = {
  fontFamily: fonts.shade,
  fontSize: 88,
  lineHeight: 0.95,
  margin: '0 0 20px',
  color: colors.s500,
  textTransform: 'uppercase',
}
const lede: CSSProperties = {
  fontFamily: fonts.sans,
  fontSize: 19,
  lineHeight: 1.55,
  color: colors.n700,
  maxWidth: 720,
  marginBottom: 48,
}
const block: CSSProperties = {
  background: colors.paper,
  border: `2px solid ${colors.ink}`,
  borderRadius: 8,
  padding: '64px 40px',
  marginBottom: 24,
  textAlign: 'center',
  boxShadow: '6px 6px 0 0 ' + colors.ink,
}
const meta: CSSProperties = {
  fontFamily: fonts.mono,
  fontSize: 11,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: colors.n500,
  marginTop: 16,
  display: 'block',
}

export function WordmarkPage() {
  return (
    <div style={container}>
      <span style={eyebrow}>The Wordmark</span>
      <h1 style={h1}>Z·I·P · Z·A·P</h1>
      <p style={lede}>
        Bungee, all caps, with a clean letterspaced gap between "ZIP" and
        "ZAP." Bungee Shade for the dimensional 3D variant on hero
        surfaces and apparel. Don't condense it. Don't outline-stroke it.
        Don't tilt it. Tilt the tagline instead.
      </p>

      <div style={block}>
        <div
          style={{
            fontFamily: fonts.shade,
            fontSize: 240,
            lineHeight: 0.9,
            color: colors.s500,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
          }}
        >
          ZIP ZAP
        </div>
        <span style={meta}>Primary · Bungee Shade · Service Navy</span>
      </div>

      <div style={{ ...block, background: colors.cream }}>
        <Wordmark size={180} color={colors.ink} />
        <span style={meta}>Flat · Bungee · Bolt Black on Cream</span>
      </div>

      <div style={{ ...block, background: colors.v400 }}>
        <Wordmark size={180} color={colors.s500} />
        <span style={meta}>On Volt · for stickers, swag, & yard signs</span>
      </div>

      <div style={{ ...block, background: colors.s500 }}>
        <div
          style={{
            fontFamily: fonts.shade,
            fontSize: 200,
            lineHeight: 0.9,
            color: colors.v300,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
          }}
        >
          ZIP ZAP
        </div>
        <span style={{ ...meta, color: colors.v200 }}>
          Inverse · Bungee Shade · Volt on Service Navy
        </span>
      </div>

      <div style={block}>
        <Wordmark size={140} variant="split" />
        <span style={meta}>Split · "ZIP" volt / "ZAP" navy · digital ads</span>
      </div>

      <div style={{ ...block, background: colors.ink }}>
        <div
          style={{
            fontFamily: fonts.script,
            fontSize: 96,
            color: colors.v300,
            transform: 'rotate(-2deg)',
            display: 'inline-block',
            lineHeight: 1,
            textShadow: '4px 4px 0 ' + colors.e500,
          }}
        >
          Wired right. Done quick.
        </div>
        <span style={{ ...meta, color: colors.n400 }}>
          Tagline · Caveat Brush · always slightly tilted, never level
        </span>
      </div>
    </div>
  )
}
