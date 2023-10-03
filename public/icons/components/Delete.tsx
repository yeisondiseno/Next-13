import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
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
      d='M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5ZM6 6v14h12V6H6Zm3 3h2v8H9V9Zm4 0h2v8h-2V9Z'
    />
  </svg>
);
export default SvgDelete;
