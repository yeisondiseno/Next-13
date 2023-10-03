import * as React from 'react';
import type { SVGProps } from 'react';
const SvgForward = (props: SVGProps<SVGSVGElement>) => (
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
      d='M13 14h-2a8.999 8.999 0 0 0-7.968 4.81C3.011 18.54 3 18.27 3 18 3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5V14Zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.982 7.982 0 0 0-6.057 2.773A10.987 10.987 0 0 1 11 12Z'
    />
  </svg>
);
export default SvgForward;
