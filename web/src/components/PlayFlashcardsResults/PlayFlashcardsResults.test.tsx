import { render } from '@redwoodjs/testing/web'

import PlayFlashcardsResults from './PlayFlashcardsResults'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlayFlashcardsResults', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayFlashcardsResults />)
    }).not.toThrow()
  })
})
