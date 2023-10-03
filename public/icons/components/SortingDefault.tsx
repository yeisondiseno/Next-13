import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSortingDefault = (props: SVGProps<SVGSVGElement>) => (
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
      d='M16.316 5H4v1.895h12.316V5ZM4 9.263h8.526v1.895H4V9.263Zm0 4.263h4.737v1.895H4v-1.895Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSortingDefault;
