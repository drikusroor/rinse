import type { Prisma, FlashcardInteraction } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FlashcardInteractionCreateArgs>({
  flashcardInteraction: {
    one: {
      data: {
        updatedAt: '2023-11-21T16:50:43.399Z',
        correct: true,
        flashcard: {
          create: {
            front: 'String',
            back: 'String',
            updatedAt: '2023-11-21T16:50:43.399Z',
            deck: {
              create: {
                name: 'String',
                updatedAt: '2023-11-21T16:50:43.399Z',
                user: {
                  create: {
                    email: 'String3546236',
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
            updatedAt: '2023-11-21T16:50:43.399Z',
            user: {
              create: {
                email: 'String4561250',
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
        updatedAt: '2023-11-21T16:50:43.399Z',
        correct: true,
        flashcard: {
          create: {
            front: 'String',
            back: 'String',
            updatedAt: '2023-11-21T16:50:43.399Z',
            deck: {
              create: {
                name: 'String',
                updatedAt: '2023-11-21T16:50:43.399Z',
                user: {
                  create: {
                    email: 'String1316795',
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
            updatedAt: '2023-11-21T16:50:43.399Z',
            user: {
              create: {
                email: 'String3835705',
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
