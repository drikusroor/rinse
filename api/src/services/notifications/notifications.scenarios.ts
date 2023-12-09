import type { Prisma, Notification } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.NotificationCreateArgs>({
  notification: {
    one: {
      data: {
        title: 'String',
        message: 'String',
        updatedAt: '2023-12-09T20:34:48.710Z',
        user: {
          create: {
            email: 'String7382738',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        message: 'String',
        updatedAt: '2023-12-09T20:34:48.710Z',
        user: {
          create: {
            email: 'String8432777',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Notification, 'notification'>
