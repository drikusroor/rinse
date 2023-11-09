import { render } from '@redwoodjs/testing/web'

import PlayFlashcards from './PlayFlashcards'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlayFlashcards', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayFlashcards />)
    }).not.toThrow()
  })
})
