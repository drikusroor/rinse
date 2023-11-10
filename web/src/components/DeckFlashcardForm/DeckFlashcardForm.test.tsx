import { render } from '@redwoodjs/testing/web'

import { makeFlashcard } from 'src/../fixtures/flashcard'

import DeckFlashcardForm from './DeckFlashcardForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FlashcardFormInputs', () => {
  it('renders successfully', () => {
    const onSave = jest.fn()
    const error = null
    const loading = false
    const flashcard = makeFlashcard()

    expect(() => {
      render(
        <DeckFlashcardForm
          onSave={onSave}
          error={error}
          loading={loading}
          flashcard={flashcard}
        />
      )
    }).not.toThrow()
  })
})
