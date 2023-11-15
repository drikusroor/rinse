import type { Prisma, Deck } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DeckCreateArgs>({
  deck: {
    one: {
      data: {
        name: 'String',
        updatedAt: '2023-11-05T20:50:11.094Z',
        user: {
          create: {
            email: 'String1762361',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        updatedAt: '2023-11-05T20:50:11.094Z',
        user: {
          create: {
            email: 'String2781439',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Deck, 'deck'>
