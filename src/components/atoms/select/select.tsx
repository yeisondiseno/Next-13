import { ComponentPropsWithoutRef, forwardRef } from 'react';
// icons
import { ChevronDown } from '@assets/icons/components';
// Styles
import './select.scss';

type Options = {
  value: string;
  label: string;
};

type Ref = HTMLSelectElement;

interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  label?: string;
  options?: Options[];
  error?: string;
}

export const Select = forwardRef<Ref, SelectProps>((props, ref) => {
  const { label, id, name, options, error } = props;

  return (
    <div className={`a-select ${error ? 'error' : ''}`}>
      <label htmlFor={id}>{label}</label>

      <div className='a-select--container'>
        <select name={name} {...props} ref={ref}>
          {options?.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <button
          className='a-select--chevron'
          type='button'
          aria-label={`mark select from ${name}`}
        >
          <ChevronDown />
        </button>
      </div>

      {error && <span className='a-select--error'>{error}*</span>}
    </div>
  );
});
