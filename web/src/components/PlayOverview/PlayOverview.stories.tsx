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

import PlayOverview from './PlayOverview'

const meta: Meta<typeof PlayOverview> = {
  component: PlayOverview,
}

export default meta

type Story = StoryObj<typeof PlayOverview>

export const Primary: Story = {}
