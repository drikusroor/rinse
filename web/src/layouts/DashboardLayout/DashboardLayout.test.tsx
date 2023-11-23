import { render } from '@redwoodjs/testing/web'

import DashboardLayout from './DashboardLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DashboardLayout', () => {
  it('renders successfully', () => {
    mockCurrentUser({
      id: 1,
      email: 'Test User',
      firstName: 'Test',
      lastName: 'User',
    })

    expect(() => {
      render(<DashboardLayout />)
    }).not.toThrow()
  })
})
