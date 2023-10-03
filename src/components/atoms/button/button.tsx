import { ReactNode, ComponentPropsWithoutRef } from 'react';
// styles
import './button.scss';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  className?: string;
  large?: 'medium' | 'small';
  rounded?: 'normal' | 'icon';
  variant?: 'primary' | 'secondary' | 'white';
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    className = '',
    variant = '',
    large = 'medium',
    rounded = 'normal',
    children,
  } = props;

  return (
    <button
      {...props}
      className={`
        a-button 
        ${large} 
        ${rounded}
        ${variant} 
        ${className}
      `}
    >
      {children}
    </button>
  );
};
