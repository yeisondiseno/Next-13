import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFullScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <g clipPath='url(#Full_screen_svg__a)'>
      <path
        fill='currentColor'
        d='M20 3h2v6h-2V5h-4V3h4ZM4 3h4v2H4v4H2V3h2Zm16 16v-4h2v6h-6v-2h4ZM4 19h4v2H2v-6h2v4Z'
      />
    </g>
    <defs>
      <clipPath id='Full_screen_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFullScreen;
