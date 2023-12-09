import { render } from '@redwoodjs/testing/web'

import ConnectToTeacherForm from './ConnectToTeacherForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ConnectToTeacherForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConnectToTeacherForm />)
    }).not.toThrow()
  })
})
