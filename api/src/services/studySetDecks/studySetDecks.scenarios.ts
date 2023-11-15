import type { Prisma, StudySetDeck } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StudySetDeckCreateArgs>({
  studySetDeck: {
    one: {
      data: {
        updatedAt: '2023-11-05T20:51:28.773Z',
        studySet: {
          create: {
            deckId: 7793944,
            name: 'String',
            updatedAt: '2023-11-05T20:51:28.773Z',
          },
        },
        deck: {
          create: {
            name: 'String',
            updatedAt: '2023-11-05T20:51:28.773Z',
            user: {
              create: {
                email: 'String9503073',
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
        updatedAt: '2023-11-05T20:51:28.773Z',
        studySet: {
          create: {
            deckId: 9648088,
            name: 'String',
            updatedAt: '2023-11-05T20:51:28.773Z',
          },
        },
        deck: {
          create: {
            name: 'String',
            updatedAt: '2023-11-05T20:51:28.773Z',
            user: {
              create: {
                email: 'String467155',
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

export type StandardScenario = ScenarioData<StudySetDeck, 'studySetDeck'>
