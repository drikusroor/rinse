import { Deck } from '../types/graphql'

import { makeFlashcards } from './flashcard'

export function makeDeck(overrides: Partial<Deck> = {}): Deck {
  return {
    id: 1,
    name: 'Test Deck',
    description: 'This is a test deck.',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
    flashcards: makeFlashcards(3),
    user: {
      id: 1,
      email: 'info@example.com',
    },
    userId: 1,
    ...overrides,
  }
}

export function makeDecks(amount = 3): Deck[] {
  const decks: Deck[] = []
  for (let i = 0; i < amount; i++) {
    decks.push(makeDeck({ id: i }))
  }
  return decks
}
