'use client';
import { ReactNode } from 'react';
// components
import { Portal } from '@components/index';
// icons
import { Close } from '@assets/icons/components';
// styles
import './modal.scss';

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

export const Modal = ({ isOpen = false, onClose, children }: ModalProps) => {
  return (
    <Portal id='modal'>
      <section className={`m-modal ${isOpen ? 'open' : ''}`}>
        <div className='m-modal--container'>
          <button className='m-modal--container--close' onClick={onClose}>
            <Close />
          </button>
          {children}
        </div>
        <div className='m-modal--overlay' onClick={onClose} />
      </section>
    </Portal>
  );
};
