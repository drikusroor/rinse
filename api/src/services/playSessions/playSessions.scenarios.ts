import type { Prisma, PlaySession } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PlaySessionCreateArgs>({
  playSession: {
    one: {
      data: {
        updatedAt: '2023-11-21T17:07:37.081Z',
        startedAt: '2023-11-21T17:07:37.081Z',
        user: {
          create: {
            email: 'String5854730',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-11-21T17:07:37.081Z',
        startedAt: '2023-11-21T17:07:37.081Z',
        user: {
          create: {
            email: 'String7830704',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<PlaySession, 'playSession'>
