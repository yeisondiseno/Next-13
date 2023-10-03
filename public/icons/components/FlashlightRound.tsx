import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlashlightRound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 28 28'
    {...props}
  >
    <rect width={28} height={28} fill='#78819D' rx={14} />
    <path
      fill='#fff'
      d='M14.834 12.333h5.833l-7.5 10.834v-7.5H7.334l7.5-10.834v7.5Z'
    />
  </svg>
);
export default SvgFlashlightRound;
