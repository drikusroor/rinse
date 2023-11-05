import type { StudySet } from '@prisma/client'

import {
  studySets,
  studySet,
  createStudySet,
  updateStudySet,
  deleteStudySet,
} from './studySets'
import type { StandardScenario } from './studySets.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('studySets', () => {
  scenario('returns all studySets', async (scenario: StandardScenario) => {
    const result = await studySets()

    expect(result.length).toEqual(Object.keys(scenario.studySet).length)
  })

  scenario('returns a single studySet', async (scenario: StandardScenario) => {
    const result = await studySet({ id: scenario.studySet.one.id })

    expect(result).toEqual(scenario.studySet.one)
  })

  scenario('creates a studySet', async () => {
    const result = await createStudySet({
      input: {
        deckId: 6621757,
        name: 'String',
        updatedAt: '2023-11-05T20:51:32.608Z',
      },
    })

    expect(result.deckId).toEqual(6621757)
    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-11-05T20:51:32.608Z'))
  })

  scenario('updates a studySet', async (scenario: StandardScenario) => {
    const original = (await studySet({
      id: scenario.studySet.one.id,
    })) as StudySet
    const result = await updateStudySet({
      id: original.id,
      input: { deckId: 3094311 },
    })

    expect(result.deckId).toEqual(3094311)
  })

  scenario('deletes a studySet', async (scenario: StandardScenario) => {
    const original = (await deleteStudySet({
      id: scenario.studySet.one.id,
    })) as StudySet
    const result = await studySet({ id: original.id })

    expect(result).toEqual(null)
  })
})
