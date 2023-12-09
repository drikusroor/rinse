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

import ConnectToTeacherForm from './ConnectToTeacherForm'

const meta: Meta<typeof ConnectToTeacherForm> = {
  component: ConnectToTeacherForm,
}

export default meta

type Story = StoryObj<typeof ConnectToTeacherForm>

export const Primary: Story = {}
