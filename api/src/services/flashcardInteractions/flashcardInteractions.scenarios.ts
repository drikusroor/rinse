import type { Prisma, FlashcardInteraction } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FlashcardInteractionCreateArgs>({
  flashcardInteraction: {
    one: {
      data: {
        updatedAt: '2023-11-21T17:07:52.172Z',
        startedAt: '2023-11-21T17:07:52.172Z',
        correct: true,
        flashcard: {
          create: {
            front: ['String'],
            back: ['String'],
            updatedAt: '2023-11-21T17:07:52.172Z',
            deck: {
              create: {
                name: 'String',
                updatedAt: '2023-11-21T17:07:52.172Z',
                user: {
                  create: {
                    email: 'String6703681',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
          },
        },
        playSession: {
          create: {
            updatedAt: '2023-11-21T17:07:52.172Z',
            startedAt: '2023-11-21T17:07:52.172Z',
            user: {
              create: {
                email: 'String4033566',
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
        updatedAt: '2023-11-21T17:07:52.172Z',
        startedAt: '2023-11-21T17:07:52.172Z',
        correct: true,
        flashcard: {
          create: {
            front: ['String'],
            back: ['String'],
            updatedAt: '2023-11-21T17:07:52.172Z',
            deck: {
              create: {
                name: 'String',
                updatedAt: '2023-11-21T17:07:52.172Z',
                user: {
                  create: {
                    email: 'String1062591',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
          },
        },
        playSession: {
          create: {
            updatedAt: '2023-11-21T17:07:52.172Z',
            startedAt: '2023-11-21T17:07:52.172Z',
            endedAt: '2023-11-21T17:07:52.172Z',
            user: {
              create: {
                email: 'String1075712',
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

export type StandardScenario = ScenarioData<
  FlashcardInteraction,
  'flashcardInteraction'
>
