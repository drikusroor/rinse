import type { Deck } from '@prisma/client'

import { decks, deck, createDeck, updateDeck, deleteDeck } from './decks'
import type { StandardScenario } from './decks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('decks', () => {
  scenario('returns all decks', async (scenario: StandardScenario) => {
    const result = await decks()

    expect(result.length).toEqual(Object.keys(scenario.deck).length)
  })

  scenario('returns a single deck', async (scenario: StandardScenario) => {
    const result = await deck({ id: scenario.deck.one.id })

    expect(result).toEqual(scenario.deck.one)
  })

  scenario('creates a deck', async (scenario: StandardScenario) => {
    const result = await createDeck({
      input: {
        userId: scenario.deck.two.userId,
        name: 'String',
        updatedAt: '2023-11-05T20:50:11.088Z',
      },
    })

    expect(result.userId).toEqual(scenario.deck.two.userId)
    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-11-05T20:50:11.088Z'))
  })

  scenario('updates a deck', async (scenario: StandardScenario) => {
    const original = (await deck({ id: scenario.deck.one.id })) as Deck
    const result = await updateDeck({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a deck', async (scenario: StandardScenario) => {
    const original = (await deleteDeck({ id: scenario.deck.one.id })) as Deck
    const result = await deck({ id: original.id })

    expect(result).toEqual(null)
  })
})
