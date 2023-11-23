import { render } from '@redwoodjs/testing/web'

import EditUserForm from './EditUserForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditUserForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditUserForm />)
    }).not.toThrow()
  })
})
