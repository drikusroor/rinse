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

import DeckFlashcardForm from './DeckFlashcardForm'

const meta: Meta<typeof DeckFlashcardForm> = {
  component: DeckFlashcardForm,
}

export default meta

type Story = StoryObj<typeof DeckFlashcardForm>

export const Primary: Story = {}
