import type { PlayConfiguration } from '@prisma/client'

import {
  playConfigurations,
  playConfiguration,
  createPlayConfiguration,
  updatePlayConfiguration,
  deletePlayConfiguration,
} from './playConfigurations'
import type { StandardScenario } from './playConfigurations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('playConfigurations', () => {
  scenario(
    'returns all playConfigurations',
    async (scenario: StandardScenario) => {
      const result = await playConfigurations()

      expect(result.length).toEqual(
        Object.keys(scenario.playConfiguration).length
      )
    }
  )

  scenario(
    'returns a single playConfiguration',
    async (scenario: StandardScenario) => {
      const result = await playConfiguration({
        id: scenario.playConfiguration.one.id,
      })

      expect(result).toEqual(scenario.playConfiguration.one)
    }
  )

  scenario(
    'creates a playConfiguration',
    async (scenario: StandardScenario) => {
      mockCurrentUser({ id: scenario.playConfiguration.two.userId })

      const result = await createPlayConfiguration({
        input: {
          userId: scenario.playConfiguration.two.userId,
          name: 'String',
          updatedAt: '2023-11-25T10:07:45.895Z',
          timeUntilNextFlashcard: 9136595,
          answerMode: 'Manual',
          inverse: true,
        },
      })

      expect(result.userId).toEqual(scenario.playConfiguration.two.userId)
      expect(result.name).toEqual('String')
      expect(result.updatedAt).toEqual(new Date('2023-11-25T10:07:45.895Z'))
      expect(result.timeUntilNextFlashcard).toEqual(9136595)
      expect(result.answerMode).toEqual('Manual')
      expect(result.inverse).toEqual(true)
    }
  )

  scenario(
    'updates a playConfiguration',
    async (scenario: StandardScenario) => {
      mockCurrentUser({ id: scenario.playConfiguration.one.userId })

      const original = (await playConfiguration({
        id: scenario.playConfiguration.one.id,
      })) as PlayConfiguration
      const result = await updatePlayConfiguration({
        id: original.id,
        input: { name: 'String2' },
      })

      expect(result.name).toEqual('String2')
    }
  )

  scenario(
    'deletes a playConfiguration',
    async (scenario: StandardScenario) => {
      const original = (await deletePlayConfiguration({
        id: scenario.playConfiguration.one.id,
      })) as PlayConfiguration
      const result = await playConfiguration({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
