import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUnarchive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <g clipPath='url(#Unarchive_svg__a)'>
      <path
        fill='currentColor'
        d='m20 3 2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3h16Zm0 6H4v10h16V9Zm-8 1 4 4h-3v4h-2v-4H8l4-4Zm6.764-5H5.236l-.999 2h15.527l-1-2Z'
      />
    </g>
    <defs>
      <clipPath id='Unarchive_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUnarchive;
