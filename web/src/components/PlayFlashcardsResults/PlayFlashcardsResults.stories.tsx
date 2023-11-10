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

import PlayFlashcardsResults from './PlayFlashcardsResults'

const meta: Meta<typeof PlayFlashcardsResults> = {
  component: PlayFlashcardsResults,
}

export default meta

type Story = StoryObj<typeof PlayFlashcardsResults>

export const Primary: Story = {}
