'use client';
// Libraries
import { useForm, SubmitHandler } from 'react-hook-form';
// components
import { Input, Button, Select } from '@/components/';
// styles
import './exampleForm.scss';

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

type Inputs = {
  example: string;
  number: number;
  exampleRequired: string;
  gender: GenderEnum;
  check: boolean;
};

const ExampleFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <main className='p-example-form container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='p-example-form--content'>
          <Input label='Test' defaultValue='test' {...register('example')} />
          <Input label='Number' type='number' {...register('number')} />
          <Input
            label='Required'
            error={errors.exampleRequired && 'This field is required'}
            {...register('exampleRequired', { required: true })}
          />
          <Select
            label='Select gender'
            error={errors.gender && 'This field is required'}
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'none', label: 'Other' },
            ]}
            {...register('gender', { required: true })}
          />
        </div>
        <Input label='Checkbox' type='checkbox' {...register('check')} />
        <Button variant='primary' type='submit'>
          Send
        </Button>
      </form>
    </main>
  );
};

export default ExampleFormPage;
