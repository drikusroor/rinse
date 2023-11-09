import { render } from '@redwoodjs/testing/web'

import PlayOverview from './PlayOverview'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlayOverview', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayOverview />)
    }).not.toThrow()
  })
})
