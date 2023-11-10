import { makeFlashcards } from 'src/../fixtures/flashcard'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  deck: {
    id: 42,
    name: 'Test Deck',
    description: 'This is a test deck.',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
    flashcards: makeFlashcards(3),
  },
})
