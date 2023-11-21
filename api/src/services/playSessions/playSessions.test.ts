import type { PlaySession } from '@prisma/client'

import {
  playSessions,
  playSession,
  createPlaySession,
  updatePlaySession,
  deletePlaySession,
} from './playSessions'
import type { StandardScenario } from './playSessions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('playSessions', () => {
  scenario('returns all playSessions', async (scenario: StandardScenario) => {
    const result = await playSessions()

    expect(result.length).toEqual(Object.keys(scenario.playSession).length)
  })

  scenario(
    'returns a single playSession',
    async (scenario: StandardScenario) => {
      const result = await playSession({ id: scenario.playSession.one.id })

      expect(result).toEqual(scenario.playSession.one)
    }
  )

  scenario('creates a playSession', async (scenario: StandardScenario) => {
    const result = await createPlaySession({
      input: {
        userId: scenario.playSession.two.userId,
        updatedAt: '2023-11-21T16:51:07.328Z',
      },
    })

    expect(result.userId).toEqual(scenario.playSession.two.userId)
    expect(result.updatedAt).toEqual(new Date('2023-11-21T16:51:07.328Z'))
  })

  scenario('updates a playSession', async (scenario: StandardScenario) => {
    const original = (await playSession({
      id: scenario.playSession.one.id,
    })) as PlaySession
    const result = await updatePlaySession({
      id: original.id,
      input: { updatedAt: '2023-11-22T16:51:07.329Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-11-22T16:51:07.329Z'))
  })

  scenario('deletes a playSession', async (scenario: StandardScenario) => {
    const original = (await deletePlaySession({
      id: scenario.playSession.one.id,
    })) as PlaySession
    const result = await playSession({ id: original.id })

    expect(result).toEqual(null)
  })
})
