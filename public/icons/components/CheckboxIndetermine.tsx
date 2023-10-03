import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheckboxIndetermine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 20 20'
    {...props}
  >
    <rect width={18} height={18} x={1} y={1} fill='currentColor' rx={3} />
    <path stroke='#fff' strokeWidth={1.5} d='M6.5 10h7' />
    <rect
      width={18}
      height={18}
      x={1}
      y={1}
      stroke='currentColor'
      strokeWidth={2}
      rx={3}
    />
  </svg>
);
export default SvgCheckboxIndetermine;
