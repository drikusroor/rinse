import { render } from '@redwoodjs/testing/web'

import { makeFlashcard } from 'src/../fixtures/flashcard'

import PlayFlashcard from './PlayFlashcard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlayFlashcard', () => {
  it('renders successfully', () => {
    const flashcard = makeFlashcard()
    const onCorrect = jest.fn()
    const onIncorrect = jest.fn()

    expect(() => {
      render(
        <PlayFlashcard
          flashcard={flashcard}
          onCorrect={onCorrect}
          onIncorrect={onIncorrect}
        />
      )
    }).not.toThrow()
  })
})
