import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
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
      d='m12 13.173 4.95-4.95 1.414 1.414L12 16 5.636 9.637 7.05 8.223l4.95 4.95Z'
    />
  </svg>
);
export default SvgChevronDown;
