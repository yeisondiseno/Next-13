'use client';
import { useState } from 'react';
// components
import { Modal, Button } from '@/components/';

const ModalExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant='primary' onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div>
          <h2>This is a Modal </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            magni. Et qui aut voluptates fugit quisquam, cum ipsam aliquam
            aperiam nobis. Vero quo error ad suscipit molestiae fugit, iste
            officia!
          </p>
          <br />
          <Button variant='primary' onClick={() => setOpen(false)}>
            Click me to close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalExample;
