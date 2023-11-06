// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import FlashCardFormItem from './FlashCardFormItem'

const meta: Meta<typeof FlashCardFormItem> = {
  component: FlashCardFormItem,
}

export default meta

type Story = StoryObj<typeof FlashCardFormItem>

export const Primary: Story = {}
