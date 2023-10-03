import type { Meta, StoryObj } from '@storybook/react';
// Component
import { Card } from './card';
import { Button } from '@/components/';
// assets
import img from '@assets/img/example.jpg';

const meta = {
  title: 'Components/Molecule/Card',
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Title Card.',
    children: (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, eum
        sapiente consectetur a dolor voluptatum dolores incidunt doloribus ex,
        quibusdam, quidem vero maiores cumque aliquam? Rem, animi expedita!
        Cupiditate, mollitia!
      </p>
    ),
  },
};

export const CardImage: Story = {
  args: {
    title: 'Title Card.',
    urlImage: img,
    children: (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, eum
        sapiente consectetur a dolor voluptatum dolores incidunt doloribus ex,
        quibusdam, quidem vero maiores cumque aliquam? Rem, animi expedita!
        Cupiditate, mollitia!
      </p>
    ),
  },
};

export const CardFooter: Story = {
  args: {
    title: 'Title Card.',
    urlImage: img,
    children: (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, eum
        sapiente consectetur a dolor voluptatum dolores incidunt doloribus ex,
        quibusdam, quidem vero maiores cumque aliquam? Rem, animi expedita!
        Cupiditate, mollitia!
      </p>
    ),
    footer: <Button variant='primary'>Click me!</Button>,
  },
};
