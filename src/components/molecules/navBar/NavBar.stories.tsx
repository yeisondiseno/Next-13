import type { Meta, StoryObj } from '@storybook/react';
// Component
import { NavBar } from './navBar';

const meta = {
  title: 'Components/Molecule/NavBar',
  component: NavBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};
