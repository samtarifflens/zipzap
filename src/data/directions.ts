/**
 * The five brand directions. Each is a distinct visual + voice +
 * positioning option for Zip Zap, LLC. They are NOT variations of each
 * other — they describe genuinely different companies the brother-in-
 * law could choose to be.
 */

export interface BrandPalette {
  name: string
  hex: string
}

export interface BrandTypePair {
  display: string
  body: string
  notes: string
}

export interface BrandDirection {
  id: string
  number: number
  name: string
  shortName: string
  tagline: string
  positioning: string
  voice: string[]
  palette: BrandPalette[]
  type: BrandTypePair
  // Logo IDs (from logos/index.ts) that fit this direction naturally
  bestLogos: string[]
  // Inspiration sources for the user
  references: string[]
}

export const directions: BrandDirection[] = [
  {
    id: 'atomic',
    number: 1,
    name: 'Atomic Mid-Century',
    shortName: 'Atomic',
    tagline: 'Wired right. Done quick.',
    positioning:
      'The friendly neighborhood electrician with a 1957 soul. Atomic starbursts, banner ribbons, hazard-red stamps — every truck looks like it pulled out of a Texaco station.',
    voice: [
      'Wired right. Done quick.',
      'Lights on. Worries off.',
      'Plug into Zip Zap.',
    ],
    palette: [
      { name: 'Volt Yellow', hex: '#FFD23F' },
      { name: 'Service Navy', hex: '#1F3A93' },
      { name: 'Hazard Red', hex: '#C8281A' },
      { name: 'Bolt Black', hex: '#0E1116' },
      { name: 'Signpainter Cream', hex: '#F8F1DD' },
    ],
    type: {
      display: 'Bungee Shade',
      body: 'Inter',
      notes: 'Alfa Slab One for callouts · Caveat Brush for handwritten taglines',
    },
    bestLogos: ['live-wire', 'sparky'],
    references: ['Reddy Kilowatt', 'Texaco service stations', 'GE 1950s ads'],
  },
  {
    id: 'modern',
    number: 2,
    name: 'Modern Trade-Tech',
    shortName: 'Trade-Tech',
    tagline: 'Book online. We arrive by 2pm.',
    positioning:
      'The Lyft of electricians. Transparent pricing, real-time arrival, online booking. A trade business that feels like it was built by software people — clean, calm, and you know exactly what you\'re paying.',
    voice: [
      'Book online. We arrive by 2pm.',
      'Up-front pricing. No surprise fees.',
      'Licensed, insured, on time.',
    ],
    palette: [
      { name: 'Electric Blue', hex: '#2563EB' },
      { name: 'Safety Yellow', hex: '#FACC15' },
      { name: 'Slate Ink', hex: '#0F172A' },
      { name: 'Mint Signal', hex: '#34D399' },
      { name: 'Pure White', hex: '#FFFFFF' },
    ],
    type: {
      display: 'Inter Tight 700',
      body: 'Inter',
      notes: 'JetBrains Mono for specs · sentence case throughout',
    },
    bestLogos: ['wave-mark', 'bolt-z'],
    references: ['Mr. Electric', 'Stripe', 'Linear', 'Updater'],
  },
  {
    id: 'mountain',
    number: 3,
    name: 'Mountain Heritage',
    shortName: 'Mountain',
    tagline: 'Family-owned. Mile-high crew.',
    positioning:
      'The made-in-Colorado tradesperson. Pine green and tan canvas, woodcut Rocky peaks, slab-serif wordmark on a craft-paper coffee sleeve. The electrician your contractor friend recommends.',
    voice: [
      'Family-owned. Mile-high crew.',
      'We know the work because we live where it gets done.',
      'Front Range craftsmanship since 2026.',
    ],
    palette: [
      { name: 'Pine Green', hex: '#2D4A3A' },
      { name: 'Heritage Tan', hex: '#C9A96E' },
      { name: 'Raw Cream', hex: '#F4EFE0' },
      { name: 'Bark Brown', hex: '#5A3F2B' },
      { name: 'Ember Orange', hex: '#E2602D' },
    ],
    type: {
      display: 'Alfa Slab One',
      body: 'Inter',
      notes: 'All-caps slab for the wordmark · sentence-case body',
    },
    bestLogos: ['kilowatt-crest', 'bolt-z'],
    references: ['Patagonia', 'Stanley', 'REI', 'Topo Designs'],
  },
  {
    id: 'cartoon',
    number: 4,
    name: 'Cartoon Mascot',
    shortName: 'Cartoon',
    tagline: 'ZAP! Done.',
    positioning:
      'A 1960s Saturday-morning cartoon as a service business. Sparky stars in every piece — speech bubbles, KAPOW! starbursts, halftone dots. The brand kids beg their parents to call.',
    voice: [
      'ZAP! Done.',
      'Sparky says: lights on, worries off!',
      'Hot wires? Cold cases? Sparky\'s on it!',
    ],
    palette: [
      { name: 'Pop Yellow', hex: '#FFD600' },
      { name: 'Comic Red', hex: '#E63946' },
      { name: 'Sky Blue', hex: '#5AA9E6' },
      { name: 'Ink Black', hex: '#0E1116' },
      { name: 'Bubble White', hex: '#FEFCF7' },
    ],
    type: {
      display: 'Bungee',
      body: 'Inter',
      notes: 'Caveat Brush for sound effects (POW! ZAP!)',
    },
    bestLogos: ['sparky', 'live-wire'],
    references: ['Hanna-Barbera', 'Reddy Kilowatt cartoons', 'Mr. Peanut'],
  },
  {
    id: 'quiet',
    number: 5,
    name: 'Quiet Pro Craftsman',
    shortName: 'Quiet Pro',
    tagline: 'Master electrician. Referred work.',
    positioning:
      'The opposite of every electrician advert. Single spot color on cream, a small letterpress monogram, no mascot, no mountain. The trusted craftsperson your architect recommends — and the one you keep on retainer once you find them.',
    voice: [
      'Master electrician. Referred work.',
      'Quiet, exact, lifetime warranty on workmanship.',
      'For homes designed to last.',
    ],
    palette: [
      { name: 'Ink Black', hex: '#0E1116' },
      { name: 'Press Cream', hex: '#F4EFE0' },
      { name: 'Oxblood', hex: '#6B1E1E' },
      { name: 'Stone', hex: '#9E9D94' },
    ],
    type: {
      display: 'Limelight',
      body: 'Inter',
      notes: 'Small caps for nav · single accent · zero exclamation marks',
    },
    bestLogos: ['bolt-z', 'wave-mark', 'kilowatt-crest'],
    references: [
      'Hampton Hydraulics',
      'Flatfile Industries',
      'Letterpress trade marks',
      'Aesop',
    ],
  },
]
