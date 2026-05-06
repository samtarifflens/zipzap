// Single source of truth for the Zip Zap brand tokens.
//
// Whimsical Denver-electrician palette:
//   - Volt yellow + Bolt black = the iconic "lightning" pair (logo gradient)
//   - Service navy = uniform-blue authority, used in lockups & body text
//   - Cream paper = warm, retro, signpainter ground
//   - Ember & Sky = secondary accents (alpine sunset, mile-high sky)

export const colors = {
  // Base surfaces
  cream: '#F8F1DD',     // primary paper — warm retro signpainter cream
  paper: '#FFFFFF',
  ink: '#0E1116',       // bolt-black, used for body text & dark surfaces

  // Volt ramp (electric yellow — primary brand)
  v50: '#FFF9DB',
  v100: '#FFF1A8',
  v200: '#FFE872',
  v300: '#FFDD3F',
  v400: '#FFD23F',      // primary "Volt Yellow"
  v500: '#F2B807',
  v600: '#D49500',
  v700: '#A6730C',
  v800: '#7A540B',
  v900: '#4F3608',

  // Service ramp (uniform navy — secondary brand)
  s50: '#E9EEF8',
  s100: '#C8D3EC',
  s200: '#94A8D8',
  s300: '#5F7CC1',
  s400: '#3A5BAE',
  s500: '#1F3A93',      // primary "Service Navy"
  s600: '#172E78',
  s700: '#11225C',
  s800: '#0B1740',
  s900: '#070F2A',

  // Ember accent (Denver brick / alpine sunset)
  e500: '#E2602D',
  e600: '#B84B1F',

  // Sky accent (mile-high blue)
  k300: '#A7D5F0',
  k500: '#7BB7E0',
  k700: '#3F7FB0',

  // Sage (cool Colorado pine)
  m400: '#9DC4B8',
  m600: '#5E8E83',

  // Warm neutrals
  n50: '#F4EFE0',
  n100: '#EAE3CF',
  n200: '#D6CCAF',
  n300: '#B7A988',
  n400: '#8E8163',
  n500: '#5F5642',
  n600: '#403A2C',
  n700: '#2B271E',
  n800: '#1A1812',
  n900: '#0E0D0A',

  line: 'rgba(14, 17, 22, 0.10)',
  line2: 'rgba(14, 17, 22, 0.18)',
} as const

export const gradients = {
  // The lightning gradient — volt yellow snap-fading into bolt black.
  // Used inside the mark and in marketing hero accents.
  bolt: 'linear-gradient(135deg, #FFD23F 0%, #F2B807 45%, #1F3A93 100%)',

  // Service gradient — navy hero used on dark surfaces.
  service: 'linear-gradient(135deg, #1F3A93 0%, #11225C 100%)',

  // Sunshine — pure yellow ramp for callouts & badges.
  sunshine: 'linear-gradient(135deg, #FFE872 0%, #FFD23F 60%, #F2B807 100%)',

  // Mile-High — sky-to-sunset wash for collateral backdrops.
  mileHigh: 'linear-gradient(165deg, #A7D5F0 0%, #FFE872 55%, #E2602D 100%)',

  // Mesh — retro travel-poster atmosphere for the cover.
  meshLight: [
    'radial-gradient(ellipse 60% 60% at 14% 18%, #FFE872 0%, transparent 55%)',
    'radial-gradient(ellipse 70% 50% at 88% 16%, #A7D5F0 0%, transparent 55%)',
    'radial-gradient(ellipse 80% 70% at 50% 70%, #FFD23F 0%, transparent 60%)',
    'radial-gradient(ellipse 60% 60% at 88% 86%, #E2602D 0%, transparent 55%)',
    'radial-gradient(ellipse 50% 50% at 12% 92%, #1F3A93 0%, transparent 50%)',
    '#F8F1DD',
  ].join(', '),
} as const

// Halftone / dot-pattern overlay — gives the retro printed-poster feel.
// Applied as background-image at low opacity over hero surfaces.
export const halftoneDataUri =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Ccircle cx='3' cy='3' r='1' fill='%230E1116' opacity='0.18'/%3E%3Ccircle cx='9' cy='9' r='1' fill='%230E1116' opacity='0.18'/%3E%3C/svg%3E\")"

// Paper-grain noise — turbulence, desaturated. Layered over hero surfaces.
export const grainDataUri =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

export const fonts = {
  // Wordmark + display — chunky retro signpainter
  wordmark: "'Bungee', 'Archivo Black', sans-serif",
  shade: "'Bungee Shade', 'Bungee', sans-serif",
  display: "'Archivo Black', 'Bungee', sans-serif",
  // Body
  sans: "'Inter', -apple-system, system-ui, sans-serif",
  // Handwritten accents — taglines, sticky notes, "Done Right!"
  script: "'Caveat Brush', 'Marker Felt', cursive",
  // Mono — eyebrows, meta, technical specs
  mono: "'JetBrains Mono', ui-monospace, monospace",
} as const

export const ease = 'cubic-bezier(0.22, 1, 0.36, 1)'
