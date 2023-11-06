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

import FlashcardFormInputs from './DeckFlashcardForm'

const meta: Meta<typeof FlashcardFormInputs> = {
  component: FlashcardFormInputs,
}

export default meta

type Story = StoryObj<typeof FlashcardFormInputs>

export const Primary: Story = {}
