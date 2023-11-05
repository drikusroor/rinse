import type { StudySetDeck } from '@prisma/client'

import {
  studySetDecks,
  studySetDeck,
  createStudySetDeck,
  updateStudySetDeck,
  deleteStudySetDeck,
} from './studySetDecks'
import type { StandardScenario } from './studySetDecks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('studySetDecks', () => {
  scenario('returns all studySetDecks', async (scenario: StandardScenario) => {
    const result = await studySetDecks()

    expect(result.length).toEqual(Object.keys(scenario.studySetDeck).length)
  })

  scenario(
    'returns a single studySetDeck',
    async (scenario: StandardScenario) => {
      const result = await studySetDeck({ id: scenario.studySetDeck.one.id })

      expect(result).toEqual(scenario.studySetDeck.one)
    }
  )

  scenario('creates a studySetDeck', async (scenario: StandardScenario) => {
    const result = await createStudySetDeck({
      input: {
        studySetId: scenario.studySetDeck.two.studySetId,
        deckId: scenario.studySetDeck.two.deckId,
        updatedAt: '2023-11-05T20:51:28.767Z',
      },
    })

    expect(result.studySetId).toEqual(scenario.studySetDeck.two.studySetId)
    expect(result.deckId).toEqual(scenario.studySetDeck.two.deckId)
    expect(result.updatedAt).toEqual(new Date('2023-11-05T20:51:28.767Z'))
  })

  scenario('updates a studySetDeck', async (scenario: StandardScenario) => {
    const original = (await studySetDeck({
      id: scenario.studySetDeck.one.id,
    })) as StudySetDeck
    const result = await updateStudySetDeck({
      id: original.id,
      input: { updatedAt: '2023-11-06T20:51:28.767Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-11-06T20:51:28.767Z'))
  })

  scenario('deletes a studySetDeck', async (scenario: StandardScenario) => {
    const original = (await deleteStudySetDeck({
      id: scenario.studySetDeck.one.id,
    })) as StudySetDeck
    const result = await studySetDeck({ id: original.id })

    expect(result).toEqual(null)
  })
})
