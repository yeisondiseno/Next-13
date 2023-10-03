import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
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
      d='M21 4v2h-1l-5 7.5V22H9v-8.5L4 6H3V4h18ZM6.404 6 11 12.894V20h2v-7.106L17.596 6H6.404Z'
    />
  </svg>
);
export default SvgFilter;
