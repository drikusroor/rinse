import { render } from '@redwoodjs/testing/web'

import Teachers from './Teachers'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Teachers', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Teachers />)
    }).not.toThrow()
  })
})
