import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
// Component
import Icons from '@assets/icons/icons';

const meta = {
  title: 'Commons/Icons',
  component: Icons,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof Icons>;

export const all: Story = {};
