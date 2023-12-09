import type { Notification } from '@prisma/client'

import {
  notifications,
  notification,
  createNotification,
  updateNotification,
  deleteNotification,
} from './notifications'
import type { StandardScenario } from './notifications.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('notifications', () => {
  scenario('returns all notifications', async (scenario: StandardScenario) => {
    const result = await notifications()

    expect(result.length).toEqual(Object.keys(scenario.notification).length)
  })

  scenario(
    'returns a single notification',
    async (scenario: StandardScenario) => {
      const result = await notification({ id: scenario.notification.one.id })

      expect(result).toEqual(scenario.notification.one)
    }
  )

  scenario('creates a notification', async (scenario: StandardScenario) => {
    const result = await createNotification({
      input: {
        userId: scenario.notification.two.userId,
        title: 'String',
        message: 'String',
        updatedAt: '2023-12-09T20:34:48.690Z',
      },
    })

    expect(result.userId).toEqual(scenario.notification.two.userId)
    expect(result.title).toEqual('String')
    expect(result.message).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-12-09T20:34:48.690Z'))
  })

  scenario('updates a notification', async (scenario: StandardScenario) => {
    const original = (await notification({
      id: scenario.notification.one.id,
    })) as Notification
    const result = await updateNotification({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a notification', async (scenario: StandardScenario) => {
    const original = (await deleteNotification({
      id: scenario.notification.one.id,
    })) as Notification
    const result = await notification({ id: original.id })

    expect(result).toEqual(null)
  })
})
