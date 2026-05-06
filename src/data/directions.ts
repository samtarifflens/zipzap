/**
 * Five brand directions — one for each decade. Every one is whimsical,
 * retro, fun. They're not meant to compete on positioning — they
 * compete on *vibe*. Pick the decade that feels right.
 */

export interface BrandPalette {
  name: string
  hex: string
}

export interface BrandDirection {
  id: string
  number: number
  decade: string
  name: string
  shortName: string
  tagline: string
  positioning: string
  palette: BrandPalette[]
  bestLogos: string[]
}

export const directions: BrandDirection[] = [
  {
    id: 'atomic',
    number: 1,
    decade: '1957',
    name: 'Atomic Mid-Century',
    shortName: '50s · Atomic',
    tagline: 'Wired right. Done quick.',
    positioning:
      'The friendly neighborhood electrician with a 1957 soul. Atomic starbursts, banner ribbons, hazard-red stamps — every truck looks like it pulled out of a Texaco station.',
    palette: [
      { name: 'Volt Yellow', hex: '#FFD23F' },
      { name: 'Service Navy', hex: '#1F3A93' },
      { name: 'Hazard Red', hex: '#C8281A' },
      { name: 'Bolt Black', hex: '#0E1116' },
      { name: 'Cream', hex: '#F8F1DD' },
    ],
    bestLogos: ['live-wire', 'sparky'],
  },
  {
    id: 'sixties',
    number: 2,
    decade: '1968',
    name: 'Psychedelic Groovy',
    shortName: '60s · Groovy',
    tagline: 'Far out wires, baby.',
    positioning:
      'Yellow Submarine, Fillmore poster, lava-lamp basement. Swirly backgrounds, daisies in the corners, rainbow text shadows that stack like a bad acid trip.',
    palette: [
      { name: 'Hot Pink', hex: '#FF2D87' },
      { name: 'Marigold', hex: '#FFD600' },
      { name: 'Royal Purple', hex: '#B026FF' },
      { name: 'Lime', hex: '#7FBC03' },
      { name: 'Cream', hex: '#FFE9F5' },
    ],
    bestLogos: ['sparky', 'live-wire'],
  },
  {
    id: 'seventies',
    number: 3,
    decade: '1976',
    name: 'Earthy Funk',
    shortName: '70s · Funk',
    tagline: 'Get down with Zip Zap.',
    positioning:
      'Avocado-green appliances, harvest-gold formica, wood-paneled basements with The Eagles on the radio. Big bubble type, stacked color shadows, 1976 Sears-catalog warmth.',
    palette: [
      { name: 'Avocado', hex: '#6F8B3D' },
      { name: 'Harvest Gold', hex: '#E8B33B' },
      { name: 'Burnt Orange', hex: '#C4581E' },
      { name: 'Cocoa Brown', hex: '#5C3A1E' },
      { name: 'Cream', hex: '#F2E5C8' },
    ],
    bestLogos: ['sparky', 'kilowatt-crest'],
  },
  {
    id: 'eighties',
    number: 4,
    decade: '1986',
    name: 'Neon Synthwave',
    shortName: '80s · Synthwave',
    tagline: 'MAX VOLTAGE.',
    positioning:
      "Trapper Keeper. Saved by the Bell. Outrun on a CRT in your dad's basement. Hot pink and electric cyan against deep cosmic purple, a perspective-grid floor, a neon sun on the horizon.",
    palette: [
      { name: 'Hot Pink', hex: '#FF2D87' },
      { name: 'Electric Cyan', hex: '#00D9FF' },
      { name: 'Neon Purple', hex: '#B026FF' },
      { name: 'Vapor Yellow', hex: '#FFE74C' },
      { name: 'Cosmic Black', hex: '#0B0224' },
    ],
    bestLogos: ['wave-mark', 'bolt-z'],
  },
  {
    id: 'nineties',
    number: 5,
    decade: '1996',
    name: 'Splat / Extreme',
    shortName: '90s · Slime',
    tagline: 'Slimed it. Done.',
    positioning:
      'Nickelodeon Slime Time. Lisa Frank trapper keepers. Doritos commercials. Splats, drips, mismatched chunky type, 4-color clash. The brand for the electrician who skateboards to the job site.',
    palette: [
      { name: 'Slime Green', hex: '#7FBC03' },
      { name: 'Bubblegum Pink', hex: '#FF74B1' },
      { name: 'Cyber Cyan', hex: '#00C2D1' },
      { name: 'Sunshine Yellow', hex: '#FFE000' },
      { name: 'Marker Black', hex: '#0E1116' },
    ],
    bestLogos: ['sparky', 'bolt-z'],
  },
]
