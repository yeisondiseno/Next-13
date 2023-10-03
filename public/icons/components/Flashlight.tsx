import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlashlight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 20 20'
    {...props}
  >
    <path
      fill='#1E2D5C'
      d='M10.833 8.333h5.834l-7.5 10.834v-7.5H3.333l7.5-10.834v7.5Z'
    />
  </svg>
);
export default SvgFlashlight;
