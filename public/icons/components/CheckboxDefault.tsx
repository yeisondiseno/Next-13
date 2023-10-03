import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheckboxDefault = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 20 20'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeWidth={2}
      d='M4 1h12s3 0 3 3v12s0 3-3 3H4s-3 0-3-3V4s0-3 3-3'
    />
  </svg>
);
export default SvgCheckboxDefault;
