import { Flashcard } from '../types/graphql'

export function makeFlashcard(overrides: Partial<Flashcard> = {}): Flashcard {
  return {
    id: 1,
    deckId: 1,
    front: ['Olá', 'Oi'],
    back: ['Hello', 'Hi'],
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
    ...overrides,
  }
}

export function makeFlashcards(amount = 3): Flashcard[] {
  const flashcards: Flashcard[] = []
  for (let i = 0; i < amount; i++) {
    flashcards.push(makeFlashcard({ id: i }))
  }
  return flashcards
}
