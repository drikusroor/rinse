import type { FlashcardInteraction } from '@prisma/client'

import {
  flashcardInteractions,
  flashcardInteraction,
  createFlashcardInteraction,
  updateFlashcardInteraction,
  deleteFlashcardInteraction,
} from './flashcardInteractions'
import type { StandardScenario } from './flashcardInteractions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('flashcardInteractions', () => {
  scenario(
    'returns all flashcardInteractions',
    async (scenario: StandardScenario) => {
      const result = await flashcardInteractions()

      expect(result.length).toEqual(
        Object.keys(scenario.flashcardInteraction).length
      )
    }
  )

  scenario(
    'returns a single flashcardInteraction',
    async (scenario: StandardScenario) => {
      const result = await flashcardInteraction({
        id: scenario.flashcardInteraction.one.id,
      })

      expect(result).toEqual(scenario.flashcardInteraction.one)
    }
  )

  scenario(
    'creates a flashcardInteraction',
    async (scenario: StandardScenario) => {
      const result = await createFlashcardInteraction({
        input: {
          flashcardId: scenario.flashcardInteraction.two.flashcardId,
          updatedAt: '2023-11-21T16:50:43.267Z',
          correct: true,
          playSessionId: scenario.flashcardInteraction.two.playSessionId,
        },
      })

      expect(result.flashcardId).toEqual(
        scenario.flashcardInteraction.two.flashcardId
      )
      expect(result.updatedAt).toEqual(new Date('2023-11-21T16:50:43.267Z'))
      expect(result.correct).toEqual(true)
      expect(result.playSessionId).toEqual(
        scenario.flashcardInteraction.two.playSessionId
      )
    }
  )

  scenario(
    'updates a flashcardInteraction',
    async (scenario: StandardScenario) => {
      const original = (await flashcardInteraction({
        id: scenario.flashcardInteraction.one.id,
      })) as FlashcardInteraction
      const result = await updateFlashcardInteraction({
        id: original.id,
        input: { updatedAt: '2023-11-22T16:50:43.268Z' },
      })

      expect(result.updatedAt).toEqual(new Date('2023-11-22T16:50:43.268Z'))
    }
  )

  scenario(
    'deletes a flashcardInteraction',
    async (scenario: StandardScenario) => {
      const original = (await deleteFlashcardInteraction({
        id: scenario.flashcardInteraction.one.id,
      })) as FlashcardInteraction
      const result = await flashcardInteraction({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
