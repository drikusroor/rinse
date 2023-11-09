import type { Meta, StoryObj } from '@storybook/react'

import PlayPage from './PlayPage'

const meta: Meta<typeof PlayPage> = {
  component: PlayPage,
}

export default meta

type Story = StoryObj<typeof PlayPage>

export const Primary: Story = {}
