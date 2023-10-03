'use client';
import { useState } from 'react';
// components
import { Input, Button } from '@/components/';

// default
const defaultState = {
  text: '',
};

const UnSecureForm = ({ setMark }: { setMark: (value: string) => void }) => {
  // states
  const [formValue, setFormValue] = useState(defaultState);

  // state actions
  const handledFormValue = ({
    newValue,
    key,
  }: {
    newValue: string;
    key: string;
  }) => {
    setFormValue((prev) => ({ ...prev, [key]: newValue }));
  };

  // actions
  const handledOnSubmit = () =>
    setMark(`
      <p>${formValue.text}</p>
    `);

  return (
    <div>
      <Input
        label='Ingresar ejemplo'
        type='text'
        id='text'
        value={formValue.text}
        onChange={(e) =>
          handledFormValue({ newValue: e.target.value, key: 'text' })
        }
      />

      <Button
        variant='primary'
        onClick={handledOnSubmit}
        disabled={!formValue.text}
      >
        Enviar
      </Button>
    </div>
  );
};

export default UnSecureForm;
