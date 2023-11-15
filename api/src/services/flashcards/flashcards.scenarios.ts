import type { Prisma, Flashcard } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FlashcardCreateArgs>({
  flashcard: {
    one: {
      data: {
        front: ['String', 'Other string'],
        back: ['String', 'Other string'],
        updatedAt: '2023-11-05T20:51:20.941Z',
        deck: {
          create: {
            name: 'String',
            updatedAt: '2023-11-05T20:51:20.941Z',
            user: {
              create: {
                email: 'String9268019',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        front: ['String', 'Other string'],
        back: ['String', 'Other string'],
        updatedAt: '2023-11-05T20:51:20.941Z',
        deck: {
          create: {
            name: 'String',
            updatedAt: '2023-11-05T20:51:20.941Z',
            user: {
              create: {
                email: 'String7646327',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Flashcard, 'flashcard'>
