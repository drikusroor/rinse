import { render } from '@redwoodjs/testing/web'

import { makeFlashcards } from 'src/../fixtures/flashcard'

import PlayFlashcards from './PlayFlashcards'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlayFlashcards', () => {
  it('renders successfully', () => {
    const flashcards = makeFlashcards()

    expect(() => {
      render(<PlayFlashcards flashcards={flashcards} />)
    }).not.toThrow()
  })
})
