import type { Prisma, PlayConfiguration } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PlayConfigurationCreateArgs>({
  playConfiguration: {
    one: {
      data: {
        name: 'String',
        updatedAt: '2023-11-25T10:07:45.902Z',
        timeUntilNextFlashcard: 7355442,
        answerMode: 'Manual',
        inverse: true,
        user: {
          create: {
            email: 'String6102097',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        updatedAt: '2023-11-25T10:07:45.902Z',
        timeUntilNextFlashcard: 8784624,
        answerMode: 'Manual',
        inverse: true,
        user: {
          create: {
            email: 'String4821239',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  PlayConfiguration,
  'playConfiguration'
>
