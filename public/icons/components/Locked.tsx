import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLocked = (props: SVGProps<SVGSVGElement>) => (
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
      d='M6 8V7a6 6 0 1 1 12 0v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2Zm13 2H5v10h14V10Zm-8 5.732a2 2 0 1 1 2 0V18h-2v-2.268ZM8 8h8V7a4 4 0 1 0-8 0v1Z'
    />
  </svg>
);
export default SvgLocked;
