import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFileAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d='M15 4H5v16h14V8h-4V4ZM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992ZM11 11V8h2v3h3v2h-3v3h-2v-3H8v-2h3Z'
    />
  </svg>
);
export default SvgFileAdd;
