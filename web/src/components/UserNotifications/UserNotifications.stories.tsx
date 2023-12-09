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

import UserNotifications from './UserNotifications'

const meta: Meta<typeof UserNotifications> = {
  component: UserNotifications,
}

export default meta

type Story = StoryObj<typeof UserNotifications>

export const Primary: Story = {}
