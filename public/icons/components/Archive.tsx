import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArchive = (props: SVGProps<SVGSVGElement>) => (
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
      d='M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3Zm16 6H4v10h16V9Zm-.236-2-1-2H5.237l-1 2h15.527ZM13 14h3l-4 4-4-4h3v-4h2v4Z'
    />
  </svg>
);
export default SvgArchive;
