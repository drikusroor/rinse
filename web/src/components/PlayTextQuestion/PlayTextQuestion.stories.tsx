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

// import correctAudio from '../../../public/audio/correct.wav'
// import incorrectAudio from '../../../public/audio/incorrect.wav'
// mock the above

import type { Meta, StoryObj } from '@storybook/react'

import PlayTextQuestion from './PlayTextQuestion'

const meta: Meta<typeof PlayTextQuestion> = {
  component: PlayTextQuestion,
}

export default meta

type Story = StoryObj<typeof PlayTextQuestion>

export const Primary: Story = {}
