import type { Meta, StoryObj } from '@storybook/react';
// Component
import { Skeleton } from './skeleton';

const meta = {
  title: 'Components/Atom/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['', 'text', 'circle'],
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: 400,
    height: 150,
  },
};

export const Text: Story = {
  args: {
    width: 400,
    variant: 'text',
  },
};

export const Circle: Story = {
  args: {
    width: 150,
    variant: 'circle',
  },
};
