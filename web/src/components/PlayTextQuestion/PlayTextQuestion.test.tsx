import { render } from '@redwoodjs/testing/web'

import { makeFlashcard } from 'src/../fixtures/flashcard'

import PlayTextQuestion from './PlayTextQuestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlayTextQuestion', () => {
  it('renders successfully', () => {
    const flashcard = makeFlashcard()
    const onCorrect = jest.fn()
    const onIncorrect = jest.fn()

    expect(() => {
      render(
        <PlayTextQuestion
          flashcard={flashcard}
          onCorrect={onCorrect}
          onIncorrect={onIncorrect}
        />
      )
    }).not.toThrow()
  })
})
