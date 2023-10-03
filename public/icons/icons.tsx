'use client';
import { FC } from 'react';
// icons
import * as IconsList from './components/index';
// styles
import './icons.scss';

const Icons = () => {
  const iconsNames = Object.keys(IconsList);
  const iconObject = IconsList as Record<string, FC>;

  return (
    <div className='icons'>
      {iconsNames.map((name: string) => {
        const Icon = iconObject[name];
        return (
          <div className='icons--content' key={name}>
            <div className='icons--content--icon'>
              <Icon />
            </div>
            <p className='bold'>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Icons;
