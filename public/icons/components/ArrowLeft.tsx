import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <g clipPath='url(#Arrow_left_svg__a)'>
      <path
        fill='currentColor'
        d='m16.172 11-5.364-5.363 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2h12.172Z'
      />
    </g>
    <defs>
      <clipPath id='Arrow_left_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowLeft;
