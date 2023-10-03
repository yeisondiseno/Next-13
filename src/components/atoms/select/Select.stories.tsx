import type { Meta, StoryObj } from '@storybook/react';
// Component
import { Select } from './select';

const meta = {
  title: 'Components/Atom/Select',
  component: Select,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Select name',
    options: [
      {
        value: 'jose',
        label: 'Jose',
      },
      {
        value: 'maria',
        label: 'María',
      },
      {
        value: 'pedro',
        label: 'Pedro',
      },
    ],
    'aria-label': 'Select input',
  },
};
