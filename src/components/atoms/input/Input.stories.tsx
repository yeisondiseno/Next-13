import type { Meta, StoryObj } from '@storybook/react';
// Component
import { Input } from './input';

const meta = {
  title: 'Components/Atom/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['text', 'date'],
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Name',
    name: 'first-name',
    placeholder: 'Write your name',
  },
};

export const DateInput: Story = {
  args: {
    label: 'Date',
    name: 'date',
    type: 'date',
  },
};

export const CheckInput: Story = {
  args: {
    label: 'Checkbox',
    name: 'check',
    type: 'checkbox',
  },
};
