import { StudySet } from '../types/graphql'

import { makeDeck } from './deck'

export function makeStudySet(overrides: Partial<StudySet> = {}): StudySet {
  return {
    id: 1,
    name: 'Test StudySet',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
    user: {
      id: 1,
      email: 'info@example.com',
    },
    userId: 1,
    studySetDecks: [
      {
        id: 1,
        deck: makeDeck({ id: 1 }),
        deckId: 1,
        studySetId: 1,
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      },
    ],
    ...overrides,
  }
}

export function makeStudySets(amount = 3): StudySet[] {
  const studySets: StudySet[] = []
  for (let i = 0; i < amount; i++) {
    studySets.push(makeStudySet({ id: i }))
  }
  return studySets
}
