import { render } from '@redwoodjs/testing/web'

import Avatar from './Avatar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const user = {
  firstName: 'John',
  email: 'info@example.com',
}

describe('Avatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Avatar user={user} />)
    }).not.toThrow()
  })

  it('renders when the firstName is missing', () => {
    expect(() => {
      render(<Avatar user={{ ...user, firstName: '' }} />)
    }).not.toThrow()
  })
})
