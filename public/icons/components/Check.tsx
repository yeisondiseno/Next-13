import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d='m10 15.171 9.192-9.192 1.415 1.414L10 18l-6.364-6.364 1.414-1.414 4.95 4.95Z'
    />
  </svg>
);
export default SvgCheck;
