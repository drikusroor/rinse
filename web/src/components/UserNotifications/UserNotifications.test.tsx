import { render } from '@redwoodjs/testing/web'

import UserNotifications from './UserNotifications'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserNotifications', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserNotifications />)
    }).not.toThrow()
  })
})
