import { render } from '@redwoodjs/testing/web'

import FlashcardFormInputs from './DeckFlashcardForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FlashcardFormInputs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardFormInputs />)
    }).not.toThrow()
  })
})
