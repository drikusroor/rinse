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

import PlayTextQuestion from './PlayTextQuestion'

const meta: Meta<typeof PlayTextQuestion> = {
  component: PlayTextQuestion,
}

export default meta

type Story = StoryObj<typeof PlayTextQuestion>

export const Primary: Story = {}
