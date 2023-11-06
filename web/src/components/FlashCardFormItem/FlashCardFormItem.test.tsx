import { render } from '@redwoodjs/testing/web'

import FlashCardFormItem from './FlashCardFormItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FlashCardFormItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashCardFormItem />)
    }).not.toThrow()
  })
})
