/**
 * Shared SVG <defs> block referenced by every logo mark. Renders once at
 * the App root so logos can use `url(#voltGrad)` etc. without redefining.
 */
export function LogoDefs() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute', width: 0, height: 0 }}
      aria-hidden
    >
      <defs>
        {/* Bolt — the iconic Zip Zap gradient: volt yellow into service navy */}
        <linearGradient id="voltGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD23F" />
          <stop offset="55%" stopColor="#F2B807" />
          <stop offset="100%" stopColor="#1F3A93" />
        </linearGradient>
        {/* Pure sunshine — used inside lightning bolt fills */}
        <linearGradient id="sunshineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE872" />
          <stop offset="100%" stopColor="#F2B807" />
        </linearGradient>
        {/* Service — pure navy, used for outlines & supporting shapes */}
        <linearGradient id="serviceGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1F3A93" />
          <stop offset="100%" stopColor="#11225C" />
        </linearGradient>
        {/* Mile-High — sky-to-sunset for poster backdrops */}
        <linearGradient id="mileHighGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A7D5F0" />
          <stop offset="55%" stopColor="#FFE872" />
          <stop offset="100%" stopColor="#E2602D" />
        </linearGradient>
      </defs>
    </svg>
  )
}
