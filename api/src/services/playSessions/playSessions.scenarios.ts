import type { Prisma, PlaySession } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PlaySessionCreateArgs>({
  playSession: {
    one: {
      data: {
        updatedAt: '2023-11-21T16:51:07.397Z',
        user: {
          create: {
            email: 'String4230814',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-11-21T16:51:07.397Z',
        user: {
          create: {
            email: 'String1044431',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<PlaySession, 'playSession'>
