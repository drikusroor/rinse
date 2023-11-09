import { render } from '@redwoodjs/testing/web'

import PlayFlashcard from './PlayFlashcard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlayFlashcard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayFlashcard />)
    }).not.toThrow()
  })
})
