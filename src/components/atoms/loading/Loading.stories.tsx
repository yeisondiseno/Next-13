import type { Meta, StoryObj } from '@storybook/react';
// Component
import { Loading } from './loading';

const meta = {
  title: 'Components/Atom/Loading',
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', minWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
  component: Loading,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {};
