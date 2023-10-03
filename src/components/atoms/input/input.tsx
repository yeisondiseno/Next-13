import { ComponentPropsWithoutRef, forwardRef } from 'react';
// icons
import { Calendar } from '@assets/icons/components';
// styles
import './input.scss';

type Ref = HTMLInputElement;

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<Ref, InputProps>((props: InputProps, ref) => {
  const { label, name, type, error } = props;

  return (
    <div
      className={`a-input ${error ? 'error' : ''} ${
        type === 'checkbox' ? 'checkbox' : ''
      }`}
    >
      <div className='a-input--container'>
        <label htmlFor={name}>{label}</label>
        <input ref={ref} {...props} />
        {type === 'date' && (
          <button className='a-input--date' type='button'>
            <Calendar />
          </button>
        )}
      </div>
      {error && <span className='a-input--error'>{error}*</span>}
    </div>
  );
});
