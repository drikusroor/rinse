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
import { FaTrash } from 'react-icons/fa'

import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Click me',
    variant: 'secondary',
  },
}

export const Danger: Story = {
  args: {
    children: 'Click me',
    variant: 'danger',
  },
}

export const Small: Story = {
  args: {
    children: 'Click me',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    children: 'Click me',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    children: 'Click me',
    size: 'lg',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <FaTrash className="mr-2" />
        Delete
      </>
    ),
  },
}
