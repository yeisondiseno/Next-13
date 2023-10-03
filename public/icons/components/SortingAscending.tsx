import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSortingAscending = (props: SVGProps<SVGSVGElement>) => (
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
      d='m19 3 4 5h-3v12h-2V8h-3l4-5Zm-5 15v2H3v-2h11Zm0-7v2H3v-2h11Zm-2-7v2H3V4h9Z'
    />
  </svg>
);
export default SvgSortingAscending;
