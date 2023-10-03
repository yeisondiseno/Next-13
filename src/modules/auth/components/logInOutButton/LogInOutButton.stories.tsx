import type { Meta, StoryObj } from '@storybook/react';
// Component
import LogInOutButton from './logInOutButton';

const meta = {
  title: 'Modules/Auth/LogInOutButton',
  component: LogInOutButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof LogInOutButton>;

export default meta;
type Story = StoryObj<typeof LogInOutButton>;

export const Default: Story = {
  args: {
    children: 'Logout',
  },
};
