import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
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
      d='m13.172 12-4.95-4.95 1.414-1.415L16 12l-6.364 6.364-1.414-1.414 4.95-4.95Z'
    />
  </svg>
);
export default SvgChevronRight;
