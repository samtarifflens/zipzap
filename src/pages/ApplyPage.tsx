import type { CSSProperties } from 'react'
import { Sparky } from '@/logos/Sparky'
import { BoltBadge } from '@/logos/BoltBadge'
import { Lockup } from '@/components/Lockup'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'
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
const grid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 28,
}
const tile: CSSProperties = {
  border: `2px solid ${colors.ink}`,
  borderRadius: 8,
  padding: 32,
  minHeight: 360,
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '6px 6px 0 0 ' + colors.ink,
}
const cap: CSSProperties = {
  fontFamily: fonts.mono,
  fontSize: 11,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: colors.n500,
  marginTop: 12,
  display: 'block',
}

// T-shirt back print
function TShirt() {
  return (
    <div>
      <div
        style={{
          ...tile,
          background: colors.ink,
          color: colors.cream,
          textAlign: 'center',
          padding: 48,
        }}
      >
        <HalftoneOverlay opacity={0.18} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              fontFamily: fonts.script,
              fontSize: 32,
              color: colors.v300,
              transform: 'rotate(-2deg)',
              display: 'inline-block',
              marginBottom: 4,
            }}
          >
            Mile-High
          </div>
          <div
            style={{
              fontFamily: fonts.shade,
              fontSize: 78,
              color: colors.v300,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              lineHeight: 0.9,
            }}
          >
            ZIP ZAP
          </div>
          <div style={{ margin: '16px 0' }}>
            <Sparky size={120} variant="default" />
          </div>
          <div
            style={{
              fontFamily: fonts.script,
              fontSize: 36,
              color: colors.e500,
              transform: 'rotate(-3deg)',
              display: 'inline-block',
              textShadow: '2px 2px 0 ' + colors.cream,
            }}
          >
            Wired right. Done quick.
          </div>
          <div
            style={{
              marginTop: 24,
              fontFamily: fonts.mono,
              fontSize: 11,
              letterSpacing: '0.18em',
              color: colors.n400,
              textTransform: 'uppercase',
            }}
          >
            EST. 2026 · DENVER, CO
          </div>
        </div>
      </div>
      <span style={cap}>T-shirt · back print · 3-color screen print</span>
    </div>
  )
}

// Hard-hat sticker
function HardHat() {
  return (
    <div>
      <div
        style={{
          ...tile,
          background: colors.v400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 32,
        }}
      >
        <div
          style={{
            width: 240,
            height: 240,
            borderRadius: '50%',
            background: colors.ink,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `4px solid ${colors.cream}`,
            position: 'relative',
            boxShadow: '0 0 0 2px ' + colors.ink,
          }}
        >
          <BoltBadge size={200} variant="inverse" />
        </div>
      </div>
      <span style={cap}>Hard-hat sticker · 3" round</span>
    </div>
  )
}

// Instagram tile
function Instagram() {
  return (
    <div>
      <div
        style={{
          ...tile,
          background: colors.cream,
          padding: 24,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 8,
          }}
        >
          <div
            style={{
              aspectRatio: '1',
              background: colors.s500,
              border: `2px solid ${colors.ink}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 12,
            }}
          >
            <div
              style={{
                fontFamily: fonts.shade,
                fontSize: 28,
                color: colors.v300,
                lineHeight: 0.9,
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
            >
              ZIP ZAP
            </div>
          </div>
          <div
            style={{
              aspectRatio: '1',
              background: colors.v400,
              border: `2px solid ${colors.ink}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Sparky size={84} />
          </div>
          <div
            style={{
              aspectRatio: '1',
              background: colors.cream,
              border: `2px solid ${colors.ink}`,
              padding: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: fonts.script,
                fontSize: 22,
                color: colors.e500,
                lineHeight: 1,
                textAlign: 'center',
                transform: 'rotate(-3deg)',
                display: 'inline-block',
              }}
            >
              Wired right. Done quick.
            </span>
          </div>
          <div
            style={{
              aspectRatio: '1',
              background: colors.e500,
              border: `2px solid ${colors.ink}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
            }}
          >
            <div
              style={{
                fontFamily: fonts.wordmark,
                fontSize: 14,
                color: colors.cream,
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                lineHeight: 1.2,
              }}
            >
              FREE
              <br />
              ESTIMATE
            </div>
          </div>
          <div
            style={{
              aspectRatio: '1',
              background: colors.ink,
              border: `2px solid ${colors.ink}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 10,
                letterSpacing: '0.14em',
                color: colors.n400,
                textTransform: 'uppercase',
              }}
            >
              Call
            </div>
            <div
              style={{
                fontFamily: fonts.wordmark,
                fontSize: 18,
                color: colors.v300,
                textAlign: 'center',
                lineHeight: 1,
              }}
            >
              720·555·9477
            </div>
          </div>
          <div
            style={{
              aspectRatio: '1',
              background: colors.k500,
              border: `2px solid ${colors.ink}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
            }}
          >
            <Lockup
              Mark={Sparky}
              size={48}
              layout="stacked"
              showLLC={false}
              color={colors.s500}
            />
          </div>
        </div>
      </div>
      <span style={cap}>Instagram grid · 6 tiles · feed-coherent</span>
    </div>
  )
}

// Refrigerator magnet
function Magnet() {
  return (
    <div>
      <div
        style={{
          ...tile,
          background: colors.k300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 32,
        }}
      >
        <div
          style={{
            background: colors.v400,
            border: `3px solid ${colors.ink}`,
            borderRadius: 8,
            padding: 20,
            width: 260,
            textAlign: 'center',
            boxShadow: '4px 4px 0 0 ' + colors.ink,
          }}
        >
          <div style={{ marginBottom: 8 }}>
            <Sparky size={64} />
          </div>
          <div
            style={{
              fontFamily: fonts.shade,
              fontSize: 38,
              color: colors.s500,
              lineHeight: 0.9,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            ZIP ZAP
          </div>
          <div
            style={{
              fontFamily: fonts.script,
              fontSize: 22,
              color: colors.e500,
              transform: 'rotate(-2deg)',
              display: 'inline-block',
              marginTop: 4,
            }}
          >
            Save us in your phone!
          </div>
          <div
            style={{
              marginTop: 12,
              paddingTop: 10,
              borderTop: `2px dashed ${colors.ink}`,
              fontFamily: fonts.wordmark,
              fontSize: 18,
              color: colors.s500,
              letterSpacing: '0.04em',
            }}
          >
            720·555·9477
          </div>
        </div>
      </div>
      <span style={cap}>Refrigerator magnet · 3 × 4"</span>
    </div>
  )
}

export function ApplyPage() {
  return (
    <div style={container}>
      <span style={eyebrow}>Applied</span>
      <h1 style={h1}>Out in the wild.</h1>
      <p style={lede}>
        A brand isn't a logo file — it's how your work shows up at every
        kitchen, every job site, every stranger's phone. Here's Zip Zap
        on the surfaces that matter.
      </p>
      <div style={grid}>
        <TShirt />
        <HardHat />
        <Instagram />
        <Magnet />
      </div>
    </div>
  )
}
