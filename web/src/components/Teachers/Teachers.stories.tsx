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

import Teachers from './Teachers'

const meta: Meta<typeof Teachers> = {
  component: Teachers,
}

export default meta

type Story = StoryObj<typeof Teachers>

export const Primary: Story = {}
