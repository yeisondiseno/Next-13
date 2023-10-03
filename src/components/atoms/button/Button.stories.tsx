import type { Meta, StoryObj } from '@storybook/react';
// icons
import { Add } from '@assets/icons/components';
// Component
import { ButtonProps, Button } from './button';

const meta = {
  title: 'Components/Atom/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'onClick' },
    large: {
      control: { type: 'select' },
      options: ['medium', 'small'],
    },
    rounded: {
      control: { type: 'select' },
      options: ['normal', 'icon'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'white'],
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

const Template = (props: ButtonProps) => {
  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button {...props}>{props.children}</Button>
      <br />
      <Button {...props}>{props.children}</Button>
      <br />
      <Button {...props} large='small'>
        {props.children}
      </Button>
    </div>
  );
};

const TemplateRounded = (props: ButtonProps) => {
  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button {...props} rounded='icon'>
        <Add />
      </Button>
      <br />
      <Button {...props} large='small' rounded='icon'>
        <Add />
      </Button>
    </div>
  );
};

export const Default: Story = {
  args: {
    children: 'Click me!',
  },
  render: Template,
};

export const Primary: Story = {
  args: {
    children: 'Click me!',
    variant: 'primary',
  },
  render: Template,
};

export const Secondary: Story = {
  args: {
    children: 'Click me!',
    variant: 'secondary',
  },
  render: Template,
};

export const White: Story = {
  args: {
    children: 'Click me!',
    variant: 'white',
  },
  render: Template,
};

export const PrimaryIcon: Story = {
  args: {
    variant: 'primary',
    'aria-label': 'rounded plus button',
  },
  render: TemplateRounded,
};

export const SecondaryIcon: Story = {
  args: {
    variant: 'secondary',
    'aria-label': 'rounded plus button',
  },
  render: TemplateRounded,
};
