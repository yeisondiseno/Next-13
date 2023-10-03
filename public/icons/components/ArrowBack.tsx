import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowBack = (props: SVGProps<SVGSVGElement>) => (
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
      d='M7.828 11H20v2H7.828l5.364 5.365-1.414 1.414L4 12l7.778-7.778 1.414 1.414L7.828 11Z'
    />
  </svg>
);
export default SvgArrowBack;
