import type { LogoDefinition } from '@/logos/types'

import { Sparky } from '@/logos/Sparky'
import { BoltZ } from '@/logos/BoltZ'
import { LiveWire } from '@/logos/LiveWire'
import { KilowattCrest } from '@/logos/KilowattCrest'
import { WaveMark } from '@/logos/WaveMark'

export interface LogoConcept extends LogoDefinition {
  // Friendly nicknames so the user can say "I like #3"
  shortName: string
  // Which brand directions this concept fits naturally
  bestFor: string[]
  // What kind of shape this is — to make the spread feel meaningfully different
  shape: string
}

export const logos: LogoConcept[] = [
  {
    id: 'sparky',
    number: 1,
    name: 'Sparky the Mascot',
    shortName: 'Sparky',
    description:
      'A friendly cartoon lightning bolt with eyes, blush, and a smile. The brand has a face — kids will draw him on the fridge, and he can star in TikToks. Goes everywhere from truck doors to coloring sheets.',
    bestFor: ['Cartoon Mascot', 'Atomic Mid-Century'],
    shape: 'Cartoon character',
    Component: Sparky,
  },
  {
    id: 'bolt-z',
    number: 2,
    name: 'Bolt-Z Monogram',
    shortName: 'Bolt-Z',
    description:
      'A single chunky letter Z whose diagonal stroke is drawn as a lightning bolt. Reads as Z and as electrical current at the same time. One mark, one company — clean, modern, scales to a favicon.',
    bestFor: ['Modern Trade-Tech', 'Quiet Pro'],
    shape: 'Letterform monogram',
    Component: BoltZ,
  },
  {
    id: 'live-wire',
    number: 3,
    name: 'Live Wire',
    shortName: 'Live Wire',
    description:
      'Homage to Reddy Kilowatt and the postwar utility-mascot tradition. A walking, smiling figure with a lightbulb head, lightning-bolt torso, and two-prong-plug feet. Pure 1957 — reads as friendly authority.',
    bestFor: ['Atomic Mid-Century'],
    shape: 'Anthropomorphic figure',
    Component: LiveWire,
  },
  {
    id: 'kilowatt-crest',
    number: 4,
    name: 'Kilowatt Crest',
    shortName: 'The Crest',
    description:
      'Heraldic shield with crossed tools (screwdriver + lineman\'s pliers), a vertical bolt, Rocky peaks, and an EST. 2026 · DENVER banner. Trade-craftsman authority — the badge that goes on a weatherproof patch on the truck door.',
    bestFor: ['Mountain Heritage', 'Quiet Pro'],
    shape: 'Heraldic badge',
    Component: KilowattCrest,
  },
  {
    id: 'wave-mark',
    number: 5,
    name: 'Wave Mark',
    shortName: 'Wave',
    description:
      'A single geometric stroke that reads simultaneously as a lightning bolt and a sine-wave signal. No face, no badge — pure shape. Lives well as an app icon, scales effortlessly, and feels like a software brand built by tradespeople.',
    bestFor: ['Modern Trade-Tech'],
    shape: 'Abstract geometric',
    Component: WaveMark,
  },
]
