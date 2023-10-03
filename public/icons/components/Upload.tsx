import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7Zm9-10v7h-2V9H6l6-6 6 6h-5Z'
    />
  </svg>
);
export default SvgUpload;
