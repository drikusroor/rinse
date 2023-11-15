import type { Flashcard } from '@prisma/client'

import {
  flashcards,
  flashcard,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
} from './flashcards'
import type { StandardScenario } from './flashcards.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('flashcards', () => {
  scenario('returns all flashcards', async (scenario: StandardScenario) => {
    const result = await flashcards()

    expect(result.length).toEqual(Object.keys(scenario.flashcard).length)
  })

  scenario('returns a single flashcard', async (scenario: StandardScenario) => {
    const result = await flashcard({ id: scenario.flashcard.one.id })

    expect(result).toEqual(scenario.flashcard.one)
  })

  scenario('creates a flashcard', async (scenario: StandardScenario) => {
    const result = await createFlashcard({
      input: {
        deckId: scenario.flashcard.two.deckId,
        front: ['String', 'Other string'],
        back: ['String', 'Other string'],
        updatedAt: '2023-11-05T20:51:20.935Z',
      },
    })

    expect(result.deckId).toEqual(scenario.flashcard.two.deckId)
    expect(result.front).toEqual(['String', 'Other string'])
    expect(result.back).toEqual(['String', 'Other string'])
    expect(result.updatedAt).toEqual(new Date('2023-11-05T20:51:20.935Z'))
  })

  scenario('updates a flashcard', async (scenario: StandardScenario) => {
    const original = (await flashcard({
      id: scenario.flashcard.one.id,
    })) as Flashcard
    const result = await updateFlashcard({
      id: original.id,
      input: { front: ['String2'] },
    })

    expect(result.front).toEqual(['String2'])
  })

  scenario('deletes a flashcard', async (scenario: StandardScenario) => {
    const original = (await deleteFlashcard({
      id: scenario.flashcard.one.id,
    })) as Flashcard
    const result = await flashcard({ id: original.id })

    expect(result).toEqual(null)
  })
})
