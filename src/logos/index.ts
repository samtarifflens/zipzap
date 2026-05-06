import type { LogoDefinition } from '@/logos/types'

import { BoltBadge } from '@/logos/BoltBadge'
import { ZZMonogram } from '@/logos/ZZMonogram'
import { Sparky } from '@/logos/Sparky'
import { PlugFace } from '@/logos/PlugFace'
import { MileHigh } from '@/logos/MileHigh'
import { ServicePatch } from '@/logos/ServicePatch'

export const logos: LogoDefinition[] = [
  {
    id: 'bolt-badge',
    number: 1,
    name: 'Bolt Badge',
    description:
      "1950s service-station badge — navy ring, sunshine disc, perimeter text reading 'ZIP ZAP · DENVER, CO'. Stamps onto invoices, business cards, and patches with zero loss of identity.",
    Component: BoltBadge,
  },
  {
    id: 'sparky',
    number: 2,
    name: 'Sparky',
    description:
      'The mascot — a friendly cartoon lightning bolt with eyes, blush, and a smile. Goes on truck doors, hard hats, and apparel. Kids will draw him on the fridge.',
    Component: Sparky,
  },
  {
    id: 'plug-face',
    number: 3,
    name: 'Plug Face',
    description:
      'A wall outlet that reads as a face — two prongs are eyes, the ground hole is a smile. Whimsical, memorable, immediately legible.',
    Component: PlugFace,
  },
  {
    id: 'mile-high',
    number: 4,
    name: 'Mile-High',
    description:
      'Three Rocky peaks with a lightning bolt cutting through the alpine sky. Wears the Denver provenance proudly. Best at hero scale.',
    Component: MileHigh,
  },
  {
    id: 'service-patch',
    number: 5,
    name: 'Service Patch',
    description:
      'Vintage workwear oval with a stitched border. The full lockup baked into the mark — handy for invoices, social profile pics, and embroidered uniform patches.',
    Component: ServicePatch,
  },
  {
    id: 'zz-monogram',
    number: 6,
    name: 'ZZ Monogram',
    description:
      'Two chunky Z-letters interlocked into a single zig-zag silhouette. Use as a favicon, app icon, or apparel hit when you need just a mark.',
    Component: ZZMonogram,
  },
]
