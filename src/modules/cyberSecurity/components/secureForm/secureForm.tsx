'use client';
// Libraries
import { useForm, SubmitHandler } from 'react-hook-form';
// components
import { Button, Input } from '@/components';

type Inputs = {
  text: string;
};

const SecureForm = ({ setMark }: { setMark: (value: string) => void }) => {
  // Form
  const { register, watch, handleSubmit } = useForm<Inputs>();

  // action
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    setMark(`
      <p>${data.text}</p>
    `);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label='Ingresar ejemplo' type='text' {...register('text')} />

      <Button variant='primary' type='submit' disabled={!watch('text')}>
        Enviar
      </Button>
    </form>
  );
};

export default SecureForm;
