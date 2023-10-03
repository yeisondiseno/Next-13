import type { Meta, StoryObj } from '@storybook/react';
// Component
import { Collapse } from './collapse';
import { Button } from '@/components/';

const meta = {
  title: 'Components/Molecule/Collapse',
  component: Collapse,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Default: Story = {
  args: {
    title: 'Collapse Example.',
    children: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, eum
          sapiente consectetur a dolor voluptatum dolores incidunt doloribus ex,
          quibusdam, quidem vero maiores cumque aliquam? Rem, animi expedita!
          Cupiditate, mollitia!
        </p>
        <Button>Click me!</Button>
      </>
    ),
  },
};
