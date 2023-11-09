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

import PlayFlashcards from './PlayFlashcards'

const meta: Meta<typeof PlayFlashcards> = {
  component: PlayFlashcards,
}

export default meta

type Story = StoryObj<typeof PlayFlashcards>

export const Primary: Story = {}
