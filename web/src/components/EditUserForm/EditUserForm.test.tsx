import { render } from '@redwoodjs/testing/web'

import EditUserForm from './EditUserForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditUserForm', () => {
  it('renders successfully', () => {
    const user = {
      id: 1,
      email: 'info@example.com',
      firstName: 'John',
      lastName: 'Doe',
    }

    const onSave = jest.fn()

    expect(() => {
      render(<EditUserForm user={user} onSave={onSave} />)
    }).not.toThrow()
  })
})
