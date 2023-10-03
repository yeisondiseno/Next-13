import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
// style
import './card.scss';

interface CardProps {
  urlImage?: string | StaticImageData;
  title?: string;
  footer?: ReactNode;
  children: ReactNode;
}

export const Card = ({ urlImage, title = '', footer, children }: CardProps) => {
  return (
    <article className='m-card'>
      {urlImage && (
        <Image
          className='m-card--img'
          src={urlImage}
          alt={title}
          width={300}
          height={300}
          loading='lazy'
          sizes='(max-width: 768px) 100vw'
        />
      )}
      <div className='m-card--content'>
        {title && <h3>{title}</h3>}
        {children}
      </div>
      {footer && <footer className='m-card--footer'>{footer}</footer>}
    </article>
  );
};
