import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSortingDesc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 20 20'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M19 5H7v1.895h12V5ZM7 9.263h8.526v1.895H7V9.263Zm0 4.263h4.737v1.895H7v-1.895Z'
      clipRule='evenodd'
    />
    <path fill='currentColor' d='M3.75 5v7.333H6L3 16l-3-3.667h2.25V5h1.5Z' />
  </svg>
);
export default SvgSortingDesc;
