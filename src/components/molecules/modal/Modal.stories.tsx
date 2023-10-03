import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
// Component
import { Modal, ModalProps } from './modal';
import { Button } from '@/components/';

const meta = {
  title: 'Components/Molecule/Modal',
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

const Template = (props: ModalProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

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
      <Button variant='primary' onClick={() => setIsOpenModal(true)}>
        Click to open
      </Button>

      <Modal onClose={() => setIsOpenModal(false)} isOpen={isOpenModal}>
        {props.children}
      </Modal>
    </div>
  );
};

export const Default: Story = {
  args: {
    children: (
      <>
        <h3>This is a modal</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, eum
          sapiente consectetur a dolor voluptatum dolores incidunt doloribus ex,
          quibusdam, quidem vero maiores cumque aliquam? Rem, animi expedita!
          Cupiditate, mollitia!
        </p>
        <Button variant='secondary'>Click me!</Button>
      </>
    ),
  },
  render: Template,
};
