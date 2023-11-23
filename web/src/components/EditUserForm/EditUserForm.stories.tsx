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

import EditUserForm from './EditUserForm'

const meta: Meta<typeof EditUserForm> = {
  component: EditUserForm,
}

export default meta

type Story = StoryObj<typeof EditUserForm>

export const Primary: Story = {}
