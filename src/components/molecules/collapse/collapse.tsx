'use client';
import { useState, useRef, ReactNode } from 'react';
// icons
import { ChevronDown, ChevronUp } from '@assets/icons/components';
// style
import './collapse.scss';

interface CollapseProps {
  title?: string;
  children?: ReactNode;
}

export const Collapse = ({ title, children }: CollapseProps) => {
  const [isHeight, setIsHeight] = useState('0');

  const isOpen = isHeight === '0';

  // actions
  const switchCollapse = () => {
    if (!content) return;

    if (isHeight === '0') {
      return setIsHeight(`${content?.current?.scrollHeight}px`);
    }

    setIsHeight('0');
  };

  // ref
  const content = useRef<HTMLDivElement>(null);

  return (
    <div className='m-collapse'>
      <button className='m-collapse--header' onClick={switchCollapse}>
        {title} {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div
        ref={content}
        className={`m-collapse--content ${isOpen ? '' : 'open'}`}
        style={{ maxHeight: isHeight }}
      >
        {children}
      </div>
    </div>
  );
};
